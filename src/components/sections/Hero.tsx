import { HeroEntrance } from "@/components/ui/HeroEntrance";
import { Section } from "@/components/ui/Section";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { CoverImage } from "@/components/ui/CoverImage";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <Section bordered={false} animate={false} className="pt-24">
      <HeroEntrance>
        {/* Profile card — light centered card */}
        <div className="mx-auto max-w-2xl rounded-2xl bg-card-bg px-8 pb-10 pt-8 text-center">
          <div className="mx-auto size-40 overflow-hidden rounded-xl bg-accent sm:size-48">
            <CoverImage
              src={profile.image.src}
              alt={profile.image.alt}
              sizes="192px"
              priority
            />
          </div>
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-card-fg sm:text-3xl">
            {profile.name}
          </h2>
          <p className="mt-2 text-sm text-card-muted">
            {profile.headline}
          </p>
          <SocialLinks className="mt-5 justify-center" showEmail={false} />
        </div>

        {/* Massive two-tone heading */}
        <div className="mt-16 text-center sm:mt-20">
          <h1 className="font-extrabold uppercase tracking-tight text-[length:var(--text-display)] leading-[0.9]">
            <span className="block">{profile.role.split(" ")[0]}</span>
            <span className="heading-outline block">
              {profile.role.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-lg text-[15px] leading-relaxed text-muted">
            {profile.bio}
          </p>
        </div>
      </HeroEntrance>
    </Section>
  );
}
