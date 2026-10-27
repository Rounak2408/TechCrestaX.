import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Loader2 } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  showArrow = false,
  isLoading = false,
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) {
  const baseStyles = "relative overflow-hidden inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 cubic-bezier(0.16,1,0.3,1) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-[#FF6248] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer hover:scale-[1.02] active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5 font-semibold",
    md: "text-sm px-5 py-2.5 gap-2 font-semibold",
    lg: "text-base px-6 py-3 gap-2.5 font-semibold",
    icon: "p-2.5 rounded-full aspect-square",
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-[#FF6B4A] via-[#FF7C42] to-[#FFB627] text-white font-bold shadow-md hover:shadow-lg shadow-[#FF6B4A]/25 active:scale-[0.99]",
    coral: "bg-gradient-to-r from-[#FF6B4A] via-[#FF7C42] to-[#FFB627] text-white font-bold shadow-md hover:shadow-lg shadow-[#FF6B4A]/25 active:scale-[0.99]",
    blush: "bg-gradient-to-r from-[#FF6B4A] via-[#FF7C42] to-[#FFB627] text-white font-bold shadow-md hover:shadow-lg shadow-[#FF6B4A]/25 active:scale-[0.99]",
    secondary: "bg-white text-[#0D1B2A] dark:bg-[#0D1B2A] dark:text-white border border-[#EBECEF] dark:border-white/10 hover:border-[#FF6B4A] shadow-xs active:scale-[0.99]",
    outline: "bg-transparent text-[#0D1B2A] dark:text-white border border-[#EBECEF] dark:border-white/15 hover:border-[#FF6B4A] hover:text-[#FF6B4A] active:scale-[0.99]",
    ghost: "bg-transparent text-[#4C5258] dark:text-slate-300 hover:text-[#FF6B4A] dark:hover:text-white hover:bg-[#FF6B4A]/10 active:scale-[0.99]",
    lime: "bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] text-white font-bold shadow-sm active:scale-[0.99]",
    dark: "bg-[#0D1B2A] text-white hover:bg-black shadow-md",
    white: "bg-white text-[#0D1B2A] font-bold hover:bg-slate-100 shadow-sm active:scale-[0.99]",
    darkOutline: "bg-[#0D1B2A] text-white font-medium border border-white/15 hover:bg-black hover:border-white/30 shadow-xs active:scale-[0.99]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const isHighlighted = variant === 'coral' || variant === 'blush' || variant === 'primary';

  const content = (
    <>
      {/* Animated Light Sheen on Hover / Idle */}
      {isHighlighted && (
        <span
          className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out"
          aria-hidden="true"
        />
      )}
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current relative z-10" />
      ) : Icon ? (
        <Icon className="w-4 h-4 relative z-10" />
      ) : null}
      <span className="relative z-10">{children}</span>
      {showArrow && !isLoading && (
        <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combinedClasses}`} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('https://wa.me');
    return (
      <a
        href={href}
        className={`group ${combinedClasses}`}
        target={isExternal && !href.startsWith('mailto:') ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`group ${combinedClasses}`}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}
