"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Cloud,
  Server,
  Settings,
  Mail,
} from "lucide-react";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Fast, beautiful, SEO-optimized websites that convert visitors into customers. Custom designs built with modern frameworks and blazing performance scores.",
    features: ["Custom Design", "Mobile-First", "SEO Optimized", "CMS Integration"],
    startingAt: "$800",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Web and mobile apps that bring your business processes to life. From MVPs to full-scale products — React, Node.js, Flutter, built to scale.",
    features: ["Web Apps", "Mobile Apps", "API Development", "SaaS Products"],
    startingAt: "$2,500",
    gradient: "from-violet-500/10 to-purple-500/10",
  },
  {
    icon: Cloud,
    title: "Cloud Management",
    description:
      "AWS, GCP, Azure — we manage, optimize, and secure your cloud infrastructure. Stop overpaying and start sleeping at night.",
    features: ["Cost Optimization", "24/7 Monitoring", "Security Hardening", "Auto-Scaling"],
    startingAt: "$300/mo",
    gradient: "from-sky-500/10 to-blue-500/10",
  },
  {
    icon: Server,
    title: "Private Cloud Setup",
    description:
      "Own your infrastructure. We design and deploy private clouds with Proxmox, OpenStack, and Kubernetes — full control, better performance, lower costs.",
    features: ["Proxmox & OpenStack", "Kubernetes Clusters", "Backup & Recovery", "Cloud Migration"],
    startingAt: "$1,500",
    gradient: "from-emerald-500/10 to-teal-500/10",
  },
  {
    icon: Settings,
    title: "DevOps & Platform Engineering",
    description:
      "CI/CD pipelines, infrastructure as code, monitoring, and developer platforms. Ship faster, deploy safer, scale easier.",
    features: ["CI/CD Pipelines", "Terraform & Ansible", "Prometheus & Grafana", "Docker & K8s"],
    startingAt: "$500",
    gradient: "from-orange-500/10 to-amber-500/10",
  },
  {
    icon: Mail,
    title: "Open Source Solutions",
    description:
      "Self-hosted email, Git servers, chat platforms, CRM, and more. We deploy, configure, and maintain open-source tools so you own your data.",
    features: ["Mail Servers", "Git Hosting", "Chat & CRM", "Monitoring Stacks"],
    startingAt: "$200",
    gradient: "from-rose-500/10 to-pink-500/10",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateIn className="text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            What We Do
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to go digital
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            From a simple website to a full private cloud — one team, one
            relationship, no handoffs. Quality work at honest prices.
          </p>
        </AnimateIn>

        <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative rounded-2xl border border-border bg-white p-8 hover:shadow-xl hover:border-primary/20 transition-all h-full"
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <service.icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-muted text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-5 border-t border-border flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-muted">Starting at</span>
                      <p className="text-2xl font-bold text-foreground">
                        {service.startingAt}
                      </p>
                    </div>
                    <span className="text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Get a quote &rarr;
                    </span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
