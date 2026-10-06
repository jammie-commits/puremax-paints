import type { Metadata } from "next";
import { absoluteUrl } from "@/data/site-data";

export const metadata: Metadata = { title: "Terms & Conditions", description: "Website terms for Puremax Paints Industries Limited.", alternates: { canonical: absoluteUrl("/terms") } };

export default function TermsPage() {
  return (
    <section className="section legal-page"><div className="container legal-content">
      <span className="eyebrow">LEGAL</span><h1>Terms &amp; conditions</h1><p className="legal-updated">Last updated: 2 October 2026</p>
      <div className="notice-box"><span className="notice-icon" aria-hidden="true">i</span><p>This starter text must be reviewed and completed by Puremax before publication. It is not legal advice.</p></div>
      <h2>Website information</h2><p>Product information on this site is provided as a general introduction. Prices, availability and detailed specifications are not published unless explicitly confirmed. Contact Puremax for current information before ordering or applying a product.</p>
      <h2>Enquiry links</h2><p>Enquiry forms may prepare a message for WhatsApp when a business number is configured. The visitor chooses whether to open and send the message. The site does not confirm an order, quote or product availability.</p>
      <h2>Project and customer content</h2><p>Project photographs and customer statements may only be published after the appropriate facts and permissions have been confirmed.</p>
      <h2>Contact</h2><p>For questions about these terms, contact Puremax at +254 721 177 035.</p>
    </div></section>
  );
}
