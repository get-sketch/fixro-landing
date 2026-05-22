import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fixro — Politica cookies | Cookie Policy",
  description: "Politica de cookie-uri Fixro. Cum folosim cookie-urile pe platforma noastră.",
};

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
