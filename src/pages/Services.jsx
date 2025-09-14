import React from "react";

export default function Services() {
  return (
    <section className='container' style={{ padding: "2rem 0" }}>
      <h1>Our Services</h1>
      <ul style={{ marginTop: "1rem", display: "grid", gap: "1rem" }}>
        <li
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            padding: "1rem",
            borderRadius: "12px",
          }}
        >
          Payments
        </li>
        <li
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            padding: "1rem",
            borderRadius: "12px",
          }}
        >
          Savings
        </li>
        <li
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            padding: "1rem",
            borderRadius: "12px",
          }}
        >
          Investments
        </li>
      </ul>
    </section>
  );
}
