import type { Metadata } from "next";
import LegalLayout from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "GDPR Compliance — FixRo",
  description: "FixRo GDPR compliance information and data subject rights.",
};

export default function GDPR() {
  return (
    <LegalLayout title="GDPR Compliance">
      <h2>1. Our Commitment</h2>
      <p>
        FixRo is committed to protecting the privacy and rights of individuals in accordance with the General Data Protection Regulation (EU) 2016/679 (&quot;GDPR&quot;) and Romanian data protection legislation (Law 190/2018).
      </p>

      <h2>2. Data Controller</h2>
      <p>
        FixRo acts as the Data Controller for personal data collected through our platform. For provider payment data processed by Stripe, Stripe acts as an independent Data Controller.
      </p>

      <h2>3. Data Processing Purposes</h2>
      <ul>
        <li><strong>Service Delivery:</strong> Processing bookings, facilitating communications, and managing payments</li>
        <li><strong>Provider Verification:</strong> Identity verification and qualification checks for service providers</li>
        <li><strong>Platform Safety:</strong> Fraud prevention, dispute resolution, and security monitoring</li>
        <li><strong>Legal Compliance:</strong> Tax reporting, regulatory requirements, and law enforcement cooperation</li>
        <li><strong>Service Improvement:</strong> Analytics and user experience optimization (anonymized where possible)</li>
      </ul>

      <h2>4. Your Rights Under GDPR</h2>
      <p>As a data subject, you have the following rights:</p>

      <h3>Right of Access (Art. 15)</h3>
      <p>You can request a copy of all personal data we hold about you. We will respond within 30 days.</p>

      <h3>Right to Rectification (Art. 16)</h3>
      <p>You can correct inaccurate data through your profile settings or by contacting us.</p>

      <h3>Right to Erasure (Art. 17)</h3>
      <p>You can request deletion of your personal data. Use our <a href="/data-deletion">Data Deletion Request</a> page or email us. Note: certain data must be retained for legal compliance (e.g., tax records for 6 years).</p>

      <h3>Right to Data Portability (Art. 20)</h3>
      <p>You can request your data in a structured, machine-readable format (JSON or CSV).</p>

      <h3>Right to Restriction (Art. 18)</h3>
      <p>You can request that we limit how we process your data while a complaint is being resolved.</p>

      <h3>Right to Object (Art. 21)</h3>
      <p>You can object to processing based on legitimate interests, including direct marketing.</p>

      <h3>Right to Withdraw Consent (Art. 7)</h3>
      <p>Where processing is based on consent, you may withdraw it at any time without affecting prior processing.</p>

      <h2>5. Data Protection Measures</h2>
      <ul>
        <li>All data is encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
        <li>Access controls and role-based permissions for internal systems</li>
        <li>Regular security audits and vulnerability assessments</li>
        <li>Data minimization — we collect only what is necessary</li>
        <li>Sensitive documents (criminal records) are stored in separate, access-restricted storage with automatic deletion after verification</li>
        <li>Payment data is handled exclusively by Stripe (PCI DSS Level 1 certified)</li>
      </ul>

      <h2>6. Data Breach Notification</h2>
      <p>
        In the event of a personal data breach that poses a risk to your rights and freedoms, we will notify the ANSPDCP (Romanian Data Protection Authority) within 72 hours and affected individuals without undue delay, as required by GDPR Article 33-34.
      </p>

      <h2>7. Sub-Processors</h2>
      <p>We use the following sub-processors:</p>
      <ul>
        <li><strong>Supabase (Singapore Pte Ltd)</strong> — Database, authentication, file storage — EU region</li>
        <li><strong>Stripe (Stripe, Inc.)</strong> — Payment processing — EU/US (with SCCs)</li>
        <li><strong>Google Firebase (Google LLC)</strong> — Push notifications, analytics — EU/US (with SCCs)</li>
      </ul>

      <h2>8. Supervisory Authority</h2>
      <p>
        You have the right to lodge a complaint with the Romanian Data Protection Authority (ANSPDCP):<br />
        Website: <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">www.dataprotection.ro</a><br />
        Email: anspdcp@dataprotection.ro<br />
        Address: B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, 010336 Bucharest, Romania
      </p>

      <h2>9. Data Protection Officer</h2>
      <p>
        For GDPR-related inquiries:<br />
        Email: <a href="mailto:dpo@fixro.app">dpo@fixro.app</a>
      </p>
    </LegalLayout>
  );
}
