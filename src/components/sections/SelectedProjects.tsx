import { ProjectCard } from "@/components/projects/ProjectCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedProjects } from "@/data/projects";

export function SelectedProjects() {
  const projects = getFeaturedProjects().slice(0, 3);

  return (
    <AnimatedSection>
      <SectionHeading line1="Recent" line2="Projects" />
      <div className="mt-10 space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </AnimatedSection>
  );
}
