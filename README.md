# Modern Classes — Premium Coaching Institute Website

A production-ready, fully responsive marketing website built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion** and **Lucide Icons**. Designed to deploy directly on the **Vercel Free Plan** — no local setup or terminal required.

## Deploy on Vercel (no terminal needed)

1. Push this folder to a GitHub repository (via the GitHub web UI "Add file → Upload files", or the desktop app).
2. Go to **vercel.com → Add New → Project** and import that repository.
3. Vercel auto-detects **Next.js** — leave all build settings as default and click **Deploy**.
4. (Optional) Add the Environment Variables below under **Project → Settings → Environment Variables**, then redeploy.

Vercel installs dependencies and builds automatically. Nothing needs to run on your machine.

## Environment Variables (all optional)

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_FORMSPREE_ID` | Your free [Formspree](https://formspree.io) form id so the contact form delivers enquiries to your inbox. |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`). Leave blank to disable analytics. |
| `NEXT_PUBLIC_SITE_URL` | Your final domain, used for SEO + sitemap (e.g. `https://modernclasses.vercel.app`). |

The site works without any of these set (the form falls back gracefully and analytics simply stays off).

## Where to customise content

Everything is centralised — no need to touch component files:

- **Text, courses, faculty, toppers, testimonials, FAQs** → `lib/data.ts`
- **Contact details, phone, address, social links, nav** → `lib/constants.ts`
- **All images (swap placeholders for real photos)** → `lib/images.ts`
- **Colors & design tokens** → `tailwind.config.ts`
- **Animation variants** → `lib/motion.ts`

## Project structure

```
.
├── app/
│   ├── globals.css          # Tailwind layers + design system
│   ├── layout.tsx           # Root layout, SEO metadata, fonts
│   ├── page.tsx             # Homepage (all sections)
│   ├── not-found.tsx        # Custom 404
│   ├── opengraph-image.tsx  # Dynamic OG / social share image
│   ├── icon.tsx             # Dynamic favicon
│   ├── sitemap.ts           # SEO sitemap
│   └── robots.ts            # robots.txt
├── components/
│   ├── ui/                  # Reveal, SectionHeader, Counter, Icon
│   ├── Navbar / Footer / Hero / About / Courses ...  (all sections)
│   ├── Loader / ScrollProgress / BackToTop
│   ├── JsonLd.tsx           # Structured data (schema.org)
│   └── Analytics.tsx        # Google Analytics
├── lib/                     # data, constants, images, types, motion
└── config files             # next.config / tailwind / tsconfig / postcss
```

## Features

- Sticky animated navbar with scroll-spy + mobile drawer
- Scroll progress bar, loading animation, back-to-top button
- Animated counters, scroll-reveal, stagger & hover effects (Framer Motion)
- Animated academic journey timeline
- Toppers grid (carousel on mobile), filterable testimonials, accordion FAQ
- Masonry gallery, embedded map, Formspree-ready contact form
- Full SEO: metadata API, Open Graph, Twitter cards, JSON-LD (Educational
  Organization, Local Business, FAQ, Website), sitemap & robots
- Optimised `next/image`, lazy loading, accessible semantic HTML
- Responsive across mobile / tablet / desktop
