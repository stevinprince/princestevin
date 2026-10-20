import { PlaceholderPage } from "@/components/ui/PlaceholderPage";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Tools",
  description: "Languages, backend tools, data stores, and cloud infrastructure.",
  path: "/tools",
});

export default function ToolsPage() {
  return (
    <PlaceholderPage
      label="Tools"
      title="Technologies"
      description="The grouped tools index will be data-driven and lands after the shared components are ready."
    />
  );
}
