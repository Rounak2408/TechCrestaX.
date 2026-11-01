import React, { useState, useEffect } from 'react';
import { ShieldCheck, Award, ExternalLink, X, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

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
    badge: "Public Procurement Ready",
    accentGlow: "from-blue-500/15 via-emerald-500/10 to-transparent",
    borderColor: "border-blue-500/30 hover:border-blue-500/60",
    pillTheme: "bg-blue-500/10 text-blue-400 border-blue-500/25"
  }
];

export default function GovernmentCertifications({ variant = "footer", className = "" }) {
  const [selectedCert, setSelectedCert] = useState(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    if (selectedCert) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedCert]);

  /* ─────────────────────────────────────────────────────────────
     HERO VARIANT: Sleek, high-trust dual badge strip
  ───────────────────────────────────────────────────────────── */
  if (variant === "hero") {
    return (
      <>
        <div className={`space-y-2.5 pt-2 ${className}`}>
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10.5px] font-mono tracking-widest text-slate-400 font-bold uppercase">
              Govt. of India Recognitions
            </span>
          </div>

          {/* Dual Pill Cards */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {certificationData.map((cert) => (
              <button
                key={cert.id}
                type="button"
                onClick={() => setSelectedCert(cert)}
                className="group inline-flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#0B111E]/80 hover:bg-[#101828] border border-white/10 hover:border-amber-400/40 text-left transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-sm cursor-pointer"
                aria-label={`View ${cert.title} details`}
              >
                <div className="w-7 h-7 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 p-1 group-hover:border-amber-400/40 transition-colors">
                  <img
                    src="/certifications/ashoka-emblem.png"
                    alt="Emblem of India"
                    className="w-full h-full object-contain filter brightness-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="leading-tight">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                      {cert.shortTitle}
                    </span>
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 block">
                    Govt. of India
                  </span>
                </div>

                <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all ml-1 shrink-0" />
              </button>
            ))}
          </div>
        </div>

        {/* Certificate Modal */}
        {selectedCert && (
          <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
        )}
      </>
    );
  }

  /* ─────────────────────────────────────────────────────────────
     FOOTER VARIANT: Full luxury showcase grid with authentic cards
  ───────────────────────────────────────────────────────────── */
  return (
    <>
      <div className={`space-y-5 pt-8 pb-4 border-t border-white/[0.08] ${className}`}>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-white block">
                Official Government of India Recognitions
              </span>
              <span className="text-[11px] text-slate-400 block">
                Formally recognized under India's national enterprise & public procurement frameworks.
              </span>
            </div>
          </div>

          <span className="self-start sm:self-auto text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Verified Credentials</span>
          </span>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {certificationData.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className={`group relative rounded-2xl p-5 bg-[#0A0E17] hover:bg-[#0E1524] border border-white/[0.08] ${cert.borderColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5 cursor-pointer flex flex-col justify-between space-y-4 overflow-hidden`}
              role="button"
              tabIndex={0}
              aria-label={`Inspect ${cert.title} certificate`}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedCert(cert); }}
            >
              {/* Soft background ambient gradient */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${cert.accentGlow} opacity-30 group-hover:opacity-60 transition-opacity pointer-events-none`}
                aria-hidden="true" 
              />

              {/* Card Header: Emblem + Badge */}
              <div className="flex items-center justify-between gap-3 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-1.5 shrink-0 group-hover:border-amber-400/40 transition-colors">
                    <img
                      src="/certifications/ashoka-emblem.png"
                      alt="National Emblem of India"
                      className="w-full h-full object-contain filter brightness-110"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold font-display text-white group-hover:text-amber-300 transition-colors tracking-tight">
                      {cert.title}
                    </h4>
                    <span className="text-[10px] font-mono text-slate-400 block truncate">
                      {cert.category}
                    </span>
                  </div>
                </div>

                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border shrink-0 ${cert.pillTheme}`}>
                  {cert.badge}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-300 leading-relaxed relative z-10">
                "{cert.description}"
              </p>

              {/* Card Bottom: Authority & View Certificate Action */}
              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono relative z-10">
                <span className="text-slate-400 truncate max-w-[220px]">
                  {cert.authority}
                </span>

                <span className="inline-flex items-center gap-1 text-amber-400 group-hover:text-amber-300 font-semibold group-hover:translate-x-0.5 transition-all">
                  <span>View Details</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Modal */}
      {selectedCert && (
        <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   MODAL COMPONENT: High-Res Official Certificate Preview
───────────────────────────────────────────────────────────── */
function CertificateModal({ cert, onClose }) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${cert.title} Verification Modal`}
    >
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-[#0B101B] border border-white/15 p-6 sm:p-8 shadow-2xl space-y-5 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close certificate preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                {cert.title}
              </h3>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-400">
                <CheckCircle2 className="w-3 h-3" />
                <span>Verified</span>
              </span>
            </div>
            <p className="text-xs font-mono text-slate-400">
              {cert.authority}
            </p>
          </div>
        </div>

        {/* Official Certificate Card Image */}
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-inner">
          <img
            src={cert.cardImage}
            alt={`${cert.title} Official Certificate`}
            className="w-full h-auto object-cover"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Description & Official Note */}
        <div className="space-y-2 rounded-2xl bg-white/[0.03] p-4 border border-white/[0.06] text-xs">
          <div className="text-slate-200 font-medium">
            "{cert.description}"
          </div>
          <div className="text-[11px] font-mono text-slate-400 pt-1">
            Registered entity: <strong className="text-white">TechCrestaX</strong> • Rajkot, Gujarat, India.
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-[11px] font-mono text-slate-400">
            National Registry Compliance Verified
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

