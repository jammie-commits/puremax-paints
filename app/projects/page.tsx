import type { Metadata } from "next";
import { ProjectGallery } from "@/components/project-gallery";
import { absoluteUrl, projects } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Puremax Paint Projects",
  description: "Explore real spaces coloured by Puremax. Project gallery details will be published as verified, approved content becomes available.",
  alternates: { canonical: absoluteUrl("/projects") },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero page-hero-dark">
        <div className="container page-hero-content">
          <span className="eyebrow eyebrow-light">THE PROJECT GALLERY</span>
          <h1>Projects coloured<br /><em>by Puremax.</em></h1>
          <p>See how Puremax Paints brings colour, protection and beautiful finishes to real spaces.</p>
        </div>
        <span className="page-hero-watermark">P.</span>
      </section>
      <section className="section">
        <div className="container">
          <ProjectGallery projects={projects} />
        </div>
      </section>
    </>
  );
}
