import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { CoverImage } from "@/components/ui/CoverImage";
import { TextLink } from "@/components/ui/TextLink";
import type { Project } from "@/data/types";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article className={cn("group flex flex-col", className)}>
      <Link
        href={`/projects/${project.slug}`}
        className="relative block aspect-[16/10] overflow-hidden bg-border"
      >
        <CoverImage
          src={project.coverImage.src}
          alt={project.coverImage.alt}
          className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </Link>
      <div className="mt-4 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-subtle">
        <span>{project.category}</span>
        {project.year ? <span>{project.year}</span> : null}
        {project.isPlaceholder ? <span>Sample</span> : null}
      </div>
      <h3 className="mt-2 text-xl font-semibold tracking-tight">
        <Link href={`/projects/${project.slug}`} className="hover:opacity-70">
          {project.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm text-muted">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <Badge key={technology}>{technology}</Badge>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-4">
        <TextLink href={`/projects/${project.slug}`}>View case study</TextLink>
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
    </article>
  );
}
