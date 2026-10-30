import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** First line — rendered bold white */
  line1: string;
  /** Second line — rendered outlined/faded italic */
  line2: string;
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  line1,
  line2,
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <Heading
      className={cn(
        "text-center font-extrabold uppercase tracking-tight text-[length:var(--text-title)] leading-[0.9]",
        className,
      )}
    >
      <span className="block">{line1}</span>
      <span className="heading-outline block">{line2}</span>
    </Heading>
  );
}
