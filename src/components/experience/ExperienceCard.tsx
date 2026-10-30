import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { ExperienceRole } from "@/data/types";
import { cn } from "@/lib/utils";

type ExperienceCardProps = {
  role: ExperienceRole;
  variant?: "preview" | "full";
  className?: string;
};

export function ExperienceCard({
  role,
  variant = "preview",
  className,
}: ExperienceCardProps) {
  const content = (
    <div className={cn("flex items-start gap-4 py-6", className)}>
      <div className="flex-1">
        <h3 className="text-lg font-bold tracking-tight">{role.company}</h3>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
          {role.description}
        </p>
        {variant === "full" ? (
          <>
            <p className="mt-1 text-sm text-subtle">{role.role}</p>
            <ul className="mt-4 max-w-lg list-disc space-y-2 pl-5 text-sm text-muted">
              {role.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {role.technologies.map((technology) => (
                <Badge key={technology}>{technology}</Badge>
              ))}
            </div>
          </>
        ) : null}
        <p className="mt-3 text-sm text-subtle">{role.period}</p>
      </div>
      <div className="shrink-0 pt-1 text-subtle">
        <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
      </div>
    </div>
  );

  if (variant === "preview") {
    return (
      <Link
        href="/experience"
        className="group block border-t border-border transition-colors hover:bg-surface"
      >
        {content}
      </Link>
    );
  }

  return (
    <article className="border-t border-border">{content}</article>
  );
}
