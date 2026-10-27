import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { companyData } from '../../data/companyData';
import Reveal from '../motion/Reveal';

export default function TeamPreview() {
  const verifiedMembers = (companyData.team || []).filter(m => m.isVerified);

  return (
    <section 
      id="team-preview" 
      className="py-16 sm:py-20 bg-white dark:bg-[#070A0F] border-b border-[#EBECEF] dark:border-white/10 select-none transition-colors"
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
                  OUR STUDIO TALENT
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#0D1B2A] dark:text-white tracking-tight">
                Meet the Team
              </h2>
              <p className="text-sm sm:text-base text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
                The designers, architects, and frontend developers building performance-driven digital platforms.
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

        {/* 4 Verified Core Team Members Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {verifiedMembers.map((member, idx) => (
            <Reveal key={member.id} delay={idx * 80} className="h-full">
              <div
                className="h-full p-6 rounded-3xl bg-[#F8F9FA] dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 shadow-xs flex flex-col justify-between space-y-4 text-center hover:border-[#FF6B4A]/50 card-hover-lift group transition-all"
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
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-white dark:bg-white/5 border border-[#EBECEF] dark:border-white/10 text-[10px] font-mono font-bold text-[#FF6B4A] tracking-wider uppercase">
                    {member.role}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-display text-[#0D1B2A] dark:text-white group-hover:text-[#FF6B4A] transition-colors">
                    {member.name}
                  </h3>
                </div>

                <p className="text-xs text-[#4C5258] dark:text-[#94A3B8] leading-relaxed line-clamp-3">
                  {member.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
