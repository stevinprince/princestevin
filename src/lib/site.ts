import { profile } from "@/data/profile";

export const site = {
  name: profile.name,
  role: profile.role,
  headline: profile.headline,
  email: profile.email,
  location: profile.location,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  resumeUrl: profile.resumeUrl,
  socials: profile.socials,
} as const;

export const navigation = [
  { href: "/", label: "Home", icon: "Home" },
  { href: "/projects", label: "Projects", icon: "FileText" },
  { href: "/experience", label: "Experience", icon: "Building2" },
  { href: "/tools", label: "Tools", icon: "Wrench" },
  { href: "/thoughts", label: "Thoughts", icon: "PenSquare" },
] as const;

export type NavItem = (typeof navigation)[number];
