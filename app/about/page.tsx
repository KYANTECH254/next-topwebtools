import { Metadata } from 'next';
import React, { CSSProperties } from "react";

const title = 'About Us - TopWebTools';
const description = 'Learn more about TopWebTools, your go-to platform for free developer APIs and tools.';

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
    }
};

export default function AboutPage() {
  return (
    <>
      <main style={mainStyle}>
        <section style={aboutSectionStyle}>
          <h1 style={headingStyle}>About TopWebTools</h1>
          <p style={paragraphStyle}>
            Welcome to <strong>TopWebTools</strong>, your one-stop destination for innovative and
            developer-friendly APIs. Whether you're building dynamic games, ensuring fairness in
            your platform, or exploring new tools to power your projects, we’ve got you covered.
          </p>

          <h2 style={subHeadingStyle}>Our Mission</h2>
          <p style={paragraphStyle}>
            To provide free, high-quality APIs that help developers like you turn ideas into
            reality.
          </p>

          <h2 style={subHeadingStyle}>Why Choose Us?</h2>
          <ul style={listStyle}>
            <li>🚀 <strong>Free and Easy-to-Use:</strong> We believe in empowering developers with free tools that don’t compromise on quality or performance.</li>
            <li>🌐 <strong>Dynamic Solutions:</strong> From gaming to fairness systems, our APIs are built to solve real-world problems with simplicity.</li>
            <li>💡 <strong>Developer-Centric:</strong> We speak your language—no fluff, just powerful tools tailored for your needs.</li>
          </ul>

          <h2 style={subHeadingStyle}>What’s Next?</h2>
          <p style={paragraphStyle}>
            We’re constantly adding new APIs and features to make your development journey even
            more seamless. Got an idea or need a specific tool? Reach out—we’re all ears!
          </p>

          <p style={paragraphStyle}>
            Thank you for being part of the TopWebTools community. Let’s build something amazing
            together!
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

const aboutSectionStyle: CSSProperties = {
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "center",
};

const headingStyle: CSSProperties = {
  fontSize: "2.5rem",
  marginBottom: "20px",
  color: "lightblue",
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
  textAlign: "left",
  margin: "20px auto",
  maxWidth: "700px",
  lineHeight: "1.8",
  fontSize: "1.2rem",
};

