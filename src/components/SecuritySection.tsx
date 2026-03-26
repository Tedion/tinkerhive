"use client";

import { ShieldCheck, Check } from "lucide-react";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

/* ------------------------------------------------------------------ */
/*  Security badge pills (top row)                                     */
/* ------------------------------------------------------------------ */

const securityBadges = [
  "WAF",
  "SIEM",
  "Zero Trust",
  "SOC 2 & ISO 27001",
  "Vulnerability Scanning",
  "IAM & RBAC",
  "Secret Management",
  "Network Segmentation",
];

/* ------------------------------------------------------------------ */
/*  Trust indicators (right card)                                      */
/* ------------------------------------------------------------------ */

const trustIndicators = [
  "SOC 2 Type II Compliant",
  "ISO 27001 Certified Processes",
  "CIS Benchmarks",
  "OWASP Top 10 Coverage",
  "HashiCorp Vault",
  "Terraform + OPA",
  "Prometheus & Grafana",
  "PagerDuty Incident Response",
];

/* ================================================================== */
/*  Component                                                          */
/* ================================================================== */

export default function SecuritySection() {
  return (
    <section
      id="security"
      style={{
        backgroundColor: "#0f172a",
        backgroundImage:
          "radial-gradient(ellipse at 50% 0%, rgba(0, 180, 216, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(15, 23, 42, 0) 0%, rgba(2, 6, 23, 0.4) 100%)",
      }}
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* ─── Header ─── */}
        <AnimateIn variant="fadeIn" className="mb-6">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#94a3b8" }}
          >
            SECURITY
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ color: "#f1f5f9" }}
          >
            Defense in Depth
          </h2>
          <p className="mt-4 max-w-2xl text-[#94a3b8] leading-relaxed">Security-first architecture baked into every layer — network, application, data, and identity.</p>
        </AnimateIn>

        {/* ─── Badge pills row — staggered entrance ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.06 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          {securityBadges.map((badge) => (
            <motion.span
              key={badge}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-sm"
              style={{
                borderColor: "rgba(255, 255, 255, 0.15)",
                color: "#f1f5f9",
                backgroundColor: "rgba(30, 41, 59, 0.6)",
              }}
            >
              <ShieldCheck size={14} style={{ color: "#00b4d8" }} />
              {badge}
            </motion.span>
          ))}
        </motion.div>

        {/* ─── Two-Column: Philosophy + Trust ─── */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left — Philosophy */}
          <AnimateIn variant="fadeUp" delay={0.15}>
            <div className="space-y-8">
              <h3
                className="text-2xl font-semibold"
                style={{ color: "#f1f5f9" }}
              >
                Security Is Not an Afterthought
              </h3>
              <p
                className="leading-relaxed text-base"
                style={{ color: "#94a3b8" }}
              >
                Every layer of your infrastructure is a potential attack surface. We
                architect with a zero-trust mindset from day one — encrypting data at
                rest and in transit, enforcing least-privilege access, and continuously
                scanning for vulnerabilities before bad actors find them.
              </p>
              <p
                className="leading-relaxed text-base"
                style={{ color: "#94a3b8" }}
              >
                Our defense-in-depth approach layers network segmentation, WAF
                protection, runtime anomaly detection, and automated incident response
                so that a single failure never cascades into a breach. Compliance
                isn&apos;t a checkbox — it&apos;s baked into every Terraform module and
                CI/CD pipeline we ship.
              </p>
            </div>
          </AnimateIn>

          {/* Right — Trust Indicators card */}
          <AnimateIn variant="fadeUp" delay={0.25}>
            <div
              className="rounded-xl border p-8"
              style={{
                backgroundColor: "#1e293b",
                borderColor: "rgba(0, 180, 216, 0.2)",
                boxShadow: "0 0 40px rgba(0, 180, 216, 0.05)",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck size={24} style={{ color: "#00b4d8" }} />
                <h3
                  className="text-xl font-semibold"
                  style={{ color: "#f1f5f9" }}
                >
                  Trust Indicators
                </h3>
              </div>
              <ul className="space-y-1">
                {trustIndicators.map((indicator) => (
                  <li
                    key={indicator}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 -mx-3 transition-colors duration-200 cursor-default"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: "rgba(0, 180, 216, 0.15)" }}
                    >
                      <Check size={12} style={{ color: "#00b4d8" }} />
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "#f1f5f9" }}
                    >
                      {indicator}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
