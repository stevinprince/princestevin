import { notFound } from "next/navigation";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";
import { getProjectBySlug, projects } from "@/data/projects";
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

export default async function ProjectStubPage({ params }: ProjectParams) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <PlaceholderPage
      label="Project"
      title={project.title}
      description="The full case study template will be implemented in a later step."
    />
  );
}
