# Prestige Roofing Solutions — Premium Website

A premium, modern, responsive, production-ready rebuild of
[prestigeroofingsolutions.com.au](https://prestigeroofingsolutions.com.au/) for
**Prestige Roofing Solutions Pty Ltd** (Sydney roofing specialists).

**Stack:** Astro (static) · React (islands) · TypeScript · Tailwind CSS v4 ·
Framer Motion · Lucide icons · GitHub Actions → GitHub Pages.

---

## 1. Website audit (source site, September 2026)

### Business information collected

| Item | Value |
|---|---|
| Phone | +61 407 462 014 (`tel:+61407462014`) |
| Emails | sales@prestigeroofingsolutions.com.au, admin@prestigeroofingsolutions.com.au |
| Head office | 22 Pembroke St, Blacktown NSW 2148, Australia |
| Secondary address (footer) | 12 Camphorlaurel Ct, Doonside NSW 2767, Australia |
| Hours | Mon–Fri 07:00am–05:00pm · Sat 08:00am–01:00pm |
| Google rating (quoted on site) | 4.4 from 26 reviews |
| Socials | Facebook `prestigeroofingsolutionsptyltd`, Instagram `prestigeroofing.solutions` |
| Key person quoted | Ajay Singh |
| Team listed | Mark Anthony (Founder), Peter Costa (Chief Engineer), Jack Muli (Engineer), Kelvin C. (Site Supervisor) |

### Page inventory (from `sitemap.xml` + navigation crawl)

| Original URL | Rebuilt as |
|---|---|
| `/` | `src/pages/index.astro` |
| `/about-us/` | `src/pages/about-us.astro` |
| `/contact-us/` | `src/pages/contact-us.astro` |
| `/get-a-quote/` | `src/pages/get-a-quote.astro` |
| `/testimonials-roofing-solutions-sydney/` | `src/pages/testimonials-….astro` |
| `/services/` | `src/pages/services.astro` |
| `/roof-wash/` | dynamic `[service].astro` |
| `/modern-carport-pergola/` | dynamic `[service].astro` |
| `/roof-replacement/` | dynamic `[service].astro` |
| `/roof-repairs/` | dynamic `[service].astro` |
| `/roof-painting-sydney/` | dynamic `[service].astro` |
| `/roof-ventilation/` | dynamic `[service].astro` |
| `/skylights/` | dynamic `[service].astro` |
| `/guttering/` (= Gutter Guards content) | dynamic `[service].astro` |
| `/guttering-guard/` (= Guttering content) | dynamic `[service].astro` |
| `/colorbond-roof/` | dynamic `[service].astro` |
| `/tile-roof/` | dynamic `[service].astro` |
| `/roof-restoration/` | dynamic `[service].astro` |
| `/area-we-serve/` | `src/pages/area-we-serve.astro` |
| `/what-is-roof-restoration/` (full text captured) | `src/pages/what-is-roof-restoration.astro` |
| 7 other blog posts (titles captured, bodies on origin) | `src/pages/blog.astro` index linking to originals |
| `/sample-page/`, `/home-page-2/` (system/draft pages) | **not rebuilt** (no public content value) |
| Privacy / Terms / Cookies / Careers (footer text, no pages) | `privacy-policy` + `terms-and-conditions` templates created (need legal review) |

### Source inconsistencies flagged for client approval

1. **Guttering URLs swapped:** nav label “Guttering Guard” → `/guttering/`, and
   “Guttering” → `/guttering-guard/`. Original slugs preserved; each page
   carries the content its URL served.
2. **Two office addresses:** header shows Blacktown, other blocks show
   Doonside. Both preserved (head office primary).
3. **Experience figures differ:** homepage “15+ Years” vs about page “25+
   Years”. Both preserved on their respective pages.
4. **About counters look broken:** “Total projects 50 / Total Clients 50 /
   Satisfaction 0% / Achievement 0” appear to be unset template defaults —
   omitted (not displayed) pending client confirmation.
5. **Area page repeats “North Sydney” twice**, word-for-word — deduplicated to one section.
6. Testimonials page says “Stef / service provider is really good” where the
   homepage names “Ajay” — preserved per page.

### Missing assets / not migrated

- Original logo/WordPress uploads were **not hotlinked** (fragile dependency);
  replaced with an inline SVG wordmark + licensed-style remote imagery
  (Unsplash CDN) with descriptive alt text. Swap in real job photography before
  client sign-off — and never present stock photos as completed projects.
- Team-member portraits and Google-review avatars replaced with initial
  avatars (names/words preserved verbatim).

---

## 2. Getting started

Requirements: Node.js 20+.

```bash
npm install
npm run dev      # local dev at http://localhost:4321
npm run build    # production build → ./dist
npm run preview  # serve ./dist locally
npm run audit:links  # verify internal links in ./dist (runs in CI too)
```

### Environment

```bash
cp .env.example .env
```

| Variable | Purpose | Default |
|---|---|---|
| `PUBLIC_FORMSPREE_ENDPOINT` | Formspree endpoint for the enquiry form (e.g. `https://formspree.io/f/xxxx`) | empty → form shows phone/email fallback by design |
| `PUBLIC_SITE_URL` | Public origin (canonical URLs, sitemap) | `https://prestigeroofingsolutions.com.au` |
| `PUBLIC_BASE_PATH` | Sub-path the site is served from | `/prestige-roofing-website` |

### Updating content

All editable content lives in code — no CMS needed:

- `src/config/site.ts` — phone, emails, addresses, hours, nav, socials.
- `src/content/services.ts` — all 12 services (copy, highlights, FAQs, images).
- `src/content/testimonials.ts` — site + Google-quoted reviews.
- `src/content/areas.ts` — service areas + area FAQs.
- `src/content/posts.ts` — blog index.

---

## 3. Project structure

```text
prestige-roofing-website/
├── .github/workflows/deploy.yml   # build → link-check → GitHub Pages
├── public/                        # favicon.svg, robots.txt
├── scripts/check-links.mjs        # internal link audit
├── src/
│   ├── components/                # Header, Footer, Logo, PageHero, Breadcrumbs,
│   │                              # ServiceCard, ServiceIcon, TestimonialCard, CTASection
│   │   └── react/                 # ContactForm, FAQAccordion, Reveal (islands)
│   ├── config/site.ts             # business info + navigation (single source)
│   ├── content/                   # services, testimonials, areas, posts
│   ├── layouts/BaseLayout.astro   # SEO head, fonts, JSON-LD slot, reveal script
│   ├── pages/                     # 23 routes (incl. dynamic [service].astro ×12)
│   ├── styles/global.css           # Tailwind v4 theme (charcoal/cream/copper)
│   └── utils/links.ts             # base-aware href() + canonical helpers
├── astro.config.mjs               # static output + base-path config
└── README.md
```

Design system: charcoal `#171C24` · warm white `#F7F7F4` · copper `#C8874B` ·
slate `#252B35` · muted `#747B85`; Manrope headings + Inter body; subtle
scroll-reveal with `prefers-reduced-motion` support; skip link, landmarks,
labelled form controls, focus styles.

---

## 4. Deploy to GitHub Pages

### Option A — Project site (default, no domain changes)

1. Create a repo named `prestige-roofing-website` and push this project.
2. GitHub → Settings → Pages → Source: **GitHub Actions**.
3. Push to `master`/`main` (or run the workflow manually). The site deploys to
   `https://<username>.github.io/prestige-roofing-website/`.
4. Set the repo variable `PUBLIC_SITE_URL=https://<username>.github.io`
   (Settings → Secrets and variables → Actions → Variables) so canonical URLs
   and the sitemap match; `PUBLIC_BASE_PATH` stays `/prestige-roofing-website`.
5. Update `public/robots.txt` Sitemap line to the deployed URL.

### Option B — Custom domain (prestigeroofingsolutions.com.au)

1. Settings → Pages → Custom domain → enter the domain; add the DNS records
   GitHub shows (A/AAAA or CNAME).
2. Set repo variables: `PUBLIC_SITE_URL=https://prestigeroofingsolutions.com.au`,
   `PUBLIC_BASE_PATH=/`.
3. Update `public/robots.txt` Sitemap line to `https://prestigeroofingsolutions.com.au/sitemap-index.xml`.
4. Re-run the workflow; verify assets, nav and deep links (`/about-us/`,
   `/roof-replacement/`, …) — GitHub Pages serves `index.html` per directory,
   so all routes resolve with no SPA fallback needed.

The workflow (`.github/workflows/deploy.yml`) installs, builds, runs the
internal-link audit, uploads `./dist`, and deploys. Build fails loudly on
broken internal links.

---

## 5. Features needing external configuration

1. **Contact form delivery** — set `PUBLIC_FORMSPREE_ENDPOINT` (Formspree form
   ID). Until set, submissions show the phone/email fallback (intentional, not
   a silently-broken form). Includes validation, honeypot, loading/success/error states.
2. **Deployment target** — set `PUBLIC_SITE_URL` / `PUBLIC_BASE_PATH` per
   Section 4; update `robots.txt` Sitemap URL.
3. **Real photography** — replace Unsplash placeholders with licensed job
   photography (keep honest captions).
4. **Legal pages** — `privacy-policy` / `terms-and-conditions` are clearly
   marked templates; get client legal review (both are `noindex` until approved).
5. **Remaining blog bodies** — 7 article stubs link to the original URLs;
   migrate full text when available.

## 6. Verification (run 2026-09-24)

- `npm run build` — ✅ 23 pages, sitemap generated, 0 errors.
- `npm run audit:links` — ✅ 23 pages checked, 0 broken internal links.
- Routes verified in `dist/`: `/`, `/about-us/`, `/contact-us/`,
  `/get-a-quote/`, `/services/`, 12 service slugs, `/area-we-serve/`,
  `/testimonials-roofing-solutions-sydney/`, `/blog/`,
  `/what-is-roof-restoration/`, `/privacy-policy/`, `/terms-and-conditions/`.
- SEO: unique titles/descriptions per page, canonicals, Open Graph, sitemap,
  robots, `RoofingContractor` + `Service` + `FAQPage` + `Article` JSON-LD,
  breadcrumb nav, semantic HTML, image alts.
- Responsive: mobile menu + fluid grids at 375/390/768/1024/1440 (Tailwind
  breakpoints; verify visually with `npm run preview` + device toolbar).
- Accessibility: skip link, landmarks, aria-expanded menu/accordion,
  labelled inputs with error roles, decorative images `alt=""`, colour
  contrast follows the approved palette.
- No fabricated reviews, ratings, certifications, statistics or services —
  see inconsistency log in Section 1.
