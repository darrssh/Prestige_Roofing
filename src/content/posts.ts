/**
 * Blog index — the original website publishes these articles. Full article
 * bodies live on the original site; this index preserves the titles and
 * links every card to the original article URL so no content is fabricated.
 * The one article captured in full during the audit
 * ("What Is Roof Restoration?") is republished locally.
 */

export interface BlogPost {
  title: string;
  slug: string;
  originalUrl: string;
  excerpt: string;
  /** Local page exists for this post. */
  local: boolean;
}

const origin = "https://prestigeroofingsolutions.com.au";

export const blogPosts: BlogPost[] = [
  {
    title: "What Is Roof Restoration?",
    slug: "what-is-roof-restoration",
    originalUrl: `${origin}/what-is-roof-restoration/`,
    excerpt:
      "Repairing, cleaning and refinishing a roof — the restoration process, when to do it, and the steps involved, from evaluation to final inspection.",
    local: true,
  },
  {
    title: "5 Reasons Why Regular Roof Maintenance is Important",
    slug: "5-reasons-why-regular-roof-maintenance-is-important",
    originalUrl: `${origin}/5-reasons-why-regular-roof-maintenance-is-important/`,
    excerpt:
      "Why routine inspections and maintenance protect your roof from small issues becoming major damage.",
    local: false,
  },
  {
    title: "Benefits of Roof Replacement Services in Sydney: A Detailed Guide",
    slug: "benefits-of-roof-replacement-services-in-sydney-a-detailed-guide",
    originalUrl: `${origin}/benefits-of-roof-replacement-services-in-sydney-a-detailed-guide/`,
    excerpt:
      "When replacement beats repair — the benefits, costs and timing of re-roofing a Sydney home.",
    local: false,
  },
  {
    title: "Comprehensive Guide to Roofing Solutions in Sydney",
    slug: "comprehensive-guide-to-roofing-solutions-in-sydney",
    originalUrl: `${origin}/comprehensive-guide-to-roofing-solutions-in-sydney/`,
    excerpt:
      "An overview of roofing options for Sydney homes, from restoration to replacement.",
    local: false,
  },
  {
    title: "Finding the Right Roofing Company Near You: A Comprehensive Guide",
    slug: "finding-the-right-roofing-company-near-you-a-comprehensive-guide",
    originalUrl: `${origin}/finding-the-right-roofing-company-near-you-a-comprehensive-guide/`,
    excerpt:
      "What to look for in a local roofing contractor — licensing, quotes, workmanship and trust signals.",
    local: false,
  },
  {
    title: "Purpose of Roof Painting in Sydney: An In-Depth Analysis",
    slug: "purpose-of-roof-painting-in-sydney-an-in-depth-analysis",
    originalUrl: `${origin}/purpose-of-roof-painting-in-sydney-an-in-depth-analysis/`,
    excerpt:
      "What roof painting actually achieves — appearance, durability and weather protection.",
    local: false,
  },
  {
    title: "Roof Painting in Sydney: Does It Prevent Leaks?",
    slug: "roof-painting-in-sydney-does-it-prevent-leaks",
    originalUrl: `${origin}/roof-painting-in-sydney-does-it-prevent-leaks/`,
    excerpt:
      "Paint vs repairs — what coating can and can't do about a leaking roof.",
    local: false,
  },
  {
    title: "When to Use Roof Repair Services in Sydney: A Comprehensive Guide",
    slug: "when-to-use-roof-repair-services-in-sydney-a-comprehensive-guide",
    originalUrl: `${origin}/when-to-use-roof-repair-services-in-sydney-a-comprehensive-guide/`,
    excerpt:
      "How to tell your roof needs professional repair — and when to call urgently.",
    local: false,
  },
];
