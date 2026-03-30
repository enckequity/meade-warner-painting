"use client";

import { PROCESS_STEPS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Process() {
  return (
    <section className="py-20 sm:py-28 bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber font-semibold text-sm tracking-wider uppercase">
              Our Process
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-warm-900 mt-3 mb-5">
              From Estimate to Final Walkthrough
            </h2>
            <p className="text-warm-500 text-lg leading-relaxed">
              Every project follows the same proven process — because
              consistency is what separates a great paint job from a mediocre
              one.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 0.1}>
              <div className="relative text-center lg:text-left">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy text-white font-semibold text-lg mb-4">
                  {step.step}
                </div>
                {/* Connector line (desktop) */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-[2px] bg-warm-200" />
                )}
                <h3 className="font-heading text-xl text-warm-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-warm-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
