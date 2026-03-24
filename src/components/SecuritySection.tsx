"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lock, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimateIn from "./AnimateIn";

const securityBadges = [
  { label: "WAF", top: "8%", left: "8%", delay: 0, speed: 3.2 },
  { label: "SIEM & Log Analysis", top: "18%", right: "6%", delay: 0.4, speed: 2.8 },
  { label: "Zero Trust Architecture", top: "42%", left: "2%", delay: 0.8, speed: 3.6 },
  { label: "SOC 2 & ISO 27001", top: "44%", right: "2%", delay: 1.2, speed: 2.4 },
  { label: "Vulnerability Scanning", bottom: "30%", left: "6%", delay: 0.6, speed: 3.0 },
  { label: "IAM & RBAC", bottom: "28%", right: "8%", delay: 1.0, speed: 2.6 },
  { label: "Secret Management (Vault)", bottom: "10%", left: "14%", delay: 0.2, speed: 3.4 },
  { label: "Network Segmentation", bottom: "8%", right: "12%", delay: 1.4, speed: 2.2 },
];

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

/* Simple shield SVG path */
const SHIELD_PATH =
  "M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z";

export default function SecuritySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* Shield path draws itself as user scrolls through */
  const pathLength = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0.6]);

  return (
    <section
      ref={sectionRef}
      id="security"
      className="relative py-24 sm:py-32 overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(114,9,183,0.08),transparent_70%)]"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* ─── Header ─── */}
        <AnimateIn variant="blurIn" className="text-center mb-16">
          <p className="font-mono text-sm text-muted-light tracking-widest uppercase mb-3">
            // SECURITY
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold gradient-text">
            Defense in Depth
          </h2>
        </AnimateIn>

        {/* ─── Shield Visual + Floating Badges ─── */}
        <div className="relative mx-auto w-full max-w-3xl aspect-square mb-20">
          {/* Floating badges */}
          {securityBadges.map((badge) => {
            const position: Record<string, string> = {};
            if (badge.top) position.top = badge.top;
            if (badge.bottom) position.bottom = badge.bottom;
            if (badge.left) position.left = badge.left;
            if (badge.right) position.right = badge.right;

            return (
              <motion.div
                key={badge.label}
                className={cn(
                  "absolute z-10 glass rounded-full px-4 py-2",
                  "text-xs sm:text-sm font-sans font-medium text-foreground",
                  "border border-[var(--border-light)] whitespace-nowrap",
                  "select-none pointer-events-none"
                )}
                style={position}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: badge.delay * 0.3 },
                  scale: { duration: 0.5, delay: badge.delay * 0.3 },
                  y: {
                    duration: badge.speed,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: badge.delay,
                  },
                }}
              >
                {badge.label}
              </motion.div>
            );
          })}

          {/* Center shield */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Outer glow ring */}
            <motion.div
              className="absolute w-52 h-52 sm:w-72 sm:h-72 rounded-full"
              style={{
                opacity: glowOpacity,
                background:
                  "radial-gradient(circle, rgba(0,180,216,0.18) 0%, transparent 70%)",
              }}
            />

            {/* Shield SVG */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-40 h-40 sm:w-56 sm:h-56"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Glow filter */}
              <defs>
                <filter id="shieldGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="1.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Animated shield outline */}
              <motion.path
                d={SHIELD_PATH}
                stroke="url(#shieldStroke)"
                strokeWidth={0.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                filter="url(#shieldGlow)"
                style={{ pathLength }}
              />

              {/* Gradient for stroke */}
              <defs>
                <linearGradient id="shieldStroke" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00b4d8" />
                  <stop offset="50%" stopColor="#7209b7" />
                  <stop offset="100%" stopColor="#f72585" />
                </linearGradient>
              </defs>

              {/* Faint fill that appears after draw */}
              <motion.path
                d={SHIELD_PATH}
                fill="rgba(0,180,216,0.06)"
                style={{ opacity: glowOpacity }}
              />
            </svg>

            {/* Lock icon in the center */}
            <motion.div
              className="absolute text-primary"
              style={{ opacity: glowOpacity }}
            >
              <Lock className="w-10 h-10 sm:w-14 sm:h-14" strokeWidth={1.5} />
            </motion.div>

            {/* Pulsing glow behind lock */}
            <motion.div
              className="absolute w-20 h-20 sm:w-28 sm:h-28 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 30px 10px rgba(0,180,216,0.12)",
                  "0 0 60px 20px rgba(0,180,216,0.22)",
                  "0 0 30px 10px rgba(0,180,216,0.12)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* ─── Two-Column: Philosophy + Trust ─── */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left — Philosophy */}
          <AnimateIn variant="blurIn">
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Security Is Not an Afterthought
              </h3>
              <p className="font-sans text-muted-light leading-relaxed">
                Every layer of your infrastructure is a potential attack surface. We
                architect with a zero-trust mindset from day one — encrypting data at
                rest and in transit, enforcing least-privilege access, and continuously
                scanning for vulnerabilities before bad actors find them.
              </p>
              <p className="font-sans text-muted-light leading-relaxed">
                Our defense-in-depth approach layers network segmentation, WAF
                protection, runtime anomaly detection, and automated incident response
                so that a single failure never cascades into a breach. Compliance
                isn&apos;t a checkbox — it&apos;s baked into every Terraform module and
                CI/CD pipeline we ship.
              </p>
            </div>
          </AnimateIn>

          {/* Right — Trust Indicators */}
          <AnimateIn variant="blurIn" delay={0.2}>
            <div className="glass rounded-2xl border border-[var(--border-light)] p-8">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-6 h-6 text-primary" />
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Trust Indicators
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {trustIndicators.map((indicator) => (
                  <AnimateIn key={indicator} variant="scaleIn" delay={0.1}>
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full px-4 py-2",
                        "glass border border-[var(--border-light)]",
                        "text-sm font-sans text-foreground"
                      )}
                    >
                      {indicator}
                    </span>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
