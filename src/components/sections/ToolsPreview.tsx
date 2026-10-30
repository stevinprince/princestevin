import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ToolCard } from "@/components/ui/ToolCard";
import { toolGroups } from "@/data/tools";

export function ToolsPreview() {
  const topTools = toolGroups.flatMap((group) => group.items).slice(0, 6);

  return (
    <AnimatedSection>
      <SectionHeading line1="Premium" line2="Tools" />
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {topTools.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </AnimatedSection>
  );
}
