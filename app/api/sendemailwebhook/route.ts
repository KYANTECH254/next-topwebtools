import nodemailer from "nodemailer";
import Email from "../../../components/ui/EmailTemplate";
import { renderAsync } from "@react-email/components";
import { Webhook } from "standardwebhooks";
import React from "react";

export async function POST(req: Request, res: Response) {
    console.log("Starting POST function...");

    // Validate environment variables
    const secret = process.env.SEND_EMAIL_HOOK_SECRET;
    if (!secret) {
        console.error("Missing SEND_EMAIL_HOOK_SECRET environment variable.");
        return new Response(
            JSON.stringify({ error: "Server configuration error: Missing webhook secret." }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }

    const payload = await req.text();
    console.log("Payload received:", payload);

    const headers = Object.fromEntries(req.headers);
    console.log("Headers received:", headers);

    const webhook = new Webhook(secret);
    const transporter = nodemailer.createTransport({
        host: process.env.AWS_SMTP_HOST,
        port: 465,
        secure: true,
        auth: {
            user: process.env.AWS_MAIL_USER,
            pass: process.env.AWS_MAIL_PASS,
        },
    });

    console.log("Transporter initialized.");

    // Predefined email data for English
    const subjects = {
        signup: "Confirm Your Email",
        recovery: "Reset Your Password",
        invite: "You have been invited",
        magiclink: "Your Magic Link",
        email_change: "Confirm Email Change",
        email_change_new: "Confirm New Email Address",
        reauthentication: "Confirm Reauthentication",
    };

    const body = {
        signup: "Please confirm your email address by clicking the link below:",
        recovery: "Please reset your password by clicking the link below:",
        invite: "You have been invited to join:",
        magiclink: "Please click the link below to sign in:",
        email_change: "Please confirm your email address change by clicking the link below:",
        email_change_new: "Please confirm your new email address by clicking the link below:",
        reauthentication: "Please confirm your reauthentication by clicking the link below:",
    };

    const button_text = {
        signup: "Confirm Email",
        recovery: "Reset Password",
        invite: "Accept Invitation",
        magiclink: "Sign In",
        email_change: "Confirm Email Change",
        email_change_new: "Confirm New Email Address",
        reauthentication: "Confirm Reauthentication",
    };

    try {
        console.log("Verifying webhook...");
        const { user, email_data } = webhook.verify(payload, headers) as {
            user: { email: string };
            email_data: { token: string; email_action_type: string; redirect_to: string };
        };

        const emailActionType = email_data.email_action_type as keyof typeof subjects;
        console.log("Email action type:", emailActionType);

        // Explicitly fetch data for English
        const data = {
            url: `${email_data.redirect_to}/auth/callback?code=${email_data.token}&type=${emailActionType}`,
            subject: subjects[emailActionType] || "Default Subject",
            action: button_text[emailActionType] || "Default Action",
            message: body[emailActionType] || "Default Message",
        };

        console.log("Email data:", data);

        console.log("Rendering email template...");
        const emailHtml = await renderAsync(React.createElement(Email, data));

        const mailOptions = {
            from: `"TopWebTools" <${process.env.INFO_EMAIL}>`,
            to: user?.email,
            subject: data.subject,
            html: emailHtml,
        };

        console.log("Sending email...");
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully.");

        return new Response(
            JSON.stringify({
                message: 'Email sent successfully.',
            }),
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
    } catch (error) {
        console.error("Error occurred:", error);
        return new Response(
            JSON.stringify({
                error: {
                    http_code: error.code || 500,
                    message: error.message || "An unknown error occurred.",
                },
            }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
