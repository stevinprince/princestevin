import { ProjectCard } from "@/components/projects/ProjectCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedProjects } from "@/data/projects";

export function SelectedProjects() {
  const projects = getFeaturedProjects().slice(0, 3);

  return (
    <Section>
      <SectionHeading line1="Recent" line2="Projects" />
      <div className="mt-16 space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
