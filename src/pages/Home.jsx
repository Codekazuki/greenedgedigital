import React from "react";

export default function Home() {
  return (
    <section className='container' style={{ padding: "2rem 0" }}>
      <h1>Welcome to GreeEdge</h1>
      <p
        style={{
          color: "var(--muted)",
          maxWidth: "600px",
          marginTop: "0.5rem",
        }}
      >
        The modern fintech solution designed to simplify your life. Our platform
        is crafted with simplicity, performance, and security in mind.
      </p>
      <button
        style={{
          marginTop: "1.5rem",
          background: "var(--accent)",
          color: "#fff",
          border: "none",
          padding: "0.75rem 1rem",
          borderRadius: "8px",
        }}
      >
        Get Started
      </button>
    </section>
  );
}
