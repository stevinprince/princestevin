import type { Metadata } from "next";
import { site } from "@/lib/site";

type CreateMetadataInput = {
  title?: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  publishedTime?: string;
};

export function createMetadata({
  title,
  description,
  path = "",
  type = "website",
  publishedTime,
}: CreateMetadataInput): Metadata {
  const fullTitle = title
    ? `${title} — ${site.name}`
    : `${site.name} — ${site.role}`;
  const url = `${site.url}${path}`;

  return {
    title: title ?? fullTitle,
    description,
    metadataBase: new URL(site.url),
    alternates: {
      canonical: url,
    },
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
