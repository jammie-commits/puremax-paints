import Link from "next/link";
import { whatsappUrl } from "@/data/site-data";

type WhatsAppCtaProps = {
  message?: string;
  className?: string;
  children?: React.ReactNode;
  floating?: boolean;
};

export function WhatsAppCta({
  message = "Hello Puremax Paints, I would like to make an enquiry about your paint products.",
  className = "",
  children,
  floating = false,
}: WhatsAppCtaProps) {
  const href = whatsappUrl(message);
  const classes = `${floating ? "whatsapp-float" : "button button-outline button-whatsapp"} ${className}`.trim();

  if (!href) {
    return (
      <Link
        className={`${classes} whatsapp-unconfigured`}
        href="/contact#contact-options"
        aria-label="WhatsApp number not yet configured; view contact options"
        title="WhatsApp number to be configured"
      >
        <span className="whatsapp-mark" aria-hidden="true">W</span>
        {floating ? <span className="whatsapp-tooltip">WhatsApp number pending</span> : "WhatsApp not configured"}
      </Link>
    );
  }

  return (
    <a className={classes} href={href} target="_blank" rel="noreferrer">
      <span className="whatsapp-mark" aria-hidden="true">W</span>
      {children || (floating ? <span className="whatsapp-tooltip">Chat with Puremax</span> : "Chat on WhatsApp")}
    </a>
  );
}
