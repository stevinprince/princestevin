import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { projects } from "@/data/projects";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    {
      url: `${site.url}/projects`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/experience`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/tools`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${site.url}/thoughts`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const projectRoutes = projects.map((project) => ({
    url: `${site.url}/projects/${project.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${site.url}/thoughts/${article.slug}`,
    lastModified: article.date,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...projectRoutes, ...articleRoutes];
}
