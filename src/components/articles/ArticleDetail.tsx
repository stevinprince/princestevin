import { ArticleCard } from "@/components/articles/ArticleCard";
import { MarkdownContent } from "@/components/articles/MarkdownContent";
import { Badge } from "@/components/ui/Badge";
import { CoverImage } from "@/components/ui/CoverImage";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import type { Article } from "@/data/types";
import { formatDate } from "@/lib/utils";

type ArticleDetailProps = {
  article: Article;
  related: Article[];
};

export function ArticleDetail({ article, related }: ArticleDetailProps) {
  return (
    <>
      <Section bordered={false}>
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-subtle">
          <TextLink href="/thoughts" className="text-subtle hover:text-foreground">
            Thoughts
          </TextLink>
          <span aria-hidden="true"> / </span>
          Article
        </p>
        <h1 className="mt-4 max-w-4xl font-semibold tracking-tight text-[length:var(--text-title)]">
          {article.title}
        </h1>
        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-[0.16em] text-subtle">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span>{article.readingTime}</span>
          {article.isPlaceholder ? <span>Sample</span> : null}
        </div>
        <p className="mt-5 max-w-2xl text-muted">{article.excerpt}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        {article.coverImage ? (
          <div className="relative mt-10 aspect-[16/9] overflow-hidden bg-border">
            <CoverImage
              src={article.coverImage.src}
              alt={article.coverImage.alt}
              sizes="(min-width: 1024px) 68rem, 100vw"
              priority
            />
          </div>
        ) : null}
        <div className="mt-12 max-w-2xl">
          <MarkdownContent markdown={article.body} />
        </div>
      </Section>

      {related.length > 0 ? (
        <Section>
          <h2 className="font-semibold tracking-tight text-[length:var(--text-title)]">
            Related articles
          </h2>
          <div className="mt-6">
            {related.map((item) => (
              <ArticleCard key={item.slug} article={item} />
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}
