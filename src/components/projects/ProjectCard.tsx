import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CoverImage } from "@/components/ui/CoverImage";
import type { Project } from "@/data/types";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
  headingLevel?: "h2" | "h3";
};

export function ProjectCard({
  project,
  className,
  headingLevel = "h3",
}: ProjectCardProps) {
  const Heading = headingLevel;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group flex items-center gap-6 rounded-xl transition-colors hover:bg-surface sm:gap-8",
        className,
      )}
    >
      <div className="size-24 shrink-0 overflow-hidden rounded-lg bg-surface-elevated sm:size-32 lg:size-40">
        <CoverImage
          src={project.coverImage.src}
          alt={project.coverImage.alt}
          className="transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex-1 py-4">
        <Heading className="text-lg font-bold tracking-tight sm:text-xl">
          {project.title}
        </Heading>
        <p className="mt-1 text-sm text-muted">{project.description}</p>
      </div>
      <div className="hidden pr-4 text-subtle transition-colors group-hover:text-accent sm:block">
        <ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" />
      </div>
    </Link>
  );
}
