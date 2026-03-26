const companies = [
  "WeTruck",
  "CloudScale",
  "DevFlow",
  "NetSec",
  "PlatformOps",
  "DataPeak",
  "InfraCore",
  "AppForge",
];

export default function TrustedBy() {
  // Duplicate the list for seamless infinite scroll
  const allCompanies = [...companies, ...companies];

  return (
    <section className="bg-[#f8fafc] py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">
          Trusted by leading organizations
        </p>
      </div>

      {/* Marquee container */}
      <div className="marquee-container">
        <div className="marquee-track flex items-center gap-10">
          {allCompanies.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap rounded-lg border border-[#e2e8f0] bg-white px-6 py-3 text-base font-bold text-[#94a3b8] opacity-70 hover:opacity-100 hover:border-[#00b4d8] transition-all duration-200 cursor-default select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
