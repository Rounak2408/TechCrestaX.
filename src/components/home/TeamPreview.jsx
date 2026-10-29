import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Crown } from 'lucide-react';
import { companyData } from '../../data/companyData';
import Reveal from '../motion/Reveal';

const memberDisciplines = {
  "rishu-thakur": "Architecture & Leadership",
  "bharti-murdhariya": "Client Partnerships & Growth",
  "khushi-tiwari": "Frontend Engineering & UI",
  "satyajeet-kumar": "Social Strategy & SEO"
};

export default function TeamPreview() {
  const verifiedMembers = (companyData.team || []).filter(m => m.isVerified);

  return (
    <section 
      id="team-preview" 
      className="py-16 sm:py-20 bg-white dark:bg-[#070A0F] border-b border-[#EBECEF] dark:border-white/10 select-none transition-colors duration-300"
      aria-label="TechCrestaX Team Preview"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4F0] dark:bg-[#0D1420] border border-[#FF6B4A]/25 text-xs font-semibold text-[#FF6B4A]">
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
              to="/about#team"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0D1B2A] text-white hover:bg-[#FF6B4A] text-xs sm:text-sm font-bold transition-all shadow-xs shrink-0 self-start md:self-auto group button-press-scale"
            >
              <span>Meet Full Team</span>
              <ArrowRight className="w-4 h-4 text-[#FFB627] group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>
          </div>
        </Reveal>

        {/* 4 Verified Core Team Members Unified Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {verifiedMembers.map((member, idx) => (
            <Reveal key={member.id} delay={idx * 80} className="h-full">
              <article
                className="group relative flex flex-col h-full rounded-3xl bg-[#F8F9FA] dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 shadow-xs hover:shadow-xl hover:border-[#FF6B4A]/40 dark:hover:border-[#FF6B4A]/40 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Consistent Portrait Photo Container */}
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-200 dark:bg-slate-800 shrink-0">
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    className="w-full h-full object-cover object-[center_18%] group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  <div 
                    className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" 
                    aria-hidden="true" 
                  />

                  {member.isLeader && (
                    <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D1B2A]/90 dark:bg-[#070A0F]/90 backdrop-blur-md border border-[#FFB627]/40 text-[10px] font-mono font-bold text-[#FFB627] shadow-sm">
                      <Crown className="w-3 h-3 text-[#FFB627]" />
                      <span>Leadership</span>
                    </div>
                  )}

                  <div 
                    className="absolute top-3.5 right-3.5 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[10px] font-mono font-semibold text-[#8FC658]"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#8FC658]" />
                    <span className="hidden sm:inline">Verified</span>
                  </div>
                </div>

                {/* Content Container */}
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

                  <div className="pt-3.5 border-t border-[#EBECEF] dark:border-white/[0.08] flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-500 dark:text-slate-400 font-medium truncate">
                      {memberDisciplines[member.id] || "Core Engineering"}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A]/60 group-hover:bg-[#FF6B4A] transition-colors shrink-0 ml-2" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
