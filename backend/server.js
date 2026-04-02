const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const nodemailer = require("nodemailer");
const { listLeads, saveLead } = require("./storage");

const app = express();
const PORT = process.env.PORT || 3001;

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

    saveLead({
        first_name: firstName,
        last_name: lastName,
        email,
        message,
    })
        .then(async (lead) => {
            res.status(201).json({ message: "Success", id: lead.id });

            if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
                try {
                    await transporter.sendMail({
                        from: `"SVE Interior" <${process.env.EMAIL_USER}>`,
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
                    console.log("Emails dispatched successfully.");
                } catch (mailErr) {
                    console.error("Email failed:", mailErr.message);
                }
            }
        })
        .catch((err) => {
            console.error("Lead save error:", err.message);
            res.status(500).json({ error: err.message || "Failed to save lead" });
        });
});

app.get("/api/leads", async (_req, res) => {
    try {
        const leads = await listLeads();
        res.json(leads);
    } catch (error) {
        console.error("Lead fetch error:", error.message);
        res.status(500).json({ error: error.message || "Failed to load leads" });
    }
});

app.listen(PORT, () => {
    console.log(`SVE backend running on http://localhost:${PORT}`);
});
