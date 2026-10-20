import type { ToolGroup } from "@/data/types";

export const toolGroups: ToolGroup[] = [
  {
    id: "languages",
    title: "Languages",
    items: [
      {
        name: "Go",
        description: "Primary language for backend services and CLI tools.",
      },
      {
        name: "Python",
        description: "Services, scripting, and data-oriented workflows.",
      },
      {
        name: "SQL",
        description: "Query design, modeling, and database optimization.",
      },
      {
        name: "TypeScript",
        description: "Typed application and interface work when needed.",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    items: [
      {
        name: "REST APIs",
        description: "Resource-oriented HTTP interfaces and contracts.",
      },
      {
        name: "gRPC",
        description: "Typed service-to-service communication.",
      },
      {
        name: "Microservices",
        description: "Service boundaries around distinct workflows.",
      },
      {
        name: "RabbitMQ",
        description: "Asynchronous messaging and background jobs.",
      },
    ],
  },
  {
    id: "data",
    title: "Data",
    items: [
      {
        name: "PostgreSQL",
        description: "Transactional system of record.",
      },
      {
        name: "Elasticsearch",
        description: "Search and derived read paths.",
      },
      {
        name: "MongoDB",
        description: "Document storage for flexible records.",
      },
      {
        name: "DynamoDB",
        description: "Managed key-value access on AWS.",
      },
      {
        name: "Redis",
        description: "Caching and short-lived coordination.",
      },
    ],
  },
  {
    id: "cloud",
    title: "Cloud and infrastructure",
    items: [
      {
        name: "AWS",
        description: "Compute, storage, and managed infrastructure.",
      },
      {
        name: "Docker",
        description: "Local and deployed service packaging.",
      },
      {
        name: "Kubernetes",
        description: "Container orchestration fundamentals.",
      },
      {
        name: "CI/CD",
        description: "Git-based build and release workflows.",
      },
    ],
  },
  {
    id: "engineering",
    title: "Engineering",
    items: [
      {
        name: "Git",
        description: "Version control and collaboration.",
      },
      {
        name: "Linux",
        description: "Day-to-day development and server environments.",
      },
      {
        name: "Automated Testing",
        description: "Checks around services and critical paths.",
      },
      {
        name: "Observability",
        description: "Logs, metrics, and traces for running systems.",
      },
    ],
  },
];
