import Link from "next/link";
import type { Product } from "@/data/site-data";
import { WhatsAppCta } from "@/components/whatsapp-cta";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const colors = ["can-blue", "can-gold", "can-charcoal"];
  return (
    <article className="product-card">
      <Link className={`product-art ${colors[index % colors.length]}`} href={`/products/${product.slug}`} aria-label={`View ${product.name}`}>
        <span className="art-caption">PUREMAX PAINTS</span>
        <span className="paint-can" aria-hidden="true">
          <span className="can-lid" />
          <span className="can-label">
            <span className="can-brand">PUREMAX</span>
            <span className="can-product">{product.name}</span>
            <span className="can-tagline">COLOURING YOUR WORLD</span>
          </span>
          <span className="can-size">{product.packSize}</span>
        </span>
        <span className="art-placeholder-note">Illustrative pack · artwork placeholder</span>
      </Link>
      <div className="product-card-body">
        <div className="product-eyebrow">{product.finish}</div>
        <h3><Link href={`/products/${product.slug}`}>{product.name}</Link></h3>
        <p>{product.shortDescription}</p>
        <div className="product-meta">
          <span>Pack size</span>
          <strong>{product.packSize}</strong>
        </div>
        {product.variants.length > 0 && (
          <div className="variant-row">
            <span>Variants</span>
            {product.variants.map((variant) => <span className="variant-pill" key={variant}>{variant}</span>)}
          </div>
        )}
        <p className="price-note">
          {product.promotionalPrice ? <><del>{product.previousPrice}</del><strong>{product.promotionalPrice}</strong></> : product.price || "Contact us for current price"}
        </p>
        <span className={`availability availability-${product.availability}`}>
          {product.availability === "available" ? "Available" : product.availability === "out-of-stock" ? "Out of stock" : "Check current availability"}
        </span>
        <div className="product-actions">
          <Link className="text-link" href={`/products/${product.slug}`}>View product <span aria-hidden="true">↗</span></Link>
          <WhatsAppCta message={`Hello Puremax Paints, I am interested in ${product.name}. Please share the current price, availability and nearest stockist.`}>
            Enquire
          </WhatsAppCta>
        </div>
      </div>
    </article>
  );
}
