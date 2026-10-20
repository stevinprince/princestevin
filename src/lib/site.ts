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
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/tools", label: "Tools" },
  { href: "/thoughts", label: "Thoughts" },
] as const;

export type NavItem = (typeof navigation)[number];
