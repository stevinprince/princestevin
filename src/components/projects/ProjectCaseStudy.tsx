import { ProjectCard } from "@/components/projects/ProjectCard";
import { Badge } from "@/components/ui/Badge";
import { CoverImage } from "@/components/ui/CoverImage";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import type { Project } from "@/data/types";

type ProjectCaseStudyProps = {
  project: Project;
  related: Project[];
};

export function ProjectCaseStudy({ project, related }: ProjectCaseStudyProps) {
  return (
    <>
      <Section bordered={false}>
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-subtle">
          <TextLink href="/projects" className="text-subtle hover:text-foreground">
            Projects
          </TextLink>
          <span aria-hidden="true"> / </span>
          {project.category}
        </p>
        <h1 className="mt-4 max-w-4xl font-semibold tracking-tight text-[length:var(--text-title)]">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-muted">{project.description}</p>
        <div className="mt-5 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-subtle">
          {project.year ? <span>{project.year}</span> : null}
          {project.isPlaceholder ? <span>Illustrative sample</span> : null}
        </div>
        <div className="relative mt-10 aspect-[16/9] overflow-hidden bg-border">
          <CoverImage
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            sizes="(min-width: 1024px) 68rem, 100vw"
            priority
          />
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          {project.sourceUrl ? (
            <TextLink href={project.sourceUrl} external>
              Source
            </TextLink>
          ) : null}
          {project.liveUrl ? (
            <TextLink href={project.liveUrl} external>
              Live demo
            </TextLink>
          ) : null}
        </div>
      </Section>

      <Section>
        <CaseBlock title="Overview" body={project.overview} />
        <CaseBlock title="Problem" body={project.problem} />
        <CaseList title="Goals" items={project.goals} />
        <CaseList title="Constraints" items={project.constraints} />
        <CaseBlock title="Architecture and implementation" body={project.architecture} />
        <CaseList title="Key technical decisions" items={project.decisions} />
        <CaseList title="Challenges and trade-offs" items={project.challenges} />
        <CaseList title="Outcomes" items={project.outcomes} />
      </Section>

      {related.length > 0 ? (
        <Section>
          <h2 className="font-semibold tracking-tight text-[length:var(--text-title)]">
            Related projects
          </h2>
          <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2">
            {related.map((item) => (
              <ProjectCard key={item.slug} project={item} />
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}

function CaseBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-t border-border py-8">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-4 max-w-3xl text-muted">{body}</p>
    </div>
  );
}

function CaseList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border-t border-border py-8">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
