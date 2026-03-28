import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "TinkerHive Privacy Policy. Learn how we collect, use, and protect your personal data in accordance with GDPR and applicable privacy laws.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: false },
};

export default function PrivacyPage() {
  const updated = "27 March 2026";

  return (
    <>
      <Header />
      <main id="main-content" className="bg-white">
        {/* Hero */}
        <section className="bg-[#0f172a] pt-32 pb-16">
          <div className="mx-auto max-w-3xl px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#00b4d8] mb-4">Legal</p>
            <h1 className="text-4xl font-bold text-[#f1f5f9]">Privacy Policy</h1>
            <p className="mt-3 text-[#94a3b8] text-sm">Last updated: {updated}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-6 prose prose-slate max-w-none">
            <div className="space-y-10 text-[#475569] leading-relaxed">

              <div>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">1. Who We Are</h2>
                <p>
                  TinkerHive (&ldquo;TinkerHive&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a software engineering and DevOps firm
                  founded and operated by Teddy Abera, based in Addis Ababa, Ethiopia. We provide software development,
                  cloud infrastructure, DevOps, AI engineering, and managed operations services to clients worldwide.
                </p>
                <p className="mt-3">
                  <strong>Contact:</strong> For all privacy-related inquiries, email us at{" "}
                  <a href="mailto:privacy@tinkerhive.dev" className="text-[#0369a1] hover:underline">
                    privacy@tinkerhive.dev
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">2. What Data We Collect</h2>
                <p>We collect only the minimum personal data necessary to respond to your enquiries and deliver our services.</p>
                <h3 className="text-base font-semibold text-[#0f172a] mt-4 mb-2">2.1 Data you provide directly</h3>
                <p>When you submit our contact form or send us an email, we collect:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Company name (optional)</li>
                  <li>Project description or message content</li>
                  <li>Budget range (if provided)</li>
                </ul>
                <h3 className="text-base font-semibold text-[#0f172a] mt-4 mb-2">2.2 Data collected automatically</h3>
                <p>
                  We do not run our own analytics or tracking scripts. However, our hosting provider (Vercel) and
                  third-party font/CDN services may collect standard server log data such as IP address, browser type,
                  referring URL, and request timestamps. This data is used solely for security and operational purposes.
                </p>
                <h3 className="text-base font-semibold text-[#0f172a] mt-4 mb-2">2.3 Cookies</h3>
                <p>
                  This website does not set any first-party tracking or advertising cookies. Vercel may set strictly
                  necessary session cookies for infrastructure purposes. We do not use Google Analytics, Facebook Pixel,
                  or any behavioural advertising technologies.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">3. How We Use Your Data</h2>
                <p>We use the personal data you submit solely for:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Responding to your enquiry or project request</li>
                  <li>Scoping and delivering the services you have engaged us for</li>
                  <li>Sending you project updates and invoices (only for active clients)</li>
                  <li>Complying with our legal obligations</li>
                </ul>
                <p className="mt-3">
                  We do <strong>not</strong> sell, rent, or trade your personal data to any third party. We do not use
                  your data for automated decision-making or profiling.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">4. Legal Basis for Processing (GDPR)</h2>
                <p>For individuals in the European Economic Area (EEA), United Kingdom, or Switzerland, our legal bases are:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    <strong>Legitimate interests</strong> — responding to business enquiries you have initiated
                  </li>
                  <li>
                    <strong>Contract performance</strong> — processing data necessary to fulfil a service agreement
                  </li>
                  <li>
                    <strong>Legal obligation</strong> — retaining financial records as required by law
                  </li>
                  <li>
                    <strong>Consent</strong> — where we explicitly ask for it (e.g., a future newsletter sign-up)
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">5. Third-Party Processors</h2>
                <p>We use the following sub-processors. Each processes your data only as necessary to provide their service:</p>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#f8fafc]">
                        <th className="text-left border border-[#e2e8f0] px-4 py-2 font-semibold text-[#0f172a]">Processor</th>
                        <th className="text-left border border-[#e2e8f0] px-4 py-2 font-semibold text-[#0f172a]">Purpose</th>
                        <th className="text-left border border-[#e2e8f0] px-4 py-2 font-semibold text-[#0f172a]">Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-[#e2e8f0] px-4 py-2">Vercel Inc.</td>
                        <td className="border border-[#e2e8f0] px-4 py-2">Website hosting and CDN</td>
                        <td className="border border-[#e2e8f0] px-4 py-2">USA (SCCs apply)</td>
                      </tr>
                      <tr className="bg-[#f8fafc]">
                        <td className="border border-[#e2e8f0] px-4 py-2">Google Fonts</td>
                        <td className="border border-[#e2e8f0] px-4 py-2">Web font delivery</td>
                        <td className="border border-[#e2e8f0] px-4 py-2">USA (SCCs apply)</td>
                      </tr>
                      <tr>
                        <td className="border border-[#e2e8f0] px-4 py-2">Email provider (e.g., Gmail/Workspace)</td>
                        <td className="border border-[#e2e8f0] px-4 py-2">Receiving and replying to enquiries</td>
                        <td className="border border-[#e2e8f0] px-4 py-2">USA (SCCs apply)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-sm">
                  SCCs = Standard Contractual Clauses (EU Commission approved mechanism for international transfers).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">6. Data Retention</h2>
                <p>
                  We retain contact form submissions and email correspondence for up to 3 years from the date of last
                  contact, or for the duration of any active engagement plus 2 years for dispute resolution purposes.
                  Financial records (invoices, contracts) are retained for 7 years to comply with legal obligations.
                </p>
                <p className="mt-3">
                  After the applicable retention period, data is securely deleted or anonymised.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">7. Your Rights</h2>
                <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Access</strong> — request a copy of the personal data we hold about you</li>
                  <li><strong>Rectification</strong> — request correction of inaccurate data</li>
                  <li><strong>Erasure</strong> — request deletion (&ldquo;right to be forgotten&rdquo;)</li>
                  <li><strong>Portability</strong> — receive your data in a machine-readable format</li>
                  <li><strong>Restriction</strong> — request that we limit our processing of your data</li>
                  <li><strong>Objection</strong> — object to processing based on legitimate interests</li>
                  <li><strong>Withdraw consent</strong> — where processing is consent-based, withdraw at any time</li>
                </ul>
                <p className="mt-3">
                  To exercise any of these rights, email{" "}
                  <a href="mailto:privacy@tinkerhive.dev" className="text-[#0369a1] hover:underline">
                    privacy@tinkerhive.dev
                  </a>{" "}
                  with the subject line &ldquo;Data Rights Request&rdquo;. We will respond within 30 days.
                </p>
                <p className="mt-3">
                  If you are in the EU/EEA and believe we have handled your data unlawfully, you have the right to lodge
                  a complaint with your local supervisory authority (e.g., your national Data Protection Authority).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">8. Data Security</h2>
                <p>
                  We implement appropriate technical and organisational measures to protect your personal data against
                  unauthorised access, disclosure, alteration, or destruction. These include encrypted communications
                  (TLS), access controls limited to authorised personnel only, and secure credential management.
                </p>
                <p className="mt-3">
                  No method of electronic transmission or storage is 100% secure. In the event of a data breach that
                  risks your rights and freedoms, we will notify you and the relevant supervisory authority within the
                  legally required timeframe.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">9. Children&apos;s Privacy</h2>
                <p>
                  Our services are directed at businesses and professionals. We do not knowingly collect personal data
                  from individuals under the age of 16. If you believe a child has submitted data to us, contact us
                  immediately and we will delete it.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">10. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or applicable
                  law. The &ldquo;Last updated&rdquo; date at the top of this page will reflect the most recent revision.
                  Continued use of our website after changes are posted constitutes acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">11. Contact Us</h2>
                <p>For any questions about this Privacy Policy or how we handle your data:</p>
                <div className="mt-3 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] p-4">
                  <p className="font-semibold text-[#0f172a]">TinkerHive</p>
                  <p className="text-sm mt-1">Addis Ababa, Ethiopia</p>
                  <p className="text-sm mt-1">
                    Email:{" "}
                    <a href="mailto:privacy@tinkerhive.dev" className="text-[#0369a1] hover:underline">
                      privacy@tinkerhive.dev
                    </a>
                  </p>
                  <p className="text-sm mt-1">
                    General enquiries:{" "}
                    <a href="mailto:hello@tinkerhive.dev" className="text-[#0369a1] hover:underline">
                      hello@tinkerhive.dev
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Back link */}
        <section className="pb-16">
          <div className="mx-auto max-w-3xl px-6">
            <Link href="/" className="text-[#0369a1] hover:text-[#00b4d8] transition-colors text-sm font-medium">
              &larr; Back to Home
            </Link>
            <span className="mx-4 text-[#e2e8f0]">|</span>
            <Link href="/terms" className="text-[#0369a1] hover:text-[#00b4d8] transition-colors text-sm font-medium">
              Terms of Service
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
