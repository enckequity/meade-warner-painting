export const COMPANY = {
  name: "Meade Warner Painting",
  phone: "(304) 955-8802",
  phoneHref: "tel:+13049558802",
  email: "meadewarnerpainting@gmail.com",
  address: {
    street: "924 11th Ave",
    city: "Huntington",
    state: "WV",
    zip: "25701",
    full: "924 11th Ave, Huntington, WV 25701",
  },
  hours: "Mon–Sat: 7 AM – 6 PM",
  facebook: "https://www.facebook.com/profile.php?id=100083045991375",
  rating: 5,
  ratingCount: 2,
  tagline: "A Fresh Coat Done Right",
  founded: "Huntington, WV",
  geo: { lat: 38.4192, lng: -82.4452 },
} as const;

export const SERVICE_AREAS = [
  // West Virginia
  "Huntington",
  "Barboursville",
  "Milton",
  "Hurricane",
  "Ceredo",
  "Kenova",
  "Lavalette",
  "Wayne",
  "Lesage",
  "Salt Rock",
  // Ohio
  "Chesapeake",
  "Proctorville",
  "Ironton",
  // Kentucky
  "Ashland",
  "Catlettsburg",
] as const;

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const SERVICES: Service[] = [
  {
    title: "Interior Painting",
    description:
      "Walls, ceilings, trim, doors, and accent walls. We prep thoroughly and paint with precision — every edge, every corner.",
    icon: "paintbrush",
  },
  {
    title: "Exterior Painting",
    description:
      "Siding, shutters, fascia, soffits, porches, and decks. Weather-resistant finishes that protect and transform your home.",
    icon: "home",
  },
  {
    title: "Cabinet Painting",
    description:
      "A fraction of the cost of new cabinets, with results that look factory-fresh. Proper prep, primer, and a smooth, durable finish.",
    icon: "layout-grid",
  },
  {
    title: "Deck & Fence Staining",
    description:
      "Restore sun-faded, weathered wood with professional staining that protects against West Virginia's four-season climate.",
    icon: "fence",
  },
  {
    title: "Pressure Washing",
    description:
      "Strip away years of grime, mildew, and weathering. Essential surface prep before painting — or a standalone refresh.",
    icon: "droplets",
  },
  {
    title: "Drywall Repair",
    description:
      "Cracks, nail pops, water damage, and holes patched smooth before a single drop of paint goes on. Proper prep is everything.",
    icon: "wrench",
  },
  {
    title: "Commercial Painting",
    description:
      "Offices, retail spaces, restaurants, and common areas. Minimal disruption to your business. Professional results on schedule.",
    icon: "building-2",
  },
  {
    title: "Color Consultation",
    description:
      "Not sure where to start? We help you choose colors that complement your space, your style, and your home's character.",
    icon: "palette",
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  service: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Had three rooms painted — living room, bedroom, and hallway. Clean work, stayed on the drop cloths, and the edges are razor sharp. Fair price for what you get.",
    author: "Amanda S.",
    location: "Huntington",
    service: "Interior Painting",
  },
  {
    quote:
      "We needed the exterior of our house done before winter. They got it scheduled fast, prepped everything properly, and the paint job looks incredible. Neighbors keep asking who we used.",
    author: "Tom D.",
    location: "Barboursville",
    service: "Exterior Painting",
  },
  {
    quote:
      "Painted our kitchen cabinets and it looks like a brand new kitchen. Saved us thousands compared to replacing them. The finish is so smooth — you'd think they were factory done.",
    author: "Rachel M.",
    location: "Hurricane",
    service: "Cabinet Painting",
  },
  {
    quote:
      "Meade did an amazing job on our rental property. Quick turnaround between tenants, fair pricing, and the place looks brand new every time. We won't use anyone else.",
    author: "Greg & Lisa P.",
    location: "Huntington",
    service: "Residential Painting",
  },
  {
    quote:
      "Our 1920s home needed someone who understood old plaster walls and detailed trim. Meade took the time to prep everything right. The attention to detail was impressive.",
    author: "Sarah K.",
    location: "Huntington",
    service: "Interior Painting",
  },
];

export interface FAQ {
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    question: "How much does it cost to paint a room in Huntington, WV?",
    answer:
      "Room painting costs vary based on size, ceiling height, condition of the walls, and the number of coats needed. Most standard rooms in the Huntington area run between $200–$500. We provide free, no-obligation estimates so you know exactly what to expect before any work begins.",
  },
  {
    question: "Do you paint the exterior of older homes with lead paint?",
    answer:
      "Yes. Huntington has a lot of beautiful older homes, and we're experienced with the specific challenges they present — lead paint, plaster walls, detailed trim work. We follow EPA RRP guidelines for lead-safe work practices and use appropriate containment and cleanup procedures.",
  },
  {
    question: "How long does an interior paint job take?",
    answer:
      "A single room typically takes 1–2 days depending on prep work needed. A full interior (3–5 rooms) usually takes 3–5 days. We always give you a timeline upfront and stick to it.",
  },
  {
    question: "What paint brands do you use?",
    answer:
      "We primarily use Sherwin-Williams and Benjamin Moore — professional-grade paints that deliver the best coverage, durability, and finish. We're happy to discuss specific products and sheens for your project.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Absolutely. We'll come out, look at the job, discuss your goals and color preferences, and give you an honest, detailed estimate — no pressure, no hidden fees.",
  },
  {
    question: "Can you paint kitchen cabinets instead of replacing them?",
    answer:
      "Yes — cabinet painting is one of our most popular services. It saves homeowners thousands compared to a full replacement, and with proper prep, primer, and finish coats, the results are stunning and long-lasting.",
  },
  {
    question: "Do you serve Barboursville and the Tri-State area?",
    answer:
      "We serve the entire Tri-State area including Huntington, Barboursville, Milton, Hurricane, Ceredo, Kenova, and Wayne in West Virginia; Chesapeake, Proctorville, and Ironton in Ohio; and Ashland and Catlettsburg in Kentucky.",
  },
  {
    question:
      "What's the best time of year to paint my house exterior in WV?",
    answer:
      "Late spring through early fall (May–October) is ideal for exterior painting in West Virginia. You need consistent temperatures above 50°F and low humidity for paint to cure properly. We schedule exterior work to take advantage of the best weather windows.",
  },
  {
    question: "Do you do pressure washing before exterior painting?",
    answer:
      "Yes — proper surface prep is essential for a paint job that lasts. We pressure wash to remove dirt, mildew, chalking, and loose paint before any exterior work begins. We also offer pressure washing as a standalone service.",
  },
  {
    question: "Do you paint commercial properties?",
    answer:
      "Yes. We paint offices, retail spaces, restaurants, and common areas. We work around your business hours to minimize disruption and deliver professional results on schedule.",
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Consultation",
    description: "We visit your space, discuss your vision, and provide a free, detailed estimate.",
  },
  {
    step: 2,
    title: "Color Selection",
    description: "We help you pick the perfect colors that complement your home and style.",
  },
  {
    step: 3,
    title: "Surface Prep",
    description: "Thorough cleaning, sanding, patching, priming, and masking. Proper prep is everything.",
  },
  {
    step: 4,
    title: "Painting",
    description: "Clean, precise application with professional-grade products. Every edge, every corner.",
  },
  {
    step: 5,
    title: "Final Walkthrough",
    description: "We walk through the finished work with you to make sure every detail is perfect.",
  },
] as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80",
    alt: "Professional painter rolling fresh blue paint on interior wall in Huntington WV home",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    alt: "Beautifully painted living room with warm neutral tones and natural light",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
    alt: "Freshly painted bright living room with white walls and modern decor",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&q=80",
    alt: "Clean white painted kitchen cabinets with professional finish",
    category: "Cabinets",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Exterior home with fresh paint showing beautiful curb appeal",
    category: "Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    alt: "Stunning exterior house painting with crisp white and blue tones",
    category: "Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    alt: "Clean modern commercial office space with professional interior painting",
    category: "Commercial",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    alt: "Freshly painted exterior porch and entryway with warm welcoming colors",
    category: "Exterior",
  },
] as const;
