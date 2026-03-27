"use client";

import { SiOpenstack, SiProxmox, SiRedhatopenshift, SiRancher } from "react-icons/si";
import type { IconType } from "react-icons";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

interface PlatformCard {
  name: string;
  icon: IconType;
  description: string;
  features: string[];
  iconBg: string;
}

const platforms: PlatformCard[] = [
  {
    name: "OpenStack",
    icon: SiOpenstack,
    description: "The open-source cloud operating system",
    features: ["Compute (Nova)", "Storage (Cinder)", "Networking (Neutron)", "Identity (Keystone)"],
    iconBg: "bg-red-50",
  },
  {
    name: "Proxmox VE",
    icon: SiProxmox,
    description: "Enterprise virtualization made accessible",
    features: ["KVM & LXC", "HA Clustering", "Ceph Storage", "Backup & Restore"],
    iconBg: "bg-orange-50",
  },
  {
    name: "OpenShift",
    icon: SiRedhatopenshift,
    description: "Enterprise Kubernetes by Red Hat",
    features: ["Built-in CI/CD", "Operator Framework", "Service Mesh", "Multi-cluster Management"],
    iconBg: "bg-red-50",
  },
  {
    name: "Harvester",
    icon: SiRancher,
    description: "Modern HCI for Kubernetes-native infrastructure",
    features: ["VM Management", "Rancher Integration", "Storage (Longhorn)", "Cloud Provider Interface"],
    iconBg: "bg-green-50",
  },
];

export default function PrivateCloud() {
  return (
    <section id="private-cloud" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateIn>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#00b4d8] mb-3">
              PRIVATE CLOUD
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a]">
              Own Your Infrastructure
            </h2>
          </div>
        </AnimateIn>

        {/* 2x2 platform grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.1}>
          {platforms.map((platform) => {
            const Icon = platform.icon;

            return (
              <StaggerItem key={platform.name}>
                <div
                  className="bg-white border border-[#e2e8f0] rounded-lg p-8 transition-all duration-300 hover:border-[#00b4d8] hover:shadow-md hover:-translate-y-1 cursor-pointer"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-[#f0f9ff] flex items-center justify-center mb-5">
                    <Icon size={24} className="text-[#0f172a]" />
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-[#0f172a] mb-2">
                    {platform.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#475569] leading-relaxed mb-5">
                    {platform.description}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-2">
                    {platform.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-[#475569]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00b4d8] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Why Private Cloud */}
        <AnimateIn delay={0.3}>
          <div className="mt-16 mx-auto max-w-3xl text-center bg-[#f0f9ff] border border-[#e0f2fe] border-l-4 border-l-[#00b4d8] rounded-xl p-6">
            <p className="text-[#475569] leading-relaxed text-base">
              <span className="font-semibold text-[#0f172a]">
                Why Private Cloud?
              </span>{" "}
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
