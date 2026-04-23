const nodemailer = require("nodemailer");

module.exports = async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { firstName, lastName, email, message } = req.body;

    if (!email || !email.includes("@")) {
        return res.status(400).json({ error: "Invalid email address" });
    }

    if (!firstName || !message) {
        return res.status(400).json({ error: "First name and message are required" });
    }

    const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "sveinterior11@gmail.com";

    try {
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            await transporter.sendMail({
                from: `"SVE Interior" <${process.env.EMAIL_USER}>`,
                to: NOTIFY_EMAIL,
                subject: `New SVE Lead: ${firstName} ${lastName}`,
                html: `
                    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
                        <h2 style="color: #bc8f8f;">New Contact Form Submission</h2>
                        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Message:</strong></p>
                        <p style="background: #f9f5f3; padding: 12px; border-radius: 8px;">${message}</p>
                        <hr style="border: none; border-top: 1px solid #eee;" />
                        <p style="font-size: 0.85em; color: #777;">
                            Received on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
                        </p>
                    </div>
                `,
            });

            await transporter.sendMail({
                from: `"SVE Interior" <${process.env.EMAIL_USER}>`,
                to: email,
                subject: "Thank you for contacting SVE Interior",
                html: `
                    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
                        <h2 style="color: #bc8f8f;">Hello ${firstName},</h2>
                        <p>Thank you for reaching out to <strong>SVE Interior</strong>.</p>
                        <p>We have received your message and our design team led by <strong>Yash and Nidhi Mamoria</strong> will review your requirements shortly.</p>
                        <hr style="border: none; border-top: 1px solid #eee;" />
                        <p style="font-size: 0.9em; color: #777;">
                            <strong>SVE Interior Studio</strong><br>
                            264, Gurunanakpura, Raja Park, Jaipur
                        </p>
                    </div>
                `,
            });
        }

        return res.status(200).json({ message: "Success" });
    } catch (error) {
        console.error("Contact form error:", error.message);
        return res.status(500).json({ error: "Failed to process your request" });
    }
};
