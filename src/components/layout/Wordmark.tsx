import Link from "next/link";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type WordmarkProps = {
  className?: string;
};

export function Wordmark({ className }: WordmarkProps) {
  return (
    <Link
      href="/"
      className={cn(
        "text-[15px] font-medium tracking-tight text-foreground",
        className,
      )}
    >
      {site.name}
    </Link>
  );
}
