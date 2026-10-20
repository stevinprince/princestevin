import { ContactSection } from "@/components/sections/ContactSection";
import { ExperiencePreview } from "@/components/sections/ExperiencePreview";
import { Hero } from "@/components/sections/Hero";
import { SelectedProjects } from "@/components/sections/SelectedProjects";
import { Specialties } from "@/components/sections/Specialties";
import { Stats } from "@/components/sections/Stats";
import { ThoughtsPreview } from "@/components/sections/ThoughtsPreview";
import { ToolsPreview } from "@/components/sections/ToolsPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Specialties />
      <SelectedProjects />
      <ExperiencePreview />
      <ToolsPreview />
      <ThoughtsPreview />
      <ContactSection />
    </>
  );
}
