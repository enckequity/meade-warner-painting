import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Process } from "@/components/sections/process";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { ServiceAreas } from "@/components/sections/service-areas";
import { COMPANY, SERVICES as SERVICES_DATA, FAQS, SERVICE_AREAS } from "@/lib/constants";

function StructuredData() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    name: COMPANY.name,
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=80",
    telephone: COMPANY.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY.geo.lat,
      longitude: COMPANY.geo.lng,
    },
    url: "https://meade-warner-painting.vercel.app",
    sameAs: [COMPANY.facebook],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:00",
      closes: "18:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: COMPANY.rating,
      reviewCount: COMPANY.ratingCount,
      bestRating: 5,
    },
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "City",
      name: area,
    })),
    priceRange: "$$",
    description:
      "Professional interior and exterior painting services in Huntington, WV and the Tri-State area. 5-star rated. Free estimates.",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Painting",
    provider: {
      "@type": "HousePainter",
      name: COMPANY.name,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: COMPANY.geo.lat,
        longitude: COMPANY.geo.lng,
      },
      geoRadius: "50",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Painting Services",
      itemListElement: SERVICES_DATA.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // All schema data is from hardcoded constants - safe for inline script injection
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Gallery />
        <Testimonials />
        <CTA />
        <FAQ />
        <Contact />
        <ServiceAreas />
      </main>
      <Footer />
    </>
  );
}
