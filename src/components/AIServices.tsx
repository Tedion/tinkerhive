"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Brain, Zap, Cpu, Cloud, HeadphonesIcon, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AnimateIn from "./AnimateIn";
import { cn } from "@/lib/utils";

interface AITab {
  id: string;
  label: string;
  icon: LucideIcon;
  heading: string;
  description: string;
  bullets: string[];
  terminalLines: string[];
}

const tabs: AITab[] = [
  {
    id: "apps",
    label: "AI Apps",
    icon: Brain,
    heading: "AI Application Development",
    description:
      "We design and ship production-grade AI applications — from LLM-powered chatbots and RAG pipelines to intelligent document processing, recommendation engines, and autonomous agents.",
    bullets: [
      "LLM integration (OpenAI, Anthropic, Gemini, open-source)",
      "RAG pipelines & vector database design",
      "AI-powered APIs & microservices",
      "Fine-tuning & custom model deployment",
    ],
    terminalLines: [
      "$ tinkerhive ai init --type rag-pipeline",
      "✓ Vector store connected (pgvector)",
      "✓ Embedding model loaded (text-embedding-3)",
      "$ tinkerhive ai deploy --model gpt-4o",
      "✓ API endpoint live — latency: 210ms",
    ],
  },
  {
    id: "automation",
    label: "AI Automation",
    icon: Zap,
    heading: "AI Workflow Automation",
    description:
      "Replace manual, repetitive processes with intelligent automation that learns, adapts, and scales — saving your team hundreds of hours per month across data, documents, and decisions.",
    bullets: [
      "Multi-agent orchestration (LangChain, CrewAI, AutoGen)",
      "Intelligent document & data extraction",
      "Business process automation with AI decision layers",
      "Integration with existing APIs & SaaS tools",
    ],
    terminalLines: [
      "$ agent run --workflow invoice-processor",
      "Extracting fields from 142 documents...",
      "✓ Accuracy: 98.7% | Processed: 142/142",
      "$ agent run --workflow support-triage",
      "✓ 89 tickets auto-resolved, 11 escalated",
    ],
  },
  {
    id: "mlops",
    label: "MLOps",
    icon: Cpu,
    heading: "AI Infrastructure & MLOps",
    description:
      "Scalable, production-ready infrastructure for training, serving, and monitoring AI models — built on battle-tested open-source and cloud-native tooling so your models stay reliable at scale.",
    bullets: [
      "Model serving with Triton, vLLM, Ray Serve",
      "MLflow, DVC & experiment tracking pipelines",
      "Kubernetes-native ML training & inference",
      "Drift detection, monitoring & auto-retraining",
    ],
    terminalLines: [
      "$ mlflow run . --experiment-id 42",
      "Epoch 10/10 — loss: 0.021 | acc: 97.4%",
      "✓ Model registered: fraud-detector-v3",
      "$ kubectl apply -f model-serving.yaml",
      "✓ Replicas: 3/3 Running — p99: 45ms",
    ],
  },
  {
    id: "gpu",
    label: "GPU Cloud",
    icon: Cloud,
    heading: "GPU & Cloud AI Infrastructure",
    description:
      "We provision and manage high-performance GPU clusters and cloud AI environments on AWS, GCP, Azure, and bare-metal — optimized for throughput, cost efficiency, and zero downtime.",
    bullets: [
      "GPU cluster provisioning (A100, H100, RTX fleet)",
      "Cloud AI: SageMaker, Vertex AI, Azure ML",
      "Spot & preemptible instance cost optimization",
      "Hybrid cloud & on-prem GPU management",
    ],
    terminalLines: [
      "$ provision gpu-cluster --type H100 --count 8",
      "✓ 8× H100 80GB NVLink online",
      "$ optimize --strategy spot-fallback",
      "✓ Cost reduced 61% vs on-demand",
      "✓ Cluster utilization: 94%",
    ],
  },
  {
    id: "support",
    label: "24/7 Support",
    icon: HeadphonesIcon,
    heading: "24/7/365 Managed AI Support",
    description:
      "Your AI systems run around the clock — so do we. We provide round-the-clock monitoring, incident response, and proactive optimization for mission-critical AI workloads every day of the year.",
    bullets: [
      "< 4-hour response SLA for critical incidents",
      "Proactive model performance & drift monitoring",
      "On-call engineering coverage 365 days a year",
      "Monthly health reports & optimization reviews",
    ],
    terminalLines: [
      "$ monitor status --service all",
      "✓ api-gateway       HEALTHY  99.98%",
      "✓ model-serving     HEALTHY  99.97%",
      "✓ vector-store      HEALTHY  100.0%",
      "⚡ On-call engineer: online",
    ],
  },
];

const aiBadges = [
  "Large Language Models",
  "RAG Pipelines",
  "AI Agents",
  "MLOps",
  "GPU Infrastructure",
  "Fine-Tuning",
  "Vector Databases",
  "AI Automation",
  "24/7 Managed Support",
];

const stats = [
  { value: "LLM-Native", label: "Application Architecture" },
  { value: "< 4hr", label: "Incident Response SLA" },
  { value: "24/7/365", label: "AI Systems Monitoring" },
];

export default function AIServices() {
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];
  const Icon = current.icon;

  return (
    <section
      id="ai"
      className="relative py-24 sm:py-32"
      style={{
        backgroundColor: "#0f172a",
        backgroundImage:
          "radial-gradient(ellipse at 50% 0%, rgba(139, 92, 246, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(0, 180, 216, 0.05) 0%, transparent 60%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <AnimateIn variant="fadeIn" className="mb-6">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#00b4d8" }}
          >
            ARTIFICIAL INTELLIGENCE
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ color: "#f1f5f9" }}
          >
            We build with AI.{" "}
            <span style={{ color: "#00b4d8" }}>End to end.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[#94a3b8] leading-relaxed">
            From model selection and infrastructure to deployment and
            round-the-clock support — we handle the full AI stack so your team
            can focus on outcomes.
          </p>
        </AnimateIn>

        {/* Badge pills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.06 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          {aiBadges.map((badge) => (
            <motion.span
              key={badge}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-sm"
              style={{
                borderColor: "rgba(255, 255, 255, 0.12)",
                color: "#f1f5f9",
                backgroundColor: "rgba(30, 41, 59, 0.6)",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "#00b4d8" }}
              />
              {badge}
            </motion.span>
          ))}
        </motion.div>

        {/* Tabbed interface */}
        <AnimateIn variant="fadeUp" delay={0.1}>
          {/* Tab bar */}
          <div
            className="flex flex-wrap gap-0 border-b mb-0"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}
          >
            {tabs.map((tab, i) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(i)}
                  className={cn(
                    "flex items-center gap-2 px-5 py-3 text-sm transition-colors duration-200 border-b-2 -mb-px cursor-pointer",
                    i === activeTab
                      ? "border-[#00b4d8] text-[#00b4d8] font-semibold"
                      : "border-transparent text-[#64748b] font-medium hover:text-[#94a3b8]"
                  )}
                >
                  <TabIcon size={14} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          <div
            className="rounded-b-xl border border-t-0 p-8 sm:p-10 overflow-hidden"
            style={{
              borderColor: "rgba(255,255,255,0.08)",
              backgroundColor: "#1e293b",
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
                {/* Left — 3 cols */}
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{ backgroundColor: "rgba(0,180,216,0.12)" }}
                    >
                      <Icon size={18} style={{ color: "#00b4d8" }} />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: "#f1f5f9" }}>
                      {current.heading}
                    </h3>
                  </div>
                  <p className="leading-relaxed mb-8" style={{ color: "#94a3b8" }}>
                    {current.description}
                  </p>
                  <ul className="space-y-3">
                    {current.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5"
                          style={{ backgroundColor: "rgba(0, 180, 216, 0.15)" }}
                        >
                          <Check size={11} style={{ color: "#00b4d8" }} />
                        </span>
                        <span className="text-sm" style={{ color: "#cbd5e1" }}>
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right — terminal — 2 cols */}
                <div className="lg:col-span-2 hidden lg:block">
                  <div
                    className="rounded-lg overflow-hidden border"
                    style={{ borderColor: "#1e293b", backgroundColor: "#0f172a" }}
                  >
                    <div
                      className="flex items-center gap-2 px-4 py-2.5"
                      style={{ backgroundColor: "#0f172a", borderBottom: "1px solid #1e293b" }}
                    >
                      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#f87171" }} />
                      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#fbbf24" }} />
                      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#34d399" }} />
                      <span className="ml-2 text-xs" style={{ color: "#64748b" }}>
                        ai · terminal
                      </span>
                    </div>
                    <div className="px-4 py-4 font-mono text-xs leading-relaxed space-y-1">
                      {current.terminalLines.map((line, idx) => (
                        <p
                          key={idx}
                          style={{
                            color: line.startsWith("$")
                              ? "#00b4d8"
                              : line.startsWith("✓")
                              ? "#34d399"
                              : line.startsWith("⚡")
                              ? "#fbbf24"
                              : "#94a3b8",
                          }}
                        >
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

        {/* Stats strip */}
        <AnimateIn variant="fadeUp" delay={0.25}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center rounded-xl border p-8 transition-shadow duration-200 hover:shadow-md"
                style={{
                  borderColor: "rgba(255,255,255,0.08)",
                  backgroundColor: "#1e293b",
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
