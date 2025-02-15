import React, { CSSProperties } from "react";
import { createClient } from '../utils/supabase/server';
import {
    getUser,
    getUserCredentials
} from '../utils/supabase/queries';

export default async function Page() {
    const supabase = createClient();
    const [user, credentials] = await Promise.all([
        getUser(supabase),
        getUserCredentials(supabase)
    ]);

    return (
        <>
            <main style={mainStyle}>
                {/* Hero Section */}
                <section style={heroSectionStyle}>
                    <div style={heroContentStyle}>
                        <h1 style={headingStyle}>Your API Toolkit for Developers</h1>
                        <p style={paragraphStyle}>
                            Access cutting-edge APIs like{" "}
                            <span style={highlightStyle}>Deriv Aviator</span> and{" "}
                            <span style={highlightStyle}>Aviator for Provably Fair Systems</span>. Power your apps with secure,
                            scalable, and developer-friendly tools.
                        </p>
                        <a href="#pricing" style={ctaButtonStyle}>
                            Explore APIs
                        </a>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" style={featuresSectionStyle}>
                    <h2 style={headingStyle}>What We Offer</h2>
                    <div style={featuresContainerStyle}>
                        <div style={featureCardStyle}>
                            <h3>Deriv Aviator API</h3>
                            <p>Integrate the dynamic Aviator game with seamless API endpoints.</p>
                        </div>
                        <div style={featureCardStyle}>
                            <h3>Aviator Provably Fair</h3>
                            <p>Build trust with a transparent and verifiable fair-play system.</p>
                        </div>
                        {/* <div style={featureCardStyle}>
                            <h3>Flexible API Plans</h3>
                            <p>Choose from free or premium options tailored to your project needs.</p>
                        </div> */}
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" style={pricingSectionStyle}>
                    <h2 style={headingStyle}>Flexible Pricing</h2>
                    <div style={pricingContainerStyle}>
                        <div style={pricingCardStyle}>
                            <h3>Free Plan</h3>
                            <p>Get started with basic features at no cost.</p>
                            <p>Great for personal projects or prototyping.</p>
                            <a href="/free-apis" style={ctaButtonStyle}>
                                Try Free
                            </a>
                        </div>
                        {/* <div style={pricingCardStyle}>
                            <h3>Pro Plan</h3>
                            <p>Unlock full API access with higher request limits.</p>
                            <p>Perfect for production-level apps.</p>
                            <a href="/pro-plan" style={ctaButtonStyle}>
                                Upgrade to Pro
                            </a>
                        </div> */}
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" style={contactSectionStyle}>
                    <h2 style={headingStyle}>Let’s Talk</h2>
                    <p style={paragraphStyle}>Have questions or need help? We’re here for you.</p>
                    <div style={{ textAlign: "center" }}>
                        <a href="mailto:support@topwebtools.com" style={ctaButtonStyle}>
                            Contact Us
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}

// Define styles with CSSProperties
const mainStyle: CSSProperties = {
    backgroundColor: "black",
    color: "white",
    fontFamily: "inherit",
};

const heroSectionStyle: CSSProperties = {
    backgroundColor: "red",
    color: "white",
    padding: "80px 20px",
    textAlign: "center",
};

const heroContentStyle: CSSProperties = {
    maxWidth: "600px",
    margin: "0 auto",
};

const ctaButtonStyle: CSSProperties = {
    backgroundColor: "black",
    color: "white",
    padding: "12px 25px",
    textDecoration: "none",
    fontSize: "1.1rem",
    borderRadius: "5px",
    display: "inline-block",
    marginTop: "20px",
};

const featuresSectionStyle: CSSProperties = {
    padding: "50px 20px",
    backgroundColor: "black",
};

const featuresContainerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
};

const featureCardStyle: CSSProperties = {
    backgroundColor: "#222",
    padding: "30px",
    width: "250px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
};

const pricingSectionStyle: CSSProperties = {
    padding: "50px 20px",
    backgroundColor: "black",
    color: "white",
};

const pricingContainerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
};

const pricingCardStyle: CSSProperties = {
    backgroundColor: "#222",
    padding: "30px",
    width: "250px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
};

const contactSectionStyle: CSSProperties = {
    padding: "50px 20px",
    backgroundColor: "black",
    color: "white",
};

const headingStyle: CSSProperties = {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "2rem",
};

const paragraphStyle: CSSProperties = {
    textAlign: "center",
    marginBottom: "20px",
};

const highlightStyle: CSSProperties = {
    color: "black",
};
