import React from "react";

export default function Footer() {
  return (
    <footer className='site-footer'>
      <div className='container'>
        <p style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} Mobifinng. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
