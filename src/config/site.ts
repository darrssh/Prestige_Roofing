/**
 * Single source of truth for business information, navigation and site meta.
 *
 * All values below were collected from the live website
 * (https://prestigeroofingsolutions.com.au/) during the audit of
 * September 2026. Update values here — every component reads from this file.
 */

export const business = {
  name: "Prestige Roofing Solutions Pty Ltd",
  shortName: "Prestige Roofing Solutions",
  tagline: "Have the royal roof like a king",
  taglineSub: "The best destination for all roofing solutions in Sydney, Australia.",
  phone: "+61 407 462 014",
  phoneHref: "tel:+61407462014",
  emailAdmin: "admin@prestigeroofingsolutions.com.au",
  emailSales: "sales@prestigeroofingsolutions.com.au",
  headOffice: "22 Pembroke St, Blacktown NSW 2148, Australia",
  officeSecondary: "12 Camphorlaurel Ct, Doonside NSW 2767, Australia",
  hours: [
    { days: "Mon – Fri", time: "07:00am – 05:00pm" },
    { days: "Saturday", time: "08:00am – 01:00pm" },
  ],
  hoursShort: "Mon – Fri: 07.00am – 05.00pm · Sat: 08.00am – 01.00pm",
  abnNote: "",
  socials: {
    facebook: "https://www.facebook.com/prestigeroofingsolutionsptyltd",
    instagram: "https://www.instagram.com/prestigeroofing.solutions/",
  },
  googleRating: {
    score: 4.4,
    count: 26,
    url: "https://maps.google.com/?cid=7046342286704314218",
    reviewUrl:
      "https://search.google.com/local/writereview?placeid=ChIJLU1NTgOZEmsRagfTBPqiyWE",
  },
  mapsEmbed:
    "https://www.google.com/maps?q=22+Pembroke+St,+Blacktown+NSW+2148,+Australia&output=embed",
} as const;

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

/**
 * Base-aware internal link helper. Astro serves the site from
 * `import.meta.env.BASE_URL` (e.g. `/prestige-roofing-website/` on GitHub
 * Pages project sites, `/` on a custom domain).
 */
export function href(path: string): string {
  const base = import.meta.env.BASE_URL ?? "/";
  const cleanBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}

export const navigation: NavItem[] = [
  { label: "Home", href: href("/") },
  { label: "About Us", href: href("/about-us/") },
  {
    label: "Services",
    href: href("/services/"),
    children: [
      { label: "Roof Restoration", href: href("/roof-restoration/") },
      { label: "Roof Repairs", href: href("/roof-repairs/") },
      { label: "Roof Replacement", href: href("/roof-replacement/") },
      { label: "Roof Painting", href: href("/roof-painting-sydney/") },
      { label: "Roof Wash", href: href("/roof-wash/") },
      { label: "Tile Roof", href: href("/tile-roof/") },
      { label: "Colorbond Roof", href: href("/colorbond-roof/") },
      { label: "Guttering", href: href("/guttering-guard/") },
      { label: "Gutter Guards", href: href("/guttering/") },
      { label: "Skylights", href: href("/skylights/") },
      { label: "Roof Ventilation", href: href("/roof-ventilation/") },
      { label: "Carport & Pergola", href: href("/modern-carport-pergola/") },
    ],
  },
  {
    label: "Testimonials",
    href: href("/testimonials-roofing-solutions-sydney/"),
  },
  { label: "Areas We Serve", href: href("/area-we-serve/") },
  { label: "Blog", href: href("/blog/") },
  { label: "Contact Us", href: href("/contact-us/") },
];

export const siteMeta = {
  siteName: "Prestige Roofing Solutions Pty Ltd",
  defaultTitle:
    "Prestige Roofing Solutions | Roof Specialists in Sydney",
  defaultDescription:
    "Prestige Roofing Solutions Pty Ltd — Sydney's roofing specialists for roof restoration, repairs, replacement, painting, guttering, skylights and more. Licensed & insured. Call +61 407 462 014.",
  locale: "en_AU",
};
