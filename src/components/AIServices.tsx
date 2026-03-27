"use client";

import {
  Brain,
  Cpu,
  Zap,
  Cloud,
  HeadphonesIcon,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

interface AIService {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
  accent: string;
  iconColor: string;
}

const services: AIService[] = [
  {
    icon: Brain,
    title: "AI Application Development",
    description:
      "We design and ship production-grade AI applications — from LLM-powered chatbots and RAG pipelines to intelligent document processing and recommendation engines.",
    bullets: [
      "LLM integration (OpenAI, Anthropic, Gemini, open-source)",
      "RAG & vector database pipelines",
      "AI-powered APIs & microservices",
      "Fine-tuning & custom model deployment",
    ],
    accent: "from-violet-500/10 to-transparent border-violet-500/30",
    iconColor: "text-violet-400",
  },
  {
    icon: Zap,
    title: "AI Workflow Automation",
    description:
      "Replace manual, repetitive processes with intelligent automation that learns, adapts, and scales — saving your team hundreds of hours per month.",
    bullets: [
      "Multi-agent orchestration (LangChain, CrewAI, AutoGen)",
      "Intelligent document & data extraction",
      "Business process automation with AI decision layers",
      "Integration with existing tools & APIs",
    ],
    accent: "from-amber-500/10 to-transparent border-amber-500/30",
    iconColor: "text-amber-400",
  },
  {
    icon: Cpu,
    title: "AI Infrastructure & MLOps",
    description:
      "Scalable, production-ready infrastructure for training, serving, and monitoring AI models — built on battle-tested open-source and cloud-native tooling.",
    bullets: [
      "Model serving with Triton, vLLM, Ray Serve",
      "MLflow, DVC & experiment tracking",
      "Kubernetes-native ML pipelines",
      "Monitoring, drift detection & retraining",
    ],
    accent: "from-cyan-500/10 to-transparent border-cyan-500/30",
    iconColor: "text-[#00b4d8]",
  },
  {
    icon: Cloud,
    title: "GPU & Cloud AI Infrastructure",
    description:
      "We provision and manage high-performance GPU clusters and cloud AI environments on AWS, GCP, Azure, and bare-metal — optimized for cost and throughput.",
    bullets: [
      "GPU cluster provisioning (A100, H100, RTX fleet)",
      "Cloud AI: AWS SageMaker, GCP Vertex AI, Azure ML",
      "Spot/preemptible instance cost optimization",
      "Hybrid cloud & on-prem GPU management",
    ],
    accent: "from-emerald-500/10 to-transparent border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7/365 Managed AI Support",
    description:
      "Your AI systems run around the clock — so do we. We provide round-the-clock monitoring, incident response, and optimization for mission-critical AI workloads.",
    bullets: [
      "< 4-hour response SLA for critical incidents",
      "Proactive model performance monitoring",
      "On-call engineering coverage every day of the year",
      "Monthly health reports & optimization recommendations",
    ],
    accent: "from-rose-500/10 to-transparent border-rose-500/30",
    iconColor: "text-rose-400",
  },
];

export default function AIServices() {
  return (
    <section id="ai" className="bg-[#0f172a] py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-violet-500/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn>
          <div className="mb-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#00b4d8] mb-3">
              ARTIFICIAL INTELLIGENCE
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              We build with AI.{" "}
              <span className="text-[#00b4d8]">End to end.</span>
            </h2>
            <p className="text-[#94a3b8] text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              From model selection and infrastructure to deployment and
              round-the-clock support — we handle the full AI stack so your
              team can focus on outcomes.
            </p>
          </div>
        </AnimateIn>

        {/* Services grid — 2 col, last card centered */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          stagger={0.08}
        >
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <StaggerItem key={svc.title}>
                <div
                  className={`group relative h-full rounded-xl border bg-gradient-to-br ${svc.accent} p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 cursor-pointer`}
                >
                  {/* Icon */}
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/5">
                    <Icon size={22} className={svc.iconColor} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#94a3b8] leading-relaxed mb-5">
                    {svc.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-6">
                    {svc.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-sm text-[#cbd5e1]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00b4d8]" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center gap-1 text-sm font-medium text-[#00b4d8] mt-auto">
                    <span>Learn more</span>
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
