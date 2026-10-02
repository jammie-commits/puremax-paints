import { notFound } from "next/navigation";
import Image from "next/image";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import type { Metadata } from "next";
import { absoluteUrl, projects } from "@/data/site-data";
import Link from "next/link";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? {
    title: `${project.title} | Puremax Projects`,
    description: project.description,
    alternates: { canonical: absoluteUrl(`/projects/${project.slug}`) },
  } : { title: "Project not found" };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <article className="section">
      <div className="container">
        <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/projects">Projects</Link><span>/</span><span>{project.title}</span></div>
        <span className="eyebrow">{project.category} · {project.location}</span>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        {project.images.length > 0 && <div className="project-detail-images">{project.images.map((image) => <div className="project-detail-image" key={image}><Image src={image} alt={`${project.title} project view`} fill sizes="(max-width: 760px) 100vw, 50vw" /></div>)}</div>}
        {project.beforeImage && project.afterImage && <BeforeAfterSlider beforeSrc={project.beforeImage} afterSrc={project.afterImage} projectName={project.title} />}
        {project.productsUsed.length > 0 && <section className="project-detail-block"><h2>Puremax products used</h2><ul>{project.productsUsed.map((name) => <li key={name}>{name}</li>)}</ul></section>}
        {project.testimonial && <blockquote className="project-testimonial">“{project.testimonial}”</blockquote>}
        <div className="project-detail-cta"><h2>Want your project to use Puremax?</h2><Link className="button button-gold" href="/quote">Request a quote <span aria-hidden="true">↗</span></Link></div>
      </div>
    </article>
  );
}
