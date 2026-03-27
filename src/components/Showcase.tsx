"use client";

import {
  Server,
  Landmark,
  Truck,
  Brain,
  Globe,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

interface Project {
  name: string;
  client: string;
  description: string;
  tech: string[];
  accent: string;
  icon: LucideIcon;
  tag: string;
}

const projects: Project[] = [
  {
    name: "OpenG2P — Government Digital Transformation",
    client: "Ethiopian Gov · ATI, MoWSA, EDRMC",
    description:
      "Led DevOps for Ethiopia's national social protection platform — deploying production-grade RKE2 Kubernetes clusters with Rancher, Istio service mesh, and Keycloak SSO across multiple ministries. Architected hybrid infrastructure across Ethio Telecom cloud and on-premise, supporting Fayda ID-enabled G2P systems serving millions of citizens.",
    tech: ["RKE2", "Rancher", "Istio", "Keycloak", "XCP-ng", "WireGuard", "OpenG2P"],
    accent: "border-l-[#22c55e]",
    icon: Globe,
    tag: "Gov Tech · Ethiopia",
  },
  {
    name: "Siinqee, Hijra & Wegagen — Mobile Banking Infrastructure",
    client: "Atlas CT · 3 Ethiopian Banks",
    description:
      "Spearheaded DevOps for USSD and mobile banking platforms across three banks. Deployed WildFly Java app servers, ActiveMQ message brokers, Nginx/Pound reverse proxies, and Kubernetes-orchestrated microservices on Proxmox private cloud. Implemented Jenkins CI/CD pipelines, Keycloak SSO, and full-stack monitoring with Zabbix, Prometheus, and Grafana.",
    tech: ["Kubernetes", "Docker", "Jenkins", "WildFly", "Proxmox", "Keycloak", "Zabbix", "Grafana"],
    accent: "border-l-[#06b6d4]",
    icon: Landmark,
    tag: "Mobile Banking · Ethiopia",
  },
  {
    name: "WeTruck — Logistics & Freight Management Platform",
    client: "WeTruck · East Africa",
    description:
      "Built cloud-native serverless infrastructure on AWS for a real-time freight management platform — Lambda functions via FastAPI/Mangum, SQS async job processing (11+ job types), PostgreSQL/PostGIS on RDS, and OpenTelemetry distributed tracing. Implemented GitHub Actions CI/CD with OIDC federation, zero-credential deployments, and advisory-locked Alembic migrations.",
    tech: ["AWS Lambda", "FastAPI", "PostgreSQL", "SQS", "Docker", "GitHub Actions", "OpenTelemetry", "Redis"],
    accent: "border-l-[#f97316]",
    icon: Truck,
    tag: "Logistics AI · Cloud-Native",
  },
  {
    name: "GPU-Enabled AI/ML Infrastructure — Exponent.ch",
    client: "Exponent.ch · Geneva, Switzerland",
    description:
      "Deployed and managed NVIDIA GPU-enabled RKE2 Kubernetes clusters supporting AI/ML workloads — including n8n workflow automation, Langfuse LLM observability, LibreChat conversational AI, and ClickHouse analytics. Built full-stack observability with Prometheus, Grafana, and Mimir, and automated secret injection via 1Password and Lade.",
    tech: ["RKE2", "NVIDIA GPU", "n8n", "Langfuse", "Terraform", "Terragrunt", "Prometheus", "Mimir", "Teleport"],
    accent: "border-l-[#a855f7]",
    icon: Brain,
    tag: "AI Infrastructure · Switzerland",
  },
  {
    name: "NetrionX DDEF — Distributed AI Orchestration Platform",
    client: "NetrionX Inc. · USA",
    description:
      "Architected a 5-node distributed platform across AWS, GCP, and physical edge (Jetson Nano) with SR-MPLS networking, BGP, and ONOS SDN control. Integrated a DQN + LSTM AI decision engine executing 20,820+ autonomous placement actions at 2ms latency. Deployed YOLOv8 TensorRT inference at the edge and co-validated 23 of 28 patent claims on the DDEF platform.",
    tech: ["K3s", "SR-MPLS", "FRRouting", "ONOS", "WireGuard", "PyTorch", "TensorRT", "YOLOv8", "Grafana"],
    accent: "border-l-[#3b82f6]",
    icon: Brain,
    tag: "AI · Edge Computing · USA",
  },
  {
    name: "Ministry of Revenue — Ethiopia Tax Payment Portal",
    client: "Atlas CT · Ethiopian Gov",
    description:
      "Contributed to the deployment of Ethiopia's national tax payment portal — Kubernetes-orchestrated clustered Java applications, GitLab CI/CD pipelines, HashiCorp Vault secrets management, Keycloak SSO, and ELK stack log monitoring. Integrated Apache Superset and Jasper for government reporting, collaborating with INSA on security compliance.",
    tech: ["Kubernetes", "GitLab CI", "Vault", "Keycloak", "PostgreSQL", "ELK Stack", "Ansible", "Superset"],
    accent: "border-l-[#ef4444]",
    icon: ShieldCheck,
    tag: "Gov Tech · Ethiopia",
  },
  {
    name: "Cloud Infrastructure Automation — Centriweb",
    client: "Centriweb · Auckland, New Zealand",
    description:
      "Delivering backend and DevOps solutions for scalable cloud-based applications serving international clients — infrastructure automation with Terraform, CI/CD pipeline optimization, cloud resource monitoring for performance and cost-efficiency, and continuous integration of DevOps tooling to improve workflow resilience.",
    tech: ["Terraform", "CI/CD", "Docker", "Cloud Infrastructure", "IaC"],
    accent: "border-l-[#14b8a6]",
    icon: Server,
    tag: "Cloud DevOps · New Zealand",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <div
      className={`group bg-white border border-[#e2e8f0] border-l-4 ${project.accent} rounded-lg p-6 flex flex-col transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer`}
    >
      <div className="flex items-start justify-between gap-3 mb-1">
        <div className="flex items-start gap-3">
          <Icon size={20} className="text-[#64748b] mt-0.5 shrink-0" />
          <h3 className="text-base font-bold text-[#0f172a] leading-snug">{project.name}</h3>
        </div>
      </div>
      <p className="text-xs font-medium text-[#00b4d8] mb-3 ml-8">{project.tag}</p>
      <p className="text-sm text-[#475569] leading-relaxed mb-5 flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="inline-block rounded-full bg-[#f0f9ff] px-3 py-1 text-xs font-medium text-[#0369a1]"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-1 text-sm font-medium text-[#00b4d8] transition-colors duration-300 mt-auto">
        <span>View Details</span>
        <ArrowRight
          size={14}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section id="work" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateIn>
          <div className="mb-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#00b4d8] mb-3">
              OUR WORK
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a]">
              Real projects. Real clients.
            </h2>
            <p className="text-[#475569] text-base mt-4 max-w-2xl mx-auto">
              From Ethiopian government digital transformation to AI/ML infrastructure
              and cloud-native platforms across 4 continents.
            </p>
          </div>
        </AnimateIn>

        {/* Project grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.08}>
          {projects.map((project) => (
            <StaggerItem key={project.name}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
