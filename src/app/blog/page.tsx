import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Insights — TinkerHive",
  description:
    "Engineering insights, case studies, and technical deep-dives from the TinkerHive team — covering DevOps, cloud infrastructure, AI engineering, and software development.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog & Insights — TinkerHive",
    description:
      "Engineering deep-dives and insights on DevOps, Kubernetes, AI infrastructure, and software development from the TinkerHive team.",
    url: "https://tinkerhive.com/blog",
  },
};

const upcomingTopics = [
  "How we deployed OpenG2P across Ethiopian government ministries on RKE2",
  "Building a serverless freight platform on AWS Lambda + FastAPI",
  "GPU cluster provisioning for AI/ML workloads on Kubernetes",
  "Zero-credential CI/CD: GitHub Actions + OIDC federation in production",
  "Private cloud vs public cloud: lessons from 10+ production deployments",
  "Setting up Keycloak SSO across multiple services — the right way",
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-[#0f172a] pt-32 pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#00b4d8] mb-4">Insights</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#f1f5f9] leading-tight max-w-2xl">
              Engineering notes from the field.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[#94a3b8] leading-relaxed">
              Technical deep-dives, case studies, and lessons learned from building and running real systems
              for real clients. No fluff.
            </p>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <div className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-10 mb-12">
                <h2 className="text-2xl font-bold text-[#0f172a] mb-3">Posts coming soon</h2>
                <p className="text-[#475569] leading-relaxed mb-6">
                  We&apos;re writing up detailed technical posts from our project work. In the meantime, here&apos;s what&apos;s
                  in the pipeline — subscribe below to be notified when they go live.
                </p>
                <a
                  href="mailto:hello@tinkerhive.dev?subject=Blog subscription"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#00b4d8] px-6 py-3 font-semibold text-[#0f172a] hover:bg-[#0096b7] transition-colors"
                >
                  Notify me when posts go live <ArrowRight size={16} />
                </a>
              </div>

              <h3 className="text-lg font-semibold text-[#0f172a] mb-4">Upcoming topics</h3>
              <ul className="space-y-3">
                {upcomingTopics.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[#475569]">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00b4d8] shrink-0" />
                    <span className="text-sm leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#f8fafc] py-16 border-t border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-2xl font-bold text-[#0f172a] mb-3">Want to work with us?</h2>
            <p className="text-[#475569] mb-6">
              We&apos;re the team behind the systems described in these posts.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#00b4d8] px-6 py-3 font-semibold text-[#0f172a] hover:bg-[#0096b7] transition-colors"
            >
              Start a Project <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
