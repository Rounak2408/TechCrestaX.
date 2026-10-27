import React from 'react';
import { 
  Scale, 
  Sun, 
  Gem, 
  Compass, 
  UtensilsCrossed, 
  Sprout, 
  Stethoscope, 
  Sparkles, 
  Activity,
  CheckCircle,
} from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function ClientTrust() {
  const verifiedProjects = [
    {
      name: "Sahyog Sagar",
      domain: "sahyogsagar.in",
      category: "Restaurant & Local SEO",
      liveUrl: "https://sahyogsagar.in/",
      icon: UtensilsCrossed,
      iconBg: "bg-amber-500/10 dark:bg-amber-500/15",
      iconColor: "text-amber-600 dark:text-amber-400",
      iconBorder: "border-amber-500/25 dark:border-amber-500/30"
    },
    {
      name: "Law & Legal Bureau",
      domain: "lawandlegalbureau.com",
      category: "Advocate & Legal Practice",
      liveUrl: "https://lawandlegalbureau.com/",
      icon: Scale,
      iconBg: "bg-indigo-500/10 dark:bg-indigo-500/15",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      iconBorder: "border-indigo-500/25 dark:border-indigo-500/30"
    },
    {
      name: "YOG4YOU",
      domain: "yog4you.org",
      category: "Yoga & Wellness Platform",
      liveUrl: "https://yog4you.org/",
      icon: Activity,
      iconBg: "bg-purple-500/10 dark:bg-purple-500/15",
      iconColor: "text-purple-600 dark:text-purple-400",
      iconBorder: "border-purple-500/25 dark:border-purple-500/30"
    },
    {
      name: "Dew Drops Tourism",
      domain: "dewdropstourism.in",
      category: "Travel & Tourism Guide",
      liveUrl: "https://www.dewdropstourism.in/",
      icon: Compass,
      iconBg: "bg-sky-500/10 dark:bg-sky-500/15",
      iconColor: "text-sky-600 dark:text-sky-400",
      iconBorder: "border-sky-500/25 dark:border-sky-500/30"
    },
    {
      name: "The Fyoli Project",
      domain: "thefyoliproject.com",
      category: "Cultural Heritage Initiative",
      liveUrl: "https://www.thefyoliproject.com/",
      icon: Sun,
      iconBg: "bg-rose-500/10 dark:bg-rose-500/15",
      iconColor: "text-rose-600 dark:text-rose-400",
      iconBorder: "border-rose-500/25 dark:border-rose-500/30"
    },
    {
      name: "BLKMND",
      domain: "blkmndofficial.com",
      category: "Streetwear E-commerce",
      liveUrl: "https://www.blkmndofficial.com/",
      icon: Gem,
      iconBg: "bg-slate-500/10 dark:bg-slate-500/15",
      iconColor: "text-slate-700 dark:text-slate-200",
      iconBorder: "border-slate-500/25 dark:border-slate-500/40"
    },
    {
      name: "Agrigen Seeds & Biotech",
      domain: "agriqen.com",
      category: "Agriculture & Bio Products",
      liveUrl: "https://www.agriqen.com/",
      icon: Sprout,
      iconBg: "bg-emerald-500/10 dark:bg-emerald-500/15",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      iconBorder: "border-emerald-500/25 dark:border-emerald-500/30"
    },
    {
      name: "Scalpel.in",
      domain: "scalpel.in",
      category: "Doctor Appointment Platform",
      liveUrl: "https://www.scalpel.in/",
      icon: Stethoscope,
      iconBg: "bg-teal-500/10 dark:bg-teal-500/15",
      iconColor: "text-teal-600 dark:text-teal-400",
      iconBorder: "border-teal-500/25 dark:border-teal-500/30"
    },
    {
      name: "Divine Mane Naturals",
      domain: "divinemanenaturals.com",
      category: "Organic Haircare Store",
      liveUrl: "https://divinemanenaturals.com/",
      icon: Sparkles,
      iconBg: "bg-orange-500/10 dark:bg-orange-500/15",
      iconColor: "text-orange-600 dark:text-orange-400",
      iconBorder: "border-orange-500/25 dark:border-orange-500/30"
    }
  ];

  return (
    <section 
      className="py-10 bg-[#F8F9FA] dark:bg-[#070A0F] border-b border-[#EBECEF] dark:border-white/10 relative overflow-hidden select-none transition-colors"
      aria-label="Authentic Client Projects and Deliveries"
    >
      {/* Top Header Label Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#8FC658] animate-pulse shrink-0" />
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#0D1B2A] dark:text-slate-300 font-bold">
            AUTHENTIC CLIENT PROJECTS &amp; OFFICIAL DELIVERIES
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-[#4C5258] dark:text-slate-400">
          <span className="hidden sm:inline">Verified Web Platforms Built by TechCrestaX</span>
          <a
            href={companyData.contact.googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF6B4A] transition-colors inline-flex items-center gap-1 text-[11px] text-[#4C5258] dark:text-slate-300"
            title="Google Verified Business Profile"
          >
            <CheckCircle className="w-3.5 h-3.5 text-[#8FC658]" />
            <span>Google Verified</span>
          </a>
        </div>
      </div>

      {/* Marquee Track with gradient fade masks on both sides */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F8F9FA] dark:from-[#070A0F] to-transparent z-10 transition-colors" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F8F9FA] dark:from-[#070A0F] to-transparent z-10 transition-colors" />

        {/* Continuous marquee */}
        <div className="animate-marquee flex items-center gap-4 py-1.5 px-4">
          {[...verifiedProjects, ...verifiedProjects].map((project, idx) => {
            const IconComponent = project.icon;
            return (
              <a
                key={idx}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 hover:border-[#FF6B4A]/50 transition-all shadow-xs hover:shadow-md shrink-0 group select-none hover:-translate-y-0.5"
                title={`Visit ${project.name} (${project.domain})`}
              >
                {/* Icon Container with tinted background and border */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${project.iconBg} ${project.iconColor} ${project.iconBorder} border`}>
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Text info */}
                <div className="flex flex-col min-w-0 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#0D1B2A] dark:text-white tracking-tight group-hover:text-[#FF6B4A] transition-colors truncate">
                      {project.name}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono font-medium text-emerald-600 dark:text-emerald-400 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8FC658] animate-pulse" />
                      <span>Live</span>
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-[#4C5258] dark:text-slate-400 truncate max-w-[210px] mt-0.5 flex items-center gap-1">
                    <span>{project.domain}</span>
                    <span className="text-slate-300 dark:text-slate-600">•</span>
                    <span className="truncate">{project.category}</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
