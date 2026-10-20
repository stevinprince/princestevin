import { ArticleCard } from "@/components/articles/ArticleCard";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ToolCard } from "@/components/ui/ToolCard";
import { articles } from "@/data/articles";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { toolGroups } from "@/data/tools";

export default function HomePage() {
  return (
    <Container as="section" className="py-16 sm:py-24">
      <SectionHeading
        as="h1"
        eyebrow="Component preview"
        title="Shared UI is ready"
        description="These are the reusable cards, headings, and the contact form. The finished homepage composition lands in the next step."
      />

      <AnimatedSection className="mt-16">
        <SectionHeading
          eyebrow="Projects"
          title="Project cards"
          href="/projects"
          linkLabel="All projects"
        />
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-20">
        <SectionHeading eyebrow="Experience" title="Experience cards" />
        <div className="mt-6">
          {experience.roles[0] ? (
            <ExperienceCard role={experience.roles[0]} />
          ) : null}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-12">
        <SectionHeading eyebrow="Tools" title="Tool cards" />
        <div className="mt-6 max-w-xl">
          {toolGroups[0].items.slice(0, 3).map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-16">
        <SectionHeading eyebrow="Thoughts" title="Article cards" />
        <div className="mt-6">
          {articles.slice(0, 2).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-16" id="contact">
        <SectionHeading
          eyebrow="Contact"
          title={profile.contact.heading}
          description={profile.contact.body}
        />
        <div className="mt-8 max-w-xl">
          <ContactForm />
        </div>
      </AnimatedSection>
    </Container>
  );
}
