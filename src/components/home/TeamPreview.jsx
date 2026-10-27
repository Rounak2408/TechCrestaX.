import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users2, Sparkles, CheckCircle2 } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function TeamPreview() {
  const verifiedMembers = (companyData.team || []).filter(m => m.isVerified);

  return (
    <section 
      id="team-preview" 
      className="py-16 sm:py-20 bg-[#FFF9F6] dark:bg-[#0B0E14] border-t border-[#F0E7E2] dark:border-white/10 select-none transition-colors"
      aria-label="TechCrestaX Team Preview"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E9] dark:bg-[#121824] border border-[#FCD5C8] dark:border-white/10 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF572F] animate-pulse" />
              <span className="uppercase tracking-widest text-[10px] font-mono text-[#555555] dark:text-[#94A3B8]">
                OUR TEAM
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#151515] dark:text-white tracking-tight">
              Meet Our Team
            </h2>
            <p className="text-sm sm:text-base text-[#555555] dark:text-[#94A3B8] leading-relaxed">
              Meet the people behind TechCrestaX's digital experiences.
            </p>
          </div>

          <Link
            to="/about#team"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-[#121824] hover:bg-[#FFF0E9] dark:hover:bg-[#1A2230] border border-[#F0E7E2] dark:border-white/10 text-xs sm:text-sm font-bold text-[#151515] dark:text-white transition-all shadow-xs hover:border-[#FF572F]/50 shrink-0 self-start md:self-auto group"
          >
            <span>Meet the Team</span>
            <ArrowRight className="w-4 h-4 text-[#FF572F] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Verified Core Team Members Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {verifiedMembers.map((member) => (
            <div
              key={member.id}
              className="p-6 rounded-3xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 shadow-xs flex flex-col justify-between space-y-4 text-center hover:border-[#FF572F]/40 hover:shadow-md transition-all group"
            >
              <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-[#F0E7E2] dark:border-white/10 shadow-sm shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <div className="space-y-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FFF9F6] dark:bg-[#1A2230] border border-[#F0E7E2] dark:border-white/10 text-[10px] font-mono font-bold text-[#FF572F] tracking-wider uppercase">
                  {member.role}
                </span>
                <h3 className="text-base sm:text-lg font-bold font-display text-[#151515] dark:text-white">
                  {member.name}
                </h3>
              </div>

              <p className="text-xs text-[#555555] dark:text-[#94A3B8] leading-relaxed line-clamp-3">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
