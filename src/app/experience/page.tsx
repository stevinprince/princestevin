import { PlaceholderPage } from "@/components/ui/PlaceholderPage";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Experience",
  description: "Professional history, education, and certifications.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <PlaceholderPage
      label="Experience"
      title="Professional history"
      description="The full experience timeline, education, and certifications will be added after the data files are in place."
    />
  );
}
