"use client";

import {
  Paintbrush,
  Home,
  LayoutGrid,
  Fence,
  Droplets,
  Wrench,
  Building2,
  Palette,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  paintbrush: Paintbrush,
  home: Home,
  "layout-grid": LayoutGrid,
  fence: Fence,
  droplets: Droplets,
  wrench: Wrench,
  "building-2": Building2,
  palette: Palette,
};

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber font-semibold text-sm tracking-wider uppercase">
              What We Do
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-warm-900 mt-3 mb-5">
              Interior &amp; Exterior Painting Services
            </h2>
            <p className="text-warm-500 text-lg leading-relaxed">
              From a single accent wall to a complete exterior transformation —
              we bring precision, quality products, and honest craftsmanship to
              every project.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] ?? Paintbrush;
            return (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <div className="group bg-white rounded-2xl p-6 border border-warm-200 hover:border-amber/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full">
                  <div className="w-12 h-12 rounded-xl bg-navy/5 group-hover:bg-amber/10 flex items-center justify-center mb-4 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-navy group-hover:text-amber transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-xl text-warm-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-warm-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
