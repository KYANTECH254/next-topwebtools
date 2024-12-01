const express = require("express");
const next = require("next");
const nodemailer = require("nodemailer");
const { renderAsync } = require("@react-email/components");
const { Email } = require('./components/ui/EmailTemplate');
const { Webhook } = require('express-webhook');
const dotenv = require('dotenv');
const React = require("react");

// Load environment variables
dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  // Middleware to parse JSON bodies
  server.use(express.json());

  // Nodemailer transporter setup
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

  const hookSecret = process.env.SEND_EMAIL_HOOK_SECRET;

  // POST endpoint for webhook
  server.post("/webhook", async (req, res) => {
    const payload = req.body;
    const headers = req.headers;

    const wh = new Webhook(hookSecret);
    try {
      const { user, email_data } = wh.verify(payload, headers);

      const data = {
        url: `https://rswrusnvatvaxqlitmqq.supabase.co/v1/verify?token=${email_data.token}&type=${email_data.email_action_type}&redirect_to=${email_data.redirect_to}`,
        subject: subjects[req.get("accept-language")][email_data.email_action_type],
        action: button_text[req.get("accept-language")][email_data.email_action_type],
        message: body[req.get("accept-language")][email_data.email_action_type],
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
      res.status(200).send('Email sent successfully');
    } catch (error) {
      res.status(401).json({
        error: { http_code: error.code, message: error.message },
      });
    }
  });

  // Default Next.js handler for pages
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  // Start the custom server
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on PORTt:${port}`);
  });
});
