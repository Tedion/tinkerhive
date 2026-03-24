"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const serviceLinks = [
  "Website Development",
  "App Development",
  "Cloud Management",
  "Private Cloud Setup",
  "DevOps Consulting",
  "Open Source Solutions",
];

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const regions = [
  "United States",
  "Canada",
  "United Kingdom & EU",
  "UAE & Saudi Arabia",
  "Australia & New Zealand",
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white py-12">
      <AnimateIn>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="text-white font-bold">T</span>
                </div>
                <span className="text-lg font-bold tracking-tight text-foreground">
                  Tinker<span className="text-primary">Hive</span>
                </span>
              </Link>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                We tinker. You thrive. Websites, apps, and cloud infrastructure
                handcrafted by senior engineers.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold text-foreground">Services</h3>
              <ul className="mt-3 space-y-2">
                {serviceLinks.map((s) => (
                  <li key={s}>
                    <Link
                      href="#services"
                      className="text-sm text-muted hover:text-primary transition-colors"
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-foreground">Company</h3>
              <ul className="mt-3 space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Regions */}
            <div>
              <h3 className="text-sm font-semibold text-foreground">Serving</h3>
              <ul className="mt-3 space-y-2">
                {regions.map((region) => (
                  <li key={region} className="text-sm text-muted">
                    {region}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted">
              &copy; {new Date().getFullYear()} TinkerHive. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-muted hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </AnimateIn>
    </footer>
  );
}
