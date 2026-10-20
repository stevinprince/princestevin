import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { toolGroups } from "@/data/tools";

export function ToolsPreview() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Stack"
        title="Tools and technologies"
        description="Editable profile content. Groupings describe the work I do, not equal proficiency in every tool."
        href="/tools"
        linkLabel="View all tools"
      />
      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {toolGroups.map((group) => (
          <div key={group.id}>
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-subtle">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item.name} className="text-lg tracking-tight">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
