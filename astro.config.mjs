import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Deployment configuration for GitHub Pages.
//
// - PUBLIC_SITE_URL: the public origin of the deployed site.
//   Defaults to the business's custom domain. When deploying to a GitHub
//   Pages *project* site, set this to
//   `https://<github-username>.github.io` (see README + .env.example).
// - PUBLIC_BASE_PATH: the sub-path the site is served from.
//   Defaults to `/prestige-roofing-website` (project site). When a custom
//   domain is connected, set this to `/`.
const siteUrl =
  process.env.PUBLIC_SITE_URL ?? "https://prestigeroofingsolutions.com.au";
const basePath = process.env.PUBLIC_BASE_PATH ?? "/prestige-roofing-website";

export default defineConfig({
  // NOTE: `site` must be the origin only. Astro (and `canonicalFor`) appends
  // `base` automatically — including it here would double the path.
  site: siteUrl,
  base: basePath,
  output: "static",
  trailingSlash: "always",
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes("/404"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
