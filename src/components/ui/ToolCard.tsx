import {
  Boxes,
  Cloud,
  Code,
  Database,
  GitBranch,
  Server,
  Terminal,
  Workflow,
} from "lucide-react";
import type { ToolItem } from "@/data/types";
import { cn } from "@/lib/utils";

type ToolCardProps = {
  tool: ToolItem;
  className?: string;
};

const iconByName: Record<string, typeof Code> = {
  Go: Code,
  Python: Code,
  SQL: Database,
  TypeScript: Code,
  "REST APIs": Workflow,
  gRPC: Workflow,
  Microservices: Boxes,
  RabbitMQ: Workflow,
  PostgreSQL: Database,
  Elasticsearch: Database,
  MongoDB: Database,
  DynamoDB: Database,
  Redis: Database,
  AWS: Cloud,
  Docker: Boxes,
  Kubernetes: Cloud,
  "CI/CD": GitBranch,
  Git: GitBranch,
  Linux: Terminal,
  "Automated Testing": Workflow,
  Observability: Server,
};

export function ToolCard({ tool, className }: ToolCardProps) {
  const Icon = iconByName[tool.name] ?? Code;

  return (
    <article className={cn("flex gap-4 border-t border-border py-5", className)}>
      <Icon
        size={20}
        strokeWidth={1.5}
        className="mt-0.5 shrink-0 text-foreground"
        aria-hidden="true"
      />
      <div>
        <h3 className="font-medium tracking-tight">{tool.name}</h3>
        {tool.description ? (
          <p className="mt-1 text-sm text-muted">{tool.description}</p>
        ) : null}
      </div>
    </article>
  );
}
