import React from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '../../data/companyData';

function PhotoCard({ member, className = "" }) {
  return (
    <div 
      className={`w-full aspect-[4/5] rounded-[22px] sm:rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800 border border-black/[0.04] dark:border-white/10 shadow-xs hover:shadow-lg transition-all duration-300 group cursor-pointer relative ${className}`}
      tabIndex={0}
      role="region"
      aria-label={`${member.name} portrait`}
    >
      <img
        src={member.image}
        alt={`${member.name} — ${member.role}`}
        className="w-full h-full object-cover object-[center_20%] group-hover:scale-[1.04] transition-transform duration-300 ease-out"
        loading="lazy"
      />
      <div 
        className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}

function TextCard({ member, className = "" }) {
  return (
    <div 
      className={`w-full p-6 sm:p-7 rounded-[22px] sm:rounded-3xl bg-white dark:bg-[#121B2A] border border-black/[0.04] dark:border-white/10 shadow-xs hover:border-[#FF6B4A]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group min-h-[180px] sm:min-h-[195px] lg:h-[220px] cursor-pointer ${className}`}
      tabIndex={0}
      role="region"
      aria-label={`${member.name} biography`}
    >
      <div className="text-[11px] font-mono tracking-wider text-slate-500 dark:text-slate-400 font-bold uppercase transition-colors duration-300 group-hover:text-[#FF6B4A]">
        [ {member.role} ]
      </div>

      <div className="space-y-2 mt-4 sm:mt-5">
        <h3 className="font-display font-extrabold text-base sm:text-lg text-[#0D1B2A] dark:text-white uppercase tracking-tight transition-colors duration-300 group-hover:text-[#FF6B4A]">
          {member.name}
        </h3>
        <p className="text-xs sm:text-[13px] text-[#4C5258] dark:text-slate-300 leading-relaxed">
          {member.bio}
        </p>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const teamList = companyData.team || [];
  const founder = teamList.find((m) => m.isLeader) || teamList[0];
  const techLead = teamList.find((m) => m.id === 'khushi-tiwari') || teamList[2] || teamList[1];
  const bizDev = teamList.find((m) => m.id === 'bharti-murdhariya') || teamList[1];
  const social = teamList.find((m) => m.id === 'satyajeet-kumar') || teamList[3];

  const columns = [
    { member: founder, isImageFirst: true },
    { member: techLead, isImageFirst: false },
    { member: bizDev, isImageFirst: true },
    { member: social, isImageFirst: false },
  ];

  return (
    <section 
      id="team" 
      className="p-6 sm:p-10 lg:p-12 xl:p-14 rounded-3xl bg-[#EEF0F3] dark:bg-[#0B111A] border border-[#E2E5E9] dark:border-white/10 select-none relative overflow-hidden space-y-10 sm:space-y-12"
      aria-label="Meet the minds behind TechCrestaX"
    >
      {/* Decorative Brand Accent Dot on the left */}
      <div 
        className="hidden lg:block absolute left-4 sm:left-5 lg:left-6 top-[60%] -translate-y-1/2 w-3 h-3 rounded-full bg-[#FF6B4A] shadow-xs shadow-[#FF6B4A]/50" 
        aria-hidden="true" 
      />

      {/* Top Meta Bar: [ THE TEAM ] and [ 02 ] */}
      <div className="flex items-center justify-between text-xs font-mono font-bold uppercase">
        <span className="text-slate-500 dark:text-slate-400 tracking-widest">
          [ THE TEAM ]
        </span>
        <span className="text-slate-400 dark:text-slate-500 tracking-wider">
          [ 02 ]
        </span>
      </div>

      {/* Main Heading Row & [ JOIN US ] Link */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-2">
        <div className="space-y-2 max-w-xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-[#0D1B2A] dark:text-white tracking-tight">
            Meet the minds.
          </h2>
          <p className="text-sm sm:text-base text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
            A small team of obsessive perfectionists behind TechCrestaX's client deliveries.
          </p>
        </div>

        <Link
          to="/contact"
          className="font-mono text-xs font-bold text-[#FF6B4A] hover:text-[#FF7C42] tracking-wider transition-colors inline-flex items-center gap-1 group self-start sm:self-auto shrink-0 pb-1"
          aria-label="Join our team - Contact us"
        >
          <span>[ JOIN US ]</span>
        </Link>
      </div>

      {/* 4-Column Asymmetric Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {columns.map((col, idx) => {
          if (!col.member) return null;
          return (
            <div key={col.member.id || idx} className="flex flex-col gap-5 sm:gap-6">
              {col.isImageFirst ? (
                <>
                  <PhotoCard member={col.member} />
                  <TextCard member={col.member} />
                </>
              ) : (
                <>
                  <TextCard member={col.member} className="order-2 md:order-1 lg:order-1" />
                  <PhotoCard member={col.member} className="order-1 md:order-2 lg:order-2" />
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

