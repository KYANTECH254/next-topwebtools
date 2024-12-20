import { Metadata } from 'next';
import React, { CSSProperties } from "react";

const title = 'Privacy Policy - TopWebTools';
const description = 'Learn about how we collect, use, and protect your information at TopWebTools.';

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
    }
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <main style={mainStyle}>
        <section style={policySectionStyle}>
          <h1 style={headingStyle}>Privacy Policy</h1>
          <p style={paragraphStyle}>
            At <strong>TopWebTools</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines what data we collect, how we use it, and your rights regarding your information.
          </p>

          <h2 style={subHeadingStyle}>Information We Collect</h2>
          <ul style={listStyle}>
            <li>📧 <strong>Email:</strong> To communicate with you and provide updates.</li>
            <li>🖼️ <strong>Name and Avatar:</strong> For personalization purposes.</li>
            <li>💳 <strong>Payment Information:</strong> To process payments securely (we do not store full payment details).</li>
            <li>🍪 <strong>Cookies:</strong> To improve your browsing experience and analyze website usage.</li>
          </ul>

          <h2 style={subHeadingStyle}>How We Use Your Information</h2>
          <p style={paragraphStyle}>
            Your information is used to:
          </p>
          <ul style={listStyle}>
            <li>Provide access to our APIs and tools.</li>
            <li>Process payments securely.</li>
            <li>Enhance your user experience through personalized services.</li>
            <li>Analyze site performance and improve our offerings.</li>
          </ul>

          <h2 style={subHeadingStyle}>Your Rights</h2>
          <p style={paragraphStyle}>
            You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us at <a href="mailto:support@topwebtools.com" style={linkStyle}>support@topwebtools.com</a>.
          </p>

          <h2 style={subHeadingStyle}>Third-Party Services</h2>
          <p style={paragraphStyle}>
            We may use trusted third-party services to process payments and analyze site performance. These services adhere to their own privacy policies.
          </p>

          <h2 style={subHeadingStyle}>Cookies</h2>
          <p style={paragraphStyle}>
            Cookies are used to enhance your experience and gather insights into website usage. By using our site, you consent to our use of cookies.
          </p>

          <h2 style={subHeadingStyle}>Changes to This Policy</h2>
          <p style={paragraphStyle}>
            We may update this policy from time to time. Any changes will be posted on this page with the updated date.
          </p>

          <p style={paragraphStyle}>
            If you have any questions about this policy, please contact us at <a href="mailto:support@topwebtools.com" style={linkStyle}>support@topwebtools.com</a>.
          </p>
        </section>
      </main>
    </>
  );
}

// Styles
const mainStyle: CSSProperties = {
  backgroundColor: "black",
  color: "white",
  fontFamily: "inherit",
  padding: "20px",
};

const policySectionStyle: CSSProperties = {
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "left",
};

const headingStyle: CSSProperties = {
  fontSize: "2.5rem",
  marginBottom: "20px",
  color: "lightblue",
  textAlign: "center",
};

const subHeadingStyle: CSSProperties = {
  fontSize: "1.8rem",
  marginTop: "30px",
  marginBottom: "10px",
};

const paragraphStyle: CSSProperties = {
  fontSize: "1.2rem",
  lineHeight: "1.8",
  marginBottom: "20px",
};

const listStyle: CSSProperties = {
  margin: "20px 0",
  paddingLeft: "20px",
  fontSize: "1.2rem",
  lineHeight: "1.8",
};

const linkStyle: CSSProperties = {
  color: "lightblue",
  textDecoration: "none",
};

