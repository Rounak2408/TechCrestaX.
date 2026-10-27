import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';
import { companyData } from '../../data/companyData';
import Reveal from '../motion/Reveal';

export default function FinalCTA() {
  return (
    <section 
      className="py-16 sm:py-20 md:py-24 bg-[#F8F9FA] dark:bg-[#070A0F] relative overflow-hidden transition-colors select-none"
      aria-label="Final Call to Action"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <Reveal>
          <div className="p-8 sm:p-16 rounded-3xl bg-[#0D1B2A] border border-white/10 shadow-2xl space-y-6 relative overflow-hidden text-white">
            
            {/* Ambient Coral & Amber Gradients */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B4A]/15 rounded-full blur-3xl pointer-events-none -z-0" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFB627]/10 rounded-full blur-3xl pointer-events-none -z-0" />

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-[#FFB627]">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="font-mono tracking-wider uppercase text-[11px]">LET'S BUILD SOMETHING GREAT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight leading-tight max-w-2xl mx-auto">
                Ready to Build a Website That Drives Real Growth?
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
                Let's discuss your requirements, explore high-impact architectures, and craft an experience that turns visitors into revenue.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 pl-7 pr-2 py-3 rounded-full bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] hover:from-[#FF7C42] hover:to-[#FFA700] text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-[#FF6B4A]/30 hover:shadow-2xl hover:shadow-[#FF6B4A]/40 hover:-translate-y-0.5 cursor-pointer group"
                >
                  <span>Start a Project</span>
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#FF6B4A] transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <a
                  href={companyData.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/15 font-bold text-sm sm:text-base button-press-scale shadow-xs cursor-pointer group transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#8FC658]" />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>

              {/* Reassurance points */}
              <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8FC658]" />
                  <span>Transparent Itemized Scope</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8FC658]" />
                  <span>1 Year Free Maintenance</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8FC658]" />
                  <span>100% Code Ownership</span>
                </span>
              </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
