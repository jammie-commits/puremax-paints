import type { Metadata } from "next";
import { FaqList } from "@/components/faq-list";
import { absoluteUrl, faqs } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about Puremax products, prices, stockists and product information.",
};

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
    url: absoluteUrl("/faq"),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <section className="page-hero page-hero-dark">
        <div className="container page-hero-content"><span className="eyebrow eyebrow-light">HERE TO HELP</span><h1>Frequently<br /><em>asked questions.</em></h1><p>Quick answers about products, pricing, stockists and getting in touch.</p></div>
        <span className="page-hero-watermark">?</span>
      </section>
      <section className="section"><div className="container faq-page-grid"><div><span className="eyebrow">GOOD TO KNOW</span><h2>Clear answers,<br /><em>no guesswork.</em></h2><p>For current product-specific details, request the latest information from Puremax.</p></div><FaqList /></div></section>
    </>
  );
}
