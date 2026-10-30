import { ArticleCard } from "@/components/articles/ArticleCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedArticles } from "@/data/articles";

export function ThoughtsPreview() {
  const articles = getFeaturedArticles().slice(0, 3);

  return (
    <Section>
      <SectionHeading line1="Design" line2="Thoughts" />
      <div className="mt-14">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </Section>
  );
}
