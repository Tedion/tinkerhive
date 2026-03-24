"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimateIn from "./AnimateIn";
import type { IconType } from "react-icons";
import { SiGooglecloud, SiKubernetes, SiDocker, SiTerraform, SiAnsible, SiPrometheus, SiGrafana, SiNodedotjs, SiPython, SiGo, SiPostgresql, SiMongodb, SiOpenstack, SiProxmox, SiNginx, SiRedis } from "react-icons/si";
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
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <AnimateIn className="mb-16">
          <p className="font-mono text-sm text-primary tracking-wider mb-3">
            // ABOUT
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            One Team.{" "}
            <span className="gradient-text">The Whole Journey.</span>
          </h2>
        </AnimateIn>

        {/* 60/40 split layout */}
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-5 lg:gap-16 items-start">
          {/* Left column — 60% (col-span-3) */}
          <AnimateIn variant="slideLeft" className="lg:col-span-3">
            <p className="text-lg text-muted-light leading-relaxed">
              Most agencies build your product and hand you the keys. Then
              something breaks at 2 AM and you&apos;re on your own. TinkerHive is
              different. We&apos;re a software development and DevOps firm that
              owns your entire product lifecycle &mdash; from writing the first
              line of code to launching it live and keeping it running every day
              after. Founded by an engineer who&apos;s done it all, we don&apos;t
              hand off. We stay.
            </p>

            {/* Differentiators checklist */}
            <ul className="mt-10 space-y-4" role="list">
              {differentiators.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-foreground text-sm font-medium">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </AnimateIn>

          {/* Right column — 40% (col-span-2) */}
          <AnimateIn variant="slideRight" className="lg:col-span-2">
            <div className="relative">
              {/* Stats glass card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass rounded-2xl p-8"
              >
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      <p className="text-primary text-3xl font-extrabold font-display">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm text-muted-light">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Tech stack badges cloud */}
              <div className="mt-6">
                <p className="font-mono text-xs text-muted uppercase tracking-wider text-center mb-4">
                  Our Tech Stack
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {techStack.map((badge, i) => (
                    <motion.span
                      key={badge.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.03 }}
                      className={cn(
                        "flex items-center gap-1.5 glass rounded-lg px-3 py-1.5 font-mono text-xs text-muted-light",
                        "hover:border-primary hover:text-primary transition-colors cursor-default"
                      )}
                    >
                      {badge.icon && <badge.icon size={12} />}
                      {badge.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
