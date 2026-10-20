import { ArticleCard } from "@/components/articles/ArticleCard";
import { ContactSection } from "@/components/sections/ContactSection";
import { FilterPills } from "@/components/ui/FilterPills";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { articles, getArticleTags } from "@/data/articles";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Thoughts",
  description: "Technical writing, learning notes, and engineering insights.",
  path: "/thoughts",
});

type ThoughtsPageProps = {
  searchParams: Promise<{ tag?: string }>;
};

export default async function ThoughtsPage({ searchParams }: ThoughtsPageProps) {
  const { tag } = await searchParams;
  const tags = getArticleTags();
  const visible = tag
    ? articles.filter((article) => article.tags.includes(tag))
    : articles;

  return (
    <>
      <Section bordered={false}>
        <PageHeader
          eyebrow="Thoughts"
          title="Writing"
          description="Sample technical notes. They are local placeholders, not published articles. Add a new entry in the articles data file to create a page."
        />
        <div className="mt-8">
          <FilterPills
            allHref="/thoughts"
            allLabel="All"
            active={tag}
            items={tags.map((item) => ({
              label: item,
              value: item,
              href: `/thoughts?tag=${encodeURIComponent(item)}`,
            }))}
          />
        </div>
        <div className="mt-8">
          {visible.length > 0 ? (
            visible.map((article) => (
              <ArticleCard
                key={article.slug}
                article={article}
                headingLevel="h2"
              />
            ))
          ) : (
            <p className="text-muted">No articles with this tag yet.</p>
          )}
        </div>
      </Section>
      <ContactSection />
    </>
  );
}
