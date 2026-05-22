// Single source of truth for site-wide constants.
// Override via NEXT_PUBLIC_BASE_URL if a custom domain is ever added.

const RAW_BASE = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "");

export const SITE = {
  // Canonical production URL. The site is served from the Vercel domain;
  // drives OG tags, JSON-LD, sitemap, robots, and provider share links.
  baseUrl: RAW_BASE || "https://fixro-landing.vercel.app",
  name: "Fixro",
  legalName: "Fixro",
  email: "support-fixro@inanu.art",
  phone: "+40760269269",
  phoneDisplay: "+40 760 269 269",
  // Bumped whenever the legal text materially changes. Surfaced on every
  // legal page so users see when the policy was last updated.
  legalLastUpdated: {
    ro: "29 aprilie 2026",
    en: "April 29, 2026",
  },
  // Deep-link scheme registered by the Flutter app's iOS Info.plist /
  // Android intent-filter. Used on the Stripe return banner.
  appScheme: "fixro://",
  // Public store listings. Surfaced on the download CTA buttons.
  appStoreUrl: "https://apps.apple.com/us/app/fixro-servicii-pentru-cas%C4%83/id6768552943",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.fixro.fixro",
} as const;
