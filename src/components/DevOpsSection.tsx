"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiJenkins,
  SiGitlab,
  SiGithubactions,
  SiArgo,
  SiTerraform,
  SiAnsible,
  SiPulumi,
  SiDocker,
  SiKubernetes,
  SiHelm,
  SiPodman,
  SiRancher,
  SiPrometheus,
  SiGrafana,
  SiElastic,
  SiDatadog,
} from "react-icons/si";
import { cn } from "@/lib/utils";
import AnimateIn from "./AnimateIn";

/* ------------------------------------------------------------------ */
/*  Tab data                                                            */
/* ------------------------------------------------------------------ */

interface ToolItem {
  name: string;
  icon?: IconType;
}

interface TabData {
  id: string;
  label: string;
  heading: string;
  description: string;
  tools: ToolItem[];
  terminalLines: string[];
}

const tabs: TabData[] = [
  {
    id: "cicd",
    label: "CI/CD",
    heading: "Continuous Integration & Delivery",
    description:
      "Automate your entire software delivery lifecycle. We design and implement pipelines that build, test, and deploy your code with every commit — giving your team fast feedback loops and the confidence to ship multiple times a day.",
    tools: [
      { name: "Jenkins", icon: SiJenkins },
      { name: "GitLab CI", icon: SiGitlab },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "ArgoCD", icon: SiArgo },
      { name: "Tekton" },
    ],
    terminalLines: [
      "$ git push origin main",
      "Pipeline triggered: build > test > deploy",
      "Running 142 unit tests... OK",
      "Building Docker image... done (22s)",
      "Deploying to production... live!",
    ],
  },
  {
    id: "iac",
    label: "Infrastructure as Code",
    heading: "Declarative, Versioned Infrastructure",
    description:
      "Treat your infrastructure like application code. We codify every resource — from VPCs and load balancers to IAM policies — so your environments are reproducible, auditable, and can be spun up or torn down in minutes.",
    tools: [
      { name: "Terraform", icon: SiTerraform },
      { name: "Ansible", icon: SiAnsible },
      { name: "Pulumi", icon: SiPulumi },
      { name: "CloudFormation" },
    ],
    terminalLines: [
      "$ terraform plan",
      "3 to add, 1 to change, 0 to destroy",
      "$ terraform apply -auto-approve",
      "aws_instance.web: Creating...",
      "Apply complete! Resources: 3 added",
    ],
  },
  {
    id: "containers",
    label: "Containers",
    heading: "Container Orchestration at Scale",
    description:
      "Package, ship, and run applications anywhere. We architect containerized workloads with production-grade orchestration — handling service discovery, auto-scaling, rolling updates, and health checks so your apps stay resilient under load.",
    tools: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Helm", icon: SiHelm },
      { name: "Podman", icon: SiPodman },
      { name: "Rancher", icon: SiRancher },
    ],
    terminalLines: [
      "$ kubectl get pods -n production",
      "NAME           READY   STATUS    RESTARTS",
      "api-7d4b..     1/1     Running   0",
      "web-3f2a..     3/3     Running   0",
      "Scaling replicas: 3 -> 6... done",
    ],
  },
  {
    id: "monitoring",
    label: "Monitoring",
    heading: "Full-Stack Observability",
    description:
      "See everything, miss nothing. We instrument your applications and infrastructure with metrics, logs, and traces — giving your team real-time dashboards, intelligent alerting, and the data they need to resolve incidents before users notice.",
    tools: [
      { name: "Prometheus", icon: SiPrometheus },
      { name: "Grafana", icon: SiGrafana },
      { name: "ELK Stack", icon: SiElastic },
      { name: "Datadog", icon: SiDatadog },
      { name: "Loki" },
    ],
    terminalLines: [
      "$ promtool check rules alerts.yml",
      "Checking alerts.yml... SUCCESS",
      "cpu_usage: 42% | mem: 3.2GB/8GB",
      "p99 latency: 120ms | errors: 0.01%",
      "All 24 alert rules: OK",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Bottom stats                                                       */
/* ------------------------------------------------------------------ */

const stats = [
  { value: "CI/CD", label: "Automated Pipelines" },
  { value: "Zero-Downtime", label: "Deployment Strategy" },
  { value: "24/7", label: "Monitoring Included" },
];

/* ================================================================== */
/*  Component                                                          */
/* ================================================================== */

export default function DevOpsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];

  return (
    <section id="devops" style={{ backgroundColor: "#f8fafc" }} className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* ── Section header ──────────────────────────────────── */}
        <AnimateIn className="mb-14">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#00b4d8" }}
          >
            DEVOPS
          </p>
          <h2
            className="text-3xl font-extrabold tracking-tight sm:text-5xl"
            style={{ color: "#0f172a" }}
          >
            Ship Faster. Deploy Safer.
          </h2>
          <p className="mt-3 max-w-xl text-[#475569]">Full DevOps lifecycle management — from pipeline design to production monitoring.</p>
        </AnimateIn>

        {/* ── Tabbed interface ────────────────────────────────── */}
        <AnimateIn variant="fadeUp" delay={0.1}>
          {/* Tab bar */}
          <div
            className="flex gap-0 border-b mb-0"
            style={{ borderColor: "#e2e8f0" }}
          >
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={cn(
                  "px-5 py-3 text-sm transition-colors duration-200 border-b-2 -mb-px cursor-pointer",
                  i === activeTab
                    ? "border-[#00b4d8] text-[#00b4d8] font-semibold"
                    : "border-transparent text-[#64748b] font-medium hover:text-[#0f172a]"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div
            className="rounded-b-xl border border-t-0 p-8 sm:p-10 overflow-hidden"
            style={{
              borderColor: "#e2e8f0",
              backgroundColor: "#ffffff",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-5 gap-8"
              >
                {/* Left content — 3 cols */}
                <div className="lg:col-span-3">
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "#0f172a" }}
                  >
                    {current.heading}
                  </h3>
                  <p
                    className="leading-relaxed mb-8"
                    style={{ color: "#475569" }}
                  >
                    {current.description}
                  </p>

                  {/* Tool icons row */}
                  <div className="flex flex-wrap gap-3">
                    {current.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="flex items-center gap-2.5 rounded-lg border px-4 py-2.5 transition-all duration-200 hover:shadow-md hover:bg-[#f0f9ff] hover:border-[#00b4d8] cursor-default"
                        style={{
                          borderColor: "#e2e8f0",
                          backgroundColor: "#f8fafc",
                        }}
                      >
                        {tool.icon && (
                          <tool.icon
                            size={18}
                            style={{ color: "#0f172a" }}
                          />
                        )}
                        <span
                          className="text-sm font-medium"
                          style={{ color: "#0f172a" }}
                        >
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right — terminal mockup — 2 cols */}
                <div className="lg:col-span-2 hidden lg:block">
                  <div
                    className="rounded-lg overflow-hidden border"
                    style={{ borderColor: "#1e293b", backgroundColor: "#0f172a" }}
                  >
                    {/* Terminal title bar */}
                    <div
                      className="flex items-center gap-2 px-4 py-2.5"
                      style={{ backgroundColor: "#1e293b" }}
                    >
                      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#f87171" }} />
                      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#fbbf24" }} />
                      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#34d399" }} />
                      <span className="ml-2 text-xs" style={{ color: "#64748b" }}>terminal</span>
                    </div>
                    {/* Terminal body */}
                    <div className="px-4 py-4 font-mono text-xs leading-relaxed space-y-1">
                      {current.terminalLines.map((line, idx) => (
                        <p key={idx} style={{ color: line.startsWith("$") ? "#00b4d8" : "#94a3b8" }}>
                          {line}
                        </p>
                      ))}
                      <p className="mt-2" style={{ color: "#34d399" }}>
                        <span className="animate-pulse">_</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimateIn>

        {/* ── Bottom stat strip ───────────────────────────────── */}
        <AnimateIn variant="fadeUp" delay={0.25}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center rounded-xl border p-8 transition-shadow duration-200 hover:shadow-md"
                style={{
                  borderColor: "#e2e8f0",
                  backgroundColor: "#ffffff",
                }}
              >
                <p
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ color: "#00b4d8" }}
                >
                  {stat.value}
                </p>
                <p
                  className="mt-2 text-xs font-semibold tracking-wider uppercase"
                  style={{ color: "#94a3b8" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
