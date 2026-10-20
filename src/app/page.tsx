import { Container } from "@/components/ui/Container";
import { articles } from "@/data/articles";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { toolGroups } from "@/data/tools";

export default function HomePage() {
  return (
    <Container as="section" className="py-16 sm:py-24">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-subtle">
        {profile.role}
      </p>
      <h1 className="mt-6 max-w-4xl font-semibold tracking-tight text-[length:var(--text-display)] leading-[1.05]">
        {profile.headline}
      </h1>
      <p className="mt-8 max-w-2xl text-muted">{profile.bio}</p>
      <dl className="mt-12 grid max-w-2xl gap-6 border-t border-border pt-8 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-subtle">Projects</dt>
          <dd className="mt-1 text-foreground">{projects.length} placeholder entries</dd>
        </div>
        <div>
          <dt className="text-subtle">Experience</dt>
          <dd className="mt-1 text-foreground">
            {experience.roles.length} roles, {experience.education.length} education
            item
          </dd>
        </div>
        <div>
          <dt className="text-subtle">Tools</dt>
          <dd className="mt-1 text-foreground">{toolGroups.length} groups</dd>
        </div>
        <div>
          <dt className="text-subtle">Thoughts</dt>
          <dd className="mt-1 text-foreground">{articles.length} sample articles</dd>
        </div>
      </dl>
    </Container>
  );
}
