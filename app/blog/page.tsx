import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, articles } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Puremax Paint Guide",
  description: "Practical paint planning and product guide articles from Puremax Paints. Confirm all technical details with current product information.",
  alternates: { canonical: absoluteUrl("/blog") },
};

export default function BlogPage() {
  return (
    <>
      <section className="page-hero page-hero-cream">
        <div className="container page-hero-content">
          <span className="eyebrow">THE KNOWLEDGE CENTRE</span>
          <h1>Puremax<br /><em>Paint Guide.</em></h1>
          <p>Helpful starting points for planning, preparing and caring for your next paint project.</p>
        </div>
        <span className="page-hero-watermark page-hero-watermark-light">✳</span>
      </section>
      <section className="section"><div className="container">
        <div className="article-grid article-grid-blog">
          {articles.map((article, index) => (
            <Link className="article-card" href={`/blog/${article.slug}`} key={article.slug}>
              <div className={`article-art article-art-${index + 1}`}><span>{article.category}</span><b>0{index + 1}</b></div>
              <span className="article-category">{article.category}</span><h2>{article.title}</h2><p>{article.excerpt}</p>
              <span className="text-link">Read guide <span aria-hidden="true">↗</span></span>
            </Link>
          ))}
        </div>
        <p className="content-note">Guides are general information only. Product-specific coverage, surface suitability and application details must be confirmed against current product documentation.</p>
      </div></section>
    </>
  );
}
