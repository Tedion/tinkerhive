import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Clock, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Engineering insights, case studies, and technical deep-dives from the TinkerHive team — covering DevOps, cloud infrastructure, AI engineering, and software development.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog & Insights — TinkerHive",
    description:
      "Engineering deep-dives and insights on DevOps, Kubernetes, AI infrastructure, and software development from the TinkerHive team.",
    url: "https://tinkerhive.dev/blog",
  },
};

const publishedPosts = [
  {
    title: "The Tailscale Revolution: How Mesh Networking Is Killing Traditional VPNs",
    excerpt:
      "Traditional VPNs were designed for a world where everything lived in the office. That world is gone. Here's how Tailscale's mesh networking model changes everything — and why we've moved all our client infrastructure to it.",
    href: "https://medium.com/@tedionabera/the-tailscale-revolution-how-mesh-networking-is-killing-traditional-vpns-e95e164f7140",
    tags: ["Networking", "DevOps", "Security"],
    readTime: "7 min read",
    external: true,
  },
  {
    title: "Building Your First Self-Hosted Kubernetes Cluster: A Complete Ubuntu Server Guide",
    excerpt:
      "A step-by-step walkthrough for setting up a production-grade self-hosted Kubernetes cluster on Ubuntu Server — from bare metal to running workloads. Everything we wish we had when we started.",
    href: "https://medium.com/@tedionabera/building-your-first-self-hosted-kubernetes-cluster-a-complete-ubuntu-server-guide-6254caad60d1",
    tags: ["Kubernetes", "Infrastructure", "Self-hosted"],
    readTime: "12 min read",
    external: true,
  },
];

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
        <section className="bg-[#0f172a] pt-32 pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#00b4d8] mb-4">
              Insights
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#f1f5f9] leading-tight max-w-2xl">
              Engineering notes from the field.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-[#94a3b8] leading-relaxed">
              Technical deep-dives, case studies, and lessons learned from building and running real
              systems for real clients. No fluff.
            </p>
            <a
              href="https://medium.com/@tedionabera"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#00b4d8] hover:text-[#67e8f9] transition-colors"
            >
              Follow on Medium <ExternalLink size={14} />
            </a>
          </div>
        </section>

        {/* Published Posts */}
        <section className="bg-white py-20 border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#0369a1] mb-8">
              Published
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {publishedPosts.map((post) => (
                <a
                  key={post.href}
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-xl border border-[#e2e8f0] bg-white p-7 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                  style={{ borderTopColor: "#00b4d8", borderTopWidth: 3 }}
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#f0f9ff] text-[#0369a1]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a] leading-snug mb-3 group-hover:text-[#0369a1] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-[#64748b]">
                      <Clock size={12} /> {post.readTime}
                    </span>
                    <span className="flex items-center gap-1 text-sm font-semibold text-[#00b4d8] group-hover:gap-2 transition-all">
                      Read on Medium <ArrowRight size={14} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="bg-[#f8fafc] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#0369a1] mb-2">
                In the pipeline
              </h2>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-6">Upcoming posts</h3>
              <ul className="space-y-3 mb-10">
                {upcomingTopics.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[#475569]">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00b4d8] shrink-0" />
                    <span className="text-sm leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://medium.com/@tedionabera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0f172a] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1e293b] transition-colors"
                >
                  Follow on Medium <ExternalLink size={14} />
                </a>
                <a
                  href="mailto:hello@tinkerhive.dev?subject=Blog subscription"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#e2e8f0] px-6 py-3 text-sm font-semibold text-[#0f172a] hover:border-[#00b4d8] hover:text-[#00b4d8] transition-colors"
                >
                  Email me when posts go live
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-16 border-t border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-2xl font-bold text-[#0f172a] mb-3">Want to work together?</h2>
            <p className="text-[#475569] mb-6 max-w-md mx-auto">
              We&apos;re the team behind the systems described in these posts.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#00b4d8] px-6 py-3 text-sm font-semibold text-[#0f172a] hover:bg-[#0096b7] transition-colors"
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
