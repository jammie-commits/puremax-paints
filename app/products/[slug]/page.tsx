import type { Metadata } from "next";
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
          <div className={`product-detail-art product-art ${product.slug === "wall-master" ? "can-blue" : product.slug === "silk-vinyl" ? "can-gold" : "can-charcoal"}`}>
            <span className="art-caption">PUREMAX PAINTS</span>
            <span className="paint-can product-detail-can" aria-hidden="true"><span className="can-lid" /><span className="can-label"><span className="can-brand">PUREMAX</span><span className="can-product">{product.name}</span><span className="can-tagline">COLOURING YOUR WORLD</span></span><span className="can-size">{product.packSize}</span></span>
            <span className="art-placeholder-note">Illustrative pack · replace with approved product image</span>
          </div>
          <div className="product-detail-copy">
            <span className="eyebrow">{product.finish}</span>
            <h1>{product.name}</h1>
            <p className="product-detail-lede">{product.description}</p>
            <div className="detail-price">{product.promotionalPrice || product.price || "Contact us for current price"}{product.promotionalPrice && product.previousPrice && <del className="detail-previous-price">{product.previousPrice}</del>}<small>Price and availability to be confirmed</small></div>
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
            <p className="content-note">Detailed application instructions and technical specifications have not been supplied. Please request the current product information.</p>
          </div>
        </div>
      </section>
      <section className="section product-detail-lower">
        <div className="container detail-lower-grid">
          <div><span className="eyebrow">PRODUCT INFORMATION</span><h2>Details to help<br /><em>you decide.</em></h2><p>Ask the Puremax team about recommended use, suitable surfaces, application information and current availability for your project.</p><Link className="text-link" href="/faq">Read product FAQs <span aria-hidden="true">↗</span></Link></div>
          <div className="detail-information">
            <div><span>01</span><h3>Designed for</h3><p>{product.slug === "silk-vinyl" ? "Interior use, as stated in the supplied product description." : "Ask Puremax to confirm the recommended application and surface."}</p></div>
            <div><span>02</span><h3>Application</h3><p>Request the latest application instructions and product data before beginning work.</p></div>
            <div><span>03</span><h3>Price &amp; stock</h3><p>Contact the Puremax team for current price and local availability.</p></div>
          </div>
        </div>
      </section>
      <section className="section product-faq">
        <div className="container product-faq-grid">
          <div><span className="eyebrow">PRODUCT FAQ</span><h2>A few things<br /><em>to know.</em></h2></div>
          <div className="faq-list">
            <details className="faq-item"><summary><span className="faq-number">01</span>What is the current price?<span className="faq-plus" aria-hidden="true">+</span></summary><p>Prices are not listed yet. Contact Puremax to confirm the current price and availability.</p></details>
            <details className="faq-item"><summary><span className="faq-number">02</span>Where can I find application instructions?<span className="faq-plus" aria-hidden="true">+</span></summary><p>Ask Puremax for the latest product information and application instructions before starting your project.</p></details>
            <details className="faq-item"><summary><span className="faq-number">03</span>{product.name === "Wall Master" ? "Which variants are listed?" : "Is this product available?"}<span className="faq-plus" aria-hidden="true">+</span></summary><p>{product.name === "Wall Master" ? `The supplied information lists ${product.variants.join(", ")}. Confirm current stock with Puremax.` : "Contact Puremax to confirm current availability and product details."}</p></details>
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
