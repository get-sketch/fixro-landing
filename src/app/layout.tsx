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
  ],
  openGraph: {
    title: "FixRo — Servicii pentru casă | Home Services",
    description:
      "Conectează-te cu profesioniști verificați pentru toate nevoile casei tale în România.",
    type: "website",
    locale: "ro_RO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
