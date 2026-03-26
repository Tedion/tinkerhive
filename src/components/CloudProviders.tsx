"use client";

import { SiGooglecloud, SiDigitalocean, SiHetzner, SiOvh, SiVultr } from "react-icons/si";
import { FaAws, FaMicrosoft } from "react-icons/fa";
import type { IconType } from "react-icons";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

interface Provider {
  name: string;
  icon: IconType;
  tier: "major" | "secondary";
  services?: string;
  brandColor?: string;
}

const providers: Provider[] = [
  { name: "AWS", icon: FaAws, tier: "major", services: "EC2, S3, RDS, Lambda, EKS", brandColor: "#FF9900" },
  { name: "Google Cloud", icon: SiGooglecloud, tier: "major", services: "GKE, Cloud Run, BigQuery", brandColor: "#4285F4" },
  { name: "Azure", icon: FaMicrosoft, tier: "major", services: "AKS, Functions, Cosmos DB", brandColor: "#0078D4" },
  { name: "DigitalOcean", icon: SiDigitalocean, tier: "secondary" },
  { name: "Hetzner", icon: SiHetzner, tier: "secondary" },
  { name: "OVH", icon: SiOvh, tier: "secondary" },
  { name: "Vultr", icon: SiVultr, tier: "secondary" },
];

const majorProviders = providers.filter((p) => p.tier === "major");
const secondaryProviders = providers.filter((p) => p.tier === "secondary");

const stats = [
  { value: "99.9%", label: "Uptime" },
  { value: "3", label: "Major Clouds" },
  { value: "7", label: "Cloud Platforms" },
];

export default function CloudProviders() {
  return (
    <section id="cloud" className="bg-[#f8fafc] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateIn>
          <div className="mb-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#00b4d8] mb-3">
              CLOUD
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a]">
              Multi-Cloud Infrastructure Management
            </h2>
            <p className="text-[#475569] text-base mt-4 max-w-2xl mx-auto">
              We architect vendor-agnostic infrastructure across every major cloud
              provider, eliminating lock-in while maximizing resilience,
              performance, and cost efficiency.
            </p>
          </div>
        </AnimateIn>

        {/* Major provider cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8" stagger={0.1}>
          {majorProviders.map((provider) => {
            const Icon = provider.icon;
            return (
              <StaggerItem key={provider.name}>
                <div
                  className="bg-white border border-[#e2e8f0] border-t-4 rounded-lg p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                  style={{ borderTopColor: provider.brandColor }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#f1f5f9] flex items-center justify-center shrink-0">
                      <Icon size={24} style={{ color: provider.brandColor }} />
                    </div>
                    <h3 className="text-lg font-bold text-[#0f172a]">
                      {provider.name}
                    </h3>
                  </div>
                  {provider.services && (
                    <p className="text-sm text-[#64748b]">{provider.services}</p>
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Secondary providers row */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16" stagger={0.06}>
          {secondaryProviders.map((provider) => {
            const Icon = provider.icon;
            return (
              <StaggerItem key={provider.name}>
                <div
                  className="bg-white border border-[#e2e8f0] rounded-lg px-4 py-3 flex items-center gap-3 transition-all duration-300 hover:border-[#00b4d8] hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#f1f5f9] flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#0f172a]" />
                  </div>
                  <p className="text-sm font-semibold text-[#0f172a]">
                    {provider.name}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Stats row */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-6" stagger={0.1}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="bg-white border border-[#e2e8f0] rounded-lg p-8 text-center">
                <p className="text-4xl md:text-5xl font-bold font-display text-[#00b4d8] mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-[#64748b]">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
