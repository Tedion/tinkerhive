"use client";

import { cn } from "@/lib/utils";
import GlassCard from "./GlassCard";
import { StaggerContainer, StaggerItem } from "./AnimateIn";
import AnimateIn from "./AnimateIn";

interface Project {
  name: string;
  description: string;
  tech: string[];
  gradient: string;
  large: boolean;
  mockup: "dashboard" | "cms" | "edtech" | "monitoring" | "healthcare" | "cicd";
}

const projects: Project[] = [
  {
    name: "Fintech Payment Platform",
    description: "Real-time payment processing dashboard with analytics, transaction monitoring, and automated reconciliation.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
    large: true,
    mockup: "dashboard",
  },
  {
    name: "Marketing CMS Platform",
    description: "Headless CMS with drag-and-drop page builder, multi-tenant support, and API-first architecture.",
    tech: ["Next.js", "GraphQL", "Prisma"],
    gradient: "from-emerald-400 via-green-500 to-teal-600",
    large: false,
    mockup: "cms",
  },
  {
    name: "EdTech Learning App",
    description: "Real-time learning platform with live video, collaborative whiteboard, and progress tracking.",
    tech: ["React", "Socket.io", "Redis"],
    gradient: "from-amber-400 via-orange-500 to-red-500",
    large: false,
    mockup: "edtech",
  },
  {
    name: "Infrastructure Monitoring Tool",
    description: "Custom observability platform with real-time alerting, log aggregation, and incident management.",
    tech: ["Go", "Prometheus", "Grafana", "K8s"],
    gradient: "from-violet-500 via-purple-600 to-fuchsia-600",
    large: true,
    mockup: "monitoring",
  },
  {
    name: "Healthcare Booking System",
    description: "HIPAA-compliant appointment scheduling with patient records, reminders, and telehealth integration.",
    tech: ["React Native", "Firebase", "HIPAA"],
    gradient: "from-rose-400 via-pink-500 to-fuchsia-500",
    large: false,
    mockup: "healthcare",
  },
  {
    name: "CI/CD Pipeline Platform",
    description: "Automated build and deployment platform with parallel execution, rollback support, and GitHub integration.",
    tech: ["Python", "Docker", "GitHub API"],
    gradient: "from-sky-400 via-cyan-500 to-teal-500",
    large: false,
    mockup: "cicd",
  },
];

/* ------------------------------------------------------------------ */
/*  Mockup UI components for each project type                         */
/* ------------------------------------------------------------------ */

function DashboardMockup() {
  return (
    <div className="absolute inset-0 flex">
      <div className="w-11 h-full bg-[#0f1729] flex flex-col items-center gap-2.5 py-3 border-r border-white/5">
        <div className="w-6 h-6 rounded-lg bg-cyan-500/30" />
        <div className="w-5 h-1 rounded bg-cyan-400/30" />
        <div className="w-5 h-1 rounded bg-white/10" />
        <div className="w-5 h-1 rounded bg-white/10" />
        <div className="w-5 h-1 rounded bg-white/10" />
      </div>
      <div className="flex-1 p-3 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="h-2.5 w-24 rounded bg-white/20" />
          <div className="h-5 w-5 rounded-full bg-cyan-500/20 border border-cyan-500/30" />
        </div>
        <div className="flex gap-2">
          {[
            { label: "$42.8k", color: "bg-cyan-500/20 border-cyan-500/20", text: "text-cyan-400" },
            { label: "1,284", color: "bg-emerald-500/20 border-emerald-500/20", text: "text-emerald-400" },
            { label: "98.2%", color: "bg-violet-500/20 border-violet-500/20", text: "text-violet-400" },
          ].map((s) => (
            <div key={s.label} className={`flex-1 rounded-lg border p-2 ${s.color}`}>
              <div className="h-1 w-8 rounded bg-white/15 mb-1" />
              <div className={`text-[10px] font-mono font-bold ${s.text}`}>{s.label}</div>
            </div>
          ))}
        </div>
        <div className="flex-1 rounded-lg bg-white/[0.03] border border-white/5 p-2 flex items-end gap-1">
          {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-cyan-500/40" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="flex flex-col gap-1">
          {["completed", "pending", "processing"].map((s) => (
            <div key={s} className="flex gap-2 items-center px-1">
              <div className="h-1.5 w-16 rounded bg-white/15" />
              <div className="h-1.5 w-12 rounded bg-white/8" />
              <span className={`ml-auto text-[7px] font-mono px-1.5 py-0.5 rounded-full ${s === "completed" ? "bg-emerald-500/20 text-emerald-400" : s === "pending" ? "bg-amber-500/20 text-amber-400" : "bg-cyan-500/20 text-cyan-400"}`}>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CmsMockup() {
  return (
    <div className="absolute inset-0 flex">
      <div className="w-14 h-full bg-[#0f1729] border-r border-white/5 p-2 flex flex-col gap-1.5">
        <div className="h-2.5 w-full rounded bg-emerald-500/20 flex items-center px-1">
          <div className="h-1 w-6 rounded bg-emerald-400/40" />
        </div>
        <div className="h-1.5 w-10 rounded bg-white/15" />
        <div className="h-1.5 w-8 rounded bg-emerald-400/20" />
        <div className="h-1.5 w-11 rounded bg-white/8" />
        <div className="mt-2 h-px w-full bg-white/5" />
        <div className="h-1.5 w-9 rounded bg-white/8" />
        <div className="h-1.5 w-7 rounded bg-white/8" />
      </div>
      <div className="flex-1 p-3 flex flex-col gap-2">
        <div className="h-2.5 w-28 rounded bg-white/20" />
        <div className="flex-1 flex flex-col gap-1.5">
          <div className="h-10 rounded-lg bg-emerald-500/10 border border-dashed border-emerald-500/20 flex items-center justify-center">
            <span className="text-[8px] font-mono text-emerald-400/60">Hero Section</span>
          </div>
          <div className="flex gap-1.5 flex-1">
            <div className="flex-1 rounded-lg bg-white/[0.03] border border-dashed border-white/10 p-1.5 flex flex-col gap-1">
              <div className="h-1.5 w-full rounded bg-white/15" />
              <div className="h-1 w-3/4 rounded bg-white/8" />
              <div className="h-1 w-1/2 rounded bg-white/8" />
            </div>
            <div className="flex-1 rounded-lg bg-emerald-500/5 border border-dashed border-emerald-500/15 p-1.5 flex items-center justify-center">
              <span className="text-[7px] font-mono text-emerald-400/40">Image</span>
            </div>
          </div>
          <div className="h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center">
            <span className="text-[8px] font-mono text-emerald-400/60">CTA Block</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function EdtechMockup() {
  return (
    <div className="absolute inset-0 p-3 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="h-5 w-5 rounded-lg bg-orange-500/30" />
        <div className="h-2 w-20 rounded bg-white/15" />
        <div className="ml-auto flex gap-1">
          <div className="h-4 w-4 rounded-full bg-emerald-400/40 border border-emerald-400/30" />
          <div className="h-4 w-4 rounded-full bg-cyan-400/40 border border-cyan-400/30" />
          <div className="h-4 w-4 rounded-full bg-amber-400/40 border border-amber-400/30" />
        </div>
      </div>
      <div className="flex gap-2 flex-1">
        <div className="flex-[2] rounded-lg bg-[#1a1020] border border-white/5 flex items-center justify-center relative">
          <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
            <div className="w-0 h-0 border-l-[8px] border-l-orange-400/70 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-1" />
          </div>
          <div className="absolute bottom-1.5 left-1.5 right-1.5 h-1.5 rounded-full bg-white/10">
            <div className="h-full w-1/3 rounded-full bg-orange-500/50" />
          </div>
          <div className="absolute top-1.5 right-1.5 text-[6px] font-mono text-white/30 bg-black/30 px-1 rounded">LIVE</div>
        </div>
        <div className="flex-1 rounded-lg bg-white/[0.03] border border-white/5 p-1.5 flex flex-col gap-1">
          <div className="text-[7px] font-mono text-white/30 mb-0.5">Chat</div>
          <div className="rounded-lg bg-cyan-500/10 p-1 self-start max-w-[80%]">
            <div className="h-1 w-14 rounded bg-cyan-400/25" />
          </div>
          <div className="rounded-lg bg-orange-500/10 p-1 self-end max-w-[80%]">
            <div className="h-1 w-10 rounded bg-orange-400/25" />
          </div>
          <div className="rounded-lg bg-cyan-500/10 p-1 self-start max-w-[80%]">
            <div className="h-1 w-16 rounded bg-cyan-400/25" />
          </div>
          <div className="mt-auto flex gap-1">
            <div className="flex-1 h-4 rounded-lg bg-white/5 border border-white/8" />
            <div className="h-4 w-6 rounded-lg bg-orange-500/20" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MonitoringMockup() {
  return (
    <div className="absolute inset-0 flex">
      <div className="w-9 h-full bg-[#0f1729] border-r border-white/5 flex flex-col items-center gap-2 py-2">
        <div className="w-5 h-5 rounded-lg bg-violet-500/25" />
        <div className="w-4 h-0.5 rounded bg-violet-400/30" />
        <div className="w-4 h-0.5 rounded bg-white/8" />
        <div className="w-4 h-0.5 rounded bg-white/8" />
        <div className="w-4 h-0.5 rounded bg-white/8" />
      </div>
      <div className="flex-1 p-2 flex flex-col gap-1.5">
        <div className="flex gap-1.5">
          {[
            { color: "emerald", label: "API" },
            { color: "emerald", label: "Web" },
            { color: "amber", label: "Worker" },
            { color: "red", label: "Queue" },
          ].map((s) => (
            <div key={s.label} className={`flex-1 rounded-lg bg-${s.color}-500/10 border border-${s.color}-500/15 p-1.5 flex items-center gap-1`}>
              <div className={`h-2 w-2 rounded-full bg-${s.color}-400/70`} />
              <span className="text-[6px] font-mono text-white/40">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-1.5 flex-1">
          <div className="flex-1 rounded-lg bg-white/[0.03] border border-white/5 p-1.5">
            <div className="text-[6px] font-mono text-white/25 mb-1">CPU / Memory</div>
            <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
              <polyline points="0,30 10,25 20,28 30,15 40,20 50,10 60,18 70,8 80,12 90,5 100,15" fill="none" stroke="rgba(168,85,247,0.6)" strokeWidth="1.5" />
              <polyline points="0,35 10,32 20,30 30,25 40,28 50,22 60,25 70,20 80,22 90,18 100,20" fill="none" stroke="rgba(34,211,238,0.5)" strokeWidth="1" />
            </svg>
          </div>
          <div className="flex-1 rounded-lg bg-white/[0.03] border border-white/5 p-1.5">
            <div className="text-[6px] font-mono text-white/25 mb-1">Requests/s</div>
            <div className="flex items-end gap-0.5 h-[calc(100%-12px)]">
              {[60, 80, 45, 90, 70, 85, 55, 75, 95, 65].map((h, i) => (
                <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: h > 80 ? "rgba(239,68,68,0.5)" : "rgba(34,211,238,0.4)" }} />
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-[#080c18] border border-white/5 p-1.5 flex flex-col gap-0.5">
          {["INFO  200 GET /api/health", "INFO  200 POST /api/data", "WARN  429 GET /api/users"].map((log, i) => (
            <div key={i} className="flex items-center gap-1">
              <span className={`text-[5px] font-mono ${log.includes("WARN") ? "text-amber-400/60" : "text-emerald-400/40"}`}>{log.split(" ")[0]}</span>
              <div className="h-0.5 flex-1 rounded bg-white/8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HealthcareMockup() {
  return (
    <div className="absolute inset-0 p-3 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="h-5 w-5 rounded-lg bg-pink-500/25 flex items-center justify-center">
          <span className="text-[8px] text-pink-400">+</span>
        </div>
        <div className="h-2 w-16 rounded bg-white/15" />
        <div className="ml-auto h-4 w-18 rounded-full bg-pink-500/15 border border-pink-500/20 flex items-center px-1.5">
          <span className="text-[6px] font-mono text-pink-400/60">Today</span>
        </div>
      </div>
      <div className="flex gap-2 flex-1">
        <div className="flex-1 flex flex-col gap-1.5">
          <div className="text-[7px] font-mono text-white/30">Appointments</div>
          {[
            { time: "9:00 AM", name: "Sarah J.", color: "cyan" },
            { time: "10:30 AM", name: "Mike R.", color: "emerald" },
            { time: "2:00 PM", name: "Lisa K.", color: "violet" },
          ].map((apt) => (
            <div key={apt.time} className={`rounded-lg bg-${apt.color}-500/10 border-l-2 border-${apt.color}-500/40 p-1.5`}>
              <div className={`text-[7px] font-mono text-${apt.color}-400/70`}>{apt.time}</div>
              <div className="text-[6px] text-white/30 mt-0.5">{apt.name}</div>
            </div>
          ))}
        </div>
        <div className="flex-1 rounded-lg bg-white/[0.03] border border-white/5 p-2 flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <div className="h-7 w-7 rounded-full bg-pink-500/15 border border-pink-500/20 flex items-center justify-center">
              <span className="text-[8px] text-pink-400/60">SJ</span>
            </div>
            <div>
              <div className="text-[7px] text-white/40 font-medium">Sarah Johnson</div>
              <div className="text-[6px] text-white/20">Patient #1284</div>
            </div>
          </div>
          <div className="h-px bg-white/5" />
          <div className="flex flex-col gap-1 text-[6px] font-mono">
            <div className="flex justify-between"><span className="text-white/25">Blood Type</span><span className="text-white/40">A+</span></div>
            <div className="flex justify-between"><span className="text-white/25">Allergies</span><span className="text-pink-400/50">Penicillin</span></div>
          </div>
          <div className="mt-auto h-5 w-full rounded-lg bg-pink-500/15 border border-pink-500/20 flex items-center justify-center">
            <span className="text-[7px] font-mono text-pink-400/60">Book Follow-up</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CicdMockup() {
  return (
    <div className="absolute inset-0 p-3 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="h-2.5 w-20 rounded bg-white/15" />
        <div className="ml-auto flex gap-1">
          <div className="h-4 w-12 rounded-lg bg-emerald-500/20 border border-emerald-500/20 flex items-center justify-center">
            <span className="text-[6px] font-mono text-emerald-400">Deploy</span>
          </div>
        </div>
      </div>
      {[
        { branch: "main", status: "emerald", steps: [true, true, true, true] },
        { branch: "feat/auth", status: "emerald", steps: [true, true, true, true] },
        { branch: "fix/api-rate", status: "amber", steps: [true, true, true, false] },
        { branch: "dev", status: "red", steps: [true, true, false, false] },
      ].map((p, i) => (
        <div key={i} className="flex items-center gap-2 rounded-lg bg-white/[0.03] border border-white/5 px-2 py-1.5">
          <div className={`h-2 w-2 rounded-full bg-${p.status}-400/70`} />
          <span className="text-[7px] font-mono text-white/40 w-14 truncate">{p.branch}</span>
          <div className="ml-auto flex gap-1">
            {p.steps.map((ok, j) => (
              <div key={j} className={`h-3 w-3 rounded ${ok ? `bg-${p.status}-500/30 border border-${p.status}-500/20` : "bg-white/5 border border-white/8"}`} />
            ))}
          </div>
        </div>
      ))}
      <div className="flex-1 rounded-lg bg-[#080c18] border border-white/5 p-1.5 font-mono text-[6px] flex flex-col gap-0.5 overflow-hidden">
        <span className="text-emerald-400/50">$ docker build -t app:latest .</span>
        <span className="text-white/20">Step 1/8 : FROM node:20-alpine</span>
        <span className="text-white/20">Step 2/8 : WORKDIR /app</span>
        <span className="text-cyan-400/40">Successfully built a3f8e2c</span>
      </div>
    </div>
  );
}

const mockupComponents: Record<Project["mockup"], () => React.ReactElement> = {
  dashboard: DashboardMockup,
  cms: CmsMockup,
  edtech: EdtechMockup,
  monitoring: MonitoringMockup,
  healthcare: HealthcareMockup,
  cicd: CicdMockup,
};

/* ------------------------------------------------------------------ */
/*  Browser chrome + Project card                                      */
/* ------------------------------------------------------------------ */

function BrowserChrome({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border-light)]">
      <div className="flex items-center gap-1.5">
        <span className="block h-3 w-3 rounded-full bg-red-500" />
        <span className="block h-3 w-3 rounded-full bg-yellow-500" />
        <span className="block h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="ml-3 flex-1 rounded-md bg-background/60 px-3 py-1 text-xs font-mono text-muted-light truncate">
        {url}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const MockupComponent = mockupComponents[project.mockup];

  return (
    <StaggerItem
      className={cn(project.large && "lg:col-span-2")}
    >
      <GlassCard
        className={cn(
          "group h-full flex flex-col",
          "hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(0,180,216,0.15)]",
          "transition-all duration-300"
        )}
        tilt={true}
      >
        {/* Browser chrome */}
        <BrowserChrome
          url={
            project.mockup === "dashboard" ? "client-project.tinkerhive.dev" :
            project.mockup === "cms" ? "cms-platform.tinkerhive.dev" :
            project.mockup === "edtech" ? "learning-app.tinkerhive.dev" :
            project.mockup === "monitoring" ? "monitoring-tool.tinkerhive.dev" :
            project.mockup === "healthcare" ? "booking-system.tinkerhive.dev" :
            "pipeline-platform.tinkerhive.dev"
          }
        />

        {/* App mockup preview — dark background so UI elements are visible */}
        <div className="w-full h-48 relative overflow-hidden bg-[#0c0e1a]">
          <MockupComponent />
        </div>

        {/* Card content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-display text-lg font-bold text-foreground mb-1">
            {project.name}
          </h3>
          <p className="text-sm text-muted-light leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech stack badges */}
          <div className="mt-auto flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="inline-block rounded-full border border-[var(--border-light)] bg-surface px-2.5 py-0.5 text-[11px] font-mono text-muted-light"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </GlassCard>
    </StaggerItem>
  );
}

export default function Showcase() {
  return (
    <section
      id="work"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateIn variant="fadeUp" className="mb-16 text-center">
          <p className="font-mono text-sm tracking-wider text-primary mb-3">
            {"// OUR WORK"}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Products we&apos;ve{" "}
            <span className="gradient-text">built and launched</span>
          </h2>
          <p className="text-muted text-sm mt-3">Capability demonstrations of the types of products we build.</p>
        </AnimateIn>

        {/* Bento grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          stagger={0.1}
        >
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
