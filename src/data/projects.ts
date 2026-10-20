import type { Project } from "@/data/types";

export const projects: Project[] = [
  {
    slug: "inventory-negotiation-platform",
    title: "Inventory Negotiation Platform",
    description:
      "Backend services for inventory offers and buyer-seller workflows.",
    category: "Backend",
    year: "2024",
    technologies: ["Go", "PostgreSQL", "REST APIs", "AWS"],
    coverImage: {
      src: "/images/projects/inventory-negotiation.svg",
      alt: "Abstract cover for the inventory negotiation platform",
    },
    featured: true,
    isPlaceholder: true,
    overview:
      "An illustrative case study for a backend platform that coordinates inventory offers between buyers and sellers. The focus is on request workflows, offer state, and predictable API contracts.",
    problem:
      "Offer and acceptance flows are easy to fragment across ad hoc services. Without a clear domain model, inventory state, negotiation history, and notifications drift apart.",
    goals: [
      "Model offer lifecycle as explicit backend state.",
      "Keep buyer and seller actions behind stable APIs.",
      "Make background updates retryable rather than fire-and-forget.",
    ],
    constraints: [
      "Placeholder project. Details are illustrative, not a public production case study.",
      "No confidential customer data or unverified business metrics.",
    ],
    architecture:
      "A service-oriented backend with a transactional store for offers, a narrow REST surface for workflow actions, and asynchronous workers for follow-up tasks such as notifications and reconciliation.",
    decisions: [
      "Keep negotiation state in PostgreSQL so offer transitions stay consistent.",
      "Separate command APIs from read models used by listing views.",
      "Treat notifications as side effects, not as part of the core transaction.",
    ],
    challenges: [
      "Avoiding race conditions when two parties act on the same offer.",
      "Choosing which events must be synchronous versus queued.",
    ],
    outcomes: [
      "Illustrative entry only. Replace this section with verified outcomes before publishing.",
    ],
    relatedSlugs: [
      "fintech-transaction-api",
      "data-search-analytics-platform",
    ],
  },
  {
    slug: "fintech-transaction-api",
    title: "Fintech Transaction API",
    description:
      "REST APIs for transaction processing and account-level operations.",
    category: "Fintech",
    year: "2024",
    technologies: ["Go", "PostgreSQL", "REST APIs", "Redis"],
    coverImage: {
      src: "/images/projects/fintech-transaction-api.svg",
      alt: "Abstract cover for the fintech transaction API",
    },
    featured: true,
    isPlaceholder: true,
    overview:
      "A sample backend for account operations and transaction processing. It is meant to show how a conservative API can keep money-movement style workflows explicit and auditable.",
    problem:
      "Account updates and transaction records need the same source of truth. Partial writes, unclear idempotency, and mixed read/write paths make reconciliation harder than it should be.",
    goals: [
      "Expose a small REST surface for account and transaction operations.",
      "Make write paths idempotent.",
      "Keep balances and ledgers consistent under concurrent requests.",
    ],
    constraints: [
      "Placeholder project. Do not treat this as a live payments product.",
      "No invented throughput, uptime, or revenue numbers.",
    ],
    architecture:
      "A Go API in front of PostgreSQL, with Redis used only for short-lived coordination such as idempotency keys. Transaction writes stay in the primary store.",
    decisions: [
      "Prefer explicit transaction records over updating a single balance field.",
      "Use idempotency keys on mutating endpoints.",
      "Keep read APIs simple until access patterns are proven.",
    ],
    challenges: [
      "Designing APIs that fail clearly instead of applying partial updates.",
      "Deciding what belongs in the request path versus a later reconciliation job.",
    ],
    outcomes: [
      "Illustrative entry only. Add verified results when they can be shared.",
    ],
    relatedSlugs: [
      "inventory-negotiation-platform",
      "cloud-native-image-processing",
    ],
  },
  {
    slug: "data-search-analytics-platform",
    title: "Data Search and Analytics Platform",
    description:
      "Search and analytics paths using PostgreSQL and Elasticsearch.",
    category: "Data",
    year: "2023",
    technologies: ["Python", "PostgreSQL", "Elasticsearch", "AWS"],
    coverImage: {
      src: "/images/projects/data-search-analytics.svg",
      alt: "Abstract cover for the data search and analytics platform",
    },
    featured: true,
    isPlaceholder: true,
    overview:
      "An illustrative platform that separates transactional storage from search. PostgreSQL remains the system of record; Elasticsearch is treated as a derived read path.",
    problem:
      "Analytical and full-text queries become expensive when they share a transactional schema. Mixing both concerns in one store usually makes either writes or search worse.",
    goals: [
      "Keep PostgreSQL as the source of truth.",
      "Use Elasticsearch for search-heavy read paths.",
      "Document how records move from write store to search index.",
    ],
    constraints: [
      "Placeholder project with no claimed query-latency improvements.",
      "Indexing strategy is described at a high level only.",
    ],
    architecture:
      "Writes land in PostgreSQL. A worker or change-driven process updates Elasticsearch. Query services choose a store based on the access pattern rather than sending every request to search.",
    decisions: [
      "Do not treat the search index as authoritative.",
      "Accept eventual consistency on search in exchange for a simpler write path.",
      "Keep mappings narrow until query needs are clear.",
    ],
    challenges: [
      "Choosing which fields are worth indexing.",
      "Recovering when the derived index drifts from the primary store.",
    ],
    outcomes: [
      "Illustrative entry only. Do not infer production search quality from this sample.",
    ],
    relatedSlugs: [
      "inventory-negotiation-platform",
      "fintech-transaction-api",
    ],
  },
  {
    slug: "cloud-native-image-processing",
    title: "Cloud-Native Image Processing Service",
    description:
      "Asynchronous processing and reliable background workflows.",
    category: "Cloud",
    year: "2023",
    technologies: ["Go", "AWS", "RabbitMQ", "Docker"],
    coverImage: {
      src: "/images/projects/image-processing.svg",
      alt: "Abstract cover for the image processing service",
    },
    featured: true,
    isPlaceholder: true,
    overview:
      "A sample service that accepts image jobs, processes them asynchronously, and reports status through a small API. The point is reliability in background work, not image-editing features.",
    problem:
      "Synchronous image processing ties request latency to work that can fail, retry, or take too long. Users need a job they can submit and inspect later.",
    goals: [
      "Accept work through an API and process it off the request path.",
      "Retry failed jobs without duplicating completed work.",
      "Keep job status easy to query.",
    ],
    constraints: [
      "Placeholder project. No production throughput claims.",
      "Storage and queue choices are representative, not vendor-specific prescriptions.",
    ],
    architecture:
      "An API enqueues jobs. Workers consume from a queue, write results to object storage, and update job state. The API remains a thin interface over that workflow.",
    decisions: [
      "Use a queue so processing can scale independently from the API.",
      "Store job state separately from the binary output.",
      "Make workers idempotent so retries are safe.",
    ],
    challenges: [
      "Handling poison messages without blocking the queue.",
      "Exposing enough status to callers without leaking worker internals.",
    ],
    outcomes: [
      "Illustrative entry only. Replace with verified operational notes if this becomes a public project.",
    ],
    relatedSlugs: [
      "personal-git-tui",
      "fintech-transaction-api",
    ],
  },
  {
    slug: "personal-git-tui",
    title: "Personal Git TUI",
    description: "A Go-based terminal application for everyday Git workflows.",
    category: "Tooling",
    year: "2025",
    technologies: ["Go", "Git", "Linux"],
    coverImage: {
      src: "/images/projects/git-tui.svg",
      alt: "Abstract cover for the personal Git TUI",
    },
    sourceUrl: "https://github.com/stevinprince",
    featured: true,
    isPlaceholder: true,
    overview:
      "A personal terminal interface for common Git tasks. This is a learning and tooling example, not a claim that a finished public product already exists.",
    problem:
      "Day-to-day Git usage often means repeating the same status, diff, and staging commands. A small TUI can keep that loop in one place without becoming a full Git client.",
    goals: [
      "Show repository status clearly in the terminal.",
      "Support a short list of high-frequency Git actions.",
      "Keep the codebase small enough to learn from.",
    ],
    constraints: [
      "Placeholder project. The source link is a profile URL until a real repository exists.",
      "Scope stays limited to personal workflow, not a Git replacement.",
    ],
    architecture:
      "A Go program that shells out to Git or uses a Git library, then renders a keyboard-driven interface. The UI layer stays thin so Git remains the source of truth.",
    decisions: [
      "Prefer Git itself over a custom object database.",
      "Limit features to status, diff, and staging first.",
      "Keep configuration local and optional.",
    ],
    challenges: [
      "Presenting enough repository context without crowding the terminal.",
      "Handling dirty state and command failures without hiding Git's output.",
    ],
    outcomes: [
      "Illustrative entry only. Update this when the tool is published.",
    ],
    relatedSlugs: ["cloud-native-image-processing"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectCategories(): string[] {
  return [...new Set(projects.map((project) => project.category))];
}

export function getRelatedProjects(slug: string): Project[] {
  const project = getProjectBySlug(slug);

  if (!project) {
    return [];
  }

  return project.relatedSlugs
    .map((relatedSlug) => getProjectBySlug(relatedSlug))
    .filter((related): related is Project => related !== undefined);
}
