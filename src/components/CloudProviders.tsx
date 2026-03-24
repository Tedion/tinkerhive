"use client";

import { motion } from "framer-motion";
import { Cloud } from "lucide-react";
import { SiGooglecloud, SiDigitalocean, SiHetzner, SiOvh, SiVultr } from "react-icons/si";
import { FaAws, FaMicrosoft } from "react-icons/fa";
import type { IconType } from "react-icons";
import { cn } from "@/lib/utils";
import GlassCard from "./GlassCard";
import AnimateIn from "./AnimateIn";
import { StaggerContainer, StaggerItem } from "./AnimateIn";

interface Provider {
  name: string;
  icon: IconType;
  tier: "major" | "secondary";
}

const providers: Provider[] = [
  { name: "AWS", icon: FaAws, tier: "major" },
  { name: "Google Cloud", icon: SiGooglecloud, tier: "major" },
  { name: "Azure", icon: FaMicrosoft, tier: "major" },
  { name: "DigitalOcean", icon: SiDigitalocean, tier: "secondary" },
  { name: "Hetzner", icon: SiHetzner, tier: "secondary" },
  { name: "OVH", icon: SiOvh, tier: "secondary" },
  { name: "Vultr", icon: SiVultr, tier: "secondary" },
];

const majorProviders = providers.filter((p) => p.tier === "major");
const secondaryProviders = providers.filter((p) => p.tier === "secondary");

const metrics = [
  { value: "99.9%", label: "Uptime Target" },
  { value: "3", label: "Major Clouds" },
  { value: "7", label: "Cloud Platforms" },
];

function ProviderCard({
  provider,
  delay,
  large = false,
}: {
  provider: Provider;
  delay: number;
  large?: boolean;
}) {
  const Icon = provider.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{
        y: -4,
        boxShadow: "0 0 30px rgba(0,180,216,0.15)",
        borderColor: "rgba(0,180,216,0.3)",
      }}
      className={cn(
        "glass rounded-xl border border-[var(--border-light)] flex items-center gap-3 cursor-default transition-all duration-300",
        large ? "px-6 py-5" : "px-4 py-3"
      )}
    >
      <div
        className={cn(
          "shrink-0 rounded-lg bg-primary/10 flex items-center justify-center",
          large ? "w-12 h-12" : "w-9 h-9"
        )}
      >
        <Icon size={large ? 24 : 18} className="text-primary" />
      </div>
      <div>
        <p className={cn("font-display font-semibold text-foreground", large ? "text-base" : "text-sm")}>
          {provider.name}
        </p>
        {large && (
          <p className="text-xs text-muted-light font-mono mt-0.5">
            {provider.name === "AWS" && "EC2 · S3 · RDS · Lambda · EKS"}
            {provider.name === "Google Cloud" && "GKE · Cloud Run · BigQuery"}
            {provider.name === "Azure" && "AKS · Functions · Cosmos DB"}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function CloudProviders() {
  return (
    <section
      id="cloud"
      className="relative py-24 md:py-32 overflow-hidden circuit-dots"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateIn variant="fadeUp" className="mb-16 text-center">
          <p className="font-mono text-sm tracking-wider text-primary mb-3">
            {"// CLOUD"}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Multi-Cloud{" "}
            <span className="gradient-text">Infrastructure Management</span>
          </h2>
        </AnimateIn>

        {/* Cloud provider visual — center hub with radiating providers */}
        <div className="mb-20">
          {/* Center cloud icon */}
          <div className="flex justify-center mb-8">
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute h-24 w-24 rounded-full bg-primary/15 blur-xl" />
                <div className="glass flex h-20 w-20 items-center justify-center rounded-full border border-primary/40 shadow-[0_0_40px_rgba(0,180,216,0.25)]">
                  <Cloud className="h-10 w-10 text-primary" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Connecting lines from center (decorative) */}
          <div className="hidden md:flex justify-center -mt-4 mb-6">
            <div className="flex items-start gap-0">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-px h-8 mx-16 bg-gradient-to-b from-primary/30 to-transparent"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  style={{ originY: 0 }}
                />
              ))}
            </div>
          </div>

          {/* Major cloud providers — large cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 max-w-3xl mx-auto">
            {majorProviders.map((p, i) => (
              <ProviderCard key={p.name} provider={p} delay={0.2 + i * 0.1} large />
            ))}
          </div>

          {/* Connecting lines to secondary (decorative) */}
          <div className="hidden md:flex justify-center mb-4">
            <motion.div
              className="w-[60%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            />
          </div>

          {/* Secondary providers — smaller cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {secondaryProviders.map((p, i) => (
              <ProviderCard key={p.name} provider={p} delay={0.5 + i * 0.08} />
            ))}
          </div>
        </div>

        {/* Metrics row */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
          stagger={0.12}
        >
          {metrics.map((metric) => (
            <StaggerItem key={metric.label} variant="scaleIn">
              <GlassCard className="p-8 text-center" tilt={false}>
                <p className="text-primary font-display text-4xl md:text-5xl font-bold mb-2">
                  {metric.value}
                </p>
                <p className="text-sm text-muted-light font-sans">
                  {metric.label}
                </p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Strategy paragraph */}
        <AnimateIn variant="fadeUp" className="max-w-3xl mx-auto text-center">
          <p className="text-muted-light leading-relaxed font-sans">
            We architect vendor-agnostic infrastructure across every major cloud
            provider. From cost-optimized workload placement to automated
            failover across regions, our multi-cloud strategy eliminates lock-in
            while maximizing resilience, performance, and cost efficiency for
            every deployment.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
