import Link from "next/link";
import { WhatsAppCta } from "@/components/whatsapp-cta";

export function MobileCta() {
  return (
    <div className="mobile-cta" aria-label="Quick actions">
      <WhatsAppCta>WhatsApp</WhatsAppCta>
      <Link className="button button-gold" href="/quote">Get a quote</Link>
    </div>
  );
}
