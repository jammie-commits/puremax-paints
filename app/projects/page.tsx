import type { Metadata } from "next";
import { ProjectGallery } from "@/components/project-gallery";
import { absoluteUrl, projects, projectVideo } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Puremax Paint Projects",
  description: "Explore real homes and buildings finished with Puremax paints, with before and after comparisons.",
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
      <section className="section project-video-section">
        <div className="container">
          <span className="eyebrow">ON SITE</span>
          <h2>Watch the <em>work.</em></h2>
          <video className="project-video" controls preload="none" poster={projectVideo.poster} playsInline>
            <source src={projectVideo.src} type="video/mp4" />
            Your browser does not support video playback.
          </video>
        </div>
      </section>
    </>
  );
}
