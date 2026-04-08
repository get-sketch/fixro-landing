import type { Metadata } from "next";
import LegalLayout from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — FixRo",
  description: "FixRo Privacy Policy. Learn how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy">
      <h2>1. Introduction</h2>
      <p>
        FixRo (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates a home services marketplace platform available as a mobile application (&quot;App&quot;) and website (&quot;fixro.app&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our services.
      </p>
      <p>
        By using FixRo, you consent to the data practices described in this policy. If you do not agree, please do not use our services.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We collect the following categories of personal data:</p>
      <ul>
        <li><strong>Account Information:</strong> Full name, email address, phone number, profile photo, and city of residence when you create an account.</li>
        <li><strong>Location Data:</strong> GPS coordinates and address data when you use location-based features (with your consent).</li>
        <li><strong>Payment Information:</strong> Payment card details are processed securely by our payment processor, Stripe. We do not store credit card numbers on our servers.</li>
        <li><strong>Service Provider Data:</strong> If you register as a provider, we collect additional data including identification documents, professional licenses, work experience, and bank account details (via Stripe Connect).</li>
        <li><strong>Usage Data:</strong> App usage analytics, device information, IP address, and interaction data to improve our services.</li>
        <li><strong>Communications:</strong> Messages exchanged between customers and providers through our in-app chat system.</li>
        <li><strong>Reviews and Ratings:</strong> Content you submit as reviews or ratings for services received.</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use your personal data to:</p>
      <ul>
        <li>Provide, maintain, and improve our platform and services</li>
        <li>Process bookings and facilitate connections between customers and providers</li>
        <li>Process payments securely through Stripe</li>
        <li>Send booking confirmations, reminders, and service updates</li>
        <li>Verify provider identities and qualifications</li>
        <li>Respond to your requests, questions, and support needs</li>
        <li>Detect, investigate, and prevent fraud and security incidents</li>
        <li>Comply with legal obligations and enforce our terms</li>
        <li>Send marketing communications (with your consent; you may opt out at any time)</li>
      </ul>

      <h2>4. Legal Basis for Processing (GDPR)</h2>
      <p>Under the General Data Protection Regulation (GDPR), we process your data based on:</p>
      <ul>
        <li><strong>Contract Performance:</strong> Processing necessary to provide our services (bookings, payments, provider matching).</li>
        <li><strong>Legitimate Interest:</strong> Fraud prevention, platform security, and service improvement.</li>
        <li><strong>Consent:</strong> Marketing communications, location services, and optional data collection.</li>
        <li><strong>Legal Obligation:</strong> Tax records, anti-money laundering requirements, and regulatory compliance.</li>
      </ul>

      <h2>5. Data Sharing</h2>
      <p>We share your data only with:</p>
      <ul>
        <li><strong>Service Providers/Customers:</strong> Relevant booking information is shared between customers and providers to fulfill service requests.</li>
        <li><strong>Stripe:</strong> Payment processing and provider payout management. Stripe&apos;s privacy policy applies to data they process.</li>
        <li><strong>Google/Apple:</strong> Authentication services when you sign in via Google or Apple.</li>
        <li><strong>Supabase:</strong> Our backend infrastructure provider for data storage and authentication.</li>
        <li><strong>Firebase (Google):</strong> Push notifications and analytics.</li>
        <li><strong>Law Enforcement:</strong> When required by law, court order, or legal process.</li>
      </ul>
      <p>We do NOT sell your personal data to third parties.</p>

      <h2>6. Data Retention</h2>
      <p>
        We retain your personal data for as long as your account is active or as needed to provide services. After account deletion, we retain certain data for up to 6 years to comply with Romanian fiscal and legal requirements. Anonymized data may be retained indefinitely for analytics.
      </p>

      <h2>7. Your Rights</h2>
      <p>Under GDPR, you have the right to:</p>
      <ul>
        <li><strong>Access:</strong> Request a copy of your personal data</li>
        <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
        <li><strong>Erasure:</strong> Request deletion of your data (&quot;right to be forgotten&quot;)</li>
        <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
        <li><strong>Restriction:</strong> Request restriction of processing</li>
        <li><strong>Objection:</strong> Object to processing based on legitimate interest</li>
        <li><strong>Withdraw Consent:</strong> Withdraw consent at any time for consent-based processing</li>
      </ul>
      <p>
        To exercise these rights, contact us at <a href="mailto:privacy@fixro.app">privacy@fixro.app</a> or use the data deletion feature in the app.
      </p>

      <h2>8. Data Security</h2>
      <p>
        We implement industry-standard security measures including encryption in transit (TLS/SSL), encryption at rest, secure authentication, and access controls. Payment data is handled exclusively by Stripe, a PCI DSS Level 1 certified payment processor.
      </p>

      <h2>9. International Transfers</h2>
      <p>
        Your data may be processed in the European Union and, for certain services (e.g., Stripe, Firebase), in the United States. All transfers comply with GDPR requirements through Standard Contractual Clauses (SCCs) or adequacy decisions.
      </p>

      <h2>10. Children&apos;s Privacy</h2>
      <p>
        Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal data from minors. If we learn that we have collected data from a child under 18, we will delete it promptly.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of material changes through the App or by email. Your continued use of our services after changes constitutes acceptance of the updated policy.
      </p>

      <h2>12. Contact</h2>
      <p>
        For privacy-related inquiries or to exercise your data rights:<br />
        Email: <a href="mailto:privacy@fixro.app">privacy@fixro.app</a><br />
        Address: Romania<br />
        Data Protection Authority: <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">ANSPDCP (Romania)</a>
      </p>
    </LegalLayout>
  );
}
