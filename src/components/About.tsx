import { CheckCircle2 } from "lucide-react";

const differentiators = [
  "You talk to the senior engineer — always. No bait-and-switch.",
  "Fixed pricing with no hidden fees. 50% upfront, 50% on delivery.",
  "Month-to-month support. No long-term lock-in contracts.",
  "Cloud-native infrastructure from day one. Not fragile shared hosting.",
  "We speak your language — plain English, no unnecessary jargon.",
  "Open-source first. You own your code, your data, your infrastructure.",
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built by engineers,{" "}
              <span className="text-primary">for businesses.</span>
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              TinkerHive is a global digital agency run by senior DevOps and
              software engineers. We build websites, apps, and cloud
              infrastructure for businesses across the US, Canada, Europe, Middle
              East, and Australia.
            </p>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              Unlike big agencies that assign junior developers to your project,
              you work directly with the people who architect and build your
              solution. No account managers. No middlemen.
            </p>

            <ul className="mt-8 space-y-4" role="list">
              {differentiators.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-success"
                    aria-hidden="true"
                  />
                  <span className="text-foreground text-sm font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: "50+", label: "Projects Delivered" },
                  { value: "99.9%", label: "Uptime Guarantee" },
                  { value: "6", label: "Countries Served" },
                  { value: "<2hr", label: "Avg Response Time" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-3xl font-extrabold text-primary">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              {["AWS", "GCP", "Kubernetes", "Terraform", "Docker"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="rounded-lg border border-border bg-white px-3 py-1.5 text-xs font-semibold text-muted"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
