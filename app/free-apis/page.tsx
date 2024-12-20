"use client";

import React, { CSSProperties, useState } from "react";
import Head from "next/head";
import Link from "next/link";

interface Api {
  id: string;
  name: string;
  description: string;
  status: "new" | "coming soon";
}

const apis: Api[] = [
  {
    id: "deriv-api",
    name: "Deriv Aviator API",
    description: "The Deriv Aviator API allows integration of the Aviator game into your platform. It enables users to use their Deriv account balances to participate in the game, with direct API access for game state, bet placement handling.",
    status: "new",
  },
  {
    id: "provably-fair",
    name: "Provably Fair Aviator System API",
    description: "The Provably Fair Aviator System API generates outcomes from players random hashes, verifiable game outcomes, ensuring fairness. Player accounts and balances are managed by external third-party services, while the API provides game logic and fairness verification.",
    status: "coming soon",
  },
];


export default function FreeApisPage() {
  const [selectedApi, setSelectedApi] = useState<Api | null>(null);

  return (
    <>
      <Head>
        <title>Free APIs - TopWebTools</title>
        <meta
          name="description"
          content="Explore free APIs like Deriv Aviator API and Provably Fair System API. Power your projects with our free developer tools."
        />

      </Head>

      <main style={mainStyle}>
        <section style={apiListSectionStyle}>
          <h1 style={headingStyle}>Free APIs</h1>
          <p style={paragraphStyle}>
            Explore our free APIs. Click on an API to learn more about its features and integration.
          </p>

          <div style={apiListStyle}>
            {apis.map((api) => (
              <div
                key={api.id}
                style={apiCardStyle}
                onClick={() => setSelectedApi(api)}
              >
                <div style={titleAndStatusContainerStyle}>
                  <h2 style={titleStyle}>{api.name}</h2>
                  <span
                    style={
                      api.status === "new"
                        ? { ...statusBadgeStyle, backgroundColor: "green" }
                        : { ...statusBadgeStyle, backgroundColor: "orange" }
                    }
                  >
                    {api.status === "new" ? "New" : "Coming Soon"}
                  </span>
                </div>
                <p style={descriptionStyle}>{api.description}</p>
              </div>
            ))}
          </div>
        </section>

        {selectedApi && (
          <section style={apiDetailsSectionStyle}>
            <h2 style={detailsHeadingStyle}>{selectedApi.name}</h2>
            <p style={detailsParagraphStyle}>{selectedApi.description}</p>
            <div style={btnscontainer}>
              <Link href="/api-credentials">
              <button
                style={startButtonStyle}
              >
                Get Started
              </button>
              </Link>
              <button
                style={closeButtonStyle}
                onClick={() => setSelectedApi(null)}
              >
                Close
              </button>
            </div>
          </section>
        )}
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

const apiListSectionStyle: CSSProperties = {
  padding: "20px",
  textAlign: "center",
};

const headingStyle: CSSProperties = {
  fontSize: "2rem",
  marginBottom: "10px",
};

const paragraphStyle: CSSProperties = {
  marginBottom: "30px",
  fontSize: "1.2rem",
};

const apiListStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "20px",
};

const apiCardStyle: CSSProperties = {
  backgroundColor: "#222",
  padding: "20px",
  minWidth: "300px",
  maxWidth: "500px",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  textAlign: "left",
  cursor: "pointer",
  position: "relative",
};

const titleAndStatusContainerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  marginBottom: "10px",
};

const titleStyle: CSSProperties = {
  fontSize: "1.3rem",
  fontWeight: "bold",
  wordWrap: "break-word",
};

const descriptionStyle: CSSProperties = {
  fontSize: "1rem",
  color: "#aaa",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  WebkitLineClamp: 2, // Limit to two lines
  textOverflow: "ellipsis", // Add ellipsis at the end of the second line
};


const statusBadgeStyle: CSSProperties = {
  padding: "5px 10px",
  borderRadius: "5px",
  color: "white",
  fontSize: "0.9rem",
  fontWeight: "bold",
  textAlign: "center",
};

const apiDetailsSectionStyle: CSSProperties = {
  backgroundColor: "#111",
  padding: "20px",
  borderRadius: "8px",
  marginTop: "30px",
  textAlign: "center",
};

const detailsHeadingStyle: CSSProperties = {
  fontSize: "1.8rem",
  marginBottom: "20px",
};

const detailsParagraphStyle: CSSProperties = {
  marginBottom: "20px",
  fontSize: "1.2rem",
};

const btnscontainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
}


const startButtonStyle: CSSProperties = {
  backgroundColor: "green",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "1rem",
};

const closeButtonStyle: CSSProperties = {
  backgroundColor: "red",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "1rem",
};
