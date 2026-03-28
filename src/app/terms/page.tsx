import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "TinkerHive Terms of Service. Read the terms governing use of our website and engagement with our software engineering and DevOps services.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: false },
};

export default function TermsPage() {
  const updated = "27 March 2026";

  return (
    <>
      <Header />
      <main id="main-content" className="bg-white">
        {/* Hero */}
        <section className="bg-[#0f172a] pt-32 pb-16">
          <div className="mx-auto max-w-3xl px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#00b4d8] mb-4">Legal</p>
            <h1 className="text-4xl font-bold text-[#f1f5f9]">Terms of Service</h1>
            <p className="mt-3 text-[#94a3b8] text-sm">Last updated: {updated}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-6">
            <div className="space-y-10 text-[#475569] leading-relaxed">

              <div>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">1. Agreement to Terms</h2>
                <p>
                  By accessing or using the TinkerHive website at{" "}
                  <Link href="/" className="text-[#0369a1] hover:underline">tinkerhive.dev</Link> (the &ldquo;Site&rdquo;),
                  you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree, please do not
                  use the Site.
                </p>
                <p className="mt-3">
                  These Terms apply to visitors and prospective clients who use the Site. Separate written agreements
                  govern actual engagement for services. In case of conflict, the signed service agreement prevails.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">2. Use of the Website</h2>
                <p>You agree to use the Site only for lawful purposes. You must not:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Attempt to gain unauthorised access to any part of the Site or its underlying systems</li>
                  <li>Use automated tools (scrapers, bots) to harvest content without our prior written consent</li>
                  <li>Transmit any malware, viruses, or other malicious code</li>
                  <li>Use the Site in any way that could damage, disable, or impair its availability</li>
                  <li>Misrepresent your identity or affiliation when submitting contact forms</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">3. Services and Engagements</h2>
                <p>
                  The Site provides information about TinkerHive&apos;s services and allows prospective clients to make
                  contact. No service engagement is formed by visiting the Site or submitting the contact form. A binding
                  engagement is only created when both parties have signed a written Statement of Work or Service
                  Agreement.
                </p>
                <p className="mt-3">
                  All pricing, timelines, and deliverables are to be agreed in writing before work commences. Information
                  on this Site is for general reference only and does not constitute a binding offer.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">4. Intellectual Property</h2>
                <p>
                  All content on this Site — including text, graphics, logos, icons, and code — is the intellectual
                  property of TinkerHive or its content suppliers and is protected by copyright and other applicable laws.
                </p>
                <p className="mt-3">
                  You may view, download, and print pages from the Site for your own personal, non-commercial use only.
                  You must not reproduce, republish, or redistribute any content without our prior written permission.
                </p>
                <p className="mt-3">
                  Client deliverables (source code, designs, documentation) are governed by the intellectual property
                  provisions in the applicable service agreement, which typically transfers ownership to the client upon
                  full payment.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">5. Disclaimers</h2>
                <p>
                  The Site and its content are provided &ldquo;as is&rdquo; without warranties of any kind, express or implied,
                  including but not limited to warranties of merchantability, fitness for a particular purpose, or
                  non-infringement.
                </p>
                <p className="mt-3">
                  We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful
                  components. Information on this Site may be out of date at any given time, and we are under no
                  obligation to update it.
                </p>
                <p className="mt-3">
                  Case study descriptions and statistics (e.g., &ldquo;10+ projects delivered&rdquo;, &ldquo;4 continents served&rdquo;)
                  represent general summaries and are provided for informational purposes only.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">6. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by applicable law, TinkerHive and its founder shall not be liable for
                  any indirect, incidental, special, consequential, or punitive damages, including but not limited to
                  loss of profits, data, or goodwill, arising from your use of (or inability to use) the Site.
                </p>
                <p className="mt-3">
                  Our total liability for any claim arising from use of the Site shall not exceed USD $100.
                  Liability for actual service engagements is governed by the applicable service agreement.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">7. Third-Party Links</h2>
                <p>
                  The Site may contain links to third-party websites for reference. These links are provided for
                  convenience only. TinkerHive has no control over the content of those sites and accepts no
                  responsibility for them or for any loss or damage that may arise from your use of them.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">8. Privacy</h2>
                <p>
                  Your use of the Site is also governed by our{" "}
                  <Link href="/privacy" className="text-[#0369a1] hover:underline">
                    Privacy Policy
                  </Link>
                  , which is incorporated into these Terms by reference.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">9. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the Federal Democratic
                  Republic of Ethiopia, without regard to its conflict of law principles.
                </p>
                <p className="mt-3">
                  For clients in the European Union, nothing in these Terms limits any rights you may have under
                  applicable consumer protection or mandatory local law.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">10. Changes to These Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon
                  posting to the Site with an updated &ldquo;Last updated&rdquo; date. Continued use of the Site after changes
                  are posted constitutes your acceptance of the revised Terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">11. Contact</h2>
                <p>Questions about these Terms? Contact us:</p>
                <div className="mt-3 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] p-4">
                  <p className="font-semibold text-[#0f172a]">TinkerHive</p>
                  <p className="text-sm mt-1">Addis Ababa, Ethiopia</p>
                  <p className="text-sm mt-1">
                    Email:{" "}
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
            <Link href="/privacy" className="text-[#0369a1] hover:text-[#00b4d8] transition-colors text-sm font-medium">
              Privacy Policy
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
