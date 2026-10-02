"use client";

import { FormEvent, useState } from "react";
import { whatsappUrl } from "@/data/site-data";

const quickOptions = [
  "Product enquiry",
  "Get a price",
  "Find a stockist",
  "Request a quote",
  "Ask about application",
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState("");
  const [status, setStatus] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hello Puremax Paints, I would like some help.",
      `Topic: ${topic || "General enquiry"}`,
      `Name: ${data.get("chatName")}`,
      `Phone: ${data.get("chatPhone")}`,
      `Email: ${data.get("chatEmail") || "Not provided"}`,
      `Location: ${data.get("chatLocation") || "Not provided"}`,
      `Product: ${data.get("chatProduct") || "Not specified"}`,
      `Question: ${data.get("chatQuestion")}`,
    ].join("\n");
    const url = whatsappUrl(message);
    if (!url) {
      setStatus("This enquiry chat is ready, but WhatsApp has not been connected yet. Please use the contact page.");
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("WhatsApp opened with your details. Review and send the message to continue.");
  }

  return (
    <div className="chat-widget">
      {open && (
        <section className="chat-panel" aria-label="Puremax enquiry chat">
          <div className="chat-head">
            <span className="chat-status-dot" aria-hidden="true" />
            <div><strong>Chat with Puremax</strong><small>Enquiry assistant · not live chat</small></div>
            <button type="button" aria-label="Close chat" onClick={() => setOpen(false)}>×</button>
          </div>
          <div className="chat-body">
            <p className="chat-greeting">Hello! Welcome to Puremax Paints. How can we help you today?</p>
            <p className="chat-note">Choose a topic, then share your details to prepare an enquiry for WhatsApp.</p>
            <div className="chat-quick-options">
              {quickOptions.map((option) => (
                <button className={topic === option ? "selected" : ""} key={option} type="button" onClick={() => setTopic(option)}>{option}</button>
              ))}
            </div>
            <form className="chat-form" onSubmit={submit}>
              <label>Your name<input autoComplete="name" name="chatName" required /></label>
              <label>Phone number<input autoComplete="tel" name="chatPhone" type="tel" required /></label>
              <details>
                <summary>Add more details (optional)</summary>
                <label>Email<input autoComplete="email" name="chatEmail" type="email" /></label>
                <label>Location<input name="chatLocation" /></label>
                <label>Product of interest<input name="chatProduct" /></label>
              </details>
              <label>Your question<textarea name="chatQuestion" rows={2} required /></label>
              <button className="button button-gold" type="submit">Continue on WhatsApp <span aria-hidden="true">↗</span></button>
            </form>
            {status && <p className="chat-status" role="status">{status}</p>}
          </div>
        </section>
      )}
      <button className="chat-launcher" type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span aria-hidden="true">{open ? "×" : "✳"}</span>{open ? "Close" : "Chat with Puremax"}
      </button>
    </div>
  );
}
