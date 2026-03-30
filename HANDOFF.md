# Meade Warner Painting — Website Handoff

## Live URLs

| What | URL |
|------|-----|
| **Production** | https://meade-warner-painting.vercel.app |
| **GitHub Repo** | https://github.com/enckequity/meade-warner-painting |
| **Vercel Dashboard** | https://vercel.com/denck-enckegcoms-projects/meade-warner-painting |

## How to Update Content

All company data lives in a single file: **`/lib/constants.ts`**

- **Phone number** — `COMPANY.phone` and `COMPANY.phoneHref`
- **Address** — `COMPANY.address`
- **Hours** — `COMPANY.hours`
- **Services** — `SERVICES` array
- **Testimonials** — `TESTIMONIALS` array
- **FAQ** — `FAQS` array
- **Service areas** — `SERVICE_AREAS` array
- **Gallery images** — `GALLERY_IMAGES` array

Edit the file, push to GitHub, and Vercel auto-deploys.

## How to Update Images

Replace Unsplash URLs in `GALLERY_IMAGES` (constants.ts) or section components with real photo URLs. For local images, add them to `/public/images/` and reference as `/images/filename.jpg`.

## Custom Domain Setup

1. Go to Vercel Dashboard → Settings → Domains
2. Add your domain (e.g., `meadewarnerpainting.com`)
3. Update DNS records as instructed by Vercel
4. Update `canonical` URL in `app/layout.tsx` metadata
5. Update `url` in structured data in `app/page.tsx`
6. Update `sitemap.ts` base URL

## Brand Guide

See `brand-guide.md` for colors, typography, voice, and logo specs.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React + inline SVG (Facebook)
- **Fonts:** DM Serif Display (headings) + Plus Jakarta Sans (body)
- **Hosting:** Vercel (auto-deploy from GitHub)
- **API Keys:** None required
- **Environment Variables:** None required

## SEO Assets

- JSON-LD structured data: HousePainter, Service, FAQPage schemas
- Sitemap: `/sitemap.xml` (auto-generated)
- Robots: `/robots.txt` (auto-generated)
- Meta tags and Open Graph in `app/layout.tsx`
