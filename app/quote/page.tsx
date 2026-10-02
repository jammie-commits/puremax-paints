import type { Metadata } from "next";
import { LeadForm } from "@/components/lead-form";
import { absoluteUrl } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Request a Paint Quote",
  description: "Share your project details with Puremax Paints and prepare a quote request for WhatsApp.",
  alternates: { canonical: absoluteUrl("/quote") },
};

export default function QuotePage() {
  return (
    <>
      <section className="page-hero page-hero-dark">
        <div className="container page-hero-content"><span className="eyebrow eyebrow-light">LET'S PLAN YOUR NEXT FINISH</span><h1>Request a Puremax<br /><em>paint quote.</em></h1><p>Tell us a little about your project. The form prepares a WhatsApp message; you choose whether to send it.</p></div>
        <span className="page-hero-watermark">01</span>
      </section>
      <section className="section section-form"><div className="container form-layout">
        <div className="form-sidebar"><span className="eyebrow">A FEW PROJECT DETAILS</span><h2>Start with<br /><em>the basics.</em></h2><p>Sharing the location, product and estimated quantity can help make your enquiry clearer. Leave anything you’re unsure about blank.</p><div className="form-step"><span>01</span> Tell us about your project</div><div className="form-step"><span>02</span> Review your WhatsApp message</div><div className="form-step"><span>03</span> Choose whether to send</div></div>
        <LeadForm mode="quote" />
      </div></section>
    </>
  );
}
