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
        <span className="text-xs font-mono uppercase tracking-widest text-[#FF572F] font-bold">
          OUR TEAM
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#151515] dark:text-white tracking-tight">
          Meet Our Team
        </h2>
        <p className="text-sm sm:text-base text-[#555555] dark:text-[#94A3B8] leading-relaxed">
          Meet the people behind TechCrestaX's digital experiences.
        </p>
      </div>

      {/* Founder Spotlight Card */}
      {founder && (
        <div className="max-w-md mx-auto">
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 shadow-lg text-center space-y-4 hover:border-[#FF572F]/50 transition-all">
            <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border-2 border-[#FF572F]/40 shadow-md">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-1.5">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FFF0E9] dark:bg-[#FF572F]/15 border border-[#FCD5C8] dark:border-[#FF572F]/30 text-[10px] font-mono font-bold text-[#FF572F] tracking-wider uppercase">
                <Sparkles className="w-3 h-3" />
                <span>{founder.role}</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#151515] dark:text-white">
                {founder.name}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#555555] dark:text-[#94A3B8] leading-relaxed">
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
            className="p-6 rounded-3xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 shadow-xs flex flex-col justify-between space-y-4 text-center hover:border-[#FF572F]/40 hover:shadow-md transition-all group"
          >
            {/* Real Member Profile Image */}
            <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-[#F0E7E2] dark:border-white/10 shadow-sm shrink-0">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            {/* Designation & Name */}
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FFF9F6] dark:bg-[#1A2230] border border-[#F0E7E2] dark:border-white/10 text-[10px] font-mono font-bold text-[#FF572F] tracking-wider uppercase">
                  {member.role}
                </span>
              </div>

              <h3 className="text-lg font-bold font-display text-[#151515] dark:text-white">
                {member.name}
              </h3>
            </div>

            {/* Bio description */}
            <p className="text-xs text-[#555555] dark:text-[#94A3B8] leading-relaxed">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
