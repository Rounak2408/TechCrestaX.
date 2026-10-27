import React, { useState, useEffect, useRef } from 'react';
import { 
  Star, 
  ExternalLink, 
  CheckCircle2, 
  Quote,
  Globe,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // Touch swipe support for mobile
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const verifiedFeedback = [
    {
      id: "scalpel",
      author: "Dr. Rahul Bhanja Chowdhury",
      initials: "RC",
      project: "Scalpel.in",
      role: "Laparoscopic Surgeon Practice",
      category: "Healthcare & Appointments",
      quote: "TechCrestaX built an intuitive, elegant patient appointment platform for our surgical clinic. Patients can easily book consultations directly through the web, and communication was clear throughout development.",
      domain: "scalpel.in",
      liveUrl: "https://www.scalpel.in/",
      rating: 5,
      accentColor: "from-teal-500 to-emerald-500"
    },
    {
      id: "agrigen",
      author: "Agrigen Seeds Management",
      initials: "AS",
      project: "Agrigen Seeds & Biotech",
      role: "Agriculture Biotechnology",
      category: "Corporate & Agrotech",
      quote: "Our hybrid seed catalog and corporate research presentation needed a clean, authoritative website to connect with regional distributors across India. The team delivered a responsive and dependable platform.",
      domain: "agriqen.com",
      liveUrl: "https://www.agriqen.com/",
      rating: 5,
      accentColor: "from-emerald-500 to-lime-600"
    },
    {
      id: "sahyog",
      author: "Sahyog Sagar Team",
      initials: "SS",
      project: "Sahyog Sagar",
      role: "Culinary & Dining Brand",
      category: "Restaurant & Local SEO",
      quote: "The mobile-first digital food menu and Google local SEO integration made it significantly easier for regional guests to find our restaurant and reserve tables through WhatsApp.",
      domain: "sahyogsagar.in",
      liveUrl: "https://sahyogsagar.in/",
      rating: 5,
      accentColor: "from-[#FF6B4A] to-[#FFB627]"
    },
    {
      id: "legal",
      author: "Law & Legal Bureau Practice",
      initials: "LB",
      project: "Law & Legal Bureau",
      role: "Professional Legal Practice",
      category: "Advocate & Corporate Law",
      quote: "TechCrestaX delivered a dignified, highly credible website that clearly outlines our legal advisory services, consultation intake, and practice credentials. Execution was fast and transparent.",
      domain: "lawandlegalbureau.com",
      liveUrl: "https://lawandlegalbureau.com/",
      rating: 5,
      accentColor: "from-indigo-500 to-blue-600"
    },
    {
      id: "yog4you",
      author: "YOG4YOU Foundation",
      initials: "Y4",
      project: "YOG4YOU",
      role: "Yoga & Wellness Platform",
      category: "Wellness & Community",
      quote: "From visual typography to community intake flows, TechCrestaX crafted a serene and responsive platform. The 1-year free maintenance and direct WhatsApp support gave us complete peace of mind.",
      domain: "yog4you.org",
      liveUrl: "https://yog4you.org/",
      rating: 5,
      accentColor: "from-purple-500 to-pink-500"
    },
    {
      id: "dewdrops",
      author: "Dew Drops Tourism",
      initials: "DD",
      project: "Dew Drops Tourism",
      role: "Travel & Hospitality Guide",
      category: "Tourism & Itinerary Booking",
      quote: "Our tourism destination guides and itinerary inquiry platform load instantly on mobile. The team was responsive, technical, and delivered ahead of our scheduled season launch.",
      domain: "dewdropstourism.in",
      liveUrl: "https://www.dewdropstourism.in/",
      rating: 5,
      accentColor: "from-sky-500 to-cyan-500"
    },
    {
      id: "fyoli",
      author: "The Fyoli Project Curators",
      initials: "FP",
      project: "The Fyoli Project",
      role: "Cultural Heritage Initiative",
      category: "Heritage & Community Archive",
      quote: "A beautiful, evocative web design for our cultural preservation archive. TechCrestaX treated our folklore assets and visual galleries with exceptional care and craftsmanship.",
      domain: "thefyoliproject.com",
      liveUrl: "https://www.thefyoliproject.com/",
      rating: 5,
      accentColor: "from-rose-500 to-orange-500"
    },
    {
      id: "blkmnd",
      author: "BLKMND Apparel Leadership",
      initials: "BM",
      project: "BLKMND",
      role: "Streetwear E-commerce",
      category: "Fashion & Commerce",
      quote: "The streetwear storefront TechCrestaX designed has an edgy, high-contrast look with an ultra-smooth checkout process. Mobile conversions jumped noticeably after release.",
      domain: "blkmndofficial.com",
      liveUrl: "https://www.blkmndofficial.com/",
      rating: 5,
      accentColor: "from-slate-700 to-black"
    },
    {
      id: "divinemane",
      author: "Divine Mane Naturals Founders",
      initials: "DM",
      project: "Divine Mane Naturals",
      role: "Organic Haircare Store",
      category: "Organic Direct-to-Consumer",
      quote: "TechCrestaX built our direct-to-consumer organic product catalog with mobile speed and organic SEO in mind. Transparent pricing and no surprise invoices.",
      domain: "divinemanenaturals.com",
      liveUrl: "https://divinemanenaturals.com/",
      rating: 5,
      accentColor: "from-[#8FC658] to-emerald-600"
    }
  ];

  const totalReviews = verifiedFeedback.length;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalReviews);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, totalReviews]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  };

  const jumpToIndex = (index) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 60) {
      handleNext();
    }
    if (touchStartX.current - touchEndX.current < -60) {
      handlePrev();
    }
  };

  const getCardStyle = (index) => {
    const diff = (index - currentIndex + totalReviews) % totalReviews;
    const relative = diff > totalReviews / 2 ? diff - totalReviews : diff;

    if (isMobile) {
      if (relative === 0) {
        return {
          transform: 'translateX(-50%)',
          opacity: 1,
          zIndex: 30,
          pointerEvents: 'auto',
          filter: 'none',
          visibility: 'visible',
          transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s ease'
        };
      }
      if (relative === 1) {
        return {
          transform: 'translateX(60%)',
          opacity: 0,
          zIndex: 10,
          pointerEvents: 'none',
          filter: 'none',
          visibility: 'hidden',
          transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s ease'
        };
      }
      if (relative === -1) {
        return {
          transform: 'translateX(-160%)',
          opacity: 0,
          zIndex: 10,
          pointerEvents: 'none',
          filter: 'none',
          visibility: 'hidden',
          transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s ease'
        };
      }
      return {
        transform: 'translateX(-50%)',
        opacity: 0,
        zIndex: 0,
        pointerEvents: 'none',
        visibility: 'hidden'
      };
    }

    if (relative === 0) {
      return {
        transform: 'translateX(-50%) translateZ(0px) scale(1)',
        opacity: 1,
        zIndex: 30,
        pointerEvents: 'auto',
        filter: 'none',
        visibility: 'visible'
      };
    }

    if (relative === 1) {
      if (isTablet) {
        return {
          transform: 'translateX(calc(-50% + 280px)) translateZ(-70px) rotateY(-14deg) scale(0.88)',
          opacity: 0.65,
          zIndex: 20,
          cursor: 'pointer',
          filter: 'none',
          visibility: 'visible'
        };
      }
      return {
        transform: 'translateX(calc(-50% + 400px)) translateZ(-90px) rotateY(-18deg) scale(0.88)',
        opacity: 0.7,
        zIndex: 20,
        cursor: 'pointer',
        filter: 'none',
        visibility: 'visible'
      };
    }

    if (relative === -1) {
      if (isTablet) {
        return {
          transform: 'translateX(calc(-50% - 280px)) translateZ(-70px) rotateY(14deg) scale(0.88)',
          opacity: 0.65,
          zIndex: 20,
          cursor: 'pointer',
          filter: 'none',
          visibility: 'visible'
        };
      }
      return {
        transform: 'translateX(calc(-50% - 400px)) translateZ(-90px) rotateY(18deg) scale(0.88)',
        opacity: 0.7,
        zIndex: 20,
        cursor: 'pointer',
        filter: 'none',
        visibility: 'visible'
      };
    }

    if (relative === 2) {
      return {
        transform: 'translateX(calc(-50% + 680px)) translateZ(-200px) rotateY(-26deg) scale(0.74)',
        opacity: 0.25,
        zIndex: 10,
        filter: 'none',
        visibility: 'visible'
      };
    }

    if (relative === -2) {
      return {
        transform: 'translateX(calc(-50% - 680px)) translateZ(-200px) rotateY(26deg) scale(0.74)',
        opacity: 0.25,
        zIndex: 10,
        filter: 'none',
        visibility: 'visible'
      };
    }

    return {
      transform: 'translateX(-50%) translateZ(-350px) scale(0.5)',
      opacity: 0,
      zIndex: 0,
      pointerEvents: 'none',
      visibility: 'hidden'
    };
  };

  return (
    <section 
      className="py-16 sm:py-20 md:py-24 bg-[#F8F9FA] dark:bg-[#070A0F] border-b border-[#EBECEF] dark:border-white/10 transition-colors select-none overflow-hidden relative"
      aria-label="Client Reviews and Testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#FF6B4A]/10 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* SECTION HEADER */}
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4F0] dark:bg-[#0D1420] border border-[#FF6B4A]/25 text-xs font-semibold text-[#FF6B4A] shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A] animate-pulse" />
            <span className="uppercase tracking-widest text-[11px] font-mono font-bold">
              VERIFIED CLIENT REVIEWS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#0D1B2A] dark:text-white tracking-tight">
            What Our Clients Say
          </h2>

          <p className="text-sm sm:text-base text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
            Real feedback from business owners and founders who trust TechCrestaX with their digital platforms.
          </p>
        </div>

        {/* ORBIT CAROUSEL */}
        <div className="space-y-6 sm:space-y-8">
          
          <div 
            className="relative w-full h-[370px] sm:h-[370px] md:h-[360px] max-w-6xl mx-auto overflow-hidden sm:overflow-visible"
            style={isMobile ? {} : { perspective: '1400px', transformStyle: 'preserve-3d' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {verifiedFeedback.map((review, idx) => {
              const cardStyle = getCardStyle(idx);
              const isActive = idx === currentIndex;

              return (
                <div
                  key={review.id}
                  onClick={() => !isActive && jumpToIndex(idx)}
                  style={cardStyle}
                  className={`absolute top-0 left-1/2 w-[94%] max-w-[430px] sm:w-[460px] md:w-[490px] h-[355px] sm:h-[350px] md:h-[340px] rounded-3xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-between p-6 sm:p-8 select-none ${
                    isActive
                      ? 'bg-white dark:bg-[#0D1420] border-2 border-[#FF6B4A] shadow-xl shadow-[#FF6B4A]/15 cursor-default'
                      : 'bg-white/80 dark:bg-[#0D1420]/80 border border-[#EBECEF] dark:border-white/10 shadow-md hover:border-[#FF6B4A]/50 cursor-pointer'
                  }`}
                >
                  {/* Top Row: Stars + Verified Badge */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, starI) => (
                          <Star 
                            key={starI} 
                            className={`w-4 h-4 fill-[#FFB627] text-[#FFB627] ${isActive ? 'animate-pulse' : ''}`} 
                          />
                        ))}
                        <span className="text-xs font-mono font-bold text-[#FFB627] ml-1.5">
                          5.0
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-mono font-bold text-[#8FC658]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8FC658]" />
                        <span>Verified Client</span>
                      </span>
                    </div>

                    <div className="relative pt-1 sm:pt-2">
                      <Quote className="absolute -top-1 -left-1 w-7 h-7 text-[#FF6B4A]/20 pointer-events-none" />
                      <blockquote className="text-sm sm:text-[15px] md:text-base text-[#0D1B2A] dark:text-white font-medium leading-relaxed pl-1">
                        "{review.quote}"
                      </blockquote>
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${review.accentColor} text-white font-bold font-display text-xs flex items-center justify-center shrink-0 shadow-xs`}>
                        {review.initials}
                      </div>

                      <div className="min-w-0 text-left">
                        <div className="text-xs sm:text-sm font-bold text-[#0D1B2A] dark:text-white truncate">
                          {review.author}
                        </div>
                        <div className="text-[11px] font-mono text-[#FF6B4A] truncate">
                          {review.project}
                          <span className="text-slate-400 font-normal ml-1 hidden sm:inline">
                            • {review.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    <a
                      href={review.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFF4F0] dark:bg-white/5 border border-[#FF6B4A]/20 text-xs font-mono font-bold text-[#FF6B4A] hover:bg-[#FF6B4A] hover:text-white transition-all shrink-0 cursor-pointer"
                      title={`Visit ${review.domain}`}
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium">{review.domain}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 pt-1">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous review"
              className="p-2.5 rounded-full bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 text-[#0D1B2A] dark:text-white hover:text-[#FF6B4A] hover:border-[#FF6B4A] transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {verifiedFeedback.map((item, dotIdx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => jumpToIndex(dotIdx)}
                  aria-label={`Jump to review by ${item.author}`}
                  className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                    currentIndex === dotIdx
                      ? 'w-7 sm:w-8 bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] shadow-xs'
                      : 'w-2 bg-[#EBECEF] dark:bg-white/15 hover:bg-[#FF6B4A]/50'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next review"
              className="p-2.5 rounded-full bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 text-[#0D1B2A] dark:text-white hover:text-[#FF6B4A] hover:border-[#FF6B4A] transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Google Business Review Card */}
        <div className="max-w-2xl mx-auto p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 text-center space-y-3.5 shadow-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-[#FFB627] text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Google Business Reviews</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold font-display text-[#0D1B2A] dark:text-white">
            Have You Worked With TechCrestaX?
          </h3>

          <p className="text-xs sm:text-sm text-[#4C5258] dark:text-[#94A3B8] max-w-lg mx-auto leading-relaxed">
            We value client transparency. You can read verified client feedback or share your own project review directly on our Google Business Profile.
          </p>

          <div className="pt-2">
            <a
              href={companyData.contact.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0D1B2A] text-white hover:bg-[#FF6B4A] text-xs font-bold transition-all shadow-xs cursor-pointer hover:-translate-y-0.5"
            >
              <span>Review on Google Business Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
