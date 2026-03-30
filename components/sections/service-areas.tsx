"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function ServiceAreas() {
  return (
    <section className="py-16 bg-canvas border-t border-warm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl sm:text-3xl text-warm-900 mb-6 text-center">
              Professional Painting Across the Tri-State Area
            </h2>
            <div className="text-warm-700 text-sm leading-relaxed space-y-4">
              <p>
                Meade Warner Painting proudly serves homeowners and businesses
                throughout the Huntington, West Virginia metropolitan area and
                the greater Tri-State region. Whether you&apos;re in a historic
                Southside home, a Marshall University rental property, a newer
                build in Barboursville, or a commercial space in downtown
                Huntington — we deliver the same quality, precision, and
                attention to detail on every job.
              </p>
              <p>
                Our service area includes{" "}
                <strong>
                  Huntington, Barboursville, Milton, Hurricane, Ceredo, Kenova,
                  Lavalette, Wayne, Lesage, and Salt Rock
                </strong>{" "}
                in West Virginia;{" "}
                <strong>Chesapeake, Proctorville, and Ironton</strong> in Ohio;
                and <strong>Ashland and Catlettsburg</strong> in Kentucky. We
                serve Cabell, Wayne, and Putnam counties in WV, Lawrence County
                in OH, and Boyd County in KY.
              </p>
              <p>
                Huntington&apos;s climate — humid summers, cold winters, and
                everything in between — takes a toll on paint. We use
                professional-grade products from Sherwin-Williams and Benjamin
                Moore that are formulated to withstand West Virginia&apos;s four
                seasons. For older homes with lead paint concerns, we follow EPA
                RRP guidelines for lead-safe work practices.
              </p>
              <p>
                Serving Marshall University landlords with fast, quality painting
                between tenants. Transforming Barboursville homes with
                professional interior and exterior painting. Bringing commercial
                spaces across the Tri-State area to life with clean, precise
                work that reflects your business at its best.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
