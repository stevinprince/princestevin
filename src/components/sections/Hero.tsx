import { HeroEntrance } from "@/components/ui/HeroEntrance";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <HeroEntrance>
      <h1 className="font-extrabold uppercase tracking-tight text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] lg:text-[length:var(--text-display)]">
        <span className="block">{profile.role.split(" ")[0]}</span>
        <span className="heading-outline block">
          {profile.role.split(" ").slice(1).join(" ")}
        </span>
      </h1>
      <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted sm:mt-8">
        {profile.bio}
      </p>
    </HeroEntrance>
  );
}
