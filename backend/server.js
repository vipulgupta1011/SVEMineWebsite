const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./database");
require("dotenv").config();
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3001;

// Middleware
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    credentials: true
}));
app.use(bodyParser.json());

// Initialize Nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Routes
app.post("/api/save-contact", (req, res) => {
    const { firstName, lastName, email, message } = req.body;

    if (!email || !email.includes("@")) {
        return res.status(400).json({ error: "Invalid email address" });
    }

    const sql = `INSERT INTO submissions (first_name, last_name, email, message) VALUES (?, ?, ?, ?)`;
    const params = [firstName, lastName, email, message];

    db.run(sql, params, async function (err) {
        if (err) {
            console.error("Database Error:", err.message);
            return res.status(500).json({ error: "Database error" });
        }

        // Send response to frontend IMMEDIATELY so the UI doesn't crash
        res.status(201).json({ message: "Success", id: this.lastID });

        // Run email dispatch in the background
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            try {
                // Customer Auto-reply
                await transporter.sendMail({
                    from: `"SVE Interior" <${process.env.EMAIL_USER}>`, // Custom sender name
                    to: email,
                    subject: "Thank you for contacting SVE Interior",
                    html: `
                        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
                            <h2 style="color: #bc8f8f;">Hello ${firstName},</h2>
                            <p>Thank you for reaching out to <strong>SVE Interior</strong>.</p>
                            <p>We have received your message and our design team led by <strong>Yash and Nidhi Mamoria</strong> and will review your requirements shortly.</p>
                            <hr style="border: none; border-top: 1px solid #eee;" />
                            <p style="font-size: 0.9em; color: #777;">
                                <strong>SVE Interior Studio</strong><br>
                                264, Gurunanakpura, Raja Park, Jaipur
                            </p>
                        </div>
                    `
                });

                // Admin Notification (Sent to you)
                await transporter.sendMail({
                    from: process.env.EMAIL_USER,
                    to: process.env.EMAIL_USER,
                    subject: `New SVE Lead: ${firstName} ${lastName}`,
                    text: `You have received a new inquiry for SVE Interior:

                Name: ${firstName} ${lastName}
                Email: ${email}
                Message: ${message}

                Date: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`
                });
                console.log("✅ Emails dispatched successfully.");
            } catch (mailErr) {
                console.error("❌ Email failed:", mailErr.message);
            }
        }
    });
});

app.listen(PORT, () => {
    console.log(`🚀 SVE Backend running on http://localhost:${PORT}`);
});