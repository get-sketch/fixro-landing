import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FixRo — Șterge datele mele | Delete My Data",
  description: "Solicită ștergerea contului și datelor personale de pe platforma FixRo conform GDPR Art. 17.",
};

export default function DataDeletionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
