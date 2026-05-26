import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function GET() {
  try {
    await resend.emails.send({
      from: "Rudraa Events <onboarding@resend.dev>",
      to: "contact@rudraaevents.com",
      subject: "Rudraa Events Email Test",
      html: `
        <div style="background:#000;padding:40px;color:white;font-family:sans-serif;">
          <h1>Rudraa Events</h1>

          <p>
            Your automated email system is working successfully.
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error,
    });
  }
}