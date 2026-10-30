import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { profile } from "@/data/profile";

export function Specialties() {
  const mid = Math.ceil(profile.specialties.length / 2);
  const left = profile.specialties.slice(0, mid);
  const right = profile.specialties.slice(mid);

  return (
    <AnimatedSection>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl bg-orange p-6 text-background sm:p-8">
          <p className="text-base font-bold uppercase tracking-tight sm:text-lg">
            {left.join(", ")}
          </p>
          <div className="mt-5 flex size-9 items-center justify-center rounded-full border border-background/30">
            <ArrowRight size={16} aria-hidden="true" />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl bg-lime p-6 text-background sm:p-8">
          <p className="text-base font-bold uppercase tracking-tight sm:text-lg">
            {right.join(", ")}
          </p>
          <div className="mt-5 flex size-9 items-center justify-center rounded-full border border-background/30">
            <ArrowRight size={16} aria-hidden="true" />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
