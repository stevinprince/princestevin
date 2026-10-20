import { notFound } from "next/navigation";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";
import { articles, getArticleBySlug } from "@/data/articles";
import { createMetadata } from "@/lib/metadata";

type ArticleParams = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticleParams) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return createMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/thoughts/${article.slug}`,
  });
}

export default async function ArticleStubPage({ params }: ArticleParams) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <PlaceholderPage
      label="Thoughts"
      title={article.title}
      description="The full article template will be implemented in a later step."
    />
  );
}
