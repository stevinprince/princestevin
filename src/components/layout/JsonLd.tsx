import { profile } from "@/data/profile";
import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.bio,
    email: profile.email,
    url: site.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
    },
    sameAs: [profile.socials.github, profile.socials.linkedin],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
