import { PlaceholderPage } from "@/components/ui/PlaceholderPage";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Thoughts",
  description: "Technical writing, learning notes, and engineering insights.",
  path: "/thoughts",
});

export default function ThoughtsPage() {
  return (
    <PlaceholderPage
      label="Thoughts"
      title="Writing"
      description="The article list and detail pages will be added after the content data layer is in place."
    />
  );
}
