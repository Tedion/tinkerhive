"use client";

import { Check } from "lucide-react";
import AnimateIn from "./AnimateIn";
import type { IconType } from "react-icons";
import {
  SiGooglecloud,
  SiKubernetes,
  SiDocker,
  SiTerraform,
  SiAnsible,
  SiPrometheus,
  SiGrafana,
  SiNodedotjs,
  SiPython,
  SiGo,
  SiPostgresql,
  SiMongodb,
  SiOpenstack,
  SiProxmox,
  SiNginx,
  SiRedis,
  SiOpenai,
  SiAnthropic,
  SiLangchain,
  SiN8N,
  SiHuggingface,
  SiPytorch,
  SiTensorflow,
  SiOllama,
  SiFlutter,
  SiKotlin,
  SiSwift,
  SiExpo,
} from "react-icons/si";
import { FaAws, FaMicrosoft, FaReact, FaLinux } from "react-icons/fa";

const differentiators = [
  "We build your product \u2014 websites, apps, platforms",
  "We launch it \u2014 cloud setup, deployment, going live",
  "We keep it running \u2014 monitoring, updates, fixes",
  "One team from start to finish \u2014 no handoffs, no gaps",
  "Founder-led \u2014 the person you talk to is the person building",
  "Global service \u2014 based in Addis Ababa, serving worldwide",
];

const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "99.9%", label: "Uptime Target" },
  { value: "8+", label: "Years Experience" },
  { value: "<4hr", label: "Response Time" },
];

const techStack: { name: string; icon?: IconType }[] = [
  { name: "AWS", icon: FaAws },
  { name: "GCP", icon: SiGooglecloud },
  { name: "Azure", icon: FaMicrosoft },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Docker", icon: SiDocker },
  { name: "Terraform", icon: SiTerraform },
  { name: "Ansible", icon: SiAnsible },
  { name: "Prometheus", icon: SiPrometheus },
  { name: "Grafana", icon: SiGrafana },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Python", icon: SiPython },
  { name: "Go", icon: SiGo },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "OpenStack", icon: SiOpenstack },
  { name: "Proxmox", icon: SiProxmox },
  { name: "Linux", icon: FaLinux },
  { name: "Nginx", icon: SiNginx },
  { name: "Redis", icon: SiRedis },
  { name: "OpenAI", icon: SiOpenai },
  { name: "Anthropic", icon: SiAnthropic },
  { name: "LangChain", icon: SiLangchain },
  { name: "n8n", icon: SiN8N },
  { name: "HuggingFace", icon: SiHuggingface },
  { name: "PyTorch", icon: SiPytorch },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "Ollama", icon: SiOllama },
  { name: "Flutter", icon: SiFlutter },
  { name: "React Native", icon: FaReact },
  { name: "Swift", icon: SiSwift },
  { name: "Kotlin", icon: SiKotlin },
  { name: "Expo", icon: SiExpo },
];

export default function About() {
  return (
    <section id="about" className="section-gray py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <AnimateIn variant="fadeUp" className="mb-16">
          <span className="section-label">ABOUT</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#0f172a]">
            One Team. The Whole Journey.
          </h2>
        </AnimateIn>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left column — description + bullet points */}
          <AnimateIn variant="fadeUp" delay={0.1} className="lg:col-span-3">
            <p className="text-lg leading-relaxed text-[#475569]">
              Most agencies build your product and hand you the keys. Then
              something breaks at 2&nbsp;AM and you&apos;re on your own. TinkerHive is
              different. We&apos;re a software development and DevOps firm that
              owns your entire product lifecycle&nbsp;&mdash; from writing the first
              line of code to launching it live and keeping it running every day
              after. Founded by an engineer who&apos;s done it all, we don&apos;t
              hand off. We stay.
            </p>

            {/* Differentiators checklist */}
            <ul className="mt-10 space-y-4" role="list">
              {differentiators.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f0f9ff] border border-[#00b4d8]">
                    <Check size={14} className="text-[#00b4d8]" strokeWidth={2.5} />
                  </span>
                  <span className="text-[#0f172a] text-sm font-medium leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </AnimateIn>

          {/* Right column — Stats card + Tech stack */}
          <AnimateIn variant="fadeUp" delay={0.2} className="lg:col-span-2">
            {/* Stats card */}
            <div className="card">
              <div className="grid grid-cols-2 divide-x divide-y divide-[#e2e8f0]">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center px-4 py-5">
                    <p className="text-3xl font-bold font-display text-[#00b4d8] tabular-nums">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-[#64748b]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8] mb-4">
                Our Tech Stack
              </p>
              <div className="grid grid-cols-4 gap-3">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-1.5 rounded-lg border border-[#e2e8f0] bg-white px-2 py-3 text-center transition-all duration-200 hover:border-[#00b4d8]/40 hover:scale-105"
                  >
                    {tech.icon && (
                      <tech.icon size={24} className="text-[#475569]" />
                    )}
                    <span className="text-[10px] font-medium text-[#475569] leading-tight">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
