import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers at TinkerHive — Work With World-Class Engineers",
  description:
    "TinkerHive is a remote-first engineering firm building and running software products for clients across 4 continents. See open roles and learn what it's like to work here.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers at TinkerHive — Work With World-Class Engineers",
    description:
      "Join a small, high-impact engineering team doing meaningful work for clients across Africa, the US, EU, and beyond.",
    url: "https://tinkerhive.com/careers",
  },
};

const perks = [
  { title: "Remote-first", description: "Work from anywhere. We care about output, not office hours." },
  { title: "Real responsibility", description: "Small team means your work ships and matters from day one." },
  { title: "Global clients", description: "Work on projects spanning Ethiopia, Switzerland, the US, and New Zealand." },
  { title: "Cutting-edge stack", description: "Kubernetes, AI/ML infrastructure, serverless, GPU clusters — the real thing." },
  { title: "Founder access", description: "Work directly with the founder. No bureaucracy, no layers." },
  { title: "Grow fast", description: "Take ownership of entire systems. Level up faster than at any big company." },
];

const openRoles = [
  {
    title: "Senior DevOps / Platform Engineer",
    type: "Full-time · Contract",
    location: "Remote (Addis Ababa preferred)",
    description:
      "We're looking for a senior engineer who can design and run production Kubernetes clusters, build CI/CD pipelines, and manage cloud infrastructure across AWS, GCP, and private cloud. You'll own entire systems, not just tickets.",
    requirements: [
      "3+ years with Kubernetes (RKE2, k3s, EKS, or GKE)",
      "Terraform / Ansible for infrastructure as code",
      "Strong Linux fundamentals",
      "Experience with monitoring (Prometheus, Grafana)",
      "Bonus: Istio, WireGuard, Keycloak, GitOps",
    ],
  },
  {
    title: "Full-Stack Software Engineer",
    type: "Full-time · Contract",
    location: "Remote",
    description:
      "We need a full-stack engineer who can build production web applications end-to-end — from database schema to deployed frontend. You'll work across the full stack on real client products.",
    requirements: [
      "React / Next.js with TypeScript",
      "Backend: Node.js, Python (FastAPI/Django), or Go",
      "PostgreSQL or other relational databases",
      "REST API design",
      "Bonus: AWS Lambda, serverless, Docker",
    ],
  },
  {
    title: "AI / ML Engineer",
    type: "Contract",
    location: "Remote",
    description:
      "Looking for an engineer who can build AI applications and MLOps infrastructure — RAG pipelines, LLM integrations, model serving, and workflow automation. Must have shipped something real.",
    requirements: [
      "LLM API integration (OpenAI, Anthropic, open-source)",
      "RAG pipelines (LangChain, LlamaIndex, pgvector)",
      "Model serving (vLLM, Triton, or similar)",
      "Python proficiency",
      "Bonus: Kubernetes, GPU infrastructure, n8n",
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-[#0f172a] pt-32 pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#00b4d8] mb-4">Join the Team</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f1f5f9] leading-tight max-w-3xl">
              Build real things.<br />
              <span className="text-[#00b4d8]">With people who care.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[#94a3b8] leading-relaxed">
              TinkerHive is a small, high-output engineering team. We work on government platforms, AI infrastructure,
              cloud-native systems, and more — all for real clients who depend on what we build.
            </p>
          </div>
        </section>

        {/* Why TinkerHive */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#00b4d8] mb-3">Why Work Here</p>
              <h2 className="text-3xl font-bold text-[#0f172a]">What makes TinkerHive different</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {perks.map((p) => (
                <div key={p.title} className="rounded-xl border border-[#e2e8f0] p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-[#0f172a] mb-2">{p.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Roles */}
        <section className="bg-[#f8fafc] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#00b4d8] mb-3">Open Roles</p>
              <h2 className="text-3xl font-bold text-[#0f172a]">Current openings</h2>
              <p className="mt-3 text-[#475569]">
                Don&apos;t see your role? Email us anyway at{" "}
                <a href="mailto:hello@tinkerhive.dev" className="text-[#00b4d8] hover:underline font-medium">
                  hello@tinkerhive.dev
                </a>
                {" "}— we hire for talent over titles.
              </p>
            </div>
            <div className="space-y-6">
              {openRoles.map((role) => (
                <div key={role.title} className="bg-white rounded-xl border border-[#e2e8f0] p-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#0f172a] mb-2">{role.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-[#64748b]">
                        <span className="flex items-center gap-1.5">
                          <Briefcase size={14} /> {role.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} /> {role.location}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`mailto:hello@tinkerhive.dev?subject=Application: ${encodeURIComponent(role.title)}`}
                      className="inline-flex items-center gap-2 rounded-lg bg-[#00b4d8] px-5 py-2.5 text-sm font-semibold text-[#0f172a] hover:bg-[#0096b7] transition-colors whitespace-nowrap shrink-0"
                    >
                      Apply Now <ArrowRight size={14} />
                    </Link>
                  </div>
                  <p className="mt-4 text-[#475569] text-sm leading-relaxed">{role.description}</p>
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#94a3b8] mb-2">Requirements</p>
                    <ul className="space-y-1.5">
                      {role.requirements.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-[#475569]">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00b4d8] shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How we hire */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#00b4d8] mb-3">Our Hiring Process</p>
              <h2 className="text-3xl font-bold text-[#0f172a] mb-8">Simple. Fast. Honest.</h2>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Email us", desc: "Send your CV and a short note about why you want to work here to hello@tinkerhive.dev." },
                  { step: "02", title: "30-min intro call", desc: "We'll have a quick call to learn about you and tell you more about the role and how we work." },
                  { step: "03", title: "Technical interview", desc: "A real conversation about your experience and approach — no LeetCode, no whiteboard puzzles." },
                  { step: "04", title: "Offer", desc: "If it's a good fit, we move fast. You'll hear from us within a week of the first call." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-6">
                    <span className="text-2xl font-bold text-[#e2e8f0] shrink-0 w-8">{s.step}</span>
                    <div>
                      <h3 className="font-semibold text-[#0f172a]">{s.title}</h3>
                      <p className="text-sm text-[#475569] mt-1">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0f172a] py-16">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-2xl font-bold text-[#f1f5f9] mb-3">Ready to apply?</h2>
            <p className="text-[#94a3b8] mb-6">
              Email us at{" "}
              <a href="mailto:hello@tinkerhive.dev" className="text-[#00b4d8] hover:underline">
                hello@tinkerhive.dev
              </a>
            </p>
            <a
              href="mailto:hello@tinkerhive.dev?subject=Career Enquiry"
              className="inline-flex items-center gap-2 rounded-lg bg-[#00b4d8] px-8 py-4 font-semibold text-[#0f172a] hover:bg-[#0096b7] transition-colors"
            >
              Send Your Application <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
