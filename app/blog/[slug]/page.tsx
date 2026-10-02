import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, absoluteUrl, siteConfig } from "@/data/site-data";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return { title: "Guide not found" };
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: absoluteUrl(`/blog/${article.slug}`) },
    openGraph: { type: "article", title: article.title, description: article.excerpt, publishedTime: article.publishedAt },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: absoluteUrl(`/blog/${article.slug}`),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Paint Guide", item: absoluteUrl("/blog") },
      { "@type": "ListItem", position: 3, name: article.title, item: absoluteUrl(`/blog/${article.slug}`) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
      <div className="container breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/blog">Paint guide</Link><span>/</span><span>{article.title}</span></div>
      <article className="article-detail">
        <header className="article-detail-header"><span className="eyebrow">{article.category} · PUREMAX PAINT GUIDE</span><h1>{article.title}</h1><p>{article.excerpt}</p></header>
        <div className="article-detail-art"><span>PAINT GUIDE <b>·</b> {article.category.toUpperCase()}</span><span className="article-detail-art-mark">P.</span></div>
        <div className="article-content">
          {article.content.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
          <aside className="notice-box"><span className="notice-icon" aria-hidden="true">i</span><p>This guide provides general planning information, not a product specification. Always consult current product instructions and a qualified professional where appropriate.</p></aside>
          <div className="article-end-cta"><h2>Planning a paint project?</h2><p>Explore Puremax products or share your project details with the team.</p><Link className="button button-dark" href="/quote">Request a quote <span aria-hidden="true">↗</span></Link></div>
        </div>
      </article>
    </>
  );
}
