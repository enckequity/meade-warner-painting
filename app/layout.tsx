import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Professional Painter in Huntington, WV | Meade Warner Painting — Interior & Exterior",
  description:
    "5-star rated painter in Huntington, WV. Interior, exterior, cabinet painting & more. Serving the Tri-State area. Free estimates. Call (304) 955-8802.",
  keywords: [
    "painter Huntington WV",
    "interior painting Huntington WV",
    "exterior painting Huntington WV",
    "house painter near me Huntington",
    "cabinet painting Huntington WV",
    "painting contractor Cabell County",
    "Meade Warner Painting",
    "painter Barboursville WV",
    "commercial painting Tri-State area",
  ],
  openGraph: {
    title: "Meade Warner Painting — Professional Painter in Huntington, WV",
    description:
      "5-star rated painter serving the Tri-State area. Interior, exterior, cabinet painting & more. Free estimates.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://meade-warner-painting.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${jakarta.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
