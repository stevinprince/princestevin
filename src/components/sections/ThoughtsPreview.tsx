import { ArticleCard } from "@/components/articles/ArticleCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedArticles } from "@/data/articles";

export function ThoughtsPreview() {
  const articles = getFeaturedArticles().slice(0, 3);

  return (
    <AnimatedSection>
      <SectionHeading line1="Design" line2="Thoughts" />
      <div className="mt-10">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </AnimatedSection>
  );
}
