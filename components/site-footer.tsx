import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-data";

const socialLinks = [
  ["Facebook", siteConfig.social.facebook],
  ["Instagram", siteConfig.social.instagram],
  ["TikTok", siteConfig.social.tiktok],
  ["X", siteConfig.social.x],
  ["LinkedIn", siteConfig.social.linkedin],
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link className="wordmark wordmark-footer" href="/">
            <Image className="wordmark-logo" src="/puremax-logo-transparent.png" alt="PPL Puremax Paints logo" width={84} height={48} />
            <span className="wordmark-copy">
              <span className="wordmark-name">PUREMAX<span>.</span></span>
              <span className="wordmark-caption">PAINTS INDUSTRIES LIMITED</span>
            </span>
          </Link>
          <p className="footer-tagline">Colouring Your World</p>
          <p className="muted-on-dark">Paint solutions for homes, businesses and projects.</p>
          <div className="social-list" aria-label="Social media">
            {socialLinks.map(([label, url]) => (
              url ? <a href={url} key={label} target="_blank" rel="noreferrer">{label}</a> :
                <span className="social-pending" key={label} title={`${label} URL to be supplied`}>{label}</span>
            ))}
          </div>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <Link href="/about">About Puremax</Link>
          <Link href="/products">Products</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/dealers">Find a stockist</Link>
          <Link href="/blog">Paint guide</Link>
          <Link href="/faq">FAQs</Link>
        </div>
        <div className="footer-column">
          <h2>Our products</h2>
          <Link href="/products/wall-master">Wall Master</Link>
          <Link href="/products/silk-vinyl">Silk Vinyl</Link>
          <Link href="/products/under-coat">Under Coat</Link>
          <Link href="/quote">Request a quote</Link>
        </div>
        <div className="footer-column footer-contact">
          <h2>Get in touch</h2>
          <p><a href={`tel:+${siteConfig.whatsappNumber}`}>{siteConfig.phone}</a></p>
          <p>{siteConfig.address}</p>
          <p>{siteConfig.openingHours}</p>
          <Link className="footer-contact-link" href="/contact">Contact Puremax <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Puremax Paints Industries Limited. All rights reserved.</p>
        <div>
          <Link href="/privacy-policy">Privacy policy</Link>
          <Link href="/terms">Terms &amp; conditions</Link>
        </div>
        <span>Colouring Your World</span>
      </div>
    </footer>
  );
}
