import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { COMPANY, SERVICE_AREAS, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo className="h-12 w-auto mb-4" color="light" />
            <p className="text-white/60 text-sm leading-relaxed mt-4">
              Professional painting services for homes and businesses across the
              Tri-State area. Quality work, honest pricing, and attention to
              detail on every project.
            </p>
            <a
              href={COMPANY.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-white/60 hover:text-amber transition-colors text-sm"
              aria-label="Visit our Facebook page"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              <span>Follow us on Facebook</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-amber transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading text-lg text-white mb-4">
              Service Areas
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {SERVICE_AREAS.map((area) => (
                <span key={area} className="text-sm text-white/60">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-amber transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                {COMPANY.address.full}
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                {COMPANY.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Meade Warner Painting. All rights
            reserved.
          </p>
          <p className="text-sm text-white/40">
            Huntington, WV &middot; Serving the Tri-State Area
          </p>
        </div>
      </div>
    </footer>
  );
}
