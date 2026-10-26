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
  Users2
} from 'lucide-react';
import SEO from '../components/seo/SEO';
import { organizationSchema, createBreadcrumbSchema } from '../data/seoSchemas';

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
    { value: "30+", label: "Projects" },
    { value: "15+", label: "Happy Clients" },
    { value: "5", label: "Team Members" },
  ];

  const teamMembers = [
    {
      name: "Rishu Thakur",
      role: "FOUNDER & CEO",
      image: "/team1.jpg",
      bio: "Passionate about creating premium digital products that combine clean design, scalable technology and meaningful user experiences.",
      isLeader: true,
    },
    {
      name: "Bharti Murdhariya",
      role: "BUSINESS DEVELOPMENT MANAGER",
      image: "/team4.jpg",
      bio: "Builds strong client relationships, identifies new business opportunities, and drives strategic partnerships for growth.",
    },
    {
      name: "Khushi Tiwari",
      role: "TECHNICAL LEAD",
      image: "/team3.jpg",
      bio: "Develops responsive, high-performance frontend applications with clean code, modern UX principles, and smooth performance across all devices.",
    },
    {
      name: "Satyajeet Kumar",
      role: "SOCIAL MEDIA MANAGER",
      image: "/team5.jpg",
      bio: "Drives digital growth through SEO, content strategy, social media marketing, and performance-driven campaigns that help brands reach the right audience.",
    },
  ];

  const journeyMilestones = [
    {
      period: "January 2026",
      title: "TechCrestaX Was Born",
      description: "Started with a mission to provide premium websites and digital solutions to ambitious businesses.",
      icon: Calendar,
      color: "from-orange-500 to-amber-500",
    },
    {
      period: "First Milestone",
      title: "First Clients & Projects",
      description: "Successfully delivered websites for startups and local businesses, building trust through quality work.",
      icon: Milestone,
      color: "from-blue-500 to-cyan-500",
    },
    {
      period: "Today",
      title: "Growing Team",
      description: "A team of developers, designers and strategists working together to create impactful digital experiences.",
      icon: Users2,
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const whyChooseUsCards = [
    {
      title: "Fast Delivery",
      description: "Efficient workflows with timely project completion.",
      icon: Rocket,
      iconColor: "text-amber-500 dark:text-amber-400",
      iconBg: "bg-amber-500/10 dark:bg-amber-500/15 border-amber-500/25",
    },
    {
      title: "Creative Ideas",
      description: "Every project is designed with innovation and business goals.",
      icon: Lightbulb,
      iconColor: "text-orange-500 dark:text-orange-400",
      iconBg: "bg-orange-500/10 dark:bg-orange-500/15 border-orange-500/25",
    },
    {
      title: "Modern Technology",
      description: "React, Node.js, Next.js, SEO and scalable architecture.",
      icon: Monitor,
      iconColor: "text-sky-500 dark:text-sky-400",
      iconBg: "bg-sky-500/10 dark:bg-sky-500/15 border-sky-500/25",
    },
    {
      title: "Long-Term Support",
      description: "We believe in partnerships, not one-time projects.",
      icon: ShieldCheck,
      iconColor: "text-emerald-500 dark:text-emerald-400",
      iconBg: "bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-500/25",
    },
  ];

  const principles = [
    {
      title: "Innovation",
      description: "We embrace modern technologies and creative thinking to build digital experiences that stand out.",
      icon: Sparkles,
      iconColor: "text-rose-500 dark:text-rose-400",
      iconBg: "bg-rose-500/10 dark:bg-rose-500/15 border-rose-500/25",
    },
    {
      title: "Transparency",
      description: "Clear communication, honest timelines and complete project visibility from start to finish.",
      icon: Eye,
      iconColor: "text-indigo-500 dark:text-indigo-400",
      iconBg: "bg-indigo-500/10 dark:bg-indigo-500/15 border-indigo-500/25",
    },
    {
      title: "Quality",
      description: "Every website is designed with precision, performance and long-term scalability in mind.",
      icon: Star,
      iconColor: "text-amber-500 dark:text-amber-400",
      iconBg: "bg-amber-500/10 dark:bg-amber-500/15 border-amber-500/25",
    },
    {
      title: "Growth",
      description: "Your success is our priority. We build solutions that help businesses grow confidently.",
      icon: TrendingUp,
      iconColor: "text-teal-500 dark:text-teal-400",
      iconBg: "bg-teal-500/10 dark:bg-teal-500/15 border-teal-500/25",
    },
  ];

  return (
    <div className="pt-8 sm:pt-10 pb-16 min-h-screen bg-[#FFF9F6] dark:bg-[#0B0E14] transition-colors select-none">
      <SEO
        title="About Us — Crafting Digital Success Stories | TechCrestaX"
        description="Founded in January 2026, TechCrestaX is a passionate team of developers, designers, and strategists dedicated to building websites and digital experiences that help businesses grow."
        keywords={[
          "about TechCrestaX",
          "TechCrestaX story",
          "TechCrestaX journey",
          "Rishu Thakur Founder CEO",
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 text-xs font-semibold text-[#FF572F] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#FF572F] animate-pulse" />
                <span className="uppercase tracking-widest text-[11px] font-mono">
                  ABOUT TECHCRESTAX
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#151515] dark:text-white leading-[1.12]">
                Crafting Digital <br className="hidden sm:block" />
                <span className="text-[#FF572F]">Success Stories</span>
              </h1>

              <p className="text-base sm:text-lg text-[#555555] dark:text-[#94A3B8] leading-relaxed max-w-xl">
                Founded in January 2026, TechCrestaX is a passionate team of developers, designers and strategists dedicated to building websites and digital experiences that help businesses grow.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FF572F] hover:bg-[#E94725] text-white font-bold text-sm shadow-md shadow-[#FF572F]/20 hover:shadow-[#FF572F]/35 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/work"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white dark:bg-[#121824] hover:bg-slate-50 dark:hover:bg-[#1A2230] border border-[#F0E7E2] dark:border-white/10 text-[#151515] dark:text-white font-bold text-sm transition-all hover:-translate-y-0.5 shadow-xs"
                >
                  <span>Explore Portfolio</span>
                </Link>
              </div>

              {/* 4 Stats Cards Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6">
                {keyStats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 shadow-2xs text-center"
                  >
                    <div className="text-2xl sm:text-3xl font-black font-display text-[#151515] dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs font-mono text-[#666666] dark:text-[#94A3B8] mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Abstract Glowing Node Rings Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center">
                {/* Ambient Glow */}
                <div className="absolute inset-0 bg-[#FF572F]/10 dark:bg-[#FF572F]/15 rounded-full blur-3xl" />

                {/* Concentric Node Rings */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute w-64 h-64 sm:w-76 sm:h-76 rounded-full border border-dashed border-[#FF572F]/30 dark:border-white/15 animate-[spin_60s_linear_infinite]" />
                  <div className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-[#FF572F]/40 dark:border-white/20" />
                  
                  {/* Floating Circles as in Reference */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-2 border-[#FF572F]/60 dark:border-white/40 bg-white/40 dark:bg-[#121824]/60 backdrop-blur-xs flex items-center justify-center shadow-md">
                    <div className="w-4 h-4 rounded-full bg-[#FF572F]" />
                  </div>
                  <div className="absolute bottom-6 left-10 w-10 h-10 rounded-full border-2 border-sky-400/60 dark:border-sky-400/40 bg-white/40 dark:bg-[#121824]/60 backdrop-blur-xs flex items-center justify-center shadow-md">
                    <div className="w-3 h-3 rounded-full bg-sky-400" />
                  </div>
                  <div className="absolute top-20 right-4 w-14 h-14 rounded-full border-2 border-indigo-400/60 dark:border-indigo-400/40 bg-white/40 dark:bg-[#121824]/60 backdrop-blur-xs flex items-center justify-center shadow-md">
                    <div className="w-5 h-5 rounded-full bg-indigo-500" />
                  </div>
                  <div className="absolute bottom-10 right-10 w-11 h-11 rounded-full border-2 border-emerald-400/60 dark:border-emerald-400/40 bg-white/40 dark:bg-[#121824]/60 backdrop-blur-xs flex items-center justify-center shadow-md">
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-400" />
                  </div>

                  {/* Center Emblem */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white dark:bg-[#121824] border-2 border-[#FF572F] shadow-xl flex flex-col items-center justify-center text-center p-3 z-10">
                    <span className="text-[10px] font-mono text-[#FF572F] font-bold uppercase tracking-wider">EST. 2026</span>
                    <span className="text-base sm:text-lg font-black font-display text-[#151515] dark:text-white">Studio</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ====================================================
            2. OUR STORY & CRAFTING DIGITAL EXCELLENCE
           ==================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Milestones Checklist */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF572F] font-bold">
              OUR STORY
            </span>

            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 shadow-2xs space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-bold text-[#FF572F] font-mono">
                  <span className="w-2 h-2 rounded-full bg-[#FF572F] animate-pulse" />
                  <span>Jan 2026</span>
                </div>
                <p className="text-xs sm:text-sm text-[#555555] dark:text-[#94A3B8] leading-relaxed">
                  TechCrestaX was founded with a vision to create impactful digital solutions.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 shadow-2xs space-y-1.5">
                <div className="text-2xl font-black font-display text-[#151515] dark:text-white">
                  20+
                </div>
                <p className="text-xs sm:text-sm text-[#555555] dark:text-[#94A3B8] leading-relaxed">
                  Successful projects delivered across multiple industries.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 shadow-2xs space-y-1.5">
                <div className="text-2xl font-black font-display text-[#151515] dark:text-white">
                  100%
                </div>
                <p className="text-xs sm:text-sm text-[#555555] dark:text-[#94A3B8] leading-relaxed">
                  Client-focused approach with quality at every step.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Crafting Digital Excellence Card */}
          <div className="lg:col-span-8 p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 shadow-xs flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#151515] dark:text-white tracking-tight">
                Crafting Digital <span className="text-[#FF572F]">Excellence.</span>
              </h2>

              <p className="text-base text-[#555555] dark:text-[#94A3B8] leading-relaxed">
                TechCrestaX began its journey in <strong>January 2026</strong> with a simple belief — businesses deserve technology that creates real growth, not just beautiful interfaces.
              </p>

              <p className="text-base text-[#555555] dark:text-[#94A3B8] leading-relaxed">
                We specialize in premium websites, branding, SEO, and digital experiences that combine strategy, creativity and modern development practices.
              </p>

              <p className="text-base text-[#555555] dark:text-[#94A3B8] leading-relaxed">
                Every project we build is driven by quality, innovation and long-term partnerships, helping brands establish a powerful digital presence.
              </p>
            </div>

            {/* 4 Pillars Badges */}
            <div className="flex flex-wrap gap-2.5 pt-4 border-t border-[#F0E7E2] dark:border-white/10">
              {['Innovation', 'Modern Technology', 'Client First', 'Long-Term Partnership'].map((pill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-[#FFF0E9] dark:bg-[#1A2230] text-[#FF572F] dark:text-white border border-[#FCD5C8] dark:border-white/10 text-xs font-semibold"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* ====================================================
            3. OUR TEAM ("Meet The Minds Behind TechCrestaX")
           ==================================================== */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF572F] font-bold">
              OUR TEAM
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#151515] dark:text-white tracking-tight">
              Meet The Minds <span className="text-[#FF572F]">Behind TechCrestaX</span>
            </h2>
            <p className="text-sm sm:text-base text-[#555555] dark:text-[#94A3B8] leading-relaxed">
              Designers, developers and strategists working together to build digital experiences that businesses love.
            </p>
          </div>

          {/* Founder Spotlight Card (Centered) */}
          <div className="max-w-md mx-auto">
            {teamMembers.filter(m => m.isLeader).map((founder) => (
              <div 
                key={founder.name}
                className="p-6 rounded-3xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 shadow-lg text-center space-y-4 hover:border-[#FF572F]/50 transition-all"
              >
                <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border-2 border-[#FF572F]/40 shadow-md">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#FFF0E9] dark:bg-[#FF572F]/15 border border-[#FCD5C8] dark:border-[#FF572F]/30 text-[10px] font-mono font-bold text-[#FF572F] tracking-wider">
                    {founder.role}
                  </span>
                  <h3 className="text-xl font-bold font-display text-[#151515] dark:text-white">
                    {founder.name}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#555555] dark:text-[#94A3B8] leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            ))}
          </div>

          {/* Team Members Grid (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.filter(m => !m.isLeader).map((member) => (
              <div 
                key={member.name}
                className="p-6 rounded-3xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 shadow-xs flex flex-col justify-between space-y-4 text-center hover:border-[#FF572F]/40 hover:shadow-md transition-all"
              >
                <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-[#F0E7E2] dark:border-white/10 shadow-sm">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FFF9F6] dark:bg-[#1A2230] border border-[#F0E7E2] dark:border-white/10 text-[10px] font-mono font-bold text-[#FF572F] tracking-wider">
                    {member.role}
                  </span>
                  <h3 className="text-lg font-bold font-display text-[#151515] dark:text-white">
                    {member.name}
                  </h3>
                </div>
                <p className="text-xs text-[#555555] dark:text-[#94A3B8] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ====================================================
            4. TEAM QUOTE BANNER
           ==================================================== */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 shadow-xs text-center relative overflow-hidden">
          <Quote className="w-10 h-10 text-[#FF572F]/30 mx-auto mb-4" />
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-extrabold font-display text-[#151515] dark:text-white max-w-2xl mx-auto leading-snug">
            "Great products aren't built by individuals. They're crafted by teams that share the same vision."
          </blockquote>
          <div className="mt-4 text-xs font-mono tracking-widest text-[#FF572F] font-bold uppercase">
            TECHCRESTAX TEAM
          </div>
        </div>

        {/* ====================================================
            5. OUR JOURNEY (Timeline: "From Vision To Growing Agency")
           ==================================================== */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF572F] font-bold">
              OUR JOURNEY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#151515] dark:text-white tracking-tight">
              From Vision <span className="text-[#FF572F]">To Growing Agency</span>
            </h2>
            <p className="text-sm sm:text-base text-[#555555] dark:text-[#94A3B8]">
              How TechCrestaX started in January 2026 and continues building impactful client deliveries.
            </p>
          </div>

          {/* Timeline Layout with Vertical Connecting Line */}
          <div className="relative max-w-3xl mx-auto">
            {/* Center Vertical Track */}
            <div className="absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#FF572F] via-sky-500 to-emerald-500 hidden sm:block opacity-40" />

            <div className="space-y-8 sm:space-y-12">
              {journeyMilestones.map((item, idx) => {
                const IconComp = item.icon;
                const isEven = idx % 2 === 0;

                return (
                  <div
                    key={idx}
                    className={`relative flex flex-col sm:flex-row items-center gap-6 sm:gap-10 ${
                      isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}
                  >
                    {/* Content Box */}
                    <div className={`w-full sm:w-1/2 ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                      <div className="p-6 rounded-2xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 shadow-xs hover:border-[#FF572F]/50 transition-all space-y-2">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#FFF0E9] dark:bg-[#FF572F]/15 border border-[#FCD5C8] dark:border-[#FF572F]/30 text-xs font-mono font-bold text-[#FF572F]">
                          {item.period}
                        </span>
                        <h3 className="text-lg font-bold font-display text-[#151515] dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#555555] dark:text-[#94A3B8] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Central Icon Node */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-white dark:bg-[#121824] border-2 border-[#FF572F] shadow-md flex items-center justify-center shrink-0 text-[#FF572F]">
                      <IconComp className="w-5 h-5" />
                    </div>

                    {/* Empty Space for Alignment on Desktop */}
                    <div className="hidden sm:block sm:w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ====================================================
            6. WHY TECHCRESTAX ("More Than Just A Development Company")
           ==================================================== */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF572F] font-bold">
              WHY TECHCRESTAX
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#151515] dark:text-white tracking-tight">
              More Than <span className="text-[#FF572F]">Just A Development Company</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 shadow-xs hover:border-[#FF572F]/40 hover:shadow-md transition-all space-y-3"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shrink-0 ${card.iconBg} ${card.iconColor}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-[#151515] dark:text-white">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] dark:text-[#94A3B8] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ====================================================
            7. OUR VALUES ("The Principles That Drive Every Project")
           ==================================================== */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF572F] font-bold">
              OUR VALUES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#151515] dark:text-white tracking-tight">
              The Principles That <span className="text-[#FF572F]">Drive Every Project</span>
            </h2>
            <p className="text-sm sm:text-base text-[#555555] dark:text-[#94A3B8] leading-relaxed">
              Every decision we make is guided by creativity, transparency, innovation and a commitment to helping businesses succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {principles.map((principle, idx) => {
              const IconComp = principle.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 shadow-xs hover:border-[#FF572F]/50 hover:shadow-md transition-all flex items-start gap-5"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shrink-0 ${principle.iconBg} ${principle.iconColor}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold font-display text-[#151515] dark:text-white">
                      {principle.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555555] dark:text-[#94A3B8] leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ====================================================
            8. CALL TO ACTION (CTA BOX)
           ==================================================== */}
        <div className="p-8 sm:p-14 rounded-3xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 shadow-xl text-center space-y-6 relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF572F]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#FFF0E9] dark:bg-[#FF572F]/15 border border-[#FCD5C8] dark:border-[#FF572F]/30 text-xs font-mono font-bold text-[#FF572F] uppercase tracking-wider">
              LET'S BUILD TOGETHER
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#151515] dark:text-white tracking-tight">
              Ready To Take <br className="hidden sm:block" />
              <span className="text-[#FF572F]">Your Business Online?</span>
            </h2>

            <p className="text-sm sm:text-base text-[#555555] dark:text-[#94A3B8] leading-relaxed">
              Whether you need a premium website, a complete brand identity or digital solutions that help your business grow, TechCrestaX is ready to bring your ideas to life.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#FF572F] hover:bg-[#E94725] text-white font-bold text-sm shadow-md shadow-[#FF572F]/20 hover:shadow-[#FF572F]/35 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white dark:bg-[#1A2230] hover:bg-slate-50 dark:hover:bg-[#202B3D] border border-[#F0E7E2] dark:border-white/15 text-[#151515] dark:text-white font-bold text-sm transition-all hover:-translate-y-0.5 shadow-xs"
              >
                <span>View Portfolio</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
