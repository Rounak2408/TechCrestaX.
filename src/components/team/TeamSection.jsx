import React from 'react';
import { Sparkles } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function TeamSection() {
  const teamList = companyData.team || [];
  const founder = teamList.find((m) => m.isLeader) || teamList[0];
  const members = teamList.filter((m) => !m.isLeader);

  return (
    <section 
      id="team" 
      className="space-y-12 select-none"
      aria-label="TechCrestaX Team"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4F0] dark:bg-[#0D1420] border border-[#FF6B4A]/25 text-xs font-semibold text-[#FF6B4A]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A] animate-pulse" />
          <span className="uppercase tracking-widest text-[11px] font-mono font-bold">
            OUR STUDIO TALENT
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#0D1B2A] dark:text-white tracking-tight">
          Meet Our Team
        </h2>
        <p className="text-sm sm:text-base text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
          The developers, UI/UX designers, and strategists behind TechCrestaX's client deliveries.
        </p>
      </div>

      {/* Founder Spotlight Card */}
      {founder && (
        <div className="max-w-md mx-auto">
          <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 shadow-lg text-center space-y-4 hover:border-[#FF6B4A]/50 transition-all">
            <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border-2 border-[#FF6B4A]/40 shadow-md">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF4F0] dark:bg-white/5 border border-[#FF6B4A]/25 text-[10px] font-mono font-bold text-[#FF6B4A] tracking-wider uppercase">
                <Sparkles className="w-3 h-3" />
                <span>{founder.role}</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0D1B2A] dark:text-white">
                {founder.name}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
              {founder.bio}
            </p>
          </div>
        </div>
      )}

      {/* Core Team Members Grid (3 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {members.map((member) => (
          <div
            key={member.id || member.name}
            className="p-6 rounded-3xl bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 shadow-xs flex flex-col justify-between space-y-4 text-center hover:border-[#FF6B4A]/50 hover:shadow-md transition-all group"
          >
            <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-[#EBECEF] dark:border-white/10 shadow-sm shrink-0">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center gap-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#F8F9FA] dark:bg-white/5 border border-[#EBECEF] dark:border-white/10 text-[10px] font-mono font-bold text-[#FF6B4A] tracking-wider uppercase">
                  {member.role}
                </span>
              </div>

              <h3 className="text-lg font-bold font-display text-[#0D1B2A] dark:text-white group-hover:text-[#FF6B4A] transition-colors">
                {member.name}
              </h3>
            </div>

            <p className="text-xs text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
