import { TextLink } from "@/components/ui/TextLink";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  as?: "h1" | "h2";
  uppercase?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  linkLabel = "View all",
  as: Heading = "h2",
  uppercase = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-subtle">
            {eyebrow}
          </p>
        ) : null}
        <Heading
          className={cn(
            "font-semibold tracking-tight text-[length:var(--text-title)] leading-[1.1]",
            eyebrow && "mt-3",
            uppercase && "uppercase",
          )}
        >
          {title}
        </Heading>
        {description ? (
          <p className="mt-4 max-w-2xl text-muted">{description}</p>
        ) : null}
      </div>
      {href ? (
        <TextLink href={href} className="shrink-0">
          {linkLabel}
        </TextLink>
      ) : null}
    </div>
  );
}
