"use client";

/**
 * Real clients & employers from Teddy Abera's work history:
 * - Atlas Computer Technology (ACT) — enterprise ICT, Ethiopia
 * - Exponent.ch — AI/digital transformation, Geneva
 * - Centriweb — backend/DevOps, Auckland NZ
 * - OpenG2P — gov-to-person digital platform
 * - WeTruck — East Africa logistics AI
 * - NDIT Solutions — IT consulting
 * - Poulta — tech startup
 * - Upwork — international freelance clients (banking, gov, SaaS)
 * Banks: Siinqee Bank, Hijra Bank, Wegagen Bank (via ACT)
 * Gov: ATI, MoWSA, EDRMC (via OpenG2P)
 */

interface Client {
  name: string;
  label: string;   // display name, may be shorter
  sector: string;
  url: string;
  color?: string;  // brand accent color for hover
}

const clients: Client[] = [
  {
    name: "Atlas Computer Technology",
    label: "Atlas CT",
    sector: "Enterprise ICT",
    url: "https://act.com.et",
    color: "#0369a1",
  },
  {
    name: "Exponent.ch",
    label: "Exponent.ch",
    sector: "AI · Geneva",
    url: "https://exponent.ch/en",
    color: "#7c3aed",
  },
  {
    name: "Centriweb",
    label: "Centriweb",
    sector: "Dev Agency · NZ",
    url: "https://centriweb.com",
    color: "#0891b2",
  },
  {
    name: "OpenG2P",
    label: "OpenG2P",
    sector: "Gov Tech",
    url: "https://openg2p.org",
    color: "#059669",
  },
  {
    name: "WeTruck",
    label: "WeTruck",
    sector: "Logistics AI",
    url: "https://wetruck.ai",
    color: "#d97706",
  },
  {
    name: "NDIT Solutions",
    label: "NDIT Solutions",
    sector: "IT Consulting",
    url: "https://nditsolutions.com",
    color: "#0369a1",
  },
  {
    name: "Poulta",
    label: "Poulta",
    sector: "Tech Startup",
    url: "https://poulta.com",
    color: "#dc2626",
  },
  {
    name: "Siinqee Bank",
    label: "Siinqee Bank",
    sector: "Mobile Banking",
    url: "#",
    color: "#065f46",
  },
  {
    name: "Hijra Bank",
    label: "Hijra Bank",
    sector: "Mobile Banking",
    url: "#",
    color: "#1d4ed8",
  },
  {
    name: "Wegagen Bank",
    label: "Wegagen Bank",
    sector: "Mobile Banking",
    url: "#",
    color: "#9f1239",
  },
  {
    name: "Upwork",
    label: "Upwork Global",
    sector: "International Clients",
    url: "https://upwork.com",
    color: "#14a800",
  },
];

// Duplicate for seamless infinite marquee
const track = [...clients, ...clients];

export default function TrustedBy() {
  return (
    <section className="bg-[#f8fafc] py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#94a3b8]">
          Companies & organizations I&apos;ve worked with
        </p>
      </div>

      {/* Marquee */}
      <div className="marquee-container">
        <div className="marquee-track flex items-center gap-6">
          {track.map((client, i) => (
            <a
              key={`${client.name}-${i}`}
              href={client.url === "#" ? undefined : client.url}
              target={client.url === "#" ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={client.name}
              className="group flex-shrink-0 flex flex-col items-center justify-center gap-1 rounded-xl border border-[#e2e8f0] bg-white px-6 py-4 min-w-[140px] transition-all duration-200 opacity-60 hover:opacity-100 hover:shadow-md cursor-default select-none"
              style={
                client.url !== "#"
                  ? { cursor: "pointer" }
                  : undefined
              }
            >
              {/* Colored accent dot */}
              <span
                className="w-2 h-2 rounded-full mb-1 opacity-70 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: client.color }}
              />
              {/* Company name */}
              <span className="whitespace-nowrap text-sm font-bold text-[#0f172a] leading-tight text-center">
                {client.label}
              </span>
              {/* Sector badge */}
              <span className="whitespace-nowrap text-[10px] font-medium text-[#94a3b8] leading-tight text-center">
                {client.sector}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
