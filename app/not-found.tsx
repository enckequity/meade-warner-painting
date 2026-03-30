import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { COMPANY } from "@/lib/constants";
import { Phone } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center bg-canvas py-32">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="text-8xl font-heading text-warm-200 mb-4">404</div>
          <h1 className="font-heading text-3xl text-warm-900 mb-4">
            This Page Is a Blank Canvas
          </h1>
          <p className="text-warm-500 text-lg mb-8 leading-relaxed">
            But we only paint walls, not web pages. Let&apos;s get you back to
            something worth looking at.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/"
              className="bg-amber hover:bg-amber-light text-navy-dark font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Back to Home
            </a>
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-2 text-navy hover:text-amber transition-colors font-semibold"
            >
              <Phone className="w-4 h-4" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
