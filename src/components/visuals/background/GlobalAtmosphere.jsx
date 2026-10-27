import React from 'react';

/**
 * GlobalAtmosphere
 * Minimal, clean atmospheric layer that respects Alpha Agency blueprint:
 * 1. Clean crisp surface base in light mode
 * 2. Deep studio slate (#070A0F) in dark mode
 * Free of heavy particle systems or CPU-draining loops.
 */
export default function GlobalAtmosphere() {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Light theme subtle warm radial glow */}
      <div 
        className="dark:hidden absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[140px] opacity-40 bg-[#FFF4F0]"
      />
      <div 
        className="dark:hidden absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full blur-[140px] opacity-30 bg-[#FFF4F0]"
      />

      {/* Dark theme subtle ambient glow */}
      <div 
        className="hidden dark:block absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[140px] opacity-10 bg-[#FF6B4A]"
      />
      <div 
        className="hidden dark:block absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full blur-[140px] opacity-5 bg-[#FFB627]"
      />
    </div>
  );
}
