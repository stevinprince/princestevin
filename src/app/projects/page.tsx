import { PlaceholderPage } from "@/components/ui/PlaceholderPage";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Projects",
  description: "Selected backend, fintech, and cloud-native projects.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <PlaceholderPage
      label="Projects"
      title="Recent work"
      description="The project index and case studies will be built after the data layer and shared cards are in place."
    />
  );
}
