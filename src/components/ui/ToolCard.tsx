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
    <div className={cn("flex items-center gap-4", className)}>
      <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-surface-elevated">
        <Icon size={22} strokeWidth={1.5} aria-hidden="true" className="text-foreground" />
      </div>
      <div>
        <h3 className="text-base font-bold tracking-tight">{tool.name}</h3>
        {tool.description ? (
          <p className="text-sm text-subtle">{tool.description}</p>
        ) : null}
      </div>
    </div>
  );
}
