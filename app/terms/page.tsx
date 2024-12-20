import { Metadata } from 'next';
import React, { CSSProperties } from "react";

const title = 'Terms of Use - TopWebTools';
const description = 'Understand the terms and conditions for using TopWebTools services.';

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
    }
};


export default function TermsOfUsePage() {
  return (
    <>
      <main style={mainStyle}>
        <section style={termsSectionStyle}>
          <h1 style={headingStyle}>Terms of Use</h1>
          <p style={paragraphStyle}>
            By accessing or using our platform, you agree to the following terms and conditions. Please read them carefully.
          </p>

          <h2 style={subHeadingStyle}>1. Acceptance of Terms</h2>
          <p style={paragraphStyle}>
            By using our website, APIs, or any associated services, you acknowledge that you have read, understood, and agree to be bound by these terms.
          </p>

          <h2 style={subHeadingStyle}>2. Use of Services</h2>
          <ul style={listStyle}>
            <li>Our tools and APIs are provided for lawful purposes only.</li>
            <li>You may not misuse our services or attempt to disrupt their functionality.</li>
            <li>Unauthorized access or activity is strictly prohibited.</li>
          </ul>

          <h2 style={subHeadingStyle}>3. User Responsibilities</h2>
          <p style={paragraphStyle}>
            You are responsible for ensuring the security of your account and any actions performed through it. Keep your credentials confidential.
          </p>

          <h2 style={subHeadingStyle}>4. Payment Terms</h2>
          <p style={paragraphStyle}>
            Any payments made for premium services must be accurate and complete. Refund policies will be outlined during the purchase process.
          </p>

          <h2 style={subHeadingStyle}>5. Intellectual Property</h2>
          <p style={paragraphStyle}>
            All content, including text, graphics, and code, is owned by TopWebTools and protected by copyright laws. Unauthorized use is prohibited.
          </p>

          <h2 style={subHeadingStyle}>6. Limitation of Liability</h2>
          <p style={paragraphStyle}>
            We are not responsible for any damages resulting from the use or inability to use our services. Use them at your own risk.
          </p>

          <h2 style={subHeadingStyle}>7. Changes to Terms</h2>
          <p style={paragraphStyle}>
            These terms may be updated periodically. Continued use of our services constitutes your acceptance of any changes.
          </p>

          <h2 style={subHeadingStyle}>8. Contact Us</h2>
          <p style={paragraphStyle}>
            If you have questions about these terms, please contact us at{" "}
            <a href="mailto:support@topwebtools.com" style={linkStyle}>
              support@topwebtools.com
            </a>.
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

const termsSectionStyle: CSSProperties = {
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
