import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** First line — rendered bold white */
  line1: string;
  /** Second line — rendered outlined/faded */
  line2: string;
  as?: "h1" | "h2";
  centered?: boolean;
  className?: string;
};

export function SectionHeading({
  line1,
  line2,
  as: Heading = "h2",
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <Heading
      className={cn(
        "font-extrabold uppercase tracking-tight text-[length:var(--text-title)] leading-[0.9]",
        centered && "text-center",
        className,
      )}
    >
      <span className="block">{line1}</span>
      <span className="heading-outline block">{line2}</span>
    </Heading>
  );
}
