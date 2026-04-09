import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fixro-landing.vercel.app";
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/terms`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/cookies`, lastModified, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/gdpr`, lastModified, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/support`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/data-deletion`, lastModified, changeFrequency: "monthly", priority: 0.3 },
  ];
}
