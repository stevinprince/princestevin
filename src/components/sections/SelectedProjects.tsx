import { ProjectCard } from "@/components/projects/ProjectCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedProjects } from "@/data/projects";

export function SelectedProjects() {
  const projects = getFeaturedProjects();

  return (
    <Section>
      <SectionHeading
        eyebrow="Work"
        title="Recent projects"
        description="Illustrative case studies. Each entry is marked as a sample until it is replaced with a public project."
        href="/projects"
        linkLabel="View all projects"
      />
      <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
