import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  console.log("API route hit");
  try {
    const { name, email, message } = await request.json();
    console.log("Received data:", { name, email, message });

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

    console.log("Transporter created");

    try {
      console.log("Attempting to send email");
      const info = await transporter.sendMail({
        from: "tidemand.dev@gmail.com",
        to: "tidemand.dev@gmail.com",
        subject: `New message from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
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
