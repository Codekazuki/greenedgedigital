import React from "react";

export default function Blog() {
  return (
    <section className='container' style={{ padding: "2rem 0" }}>
      <h1>Latest Articles</h1>
      <div style={{ marginTop: "1rem", display: "grid", gap: "1.5rem" }}>
        <article
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            padding: "1rem",
            borderRadius: "12px",
          }}
        >
          <h2>How to Maximize Your Savings</h2>
          <p style={{ color: "var(--muted)", marginTop: "0.5rem" }}>
            Learn tips and tricks to save smarter in the digital age.
          </p>
        </article>
        <article
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            padding: "1rem",
            borderRadius: "12px",
          }}
        >
          <h2>Understanding Digital Payments</h2>
          <p style={{ color: "var(--muted)", marginTop: "0.5rem" }}>
            An overview of how payment systems are transforming globally.
          </p>
        </article>
      </div>
    </section>
  );
}
