import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("text-center", className)}>
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-subtle">
        {eyebrow}
      </p>
      <h1 className="mt-4 font-extrabold uppercase tracking-tight text-[length:var(--text-title)] leading-[0.9]">
        {title}
      </h1>
      {description ? (
        <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
