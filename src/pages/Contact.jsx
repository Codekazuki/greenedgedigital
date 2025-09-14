import React from "react";

export default function Contact() {
  return (
    <section className='container' style={{ padding: "2rem 0" }}>
      <h1>Contact Us</h1>
      <form
        style={{
          marginTop: "1rem",
          display: "grid",
          gap: "1rem",
          maxWidth: "500px",
        }}
      >
        <input
          type='text'
          placeholder='Your Name'
          style={{
            padding: "0.75rem",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            background: "var(--surface)",
            color: "var(--text)",
          }}
        />
        <input
          type='email'
          placeholder='Your Email'
          style={{
            padding: "0.75rem",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            background: "var(--surface)",
            color: "var(--text)",
          }}
        />
        <textarea
          placeholder='Message'
          rows='5'
          style={{
            padding: "0.75rem",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            background: "var(--surface)",
            color: "var(--text)",
          }}
        />
        <button
          style={{
            background: "var(--accent)",
            color: "#fff",
            border: "none",
            padding: "0.75rem 1rem",
            borderRadius: "8px",
          }}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
