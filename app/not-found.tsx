import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <span className="eyebrow eyebrow-light">404 · PAGE NOT FOUND</span>
        <h1>Looks like we’ve<br /><em>lost the colour.</em></h1>
        <p>The page you’re looking for doesn’t exist or may have moved.</p>
        <div className="hero-actions"><Link className="button button-gold" href="/">Back home <span aria-hidden="true">↗</span></Link><Link className="button button-outline" href="/products">Explore products</Link><Link className="text-link text-link-light" href="/contact">Contact Puremax <span aria-hidden="true">↗</span></Link></div>
      </div>
      <span className="not-found-number">404</span>
    </section>
  );
}
