"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Project } from "@/data/site-data";

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState("All");
  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((project) => project.category)))], [projects]);
  const shown = category === "All" ? projects : projects.filter((project) => project.category === category);

  return (
    <>
      {categories.length > 1 && (
        <div className="project-filters" aria-label="Filter projects by category">
          {categories.map((item) => (
            <button aria-pressed={category === item} key={item} type="button" onClick={() => setCategory(item)}>{item}</button>
          ))}
        </div>
      )}
      {shown.length === 0 ? (
        <div className="projects-empty">
          <div className="project-empty-visual project-empty-visual-large">
            <div className="project-empty-lines"><span /><span /><span /></div>
            <div className="project-empty-copy"><span>PUREMAX PROJECTS</span><strong>Coming soon</strong><small>Approved project stories and photography will be featured here.</small></div>
          </div>
          <div className="empty-state">
            <span className="eyebrow">A NOTE ON OUR GALLERY</span>
            <h2>Only real Puremax projects belong here.</h2>
            <p>No project photos, locations or customer permissions have been supplied for publication. This gallery will grow as verified details become available.</p>
            <Link className="button button-dark" href="/quote">Want your project to use Puremax? <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      ) : (
        <div className="project-gallery">
          {shown.map((project) => (
            <Link className="project-card" href={`/projects/${project.slug}`} key={project.slug}>
              {project.images[0] ? (
                <div className="project-card-image"><Image src={project.images[0]} alt={`${project.title} project`} fill sizes="(max-width: 760px) 100vw, 33vw" /></div>
              ) : (
                <div className="project-card-placeholder"><span>Approved project photo pending</span></div>
              )}
              <span className="eyebrow">{project.category} · {project.location}</span>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <span className="text-link">View project <span aria-hidden="true">↗</span></span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
