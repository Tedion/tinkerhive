"use client";

import { motion } from "framer-motion";
import { SiOpenstack, SiProxmox, SiRedhatopenshift } from "react-icons/si";
import type { IconType } from "react-icons";
import { Server } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimateIn from "./AnimateIn";
import GlassCard from "./GlassCard";

interface PlatformCard {
  name: string;
  icon: IconType | typeof Server;
  accent: string;
  description: string;
  features: string[];
}

const platforms: PlatformCard[] = [
  {
    name: "OpenStack",
    icon: SiOpenstack,
    accent: "#f97316",
    description: "The open-source cloud operating system",
    features: ["Compute (Nova)", "Storage (Cinder)", "Networking (Neutron)", "Identity (Keystone)"],
  },
  {
    name: "Proxmox VE",
    icon: SiProxmox,
    accent: "#00b4d8",
    description: "Enterprise virtualization made accessible",
    features: ["KVM & LXC", "HA Clustering", "Ceph Storage", "Backup & Restore"],
  },
  {
    name: "OpenShift",
    icon: SiRedhatopenshift,
    accent: "#ef4444",
    description: "Enterprise Kubernetes by Red Hat",
    features: ["Built-in CI/CD", "Operator Framework", "Service Mesh", "Multi-cluster Management"],
  },
  {
    name: "Harvester",
    icon: Server,
    accent: "#10b981",
    description: "Modern HCI for Kubernetes-native infrastructure",
    features: ["VM Management", "Rancher Integration", "Storage (Longhorn)", "Cloud Provider Interface"],
  },
];

export default function PrivateCloud() {
  return (
    <section id="private-cloud" className="py-20 sm:py-28 bg-surface-alt">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <AnimateIn className="text-center mb-16">
          <p className="font-mono text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            // PRIVATE CLOUD
          </p>
          <h2 className="text-3xl font-display font-extrabold tracking-tight text-foreground sm:text-5xl">
            Own Your{" "}
            <span className="gradient-text">Infrastructure</span>
          </h2>
        </AnimateIn>

        {/* 2x2 platform grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platforms.map((platform, i) => (
            <AnimateIn
              key={platform.name}
              variant={i % 2 === 0 ? "slideLeft" : "slideRight"}
              delay={i * 0.12}
            >
              <GlassCard
                className="group h-full"
                glowColor={`${platform.accent}25`}
                tilt
              >
                {/* Colored top border */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ backgroundColor: platform.accent }}
                />

                <div className="p-8">
                  {/* Icon area */}
                  <div
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl transition-shadow duration-300"
                    style={{
                      backgroundColor: `${platform.accent}15`,
                      boxShadow: `0 0 0px ${platform.accent}`,
                    }}
                  >
                    <platform.icon size={28} style={{ color: platform.accent }} />
                  </div>

                  {/* Platform name */}
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    {platform.name}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-light text-sm leading-relaxed mb-6">
                    {platform.description}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-2.5">
                    {platform.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span
                          className="h-2 w-2 rounded-full shrink-0"
                          style={{ backgroundColor: platform.accent }}
                        />
                        <span className="text-sm text-muted-light font-sans">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover glow overlay */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: `inset 0 0 40px ${platform.accent}10, 0 0 30px ${platform.accent}15`,
                  }}
                />
              </GlassCard>
            </AnimateIn>
          ))}
        </div>

        {/* Why Private Cloud paragraph */}
        <AnimateIn variant="fadeUp" delay={0.5}>
          <div className="mt-14 mx-auto max-w-3xl text-center">
            <p className="text-muted-light leading-relaxed text-base">
              <span className="font-semibold text-foreground">Why Private Cloud?</span>{" "}
              Public cloud bills spiral out of control. A private cloud gives you
              predictable costs, full data sovereignty, and hardware-level
              performance — without sacrificing the automation and self-service
              experience your teams expect. We design, deploy, and manage the
              entire stack so you can focus on shipping product.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
