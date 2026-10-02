import type { Metadata } from "next";
import { DealerSearch } from "@/components/dealer-search";
import { absoluteUrl } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Find a Puremax Stockist",
  description: "Search the Puremax Paints stockist directory by town or location, or contact the team to check availability.",
  alternates: { canonical: absoluteUrl("/dealers") },
};

export default function DealersPage() {
  return (
    <>
      <section className="page-hero page-hero-cream">
        <div className="container page-hero-content">
          <span className="eyebrow">DEALER &amp; STOCKIST LOCATOR</span>
          <h1>Find Puremax<br /><em>near you.</em></h1>
          <p>Search verified stockist details by town or location, or contact the Puremax team for help.</p>
        </div>
        <span className="page-hero-watermark page-hero-watermark-light">⌖</span>
      </section>
      <section className="section"><div className="container dealer-directory"><DealerSearch /></div></section>
    </>
  );
}
