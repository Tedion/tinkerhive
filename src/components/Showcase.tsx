"use client";

import {
  CreditCard,
  Layout,
  GraduationCap,
  Activity,
  Heart,
  GitBranch,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

interface Project {
  name: string;
  description: string;
  tech: string[];
  accent: string;
  icon: LucideIcon;
}

const projects: Project[] = [
  {
    name: "Fintech Payment Platform",
    description:
      "Real-time payment processing dashboard with analytics, transaction monitoring, and automated reconciliation.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    accent: "border-l-[#06b6d4]",
    icon: CreditCard,
  },
  {
    name: "Marketing CMS Platform",
    description:
      "Headless CMS with drag-and-drop page builder, multi-tenant support, and API-first architecture.",
    tech: ["Next.js", "GraphQL", "Prisma"],
    accent: "border-l-[#a855f7]",
    icon: Layout,
  },
  {
    name: "EdTech Learning App",
    description:
      "Real-time learning platform with live video, collaborative whiteboard, and progress tracking.",
    tech: ["React", "Socket.io", "Redis"],
    accent: "border-l-[#22c55e]",
    icon: GraduationCap,
  },
  {
    name: "Infrastructure Monitoring Tool",
    description:
      "Custom observability platform with real-time alerting, log aggregation, and incident management.",
    tech: ["Go", "Prometheus", "Grafana", "K8s"],
    accent: "border-l-[#f97316]",
    icon: Activity,
  },
  {
    name: "Healthcare Booking System",
    description:
      "HIPAA-compliant appointment scheduling with patient records, reminders, and telehealth integration.",
    tech: ["React Native", "Firebase", "HIPAA"],
    accent: "border-l-[#3b82f6]",
    icon: Heart,
  },
  {
    name: "CI/CD Pipeline Platform",
    description:
      "Automated build and deployment platform with parallel execution, rollback support, and GitHub integration.",
    tech: ["Python", "Docker", "GitHub API"],
    accent: "border-l-[#ef4444]",
    icon: GitBranch,
  },
];

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <div
      className={`group bg-white border border-[#e2e8f0] border-l-4 ${project.accent} rounded-lg p-6 flex flex-col transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer`}
    >
      <div className="flex items-start gap-3 mb-2">
        <Icon size={20} className="text-[#64748b] mt-0.5 shrink-0" />
        <h3 className="text-lg font-bold text-[#0f172a]">{project.name}</h3>
      </div>
      <p className="text-sm text-[#475569] leading-relaxed mb-6 flex-1">
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
              Products we&apos;ve built and launched
            </h2>
            <p className="text-[#475569] text-base mt-4 max-w-2xl mx-auto">
              Capability demonstrations of the types of products we build for
              clients across industries.
            </p>
          </div>
        </AnimateIn>

        {/* Project grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.1}>
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
