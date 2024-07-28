import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { sanitize } from "isomorphic-dompurify";

// Simple in-memory store for rate limiting
const rateLimitStore = {
  emails: 0,
  resetTime: Date.now(),
};

const RATE_LIMIT = 50;
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes in milliseconds

export async function POST(request) {
  console.log("API route hit");
  try {
    // Check rate limit
    if (Date.now() > rateLimitStore.resetTime + RATE_LIMIT_WINDOW) {
      rateLimitStore.emails = 0;
      rateLimitStore.resetTime = Date.now();
    }

    if (rateLimitStore.emails >= RATE_LIMIT) {
      return NextResponse.json(
        { message: "Rate limit exceeded. Please try again later." },
        { status: 429 }
      );
    }

    rateLimitStore.emails++;

    const { name, email, message } = await request.json();

    // Basic input validation
    if (!name || name.trim().length === 0) {
      return NextResponse.json(
        { message: "Name is required" },
        { status: 400 }
      );
    }

    // Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    // Message length check
    if (!message || message.trim().length === 0 || message.length > 1000) {
      return NextResponse.json(
        { message: "Message must be between 1 and 1000 characters" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitize(name);
    const sanitizedEmail = sanitize(email);
    const sanitizedMessage = sanitize(message);

    // Check if the API key is available
    if (!process.env.SENDGRID_API_KEY) {
      console.error("SendGrid API key is not defined");
      return NextResponse.json(
        { message: "Server configuration error" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "apikey",
        pass: process.env.SENDGRID_API_KEY,
      },
      tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
      },
    });

    try {
      console.log("Attempting to send email");
      const info = await transporter.sendMail({
        from: "tidemand.dev@gmail.com",
        to: "tidemand.dev@gmail.com",
        subject: `New message from ${sanitizedName}`,
        text: `
          Name: ${sanitizedName}
          Email: ${sanitizedEmail}
          Message: ${sanitizedMessage}
        `,
        headers: {
          "X-Priority": "3",
          "X-MSMail-Priority": "Normal",
          Importance: "Normal",
          "X-Mailer": "Your Website Contact Form",
        },
      });
      console.log("Email sent successfully:", info);

      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
      );
    } catch (sendError) {
      console.error("Error sending email:", sendError);
      return NextResponse.json(
        { message: "Error sending email", error: sendError.message },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { message: "Error in API route", error: error.message },
      { status: 500 }
    );
  }
}
