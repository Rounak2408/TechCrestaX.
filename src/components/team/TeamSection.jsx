import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Crown
} from 'lucide-react';
import { companyData } from '../../data/companyData';

// Disciplines mapping for each core member
const memberDisciplines = {
  "rishu-thakur": "Architecture & Leadership",
  "bharti-murdhariya": "Client Partnerships & Growth",
  "khushi-tiwari": "Frontend Engineering & UI",
  "satyajeet-kumar": "Social Strategy & SEO"
};

export default function TeamSection() {
  const teamList = companyData.team || [];

  return (
    <section 
      id="team" 
      className="p-6 sm:p-10 lg:p-12 xl:p-14 rounded-3xl bg-[#F8F9FA] dark:bg-[#0B111A] border border-[#E2E5E9] dark:border-white/10 select-none relative overflow-hidden space-y-10 sm:space-y-12 transition-colors duration-300"
      aria-label="Meet Our Team"
    >
      {/* Background Soft Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#FF6B4A]/5 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 relative z-10">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4F0] dark:bg-[#0D1420] border border-[#FF6B4A]/25 text-xs font-semibold text-[#FF6B4A] shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A] animate-pulse" />
            <span className="uppercase tracking-widest text-[11px] font-mono font-bold">
              THE PEOPLE BEHIND THE WORK
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#0D1B2A] dark:text-white tracking-tight">
            Meet Our Team
          </h2>

          <p className="text-sm sm:text-base text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
            A dedicated team of digital engineers, UI/UX designers, and growth specialists collaborating to deliver high-performance digital platforms.
          </p>
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0D1B2A] dark:bg-white text-white dark:text-[#0D1B2A] hover:bg-[#FF6B4A] dark:hover:bg-[#FF6B4A] dark:hover:text-white text-xs sm:text-sm font-bold transition-all shadow-xs shrink-0 self-start md:self-auto group"
          aria-label="Contact TechCrestaX Team"
        >
          <span>Work With Us</span>
          <ArrowRight className="w-4 h-4 text-[#FFB627] group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>

      {/* TEAM CARDS: 4-COLUMN BALANCED UNIFIED GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 relative z-10">
        {teamList.map((member, idx) => (
          <article
            key={member.id || idx}
            className="group relative flex flex-col h-full rounded-3xl bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 shadow-xs hover:shadow-xl hover:border-[#FF6B4A]/40 dark:hover:border-[#FF6B4A]/40 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
            style={{
              transitionDelay: `${idx * 40}ms`
            }}
          >
            {/* Consistent Portrait Photo Container */}
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-200 dark:bg-slate-800 shrink-0">
              <img
                src={member.image}
                alt={`${member.name} — ${member.role}`}
                className="w-full h-full object-cover object-[center_18%] group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Bottom Scrim for Smooth Transition */}
              <div 
                className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" 
                aria-hidden="true" 
              />

              {/* Floating Leadership / Founder Badge */}
              {member.isLeader && (
                <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D1B2A]/90 dark:bg-[#070A0F]/90 backdrop-blur-md border border-[#FFB627]/40 text-[10px] font-mono font-bold text-[#FFB627] shadow-sm">
                  <Crown className="w-3 h-3 text-[#FFB627]" />
                  <span>Leadership</span>
                </div>
              )}

              {/* Verified Team Indicator */}
              <div 
                className="absolute top-3.5 right-3.5 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[10px] font-mono font-semibold text-[#8FC658]"
                title="Verified Core Team Member"
              >
                <CheckCircle2 className="w-3 h-3 text-[#8FC658]" />
                <span className="hidden sm:inline">Verified</span>
              </div>
            </div>

            {/* Consistent Content Container */}
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-3.5">
              <div className="space-y-1.5">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF6B4A] dark:text-[#FF8C66]">
                  {member.role}
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display text-[#0D1B2A] dark:text-white group-hover:text-[#FF6B4A] transition-colors duration-300 leading-snug">
                  {member.name}
                </h3>

                <p className="text-xs sm:text-[13px] text-[#4C5258] dark:text-[#94A3B8] leading-relaxed line-clamp-3 pt-1">
                  {member.bio}
                </p>
              </div>

              {/* Bottom Discipline Specialty Tag & Divider */}
              <div className="pt-3.5 border-t border-[#EBECEF] dark:border-white/[0.08] flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500 dark:text-slate-400 font-medium truncate">
                  {memberDisciplines[member.id] || "Core Engineering"}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A]/60 group-hover:bg-[#FF6B4A] transition-colors shrink-0 ml-2" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
