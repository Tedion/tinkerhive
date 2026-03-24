"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Cloud,
  Server,
  Shield,
} from "lucide-react";

const pillars = [
  { icon: Globe, label: "Websites & Apps" },
  { icon: Cloud, label: "Cloud Management" },
  { icon: Server, label: "Private Cloud" },
  { icon: Shield, label: "DevOps & Security" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(45%_50%_at_50%_40%,rgba(37,99,235,0.08),transparent)]" />
        <motion.div
          className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 -right-40 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-8"
        >
          <Shield size={14} />
          Trusted by businesses worldwide
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          We tinker.{" "}
          <span className="relative">
            <span className="text-primary">You thrive.</span>
            <motion.span
              className="absolute -bottom-2 left-0 right-0 h-3 bg-primary/10 rounded-full -z-10"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              style={{ originX: 0 }}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl"
        >
          Websites, apps, cloud infrastructure, and DevOps — handcrafted by
          senior engineers. From your first landing page to your entire private
          cloud, we build your digital everything.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 transition-all"
          >
            Start Your Project{" "}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-7 py-3.5 text-base font-semibold text-foreground hover:bg-surface hover:border-primary/30 transition-all"
          >
            Explore Services
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {pillars.map((item, i) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex flex-col items-center gap-2.5 rounded-xl border border-border bg-white p-5 cursor-default"
            >
              <item.icon size={28} className="text-primary" />
              <span className="text-sm font-medium text-foreground">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
