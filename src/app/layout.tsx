import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageProvider";
import { SITE } from "../lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Fixro — Servicii pentru casă | Home Services Marketplace",
  description:
    "Conectează-te cu profesioniști verificați pentru instalații, electricitate, curățenie și multe altele. Rezervă servicii de încredere în toată România.",
  keywords: [
    "servicii pentru casă",
    "home services",
    "România",
    "instalator",
    "electrician",
    "curățenie",
    "fixro",
    "reparații",
    "profesioniști verificați",
  ],
  metadataBase: new URL(SITE.baseUrl),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Fixro — Servicii pentru casă | Home Services",
    description:
      "Conectează-te cu profesioniști verificați pentru toate nevoile casei tale în România.",
    type: "website",
    locale: "ro_RO",
    url: SITE.baseUrl,
    siteName: SITE.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fixro — Home Services Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fixro — Servicii pentru casă",
    description:
      "Conectează-te cu profesioniști verificați pentru instalații, electricitate, curățenie și multe altele.",
    images: ["/og-image.png"],
  },
  // apple-touch-icon.png intentionally omitted until the asset ships in
  // /public — referencing a missing file produced 404s on iOS bookmarks.
  // The favicon.svg covers iOS via the icons.icon entry below.
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/manifest.webmanifest",
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.baseUrl,
  logo: `${SITE.baseUrl}/og-image.png`,
  description:
    "Home services marketplace connecting customers with verified professionals in Romania.",
  contactPoint: {
    "@type": "ContactPoint",
    email: SITE.email,
    telephone: SITE.phone,
    contactType: "customer support",
    availableLanguage: ["Romanian", "English"],
  },
  areaServed: {
    "@type": "Country",
    name: "Romania",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: LanguageProvider reads localStorage in an
    // effect, so the initial server-rendered text ("ro") may not match the
    // client's stored preference for one paint. The mismatch is cosmetic.
    <html lang="ro" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#1A3A5C" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
