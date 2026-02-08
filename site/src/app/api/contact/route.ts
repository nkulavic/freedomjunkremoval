import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, address, serviceType, description, preferredDate } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Name, phone, and email are required" },
        { status: 400 }
      );
    }

    const emailBody = `
New estimate request from ${name}

Phone: ${phone}
Email: ${email}
Address: ${address || "Not provided"}
Service: ${serviceType || "Not specified"}
Preferred Date: ${preferredDate || "Flexible"}

Description:
${description || "No description provided"}

Submitted: ${new Date().toISOString()}
    `.trim();

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Freedom Junk Removal <noreply@freedomjunkremoval.com>",
        to: ["info@freedomjunkremoval.com"],
        replyTo: email,
        subject: `New Estimate Request from ${name}`,
        text: emailBody,
      });
    } else {
      console.log("Contact form submission (no RESEND_API_KEY set):", emailBody);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
