import React from 'react';
import { MessageSquare } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function FloatingWhatsAppPill() {
  return (
    <aside aria-label="Direct Support" className="fixed bottom-6 left-6 z-40 select-none">
      <a
        href={companyData.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-emerald-400/30 group"
        aria-label="Direct Message TechCrestaX on WhatsApp"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
        </span>
        <MessageSquare className="w-4 h-4 fill-current shrink-0" />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </aside>
  );
}
