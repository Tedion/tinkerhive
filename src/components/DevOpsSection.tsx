"use client";

import { motion } from "framer-motion";
import {
  GitBranch,
  Hammer,
  TestTube2,
  Rocket,
  Activity,
} from "lucide-react";
import type { IconType } from "react-icons";
import { SiJenkins, SiGitlab, SiGithubactions, SiArgo, SiTerraform, SiAnsible, SiPulumi, SiDocker, SiKubernetes, SiHelm, SiPodman, SiRancher, SiPrometheus, SiGrafana, SiElastic, SiDatadog } from "react-icons/si";
import { cn } from "@/lib/utils";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";
import GlassCard from "./GlassCard";

/* ------------------------------------------------------------------ */
/*  Pipeline stages                                                    */
/* ------------------------------------------------------------------ */

const pipelineStages = [
  { label: "Code", icon: GitBranch, delay: 0 },
  { label: "Build", icon: Hammer, delay: 0.15 },
  { label: "Test", icon: TestTube2, delay: 0.3 },
  { label: "Deploy", icon: Rocket, delay: 0.45 },
  { label: "Monitor", icon: Activity, delay: 0.6 },
];

/* ------------------------------------------------------------------ */
/*  Tool categories                                                    */
/* ------------------------------------------------------------------ */

interface ToolCategory {
  title: string;
  accent: string;
  tools: { name: string; icon?: IconType }[];
}

const toolCategories: ToolCategory[] = [
  {
    title: "CI/CD",
    accent: "#00b4d8",
    tools: [
      { name: "Jenkins", icon: SiJenkins },
      { name: "GitLab CI", icon: SiGitlab },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "ArgoCD", icon: SiArgo },
      { name: "Tekton" },
    ],
  },
  {
    title: "Infrastructure as Code",
    accent: "#9d4edd",
    tools: [
      { name: "Terraform", icon: SiTerraform },
      { name: "Ansible", icon: SiAnsible },
      { name: "Pulumi", icon: SiPulumi },
      { name: "CloudFormation" },
    ],
  },
  {
    title: "Containers & Orchestration",
    accent: "#f72585",
    tools: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Helm", icon: SiHelm },
      { name: "Podman", icon: SiPodman },
      { name: "Rancher", icon: SiRancher },
    ],
  },
  {
    title: "Monitoring & Observability",
    accent: "#10b981",
    tools: [
      { name: "Prometheus", icon: SiPrometheus },
      { name: "Grafana", icon: SiGrafana },
      { name: "ELK Stack", icon: SiElastic },
      { name: "Datadog", icon: SiDatadog },
      { name: "Loki" },
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

/* ------------------------------------------------------------------ */
/*  Keyframes injected via style tag (dashed line animation)           */
/* ------------------------------------------------------------------ */

const dashKeyframes = `
@keyframes dashScroll {
  to { stroke-dashoffset: -20; }
}
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 8px var(--glow), 0 0 20px var(--glow); }
  50% { box-shadow: 0 0 16px var(--glow), 0 0 40px var(--glow); }
}
`;

/* ================================================================== */
/*  Component                                                          */
/* ================================================================== */

export default function DevOpsSection() {
  return (
    <section id="devops" className="py-20 sm:py-28 bg-background">
      {/* Inject animation keyframes */}
      <style dangerouslySetInnerHTML={{ __html: dashKeyframes }} />

      <div className="mx-auto max-w-7xl px-6">
        {/* ── Section header ──────────────────────────────────── */}
        <AnimateIn className="text-center mb-16">
          <p className="font-mono text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            // DEVOPS
          </p>
          <h2 className="text-3xl font-display font-extrabold tracking-tight text-foreground sm:text-5xl">
            Ship Faster.{" "}
            <span className="gradient-text">Deploy Safer.</span>
          </h2>
        </AnimateIn>

        {/* ── Pipeline visual ─────────────────────────────────── */}
        <AnimateIn variant="fadeUp">
          <div className="relative mx-auto max-w-4xl mb-20">
            {/* --- Horizontal pipeline (md+) --- */}
            <div className="hidden md:flex items-start justify-between relative">
              {/* Connecting dashed SVG line */}
              <svg
                className="absolute top-7 left-[10%] right-[10%] h-1 overflow-visible pointer-events-none"
                style={{ width: "80%" }}
                preserveAspectRatio="none"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="var(--primary-glow)"
                  strokeWidth="2"
                  strokeDasharray="8 6"
                  style={{ animation: "dashScroll 1s linear infinite" }}
                />
              </svg>

              {pipelineStages.map((stage) => (
                <motion.div
                  key={stage.label}
                  className="relative z-10 flex flex-col items-center flex-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: stage.delay, duration: 0.5 }}
                >
                  {/* Glowing circle node */}
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-surface"
                    style={{
                      ["--glow" as string]: "var(--primary-glow)",
                      animation: `pulse-glow 2.5s ease-in-out ${stage.delay + 0.5}s infinite`,
                    }}
                  >
                    <stage.icon size={22} className="text-primary" />
                  </div>

                  {/* Label */}
                  <span className="mt-3 font-mono text-xs tracking-wider text-muted-light uppercase">
                    {stage.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* --- Vertical pipeline (mobile) --- */}
            <div className="flex md:hidden flex-col items-center gap-0">
              {pipelineStages.map((stage, i) => (
                <motion.div
                  key={stage.label}
                  className="relative flex flex-col items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: stage.delay, duration: 0.5 }}
                >
                  {/* Dashed connector (skip first) */}
                  {i > 0 && (
                    <svg
                      className="h-8 w-1 overflow-visible pointer-events-none"
                      viewBox="0 0 2 32"
                    >
                      <line
                        x1="1"
                        y1="0"
                        x2="1"
                        y2="32"
                        stroke="var(--primary-glow)"
                        strokeWidth="2"
                        strokeDasharray="6 4"
                        style={{ animation: "dashScroll 1s linear infinite" }}
                      />
                    </svg>
                  )}

                  {/* Node */}
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-surface"
                    style={{
                      ["--glow" as string]: "var(--primary-glow)",
                      animation: `pulse-glow 2.5s ease-in-out ${stage.delay + 0.5}s infinite`,
                    }}
                  >
                    <stage.icon size={20} className="text-primary" />
                  </div>

                  {/* Label */}
                  <span className="mt-2 mb-1 font-mono text-xs tracking-wider text-muted-light uppercase">
                    {stage.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* ── Tool category grid ──────────────────────────────── */}
        <AnimateIn variant="fadeUp" delay={0.15}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {toolCategories.map((category) => (
              <div key={category.title}>
                {/* Category header */}
                <h3
                  className="font-mono text-xs font-bold tracking-wider uppercase mb-4"
                  style={{ color: category.accent }}
                >
                  {category.title}
                </h3>

                {/* Tool pills */}
                <StaggerContainer className="flex flex-wrap gap-2" stagger={0.05}>
                  {category.tools.map((tool) => (
                    <StaggerItem key={tool.name} variant="fadeUp">
                      <motion.span
                        whileHover={{
                          boxShadow: `0 0 14px ${category.accent}40`,
                          borderColor: category.accent,
                        }}
                        className="inline-flex items-center gap-1.5 glass rounded-full px-3 py-1.5 font-mono text-xs text-muted-light border border-[var(--border-light)] cursor-default transition-colors duration-200 hover:text-foreground"
                      >
                        {tool.icon && <tool.icon size={12} />}
                        {tool.name}
                      </motion.span>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* ── Bottom stat strip ───────────────────────────────── */}
        <AnimateIn variant="fadeUp" delay={0.3}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <GlassCard key={stat.label} className="text-center p-8" tilt={false}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
                >
                  <p className="text-3xl sm:text-4xl font-display font-extrabold text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-mono text-xs tracking-wider text-muted-light uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              </GlassCard>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
