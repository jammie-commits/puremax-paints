export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { articles, absoluteUrl, products, projects } from "@/data/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/about", "/products", "/projects", "/dealers", "/blog", "/faq", "/quote", "/contact", "/privacy-policy", "/terms"];
  const routes = [
    ...staticRoutes.map((path) => ({ url: absoluteUrl(path), lastModified: new Date("2026-10-02"), changeFrequency: "monthly" as const, priority: path === "/" ? 1 : 0.7 })),
    ...products.map(({ slug }) => ({ url: absoluteUrl(`/products/${slug}`), lastModified: new Date("2026-10-02"), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...articles.map(({ slug, publishedAt }) => ({ url: absoluteUrl(`/blog/${slug}`), lastModified: new Date(publishedAt), changeFrequency: "yearly" as const, priority: 0.6 })),
    ...projects.map(({ slug }) => ({ url: absoluteUrl(`/projects/${slug}`), lastModified: new Date("2026-10-02"), changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
  return routes;
}
