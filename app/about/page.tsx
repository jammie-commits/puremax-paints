import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/data/site-data";

export const metadata: Metadata = {
  title: "About Puremax Paints",
  description: "Get to know Puremax Paints Industries Limited and its Colouring Your World brand story.",
  alternates: { canonical: absoluteUrl("/about") },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero-dark">
        <div className="container page-hero-content">
          <span className="eyebrow eyebrow-light">ABOUT PUREMAX</span>
          <h1>Colouring<br /><em>your world.</em></h1>
          <p>Paint solutions for homes, businesses and the spaces where life happens.</p>
        </div>
        <span className="page-hero-watermark">P.</span>
      </section>
      <section className="section">
        <div className="container story-grid">
          <div><span className="eyebrow">WHO WE ARE</span><h2>A brand built around<br /><em>the way we live.</em></h2></div>
          <div className="story-copy">
            <p>Puremax Paints Industries Limited is a Kenyan paint brand with a focus on finishes for homes, businesses and projects. The Puremax story is rooted in the realities of Kenyan buildings and the people who care for them.</p>
            <p>Every building and surface has its own needs. Our aim is to help customers, contractors and fundis explore suitable finishes and get the product information they need to make an informed choice.</p>
            <p className="content-note">Company history, manufacturing details, certifications and technical performance claims will be added when verified information is provided.</p>
          </div>
        </div>
      </section>
      <section className="about-values">
        <div className="container">
          <span className="eyebrow eyebrow-light">WHAT WE BELIEVE</span>
          <div className="values-grid">
            {[
              ["01", "Built around real needs", "The right finish starts with understanding the space, surface and project."],
              ["02", "Craft matters", "Preparation, product choice and application all play a part in the final result."],
              ["03", "Guidance should be clear", "We aim to make it easier to ask questions and find current product information."],
            ].map(([n, title, body]) => <article key={n}><span>{n}</span><h2>{title}</h2><p>{body}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container story-grid">
          <div><span className="eyebrow">BUILT FOR KENYA</span><h2>Made for the<br /><em>places we call home.</em></h2></div>
          <div className="story-copy">
            <p>The supplied Puremax brand story reflects on the conditions Kenyan homes and buildings may experience — sun, rain, dust and humidity — and the importance of choosing appropriate finishes.</p>
            <p>Different buildings and surfaces have different requirements. Ask for current product information before making a specification or application decision.</p>
            <Link className="text-link" href="/products">Explore the product range <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
      <section className="about-cta"><div className="container"><h2>Have a project in mind?</h2><p>Let’s find a good place to start.</p><Link className="button button-gold" href="/quote">Request a quote <span aria-hidden="true">↗</span></Link></div></section>
    </>
  );
}
