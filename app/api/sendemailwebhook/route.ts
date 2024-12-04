import nodemailer from 'nodemailer';
import Email from '../../../components/ui/EmailTemplate';
import { renderAsync } from '@react-email/components';
// import { Webhook } from 'express-webhook';
import React from 'react';

export async function POST(req: Request, res: Response) {
    const req_body = await req.json();

    const hookSecret = process.env.SEND_EMAIL_HOOK_SECRET;
    const payload:any = req.body;
    const headers = req.headers;

    if (!headers['x-signature'] || headers['x-signature'] !== hookSecret) {
        throw new Error('Invalid webhook signature');
    }

    const transporter = nodemailer.createTransport({
        host: process.env.AWS_MAIL_HOST,
        port: 465,
        secure: true,
        auth: {
            user: process.env.AWS_MAIL_USER,
            pass: process.env.AWS_MAIL_PASS,
        },
    });

    const subjects = {
        en: {
            signup: 'Confirm Your Email',
            recovery: 'Reset Your Password',
            invite: 'You have been invited',
            magic_link: 'Your Magic Link',
            email_change: 'Confirm Email Change',
            email_change_new: 'Confirm New Email Address',
            reauthentication: 'Confirm Reauthentication',
        },
    };

    const body = {
        en: {
            signup: 'Please confirm your email address by clicking the link below:',
            recovery: 'Please reset your password by clicking the link below:',
            invite: 'You have been invited to join',
            magic_link: 'Please click the link below to sign in:',
            email_change: 'Please confirm your email address change by clicking the link below:',
            email_change_new: 'Please confirm your new email address by clicking the link below:',
            reauthentication: 'Please confirm your reauthentication by clicking the link below:',
        },
    };

    const button_text = {
        en: {
            signup: 'Confirm Email',
            recovery: 'Reset Password',
            invite: 'Accept Invitation',
            magic_link: 'Sign In',
            email_change: 'Confirm Email Change',
            email_change_new: 'Confirm New Email Address',
            reauthentication: 'Confirm Reauthentication',
        },
    };

    try {
        const { user, email_data } = payload;

        const data = {
            url: `https://rswrusnvatvaxqlitmqq.supabase.co/v1/verify?token=${email_data.token}&type=${email_data.email_action_type}&redirect_to=${email_data.redirect_to}`,
            subject: subjects[req.headers["accept-language"]]?.[email_data.email_action_type] || "Default Subject",
            action: button_text[req.headers["accept-language"]]?.[email_data.email_action_type] || "Default Action",
            message: body[req.headers["accept-language"]]?.[email_data.email_action_type] || "Default Message",
        };

        // Render HTML email
        const emailHtml = await renderAsync(React.createElement(Email, data));

        const options = {
            from: process.env.INFO_EMAIL,
            to: user?.email,
            subject: data.subject,
            html: emailHtml,
        };

        // Send the email
        await transporter.sendMail(options);

        return new Response('Email sent successfully', {
            status: 200,
            headers: { 'Content-Type': 'text/plain' },
        });
    } catch (error) {
        return new Response(
            JSON.stringify({ error: { http_code: error.code, message: error.message } }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }

}