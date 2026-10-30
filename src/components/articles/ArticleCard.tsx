import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
    <Link
      href={`/thoughts/${article.slug}`}
      className={cn(
        "group flex items-start gap-4 border-t border-border py-6 transition-colors hover:bg-surface",
        className,
      )}
    >
      <div className="flex-1">
        <Heading className="text-lg font-bold tracking-tight">
          {article.title}
        </Heading>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
          {article.excerpt}
        </p>
        <div className="mt-3 flex items-center gap-6 text-sm text-subtle">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span>{article.readingTime}</span>
        </div>
      </div>
      <div className="shrink-0 pt-1 text-subtle transition-colors group-hover:text-accent">
        <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
      </div>
    </Link>
  );
}
