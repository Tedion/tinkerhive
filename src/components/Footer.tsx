"use client";

import Link from "next/link";
import { GitFork, MessageCircle, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const serviceLinks = [
  "Web Development",
  "App Development",
  "Cloud Management",
  "Private Cloud",
  "DevOps",
  "Security",
];

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
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
    icon: GitFork,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/DTedion",
    icon: MessageCircle,
  },
  {
    label: "Email",
    href: "mailto:hello@tinkerhive.dev",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-light)] bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {/* Column 1 — Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="group flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-display text-lg font-bold text-background">
                T
              </div>
              <span className="font-display text-xl font-bold text-foreground">
                Tinker<span className="text-primary">Hive</span>
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-light">
              We tinker. You thrive. Websites, apps, and cloud infrastructure
              handcrafted by senior engineers.
            </p>

            {/* Social icons */}
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={cn(
                    "glass flex h-9 w-9 items-center justify-center rounded-full",
                    "text-muted-light transition-colors duration-200 hover:text-primary"
                  )}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="font-sans text-sm font-semibold text-foreground">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-sm text-muted-light transition-colors hover:text-foreground"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h3 className="font-sans text-sm font-semibold text-foreground">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-light transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Regions */}
          <div>
            <h3 className="font-sans text-sm font-semibold text-foreground">
              Regions
            </h3>
            <ul className="mt-4 space-y-2.5">
              {regions.map((region) => (
                <li
                  key={region}
                  className="text-sm text-muted-light"
                >
                  {region}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border-light)] pt-8 sm:flex-row">
          <p className="text-sm text-muted-light">
            &copy; {new Date().getFullYear()} TinkerHive. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-light transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-light transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
