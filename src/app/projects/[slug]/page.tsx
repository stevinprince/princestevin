import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "@/components/projects/ProjectCaseStudy";
import { ContactSection } from "@/components/sections/ContactSection";
import {
  getProjectBySlug,
  getRelatedProjects,
  projects,
} from "@/data/projects";
import { createMetadata } from "@/lib/metadata";

type ProjectParams = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectParams) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return createMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: ProjectParams) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectCaseStudy
        project={project}
        related={getRelatedProjects(project.slug)}
      />
      <ContactSection />
    </>
  );
}
