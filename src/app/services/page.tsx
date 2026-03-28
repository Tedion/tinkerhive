import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Software, DevOps & Cloud Engineering",
  description:
    "TinkerHive offers end-to-end software development, DevOps, cloud infrastructure, AI engineering, private cloud, and 24/7 managed operations for businesses worldwide.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — TinkerHive | Software, DevOps & Cloud Engineering",
    description:
      "From web and mobile apps to Kubernetes clusters, AI pipelines, and 24/7 managed support — TinkerHive delivers the full engineering stack.",
    url: "https://tinkerhive.dev/services",
  },
};

const services = [
  {
    id: "software-development",
    category: "Software Development",
    accent: "#00b4d8",
    items: [
      {
        title: "Web Applications",
        description:
          "Production-grade web apps built with React, Next.js, and modern frameworks. Fast, accessible, and built to scale from day one.",
        bullets: ["Full-stack React / Next.js", "REST & GraphQL APIs", "Database design & optimisation", "Auth, billing, and third-party integrations"],
      },
      {
        title: "Mobile Applications",
        description:
          "Cross-platform mobile apps for iOS and Android using Flutter, React Native, and Expo — or native Swift / Kotlin when it matters.",
        bullets: ["Flutter & React Native", "Native iOS (Swift) & Android (Kotlin)", "Offline-first architecture", "Push notifications & deep linking"],
      },
      {
        title: "Backend & APIs",
        description:
          "Scalable server-side systems — from microservices to monoliths. Python (FastAPI/Django), Node.js, or Go, depending on the job.",
        bullets: ["FastAPI, Django, Express, Go", "Event-driven architectures", "WebSockets & real-time systems", "Performance optimisation & caching"],
      },
    ],
  },
  {
    id: "cloud-infrastructure",
    category: "Cloud & Infrastructure",
    accent: "#7c3aed",
    items: [
      {
        title: "Cloud Management (AWS, GCP, Azure)",
        description:
          "We design, deploy, and manage cloud infrastructure on all major providers — optimised for cost, reliability, and performance.",
        bullets: ["AWS, GCP, Azure architecture", "Serverless (Lambda, Cloud Run)", "Cost optimisation & reserved capacity", "Multi-region & disaster recovery"],
      },
      {
        title: "Private Cloud",
        description:
          "On-premises and hybrid cloud deployments using Proxmox, XCP-ng, and OpenStack. Full control over your data and compute.",
        bullets: ["Proxmox VE & XCP-ng clusters", "Ceph distributed storage", "Harvester HCI", "On-prem Kubernetes (RKE2)"],
      },
      {
        title: "Kubernetes & Container Orchestration",
        description:
          "Production Kubernetes clusters — from managed EKS/GKE to self-hosted RKE2. Istio service mesh, Helm charts, and GitOps.",
        bullets: ["RKE2, k3s, EKS, GKE, AKS", "Helm & Kustomize", "Istio service mesh", "ArgoCD / Flux GitOps"],
      },
    ],
  },
  {
    id: "devops-platform-engineering",
    category: "DevOps & Platform Engineering",
    accent: "#10b981",
    items: [
      {
        title: "CI/CD Pipelines",
        description:
          "Automated build, test, and deploy pipelines that ship code safely and quickly — Jenkins, GitHub Actions, GitLab CI, and more.",
        bullets: ["GitHub Actions & GitLab CI/CD", "Jenkins pipelines", "OIDC federation & zero-credential deploys", "Blue/green & canary deployments"],
      },
      {
        title: "Infrastructure as Code",
        description:
          "Your entire infrastructure defined in version-controlled code. Reproducible, auditable, and change-safe.",
        bullets: ["Terraform & Terragrunt", "Ansible playbooks", "Pulumi", "Policy as Code (OPA)"],
      },
      {
        title: "Observability & Monitoring",
        description:
          "Full-stack observability so you know what's happening before your users do. Metrics, logs, traces — all connected.",
        bullets: ["Prometheus & Grafana", "ELK / OpenSearch stack", "OpenTelemetry distributed tracing", "Alerting & on-call runbooks"],
      },
    ],
  },
  {
    id: "ai-engineering",
    category: "AI Engineering",
    accent: "#a855f7",
    items: [
      {
        title: "AI Application Development",
        description:
          "Production-grade AI apps — LLM-powered chatbots, RAG pipelines, document processing, and autonomous agents.",
        bullets: ["OpenAI, Anthropic, Gemini, open-source LLMs", "RAG pipelines & vector databases", "LangChain, LlamaIndex, CrewAI", "Fine-tuning & custom model deployment"],
      },
      {
        title: "AI Workflow Automation",
        description:
          "Replace manual processes with intelligent automation. n8n, multi-agent systems, and AI decision layers integrated into your workflows.",
        bullets: ["n8n workflow automation", "Multi-agent orchestration", "Document & data extraction", "Integration with existing SaaS tools"],
      },
      {
        title: "GPU & MLOps Infrastructure",
        description:
          "GPU clusters, model serving, and ML pipelines on Kubernetes. From NVIDIA A100s to cost-optimised spot instances.",
        bullets: ["NVIDIA GPU cluster provisioning", "vLLM, Triton, Ray Serve", "MLflow & experiment tracking", "Drift detection & auto-retraining"],
      },
    ],
  },
  {
    id: "security",
    category: "Security",
    accent: "#ef4444",
    items: [
      {
        title: "Security Architecture & Hardening",
        description:
          "Zero-trust architecture, secrets management, and security compliance for regulated industries and government systems.",
        bullets: ["HashiCorp Vault & 1Password Secrets", "Keycloak SSO & OAuth2/OIDC", "Network segmentation & WireGuard VPN", "CIS benchmark hardening"],
      },
    ],
  },
  {
    id: "managed-operations",
    category: "Managed Operations",
    accent: "#f97316",
    items: [
      {
        title: "24/7 Managed Support",
        description:
          "We monitor your product around the clock and respond within 4 hours for critical incidents — 365 days a year.",
        bullets: ["< 4hr SLA for critical incidents", "Proactive monitoring & alerting", "Monthly health & optimisation reports", "On-call engineering coverage"],
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative bg-[#0f172a] pt-32 pb-0 overflow-hidden">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[#00b4d8]/10 blur-[140px]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[#7c3aed]/10 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6">
            {/* Label */}
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00b4d8] mb-5">
              What We Do
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f1f5f9] leading-[1.08] max-w-3xl">
              One team.<br />
              <span className="bg-gradient-to-r from-[#00b4d8] to-[#67e8f9] bg-clip-text text-transparent">
                Every layer of your stack.
              </span>
            </h1>

            {/* Problem-solution sub */}
            <p className="mt-6 max-w-2xl text-lg text-[#94a3b8] leading-relaxed">
              Most companies stitch together 4–6 vendors to cover software, cloud, DevOps, AI, and support.
              We replace all of them — one team, one contract, zero handoffs.
            </p>

            {/* Key differentiators — inline chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Software Development",
                "Cloud & Infrastructure",
                "DevOps & Platform Engineering",
                "AI Engineering",
                "Security",
                "24/7 Managed Ops",
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-block rounded-full border border-[#1e293b] bg-[#1e293b]/60 px-3 py-1 text-xs font-medium text-[#94a3b8]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#00b4d8] px-6 py-3 font-semibold text-[#0f172a] hover:bg-[#0096b7] hover:shadow-lg hover:shadow-[#00b4d8]/25 transition-all"
              >
                Get a Free Quote <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-[#334155] px-6 py-3 font-semibold text-[#f1f5f9] hover:border-[#00b4d8]/50 hover:text-[#00b4d8] transition-all"
              >
                How We Work
              </Link>
            </div>

            {/* Trust stats bar */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#1e293b] border-t border-[#1e293b]">
              {[
                { value: "10+", label: "Projects delivered" },
                { value: "4", label: "Continents served" },
                { value: "8+", label: "Years of engineering" },
                { value: "< 4hr", label: "Incident SLA" },
              ].map((stat) => (
                <div key={stat.label} className="px-6 py-6 first:pl-0">
                  <p className="text-2xl font-bold text-[#00b4d8]">{stat.value}</p>
                  <p className="text-xs text-[#64748b] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        {services.map((group, gi) => (
          <section
            key={group.category}
            id={group.id}
            className={[
              "py-20 border-b border-[#e2e8f0] last:border-0",
              gi % 2 === 0 ? "bg-white" : "bg-[#f8fafc]",
            ].join(" ")}
          >
            <div className="mx-auto max-w-7xl px-6">
              {/* Section header */}
              <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-3"
                    style={{ backgroundColor: `${group.accent}18`, color: group.accent }}
                  >
                    {group.category}
                  </span>
                  <h2 className="text-2xl font-bold text-[#0f172a]">{group.category}</h2>
                </div>
                <Link
                  href="/contact"
                  className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                  style={{ color: group.accent }}
                >
                  Talk to us about this <ArrowRight size={14} />
                </Link>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((item) => (
                  <div
                    key={item.title}
                    className="group rounded-xl border border-[#e2e8f0] bg-white p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                    style={{ borderTopColor: group.accent, borderTopWidth: 3 }}
                  >
                    <h3 className="text-base font-bold text-[#0f172a] mb-2 group-hover:text-[#0369a1] transition-colors">{item.title}</h3>
                    <p className="text-sm text-[#475569] leading-relaxed mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-[#475569]">
                          <Check size={13} className="mt-0.5 shrink-0" style={{ color: group.accent }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="bg-[#0f172a] py-20 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#00b4d8]/10 blur-[120px]" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#00b4d8] mb-4">Ready to start?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f1f5f9] mb-4">
              Not sure what you need?
            </h2>
            <p className="text-[#94a3b8] mb-8 max-w-lg mx-auto leading-relaxed">
              Book a free 30-minute call. We&apos;ll listen, ask the right questions, and tell you exactly what we&apos;d build — and what we wouldn&apos;t.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#00b4d8] px-8 py-4 font-semibold text-[#0f172a] hover:bg-[#0096b7] hover:shadow-lg hover:shadow-[#00b4d8]/25 transition-all"
              >
                Book a Free Call <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-[#334155] px-8 py-4 font-semibold text-[#f1f5f9] hover:border-[#00b4d8]/50 hover:text-[#00b4d8] transition-all"
              >
                How We Work
              </Link>
            </div>
            {/* Trust line */}
            <p className="mt-8 text-xs text-[#475569]">
              No commitment. No sales deck. Just an honest conversation about your project.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
