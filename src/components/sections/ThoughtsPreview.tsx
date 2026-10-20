import { ArticleCard } from "@/components/articles/ArticleCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedArticles } from "@/data/articles";

export function ThoughtsPreview() {
  const articles = getFeaturedArticles();

  return (
    <Section>
      <SectionHeading
        eyebrow="Writing"
        title="Thoughts"
        description="Sample articles for the reading list. They are not published posts."
        href="/thoughts"
        linkLabel="View all articles"
      />
      <div className="mt-8">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </Section>
  );
}
