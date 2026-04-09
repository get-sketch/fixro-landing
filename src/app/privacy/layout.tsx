import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FixRo — Politica de confidențialitate | Privacy Policy",
  description: "Politica de confidențialitate FixRo. Cum colectăm, folosim și protejăm datele personale.",
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
