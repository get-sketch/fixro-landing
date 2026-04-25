import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "FixRo — Servicii pentru casă | Home Services Marketplace",
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
  metadataBase: new URL("https://fixro-landing.vercel.app"),
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
    title: "FixRo — Servicii pentru casă | Home Services",
    description:
      "Conectează-te cu profesioniști verificați pentru toate nevoile casei tale în România.",
    type: "website",
    locale: "ro_RO",
    url: "https://fixro-landing.vercel.app",
    siteName: "FixRo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FixRo — Home Services Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FixRo — Servicii pentru casă",
    description:
      "Conectează-te cu profesioniști verificați pentru instalații, electricitate, curățenie și multe altele.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FixRo",
  url: "https://fixro-landing.vercel.app",
  description:
    "Home services marketplace connecting customers with verified professionals in Romania.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "support-fixro@inanu.art",
    telephone: "+40760269269",
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
    <html lang="ro">
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
