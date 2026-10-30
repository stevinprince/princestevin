import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { profile } from "@/data/profile";

export function Specialties() {
  const mid = Math.ceil(profile.specialties.length / 2);
  const left = profile.specialties.slice(0, mid);
  const right = profile.specialties.slice(mid);

  return (
    <Section>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl bg-orange p-8 text-background sm:p-10">
          <p className="text-lg font-bold uppercase tracking-tight sm:text-xl lg:text-2xl">
            {left.join(", ")}
          </p>
          <div className="mt-6 flex size-10 items-center justify-center rounded-full border border-background/30">
            <ArrowRight size={18} aria-hidden="true" />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl bg-lime p-8 text-background sm:p-10">
          <p className="text-lg font-bold uppercase tracking-tight sm:text-xl lg:text-2xl">
            {right.join(", ")}
          </p>
          <div className="mt-6 flex size-10 items-center justify-center rounded-full border border-background/30">
            <ArrowRight size={18} aria-hidden="true" />
          </div>
        </div>
      </div>
    </Section>
  );
}
