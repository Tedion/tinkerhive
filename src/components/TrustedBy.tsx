"use client";

import { useState } from "react";

interface Client {
  name: string;
  label: string;
  sector: string;
  url: string;
  logo: string | null; // actual logo URL scraped from their site
}

const clients: Client[] = [
  {
    name: "Atlas Computer Technology",
    label: "Atlas CT",
    sector: "Enterprise ICT · Ethiopia",
    url: "https://act.com.et",
    logo: "https://act.com.et/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.080e59e8.png&w=320&q=75",
  },
  {
    name: "Exponent.ch",
    label: "Exponent.ch",
    sector: "AI & Digital · Geneva",
    url: "https://exponent.ch/en",
    logo: "https://exponent.ch/_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2F76706c613de16d73885c27efdecccf17.png&w=256&q=75",
  },
  {
    name: "Centriweb",
    label: "Centriweb",
    sector: "Dev Agency · Auckland NZ",
    url: "https://centriweb.com",
    logo: null, // 403 on their CDN — text fallback
  },
  {
    name: "OpenG2P",
    label: "OpenG2P",
    sector: "Gov Tech · Global",
    url: "https://openg2p.org",
    logo: "https://static.wixstatic.com/media/aac209_c5c1d0e02fdb4f4d94e77a65d049295b~mv2.png/v1/fill/w_228,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%202.png",
  },
  {
    name: "WeTruck",
    label: "WeTruck",
    sector: "Logistics AI · East Africa",
    url: "https://wetruck.ai",
    logo: "https://www.wetruck.ai/images/logo.png",
  },
  {
    name: "NDIT Solutions",
    label: "NDIT Solutions",
    sector: "IT Consulting · USA",
    url: "https://nditsolutions.com",
    logo: "https://cdn.prod.website-files.com/655e88443b3fe4452ed66a24/655faf1101a7a0b1661481d1_nexustransparentlogo.webp",
  },
  {
    name: "Poulta",
    label: "Poulta",
    sector: "Agri-Tech · Ethiopia",
    url: "https://poulta.com",
    logo: "https://poulta.com/assets/images/logo.svg",
  },
  {
    name: "Siinqee Bank",
    label: "Siinqee Bank",
    sector: "Mobile Banking · Ethiopia",
    url: "#",
    logo: null,
  },
  {
    name: "Hijra Bank",
    label: "Hijra Bank",
    sector: "Mobile Banking · Ethiopia",
    url: "#",
    logo: null,
  },
  {
    name: "Wegagen Bank",
    label: "Wegagen Bank",
    sector: "Mobile Banking · Ethiopia",
    url: "#",
    logo: null,
  },
  {
    name: "Upwork",
    label: "Upwork",
    sector: "International Clients",
    url: "https://upwork.com",
    logo: null, // Upwork logo is trademarked — use text mark
  },
];

// Duplicate for seamless infinite marquee
const track = [...clients, ...clients];

function LogoCard({ client }: { client: Client }) {
  const [imgError, setImgError] = useState(false);

  const inner = (
    <div className="group flex-shrink-0 flex flex-col items-center justify-center gap-2 rounded-xl border border-[#e2e8f0] bg-white px-6 py-4 h-[88px] min-w-[160px] max-w-[200px] transition-all duration-200 opacity-60 hover:opacity-100 hover:shadow-md hover:border-[#00b4d8]/40 select-none">
      {client.logo && !imgError ? (
        /* Real logo image */
        <img
          src={client.logo}
          alt={client.name}
          onError={() => setImgError(true)}
          className="h-8 w-auto max-w-[120px] object-contain grayscale group-hover:grayscale-0 transition-all duration-200"
          loading="lazy"
        />
      ) : (
        /* Text fallback when no logo or img fails */
        <span className="text-sm font-bold text-[#334155] leading-tight text-center">
          {client.label}
        </span>
      )}
      <span className="text-[10px] font-medium text-[#94a3b8] leading-tight text-center whitespace-nowrap">
        {client.sector}
      </span>
    </div>
  );

  if (client.url === "#") {
    return <div key={client.name} className="cursor-default">{inner}</div>;
  }

  return (
    <a
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={client.name}
      className="cursor-pointer"
    >
      {inner}
    </a>
  );
}

export default function TrustedBy() {
  return (
    <section className="bg-[#f8fafc] py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#94a3b8]">
          Companies &amp; organizations I&apos;ve worked with
        </p>
      </div>

      {/* Marquee */}
      <div className="marquee-container">
        <div className="marquee-track flex items-center gap-5">
          {track.map((client, i) => (
            <LogoCard key={`${client.name}-${i}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
