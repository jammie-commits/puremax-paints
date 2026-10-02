import type { Metadata } from "next";
import { absoluteUrl } from "@/data/site-data";

export const metadata: Metadata = { title: "Privacy Policy", description: "Privacy information for the Puremax Paints website.", alternates: { canonical: absoluteUrl("/privacy-policy") } };

export default function PrivacyPage() {
  return (
    <section className="section legal-page"><div className="container legal-content">
      <span className="eyebrow">LEGAL</span><h1>Privacy policy</h1><p className="legal-updated">Last updated: 2 October 2026</p>
      <div className="notice-box"><span className="notice-icon" aria-hidden="true">i</span><p>This starter policy must be reviewed and completed by Puremax before publication. It is not legal advice.</p></div>
      <h2>Information submitted through this site</h2><p>Enquiry forms on this version of the website do not transmit or store your details. If WhatsApp is configured, a form prepares a message that you can choose to open and send. Any data you send through WhatsApp is handled under WhatsApp’s own terms and privacy policy.</p>
      <h2>Contact information</h2><p>For privacy questions, contact: [Privacy Contact / Email Address].</p>
      <h2>Analytics and cookies</h2><p>Analytics and tracking are not enabled by default. If they are added, this policy and any required consent mechanism must be updated to describe the services and data collected.</p>
      <h2>Updates</h2><p>Replace this draft with a policy reviewed for the final services, hosting, analytics and enquiry-handling practices before launch.</p>
    </div></section>
  );
}
