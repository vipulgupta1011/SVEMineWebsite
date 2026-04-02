const crypto = require("crypto");
const { get, list, put } = require("@vercel/blob");

const LEADS_PREFIX = "leads/";
const isBlobConfigured = Boolean(process.env.BLOB_READ_WRITE_TOKEN);
const isVercelRuntime = process.env.VERCEL === "1";

let database;

function getDatabase() {
    if (!database) {
        database = require("./database");
    }

    return database;
}

function createLeadRecord(input) {
    return {
        id: crypto.randomUUID(),
        first_name: input.first_name || "",
        last_name: input.last_name || "",
        email: input.email,
        message: input.message || "",
        timestamp: new Date().toISOString(),
    };
}

function saveLeadToSqlite(lead) {
    return new Promise((resolve, reject) => {
        const db = getDatabase();
        const sql = `
            INSERT INTO submissions (first_name, last_name, email, message, timestamp)
            VALUES (?, ?, ?, ?, ?)
        `;
        const params = [
            lead.first_name,
            lead.last_name,
            lead.email,
            lead.message,
            lead.timestamp,
        ];

        db.run(sql, params, function onInsert(err) {
            if (err) {
                reject(new Error(`SQLite insert failed: ${err.message}`));
                return;
            }

            resolve({ ...lead, id: this.lastID });
        });
    });
}

async function saveLeadToBlob(lead) {
    const pathname = `${LEADS_PREFIX}${lead.timestamp}-${lead.id}.json`;

    await put(pathname, JSON.stringify(lead, null, 2), {
        access: "private",
        addRandomSuffix: false,
        contentType: "application/json",
    });

    return lead;
}

function listLeadsFromSqlite() {
    return new Promise((resolve, reject) => {
        const db = getDatabase();
        db.all(
            `
                SELECT id, first_name, last_name, email, message, timestamp
                FROM submissions
                ORDER BY timestamp DESC
            `,
            (err, rows) => {
                if (err) {
                    reject(new Error(`SQLite query failed: ${err.message}`));
                    return;
                }

                resolve(rows);
            }
        );
    });
}

async function getBlobJson(pathname) {
    const result = await get(pathname, { access: "private" });

    if (!result || result.statusCode !== 200 || !result.stream) {
        return null;
    }

    return new Response(result.stream).json();
}

async function listLeadsFromBlob() {
    let cursor;
    let hasMore = true;
    const blobs = [];

    while (hasMore) {
        const page = await list({ cursor, prefix: LEADS_PREFIX });
        blobs.push(...page.blobs);
        hasMore = page.hasMore;
        cursor = page.cursor;
    }

    const leads = await Promise.all(
        blobs.map(async (blob) => {
            try {
                return await getBlobJson(blob.pathname);
            } catch (error) {
                console.error(`Blob read failed for ${blob.pathname}:`, error.message);
                return null;
            }
        })
    );

    return leads
        .filter(Boolean)
        .sort((left, right) => new Date(right.timestamp) - new Date(left.timestamp));
}

async function saveLead(input) {
    const lead = createLeadRecord(input);

    if (isBlobConfigured) {
        return saveLeadToBlob(lead);
    }

    if (isVercelRuntime) {
        throw new Error("Lead storage is not configured. Set BLOB_READ_WRITE_TOKEN on Vercel.");
    }

    return saveLeadToSqlite(lead);
}

async function listLeads() {
    if (isBlobConfigured) {
        return listLeadsFromBlob();
    }

    if (isVercelRuntime) {
        throw new Error("Lead storage is not configured. Set BLOB_READ_WRITE_TOKEN on Vercel.");
    }

    return listLeadsFromSqlite();
}

module.exports = {
    listLeads,
    saveLead,
};
