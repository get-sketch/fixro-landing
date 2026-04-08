import type { Metadata } from "next";
import LegalLayout from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy — FixRo",
  description: "FixRo Cookie Policy. How we use cookies and similar technologies.",
};

export default function CookiePolicy() {
  return (
    <LegalLayout title="Cookie Policy">
      <h2>1. What Are Cookies</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. They help us remember your preferences and improve your experience. Similar technologies include local storage, pixels, and device identifiers.
      </p>

      <h2>2. How We Use Cookies</h2>
      <p>FixRo uses cookies and similar technologies for:</p>
      <ul>
        <li><strong>Essential Cookies:</strong> Required for the platform to function (authentication, security, session management). These cannot be disabled.</li>
        <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our services to improve the experience (Google Analytics, Firebase Analytics).</li>
        <li><strong>Functional Cookies:</strong> Remember your preferences such as language selection and display settings.</li>
        <li><strong>Payment Cookies:</strong> Used by Stripe to process payments securely and prevent fraud.</li>
      </ul>

      <h2>3. Third-Party Cookies</h2>
      <p>We use the following third-party services that may set cookies:</p>
      <ul>
        <li><strong>Stripe:</strong> Payment processing and fraud detection</li>
        <li><strong>Google (Firebase):</strong> Analytics and push notifications</li>
        <li><strong>Supabase:</strong> Authentication and session management</li>
      </ul>

      <h2>4. Managing Cookies</h2>
      <p>
        You can control cookies through your browser settings. Note that disabling essential cookies may prevent the platform from functioning correctly. For mobile apps, you can manage tracking permissions through your device settings (iOS: Settings → Privacy → Tracking; Android: Settings → Privacy → Ads).
      </p>

      <h2>5. Contact</h2>
      <p>
        For questions about our cookie use:<br />
        Email: <a href="mailto:privacy@fixro.app">privacy@fixro.app</a>
      </p>
    </LegalLayout>
  );
}
