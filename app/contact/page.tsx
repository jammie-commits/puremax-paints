import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/lead-form";
import { absoluteUrl, siteConfig } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Contact Puremax Paints",
  description: "Contact Puremax Paints Industries Limited for product enquiries, stockist information and project quotes.",
  alternates: { canonical: absoluteUrl("/contact") },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero page-hero-cream">
        <div className="container page-hero-content"><span className="eyebrow">WE'RE HERE TO HELP</span><h1>Let's talk<br /><em>paint.</em></h1><p>Questions about a product, a project or a stockist? Get in touch with Puremax.</p></div>
        <span className="page-hero-watermark page-hero-watermark-light">↗</span>
      </section>
      <section className="section" id="contact-options"><div className="container contact-options">
        <div><span className="eyebrow">CONTACT DETAILS</span><h2>Choose how<br /><em>to reach us.</em></h2><p>Business contact information will be published here once confirmed.</p></div>
        <div className="contact-detail-list">
          <div><span>Telephone</span><strong>{siteConfig.phone}</strong></div>
          <div><span>Email</span><strong>{siteConfig.email}</strong></div>
          <div><span>Address</span><strong>{siteConfig.address}</strong></div>
          <div><span>Opening hours</span><strong>{siteConfig.openingHours}</strong></div>
          <div><span>WhatsApp</span><strong>{siteConfig.whatsappNumber ? "Configured" : "[WhatsApp Number — configure in environment]"}</strong></div>
          <Link className="text-link" href="/dealers">Find a stockist <span aria-hidden="true">↗</span></Link>
        </div>
      </div></section>
      <section className="section section-form"><div className="container form-layout"><div><span className="eyebrow">SEND US A MESSAGE</span><h2>What can we<br /><em>help with?</em></h2><p>This form will prepare your message for WhatsApp when a verified business number has been configured. Nothing is stored on this website.</p></div><LeadForm mode="contact" /></div></section>
    </>
  );
}
