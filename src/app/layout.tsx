import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "FixRo — Home Services Marketplace | Romania",
  description:
    "Connect with vetted professionals for plumbing, electrical, cleaning, and more. Book trusted home services across Romania in minutes.",
  keywords: [
    "home services",
    "Romania",
    "plumber",
    "electrician",
    "cleaning",
    "handyman",
    "marketplace",
    "fixro",
  ],
  openGraph: {
    title: "FixRo — Home Services Marketplace",
    description:
      "Connect with vetted professionals for all your home service needs in Romania.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
