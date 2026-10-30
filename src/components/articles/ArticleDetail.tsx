import { ArticleCard } from "@/components/articles/ArticleCard";
import { MarkdownContent } from "@/components/articles/MarkdownContent";
import { Badge } from "@/components/ui/Badge";
import { CoverImage } from "@/components/ui/CoverImage";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
      <Section bordered={false} className="pt-28">
        <p className="text-center text-xs font-medium uppercase tracking-[0.22em] text-subtle">
          <TextLink
            href="/thoughts"
            className="text-subtle hover:text-foreground"
          >
            Thoughts
          </TextLink>
          <span aria-hidden="true"> / </span>
          Article
        </p>
        <h1 className="mx-auto mt-4 max-w-4xl text-center font-extrabold uppercase tracking-tight text-[length:var(--text-title)] leading-[0.9]">
          {article.title}
        </h1>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs uppercase tracking-[0.16em] text-subtle">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span>{article.readingTime}</span>
          {article.isPlaceholder ? <span>Sample</span> : null}
        </div>
        <p className="mx-auto mt-5 max-w-2xl text-center text-muted">
          {article.excerpt}
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {article.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        {article.coverImage ? (
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-xl bg-surface-elevated">
            <CoverImage
              src={article.coverImage.src}
              alt={article.coverImage.alt}
              sizes="(min-width: 1024px) 56rem, 100vw"
              priority
            />
          </div>
        ) : null}
        <div className="mx-auto mt-12 max-w-2xl">
          <MarkdownContent markdown={article.body} />
        </div>
      </Section>

      {related.length > 0 ? (
        <Section>
          <SectionHeading line1="Related" line2="Articles" />
          <div className="mt-8">
            {related.map((item) => (
              <ArticleCard key={item.slug} article={item} />
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}
