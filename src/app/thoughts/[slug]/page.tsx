import { notFound } from "next/navigation";
import { ArticleDetail } from "@/components/articles/ArticleDetail";
import { ContactSection } from "@/components/sections/ContactSection";
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/data/articles";
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
    type: "article",
    publishedTime: article.date,
  });
}

export default async function ArticlePage({ params }: ArticleParams) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <ArticleDetail
        article={article}
        related={getRelatedArticles(article.slug)}
      />
      <ContactSection />
    </>
  );
}
