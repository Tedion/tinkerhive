"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Logo from "./Logo";

const serviceLinks = [
  "Web Development",
  "App Development",
  "AI Development",
  "AI Automation",
  "Cloud Management",
  "Private Cloud",
  "DevOps",
  "Security",
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "How It Works", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

const resourceLinks = [
  { label: "Blog & Insights", href: "/blog" },
  { label: "Case Studies", href: "/#work" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const regions = [
  "United States",
  "Canada",
  "European Union",
  "Middle East",
  "Australia & NZ",
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Tedion",
    icon: FaGithub,
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/DTedion",
    icon: FaTwitter,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/tinkerhive",
    icon: FaLinkedinIn,
  },
  {
    label: "Email",
    href: "mailto:hello@tinkerhive.dev",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top — Logo + Tagline */}
        <div className="mb-12">
          <Link href="/">
            <Logo variant="hex" theme="dark" size={36} />
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#94a3b8]">
            We tinker. You thrive. Websites, apps, and cloud infrastructure
            handcrafted by senior engineers.
          </p>
        </div>

        {/* Link Columns Grid */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#f1f5f9]">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-sm text-[#94a3b8] transition-colors duration-200 hover:text-[#f1f5f9]"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#f1f5f9]">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94a3b8] transition-colors duration-200 hover:text-[#f1f5f9]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#f1f5f9]">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94a3b8] transition-colors duration-200 hover:text-[#f1f5f9]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#f1f5f9]">
              Regions
            </h3>
            <ul className="mt-4 space-y-3">
              {regions.map((region) => (
                <li
                  key={region}
                  className="text-sm text-[#94a3b8]"
                >
                  {region}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-[#1e293b] pt-8 sm:flex-row">
          {/* Copyright + Legal */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <p className="text-sm text-[#94a3b8]">
              &copy; {new Date().getFullYear()} TinkerHive. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="/privacy"
                className="text-sm text-[#94a3b8] transition-colors duration-200 hover:text-[#f1f5f9]"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-[#94a3b8] transition-colors duration-200 hover:text-[#f1f5f9]"
              >
                Terms
              </Link>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-8 w-8 items-center justify-center rounded text-[#94a3b8] transition-colors duration-200 hover:text-[#f1f5f9]"
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
