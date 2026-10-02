import type { Metadata, Viewport } from "next";
import { ChatWidget } from "@/components/chat-widget";
import { MobileCta } from "@/components/mobile-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { siteConfig } from "@/data/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Puremax Paints Kenya | Quality Paints & Finishes | Colouring Your World",
    template: "%s | Puremax Paints Kenya",
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: siteConfig.name,
    title: "Puremax Paints Kenya | Colouring Your World",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Puremax Paints Kenya | Colouring Your World",
    description: siteConfig.description,
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#10100f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <WhatsAppCta floating />
        <ChatWidget />
        <MobileCta />
      </body>
    </html>
  );
}
