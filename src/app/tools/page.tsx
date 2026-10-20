import { ContactSection } from "@/components/sections/ContactSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ToolCard } from "@/components/ui/ToolCard";
import { toolGroups } from "@/data/tools";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Tools",
  description:
    "Languages, backend tools, data stores, and cloud infrastructure.",
  path: "/tools",
});

export default function ToolsPage() {
  return (
    <>
      <Section bordered={false}>
        <PageHeader
          eyebrow="Tools"
          title="Technologies"
          description="A data-driven index of languages and tools I use. Add, edit, or reorder groups in the tools data file. These are not proficiency scores."
        />
        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          {toolGroups.map((group) => (
            <section key={group.id}>
              <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-subtle">
                {group.title}
              </h2>
              <div className="mt-4">
                {group.items.map((tool) => (
                  <ToolCard key={tool.name} tool={tool} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </Section>
      <ContactSection />
    </>
  );
}
