import type { Profile } from "@/data/types";

export const profile: Profile = {
  name: "Stevin Prince",
  role: "Software Engineer",
  headline: "Building reliable backend systems and cloud-native applications.",
  bio: "I'm a software engineer focused on building scalable backend services, APIs, and data-intensive applications. I work primarily with Go and Python, with experience across fintech platforms, distributed systems, and AWS-based infrastructure.",
  availability: "Open to thoughtful engineering conversations",
  email: "hello@stevinprince.dev",
  location: "Kochi, India",
  image: {
    src: "/images/profile.svg",
    alt: "Portrait placeholder for Stevin Prince",
  },
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/stevinprince",
    linkedin: "https://www.linkedin.com/in/stevinprince",
  },
  stats: [
    {
      id: "experience",
      value: "4+",
      label: "Years of software engineering experience",
    },
    {
      id: "languages",
      value: "Go · Python",
      label: "Primary backend languages",
    },
    {
      id: "cloud",
      value: "AWS",
      label: "Cloud-native infrastructure",
    },
    {
      id: "domains",
      value: "Fintech",
      label: "Data platform experience",
    },
  ],
  specialties: [
    "Backend Engineering",
    "Distributed Systems",
    "API Design",
    "Database Design and Optimization",
    "Cloud Infrastructure",
    "Performance Optimization",
  ],
  contact: {
    heading: "Let's build something meaningful.",
    body: "I'm always interested in discussing thoughtful engineering, backend systems, open-source projects, and interesting technical challenges.",
  },
};
