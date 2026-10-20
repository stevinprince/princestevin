import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

type SocialLink = {
  href: string;
  label: string;
  icon: typeof Mail;
  external?: boolean;
};

type SocialLinksProps = {
  className?: string;
  showEmail?: boolean;
};

export function SocialLinks({ className, showEmail = true }: SocialLinksProps) {
  const links: SocialLink[] = [
    {
      href: profile.socials.github,
      label: "GitHub",
      icon: ArrowUpRight,
      external: true,
    },
    {
      href: profile.socials.linkedin,
      label: "LinkedIn",
      icon: ArrowUpRight,
      external: true,
    },
  ];

  if (showEmail) {
    links.unshift({
      href: `mailto:${profile.email}`,
      label: profile.email,
      icon: Mail,
    });
  }

  return (
    <ul className={cn("flex flex-wrap items-center gap-x-5 gap-y-3", className)}>
      {links.map((item) => {
        const Icon = item.icon;

        return (
          <li key={item.href}>
            <a
              href={item.href}
              className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
