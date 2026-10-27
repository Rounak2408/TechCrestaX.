import React, { useState } from 'react';
import { 
  Send, 
  MessageSquare, 
  Mail, 
  Copy, 
  Check, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Website Design & Development',
    budgetRange: 'Starter Business Website (₹7,000 – ₹15,000)',
    requirements: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const projectTypes = [
    'Website Design & Development',
    'E-commerce Website Development',
    'Web Applications & Platforms',
    'UI/UX Design',
    'SEO & Local SEO',
    'Website Redesign'
  ];

  const budgetRanges = [
    'Starter Business Website (₹7,000 – ₹15,000)',
    'Commercial Platform / Custom Design (₹15,000 – ₹30,000)',
    'E-commerce Store / Web Application (₹30,000+)',
    'Custom Scope / Estimate on Consultation'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your full name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid business email address.';
    }
    if (!formData.requirements.trim() || formData.requirements.trim().length < 10) {
      errs.requirements = 'Please describe your project requirements (at least 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const generateBriefText = () => {
    return `*TechCrestaX Project Inquiry*\n` +
      `---------------------------\n` +
      `*Name:* ${formData.name.trim()}\n` +
      `*Email:* ${formData.email.trim()}\n` +
      `*Project Type:* ${formData.projectType}\n` +
      `*Budget Range:* ${formData.budgetRange}\n` +
      `*Requirements:* ${formData.requirements.trim()}\n` +
      `---------------------------`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateBriefText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappUrl = `https://wa.me/918340426550?text=${encodeURIComponent(generateBriefText())}`;
  const mailtoUrl = `mailto:${companyData.contact.primaryEmail}?subject=${encodeURIComponent(
    `Project Inquiry from ${formData.name.trim()} - ${formData.projectType}`
  )}&body=${encodeURIComponent(generateBriefText())}`;

  return (
    <div className="bg-white dark:bg-[#0D1B2A] p-6 sm:p-10 rounded-3xl border border-[#EBECEF] dark:border-white/10 shadow-lg">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="border-b border-[#EBECEF] dark:border-white/10 pb-4">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0D1B2A] dark:text-white">
              Project Inquiry Form
            </h2>
            <p className="text-xs sm:text-sm text-[#4C5258] dark:text-[#94A3B8] mt-1">
              Fill in your project details. We review and respond with an itemized quote within 24 hours.
            </p>
          </div>

          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-[#0D1B2A] dark:text-white mb-1.5 uppercase font-mono tracking-wider">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: null });
                }}
                placeholder="Rounak Sharma"
                className={`w-full px-4 py-3 rounded-xl bg-[#F8F9FA] dark:bg-[#152336] border ${
                  errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#EBECEF] dark:border-white/10'
                } text-[#0D1B2A] dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B4A] transition-all`}
              />
              {errors.name && (
                <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-[#0D1B2A] dark:text-white mb-1.5 uppercase font-mono tracking-wider">
                Business Email *
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: null });
                }}
                placeholder="rounak@example.com"
                className={`w-full px-4 py-3 rounded-xl bg-[#F8F9FA] dark:bg-[#152336] border ${
                  errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#EBECEF] dark:border-white/10'
                } text-[#0D1B2A] dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B4A] transition-all`}
              />
              {errors.email && (
                <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          {/* Project Type */}
          <div>
            <label htmlFor="projectType" className="block text-xs font-bold text-[#0D1B2A] dark:text-white mb-1.5 uppercase font-mono tracking-wider">
              Project Category *
            </label>
            <select
              id="projectType"
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#F8F9FA] dark:bg-[#152336] border border-[#EBECEF] dark:border-white/10 text-[#0D1B2A] dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B4A] transition-all cursor-pointer"
            >
              {projectTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Budget Range */}
          <div>
            <label htmlFor="budgetRange" className="block text-xs font-bold text-[#0D1B2A] dark:text-white mb-1.5 uppercase font-mono tracking-wider">
              Estimated Budget Range (Optional)
            </label>
            <select
              id="budgetRange"
              value={formData.budgetRange}
              onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#F8F9FA] dark:bg-[#152336] border border-[#EBECEF] dark:border-white/10 text-[#0D1B2A] dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B4A] transition-all cursor-pointer"
            >
              {budgetRanges.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          {/* Project Requirements */}
          <div>
            <label htmlFor="requirements" className="block text-xs font-bold text-[#0D1B2A] dark:text-white mb-1.5 uppercase font-mono tracking-wider">
              Project Requirements & Goals *
            </label>
            <textarea
              id="requirements"
              rows={4}
              value={formData.requirements}
              onChange={(e) => {
                setFormData({ ...formData, requirements: e.target.value });
                if (errors.requirements) setErrors({ ...errors, requirements: null });
              }}
              placeholder="Tell us about your business, target audience, preferred pages, design references, and any specific functionality needed..."
              className={`w-full px-4 py-3 rounded-xl bg-[#F8F9FA] dark:bg-[#152336] border ${
                errors.requirements ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#EBECEF] dark:border-white/10'
              } text-[#0D1B2A] dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B4A] transition-all`}
            />
            {errors.requirements && (
              <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.requirements}</span>
              </p>
            )}
          </div>

          {/* Alpha Agency Gradient Pill Button */}
          <div>
            <button
              type="submit"
              className="w-full group inline-flex items-center justify-between px-6 py-4 rounded-full bg-gradient-to-r from-[#FF6B4A] via-[#FF7C42] to-[#FFB627] hover:opacity-95 text-white font-bold text-sm sm:text-base shadow-lg shadow-[#FF6B4A]/25 transition-all cursor-pointer"
            >
              <span>Submit & Generate Project Brief</span>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <Send className="w-4 h-4 text-white" />
              </div>
            </button>
          </div>
        </form>
      ) : (
        /* Honest Dispatch Confirmation Screen */
        <div className="py-6 space-y-6 text-center animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-heading text-[#0D1B2A] dark:text-white">
              Project Brief Formulated!
            </h3>
            <p className="text-xs sm:text-sm text-[#4C5258] dark:text-[#94A3B8] max-w-md mx-auto">
              Thank you, {formData.name}. Your project brief has been formatted. Choose how you would like to dispatch your brief to our engineering team:
            </p>
          </div>

          {/* Formatted Brief Preview Box */}
          <div className="p-4 rounded-2xl bg-[#F8F9FA] dark:bg-[#152336] border border-[#EBECEF] dark:border-white/10 text-left font-mono text-xs text-[#4C5258] dark:text-[#94A3B8] whitespace-pre-wrap max-w-lg mx-auto">
            {generateBriefText()}
          </div>

          {/* Direct Dispatch Options */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send via WhatsApp Chat</span>
            </a>

            <a
              href={mailtoUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0D1B2A] hover:bg-black text-white dark:bg-white dark:text-[#0D1B2A] dark:hover:bg-slate-100 font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Send via Email Client</span>
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10 hover:border-[#FF6B4A] text-[#0D1B2A] dark:text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied Brief!' : 'Copy to Clipboard'}</span>
            </button>
          </div>

          <div className="pt-4">
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="text-xs text-[#4C5258] dark:text-[#94A3B8] hover:text-[#FF6B4A] underline cursor-pointer"
            >
              Edit Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
