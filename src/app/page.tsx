import { ContactSection } from "@/components/sections/ContactSection";
import { ExperiencePreview } from "@/components/sections/ExperiencePreview";
import { Hero } from "@/components/sections/Hero";
import { ProfileCard } from "@/components/sections/ProfileCard";
import { SelectedProjects } from "@/components/sections/SelectedProjects";
import { Specialties } from "@/components/sections/Specialties";
import { Stats } from "@/components/sections/Stats";
import { ThoughtsPreview } from "@/components/sections/ThoughtsPreview";
import { ToolsPreview } from "@/components/sections/ToolsPreview";

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-[var(--content-width)] px-4 pt-28 sm:px-8 lg:max-w-6xl lg:pt-32">
      {/* Mobile: profile card stacked on top */}
      <div className="mb-10 lg:hidden">
        <ProfileCard />
      </div>

      <div className="lg:grid lg:grid-cols-[minmax(17rem,21rem)_1fr] lg:gap-14">
        {/* Left column: sticky profile card (desktop only) */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 flex justify-center pb-10">
            <ProfileCard />
          </div>
        </aside>

        {/* Right column: all content sections */}
        <div className="space-y-20 pb-20 sm:space-y-24">
          <Hero />
          <Stats />
          <Specialties />
          <SelectedProjects />
          <ExperiencePreview />
          <ToolsPreview />
          <ThoughtsPreview />
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
