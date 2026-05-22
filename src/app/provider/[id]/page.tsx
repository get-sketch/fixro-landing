import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "../../../lib/site";

// The Flutter app shares URLs of the form:
//   https://fixro-landing.vercel.app/provider/<id>?name=<urlencoded name>
// We treat this as a deep-link landing — render an OG card and an
// "Open in app" CTA. We don't fetch from Supabase to avoid pulling
// supabase-js + service-role keys into the marketing site; the share
// URL carries the name as a query param when available.

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ name?: string }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const { name } = await searchParams;
  if (!UUID_RE.test(id)) {
    return {
      title: "Provider not found | Fixro",
      robots: { index: false, follow: false },
    };
  }
  const displayName = (name ?? "").slice(0, 80);
  const ogTitle = displayName
    ? `${displayName} — Fixro`
    : "Fixro — Verified Professional";
  const ogDesc = displayName
    ? `View ${displayName}'s profile, services, and reviews on Fixro.`
    : "View this professional's profile, services, and reviews on Fixro.";
  const url = `${SITE.baseUrl}/provider/${id}${displayName ? `?name=${encodeURIComponent(displayName)}` : ""}`;
  return {
    title: ogTitle,
    description: ogDesc,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description: ogDesc,
      url,
      type: "profile",
      siteName: SITE.name,
      images: ["/og-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDesc,
      images: ["/og-image.png"],
    },
  };
}

export default async function ProviderRedirect({
  params,
  searchParams,
}: PageProps) {
  const { id } = await params;
  const { name } = await searchParams;
  const validId = UUID_RE.test(id);
  const displayName = (name ?? "").slice(0, 80);
  const deepLink = validId ? `${SITE.appScheme}provider/${id}` : SITE.appScheme;

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center">
          <span
            className="text-white text-2xl font-bold"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            F
          </span>
        </div>

        {validId ? (
          <>
            <h1
              className="text-2xl md:text-3xl font-bold mb-2"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              {displayName || "Fixro Professional"}
            </h1>
            <p className="text-gray-500 mb-8">
              Open the Fixro app to view this professional&apos;s profile, book a
              service, and read verified reviews.
            </p>
            <a
              href={deepLink}
              className="block w-full px-6 py-4 bg-[var(--color-accent)] text-white rounded-2xl text-base font-semibold hover:opacity-90 transition-opacity mb-3"
            >
              Open in Fixro
            </a>
            <Link
              href="/#download"
              className="block w-full px-6 py-4 bg-gray-100 text-gray-700 rounded-2xl text-base font-medium hover:bg-gray-200 transition-colors"
            >
              Don&apos;t have the app? Download
            </Link>
          </>
        ) : (
          <>
            <h1
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Provider not found
            </h1>
            <p className="text-gray-500 mb-8">
              This link looks broken. Browse providers in the Fixro app.
            </p>
            <Link
              href="/"
              className="block w-full px-6 py-4 bg-[var(--color-accent)] text-white rounded-2xl text-base font-semibold hover:opacity-90 transition-opacity"
            >
              Back to Fixro
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
