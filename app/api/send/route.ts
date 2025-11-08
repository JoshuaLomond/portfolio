import { EmailTemplate } from "@/app/components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface RequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = (await request.json()) as RequestBody;
    console.log("Received request:", { name, email, message }); // Log incoming data

    const { data, error } = await resend.emails.send({
      from: "contact@joshlomond.dev",
      to: ["josh@joshlomond.dev"],
      subject: "New message from your portfolio",
      replyTo: email,
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      console.error("Resend API Error:", error); // Log the full error from Resend
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("Email sent successfully:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Catch Block Error:", error); // Log any other errors
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
