import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { articles, products, siteConfig } from "@/data/site-data";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  slogan: siteConfig.tagline,
  url: siteConfig.siteUrl,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }} />
      <section className="hero">
        <div className="hero-glow hero-glow-gold" />
        <div className="hero-glow hero-glow-cyan" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow eyebrow-light"><span className="eyebrow-line" /> PUREMAX PAINTS · KENYA</span>
            <h1>Paint that protects.<br /><em>Colour that lasts.</em></h1>
            <p className="hero-intro">Discover Puremax Paints — quality paint solutions designed for beautiful, durable finishes.</p>
            <div className="hero-actions">
              <Link className="button button-gold" href="/quote">Get a quote <span aria-hidden="true">↗</span></Link>
              <WhatsAppCta>Chat on WhatsApp</WhatsAppCta>
            </div>
            <Link className="hero-text-link" href="/products">Explore products <span aria-hidden="true">↓</span></Link>
            <div className="hero-footnote"><span className="hero-dot" /> Colouring your world, one finish at a time.</div>
          </div>
          <div className="hero-art" aria-label="Abstract paint and architecture illustration; replace with approved Puremax photography">
            <div className="hero-art-ring" />
            <div className="hero-arch arch-back" />
            <div className="hero-arch arch-front" />
            <div className="hero-paint-swipe swipe-gold" />
            <div className="hero-paint-swipe swipe-cyan" />
            <div className="hero-image-note"><span>01 / VISUAL PLACEHOLDER</span><small>Replace with approved Puremax project photography</small></div>
            <div className="hero-art-label"><span>PUREMAX</span><span>Colouring Your World</span></div>
          </div>
        </div>
        <div className="hero-bottom-line" />
      </section>

      <section className="trust-strip" aria-label="Puremax product overview">
        <div className="container trust-strip-inner">
          <span>Made for your next finish</span>
          <span className="trust-separator" />
          <span>Texture</span><span className="trust-separator" />
          <span>Interior</span><span className="trust-separator" />
          <span>Preparation</span>
          <Link href="/products">Explore the range <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="section section-benefits">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div>
              <span className="eyebrow">THE PUREMAX APPROACH</span>
              <h2>Good finishes begin<br /><em>with the right details.</em></h2>
            </div>
            <p>From choosing a finish to preparing a surface, we’re here to help you make a considered choice for your space.</p>
          </div>
          <div className="benefit-grid">
            {[
              ["01", "Made for real spaces", "Explore finishes for homes, businesses and projects."],
              ["02", "A finish for your vision", "Compare textures and finishes before you decide."],
              ["03", "Clear product guidance", "Ask for current product and application information."],
              ["04", "Talk it through", "Share your project and get in touch with the Puremax team."],
            ].map(([number, title, body]) => (
              <article className="benefit-card" key={number}>
                <span className="benefit-number">{number}</span>
                <span className="benefit-icon" aria-hidden="true">{number === "01" ? "⌂" : number === "02" ? "◒" : number === "03" ? "＋" : "↗"}</span>
                <h3>{title}</h3><p>{body}</p>
              </article>
            ))}
          </div>
          <p className="content-note">Product performance and technical details should be confirmed from current Puremax product information.</p>
        </div>
      </section>

      <section className="section section-products">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div><span className="eyebrow">THE PRODUCT RANGE</span><h2>Find your <em>finish.</em></h2></div>
            <p>Explore the Puremax products currently represented on this site. Need a specification, price or stock update? Get in touch.</p>
          </div>
          <div className="product-grid">
            {products.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}
          </div>
          <div className="center-action"><Link className="button button-dark" href="/products">Explore all products <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="colour-section">
        <div className="container colour-layout">
          <div className="colour-copy">
            <span className="eyebrow eyebrow-light">COLOUR, WITH INTENTION</span>
            <h2>Make the space<br />feel like <em>yours.</em></h2>
            <p>From a calm interior to a statement texture, the right finish can help make a space feel considered. Start with the look you want, then confirm the right product for your surface.</p>
            <Link className="button button-light" href="/quote">Let's talk about your project <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="colour-art" aria-label="Abstract colour swatches illustration">
            <div className="swatch swatch-one"><span>01</span></div><div className="swatch swatch-two"><span>02</span></div>
            <div className="swatch swatch-three"><span>03</span></div><div className="swatch swatch-four"><span>04</span></div>
            <div className="swatch-caption">COLOUR STUDY<br /><small>Artwork placeholder</small></div>
          </div>
        </div>
      </section>

      <section className="section section-projects">
        <div className="container projects-teaser">
          <div className="section-heading">
            <span className="eyebrow">PUREMAX IN THE WORLD</span>
            <h2>Real projects.<br /><em>Real colour.</em></h2>
          </div>
          <div className="project-empty-visual">
            <div className="project-empty-lines"><span /><span /><span /></div>
            <div className="project-empty-copy"><span>PROJECT GALLERY</span><strong>Coming soon</strong><small>Project photos and details will appear here when approved content is available.</small></div>
          </div>
          <p className="project-teaser-foot">We don’t publish project or customer claims without verified details and permission.</p>
          <Link className="text-link" href="/projects">Visit project gallery <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="section section-stockist">
        <div className="container stockist-banner">
          <div>
            <span className="eyebrow">FIND PUREMAX NEAR YOU</span>
            <h2>Looking for a<br /><em>stockist?</em></h2>
            <p>Our directory is ready for verified dealer information. Contact us to ask about availability near you.</p>
            <Link className="button button-dark" href="/dealers">Find a stockist <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="stockist-map-art" aria-hidden="true"><span className="map-grid" /><span className="map-pin">P</span><span className="map-caption">DEALER LOCATOR<br /><small>Verified locations pending</small></span></div>
        </div>
      </section>

      <section className="section section-guide">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div><span className="eyebrow">THE PUREMAX PAINT GUIDE</span><h2>Know before<br /><em>you paint.</em></h2></div>
            <p>Practical starting points for planning your next paint project. Always confirm application details with current product information.</p>
          </div>
          <div className="article-grid">
            {articles.slice(0, 3).map((article, index) => (
              <Link className="article-card" href={`/blog/${article.slug}`} key={article.slug}>
                <div className={`article-art article-art-${index + 1}`}><span>{article.category}</span><b>0{index + 1}</b></div>
                <span className="article-category">{article.category}</span>
                <h3>{article.title}</h3><p>{article.excerpt}</p>
                <span className="text-link">Read guide <span aria-hidden="true">↗</span></span>
              </Link>
            ))}
          </div>
          <div className="center-action"><Link className="text-link" href="/blog">Explore the paint guide <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="testimonial-placeholder">
        <div className="container testimonial-inner">
          <span className="quote-mark" aria-hidden="true">“</span>
          <div><span className="eyebrow eyebrow-light">FROM THE PUREMAX COMMUNITY</span><h2>Real stories,<br /><em>coming soon.</em></h2>
            <p>Customer testimonials will be shared here once approved by the people who shared them.</p>
            <Link href="/contact" className="text-link text-link-light">Talk to Puremax <span aria-hidden="true">↗</span></Link></div>
          <span className="testimonial-stamp">CUSTOMER<br />VOICES</span>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-inner">
          <div><span className="eyebrow eyebrow-light">YOUR NEXT PROJECT STARTS HERE</span><h2>Bring your walls<br />to <em>life.</em></h2></div>
          <div><p>Tell us what you’re planning. We’ll help you take the next step.</p><div className="hero-actions"><Link className="button button-gold" href="/quote">Request a quote <span aria-hidden="true">↗</span></Link><WhatsAppCta>Chat with Puremax</WhatsAppCta></div></div>
        </div>
      </section>
    </>
  );
}
