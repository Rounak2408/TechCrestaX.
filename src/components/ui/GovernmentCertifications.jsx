import React from 'react';

export const certificationData = [
  {
    id: "msme",
    shortTitle: "MSME Registered",
    title: "MSME REGISTERED",
    label: "MSME",
    orgLogo: "/certifications/msme-logo.webp",
    authority: "Ministry of MSME, Govt. of India",
  },
  {
    id: "gem",
    shortTitle: "GeM Certified",
    title: "GeM CERTIFIED",
    label: "GeM Certified",
    orgLogo: "/certifications/gem-logo.webp",
    authority: "Government e Marketplace, Govt. of India",
  }
];

export default function GovernmentCertifications({ variant = "footer", className = "" }) {

  /* ─────────────────────────────────────────────────────────────
     HERO VARIANT: Clean static logo badges — non-clickable
  ───────────────────────────────────────────────────────────── */
  if (variant === "hero") {
    return (
      <div className={`flex flex-wrap items-center gap-3 pt-2 ${className}`}>
        {certificationData.map((cert) => (
          <div
            key={cert.id}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#0B111E]/80 border border-white/10 shadow-sm"
            aria-label={cert.shortTitle}
          >
            {/* Official clean logo badge */}
            <div className="bg-[#FFFDF9] rounded-lg px-2 py-1 border border-[#E8DFD0] flex items-center justify-center shrink-0">
              <img
                src={cert.orgLogo}
                alt={`${cert.label} - Govt. of India`}
                className="h-5 sm:h-6 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="leading-tight">
              <span className="text-xs font-bold text-white block">{cert.shortTitle}</span>
              <span className="text-[10px] font-mono text-amber-400/90 block">Govt. of India</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  /* ─────────────────────────────────────────────────────────────
     FOOTER VARIANT: Clean MSME & GeM Certified badges under TechCrestaX
  ───────────────────────────────────────────────────────────── */
  return (
    <div className={`space-y-2 pt-2 ${className}`}>
      <span className="text-[10.5px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
        Recognized &amp; Certified
      </span>
      <div className="flex flex-wrap items-center gap-3">
        {/* MSME */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 shadow-sm">
          <div className="bg-[#FFFDF9] rounded-lg px-2 py-1 border border-[#E8DFD0] flex items-center justify-center shrink-0">
            <img
              src="/certifications/msme-logo.webp"
              alt="MSME"
              className="h-5 sm:h-6 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
          <span className="text-xs font-bold text-white tracking-wide">MSME</span>
        </div>

        {/* GeM Certified */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 shadow-sm">
          <div className="bg-[#FFFDF9] rounded-lg px-2 py-1 border border-[#E8DFD0] flex items-center justify-center shrink-0">
            <img
              src="/certifications/gem-logo.webp"
              alt="GeM Certified"
              className="h-5 sm:h-6 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
          <span className="text-xs font-bold text-white tracking-wide">GeM Certified</span>
        </div>
      </div>
    </div>
  );
}


