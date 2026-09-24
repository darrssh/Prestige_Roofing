/**
 * Internal link checker — crawls every HTML file in ./dist and verifies that
 * same-site links resolve to a built file. Run after `npm run build` via
 * `npm run audit:links`. Exits non-zero on broken links.
 *
 * Usage: node ./scripts/check-links.mjs [distDir]
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, dirname } from "node:path";

const dist = process.argv[2] ?? "dist";

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (entry.endsWith(".html")) out.push(full);
  }
  return out;
}

function resolveLink(pageFile, href) {
  // Strip query/hash, skip external + non-page links.
  const clean = href.split("#")[0].split("?")[0];
  if (!clean) return null;
  if (/^(https?:|mailto:|tel:|data:|javascript:)/i.test(clean)) return null;

  let target;
  if (clean.startsWith("/")) {
    // Links are base-prefixed (e.g. /prestige-roofing-website/about-us/).
    // Map them back onto ./dist by stripping the first path segment when it
    // matches the deployed base directory name.
    const parts = clean.split("/").filter(Boolean);
    const baseName = "Prestige_Roofing";
    const rel =
      parts[0] === baseName ? parts.slice(1).join("/") : parts.join("/");
    target = join(dist, rel);
  } else {
    target = join(dirname(pageFile), clean);
  }

  const candidates = [
    target,
    `${target}.html`,
    join(target, "index.html"),
    join(target, "index"),
  ];
  if (candidates.some((c) => existsSync(c) && !statSync(c).isDirectory()))
    return null;
  // Allow extensionless pretty URLs that Astro emits as directories.
  if (existsSync(target) && statSync(target).isDirectory()) {
    if (existsSync(join(target, "index.html"))) return null;
  }
  return target;
}

const pages = walk(dist);
const hrefRe = /<a\s[^>]*href="([^"]+)"[^>]*>/gi;
let broken = 0;

for (const page of pages) {
  const html = readFileSync(page, "utf8");
  const seen = new Set();
  let m;
  while ((m = hrefRe.exec(html)) !== null) {
    const link = m[1];
    if (seen.has(link)) continue;
    seen.add(link);
    const bad = resolveLink(page, link);
    if (bad) {
      broken += 1;
      console.error(
        `BROKEN  ${relative(dist, page)}  ->  ${link}  (missing ${relative(dist, bad)})`,
      );
    }
  }
}

console.log(`Checked ${pages.length} pages. ${broken} broken internal link(s).`);
process.exit(broken > 0 ? 1 : 0);
