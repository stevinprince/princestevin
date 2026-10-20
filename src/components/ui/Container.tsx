import { cn } from "@/lib/utils";

type ContainerTag = "div" | "section" | "header" | "footer" | "article";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: ContainerTag;
};

export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[var(--content-width)] px-5 sm:px-8",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
