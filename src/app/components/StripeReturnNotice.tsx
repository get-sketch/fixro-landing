"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useLang } from "../i18n/LanguageProvider";
import { SITE } from "../../lib/site";

// Renders a confirmation banner when the user returns from a Stripe
// Connect onboarding redirect. The edge functions
// (create-connect-account, create-onboarding-link) send providers to
//   ?stripe=return   — onboarding finished
//   ?stripe=refresh  — onboarding expired or needs another pass
// Without this, providers landed on the marketing homepage with no
// signal that anything happened.
export default function StripeReturnNotice() {
  const params = useSearchParams();
  const { t } = useLang();
  const stripeStatus = params.get("stripe");
  const [dismissed, setDismissed] = useState(false);

  // Try the deep link automatically on the 'return' path. If the app
  // isn't installed the browser stays here and the banner remains.
  useEffect(() => {
    if (stripeStatus === "return" && !dismissed) {
      const timer = setTimeout(() => {
        window.location.href = `${SITE.appScheme}stripe/return`;
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [stripeStatus, dismissed]);

  if (!stripeStatus || dismissed) return null;
  if (stripeStatus !== "return" && stripeStatus !== "refresh") return null;

  const isReturn = stripeStatus === "return";

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-4xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center gap-3">
        <div className="flex-1">
          <p className="font-semibold text-gray-900 text-sm">
            {isReturn
              ? t("✅ Configurare cont finalizată", "✅ Account setup complete")
              : t("⏳ Configurare incompletă", "⏳ Setup not finished")}
          </p>
          <p className="text-sm text-gray-600">
            {isReturn
              ? t(
                  "Deschide aplicația Fixro pentru a începe să primești rezervări.",
                  "Open the Fixro app to start receiving bookings.",
                )
              : t(
                  "Procesul Stripe nu s-a finalizat. Reîncearcă din aplicație.",
                  "Stripe onboarding didn't complete. Please retry from the app.",
                )}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`${SITE.appScheme}stripe/${stripeStatus}`}
            className="px-5 py-2.5 bg-[var(--color-accent)] text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            {t("Deschide aplicația", "Open app")}
          </a>
          <button
            onClick={() => setDismissed(true)}
            aria-label={t("Închide", "Dismiss")}
            className="px-3 py-2.5 text-gray-500 hover:text-gray-700 cursor-pointer border-none bg-transparent"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
