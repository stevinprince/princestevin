import { HeroEntrance } from "@/components/ui/HeroEntrance";
import { Section } from "@/components/ui/Section";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { CoverImage } from "@/components/ui/CoverImage";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <Section bordered={false} animate={false} className="pt-4">
      <HeroEntrance>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-subtle">
              {profile.availability}
            </p>
            <p className="mt-5 text-sm text-muted">{profile.name}</p>
            <p className="mt-1 text-sm text-muted">{profile.role}</p>
          </div>
          <div className="relative size-36 overflow-hidden bg-border sm:size-44 md:size-52">
            <CoverImage
              src={profile.image.src}
              alt={profile.image.alt}
              sizes="208px"
              priority
            />
          </div>
        </div>

        <h1 className="mt-10 max-w-5xl font-semibold tracking-tight text-[clamp(2.4rem,7vw,5.25rem)] leading-[1.02] sm:mt-14">
          {profile.headline}
        </h1>
        <p className="mt-8 max-w-2xl text-muted">{profile.bio}</p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <SocialLinks />
          {profile.resumeEnabled ? (
            <Button href={profile.resumeUrl} variant="ghost">
              Download resume
            </Button>
          ) : null}
        </div>
      </HeroEntrance>
    </Section>
  );
}
