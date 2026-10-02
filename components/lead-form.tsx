"use client";

import { FormEvent, useState } from "react";
import { whatsappUrl } from "@/data/site-data";

type LeadFormProps = { mode: "quote" | "contact" | "product"; productName?: string };

export function LeadForm({ mode, productName }: LeadFormProps) {
  const [status, setStatus] = useState("");
  const [fileName, setFileName] = useState("");
  const heading = mode === "quote" ? "Tell us about your project" : mode === "product" ? "Ask about this product" : "Send an enquiry";

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const file = data.get("projectImage");
    if (file instanceof File && file.size > 5 * 1024 * 1024) {
      setStatus("Please choose an image smaller than 5 MB.");
      return;
    }
    const lines = [
      `Hello Puremax Paints, I would like to ${mode === "quote" ? "request a quote" : "make an enquiry"}.`,
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email") || "Not provided"}`,
      `Location: ${data.get("location") || "Not provided"}`,
      `Product: ${data.get("product") || productName || "Not specified"}`,
      `Quantity: ${data.get("quantity") || "Not specified"}`,
      mode === "quote" ? `Property type: ${data.get("propertyType") || "Not specified"}` : "",
      mode === "quote" ? `Preferred finish: ${data.get("finish") || "Not specified"}` : "",
      `Preferred contact: ${data.get("contactMethod") || "WhatsApp"}`,
      `Message: ${data.get("message") || "No additional message"}`,
      fileName ? `Project image selected: ${fileName}. Please attach it in WhatsApp; this website does not upload files.` : "",
    ].filter(Boolean);
    const url = whatsappUrl(lines.join("\n"));
    if (!url) {
      setStatus("Your details are ready, but this website cannot send the enquiry yet. Configure NEXT_PUBLIC_WHATSAPP_NUMBER to enable WhatsApp enquiries.");
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("WhatsApp opened with your enquiry details. Review the message and send it there; the form itself does not submit or store your information.");
  }

  return (
    <form className="lead-form" onSubmit={submit}>
      <div className="form-heading">
        <span className="eyebrow">PUREMAX ENQUIRIES</span>
        <h2>{heading}</h2>
        <p>Share a few details and continue the conversation securely in WhatsApp.</p>
      </div>
      <div className="form-grid">
        <label>Full name <input autoComplete="name" name="name" required /></label>
        <label>Phone number <input autoComplete="tel" name="phone" type="tel" required /></label>
        <label>Email address <input autoComplete="email" name="email" type="email" /></label>
        <label>Location / town <input autoComplete="address-level2" name="location" /></label>
        {mode !== "product" && (
          <label>Product of interest
            <select defaultValue={productName || ""} name="product">
              <option value="">Select a product (optional)</option>
              <option>Wall Master</option><option>Silk Vinyl</option><option>Under Coat</option><option>Not sure yet</option>
            </select>
          </label>
        )}
        {mode !== "contact" && (
          <label>{mode === "quote" ? "Estimated quantity" : "Quantity"} <input name="quantity" placeholder="If known" /></label>
        )}
        {mode === "quote" && (
          <>
            <label>Property type
              <select name="propertyType" defaultValue="">
                <option value="">Choose (optional)</option><option>Home</option><option>Business</option><option>Other project</option>
              </select>
            </label>
            <label>Preferred finish <input name="finish" placeholder="Optional" /></label>
          </>
        )}
        <label>Preferred contact
          <select name="contactMethod" defaultValue="WhatsApp">
            <option>WhatsApp</option><option>Phone</option><option>Email</option>
          </select>
        </label>
        <label className="form-wide">Project details / message
          <textarea name="message" rows={4} placeholder="Tell us what you need (optional)" />
        </label>
        {mode === "quote" && (
          <label className="form-wide file-field">Project image (optional)
            <input
              accept="image/jpeg,image/png,image/webp"
              name="projectImage"
              type="file"
              onChange={(event) => setFileName(event.currentTarget.files?.[0]?.name || "")}
            />
            <span>Images are not uploaded by this form. If you continue on WhatsApp, attach the image there. Maximum 5 MB.</span>
          </label>
        )}
      </div>
      <button className="button button-gold form-submit" type="submit">
        {mode === "quote" ? "Prepare my quote request" : "Continue with enquiry"} <span aria-hidden="true">↗</span>
      </button>
      {status && <p className="form-status" role="status">{status}</p>}
      <p className="form-privacy">Your details are not stored on this website. They are included only in the WhatsApp message you choose to send.</p>
    </form>
  );
}
