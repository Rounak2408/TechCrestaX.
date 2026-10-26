import React from 'react';

/**
 * GlobalAtmosphere
 * Minimal, clean atmospheric layer that respects both:
 * 1. Warm cream/white base (#FFF9F6) in light mode
 * 2. Deep studio slate (#0B0E14) in dark mode
 * Free of heavy particle systems, spinning objects, or CPU-draining loops.
 */
export default function GlobalAtmosphere() {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Light theme subtle warm radial glow */}
      <div 
        className="dark:hidden absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[140px] opacity-40 bg-[#FFF0E9]"
      />
      <div 
        className="dark:hidden absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full blur-[140px] opacity-30 bg-[#FFF0E9]"
      />

      {/* Dark theme subtle ambient glow */}
      <div 
        className="hidden dark:block absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[140px] opacity-10 bg-[#FF572F]"
      />
      <div 
        className="hidden dark:block absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full blur-[140px] opacity-5 bg-[#FF572F]"
      />
    </div>
  );
}
