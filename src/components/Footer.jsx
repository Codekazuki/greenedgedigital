import React from "react";

export default function Footer() {
  return (
    <footer
      className='site-footer'
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        padding: "1.5rem 0",
        marginTop: "2rem",
      }}
    >
      <div className='container'>
        <p style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} Mobifinng. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
