import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bordered?: boolean;
  animate?: boolean;
};

export function Section({
  children,
  id,
  className,
  bordered = true,
  animate = true,
}: SectionProps) {
  const content = animate ? (
    <AnimatedSection>{children}</AnimatedSection>
  ) : (
    children
  );

  return (
    <section
      id={id}
      className={cn(bordered && "border-t border-border", className)}
    >
      <Container className="py-16 sm:py-20 lg:py-28">{content}</Container>
    </section>
  );
}
