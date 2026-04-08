import type { Metadata } from "next";
import LegalLayout from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — FixRo",
  description: "FixRo Terms of Service. Rules and conditions for using the FixRo marketplace.",
};

export default function Terms() {
  return (
    <LegalLayout title="Terms of Service">
      <h2>1. Acceptance of Terms</h2>
      <p>
        By downloading, installing, or using the FixRo application (&quot;App&quot;) or accessing our website at fixro.app, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, do not use our services.
      </p>

      <h2>2. Description of Service</h2>
      <p>
        FixRo operates a marketplace platform that connects customers seeking home services (plumbing, electrical, cleaning, painting, etc.) with independent service providers (&quot;Providers&quot;). FixRo is not a service provider; we facilitate connections and process payments.
      </p>

      <h2>3. Account Registration</h2>
      <p>To use FixRo, you must:</p>
      <ul>
        <li>Be at least 18 years of age</li>
        <li>Provide accurate and complete registration information</li>
        <li>Maintain the security of your account credentials</li>
        <li>Notify us immediately of any unauthorized account use</li>
      </ul>
      <p>You are responsible for all activities that occur under your account.</p>

      <h2>4. Customer Terms</h2>
      <p>As a customer, you agree to:</p>
      <ul>
        <li>Provide accurate information about the services needed</li>
        <li>Be present or available at the agreed service location and time</li>
        <li>Pay for services through the App&apos;s secure payment system</li>
        <li>Treat providers with respect and professionalism</li>
        <li>Leave honest and fair reviews based on actual service experiences</li>
        <li>Not attempt to bypass the platform&apos;s payment system</li>
      </ul>

      <h2>5. Provider Terms</h2>
      <p>As a service provider, you agree to:</p>
      <ul>
        <li>Be a licensed professional where required by Romanian law</li>
        <li>Provide accurate information about your qualifications and experience</li>
        <li>Complete identity verification and background check requirements</li>
        <li>Maintain appropriate insurance coverage for your services</li>
        <li>Arrive on time and perform services professionally</li>
        <li>Accept payments exclusively through FixRo&apos;s payment system</li>
        <li>Set up a Stripe Connect account for receiving payouts</li>
        <li>Not solicit customers for off-platform transactions</li>
      </ul>

      <h2>6. Payments & Fees</h2>
      <ul>
        <li><strong>Platform Commission:</strong> FixRo charges a 15% commission on each transaction. Providers receive 85% of the payment amount.</li>
        <li><strong>Payment Processing:</strong> All payments are processed securely through Stripe. A small Stripe processing fee may apply.</li>
        <li><strong>Payouts:</strong> Provider payouts are processed daily via Stripe Connect to the provider&apos;s connected bank account.</li>
        <li><strong>Pricing Models:</strong> Services may be offered at fixed prices, estimated ranges, or on-site quoted prices.</li>
        <li><strong>Tips:</strong> Customers may optionally add tips, which go 100% to the provider.</li>
        <li><strong>Refunds:</strong> Refund requests are handled on a case-by-case basis. See our Refund Policy below.</li>
      </ul>

      <h2>7. Cancellation & Refund Policy</h2>
      <ul>
        <li>Customers may cancel bookings free of charge up to 24 hours before the scheduled service time</li>
        <li>Cancellations within 24 hours may incur a cancellation fee of up to 50% of the service cost</li>
        <li>No-shows by customers will be charged the full service amount</li>
        <li>If a provider fails to show, the customer receives a full refund</li>
        <li>Disputes about service quality should be reported within 48 hours of service completion</li>
        <li>FixRo will mediate disputes and may issue full or partial refunds at its discretion</li>
      </ul>

      <h2>8. Reviews and Ratings</h2>
      <p>
        Only customers who have completed a booking may leave reviews. Reviews must be honest, relevant, and based on actual experiences. FixRo reserves the right to remove reviews that are fraudulent, abusive, discriminatory, or violate these Terms.
      </p>

      <h2>9. Prohibited Conduct</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Provide false or misleading information</li>
        <li>Harass, threaten, or discriminate against any user</li>
        <li>Attempt to circumvent the payment system</li>
        <li>Use the platform for illegal activities</li>
        <li>Scrape, collect, or harvest user data</li>
        <li>Manipulate reviews or ratings</li>
        <li>Impersonate another person or entity</li>
        <li>Upload malicious content or interfere with the platform&apos;s operation</li>
      </ul>

      <h2>10. Intellectual Property</h2>
      <p>
        The FixRo name, logo, App design, and all related intellectual property are owned by FixRo. Users may not copy, modify, distribute, or create derivative works without our written permission.
      </p>

      <h2>11. Limitation of Liability</h2>
      <p>
        FixRo is a marketplace platform and is not a party to the service agreement between customers and providers. We do not guarantee the quality, safety, or legality of services offered. To the maximum extent permitted by law, FixRo&apos;s liability is limited to the amount of fees paid to us in the 12 months preceding the claim.
      </p>

      <h2>12. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless FixRo, its officers, directors, and employees from any claims, damages, or expenses arising from your use of the platform, violation of these Terms, or infringement of any rights.
      </p>

      <h2>13. Termination</h2>
      <p>
        We may suspend or terminate your account at any time for violations of these Terms. You may delete your account at any time through the App or by contacting us. Upon termination, outstanding payments will be processed according to our standard procedures.
      </p>

      <h2>14. Governing Law</h2>
      <p>
        These Terms are governed by the laws of Romania. Any disputes shall be resolved in the courts of Bucharest, Romania, unless otherwise required by consumer protection law.
      </p>

      <h2>15. Changes to Terms</h2>
      <p>
        We may modify these Terms at any time. Material changes will be communicated via the App or email at least 30 days before taking effect. Continued use after changes constitutes acceptance.
      </p>

      <h2>16. Contact</h2>
      <p>
        For questions about these Terms:<br />
        Email: <a href="mailto:legal@fixro.app">legal@fixro.app</a><br />
        Address: Romania
      </p>
    </LegalLayout>
  );
}
