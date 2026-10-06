import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { ProductEnquiry } from "@/components/product-enquiry";
import { ProductCard } from "@/components/product-card";
import { absoluteUrl, products, siteConfig } from "@/data/site-data";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return { title: "Product not found" };
  return {
    title: `${product.name} ${product.finish} Paint`,
    description: `${product.name} by Puremax Paints. ${product.shortDescription}. Request current price, availability and product information.`,
    alternates: { canonical: absoluteUrl(`/products/${product.slug}`) },
    openGraph: { title: `${product.name} | Puremax Paints`, description: product.shortDescription, type: "website" },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: { "@type": "Brand", name: siteConfig.shortName },
    category: product.finish,
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Products", item: absoluteUrl("/products") },
      { "@type": "ListItem", position: 3, name: product.name, item: absoluteUrl(`/products/${product.slug}`) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
      <div className="container breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span><span>{product.name}</span></div>
      <section className="product-detail">
        <div className="container product-detail-grid">
          <div className="product-detail-media">
            <div className="product-detail-art product-art product-art-photo">
              <Image src={product.image} alt={product.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 45vw" />
              <span className="kebs-badge">KEBS approved</span>
            </div>
            {product.mockupImage && (
              <div className="product-detail-art product-art product-art-photo product-detail-mockup">
                <Image src={product.mockupImage} alt={`${product.name} bucket mock-up`} fill sizes="(max-width: 900px) 100vw, 45vw" />
              </div>
            )}
          </div>
          <div className="product-detail-copy">
            <span className="eyebrow">{product.finish}</span>
            <h1>{product.name}</h1>
            <p className="product-detail-lede">{product.description}</p>
            <div className="detail-price">{product.promotionalPrice || product.price || "Contact us for current price"}{product.promotionalPrice && product.previousPrice && <del className="detail-previous-price">{product.previousPrice}</del>}<small>Price confirmed on request</small></div>
            <dl className="spec-list">
              <div><dt>Pack size</dt><dd>{product.packSize}</dd></div>
              <div><dt>Finish</dt><dd>{product.finish}</dd></div>
              <div><dt>Availability</dt><dd>{product.availability === "available" ? "Available" : product.availability === "out-of-stock" ? "Out of stock" : "Contact Puremax to confirm"}</dd></div>
              {product.variants.length > 0 && <div><dt>Variants</dt><dd>{product.variants.join(" · ")}</dd></div>}
            </dl>
            <div className="hero-actions">
              <ProductEnquiry productName={product.name} />
              <WhatsAppCta message={`Hello Puremax Paints, I am interested in ${product.name}. Please share the current price, availability and nearest stockist.`}>WhatsApp enquiry</WhatsAppCta>
            </div>
            <p className="content-note">Prices vary by pack size, colour and location. Contact Puremax for the current price and nearest stockist.</p>
          </div>
        </div>
      </section>
      <section className="section product-detail-lower">
        <div className="container detail-lower-grid">
          <div><span className="eyebrow">PRODUCT INFORMATION</span><h2>Details to help<br /><em>you decide.</em></h2><p>Ask the Puremax team about recommended use, suitable surfaces and current availability for your project.</p><Link className="text-link" href="/faq">Read product FAQs <span aria-hidden="true">↗</span></Link></div>
          <div className="detail-information">
            <div><span>01</span><h3>Designed for</h3><p>{product.uses}</p></div>
            <div><span>02</span><h3>Key features</h3><ul className="feature-list">{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
            <div><span>03</span><h3>Typical application</h3><ol className="feature-list">{product.application.map((step) => <li key={step}>{step}</li>)}</ol><p className="content-note">Guidance is typical. Always follow the label on the pack.</p></div>
          </div>
        </div>
      </section>
      <section className="section product-label-section">
        <div className="container">
          <span className="eyebrow">PACK LABEL</span>
          <h2>The full <em>label.</em></h2>
          <div className="label-image"><Image src={product.labelImage} alt={`${product.name} full pack label`} fill sizes="(max-width: 1200px) 100vw, 1200px" /></div>
        </div>
      </section>
      <section className="section product-faq">
        <div className="container product-faq-grid">
          <div><span className="eyebrow">PRODUCT FAQ</span><h2>A few things<br /><em>to know.</em></h2></div>
          <div className="faq-list">
            <details className="faq-item"><summary><span className="faq-number">01</span>What is the current price?<span className="faq-plus" aria-hidden="true">+</span></summary><p>Prices vary by pack size, colour and location. Contact Puremax to confirm the current price and availability.</p></details>
            <details className="faq-item"><summary><span className="faq-number">02</span>Where can I find application instructions?<span className="faq-plus" aria-hidden="true">+</span></summary><p>The typical application steps are listed above. Always follow the label on the pack, and ask Puremax for the latest product information before starting.</p></details>
            <details className="faq-item"><summary><span className="faq-number">03</span>{product.name === "Wall Master" ? "Which variants are available?" : "Is this product available?"}<span className="faq-plus" aria-hidden="true">+</span></summary><p>{product.name === "Wall Master" ? `Wall Master comes in ${product.variants.join(", ")} variants. Confirm current stock with Puremax.` : "Contact Puremax to confirm current availability and product details."}</p></details>
          </div>
        </div>
      </section>
      <section className="section related-products"><div className="container">
        <div className="section-heading section-heading-row"><div><span className="eyebrow">EXPLORE THE RANGE</span><h2>More from<br /><em>Puremax.</em></h2></div><p>Compare other products in the Puremax range and ask the team which information is right for your project.</p></div>
        <div className="product-grid">{products.filter((item) => item.slug !== product.slug).map((item, index) => <ProductCard key={item.slug} product={item} index={index} />)}</div>
      </div></section>
    </>
  );
}
