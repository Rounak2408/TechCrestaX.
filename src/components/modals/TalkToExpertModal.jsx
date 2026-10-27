import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  X, 
  CheckCircle2, 
  Send, 
  Lock, 
  Phone, 
  Mail,
  ChevronDown, 
  Check 
} from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function TalkToExpertModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'Website Development',
    company: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const servicesList = [
    'Website Development',
    'E-commerce Solutions',
    'Web Applications & Platforms',
    'UI/UX Design',
    'SEO & Local SEO',
    'Digital Growth & Online Presence',
  ];

  // Listen to global open trigger & clicks on any button with data-talk-to-expert
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-talk-to-expert', handleOpen);

    const handleClick = (e) => {
      const target = e.target.closest('[data-talk-to-expert], [href="#talk-to-expert"], .talk-to-expert-btn');
      if (target) {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('open-talk-to-expert', handleOpen);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  // Keyboard escape handler and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Click outside to close custom category dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsCategoryOpen(false);
      }
    };
    if (isCategoryOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isCategoryOpen]);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please share a brief note about your project';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: 'Website Development',
      company: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
    setIsOpen(false);
    setIsCategoryOpen(false);
  };

  const mailtoUrl = `mailto:${companyData.contact.primaryEmail}?subject=${encodeURIComponent(
    `Project Discussion: ${formData.service} (${formData.company || formData.firstName})`
  )}&body=${encodeURIComponent(
    `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nService: ${formData.service}\n\nProject Scope:\n${formData.message}`
  )}`;

  const whatsappUrl = `https://wa.me/918340426550?text=${encodeURIComponent(
    `Hello TechCrestaX, I want to discuss a ${formData.service} project.\n\nName: ${formData.firstName} ${formData.lastName}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nScope:\n${formData.message}`
  )}`;

  return (
    <>
      {/* Floating Bottom-Right Controls */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 select-none">
        
        {/* DESKTOP VIEW: 'Talk to an expert' Pill (Opens Consultation Modal) */}
        <div className="hidden sm:flex items-center">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-2.5 px-5 py-3 rounded-full bg-white dark:bg-[#0D1B2A] hover:bg-[#FFF4F0] dark:hover:bg-[#152336] text-[#0D1B2A] dark:text-white font-semibold text-sm shadow-xl dark:shadow-2xl shadow-black/10 dark:shadow-black/50 border border-[#EBECEF] dark:border-white/10 hover:border-[#FF6B4A] hover:scale-[1.03] active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Talk to an expert"
          >
            {/* Active Status Pulse Dot */}
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B4A] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6B4A]" />
            </span>

            <MessageSquare className="w-4 h-4 text-[#FF6B4A] group-hover:rotate-6 transition-transform" />
            <span className="tracking-tight font-bold">Talk to an expert</span>
          </button>
        </div>

        {/* MOBILE VIEW: Animated WhatsApp Floating Action (Opens Form Modal) */}
        <div className="flex sm:hidden items-center">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open project consultation form"
            className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#25D366] to-[#20BD5A] hover:brightness-105 active:scale-95 flex items-center justify-center shadow-xl shadow-[#25D366]/40 border-2 border-white dark:border-[#070A0F] transition-transform duration-200 cursor-pointer group"
          >
            {/* Radar Pulse Expanding Rings */}
            <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
            <span className="absolute -inset-2 rounded-full bg-[#25D366]/20 animate-pulse pointer-events-none" />

            {/* Official WhatsApp Logo */}
            <svg 
              viewBox="0 0 24 24" 
              className="w-7 h-7 fill-white group-hover:scale-110 transition-transform relative z-10" 
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </button>
        </div>

      </div>

      {/* Modal Dialog Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 dark:bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="expert-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          {/* Modal Container (Alpha Agency Obsidian / White Card) */}
          <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-[#0D1B2A] text-[#0D1B2A] dark:text-white rounded-3xl shadow-2xl overflow-hidden border border-[#EBECEF] dark:border-white/10 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Close Button (X) */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-[#EBECEF] dark:border-white/10 shadow-2xs"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Mobile Top Trust Bar */}
            <div className="lg:hidden bg-[#F8F9FA] dark:bg-[#070A0F] text-[#0D1B2A] dark:text-white px-4 py-3 border-b border-[#EBECEF] dark:border-white/10 flex items-center justify-between pr-12">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-[#FF6B4A] animate-pulse" />
                <span className="text-[11px] font-mono font-medium text-[#0D1B2A] dark:text-white">
                  TechCrestaX Studio
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#FF6B4A] bg-[#FFF4F0] dark:bg-[#FF6B4A]/10 border border-[#FF6B4A]/20 px-2 py-0.5 rounded-full font-bold">
                Response &lt;12h
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-0 flex-1 overflow-y-auto">
              
              {/* =========================================================
                  LEFT COLUMN: Verified Client Showcase (Deep Obsidian)
                 ========================================================= */}
              <div className="hidden lg:flex lg:col-span-5 bg-[#0D1B2A] text-white p-7 sm:p-9 flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                {/* Ambient glow */}
                <div className="absolute top-0 right-0 w-60 h-60 bg-[#FF6B4A]/15 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#FFB627] font-bold block mb-2">
                      OFFICIAL CLIENT DELIVERIES
                    </span>
                    <h2 className="text-2xl sm:text-[26px] font-bold font-heading leading-snug tracking-tight text-white">
                      We Build Websites That Grow Businesses
                    </h2>
                    <p className="text-xs sm:text-sm text-[#94A3B8] mt-2 leading-relaxed">
                      Custom design, modern React architecture, and transparent terms.
                    </p>
                  </div>

                  {/* Pricing & Terms Highlights Box */}
                  <div className="bg-white/5 text-white p-4.5 rounded-2xl shadow-sm space-y-3 border border-white/10">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <span className="text-xs text-[#94A3B8] font-mono">Website Development</span>
                      <span className="text-xs font-mono font-bold text-[#FFB627]">Starts at ₹7,000+</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <span className="text-xs text-[#94A3B8] font-mono">1st-Year Maintenance</span>
                      <span className="text-xs font-mono font-bold text-[#8FC658]">100% Free (12 Mo)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#94A3B8] font-mono">Code Ownership</span>
                      <span className="text-xs font-mono font-bold text-white">100% Client-Owned</span>
                    </div>
                  </div>

                  {/* Live Verified Deliveries */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A90A0] font-bold block">
                      LIVE VERIFIED DELIVERIES
                    </span>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10 shadow-2xs">
                        <span className="font-semibold text-white">Scalpel.in</span>
                        <span className="text-[11px] font-mono text-[#FFB627] font-bold">Doctor Appointment</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10 shadow-2xs">
                        <span className="font-semibold text-white">Agriqen Seeds</span>
                        <span className="text-[11px] font-mono text-[#FFB627] font-bold">Agriculture &amp; Biotech</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10 shadow-2xs">
                        <span className="font-semibold text-white">Sahyog Sagar</span>
                        <span className="text-[11px] font-mono text-[#FFB627] font-bold">Restaurant &amp; SEO</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Approved Client Portfolio */}
                <div className="pt-6 border-t border-white/10 relative z-10 mt-6 lg:mt-0">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#8A90A0] mb-2 font-bold">
                    APPROVED CLIENT PORTFOLIO
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-[#94A3B8]">
                    <span className="text-white font-semibold">Scalpel.in</span>
                    <span>•</span>
                    <span className="text-white font-semibold">Agriqen</span>
                    <span>•</span>
                    <span className="text-white font-semibold">Sahyog Sagar</span>
                    <span>•</span>
                    <span className="text-white font-semibold">Law &amp; Legal</span>
                    <span>•</span>
                    <span className="text-white font-semibold">YOG4YOU</span>
                  </div>
                </div>
              </div>

              {/* =========================================================
                  RIGHT COLUMN: Form Box (Theme-Adaptive)
                 ========================================================= */}
              <div className="lg:col-span-7 bg-white dark:bg-[#152336] text-[#0D1B2A] dark:text-white p-5 sm:p-7 lg:p-8 flex flex-col justify-between relative overflow-y-auto">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                    <div className="pr-8">
                      <h3 id="expert-modal-title" className="text-xl sm:text-2xl font-bold font-heading text-[#0D1B2A] dark:text-white tracking-tight">
                        Start Your Project Discussion
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4C5258] dark:text-[#94A3B8] mt-1">
                        Guaranteed technical response within <span className="font-semibold text-[#0D1B2A] dark:text-white">12 hours</span>.
                      </p>
                    </div>

                    {/* First Name & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#0D1B2A] dark:text-white mb-1">
                          First Name*
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="e.g. Alex"
                          className={`w-full px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm rounded-xl border bg-[#F8F9FA] dark:bg-[#0D1B2A] text-[#0D1B2A] dark:text-white placeholder-[#8A90A0] ${
                            errors.firstName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#EBECEF] dark:border-white/10'
                          } focus:outline-none focus:border-[#FF6B4A] focus:ring-1 focus:ring-[#FF6B4A]`}
                        />
                        {errors.firstName && <span className="text-[11px] text-rose-500 mt-0.5">{errors.firstName}</span>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0D1B2A] dark:text-white mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="e.g. Morgan"
                          className="w-full px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm rounded-xl border border-[#EBECEF] dark:border-white/10 bg-[#F8F9FA] dark:bg-[#0D1B2A] text-[#0D1B2A] dark:text-white placeholder-[#8A90A0] focus:outline-none focus:border-[#FF6B4A] focus:ring-1 focus:ring-[#FF6B4A]"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#0D1B2A] dark:text-white mb-1">
                          Business Email*
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className={`w-full px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm rounded-xl border bg-[#F8F9FA] dark:bg-[#0D1B2A] text-[#0D1B2A] dark:text-white placeholder-[#8A90A0] ${
                            errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#EBECEF] dark:border-white/10'
                          } focus:outline-none focus:border-[#FF6B4A] focus:ring-1 focus:ring-[#FF6B4A]`}
                        />
                        {errors.email && <span className="text-[11px] text-rose-500 mt-0.5">{errors.email}</span>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0D1B2A] dark:text-white mb-1">
                          Phone Number
                        </label>
                        <div className="flex gap-2 w-full min-w-0">
                          <span className="px-3 py-2 sm:py-2.5 rounded-xl bg-[#EBECEF]/60 dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10 text-xs font-mono text-[#4C5258] dark:text-white flex items-center shrink-0">
                            +91
                          </span>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="83404 26550"
                            className="w-full min-w-0 flex-1 px-3 py-2 sm:py-2.5 text-xs sm:text-sm rounded-xl border border-[#EBECEF] dark:border-white/10 bg-[#F8F9FA] dark:bg-[#0D1B2A] text-[#0D1B2A] dark:text-white placeholder-[#8A90A0] focus:outline-none focus:border-[#FF6B4A] focus:ring-1 focus:ring-[#FF6B4A]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service Category & Company Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                      <div className="relative min-w-0" ref={dropdownRef}>
                        <label className="block text-xs font-semibold text-[#0D1B2A] dark:text-white mb-1">
                          Project Category
                        </label>
                        <button
                          type="button"
                          onClick={() => setIsCategoryOpen((prev) => !prev)}
                          className="w-full px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm rounded-xl border border-[#EBECEF] dark:border-white/10 bg-[#F8F9FA] dark:bg-[#0D1B2A] text-[#0D1B2A] dark:text-white flex items-center justify-between transition-colors focus:outline-none focus:border-[#FF6B4A] focus:ring-1 focus:ring-[#FF6B4A] cursor-pointer select-none"
                          aria-haspopup="listbox"
                          aria-expanded={isCategoryOpen}
                        >
                          <span className="truncate pr-2 font-medium text-left">
                            {formData.service}
                          </span>
                          <ChevronDown className={`w-4 h-4 text-[#8A90A0] transition-transform duration-200 shrink-0 ${isCategoryOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isCategoryOpen && (
                          <div
                            role="listbox"
                            className="absolute z-50 left-0 right-0 w-full mt-1.5 bg-white dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10 rounded-xl shadow-2xl overflow-hidden py-1 max-h-52 overflow-y-auto"
                          >
                            {servicesList.map((serviceName) => {
                              const isSelected = formData.service === serviceName;
                              return (
                                <button
                                  key={serviceName}
                                  type="button"
                                  role="option"
                                  aria-selected={isSelected}
                                  onClick={() => {
                                    setFormData({ ...formData, service: serviceName });
                                    setIsCategoryOpen(false);
                                  }}
                                  className={`w-full px-3.5 py-2 text-left text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer ${
                                    isSelected
                                      ? 'bg-[#FFF4F0] text-[#FF6B4A] dark:bg-[#FF6B4A]/15 font-bold'
                                      : 'text-[#4C5258] dark:text-white hover:bg-slate-50 dark:hover:bg-white/5'
                                  }`}
                                >
                                  <span className="truncate pr-2">{serviceName}</span>
                                  {isSelected && (
                                    <Check className="w-3.5 h-3.5 text-[#FF6B4A] shrink-0" />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0D1B2A] dark:text-white mb-1">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Acme Corp"
                          className="w-full px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm rounded-xl border border-[#EBECEF] dark:border-white/10 bg-[#F8F9FA] dark:bg-[#0D1B2A] text-[#0D1B2A] dark:text-white placeholder-[#8A90A0] focus:outline-none focus:border-[#FF6B4A] focus:ring-1 focus:ring-[#FF6B4A]"
                        />
                      </div>
                    </div>

                    {/* Message Box */}
                    <div>
                      <label className="block text-xs font-semibold text-[#0D1B2A] dark:text-white mb-1">
                        Your Project Scope*
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe what you're looking to design, engineer, or automate..."
                        className={`w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border bg-[#F8F9FA] dark:bg-[#0D1B2A] text-[#0D1B2A] dark:text-white placeholder-[#8A90A0] ${
                          errors.message ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#EBECEF] dark:border-white/10'
                        } focus:outline-none focus:border-[#FF6B4A] focus:ring-1 focus:ring-[#FF6B4A] resize-none`}
                      />
                      {errors.message && <span className="text-[11px] text-rose-500 mt-0.5">{errors.message}</span>}
                    </div>

                    {/* Submit CTA Button (Alpha Agency Gradient Pill) */}
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#FF6B4A] via-[#FF7C42] to-[#FFB627] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:shadow-[#FF6B4A]/20 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-white" />
                      <span>Request Free Consultation</span>
                    </button>

                    {/* Confidentiality Lock Notice */}
                    <div className="flex items-center gap-2 pt-0.5 text-[11px] sm:text-xs text-[#4C5258] dark:text-[#94A3B8]">
                      <Lock className="w-3.5 h-3.5 text-[#8FC658] shrink-0" />
                      <span>Your idea is protected with strict confidentiality &amp; 100% IP ownership.</span>
                    </div>

                    {/* 4 Bottom Metric Badges */}
                    <div className="pt-3 border-t border-[#EBECEF] dark:border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px] text-[#4C5258] dark:text-[#94A3B8]">
                      <div className="p-2 rounded-xl bg-[#F8F9FA] dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10">
                        <span className="font-bold text-[#0D1B2A] dark:text-white block">30+ Projects</span>
                        <span>Delivered</span>
                      </div>
                      <div className="p-2 rounded-xl bg-[#F8F9FA] dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10">
                        <span className="font-bold text-[#0D1B2A] dark:text-white block">25+ Clients</span>
                        <span>Happy Partners</span>
                      </div>
                      <div className="p-2 rounded-xl bg-[#F8F9FA] dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10">
                        <span className="font-bold text-[#0D1B2A] dark:text-white block">100% IP</span>
                        <span>Client Ownership</span>
                      </div>
                      <div className="p-2 rounded-xl bg-[#F8F9FA] dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10">
                        <span className="font-bold text-[#0D1B2A] dark:text-white block">8 Members</span>
                        <span>Core Team</span>
                      </div>
                    </div>
                  </form>
                ) : (
                  /* Form Submission Confirmation View */
                  <div className="space-y-6 text-center my-auto py-8">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0D1B2A] dark:text-white">
                        Discussion Request Formulated!
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4C5258] dark:text-[#94A3B8] mt-1 max-w-md mx-auto">
                        Thank you, {formData.firstName}. We have prepared your project summary. Connect directly with our engineering team:
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      <a
                        href={mailtoUrl}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#0D1B2A] dark:bg-white text-white dark:text-[#0D1B2A] hover:bg-black dark:hover:bg-slate-100 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm"
                      >
                        <Mail className="w-4 h-4 text-[#FF6B4A]" />
                        <span>Send via Email Client</span>
                      </a>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-emerald-600 text-white hover:bg-emerald-500 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Instant WhatsApp Connect</span>
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="text-xs text-[#4C5258] dark:text-[#94A3B8] hover:text-[#FF6B4A] underline pt-4 cursor-pointer"
                    >
                      Done &amp; Close
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
