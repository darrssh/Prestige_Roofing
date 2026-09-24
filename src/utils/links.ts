import { href } from "../config/site";

/** Build a canonical URL for a page path (respects deployment base). */
export function canonicalFor(path: string): string {
  const site = (import.meta.env.SITE ?? "https://prestigeroofingsolutions.com.au").replace(
    /\/$/,
    "",
  );
  const base = import.meta.env.BASE_URL ?? "/";
  const cleanBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const cleanPath = path === "/" ? "/" : path.replace(/\/$/, "") + "/";
  return `${site}${cleanBase}${cleanPath}`;
}

export { href };

/** Resolve a service slug to its page URL (preserves original URL structure). */
export function serviceHref(slug: string): string {
  return href(`/${slug}/`);
}
