"use client";

import { useState } from "react";
import {
  Server,
  Landmark,
  Truck,
  Brain,
  Globe,
  ShieldCheck,
  MessageSquare,
  Monitor,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";

const ACCENT = "#00b4d8";

interface Project {
  name: string;
  client: string;
  description: string;
  tech: string[];
  icon: LucideIcon;
  tag: string;
  category: string;
}

const projects: Project[] = [
  {
    name: "OpenG2P — Government Digital Transformation",
    client: "ATI, MoWSA, EDRMC · Ethiopia",
    description:
      "Led DevOps for Ethiopia's national social protection platform — RKE2 Kubernetes, Istio service mesh, and Keycloak SSO across multiple government ministries. Hybrid infrastructure supporting Fayda ID-enabled G2P systems serving millions of citizens.",
    tech: ["RKE2", "Rancher", "Istio", "Keycloak", "XCP-ng", "WireGuard", "OpenG2P"],
    icon: Globe,
    tag: "Gov Tech",
    category: "devops",
  },
  {
    name: "Siinqee, Hijra & Wegagen Banks",
    client: "Atlas CT · 3 Ethiopian Banks",
    description:
      "DevOps for USSD and mobile banking platforms across three banks. WildFly, ActiveMQ, Kubernetes-orchestrated microservices on Proxmox private cloud, Jenkins CI/CD, and full-stack monitoring with Zabbix, Prometheus, and Grafana.",
    tech: ["Kubernetes", "Docker", "Jenkins", "WildFly", "Proxmox", "Keycloak", "Grafana"],
    icon: Landmark,
    tag: "Mobile Banking",
    category: "cloud",
  },
  {
    name: "WeTruck — Freight Management Platform",
    client: "WeTruck · East Africa",
    description:
      "Cloud-native serverless infrastructure on AWS for real-time freight management — Lambda/FastAPI, SQS async jobs, PostgreSQL/PostGIS on RDS, OpenTelemetry tracing, and GitHub Actions CI/CD with OIDC zero-credential deploys.",
    tech: ["AWS Lambda", "FastAPI", "PostgreSQL", "SQS", "Docker", "GitHub Actions", "OpenTelemetry"],
    icon: Truck,
    tag: "Logistics · Cloud-Native",
    category: "cloud",
  },
  {
    name: "GPU-Enabled AI/ML Infrastructure",
    client: "Exponent.ch · Geneva, Switzerland",
    description:
      "NVIDIA GPU RKE2 Kubernetes clusters for AI/ML workloads — n8n automation, Langfuse LLM observability, LibreChat, ClickHouse analytics. Full-stack observability with Prometheus, Grafana, Mimir, and automated secret injection.",
    tech: ["RKE2", "NVIDIA GPU", "n8n", "Langfuse", "Terraform", "Prometheus", "Mimir", "Teleport"],
    icon: Brain,
    tag: "AI Infrastructure",
    category: "ai",
  },
  {
    name: "NetrionX DDEF — Distributed AI Platform",
    client: "NetrionX Inc. · USA",
    description:
      "5-node distributed platform across AWS, GCP, and edge (Jetson Nano) with SR-MPLS, BGP, and ONOS SDN. DQN + LSTM AI engine at 2ms latency. YOLOv8 TensorRT edge inference. Co-validated 23 of 28 patent claims.",
    tech: ["K3s", "SR-MPLS", "FRRouting", "ONOS", "WireGuard", "PyTorch", "TensorRT", "YOLOv8"],
    icon: Brain,
    tag: "AI · Edge Computing",
    category: "ai",
  },
  {
    name: "Ethiopia Tax Payment Portal",
    client: "Atlas CT · Ministry of Revenue",
    description:
      "National tax payment portal — Kubernetes-orchestrated Java apps, GitLab CI/CD, HashiCorp Vault, Keycloak SSO, ELK stack. Apache Superset and Jasper for government reporting, with INSA security compliance collaboration.",
    tech: ["Kubernetes", "GitLab CI", "Vault", "Keycloak", "PostgreSQL", "ELK Stack", "Ansible"],
    icon: ShieldCheck,
    tag: "Gov Tech",
    category: "devops",
  },
  {
    name: "Cloud Infrastructure Automation",
    client: "Centriweb · Auckland, New Zealand",
    description:
      "Backend and DevOps for scalable cloud-based applications — Terraform infrastructure automation, CI/CD pipeline optimisation, cloud resource monitoring for performance and cost-efficiency across international client deployments.",
    tech: ["Terraform", "CI/CD", "Docker", "Cloud Infrastructure", "IaC"],
    icon: Server,
    tag: "Cloud DevOps",
    category: "cloud",
  },
  {
    name: "WeTruck — Marketing & Product Website",
    client: "WeTruck · East Africa",
    description:
      "Designed and built the public-facing product website for WeTruck's freight management platform — performance-optimised Next.js frontend, SEO-ready static generation, responsive design across mobile and desktop, and continuous deployment via Vercel.",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel", "TypeScript"],
    icon: Monitor,
    tag: "Web · Product",
    category: "software",
  },
  {
    name: "SMS-to-CRM Backend — Centriweb",
    client: "Centriweb · Auckland, New Zealand",
    description:
      "Built a Node.js backend service that ingests inbound SMS messages via a carrier gateway webhook, parses and enriches contact data, then pushes structured records into the client's CRM via REST API. n8n orchestrates the automation workflow — routing, conditional logic, and multi-step CRM sync. Includes retry logic, delivery receipts, deduplication, and full audit logging.",
    tech: ["Node.js", "Express", "n8n", "Webhooks", "PostgreSQL", "CRM Integration", "REST API"],
    icon: MessageSquare,
    tag: "Backend · Integrations",
    category: "software",
  },
];

const filters = [
  { id: "all", label: "All Projects" },
  { id: "software", label: "Software" },
  { id: "cloud", label: "Cloud" },
  { id: "devops", label: "DevOps" },
  { id: "ai", label: "AI / ML" },
];

export default function Showcase() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <AnimateIn>
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#00b4d8] mb-3">
              Our Work
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a]">
              Real projects. Real clients.
            </h2>
            <p className="text-[#475569] text-base mt-4 max-w-2xl mx-auto">
              From Ethiopian government platforms to AI/ML infrastructure across 4 continents.
            </p>
          </div>
        </AnimateIn>

        {/* Filter bar */}
        <AnimateIn delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={[
                  "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200",
                  activeFilter === f.id
                    ? "bg-[#00b4d8] text-[#0f172a]"
                    : "bg-white text-[#475569] hover:bg-[#f8fafc] hover:text-[#0f172a] border border-[#e2e8f0]",
                ].join(" ")}
              >
                {f.label}
                {f.id === "all" ? (
                  <span className="ml-2 text-xs opacity-70">{projects.length}</span>
                ) : (
                  <span className="ml-2 text-xs opacity-70">
                    {projects.filter((p) => p.category === f.id).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </AnimateIn>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: "easeOut" }}
                  className="group relative rounded-2xl overflow-hidden border border-[#e2e8f0] bg-white hover:border-[#cbd5e1] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Top accent bar */}
                  <div className="h-0.5 w-full" style={{ backgroundColor: ACCENT }} />

                  <div className="p-6 flex flex-col h-full">
                    {/* Icon + tag row */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${ACCENT}20` }}
                      >
                        <Icon size={20} style={{ color: ACCENT }} />
                      </span>
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: `${ACCENT}18`,
                          color: ACCENT,
                          border: `1px solid ${ACCENT}30`,
                        }}
                      >
                        {project.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-[#0f172a] leading-snug mb-1 group-hover:text-[#00b4d8] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-[#64748b] mb-3">{project.client}</p>

                    {/* Description */}
                    <p className="text-sm text-[#475569] leading-relaxed mb-5 flex-1">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className="inline-block rounded-md bg-[#f0f9ff] px-2.5 py-1 text-xs font-medium text-[#0369a1] border border-[#e0f2fe]"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 5 && (
                        <span className="inline-block rounded-md bg-[#f8fafc] px-2.5 py-1 text-xs font-medium text-[#64748b] border border-[#e2e8f0]">
                          +{project.tech.length - 5}
                        </span>
                      )}
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Stats strip */}
        <AnimateIn delay={0.2} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "10+", label: "Projects Delivered" },
              { value: "4", label: "Continents Served" },
              { value: "3", label: "Gov Platforms" },
              { value: "8+", label: "Years Experience" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-6"
              >
                <p className="text-3xl font-bold text-[#00b4d8]">{stat.value}</p>
                <p className="text-xs text-[#64748b] mt-1 font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
