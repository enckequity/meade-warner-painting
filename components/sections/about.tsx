"use client";

import { Star, Shield, MapPin, User } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const TRUST_POINTS = [
  {
    icon: Star,
    title: "5/5 Rating",
    text: "Every customer gave us a perfect score. We earn your trust on every job.",
  },
  {
    icon: User,
    title: "Work with the Painter",
    text: "No call centers. No franchises. You deal directly with the person doing the work.",
  },
  {
    icon: MapPin,
    title: "Local Knowledge",
    text: "We know Huntington's housing stock — historic homes, plaster walls, and climate challenges.",
  },
  {
    icon: Shield,
    title: "Honest Pricing",
    text: "Free estimates, clear quotes, no hidden fees. What we say is what you pay.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80"
                  alt="Professional painter applying precise brush strokes to trim work"
                  className="w-full h-[400px] sm:h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white rounded-xl shadow-xl p-5 border border-warm-200">
                <div className="flex items-center gap-1.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber text-amber"
                    />
                  ))}
                </div>
                <p className="text-warm-900 font-semibold text-sm">
                  Perfect 5/5 Rating
                </p>
                <p className="text-warm-500 text-xs">on Facebook</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Text side */}
          <ScrollReveal direction="right">
            <div>
              <span className="text-amber font-semibold text-sm tracking-wider uppercase">
                Why Meade Warner
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-warm-900 mt-3 mb-6">
                Why Huntington Homeowners Choose Us
              </h2>
              <p className="text-warm-700 text-lg leading-relaxed mb-8">
                Meade Warner Painting isn&apos;t a franchise. It&apos;s not a
                handyman who &ldquo;also paints.&rdquo; Painting is what we do —
                it&apos;s the focus, and you can see it in every clean edge,
                every smooth finish, every satisfied customer. We know
                Huntington&apos;s homes, from the historic Southside bungalows
                to the newer builds in Barboursville. We use the right products
                for West Virginia&apos;s climate, and we prep the right way
                because shortcuts don&apos;t last.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {TRUST_POINTS.map((point) => (
                  <div key={point.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center shrink-0">
                      <point.icon className="w-5 h-5 text-amber" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-warm-900 text-sm">
                        {point.title}
                      </h3>
                      <p className="text-warm-500 text-sm leading-relaxed">
                        {point.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
