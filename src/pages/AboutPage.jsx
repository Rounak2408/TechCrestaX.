import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Sparkles,
  Rocket,
  Lightbulb,
  Monitor,
  ShieldCheck,
  Eye,
  Star,
  TrendingUp,
  Quote,
  Calendar,
  Milestone,
  Users2,
  ArrowUpRight
} from 'lucide-react';
import SEO from '../components/seo/SEO';
import { organizationSchema, createBreadcrumbSchema } from '../data/seoSchemas';
import TeamSection from '../components/team/TeamSection';
import Reveal from '../components/motion/Reveal';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      createBreadcrumbSchema([
        { label: 'Home', to: '/' },
        { label: 'About TechCrestaX' }
      ]),
      {
        "@type": "AboutPage",
        "@id": "https://www.techcrestax.com/about#webpage",
        "url": "https://www.techcrestax.com/about",
        "name": "About TechCrestaX — Crafting Digital Success Stories",
        "description": "Founded in January 2026, TechCrestaX is a passionate team of developers, designers, and strategists dedicated to building websites and digital experiences that help businesses grow.",
        "mainEntity": organizationSchema
      }
    ]
  };

  const keyStats = [
    { value: "2026", label: "Founded" },
    { value: "30+", label: "Projects Delivered" },
    { value: "25+", label: "Happy Clients" },
    { value: "8", label: "Team Members" },
  ];

  const journeyMilestones = [
    {
      period: "January 2026",
      title: "TechCrestaX Was Born",
      description: "Started with a mission to provide high-performance websites and digital solutions to ambitious businesses.",
      icon: Calendar,
      color: "from-[#FF6B4A] to-[#FFB627]",
    },
    {
      period: "First Milestone",
      title: "First Clients & Deliveries",
      description: "Successfully delivered bespoke platforms for startups, doctors, and local businesses, building trust through quality work.",
      icon: Milestone,
      color: "from-blue-500 to-cyan-500",
    },
    {
      period: "Today",
      title: "Expanding Studio",
      description: "A team of developers, designers and strategists working together to create impactful digital experiences.",
      icon: Users2,
      color: "from-[#8FC658] to-emerald-600",
    },
  ];

  const whyChooseUsCards = [
    {
      title: "Fast Delivery",
      description: "Efficient agile sprints with verified milestone previews and on-time launches.",
      icon: Rocket,
      iconColor: "text-[#FFB627]",
      iconBg: "bg-amber-500/10 dark:bg-amber-500/15 border-amber-500/25",
    },
    {
      title: "Creative Strategy",
      description: "Every layout is engineered with conversion architecture and business goals.",
      icon: Lightbulb,
      iconColor: "text-[#FF6B4A]",
      iconBg: "bg-[#FFF4F0] dark:bg-white/5 border-[#FF6B4A]/25",
    },
    {
      title: "Modern Stack",
      description: "React, Tailwind, Node.js, technical SEO, and scalable cloud-ready architecture.",
      icon: Monitor,
      iconColor: "text-sky-500 dark:text-sky-400",
      iconBg: "bg-sky-500/10 dark:bg-sky-500/15 border-sky-500/25",
    },
    {
      title: "Long-Term Support",
      description: "1 full year of inclusive free maintenance and direct WhatsApp developer access.",
      icon: ShieldCheck,
      iconColor: "text-[#8FC658]",
      iconBg: "bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-500/25",
    },
  ];

  const principles = [
    {
      title: "Innovation",
      description: "We embrace modern technologies and creative thinking to build digital experiences that stand out and convert.",
      icon: Sparkles,
      iconColor: "text-[#FF6B4A]",
      iconBg: "bg-[#FFF4F0] dark:bg-white/5 border-[#FF6B4A]/25",
    },
    {
      title: "Transparency",
      description: "Clear communication, honest timelines, itemized estimates, and zero hidden billing from start to finish.",
      icon: Eye,
      iconColor: "text-indigo-500 dark:text-indigo-400",
      iconBg: "bg-indigo-500/10 dark:bg-indigo-500/15 border-indigo-500/25",
    },
    {
      title: "Craftsmanship",
      description: "Every website is engineered with precision, sub-second performance, and long-term maintainability.",
      icon: Star,
      iconColor: "text-[#FFB627]",
      iconBg: "bg-amber-500/10 dark:bg-amber-500/15 border-amber-500/25",
    },
    {
      title: "Commercial Growth",
      description: "Your business revenue is the ultimate metric. We build platforms that turn visitors into paying customers.",
      icon: TrendingUp,
      iconColor: "text-[#8FC658]",
      iconBg: "bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-500/25",
    },
  ];

  return (
    <div className="pt-8 sm:pt-12 pb-20 min-h-screen bg-[#F8F9FA] dark:bg-[#070A0F] transition-colors select-none">
      <SEO
        title="About Us — Crafting Digital Success Stories | TechCrestaX"
        description="Founded in January 2026, TechCrestaX is a passionate team of developers, designers, and strategists dedicated to building websites and digital experiences that help businesses grow."
        keywords={[
          "about TechCrestaX",
          "TechCrestaX story",
          "TechCrestaX journey",
          "digital engineering studio",
          "web design studio Rajkot Gujarat"
        ]}
        canonical="https://www.techcrestax.com/about"
        schema={aboutSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        
        {/* ====================================================
            1. HERO SECTION & STATS STRIP
           ==================================================== */}
        <div className="relative pt-4 sm:pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4F0] dark:bg-[#0D1420] border border-[#FF6B4A]/25 text-xs font-semibold text-[#FF6B4A] shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B4A] animate-pulse" />
                  <span className="uppercase tracking-widest text-[11px] font-mono font-bold">
                    ABOUT TECHCRESTAX
                  </span>
                </div>
              </Reveal>

              <Reveal delay={60}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#0D1B2A] dark:text-white leading-[1.12]">
                  Crafting Digital <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-[#FF6B4A] via-[#FF7C42] to-[#FFB627] bg-clip-text text-transparent">
                    Success Stories.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={120}>
                <p className="text-base sm:text-lg text-[#4C5258] dark:text-[#94A3B8] leading-relaxed max-w-xl">
                  Founded in January 2026, TechCrestaX is a dedicated engineering studio combining conversion UI/UX design, clean React development, and dependable post-launch support to help businesses scale online.
                </p>
              </Reveal>

              {/* CTAs */}
              <Reveal delay={160}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-3 pl-6 pr-2 py-2.5 rounded-full bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] hover:from-[#FF7C42] hover:to-[#FFA700] text-white font-bold text-sm shadow-md shadow-[#FF6B4A]/25 button-press-scale transition-all cursor-pointer group"
                  >
                    <span>Start Your Project</span>
                    <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#FF6B4A] transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>

                  <Link
                    to="/work"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0D1B2A] hover:bg-[#162234] text-white font-bold text-sm border border-slate-700/60 button-press-scale transition-all shadow-md group"
                  >
                    <span>Explore Portfolio</span>
                    <ArrowUpRight className="w-4 h-4 text-[#FFB627] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </Reveal>

              {/* 4 Stats Cards Strip */}
              <Reveal delay={200}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6">
                  {keyStats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 shadow-2xs text-center card-hover-lift"
                    >
                      <div className="text-2xl sm:text-3xl font-black font-display text-[#0D1B2A] dark:text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs font-mono text-[#4C5258] dark:text-[#94A3B8] mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right Column: Abstract Glowing Node Rings Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <Reveal delay={100}>
                <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#FF6B4A]/10 rounded-full blur-3xl" />

                  {/* Concentric Node Rings */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute w-64 h-64 sm:w-76 sm:h-76 rounded-full border border-dashed border-[#FF6B4A]/30 dark:border-white/15 animate-[spin_60s_linear_infinite]" />
                    <div className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-[#FF6B4A]/40 dark:border-white/20" />
                    
                    {/* Floating Circles */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-2 border-[#FF6B4A]/60 dark:border-white/40 bg-white/60 dark:bg-[#0D1420]/60 backdrop-blur-xs flex items-center justify-center shadow-md animate-float-1">
                      <div className="w-4 h-4 rounded-full bg-[#FF6B4A]" />
                    </div>
                    <div className="absolute bottom-6 left-10 w-10 h-10 rounded-full border-2 border-sky-400/60 dark:border-sky-400/40 bg-white/60 dark:bg-[#0D1420]/60 backdrop-blur-xs flex items-center justify-center shadow-md animate-float-2">
                      <div className="w-3 h-3 rounded-full bg-sky-400" />
                    </div>
                    <div className="absolute top-20 right-4 w-14 h-14 rounded-full border-2 border-[#FFB627]/60 dark:border-amber-400/40 bg-white/60 dark:bg-[#0D1420]/60 backdrop-blur-xs flex items-center justify-center shadow-md animate-float-1">
                      <div className="w-5 h-5 rounded-full bg-[#FFB627]" />
                    </div>
                    <div className="absolute bottom-10 right-10 w-11 h-11 rounded-full border-2 border-[#8FC658]/60 dark:border-emerald-400/40 bg-white/60 dark:bg-[#0D1420]/60 backdrop-blur-xs flex items-center justify-center shadow-md animate-float-2">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#8FC658]" />
                    </div>

                    {/* Center Emblem */}
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white dark:bg-[#0D1420] border-2 border-[#FF6B4A] shadow-xl flex flex-col items-center justify-center text-center p-3 z-10">
                      <span className="text-[10px] font-mono text-[#FF6B4A] font-bold uppercase tracking-wider">EST. 2026</span>
                      <span className="text-base sm:text-lg font-black font-display text-[#0D1B2A] dark:text-white">Studio</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>

        {/* ====================================================
            2. OUR STORY & CRAFTING DIGITAL EXCELLENCE
           ==================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Milestones Checklist */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF4F0] dark:bg-[#0D1420] border border-[#FF6B4A]/25 text-xs font-semibold text-[#FF6B4A]">
                <span className="uppercase tracking-widest text-[11px] font-mono font-bold">OUR STORY</span>
              </div>
            </Reveal>

            <div className="space-y-4">
              <Reveal delay={60}>
                <div className="p-6 rounded-2xl bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 shadow-2xs space-y-1.5 card-hover-lift">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#FF6B4A] font-mono">
                    <span className="w-2 h-2 rounded-full bg-[#FF6B4A] animate-pulse" />
                    <span>Jan 2026</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
                    TechCrestaX was founded with a vision to create high-performing, commercial digital platforms.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="p-6 rounded-2xl bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 shadow-2xs space-y-1.5 card-hover-lift">
                  <div className="text-2xl font-black font-display text-[#0D1B2A] dark:text-white">
                    30+
                  </div>
                  <p className="text-xs sm:text-sm text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
                    Successful projects delivered across healthcare, e-commerce, legal, and hospitality.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={180}>
                <div className="p-6 rounded-2xl bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 shadow-2xs space-y-1.5 card-hover-lift">
                  <div className="text-2xl font-black font-display text-[#0D1B2A] dark:text-white">
                    100%
                  </div>
                  <p className="text-xs sm:text-sm text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
                    Code and asset ownership transferred directly to clients on launch.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Column: Crafting Digital Excellence Card */}
          <Reveal delay={100} className="lg:col-span-8 h-full">
            <div className="h-full p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 shadow-xs flex flex-col justify-between space-y-8 card-hover-lift">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#0D1B2A] dark:text-white tracking-tight">
                  Crafting Digital <span className="bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] bg-clip-text text-transparent">Excellence.</span>
                </h2>

                <p className="text-base text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
                  TechCrestaX began its journey in <strong>January 2026</strong> with a simple belief — businesses deserve technology that creates real commercial growth, not just superficial templates.
                </p>

                <p className="text-base text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
                  We specialize in custom websites, web applications, branding, SEO, and digital experiences that combine strategy, creative precision, and modern engineering practices.
                </p>

                <p className="text-base text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
                  Every project we build is driven by performance, clean architecture, and long-term partnerships, helping brands establish a dominant digital footprint.
                </p>
              </div>

              {/* 4 Pillars Badges */}
              <div className="flex flex-wrap gap-2.5 pt-6 border-t border-slate-100 dark:border-white/10">
                {['Innovation', 'Modern Technology', '100% Code Ownership', '1 Year Free Maintenance'].map((pill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-[#FFF4F0] dark:bg-white/5 text-[#FF6B4A] dark:text-white border border-[#FF6B4A]/25 text-xs font-semibold"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

        </div>

        {/* ====================================================
            3. OUR TEAM ("Meet Our Team")
           ==================================================== */}
        <Reveal>
          <TeamSection />
        </Reveal>

        {/* ====================================================
            4. TEAM QUOTE BANNER
           ==================================================== */}
        <Reveal delay={80}>
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0D1B2A] border border-white/10 shadow-xl text-center relative overflow-hidden card-hover-lift text-white">
            <Quote className="w-10 h-10 text-[#FF6B4A]/40 mx-auto mb-4" />
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-extrabold font-display text-white max-w-2xl mx-auto leading-snug">
              "Great products aren't built by bloated agencies. They're crafted by passionate teams that treat your business as their own."
            </blockquote>
            <div className="mt-4 text-xs font-mono tracking-widest text-[#FFB627] font-bold uppercase">
              TECHCRESTAX CORE STUDIO
            </div>
          </div>
        </Reveal>

        {/* ====================================================
            5. OUR JOURNEY (Timeline)
           ==================================================== */}
        <div className="space-y-12">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF4F0] dark:bg-[#0D1420] border border-[#FF6B4A]/25 text-xs font-semibold text-[#FF6B4A]">
                <span className="uppercase tracking-widest text-[11px] font-mono font-bold">OUR JOURNEY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#0D1B2A] dark:text-white tracking-tight">
                From Vision <span className="bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] bg-clip-text text-transparent">To Growing Agency</span>
              </h2>
              <p className="text-sm sm:text-base text-[#4C5258] dark:text-[#94A3B8]">
                How TechCrestaX started in January 2026 and continues building impactful client deliveries.
              </p>
            </div>
          </Reveal>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#FF6B4A] via-[#FFB627] to-[#8FC658] hidden sm:block opacity-40" />

            <div className="space-y-8 sm:space-y-12">
              {journeyMilestones.map((item, idx) => {
                const IconComp = item.icon;
                const isEven = idx % 2 === 0;

                return (
                  <Reveal key={idx} delay={idx * 100}>
                    <div
                      className={`relative flex flex-col sm:flex-row items-center gap-6 sm:gap-10 ${
                        isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                      }`}
                    >
                      <div className={`w-full sm:w-1/2 ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                        <div className="p-6 rounded-2xl bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 shadow-xs hover:border-[#FF6B4A]/50 card-hover-lift transition-all space-y-2">
                          <span className="inline-block px-3 py-1 rounded-full bg-[#FFF4F0] dark:bg-[#0D1420] border border-[#FF6B4A]/25 text-xs font-mono font-bold text-[#FF6B4A]">
                            {item.period}
                          </span>
                          <h3 className="text-lg font-bold font-display text-[#0D1B2A] dark:text-white">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="relative z-10 w-12 h-12 rounded-full bg-white dark:bg-[#0D1420] border-2 border-[#FF6B4A] shadow-md flex items-center justify-center shrink-0 text-[#FF6B4A] hover:scale-110 transition-transform duration-300">
                        <IconComp className="w-5 h-5" />
                      </div>

                      <div className="hidden sm:block sm:w-1/2" />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* ====================================================
            6. WHY TECHCRESTAX
           ==================================================== */}
        <div className="space-y-12">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF4F0] dark:bg-[#0D1420] border border-[#FF6B4A]/25 text-xs font-semibold text-[#FF6B4A]">
                <span className="uppercase tracking-widest text-[11px] font-mono font-bold">WHY TECHCRESTAX</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#0D1B2A] dark:text-white tracking-tight">
                More Than <span className="bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] bg-clip-text text-transparent">Just A Development Company</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <Reveal key={idx} delay={idx * 80} className="h-full">
                  <div
                    className="h-full p-6 rounded-3xl bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 shadow-xs hover:border-[#FF6B4A]/50 card-hover-lift transition-all space-y-3"
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shrink-0 ${card.iconBg} ${card.iconColor}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold font-display text-[#0D1B2A] dark:text-white">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* ====================================================
            7. OUR VALUES
           ==================================================== */}
        <div className="space-y-12">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF4F0] dark:bg-[#0D1420] border border-[#FF6B4A]/25 text-xs font-semibold text-[#FF6B4A]">
                <span className="uppercase tracking-widest text-[11px] font-mono font-bold">OUR VALUES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#0D1B2A] dark:text-white tracking-tight">
                The Principles That <span className="bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] bg-clip-text text-transparent">Drive Every Project</span>
              </h2>
              <p className="text-sm sm:text-base text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
                Every decision we make is guided by creativity, transparency, innovation and a commitment to helping businesses succeed.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle, idx) => {
              const IconComp = principle.icon;
              return (
                <Reveal key={idx} delay={idx * 80} className="h-full">
                  <div
                    className="h-full p-8 rounded-3xl bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 shadow-xs hover:border-[#FF6B4A]/50 card-hover-lift transition-all flex items-start gap-5 group"
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shrink-0 ${principle.iconBg} ${principle.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-xl font-bold font-display text-[#0D1B2A] dark:text-white group-hover:text-[#FF6B4A] transition-colors">
                        {principle.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* ====================================================
            8. CALL TO ACTION (CTA BOX)
           ==================================================== */}
        <Reveal delay={80}>
          <div className="p-8 sm:p-14 rounded-3xl bg-[#0D1B2A] border border-white/10 shadow-2xl text-center space-y-6 relative overflow-hidden text-white">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF6B4A]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
              <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-bold text-[#FFB627] uppercase tracking-wider">
                LET'S BUILD TOGETHER
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
                Ready To Take <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] bg-clip-text text-transparent">Your Business Online?</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Whether you need a premium website, a complete brand identity or digital solutions that help your business grow, TechCrestaX is ready to bring your ideas to life.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 pl-7 pr-2 py-2.5 rounded-full bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] hover:from-[#FF7C42] hover:to-[#FFA700] text-white font-bold text-sm shadow-md shadow-[#FF6B4A]/25 button-press-scale transition-all cursor-pointer group"
                >
                  <span>Start Your Project</span>
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#FF6B4A] transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link
                  to="/work"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/15 button-press-scale transition-all"
                >
                  <span>View Portfolio</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
