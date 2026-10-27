import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function ClosingCTA() {
  return (
    <section 
      className="py-16 sm:py-20 relative overflow-hidden transition-colors"
      aria-label="Closing Call to Action"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="p-8 sm:p-14 rounded-3xl bg-[#0D1B2A] text-white border border-white/10 shadow-2xl space-y-6 relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#FF6B4A]/20 to-[#FFB627]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#FF6B4A]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-[#FFB627]">
              <span className="w-2 h-2 rounded-full bg-[#FF6B4A] animate-pulse" />
              <span className="uppercase tracking-widest text-[11px] font-mono">LET'S BUILD SOMETHING GREAT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white tracking-tight">
              Ready to Move Your <span className="bg-gradient-to-r from-[#FF6B4A] via-[#FF7C42] to-[#FFB627] bg-clip-text text-transparent">Business Forward?</span>
            </h2>

            <p className="text-base sm:text-lg text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
              Strategic design, modern React engineering, and 1 full year of free maintenance included. Let's discuss your vision.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                to="/contact"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6B4A] via-[#FF7C42] to-[#FFB627] hover:opacity-95 text-white font-bold text-sm sm:text-base shadow-lg shadow-[#FF6B4A]/25 transition-all cursor-pointer"
              >
                <span>Start a Project</span>
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </Link>

              <a
                href={companyData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-emerald-500/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 font-bold text-sm sm:text-base transition-all shadow-xs"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#94A3B8]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8FC658]" />
                <span className="text-white">100% Code Ownership</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8FC658]" />
                <span className="text-white">1 Year Free Maintenance</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8FC658]" />
                <span className="text-white">Direct WhatsApp Support</span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
