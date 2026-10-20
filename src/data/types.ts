export type SocialLinks = {
  github: string;
  linkedin: string;
};

export type ProfileImage = {
  src: string;
  alt: string;
};

export type StatItem = {
  id: string;
  value: string;
  label: string;
};

export type ContactCopy = {
  heading: string;
  body: string;
};

export type Profile = {
  name: string;
  role: string;
  headline: string;
  bio: string;
  availability: string;
  email: string;
  location: string;
  image: ProfileImage;
  resumeUrl: string;
  resumeEnabled: boolean;
  socials: SocialLinks;
  stats: StatItem[];
  specialties: string[];
  contact: ContactCopy;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  year?: string;
  technologies: string[];
  coverImage: ProfileImage;
  sourceUrl?: string;
  liveUrl?: string;
  featured: boolean;
  isPlaceholder: boolean;
  overview: string;
  problem: string;
  goals: string[];
  constraints: string[];
  architecture: string;
  decisions: string[];
  challenges: string[];
  outcomes: string[];
  relatedSlugs: string[];
};

export type ExperienceRole = {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
};

export type EducationItem = {
  id: string;
  degree: string;
  school: string;
  period: string;
  detail?: string;
};

export type CertificationItem = {
  id: string;
  title: string;
};

export type ExperienceContent = {
  summary: string;
  roles: ExperienceRole[];
  education: EducationItem[];
  certifications: CertificationItem[];
};

export type ToolItem = {
  name: string;
  description?: string;
};

export type ToolGroup = {
  id: string;
  title: string;
  items: ToolItem[];
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  coverImage?: ProfileImage;
  featured: boolean;
  isPlaceholder: boolean;
  relatedSlugs: string[];
  body: string;
};
