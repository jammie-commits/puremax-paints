import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { absoluteUrl, products } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Paint Products & Finishes",
  description: "Explore Puremax Wall Master, Silk Vinyl and Under Coat. Request current prices, availability and product information.",
  alternates: { canonical: absoluteUrl("/products") },
};

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero page-hero-cream">
        <div className="container page-hero-content">
          <span className="eyebrow">THE PUREMAX RANGE</span>
          <h1>Find your<br /><em>finish.</em></h1>
          <p>Explore product details and get in touch for current pricing, stock and technical information.</p>
        </div>
        <span className="page-hero-watermark page-hero-watermark-light">03</span>
      </section>
      <section className="section">
        <div className="container">
          <div className="product-grid product-grid-large">
            {products.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}
          </div>
          <div className="notice-box">
            <span className="notice-icon" aria-hidden="true">i</span>
            <p>Every product listed here is approved by the Kenya Bureau of Standards (KEBS). Contact Puremax to confirm current prices and availability.</p>
          </div>
        </div>
      </section>
    </>
  );
}
