import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  try {
    const { name, email, attending, message } = req.body;

    // Validate required fields
    if (!name || !email || !attending) {
      return res.status(400).json({
        success: false,
        error: "Please fill in all required fields.",
      });
    }

    // Create Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Wedding RSVP" <${process.env.GMAIL_USER}>`,
      to: "jsanjai2004@gmail.com",
      replyTo: email,
      subject: `Wedding RSVP - ${name}`,

      text: `
New Wedding RSVP

Name: ${name}
Email: ${email}
Attendance: ${attending}

Blessings & Message:
${message || "No message provided."}
      `,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>💍 New Wedding RSVP</h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Attendance:</strong> ${attending}
          </p>

          <p>
            <strong>Blessings & Message:</strong>
          </p>

          <p>
            ${message || "No message provided."}
          </p>

          <hr />

          <p style="color: #777; font-size: 12px;">
            RSVP submitted from the wedding invitation website.
          </p>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error("RSVP email error:", error);

    return res.status(500).json({
      success: false,
      error: "Unable to send RSVP.",
    });
  }
}