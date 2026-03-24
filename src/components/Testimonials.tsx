import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, GreenLeaf Marketing",
    location: "Dallas, TX",
    quote:
      "TinkerHive rebuilt our website and it tripled our contact form submissions in 3 months. The speed and quality were beyond what we expected from a big agency, let alone a small team.",
    rating: 5,
  },
  {
    name: "James Al-Rashid",
    role: "CTO, NovaPay",
    location: "Dubai, UAE",
    quote:
      "They migrated our entire infrastructure to a private cloud and cut our AWS bill by 40%. Direct access to a senior engineer who actually understood our stack made all the difference.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Founder, StudyBridge",
    location: "Melbourne, AUS",
    quote:
      "We needed an MVP fast. TinkerHive delivered a fully working app in 5 weeks — React frontend, Node backend, deployed on Kubernetes. Other agencies quoted us 4 months.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by businesses worldwide
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Don&apos;t take our word for it. Here&apos;s what our clients say.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border bg-white p-8 hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-accent text-accent"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="mt-4 text-sm text-foreground leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm"
                  aria-hidden="true"
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted">
                    {t.role} — {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
