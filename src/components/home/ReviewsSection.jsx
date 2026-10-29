import React, { useState, useEffect, useRef } from 'react';
import { 
  Star, 
  ExternalLink, 
  CheckCircle2, 
  Quote,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { companyData } from '../../data/companyData';

function GoogleIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.98 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Authentic 5-Star Reviews from TechCrestaX Google Business Profile
  const googleReviews = [
    {
      id: "asit-das",
      author: "Asit Das",
      initials: "AD",
      badge: "Local Guide",
      badgeDetails: "Local Guide • 125 reviews",
      timeAgo: "1 month ago",
      rating: 5,
      quote: "TechCrestaX is a startup company. We engaged them to make our website, I had regular interactions with Rishu Kumar & Satyajeet. Both are very gentle and knowledgeable. They did an exceptional job on a limited timeframe. Thanks to the young, energetic and knowledgeable team.",
      accentColor: "from-blue-600 to-indigo-700",
      accentBorder: "border-blue-500/30",
      isLocalGuide: true
    },
    {
      id: "dr-dinesh",
      author: "Dr Dinesh",
      initials: "DD",
      badge: "Verified Client",
      badgeDetails: "4 reviews • 3 photos",
      timeAgo: "4 weeks ago",
      rating: 5,
      quote: "Best Service ever, they interacted with me regularly regarding the website and they priced well too, I mean they are awesome",
      accentColor: "from-amber-500 to-orange-600",
      accentBorder: "border-orange-500/30",
      isLocalGuide: false
    },
    {
      id: "rahul-chowdhury",
      author: "Rahul Chowdhury",
      initials: "RC",
      badge: "Verified Client",
      badgeDetails: "8 reviews",
      timeAgo: "4 weeks ago",
      rating: 5,
      quote: "Exceptional work. Delivered whatever I wanted and also solid and prompt support. I do recommend. And lots of best wishes to this company",
      accentColor: "from-teal-500 to-emerald-600",
      accentBorder: "border-teal-500/30",
      isLocalGuide: false
    },
    {
      id: "pankaj-kedia",
      author: "Pankaj kumar Kedia",
      initials: "PK",
      badge: "Verified Client",
      badgeDetails: "6 reviews • 1 photo",
      timeAgo: "1 month ago",
      rating: 5,
      quote: "Polite, time bound and continuous support , full of commitment",
      accentColor: "from-purple-600 to-indigo-600",
      accentBorder: "border-purple-500/30",
      isLocalGuide: false
    },
    {
      id: "gautam-trivedi",
      author: "Gautam Trivedi",
      initials: "GT",
      badge: "Verified Client",
      badgeDetails: "3 reviews • 2 photos",
      timeAgo: "3 months ago",
      rating: 5,
      quote: "Very satisfied with Techcrestax! The team is knowledgeable, supportive, and committed to delivering the best results. Would definitely recommend their services.",
      accentColor: "from-emerald-500 to-teal-600",
      accentBorder: "border-emerald-500/30",
      isLocalGuide: false
    },
    {
      id: "apeksha-kumari",
      author: "apeksha kumari",
      initials: "AK",
      badge: "Verified Client",
      badgeDetails: "2 reviews",
      timeAgo: "3 months ago",
      rating: 5,
      quote: "I don't usually write reviews, but TechCrestax genuinely deserves the appreciation. From the very beginning, the team was easy to work with, listened carefully to my ideas, and brought them to life with a clean, modern, and responsive website.",
      accentColor: "from-rose-500 to-[#FF6B4A]",
      accentBorder: "border-[#FF6B4A]/30",
      isLocalGuide: false
    },
    {
      id: "satyajeet-kumar",
      author: "Satyajeet Kumar",
      initials: "SK",
      badge: "Verified Client",
      badgeDetails: "3 reviews",
      timeAgo: "3 months ago",
      rating: 5,
      quote: "Amazing experience! My website looks professional and works perfectly on all devices. Great support, timely delivery, and excellent communication. Highly recommend TechCrestax.",
      accentColor: "from-slate-700 to-slate-900",
      accentBorder: "border-slate-500/30",
      isLocalGuide: false
    },
    {
      id: "aman-kumar",
      author: "aman kumar",
      initials: "AK",
      badge: "Local Guide",
      badgeDetails: "Local Guide • 7 reviews",
      timeAgo: "3 months ago",
      rating: 5,
      quote: "Best service provider All employee member are good behaviour",
      accentColor: "from-cyan-600 to-blue-600",
      accentBorder: "border-cyan-500/30",
      isLocalGuide: true
    }
  ];

  const totalReviews = googleReviews.length;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  // Exact 5-second automatic rotation requested by the user
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
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      handlePrev();
    }
  };

  // 3D Perspective Card Positioning
  const getCardStyle = (index) => {
    const diff = (index - currentIndex + totalReviews) % totalReviews;
    const relative = diff > totalReviews / 2 ? diff - totalReviews : diff;

    if (isMobile) {
      if (relative === 0) {
        return {
          transform: 'translateX(-50%) scale(1)',
          opacity: 1,
          zIndex: 30,
          pointerEvents: 'auto',
          visibility: 'visible',
          transition: 'transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s ease'
        };
      }
      if (relative === 1) {
        return {
          transform: 'translateX(65%) scale(0.9)',
          opacity: 0,
          zIndex: 10,
          pointerEvents: 'none',
          visibility: 'hidden',
          transition: 'transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s ease'
        };
      }
      if (relative === -1) {
        return {
          transform: 'translateX(-165%) scale(0.9)',
          opacity: 0,
          zIndex: 10,
          pointerEvents: 'none',
          visibility: 'hidden',
          transition: 'transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s ease'
        };
      }
      return {
        transform: 'translateX(-50%) scale(0.8)',
        opacity: 0,
        zIndex: 0,
        pointerEvents: 'none',
        visibility: 'hidden'
      };
    }

    // Desktop & Tablet 3D Spatial Stage
    if (relative === 0) {
      return {
        transform: 'translateX(-50%) translateZ(0px) scale(1)',
        opacity: 1,
        zIndex: 30,
        pointerEvents: 'auto',
        visibility: 'visible'
      };
    }

    if (relative === 1) {
      if (isTablet) {
        return {
          transform: 'translateX(calc(-50% + 270px)) translateZ(-70px) rotateY(-13deg) scale(0.88)',
          opacity: 0.65,
          zIndex: 20,
          cursor: 'pointer',
          visibility: 'visible'
        };
      }
      return {
        transform: 'translateX(calc(-50% + 380px)) translateZ(-90px) rotateY(-16deg) scale(0.88)',
        opacity: 0.68,
        zIndex: 20,
        cursor: 'pointer',
        visibility: 'visible'
      };
    }

    if (relative === -1) {
      if (isTablet) {
        return {
          transform: 'translateX(calc(-50% - 270px)) translateZ(-70px) rotateY(13deg) scale(0.88)',
          opacity: 0.65,
          zIndex: 20,
          cursor: 'pointer',
          visibility: 'visible'
        };
      }
      return {
        transform: 'translateX(calc(-50% - 380px)) translateZ(-90px) rotateY(16deg) scale(0.88)',
        opacity: 0.68,
        zIndex: 20,
        cursor: 'pointer',
        visibility: 'visible'
      };
    }

    if (relative === 2) {
      return {
        transform: 'translateX(calc(-50% + 640px)) translateZ(-180px) rotateY(-22deg) scale(0.74)',
        opacity: 0.22,
        zIndex: 10,
        visibility: 'visible'
      };
    }

    if (relative === -2) {
      return {
        transform: 'translateX(calc(-50% - 640px)) translateZ(-180px) rotateY(22deg) scale(0.74)',
        opacity: 0.22,
        zIndex: 10,
        visibility: 'visible'
      };
    }

    return {
      transform: 'translateX(-50%) translateZ(-320px) scale(0.5)',
      opacity: 0,
      zIndex: 0,
      pointerEvents: 'none',
      visibility: 'hidden'
    };
  };

  return (
    <section 
      className="py-16 sm:py-20 md:py-24 bg-[#F8F9FA] dark:bg-[#070A0F] border-b border-[#EBECEF] dark:border-white/10 transition-colors select-none overflow-hidden relative"
      aria-label="Google Client Reviews and Testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Soft Glow Orbs */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[460px] bg-[#FF6B4A]/10 rounded-full blur-[140px] pointer-events-none -z-0" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4F0] dark:bg-[#0D1420] border border-[#FF6B4A]/25 text-xs font-semibold text-[#FF6B4A] shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A] animate-pulse" />
            <span className="uppercase tracking-widest text-[11px] font-mono font-bold">
              GOOGLE VERIFIED REVIEWS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#0D1B2A] dark:text-white tracking-tight">
            Loved by Real Clients.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B4A] via-[#FF8C66] to-[#FFB627]">
              Rated 5.0 on Google.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#4C5258] dark:text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            100% authentic feedback submitted directly by clients on TechCrestaX's official Google Business Profile.
          </p>

          {/* Social Proof Pill */}
          <div className="pt-1 flex items-center justify-center gap-3 text-xs font-mono">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-[#EBECEF] dark:border-white/10 text-slate-700 dark:text-slate-300 shadow-2xs">
              <GoogleIcon className="w-3.5 h-3.5" />
              <span className="font-bold text-[#FFB627]">5.0 ★</span>
              <span>(8 Verified Reviews)</span>
            </span>
          </div>
        </div>

        {/* 3D PERSPECTIVE ORBIT CAROUSEL */}
        <div className="space-y-6 sm:space-y-8">
          
          <div 
            className="relative w-full h-[375px] sm:h-[370px] md:h-[360px] max-w-6xl mx-auto overflow-hidden sm:overflow-visible"
            style={isMobile ? {} : { perspective: '1400px', transformStyle: 'preserve-3d' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {googleReviews.map((review, idx) => {
              const cardStyle = getCardStyle(idx);
              const isActive = idx === currentIndex;

              return (
                <div
                  key={review.id}
                  onClick={() => !isActive && jumpToIndex(idx)}
                  style={cardStyle}
                  className={`absolute top-0 left-1/2 w-[94%] max-w-[430px] sm:w-[460px] md:w-[490px] h-[355px] sm:h-[350px] md:h-[340px] rounded-3xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-between p-6 sm:p-8 select-none ${
                    isActive
                      ? 'bg-white dark:bg-[#0D1420] border-2 border-[#FF6B4A] shadow-2xl shadow-[#FF6B4A]/15 cursor-default'
                      : 'bg-white/80 dark:bg-[#0D1420]/80 border border-[#EBECEF] dark:border-white/10 shadow-md hover:border-[#FF6B4A]/50 cursor-pointer'
                  }`}
                >
                  {/* Top Row: Stars + Google Badge */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <GoogleIcon className="w-4 h-4 shrink-0" />
                        <div className="flex items-center gap-0.5">
                          {[...Array(review.rating)].map((_, starI) => (
                            <Star 
                              key={starI} 
                              className={`w-3.5 h-3.5 fill-[#FFB627] text-[#FFB627] ${isActive ? 'animate-pulse' : ''}`} 
                            />
                          ))}
                        </div>
                        <span className="text-xs font-mono font-bold text-[#FFB627] ml-1">
                          5.0
                        </span>
                      </div>

                      {review.isLocalGuide ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-[11px] font-mono font-bold text-blue-500 dark:text-blue-400">
                          <Award className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                          <span>Local Guide</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-mono font-bold text-[#8FC658]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8FC658]" />
                          <span>Verified Review</span>
                        </span>
                      )}
                    </div>

                    {/* Quote Text */}
                    <div className="relative pt-1 sm:pt-2">
                      <Quote className="absolute -top-1 -left-1 w-7 h-7 text-[#FF6B4A]/20 pointer-events-none" />
                      <blockquote className="text-sm sm:text-[14.5px] md:text-base text-[#0D1B2A] dark:text-white font-medium leading-relaxed pl-1 line-clamp-5">
                        "{review.quote}"
                      </blockquote>
                    </div>
                  </div>

                  {/* Bottom Row: Reviewer Details & Link */}
                  <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${review.accentColor} text-white font-bold font-display text-xs flex items-center justify-center shrink-0 shadow-xs`}>
                        {review.initials}
                      </div>

                      <div className="min-w-0 text-left">
                        <div className="text-xs sm:text-sm font-bold text-[#0D1B2A] dark:text-white truncate">
                          {review.author}
                        </div>
                        <div className="text-[11px] font-mono text-slate-500 dark:text-[#94A3B8] truncate">
                          {review.badgeDetails}
                          <span className="text-slate-400 font-normal ml-1">
                            • {review.timeAgo}
                          </span>
                        </div>
                      </div>
                    </div>

                    <a
                      href={companyData.contact.googleBusinessUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFF4F0] dark:bg-white/5 border border-[#FF6B4A]/20 text-xs font-mono font-bold text-[#FF6B4A] hover:bg-[#FF6B4A] hover:text-white transition-all shrink-0 cursor-pointer"
                      title="Read on Google Maps"
                    >
                      <GoogleIcon className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-medium hidden sm:inline">Google</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls & 5-Second Indicator */}
          <div className="flex items-center justify-center gap-4 pt-1">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Google review"
              className="p-2.5 rounded-full bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 text-[#0D1B2A] dark:text-white hover:text-[#FF6B4A] hover:border-[#FF6B4A] transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {googleReviews.map((item, dotIdx) => (
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
              aria-label="Next Google review"
              className="p-2.5 rounded-full bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 text-[#0D1B2A] dark:text-white hover:text-[#FF6B4A] hover:border-[#FF6B4A] transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Google Business Review Callout Card */}
        <div className="max-w-2xl mx-auto p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 text-center space-y-3.5 shadow-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-[#FFB627] text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Google Business Reviews</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold font-display text-[#0D1B2A] dark:text-white">
            Have You Worked With TechCrestaX?
          </h3>

          <p className="text-xs sm:text-sm text-[#4C5258] dark:text-[#94A3B8] max-w-lg mx-auto leading-relaxed">
            We value client transparency. You can read all 8 verified reviews or share your own project review directly on our Google Business Profile.
          </p>

          <div className="pt-2">
            <a
              href={companyData.contact.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0D1B2A] dark:bg-white text-white dark:text-[#0D1B2A] hover:bg-[#FF6B4A] dark:hover:bg-[#FF6B4A] dark:hover:text-white text-xs font-bold transition-all shadow-xs cursor-pointer hover:-translate-y-0.5"
            >
              <GoogleIcon className="w-4 h-4" />
              <span>Review on Google Business Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
