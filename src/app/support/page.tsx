import type { Metadata } from "next";
import LegalLayout from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Help Center — FixRo",
  description: "FixRo Help Center. Get answers to common questions about our home services platform.",
};

export default function Support() {
  return (
    <LegalLayout title="Help Center">
      <h2>Frequently Asked Questions</h2>

      <h3 className="text-lg font-semibold mt-8 mb-2" style={{ fontFamily: "var(--font-outfit)" }}>How do I book a service?</h3>
      <p>
        Open the FixRo app, browse service categories, select a provider, choose a date and time, and confirm your booking. You&apos;ll receive a confirmation notification immediately.
      </p>

      <h3 className="text-lg font-semibold mt-8 mb-2" style={{ fontFamily: "var(--font-outfit)" }}>How do payments work?</h3>
      <p>
        All payments are processed securely through Stripe. You can pay with credit/debit card, Apple Pay, or Google Pay. Your payment details are never stored on our servers.
      </p>

      <h3 className="text-lg font-semibold mt-8 mb-2" style={{ fontFamily: "var(--font-outfit)" }}>Can I cancel a booking?</h3>
      <p>
        Yes. Free cancellation is available up to 24 hours before the scheduled service. Cancellations within 24 hours may incur a fee of up to 50%. You can cancel from the &quot;My Bookings&quot; section.
      </p>

      <h3 className="text-lg font-semibold mt-8 mb-2" style={{ fontFamily: "var(--font-outfit)" }}>How are providers verified?</h3>
      <p>
        All providers go through an identity verification process including ID check, professional license validation (where applicable), and customer review monitoring. We also require providers to declare no relevant criminal convictions.
      </p>

      <h3 className="text-lg font-semibold mt-8 mb-2" style={{ fontFamily: "var(--font-outfit)" }}>What if I&apos;m not satisfied with the service?</h3>
      <p>
        Report the issue within 48 hours through the app. Go to &quot;My Bookings&quot;, select the booking, and tap &quot;Report Issue&quot;. Our support team will review the case and may issue a full or partial refund.
      </p>

      <h3 className="text-lg font-semibold mt-8 mb-2" style={{ fontFamily: "var(--font-outfit)" }}>How do I become a provider?</h3>
      <p>
        In the app, go to Profile → &quot;Become a Pro&quot;. Complete the registration form with your professional details, upload your ID and any relevant licenses, and submit. You&apos;ll also need to set up a Stripe account to receive payments.
      </p>

      <h3 className="text-lg font-semibold mt-8 mb-2" style={{ fontFamily: "var(--font-outfit)" }}>How do providers get paid?</h3>
      <p>
        Providers receive 85% of each payment directly to their bank account via Stripe Connect. Payouts are processed daily. Set up your bank account in the app under Profile → &quot;Bank Account Setup&quot;.
      </p>

      <h3 className="text-lg font-semibold mt-8 mb-2" style={{ fontFamily: "var(--font-outfit)" }}>How do I delete my account?</h3>
      <p>
        Go to Profile → Settings → &quot;Delete Account&quot; in the app, or visit our <a href="/data-deletion">Data Deletion page</a> for instructions.
      </p>

      <h2>Contact Support</h2>
      <p>
        Can&apos;t find what you&apos;re looking for?<br /><br />
        📧 Email: <a href="mailto:support@fixro.app">support@fixro.app</a><br />
        📞 Phone: +40 760 269 269<br />
        ⏰ Support hours: Monday–Friday, 9:00–18:00 (EET)
      </p>
    </LegalLayout>
  );
}
