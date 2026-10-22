# Zynora Technology Private Limited — Corporate Website

A frontend-only Next.js site for Zynora Technology Private Limited: a dark, enterprise-grade
corporate presence covering services, industries, process, work, architecture and enquiry.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

Requires Node 18.17+ (Node 20 or 22 recommended).

> **First build needs internet.** Fonts are loaded through `next/font/google`
> (Inter + Sora for the site, Oswald + Poppins for the opening intro), which downloads and self-hosts them at build time. If you ever need a
> fully offline build, download the two font families into `public/fonts/` and swap
> `next/font/google` for `next/font/local` in `app/layout.jsx`.

## Stack

| Concern    | Choice                                        |
| ---------- | --------------------------------------------- |
| Framework  | Next.js 14 (App Router, JavaScript)           |
| Styling    | Tailwind CSS 3 + a small CSS design system    |
| Animation  | Framer Motion, plus one `<canvas>` hero scene |
| Icons      | lucide-react                                  |
| 3D / WebGL | None — deliberately (see below)               |

The hero "digital ecosystem" is drawn on a 2D canvas rather than in Three.js. It gives the
same connected-nodes-and-data-pulses effect for a fraction of the payload and frame cost,
which matters more on a corporate landing page than a full 3D scene would.

## Pages

Each item in the navigation is its own page (Next.js App Router):

| Route         | File                       | Sections                                                    |
| ------------- | -------------------------- | ----------------------------------------------------------- |
| `/`           | `app/page.jsx`             | Hero, Trusted By (client logos), Explore cards, call-to-action |
| `/about`      | `app/about/page.jsx`       | Why Zynora, Global Presence, Trusted By                     |
| `/services`   | `app/services/page.jsx`    | Services (six service blocks), Technology Ecosystem         |
| `/solutions`  | `app/solutions/page.jsx`   | Digital Transformation, Enterprise Engineering, Process     |
| `/industries` | `app/industries/page.jsx`  | Industries, Regional Focus (Middle East)                    |
| `/contact`    | `app/contact/page.jsx`     | Contact + enquiry form, FAQ                                 |

The navbar, footer, cursor glow and opening intro live in `app/layout.jsx`, so they are shared
by every page. Menu items come from `nav` in `lib/site.js`; the active item is worked out from
the current URL. The Home page's "Explore" cards read their text from `highlights` in
`lib/site.js`. Individual services can be linked directly, e.g. `/services#erp`.

## Editing content

**Almost all copy lives in `lib/site.js`.** Company details, services, industries, process
steps, case studies, FAQs and form options are all there — edit that file rather than the
components.

Things to update before going live:

1. **`caseStudies`** — the Work / case-studies section is currently switched off (removed from
   `app/page.jsx` and the navigation). `components/CaseStudies.jsx` and the data are kept, so it
   can be re-added later; every entry is a placeholder, so replace them with confirmed projects first.
2. **`techStack`** — a reasonable starting list. Trim it to what Zynora actually uses.
3. **`company.url`** — currently `https://zynoratechnology.com`; set the real domain so
   metadata and structured data resolve correctly.
4. **Privacy Policy / Terms** links in `components/Footer.jsx` point to `#`.

### Service images

Each entry in `services` (in `lib/site.js`) can carry an `image` and `imageAlt`. When set,
the Services section shows that picture (from `public/services/`, 1920×1080 WebP) instead of
the drawn interface visual (all six services have one now); an entry without `image` falls back
to its drawn visual in `components/ServiceVisual.jsx`.
To add or swap one, drop a 16:9 image into `public/services/` and point `image` at it.

## Opening intro

Every page load opens with the Zynora logo animation (A→Z flicker, ZYNORA settling in letter
by letter, the tagline, then a zoom-out that reveals the site). It lives in
`components/IntroSplash.jsx` + `components/IntroSplash.css` and is mounted in `app/layout.jsx`.

- Timings, the word and the tagline are in the `CFG` object at the top of `IntroSplash.jsx`.
- Fonts are Oswald SemiBold (logo) and Poppins SemiBold (tagline), self-hosted via `next/font`.
- The hero's entrance animation waits for the intro to start its exit (`useIntroReady()` in
  `lib/intro.js`), so it plays as the page is revealed instead of behind the overlay.
- Skipped for `prefers-reduced-motion` users and when JavaScript is disabled.
- To remove it, delete `<IntroSplash />` from `app/layout.jsx`; the hero then animates
  immediately as before.

## The enquiry form

`components/ContactForm.jsx` is frontend-only. It validates in the browser and then opens
WhatsApp (to `company.phoneIntl`) with the enquiry pre-composed; an email fallback link is
offered on the confirmation screen.

To add a real backend later, post `values` inside `handleSubmit` before the handoff:

```js
await fetch('/api/enquiry', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(values),
});
```

Formspree or EmailJS both drop in at the same point with no other changes.

## Structure

```
app/
  layout.jsx        fonts, metadata, JSON-LD, navbar, footer, opening intro
  page.jsx          Home page
  about/ services/ solutions/ industries/ contact/   one folder per page
  not-found.jsx     404 page
  globals.css       design tokens + component classes
components/
  IntroSplash (opening logo animation + .css), Highlights (Home cards), CtaBand,
  Navbar, Hero, HeroVisual (canvas), GlobalPresence, WorldMap,
  Services, ServiceVisual, Transformation, WhyZynora, TechStack,
  Industries, Process, CaseStudies (not shown), Architecture, MiddleEast,
  FAQ, Contact, ContactForm, Footer
  ui/               Button (magnetic), Reveal, SectionHeader, Counter, CursorGlow
lib/
  site.js           all site content
  worldmap.js       generated land-dot grid (Natural Earth 110m)
  intro.js          intro → hero hand-off (useIntroReady)
public/
  zynora-mark.png   logo, background removed
  zynora-logo.png   full logo with light tagline for dark backgrounds
  services/         cover images for the Services section (1920×1080 WebP)
```

## Design system

Defined as CSS variables in `app/globals.css` and mirrored in `tailwind.config.js`.

| Token         | Value                  |
| ------------- | ---------------------- |
| Background    | `#050505`              |
| Graphite      | `#111113`              |
| Surface       | `#171719`              |
| Text          | `#FFFFFF`              |
| Muted text    | `#A1A1AA`              |
| Accent        | `#22D3EE` (cyan)       |
| Accent 2      | `#8B5CF6` (violet)     |
| Hairline      | `rgba(255,255,255,.08)` |

Reusable classes: `.section`, `.eyebrow`, `.h1`, `.h2`, `.h3`, `.lead`, `.surface`,
`.pill`, `.field`, `.field-label`, `.accent-text`, `.gradient-text`, `.hairline`.

## Accessibility & performance notes

- Skip-to-content link, semantic landmarks, labelled form fields with `aria-invalid`
  and inline error messaging.
- Every animation respects `prefers-reduced-motion` — including the hero canvas, which
  stops its motion rather than just shortening it.
- No horizontal scroll at 320px through 1440px+ (verified).
- No external runtime requests: fonts are self-hosted by the build, all visuals are
  CSS/SVG/canvas, and there is no stock imagery.
- Route weight is roughly 160 KB of first-load JS.

## Deploying

Any static-friendly host works — Vercel, Netlify, Cloudflare Pages, or your own Node
server via `npm run build && npm start`. For a fully static export, add
`output: 'export'` to `next.config.mjs` and set `images.unoptimized = true`.
