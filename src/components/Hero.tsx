import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Cloud,
  Server,
  Shield,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_50%_at_50%_40%,rgba(37,99,235,0.08),transparent)]" />

      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-8">
          <Shield size={14} />
          Trusted by businesses worldwide
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          We tinker.{" "}
          <span className="text-primary">You thrive.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
          Websites, apps, cloud infrastructure, and DevOps — handcrafted by
          senior engineers. From your first landing page to your entire private
          cloud, we build your digital everything.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-md hover:bg-primary-dark transition-colors"
          >
            Start Your Project <ArrowRight size={18} />
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-7 py-3.5 text-base font-semibold text-foreground hover:bg-surface transition-colors"
          >
            Explore Services
          </Link>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { icon: Globe, label: "Websites & Apps" },
            { icon: Cloud, label: "Cloud Management" },
            { icon: Server, label: "Private Cloud" },
            { icon: Shield, label: "DevOps & Security" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 rounded-xl border border-border bg-white p-4"
            >
              <item.icon size={28} className="text-primary" />
              <span className="text-sm font-medium text-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
