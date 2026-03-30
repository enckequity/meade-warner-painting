"use client";

import { Phone, MapPin, Clock } from "lucide-react";
import { COMPANY, SERVICE_AREAS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber font-semibold text-sm tracking-wider uppercase">
              Get in Touch
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-warm-900 mt-3 mb-5">
              Ready for a Fresh Coat?
            </h2>
            <p className="text-warm-500 text-lg leading-relaxed">
              Call us today for a free, no-obligation estimate. We&apos;ll come
              out, look at the job, and give you an honest price.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="bg-white rounded-2xl p-8 border border-warm-200 shadow-sm">
              <h3 className="font-heading text-2xl text-warm-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-amber" />
                  </div>
                  <div>
                    <p className="text-sm text-warm-500">Phone</p>
                    <p className="text-warm-900 font-semibold group-hover:text-amber transition-colors text-lg">
                      {COMPANY.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-amber" />
                  </div>
                  <div>
                    <p className="text-sm text-warm-500">Address</p>
                    <p className="text-warm-900 font-semibold">
                      {COMPANY.address.street}
                    </p>
                    <p className="text-warm-700">
                      {COMPANY.address.city}, {COMPANY.address.state}{" "}
                      {COMPANY.address.zip}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-amber" />
                  </div>
                  <div>
                    <p className="text-sm text-warm-500">Hours</p>
                    <p className="text-warm-900 font-semibold">
                      {COMPANY.hours}
                    </p>
                  </div>
                </div>

                <a
                  href={COMPANY.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-amber" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm text-warm-500">Facebook</p>
                    <p className="text-warm-900 font-semibold group-hover:text-amber transition-colors">
                      Meade Warner Painting
                    </p>
                  </div>
                </a>
              </div>

              {/* Map link */}
              <div className="mt-8 pt-6 border-t border-warm-200">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${COMPANY.geo.lat},${COMPANY.geo.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-navy hover:text-amber transition-colors font-semibold text-sm"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions on Google Maps
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Service Area + CTA */}
          <ScrollReveal direction="right">
            <div className="space-y-8">
              {/* Big CTA */}
              <div className="bg-navy rounded-2xl p-8 text-center">
                <h3 className="font-heading text-2xl text-white mb-3">
                  Call for a Free Estimate
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  No hidden fees, no pressure. Just an honest quote from a local
                  painter who cares about doing great work.
                </p>
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center gap-3 bg-amber hover:bg-amber-light text-navy-dark font-bold text-xl px-10 py-4 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
                >
                  <Phone className="w-6 h-6" />
                  {COMPANY.phone}
                </a>
              </div>

              {/* Service areas */}
              <div className="bg-white rounded-2xl p-8 border border-warm-200 shadow-sm">
                <h3 className="font-heading text-2xl text-warm-900 mb-4">
                  Serving the Tri-State Area
                </h3>
                <p className="text-warm-500 text-sm mb-4 leading-relaxed">
                  We serve homes and businesses across West Virginia, Ohio, and
                  Kentucky — the full Tri-State region.
                </p>
                <div className="grid grid-cols-3 gap-x-4 gap-y-1.5">
                  {SERVICE_AREAS.map((area) => (
                    <span key={area} className="text-sm text-warm-700">
                      {area}
                    </span>
                  ))}
                </div>
                <p className="text-warm-500 text-xs mt-4">
                  Cabell, Wayne &amp; Putnam Counties (WV) &middot; Lawrence
                  County (OH) &middot; Boyd County (KY)
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
