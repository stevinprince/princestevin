import type { Article } from "@/data/types";

export const articles: Article[] = [
  {
    slug: "reliable-background-jobs-in-go",
    title: "Designing Reliable Background Jobs in Go",
    excerpt:
      "A practical look at queues, retries, and idempotency for background work in Go services.",
    date: "2025-03-12",
    readingTime: "7 min read",
    tags: ["Go", "Backend", "Reliability"],
    coverImage: {
      src: "/images/articles/background-jobs.svg",
      alt: "Abstract cover for an article about background jobs",
    },
    featured: true,
    isPlaceholder: true,
    relatedSlugs: [
      "practical-api-design",
      "building-a-git-tui-with-go",
    ],
    body: `This is sample article content. It has not been published elsewhere.

Background jobs fail. Networks drop, workers restart, and the same message can arrive twice. A reliable Go service treats that as the default, not an edge case.

## Keep the request path thin

If a user action can take longer than a single request should wait, accept the work, persist enough state to retry, and return a job identifier. The HTTP handler should not become the processor.

## Make handlers idempotent

Retries are useful only when doing the work twice does not corrupt state. Store an idempotency key, or derive one from the job payload, before a side effect runs.

\`\`\`go
func (w *Worker) Handle(job Job) error {
    if err := w.store.MarkStarted(job.ID); err != nil {
        return err
    }

    return w.process(job)
}
\`\`\`

## Separate success from acknowledgment

A worker should acknowledge a message only after the result is durable. If the process crashes after the work but before the ack, a later retry should see that the job is already complete.

Replace this article with your own notes when you are ready to publish.`,
  },
  {
    slug: "postgres-elasticsearch-read-path",
    title: "PostgreSQL and Elasticsearch: Choosing the Right Read Path",
    excerpt:
      "When the system of record and the search index should stay apart, and how to choose between them.",
    date: "2025-02-18",
    readingTime: "6 min read",
    tags: ["PostgreSQL", "Elasticsearch", "Data"],
    coverImage: {
      src: "/images/articles/read-path.svg",
      alt: "Abstract cover for an article about read paths",
    },
    featured: true,
    isPlaceholder: true,
    relatedSlugs: [
      "reliable-background-jobs-in-go",
      "practical-api-design",
    ],
    body: `This is sample article content. It has not been published elsewhere.

PostgreSQL and Elasticsearch solve different problems. One is a transactional system of record. The other is a derived index that is good at search and some kinds of aggregation.

## Start with the write

If a record must be correct the moment it is written, it belongs in PostgreSQL first. Search can lag. Account state should not.

## Send queries where they fit

Use PostgreSQL for point lookups, joins, and anything that must match the latest committed write. Use Elasticsearch when the access pattern is full-text search or flexible filtering across denormalized documents.

## Plan for drift

The search index will be wrong sometimes. Design a way to rebuild it from the primary store instead of treating the index as irreplaceable.

This note is a placeholder for a longer piece on indexing, mapping, and rebuild strategy.`,
  },
  {
    slug: "practical-api-design",
    title: "Practical API Design for Backend Engineers",
    excerpt:
      "Notes on small contracts, explicit errors, and APIs that stay boring as the system grows.",
    date: "2025-01-20",
    readingTime: "8 min read",
    tags: ["API Design", "Backend"],
    coverImage: {
      src: "/images/articles/api-design.svg",
      alt: "Abstract cover for an article about API design",
    },
    featured: true,
    isPlaceholder: true,
    relatedSlugs: [
      "reliable-background-jobs-in-go",
      "postgres-elasticsearch-read-path",
    ],
    body: `This is sample article content. It has not been published elsewhere.

A useful API is easy to explain. It has a small number of resources, predictable errors, and names that match the domain.

## Prefer boring contracts

Resources, verbs, and status codes should do most of the work. Hide orchestration behind the server so clients do not have to know the order of internal services.

## Make failure explicit

Validation errors, conflicts, and missing records are different events. A generic 500 forces every client to guess. Stable error shapes save more time than decorative response wrappers.

## Version only when you must

Compatibility is cheaper than a new version prefix. Add fields carefully. Remove them slowly. Split an endpoint when the meaning of an existing one would change.

These are working notes, not a published essay.`,
  },
  {
    slug: "building-a-git-tui-with-go",
    title: "Building a Useful Git TUI with Go",
    excerpt:
      "Why a small terminal interface can earn its place, and what to leave to Git itself.",
    date: "2024-12-04",
    readingTime: "5 min read",
    tags: ["Go", "Git", "Tooling"],
    coverImage: {
      src: "/images/articles/git-tui.svg",
      alt: "Abstract cover for an article about a Git TUI",
    },
    featured: true,
    isPlaceholder: true,
    relatedSlugs: ["reliable-background-jobs-in-go"],
    body: `This is sample article content. It has not been published elsewhere.

A Git TUI is useful when it shortens a daily loop: status, diff, stage, commit. It becomes a problem when it tries to replace Git.

## Let Git remain the source of truth

The interface should read repository state and run a limited set of commands. Storing a parallel model of the repo almost always drifts.

## Design for the keyboard

The terminal is already a keyboard environment. A small set of actions, visible status, and a way to cancel are more valuable than a dense command catalog.

## Keep the first version narrow

Status and staging are enough to learn whether the tool is worth expanding. Branch management, remotes, and rebase can wait.

This article is a placeholder for a future write-up of the personal Git TUI project.`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((article) => article.featured);
}

export function getRelatedArticles(slug: string): Article[] {
  const article = getArticleBySlug(slug);

  if (!article) {
    return [];
  }

  return article.relatedSlugs
    .map((relatedSlug) => getArticleBySlug(relatedSlug))
    .filter((related): related is Article => related !== undefined);
}
