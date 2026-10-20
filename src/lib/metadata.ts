import type { Metadata } from "next";
import { site } from "@/lib/site";

type CreateMetadataInput = {
  title?: string;
  description: string;
  path?: string;
};

export function createMetadata({
  title,
  description,
  path = "",
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
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "website",
    },
  };
}
