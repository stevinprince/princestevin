import { ProjectCard } from "@/components/projects/ProjectCard";
import { ContactSection } from "@/components/sections/ContactSection";
import { FilterPills } from "@/components/ui/FilterPills";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { getProjectCategories, projects } from "@/data/projects";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Projects",
  description: "Selected backend, fintech, and cloud-native projects.",
  path: "/projects",
});

type ProjectsPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const { category } = await searchParams;
  const categories = getProjectCategories();
  const visible = category
    ? projects.filter((project) => project.category === category)
    : projects;

  return (
    <>
      <Section bordered={false}>
        <PageHeader
          eyebrow="Projects"
          title="Recent work"
          description="Illustrative project entries for this portfolio. Replace or remove samples in the projects data file."
        />
        <div className="mt-8">
          <FilterPills
            allHref="/projects"
            active={category}
            items={categories.map((item) => ({
              label: item,
              value: item,
              href: `/projects?category=${encodeURIComponent(item)}`,
            }))}
          />
        </div>
        {visible.length > 0 ? (
          <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2">
            {visible.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                headingLevel="h2"
              />
            ))}
          </div>
        ) : (
          <p className="mt-12 text-muted">No projects in this category yet.</p>
        )}
      </Section>
      <ContactSection />
    </>
  );
}
