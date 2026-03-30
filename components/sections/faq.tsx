"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

function FAQItem({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="border border-warm-200 rounded-xl overflow-hidden bg-white">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between p-5 text-left hover:bg-warm-50 transition-colors"
          aria-expanded={open}
        >
          <span className="font-semibold text-warm-900 pr-4">{faq.question}</span>
          <ChevronDown
            className={cn(
              "w-5 h-5 text-warm-500 shrink-0 transition-transform duration-300",
              open && "rotate-180"
            )}
          />
        </button>
        <div
          className={cn(
            "grid transition-all duration-300 ease-in-out",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <p className="px-5 pb-5 text-warm-700 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-canvas">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-amber font-semibold text-sm tracking-wider uppercase">
              Common Questions
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-warm-900 mt-3 mb-5">
              Frequently Asked Questions
            </h2>
            <p className="text-warm-500 text-lg leading-relaxed">
              Got questions? We&apos;ve got answers. If you don&apos;t see what
              you&apos;re looking for, give us a call.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
