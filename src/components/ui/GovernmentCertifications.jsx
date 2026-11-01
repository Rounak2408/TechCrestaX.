import React from 'react';

export const certificationData = [
  {
    id: "msme",
    shortTitle: "MSME Registered",
    title: "MSME REGISTERED",
    category: "Micro, Small & Medium Enterprises",
    authority: "Ministry of MSME, Govt. of India",
    description: "Recognized under India's MSME ecosystem, supporting our professional business identity and operations.",
    cardImage: "/certifications/msme-card.webp",
    logoImage: "/certifications/msme-header-logo.png",
    badgeLogo: "/certifications/msme-badge-logo.webp",
    badge: "Govt. of India Enterprise",
    accentGlow: "from-amber-500/15 via-orange-500/10 to-transparent",
    borderColor: "border-amber-500/30 hover:border-amber-500/60",
    pillTheme: "bg-amber-500/10 text-amber-400 border-amber-500/25"
  },
  {
    id: "gem",
    shortTitle: "GeM Registered",
    title: "GeM REGISTERED",
    category: "Government e Marketplace",
    authority: "Public Procurement Portal, Govt. of India",
    description: "Registered on the Government e-Marketplace for eligible business opportunities and procurement.",
    cardImage: "/certifications/gem-card.webp",
    logoImage: "/certifications/gem-header-logo.png",
    badgeLogo: "/certifications/gem-badge-logo.webp",
    badge: "Public Procurement Ready",
    accentGlow: "from-blue-500/15 via-emerald-500/10 to-transparent",
    borderColor: "border-blue-500/30 hover:border-blue-500/60",
    pillTheme: "bg-blue-500/10 text-blue-400 border-blue-500/25"
  }
];

export default function GovernmentCertifications({ variant = "footer", className = "" }) {

  /* ─────────────────────────────────────────────────────────────
     HERO VARIANT: Simple static logo badges — non-clickable
  ───────────────────────────────────────────────────────────── */
  if (variant === "hero") {
    return (
      <div className={`flex flex-wrap items-center gap-3 pt-2 ${className}`}>
        {certificationData.map((cert) => (
          <div
            key={cert.id}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0B111E]/80 border border-white/10 shadow-sm"
            aria-label={cert.shortTitle}
          >
            {/* Official badge logo on a white-ish pill */}
            <div className="bg-[#FFFDF9] rounded-lg px-1.5 py-0.5 border border-[#E8DFD0] flex items-center justify-center shrink-0">
              <img
                src={cert.badgeLogo}
                alt={`${cert.shortTitle} - Govt. of India`}
                className="h-5 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="leading-tight">
              <span className="text-[11px] font-bold text-white block">{cert.shortTitle}</span>
              <span className="text-[9.5px] font-mono text-amber-400/80 block">Govt. of India</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  /* ─────────────────────────────────────────────────────────────
     FOOTER VARIANT: Simple inline logo + label strip
  ───────────────────────────────────────────────────────────── */
  return (
    <div className={`flex flex-wrap items-center gap-4 pt-3 ${className}`}>
      {/* MSME */}
      <div className="flex items-center gap-2">
        <div className="bg-[#FFFDF9] rounded-lg px-2 py-1 border border-[#E8DFD0] shadow-sm flex items-center justify-center">
          <img
            src="/certifications/msme-badge-logo.webp"
            alt="MSME Registered - Govt. of India"
            className="h-5 w-auto object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
        <span className="text-[11px] font-semibold text-slate-300">MSME</span>
      </div>

      {/* Separator */}
      <span className="w-px h-4 bg-white/10 hidden sm:block" aria-hidden="true" />

      {/* GeM */}
      <div className="flex items-center gap-2">
        <div className="bg-[#FFFDF9] rounded-lg px-2 py-1 border border-[#E8DFD0] shadow-sm flex items-center justify-center">
          <img
            src="/certifications/gem-badge-logo.webp"
            alt="GeM Registered - Govt. of India"
            className="h-5 w-auto object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
        <span className="text-[11px] font-semibold text-slate-300">GeM Certified</span>
      </div>
    </div>
  );
}

