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
  return (
    <article className={cn("grid gap-4 border-t border-border py-8 md:grid-cols-[13rem_1fr]", className)}>
      <div className="text-sm text-subtle">
        <p>{role.period}</p>
        {role.location ? <p className="mt-1">{role.location}</p> : null}
      </div>
      <div>
        <h3 className="text-xl font-semibold tracking-tight">{role.company}</h3>
        <p className="mt-1 text-sm text-muted">{role.role}</p>
        <p className="mt-4 max-w-2xl text-muted">{role.description}</p>
        {variant === "full" ? (
          <>
            <ul className="mt-5 max-w-2xl list-disc space-y-2 pl-5 text-sm text-muted">
              {role.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {role.technologies.map((technology) => (
                <Badge key={technology}>{technology}</Badge>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </article>
  );
}
