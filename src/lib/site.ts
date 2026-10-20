export const site = {
  name: "Stevin Prince",
  role: "Software Engineer",
  headline: "Building reliable backend systems and cloud-native applications.",
  email: "hello@stevinprince.dev",
  location: "Kochi, India",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/stevinprince",
    linkedin: "https://www.linkedin.com/in/stevinprince",
  },
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/tools", label: "Tools" },
  { href: "/thoughts", label: "Thoughts" },
] as const;

export type NavItem = (typeof navigation)[number];
