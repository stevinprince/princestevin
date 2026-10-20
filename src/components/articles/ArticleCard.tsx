import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { Article } from "@/data/types";
import { cn, formatDate } from "@/lib/utils";

type ArticleCardProps = {
  article: Article;
  className?: string;
  headingLevel?: "h2" | "h3";
};

export function ArticleCard({
  article,
  className,
  headingLevel = "h3",
}: ArticleCardProps) {
  const Heading = headingLevel;

  return (
    <article className={cn("border-t border-border py-8", className)}>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-[0.16em] text-subtle">
        <time dateTime={article.date}>{formatDate(article.date)}</time>
        <span>{article.readingTime}</span>
        {article.isPlaceholder ? <span>Sample</span> : null}
      </div>
      <Heading className="mt-3 text-xl font-semibold tracking-tight">
        <Link href={`/thoughts/${article.slug}`} className="hover:opacity-70">
          {article.title}
        </Link>
      </Heading>
      <p className="mt-3 max-w-2xl text-muted">{article.excerpt}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </article>
  );
}
