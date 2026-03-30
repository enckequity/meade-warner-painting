"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const testimonial = TESTIMONIALS[current];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-navy">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-amber font-semibold text-sm tracking-wider uppercase">
              Customer Reviews
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mt-3">
              What Our Customers Say
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative">
            {/* Quote */}
            <div className="text-center">
              <Quote className="w-10 h-10 text-amber/30 mx-auto mb-6" />

              <div className="min-h-[160px] flex items-center justify-center">
                <blockquote className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-3xl font-heading">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber text-amber"
                    />
                  ))}
                </div>
                <p className="text-white font-semibold">
                  {testimonial.author}
                </p>
                <p className="text-white/50 text-sm">
                  {testimonial.location} &middot; {testimonial.service}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "bg-amber w-6"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to review ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
