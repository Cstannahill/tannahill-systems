import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { ContactPayload } from "@/types/site";
import { siteConfig } from "@/config/site";

export async function POST(request: Request) {
  let body: Partial<ContactPayload> | null;
  try {
    body = await request.json();
  } catch {
    body = null;
  }

  if (!body || !body.name || !body.email || !body.message) {
    return NextResponse.json(
      { error: "Name, email, and project requirements are required." },
      { status: 400 }
    );
  }

  const smtpUrl = process.env.SMTP_URL;

  if (!smtpUrl) {
    return NextResponse.json(
      {
        error: `Inquiry delivery is not configured. Please email ${siteConfig.emails.contact} directly.`,
      },
      { status: 503 }
    );
  }

  try {
    const transporter = nodemailer.createTransport(smtpUrl);

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || siteConfig.emails.primary,
      to: siteConfig.emails.primary,
      replyTo: body.email,
      subject: `[${siteConfig.companyName} Inquiry] ${body.serviceType ?? "General"} — ${body.name}`,
      text: [
        `Client Name: ${body.name}`,
        `Client Email: ${body.email}`,
        `Company: ${body.company || "N/A"}`,
        `Service Requested: ${body.serviceType ?? "N/A"}`,
        `Estimated Scope: ${body.projectScope ?? "N/A"}`,
        ``,
        `Technical Details:`,
        body.message,
      ].join("\n"),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Failed to send contact inquiry:", error);
    return NextResponse.json(
      {
        error: `We could not send your inquiry. Please email ${siteConfig.emails.contact} directly.`,
      },
      { status: 500 }
    );
  }
}
