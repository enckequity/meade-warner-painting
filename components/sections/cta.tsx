"use client";

import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function CTA() {
  return (
    <section className="py-20 sm:py-28 bg-sage relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-5">
            Your Walls Deserve Better Than a DIY Weekend
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether it&apos;s one room or the whole house, interior or exterior —
            get a free, no-pressure estimate from a painter who takes real pride
            in the work.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-amber hover:bg-amber-light text-navy-dark font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
            >
              Get a Free Estimate
            </a>
            <a
              href={COMPANY.phoneHref}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              {COMPANY.phone}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
