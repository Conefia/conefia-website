import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import TestimonialSlider from '@/components/landing/TestimonialSlider';
import ContourBackground from '@/components/visual/ContourBackground';
import HeroDarkBackground from '@/components/visual/HeroDarkBackground';
import BrandCarousel from '@/components/landing/BrandCarousel';
import {
  ArrowRight, Check, X, Sparkles, ShieldCheck,
  ChevronDown, Bot, BarChart3, FileText,
  Zap, Brain, Shield } from
'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BreadcrumbStructuredData, ServiceStructuredData } from '@/components/StructuredData';
import ResponsiveImage from '@/components/ui/ResponsiveImage';
import { cn } from "@/lib/utils";
import { useMobile } from '@/hooks/useMobile';

// Reusable Components
export const SectionHeading = ({ children, className }) =>
<h2 className={cn("text-4xl md:text-5xl font-700 mb-6 leading-tight", className)}>
    {children}
  </h2>;



export const Reveal = ({ children, className, delay = 0, isMobile = false }) => {
  const reduceMotion = useReducedMotion();
  // will-change-transform only during animation; removed after completion to free GPU layers
  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateY(20px)', willChange: 'transform' }}
      whileInView={{ opacity: 1, transform: 'translateY(0px)', willChange: 'auto' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: reduceMotion || isMobile ? 0 : 0.4, delay: reduceMotion || isMobile ? 0 : delay, ease: "easeOut" }}
      className={className}>
        {children}
      </motion.div>
  );
};


export const CheckListItem = ({ children }) =>
<li className="flex items-start gap-3">
    <div className="w-6 h-6 rounded-full bg-[#DBFE01] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_0_8px_rgba(219,254,1,0.4)]">
      <Check className="w-3.5 h-3.5 text-[#1a1a1a]" strokeWidth={3} />
    </div>
    <span className="text-[#1a1a1a] font-medium leading-relaxed">{children}</span>
  </li>;


export const DarkCheckListItem = ({ children }) =>
<li className="flex items-start gap-3">
    <div className="w-6 h-6 rounded-full bg-[#DBFE01] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_0_10px_rgba(219,254,1,0.35)]">
      <Check className="w-3.5 h-3.5 text-[#1a1a1a]" strokeWidth={3} />
    </div>
    <span className="text-white font-medium leading-relaxed">{children}</span>
  </li>;


export const ProblemItem = ({ children }) =>
<li className="flex items-start gap-3">
    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
      <X className="w-3.5 h-3.5 text-red-600" />
    </div>
    <span className="text-[#1a1a1a] font-medium leading-relaxed">{children}</span>
  </li>;


// --- Sections ---

export const SolutionHero = ({ title, subtitle, primaryCta, secondaryCta, trustChips = [], trustStrip = [], visual, layout = "center", microCopy, breadcrumbLabel, breadcrumb }) => {
  const reduceMotion = useReducedMotion();
  const isMobile = useMobile();

  const shouldReduceAnimations = reduceMotion || isMobile;
  
  return (
    <div>
    <section className="relative min-h-screen md:min-h-[85vh] flex items-center overflow-hidden">
        <HeroDarkBackground isMobile={isMobile} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-36 pb-12 relative z-10">
          <div className="mb-4">
            <Breadcrumbs items={[{ label: 'Solutions', path: createPageUrl('Home') + '#playbook' }, { label: breadcrumb || breadcrumbLabel || title }]} theme="dark" />
          </div>

          {layout === 'split' ?
          <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h1
                initial={{ opacity: 0, transform: 'translateY(16px)' }}
                animate={{ opacity: 1, transform: 'translateY(0)' }}
                transition={{ delay: shouldReduceAnimations ? 0 : 0.1 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 max-w-4xl leading-tight text-center md:text-left will-change-transform">
                  {title && title.replace(/\.$/, '')}
                </motion.h1>

                <motion.p
                initial={{ opacity: 0, transform: 'translateY(12px)' }}
                animate={{ opacity: 1, transform: 'translateY(0)' }}
                transition={{ delay: shouldReduceAnimations ? 0 : 0.2 }}
                className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-4 sm:mb-6 max-w-xl text-center md:text-left">
                  {subtitle}
                </motion.p>

                <motion.div
                initial={{ opacity: 0, transform: 'translateY(10px)' }}
                animate={{ opacity: 1, transform: 'translateY(0)' }}
                transition={{ delay: shouldReduceAnimations ? 0 : 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mb-3 justify-center md:justify-start">
                  <Link to={createPageUrl('Book')} className="btn-primary px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2">
                    {primaryCta}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <button onClick={() => document.getElementById('solution').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white hover:text-[#0B1020]">
                    {secondaryCta}
                  </button>
                </motion.div>
                {microCopy &&
              <p className="text-white/70 text-xs font-medium mb-6 text-left">{microCopy}</p>
              }

                {/* Trust Chips */}
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: shouldReduceAnimations ? 0 : 0.4 }}
                className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
                  {trustChips.map((chip, i) =>
                <div key={i} className="flex items-center gap-2 text-white/90 text-xs sm:text-sm font-medium bg-white/10 px-3 py-1.5 rounded-full border border-white/20 hover:bg-white/15 transition-colors">
                      {chip.icon ?
                  <chip.icon className="w-3 h-3 text-[#DBFE01]" /> :
                  <Check className="w-3 h-3 text-[#DBFE01]" />
                  }
                      {chip.name || chip}
                    </div>
                )}
                </motion.div>
              </div>

              {/* Right Column Visual */}
              <div className="relative">
                 {visual}
               </div>
            </div> : (

          /* CENTERED LAYOUT (DEFAULT) */
          <div className="max-w-4xl mx-auto text-center">
              <motion.div
               initial={{ opacity: 0, transform: 'translateY(12px)' }}
               animate={{ opacity: 1, transform: 'translateY(0)' }}
               transition={{ duration: shouldReduceAnimations ? 0 : 0.3 }}
               className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#DBFE01]/10 border border-[#DBFE01]/30 mb-4 backdrop-blur-sm">

                <Sparkles className="w-4 h-4 text-[#DBFE01]" />
                <span className="text-sm font-semibold text-[#DBFE01]">Solutions Package</span>
              </motion.div>
              
              <motion.h1
              initial={{ opacity: 0, transform: 'translateY(16px)' }}
              animate={{ opacity: 1, transform: 'translateY(0)' }}
              transition={{ delay: shouldReduceAnimations ? 0 : 0.1 }}
              className="text-3xl font-bold text-white leading-tight mb-6 text-center will-change-transform">
                {title && title.replace(/\.$/, '')}
              </motion.h1>
              
              <motion.p
              initial={{ opacity: 0, transform: 'translateY(12px)' }}
              animate={{ opacity: 1, transform: 'translateY(0)' }}
              transition={{ delay: shouldReduceAnimations ? 0 : 0.2 }}
              className="text-base md:text-lg text-white/90 leading-relaxed mb-6 max-w-2xl mx-auto">

                {subtitle}
              </motion.p>
              
              <motion.div
              initial={{ opacity: 0, transform: 'translateY(10px)' }}
              animate={{ opacity: 1, transform: 'translateY(0)' }}
              transition={{ delay: shouldReduceAnimations ? 0 : 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-6">

                <Link to={createPageUrl('Book')} className="btn-primary px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_4px_12px_rgba(219,254,1,0.25)] hover:shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset,0_0_20px_rgba(219,254,1,0.4),0_6px_20px_rgba(219,254,1,0.35)] hover:scale-105 active:scale-95 transition-all duration-300">
                   {primaryCta}
                   <ArrowRight className="w-5 h-5" />
                </Link>
                <button onClick={() => document.getElementById('solution').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white hover:text-[#0B1020]">
                   {secondaryCta}
                </button>
              </motion.div>

              {/* Trust Chips */}
              <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: shouldReduceAnimations ? 0 : 0.4 }}
              className="flex flex-wrap justify-center gap-4 md:gap-8">

                {trustChips.map((chip, i) =>
                <div key={i} className="flex items-center gap-2 text-white/90 text-sm font-medium bg-white/10 px-4 py-2 rounded-full border border-white/20 hover:bg-white/15 transition-colors">
                    {chip.icon ?
                <chip.icon className="w-4 h-4 text-[#DBFE01]" /> :

                <Check className="w-4 h-4 text-[#DBFE01]" />
                }
                    {chip.name || chip}
                  </div>
              )}
              </motion.div>

              {visual &&
            <motion.div
              initial={{ opacity: 0, transform: 'translateY(20px) scale(0.97)' }}
              animate={{ opacity: 1, transform: 'translateY(0) scale(1)' }}
              transition={{ delay: shouldReduceAnimations ? 0 : 0.5, duration: shouldReduceAnimations ? 0 : 0.6 }}
              className="mt-12 will-change-transform">

                  {visual}
                </motion.div>
            }
            </div>)
          }
        </div>
      {!reduceMotion &&
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block opacity-50 will-change-transform"
          animate={{ transform: ['translateY(0px)', 'translateY(8px)', 'translateY(0px)'] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-3 bg-white/50 rounded-full will-change-transform"
              animate={{ transform: ['translateY(0px)', 'translateY(12px)', 'translateY(0px)'], opacity: [1, 0.3, 1] }}
              transition={{ duration: shouldReduceAnimations ? 0 : 2, repeat: Infinity, ease: "easeInOut" }} />
          </div>
        </motion.div>
        }
    </section>
    <BrandCarousel />
    </div>);

};

export const SolutionMetrics = ({ title, visual, items = [] }) => {
  const isMobile = useMobile();
  return (
<section style={{ contentVisibility: 'auto', containIntrinsicSize: '0 500px' }} className="py-16 md:py-32 bg-gradient-to-br from-white via-[#FAFAFA] to-[#f0ffd9] border-b border-gray-100 relative overflow-hidden">
    <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-[#DBFE01]/25 rounded-full blur-[140px] pointer-events-none" />
    <div className="absolute -bottom-32 left-1/4 w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute top-1/3 -right-20 w-80 h-80 bg-yellow-200/15 rounded-full blur-[90px] pointer-events-none" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal>
        <h2 className="text-2xl font-bold mb-6 leading-tight text-center gradient-heading gradient-heading--premium">{title}</h2>
        {visual && <div className="mb-12">{visual}</div>}
        {items.length > 0 &&
      <div className="grid md:grid-cols-4 gap-8">
            {items.map((item, i) =>
        <motion.div
          key={i}
          whileHover={!isMobile ? { y: -5 } : {}}
          className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-all">

                  {item.includes('—') ?
          <>
                        <div className="text-3xl font-extrabold text-blue-600 mb-2 tracking-tight">{item.split('—')[0].trim()}</div>
                        <div className="font-medium text-gray-700 text-sm">{item.split('—')[1].trim()}</div>
                      </> :

          <p className="font-semibold text-lg text-[#1a1a1a]">{item}</p>
          }
                </motion.div>
        )}
          </div>
      }
      </Reveal>
    </div>
  </section>
  );
};

export const SolutionProblem = ({ title, subtitle, quote, items = [], visual }) => {
  const isMobile = useMobile();
  return (
<section style={{ contentVisibility: 'auto', containIntrinsicSize: '0 700px' }} className="py-16 md:py-32 bg-gradient-to-br from-white via-[#FAFAFA] to-rose-50/40 relative overflow-hidden">
    {/* Subtle dot grid */}
    <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:28px_28px]" />
    {/* Bold red/pink splash */}
    <div className="absolute -top-32 right-0 w-[650px] h-[650px] bg-rose-200/35 rounded-full blur-[130px] pointer-events-none" />
    <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-red-100/25 rounded-full blur-[100px] pointer-events-none" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Label */}
      <Reveal className="mb-20 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-rose-600 text-xs font-bold uppercase tracking-widest border border-rose-200">
          <X className="w-3.5 h-3.5" />
          The Problem
        </div>
        <h2 className="mt-6 text-2xl font-bold text-center leading-tight max-w-3xl gradient-heading gradient-heading--premium">
          {title || 'Why most AI MVPs get delayed and miss pilots and revenue'}
        </h2>
        {subtitle && <p className="mt-4 text-base text-[#1a1a1a]/80 font-normal leading-relaxed max-w-2xl text-center">{subtitle}</p>}
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Bullet list */}
        <Reveal>
          <ul className="space-y-4">
            {items.map((item, i) =>
            <motion.li
              key={i}
              initial={{ opacity: 0, transform: 'translateX(-12px)' }}
              whileInView={{ opacity: 1, transform: 'translateX(0)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: !isMobile ? i * 0.06 : 0 }}
            className="flex items-start gap-4 group will-change-transform">
            
                <div className="mt-0.5 w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-100 transition-colors">
                  <X className="w-4 h-4 text-rose-500" />
                </div>
                <span className="text-[#1a1a1a]/85 text-base leading-relaxed pt-1 group-hover:text-[#1a1a1a] transition-colors">{item}</span>
              </motion.li>
          )}
          </ul>

          {/* Callout quote */}
          {quote &&
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: !isMobile ? 0.4 : 0 }}
        className="mt-10 relative">
          
              <div className="relative bg-rose-50 rounded-2xl p-6 border border-rose-200 shadow-sm">
                <div className="flex gap-3 items-start">
                  <div className="text-rose-400 text-4xl font-serif leading-none mt-1 flex-shrink-0">"</div>
                  <p className="text-[#1a1a1a]/80 italic text-base leading-relaxed font-medium">{quote}</p>
                </div>
              </div>
            </motion.div>
        }
        </Reveal>

        {/* Visual */}
        <Reveal delay={0.2} className="relative">
          {visual ? visual :
        <div className="rounded-2xl bg-rose-50 border border-rose-200 p-8 relative overflow-hidden">
              <div className="flex items-center justify-center h-48">
                <div className="w-20 h-20 rounded-full bg-white border border-rose-200 flex items-center justify-center shadow-sm">
                  <X className="w-10 h-10 text-rose-400" />
                </div>
              </div>
            </div>
        }
        </Reveal>
      </div>
    </div>
  </section>);
};

export const SolutionDetails = ({ title, description, features = [], primaryCta, riskReducer, visual }) =>
<section id="solution" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 700px' }} className="py-16 md:py-32 bg-gradient-to-br from-white via-[#FAFAFA] to-[#fffaed] relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:28px_28px]" />
    <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-[#DBFE01]/28 rounded-full blur-[140px] pointer-events-none" />
    <div className="absolute -bottom-40 left-1/4 w-[550px] h-[550px] bg-amber-200/30 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-yellow-100/20 rounded-full blur-[100px] pointer-events-none" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Centered heading above the two columns */}
      <Reveal className="flex flex-col items-center text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a] text-[#DBFE01] text-xs font-bold uppercase tracking-widest border border-[#1a1a1a]">
          <Check className="w-3.5 h-3.5" />
          The Solution
        </div>
        <h2 className="mt-6 text-2xl font-bold text-center leading-tight mb-4 gradient-heading gradient-heading--premium">{title}</h2>
        {description &&
        <p className="text-base font-normal text-[#1a1a1a]/80 leading-relaxed max-w-2xl text-center">
              {description}
          </p>
      }
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="order-2 lg:order-1 relative">
            {visual ? visual :
        <div className="bg-white rounded-3xl p-8 border border-[#DBFE01] shadow-2xl shadow-[#DBFE01]/10 relative z-10" />
        }
        </Reveal>

        <Reveal delay={0.2} className="order-1 lg:order-2">
          
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 mb-4 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-[#1a1a1a] mb-5 flex items-center gap-2 text-sm uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              What you get:
            </h4>
            <ul className="grid sm:grid-cols-1 gap-4">
              {features.map((feature, i) =>
            <CheckListItem key={i}>{feature}</CheckListItem>
            )}
            </ul>
          </div>

          {riskReducer &&
          <p className="text-sm text-gray-600 italic mb-8 flex items-center gap-2 pl-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              {riskReducer}
            </p>
        }

          <Link to={createPageUrl('Book')} className="btn-primary px-8 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2 flex justify-center md:justify-start w-full md:w-auto">
            {primaryCta}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Reveal>
      </div>
    </div>
  </section>;


// Pre-computed star positions — generated once at module load, never on render
const ROADMAP_STARS_DESKTOP = Array.from({ length: 200 }, (_, i) => ({
  x: ((i * 47.3 + 11) % 100),
  y: ((i * 31.7 + 23) % 100),
  size: (i % 10) * 0.17 + 0.3,
  opacity: (i % 7) * 0.057 + 0.2,
}));
const ROADMAP_STARS_MOBILE = ROADMAP_STARS_DESKTOP.slice(0, 50);

export function RoadmapCallSection({
  title = "What you'll get in the 30-minute roadmap call",
  description = "This isn't a sales pitch. We'll leave you with a clear MVP scope, AI approach, and an 8–12 week plan to pilots.",
  items = [
  "Confirm your target user + workflow in 2 minutes",
  "Define MVP scope (must-have vs later)",
  "Recommend the AI approach (RAG vs agents vs fine-tuning)",
  "Map your 8–12 week delivery plan",
  "Flag risks early (data, compliance, cost, reliability)"],
  primaryCta = "Book Free Roadmap Call"
} = {}) {
  const isMobile = useMobile();

  const stars = isMobile ? ROADMAP_STARS_MOBILE : ROADMAP_STARS_DESKTOP;

  return (
    <section style={{ contentVisibility: 'auto', containIntrinsicSize: '0 700px' }} className="py-16 md:py-32 bg-[#2F2F2F] text-white relative overflow-hidden">
  {/* Base layer */}
  <div className="bg-stone-950 absolute inset-0" />
  {/* Contour lines */}
  <ContourBackground className="opacity-80" isMobile={isMobile} />
  {/* Star Dust — positions pre-computed, no Math.random() on render */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
   {stars.map((s, i) => (
      <div key={i} className="absolute rounded-full bg-white" style={{ left: `${s.x}%`, top: `${s.y}%`, width: `${s.size}px`, height: `${s.size}px`, opacity: s.opacity * 0.8, boxShadow: `0 0 ${s.size}px rgba(255,255,255,${s.opacity * 0.3})` }} />
    ))}
  </div>
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#DBFE01]/5 rounded-full blur-[120px] pointer-events-none" />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <Reveal className="flex flex-col items-center text-center mb-20">
      <span className="bg-white/10 text-white px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-2 border border-white/20 mb-5">
        <Sparkles className="w-4 h-4 text-[#DBFE01]" />
        Roadmap Call
      </span>
      <h2 className="text-2xl font-bold leading-tight mb-2 gradient-heading gradient-heading--glow">
        {title}
      </h2>
      <p className="text-white/80 text-base font-normal max-w-2xl">
        {description}
      </p>

    </Reveal>

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left: Content */}
      <div>
        <Reveal delay={0.1}>
          <ul className="space-y-4 mb-10 mt-4">
            {items.map((item, i) =>
            <motion.li
              key={i}
              initial={{ opacity: 0, transform: 'translateX(-12px)' }}
              whileInView={{ opacity: 1, transform: 'translateX(0)' }}
              viewport={{ once: true }}
              transition={{ delay: !isMobile ? i * 0.06 : 0, duration: 0.35 }}
              className="flex items-start gap-4">
              
                <div className="w-6 h-6 rounded-full bg-[#DBFE01] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_0_10px_rgba(219,254,1,0.3)]">
                  <Check className="w-3.5 h-3.5 text-[#1a1a1a]" strokeWidth={3} />
                </div>
                <span className="text-white/95 text-base leading-relaxed">{item}</span>
              </motion.li>
            )}
          </ul>
          <Link
            to={createPageUrl('Book')}
            className="btn-primary px-8 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2 flex justify-center md:justify-start w-full md:w-auto">
            {primaryCta || 'Book Free Roadmap Call'}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Reveal>
      </div>

      {/* Right: Stock Image */}
      <Reveal delay={0.2} className="relative">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[480px] lg:h-[560px]">
          <ResponsiveImage
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80"
            alt="Product roadmap planning meeting"
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading="lazy"
            width="900"
            height="560"
            className="w-full h-full object-cover" />
          
          {/* Dark overlay for cohesion with dark section */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1020]/60 via-transparent to-[#0B1020]/40" />

          {/* Floating badge top-right */}
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(-10px)' }}
            whileInView={{ opacity: 1, transform: 'translateY(0)' }}
            viewport={{ once: true }}
            transition={{ delay: !isMobile ? 0.6 : 0 }}
            className="absolute top-6 right-6 bg-[#DBFE01] text-[#1a1a1a] text-xs font-extrabold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg">
            
            Free · 30 min
          </motion.div>

          {/* Bottom info card */}
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(12px)' }}
            whileInView={{ opacity: 1, transform: 'translateY(0)' }}
            viewport={{ once: true }}
            transition={{ delay: !isMobile ? 0.7 : 0, duration: !isMobile ? 0.5 : 0 }}
            className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 will-change-transform">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#DBFE01] flex items-center justify-center flex-shrink-0 shadow-[0_0_16px_rgba(219,254,1,0.4)]">
                <Sparkles className="w-5 h-5 text-[#1a1a1a]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">No-pressure, all signal</p>
                <p className="text-white/80 text-xs mt-0.5">Leave with a clear plan — whether you hire us or not.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Reveal>

    </div>
  </div>
</section>
  );
}


const processStepsDefault = [
{
  title: "Validate (Weeks 1–2)",
  description: "Scope lock + pilot target + architecture blueprint. We define what \"done\" looks like."
},
{
  title: "Build (Weeks 3–10)",
  description: "AI agents + app logic + infrastructure + analytics + QA. Weekly demos you can touch."
},
{
  title: "Launch (Weeks 11–12)",
  description: "Onboarding, pricing test, pilot pipeline assets, analytics dashboards, and handoff."
},
{
  title: "Scale (Monthly)",
  description: "Activation + retention experiments + cost/performance tuning."
}];


export const SolutionProcess = ({ steps, visual, title, note, imageUrl, imageAlt, imageOverlayTitle, imageOverlayDesc }) => {
  const isMobile = useMobile();
  const shouldReduceAnimations = useReducedMotion() || isMobile;
  const displaySteps = steps && steps.length > 0 ? steps : processStepsDefault;
  return (
    <section style={{ contentVisibility: 'auto', containIntrinsicSize: '0 800px' }} className="py-16 md:py-32 bg-gradient-to-br from-white via-[#FAFAFA] to-[#f5f9f0] overflow-hidden relative">
    {/* Bold color splash blobs */}
    <div className="absolute -top-48 left-0 w-[700px] h-[700px] bg-[#DBFE01]/22 rounded-full blur-[150px] pointer-events-none -translate-x-1/3 -translate-y-1/3" />
    <div className="absolute -bottom-40 right-0 w-[550px] h-[550px] bg-emerald-200/28 rounded-full blur-[120px] pointer-events-none translate-x-1/4 translate-y-1/3" />
    <div className="absolute top-1/3 -right-40 w-[450px] h-[450px] bg-lime-100/25 rounded-full blur-[110px] pointer-events-none" />
    {/* Animated floating orbs */}
    {!shouldReduceAnimations && <motion.div
        className="absolute top-20 right-16 w-6 h-6 bg-[#DBFE01] rounded-full opacity-60 pointer-events-none"
        animate={{ transform: ['translateY(0) scale(1)', 'translateY(-18px) scale(1.2)', 'translateY(0) scale(1)'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />}
      
    {!shouldReduceAnimations && <motion.div
        className="absolute bottom-32 left-20 w-4 h-4 bg-[#DBFE01] rounded-full opacity-40 pointer-events-none"
        animate={{ transform: ['translateY(0) scale(1)', 'translateY(14px) scale(1.3)', 'translateY(0) scale(1)'] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }} />}
      
    {!shouldReduceAnimations && <motion.div
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#c5e000] rounded-full opacity-50 pointer-events-none"
        animate={{ transform: ['translate(0, 0)', 'translate(8px, -10px)', 'translate(0, 0)'] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />}
      
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <Reveal className="text-center mb-20">
        <span className="bg-[#1a1a1a]/5 text-[#1a1a1a]/60 px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-2 border border-[#1a1a1a]/10 mb-6">
          <Sparkles className="w-4 h-4 stroke-black fill-[#DBFE01]" />
          Our Process
        </span>
        <h2 className="text-2xl font-bold mb-6 leading-tight mt-6 gradient-heading gradient-heading--premium">{title || 'Build → Launch → Scale'}</h2>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: Stock Image */}
        <Reveal className="relative rounded-3xl overflow-hidden shadow-2xl lg:sticky lg:top-28 h-[420px] lg:h-[580px]">
          <ResponsiveImage
              src={imageUrl || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"}
              alt={imageAlt || "Team collaborating on a product sprint"}
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
              width="800"
              height="580"
              className="w-full h-full object-cover" />
            
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/70 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <p className="text-white font-semibold text-sm">{imageOverlayTitle || 'Each phase has a stage gate'}</p>
              <p className="text-white/85 text-xs mt-1">{imageOverlayDesc || 'You always know where you stand.'}</p>
            </div>
          </div>
        </Reveal>

        {/* Right: Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#DBFE01]/60 via-gray-200 to-gray-100" />

          <div className="space-y-0">
            {displaySteps.map((step, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, transform: 'translateX(16px)' }}
                whileInView={{ opacity: 1, transform: 'translateX(0)' }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: !isMobile ? i * 0.08 : 0, ease: "easeOut" }}
                className="flex gap-6 group pb-10 last:pb-0">
                
                {/* Step number bubble */}
                <div className="relative flex-shrink-0 z-10">
                  <motion.div
                    whileHover={!isMobile ? { scale: 1.15 } : {}}
                    className="w-10 h-10 rounded-full bg-[#DBFE01] border-4 border-white shadow-lg flex items-center justify-center font-extrabold text-[#1a1a1a] text-sm group-hover:shadow-[0_0_20px_rgba(219,254,1,0.5)] transition-shadow">
                    
                    {i + 1}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="pt-1 pb-2">
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-1.5 group-hover:text-[#1a1a1a] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
              )}
          </div>

          {/* Stage gate note */}
          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: !isMobile ? 0.4 : 0 }}
              className="mt-6 ml-16 flex items-center gap-2 text-sm text-gray-400 border-t border-gray-100 pt-6">
              
            <div className="w-2 h-2 rounded-full bg-[#DBFE01] flex-shrink-0" />
            <span className="italic text-gray-500">{note || 'Each phase has a stage gate — you always know where you stand.'}</span>
          </motion.div>
        </div>
      </div>

      {visual &&
        <Reveal className="mt-20">
          {visual}
        </Reveal>
        }
    </div>
  </section>);

};


// Pre-computed — avoids Math.random() on every SolutionOutcomes render
const OUTCOMES_STARS = Array.from({ length: 80 }, (_, i) => ({
  x: ((i * 53.1 + 7) % 100),
  y: ((i * 29.3 + 17) % 100),
  size: (i % 8) * 0.21 + 0.3,
  opacity: (i % 6) * 0.067 + 0.2,
}));

export function SolutionOutcomes({ title, items = [], visual }) {
  const isMobile = useMobile();
  return (
<section style={{ contentVisibility: 'auto', containIntrinsicSize: '0 600px' }} className="py-16 md:py-32 bg-[#2F2F2F] text-white overflow-hidden relative">
     {/* Base layer */}
     <div className="bg-stone-950 absolute inset-0" />
     {/* Contour lines */}
     <ContourBackground className="opacity-80" isMobile={isMobile} />

     <div className="absolute top-0 right-0 w-1/3 h-full bg-[#DBFE01]/5 blur-[120px] pointer-events-none" />
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
       <div className="grid lg:grid-cols-2 gap-16 items-center">
         <Reveal>
           <h2 className="text-2xl font-bold mb-6 leading-tight gradient-heading gradient-heading--glow">{typeof title === 'string' ? title.replace(/\.$/, '') : title}</h2>
           {items.length > 0 &&
        <ul className="space-y-4">
                 {items.map((item, i) =>
           <DarkCheckListItem key={i}>{item}</DarkCheckListItem>
           )}
              </ul>
        }
         </Reveal>
         <Reveal delay={0.2}>
           {visual}
         </Reveal>
       </div>
     </div>
  </section>
  );
  }


  export const SolutionUseCases = ({ useCasesTitle, useCases = [] }) => {
  const isMobile = useMobile();
  const shouldReduceAnimations = useReducedMotion() || isMobile;
  return (
    <section style={{ contentVisibility: 'auto', containIntrinsicSize: '0 600px' }} className="py-16 md:py-32 bg-gradient-to-br from-white via-[#FAFAFA] to-blue-50/30 relative overflow-hidden">
      {/* Bold color splash background */}
      <div className="absolute -top-32 left-1/4 w-[550px] h-[550px] bg-blue-200/25 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-[600px] h-[600px] bg-cyan-100/20 rounded-full blur-[120px] pointer-events-none" />
      {/* Animated AI sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {!shouldReduceAnimations && [...Array(isMobile ? 8 : 18)].map((_, i) => {
          const x = (i * 5.8 + 3) % 100;
          const y = (i * 7.3 + 8) % 100;
          const delay = i * 0.4 % 3;
          const size = i % 3 === 0 ? 'w-5 h-5' : i % 3 === 1 ? 'w-4 h-4' : 'w-3 h-3';
          return (
            <motion.div
              key={i}
              className={`absolute ${size} text-[#DBFE01]`}
              style={{ left: `${x}%`, top: `${y}%` }}
              animate={{ opacity: [0.08, 0.35, 0.08], transform: ['scale(0.8) rotate(0deg)', 'scale(1.2) rotate(20deg)', 'scale(0.8) rotate(0deg)'] }}
              transition={{ duration: 3 + i % 3, repeat: Infinity, delay, ease: "easeInOut" }}>
              
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2zm0 10l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" /></svg>
            </motion.div>);

        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-16">
          <span className="bg-[#1a1a1a]/5 text-[#1a1a1a]/60 px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-2 border border-[#1a1a1a]/10 mb-6">
            <Sparkles className="w-4 h-4 stroke-black fill-[#DBFE01]" />
            Common Use Cases
          </span>
          <h2 className="text-2xl font-bold gradient-heading gradient-heading--premium">{useCasesTitle || "Common use cases"}</h2>
        </Reveal>

        <UseCasesLinkedLight useCases={useCases} isMobile={isMobile} />
      </div>
    </section>);

};

const defaultUseCasesLeft = [
{ label: "We need an AI workflow users trust (not just chat)", icon: Brain, index: 0 },
{ label: "We need architecture done right — without rework", icon: Shield, index: 1 },
{ label: "We need pilots launched with measurable activation", icon: Zap, index: 2 }];


const defaultUseCasesRight = [
{ title: "B2B Agent Workflows", description: "Ops, support, sales, compliance automation", icon: Bot, index: 0 },
{ title: "Data & Analytics Copilots", description: "Turn raw data into decisions instantly", icon: BarChart3, index: 1 },
{ title: "GenAI Content Systems", description: "Review, governance, and workflow automation", icon: FileText, index: 2 }];


function UseCasesLinkedLight({ useCases, isMobile = false }) {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const defaultLeftIcons = [Brain, Shield, Zap];
  const defaultRightIcons = [Bot, BarChart3, FileText];

  const leftItems = useCases && useCases.length > 0 ?
  useCases.map((uc, i) => ({ label: typeof uc === 'string' ? uc : uc.label, icon: defaultLeftIcons[i % defaultLeftIcons.length], index: i })) :
  defaultUseCasesLeft;

  const rightItems = useCases && useCases.length > 0 ?
  useCases.map((uc, i) => ({ title: typeof uc === 'string' ? uc : uc.title, description: typeof uc === 'object' ? uc.description || '' : '', icon: defaultRightIcons[i % defaultRightIcons.length], index: i })) :
  defaultUseCasesRight;

  return (
    <div className="grid lg:grid-cols-2 gap-6 items-stretch">
      {/* Left: Lime cards */}
      <div className="space-y-4">
        {leftItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              onHoverStart={() => setActiveIndex(i)}
              onHoverEnd={() => setActiveIndex(null)}
              initial={{ opacity: 0, transform: 'translateX(-16px)' }}
              whileInView={{ opacity: 1, transform: 'translateX(0)' }}
              viewport={{ once: true }}
              transition={{ delay: !isMobile ? i * 0.08 : 0 }}
              whileHover={!isMobile ? { transform: 'scale(1.02)' } : {}}
              className={cn(
                "flex items-center gap-5 p-6 rounded-2xl border cursor-pointer transition-all duration-300",
                activeIndex === i ?
                "bg-[#DBFE01] border-[#b8d400] shadow-[0_8px_32px_rgba(219,254,1,0.4)]" :
                "bg-[#f2ffc0] border-[#d4f500]/50 hover:bg-[#e8ff80]"
              )}>
              
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300",
                activeIndex === i ? "bg-[#1a1a1a]" : "bg-[#DBFE01]"
              )}>
                {Icon && <Icon className={cn("w-6 h-6 transition-all duration-300", activeIndex === i ? "text-[#DBFE01]" : "text-[#1a1a1a]")} />}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className={cn("text-xs font-bold uppercase tracking-wider", activeIndex === i ? "text-[#1a1a1a]/60" : "text-[#1a1a1a]/40")}>Need #{i + 1}</span>
                </div>
                <span className="text-base leading-snug font-semibold text-[#1a1a1a]">{item.label}</span>
              </div>
            </motion.div>);

        })}
      </div>

      {/* Right: Dark cards */}
      <div className="space-y-6">
        {rightItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, transform: 'translateX(16px)' }}
              whileInView={{ opacity: 1, transform: 'translateX(0)' }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              animate={activeIndex === i ? { transform: 'scale(1.03) translateX(-4px)' } : { transform: 'scale(1) translateX(0)' }}
              className={cn(
                "p-6 rounded-2xl border transition-all duration-300 flex items-center gap-5",
                activeIndex === i ?
                "bg-[#1a1a1a] border-[#DBFE01]/40 shadow-[0_8px_32px_rgba(26,26,26,0.25),0_0_0_1px_rgba(219,254,1,0.2)]" :
                "bg-[#111] border-gray-800 hover:bg-[#1a1a1a]"
              )}>
              
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300",
                activeIndex === i ? "bg-[#DBFE01]" : "bg-white/10"
              )}>
                {Icon && <Icon className={cn("w-6 h-6 transition-all duration-300", activeIndex === i ? "text-[#1a1a1a]" : "text-white/60")} />}
              </div>
              <div>
                <h4 className={cn(
                  "font-bold text-base transition-colors duration-300 mb-1",
                  activeIndex === i ? "text-[#DBFE01]" : "text-white"
                )}>{item.title}</h4>
                {item.description &&
                <p className="text-white/70 text-sm leading-snug">{item.description}</p>
                }
              </div>
            </motion.div>);

        })}
      </div>
    </div>);

}


export const SolutionProof = ({ title, items = [], visual, testimonials = [], useCasesTitle, useCases = [], whyBuildItems = [], badge = 'Pilot-Ready MVP', statTitle = '8–12 weeks to production', statDesc = 'Scope locked. Weekly demos. No surprises.', imageUrl = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80', imageAlt = 'Engineering team shipping AI products', techStackTitle = 'Tech stack we ship with', techStackDesc = 'Proven tools we trust—so you do not gamble on your MVP.', techStackLogos = null }) => {
  const isMobile = useMobile();
  const reduceMotion = useReducedMotion();
  return (
    <>
      <section style={{ contentVisibility: 'auto', containIntrinsicSize: '0 900px' }} className="py-16 md:py-32 bg-gradient-to-b from-white via-[#FAFAFA] to-white relative overflow-hidden">
        {/* Subtle accent blob */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#DBFE01]/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DBFE01]/3 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Color splash blobs */}
          <div className="absolute -top-20 left-1/4 w-72 h-72 bg-[#DBFE01]/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#DBFE01]/8 rounded-full blur-[100px] pointer-events-none" />

          <Reveal className="flex flex-col items-center text-center mb-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a]/5 border border-[#1a1a1a]/10 mb-5">
              
              <Sparkles className="w-4 h-4 stroke-black fill-[#DBFE01]" />
              <span className="text-sm font-bold text-[#1a1a1a]/60 uppercase tracking-wider">Why we build different</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl font-bold leading-tight gradient-heading gradient-heading--premium">
              Built for speed and scale
            </motion.h2>
          </Reveal>

          <Reveal className="mb-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left: Stock image with overlays */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px] lg:h-[500px] order-2 lg:order-1">
                <ResponsiveImage
                  src={imageUrl}
                  alt={imageAlt}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  width="900"
                  height="500"
                  className="w-full h-full object-cover" />
                
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1020]/80 via-[#0B1020]/30 to-transparent" />

                {/* Floating stat card */}
                <motion.div
                  initial={{ opacity: 0, transform: 'translateY(12px)' }}
                  whileInView={{ opacity: 1, transform: 'translateY(0)' }}
                  viewport={{ once: true }}
                  transition={{ delay: !isMobile ? 0.4 : 0, duration: !isMobile ? 0.5 : 0 }}
                  className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#DBFE01] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(219,254,1,0.5)]">
                      <Zap className="w-6 h-6 text-[#1a1a1a]" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-base">{statTitle}</p>
                      <p className="text-white/80 text-sm">{statDesc}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Top badge */}
                <motion.div
                  initial={{ opacity: 0, transform: 'translateX(-12px)' }}
                  whileInView={{ opacity: 1, transform: 'translateX(0)' }}
                  viewport={{ once: true }}
                  transition={{ delay: !isMobile ? 0.5 : 0 }}
                  className="absolute top-6 left-6 bg-[#DBFE01] text-[#1a1a1a] text-xs font-extrabold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg">
                  
                  {badge}
                </motion.div>
              </div>

              {/* Right: Feature list */}
              <div className="order-1 lg:order-2">
                <div className="space-y-6">
                  {(whyBuildItems.length > 0 ? whyBuildItems : [
                  { num: "01", title: "Ship weekly, not someday", desc: "Modern full-stack (React / Node / Python) with CI/CD from day one.", color: "from-[#DBFE01]/20 to-[#DBFE01]/5", border: "border-[#DBFE01]/30" },
                  { num: "02", title: "RAG that holds up under pressure", desc: "Reliable retrieval with Pinecone or pgvector—built for real usage, not demos.", color: "from-blue-50 to-indigo-50/30", border: "border-blue-200/50" },
                  { num: "03", title: "Ready for real teams", desc: "Roles + permissions from day one, so pilots don't break when customers invite teammates.", color: "from-emerald-50 to-teal-50/30", border: "border-emerald-200/50" },
                  { num: "04", title: "Know what's working", desc: "LangSmith evals + tracing so quality improves and costs stay predictable.", color: "from-purple-50 to-violet-50/30", border: "border-purple-200/50" }]).
                  map((item, i) =>
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, transform: 'translateX(16px)' }}
                    whileInView={{ opacity: 1, transform: 'translateX(0)' }}
                    viewport={{ once: true }}
                    transition={{ delay: !isMobile ? i * 0.08 : 0, duration: 0.4 }}
                    whileHover={!isMobile ? { transform: 'translateX(4px)' } : {}}
                    className={`flex items-start gap-5 p-5 rounded-2xl bg-gradient-to-br ${item.color || 'from-gray-50 to-gray-50/30'} border ${item.border || 'border-gray-200/50'} transition-all duration-300 group`}>
                    
                      <div className="text-2xl font-extrabold text-[#1a1a1a]/15 group-hover:text-[#1a1a1a]/25 transition-colors leading-none flex-shrink-0 pt-0.5 w-8">{item.num}</div>
                      <div>
                        <h4 className="font-bold text-base text-[#1a1a1a] mb-1">{item.title}</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#1a1a1a]/20 group-hover:text-[#1a1a1a]/50 ml-auto flex-shrink-0 mt-1 transition-all group-hover:translate-x-1 duration-300" />
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-16 pt-12 border-t border-gray-100">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-[#1a1a1a]">{techStackTitle}</h3>
            </div>
            <p className="text-[#1a1a1a]/80 text-base font-medium mb-8 text-center">{techStackDesc}</p>
            
            <div className="relative overflow-hidden">
              {(() => {
                const logos = techStackLogos || [
                { name: "OpenAI", url: "https://logo.svgcdn.com/logos/openai-icon.svg" },
                { name: "Anthropic", url: "https://logo.svgcdn.com/l/anthropic-icon.svg" },
                { name: "Google Gemini", url: "https://logo.svgcdn.com/logos/google-gemini.svg" },
                { name: "Azure", url: "https://logo.svgcdn.com/logos/microsoft-azure.svg" },
                { name: "LangChain", url: "https://logo.svgcdn.com/simple-icons/langchain-dark.svg" },
                { name: "LangGraph", url: "https://logo.svgcdn.com/simple-icons/langgraph-dark.svg" },
                { name: "Pinecone", url: "https://logo.svgcdn.com/logos/pinecone.svg" },
                { name: "PostgreSQL", url: "https://logo.svgcdn.com/logos/postgresql.svg" },
                { name: "AWS", url: "https://logo.svgcdn.com/logos/aws.svg" },
                { name: "Google Cloud", url: "https://logo.svgcdn.com/logos/google-cloud.svg" },
                { name: "Docker", url: "https://logo.svgcdn.com/logos/docker.svg" },
                { name: "Kubernetes", url: "https://logo.svgcdn.com/logos/kubernetes.svg" }];

                const duration = logos.length * 3;
                const animName = `logo-scroll-${logos.length}`;
                return (
                  <>
                    <style>{`
                      @keyframes ${animName} {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                      }
                    `}</style>
                    <div
                      className="flex gap-8 pb-6"
                      style={{ width: 'max-content', animation: `${animName} ${duration}s linear infinite` }}>
                      {[...logos, ...logos].map((tech, i) =>
                      <div key={i} className={`flex-shrink-0 h-20 ${tech.wide === 'xl' ? 'w-52' : tech.wide ? 'w-40' : 'w-28'}`}>
                          <div className="w-full h-full bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group" style={{ padding: '12px 16px' }}>
                            <img
                            src={tech.url}
                            alt={tech.name}
                            className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform"
                            loading="lazy"
                            decoding="async"
                            width="80"
                            height="40"
                            style={{ width: '100%', height: '100%' }} />
                          
                          </div>
                        </div>
                      )}
                    </div>
                  </>);

              })()}
            </div>
          </Reveal>
        </div>
      </section>

      <TestimonialSlider
        testimonials={testimonials.map((t) => ({
          id: t.author,
          content: t.quote,
          client_name: t.author,
          client_role: t.role,
          client_company: "",
          rating: 5
        }))}
        title={title}
        reduceMotion={reduceMotion} />


    </>);

};

export const SolutionFAQ = ({ items = [] }) => {
  const [showAll, setShowAll] = React.useState(false);
  const displayItems = showAll ? items : items.slice(0, 5);

  return (
    <section style={{ contentVisibility: 'auto', containIntrinsicSize: '0 600px' }} className="py-16 md:py-32 bg-gradient-to-b from-white via-[#FAFAFA] to-slate-50/50 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.02]" />
    <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-purple-200/28 rounded-full blur-[130px] pointer-events-none" />
    <div className="absolute -bottom-32 right-1/3 w-[550px] h-[550px] bg-[#DBFE01]/20 rounded-full blur-[140px] pointer-events-none" />
    <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-100/20 rounded-full blur-[100px] pointer-events-none" />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="text-center mb-20">
        <span className="bg-gradient-to-r from-[#1a1a1a]/5 to-[#2F2F2F]/5 text-[#1a1a1a]/70 px-4 py-2.5 text-sm font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-2 border border-[#1a1a1a]/15 mb-6 shadow-sm">
          <Sparkles className="w-4 h-4 stroke-black fill-[#DBFE01]" />
          FAQ
        </span>
        <h2 className="text-2xl font-bold mb-6 gradient-heading gradient-heading--premium">
         Common questions, answered
        </h2>
      </Reveal>
      
      <div className="space-y-6 relative z-10">
        {displayItems.map((item, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, transform: 'translateY(16px)' }}
            whileInView={{ opacity: 1, transform: 'translateY(0)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0 }}
            className="relative will-change-transform">
            
          <details className="group w-full bg-white rounded-2xl p-6 transition-all duration-300 border border-gray-200/50 hover:border-[#DBFE01]/50 hover:shadow-xl hover:shadow-[#DBFE01]/10 shadow-md relative z-20">
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none relative z-30">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-[#1a1a1a]/5 group-open:bg-[#DBFE01] shadow-sm">
                  <span className="text-lg font-bold text-[#2F2F2F]/60 group-open:text-[#1a1a1a] transition-colors">?</span>
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a]">{item.question}</h3>
              </div>
              <ChevronDown className="w-5 h-5 text-[#2F2F2F]/40 transition-transform duration-300 group-open:rotate-180 flex-shrink-0" />
            </summary>
            <div className="text-[#2F2F2F]/80 mt-4 pl-14 leading-relaxed font-medium">
              {item.answer}
            </div>
          </details>
        </motion.div>
          )}
      </div>

      {items.length > 5 &&
        <Reveal delay={0.2} className="mt-8 text-center relative z-20">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-[#1a1a1a] font-bold underline decoration-[#DBFE01] decoration-2 underline-offset-2 hover:text-black hover:decoration-4 transition-all">
            
            {showAll ? 'Show less' : 'Read more'}
          </button>
        </Reveal>
        }

      <Reveal delay={0.3} className="mt-8 text-center relative z-20">
        <p className="text-sm text-[#2F2F2F]/75">Still unsure? <Link to={createPageUrl('book')} className="text-[#1a1a1a] font-bold underline decoration-[#DBFE01] decoration-2 underline-offset-2 hover:text-black hover:decoration-4 transition-all">Book a quick chat</Link></p>
      </Reveal>
    </div>
  </section>);

};


export const SolutionFinalCta = ({ title, description, primaryCta, secondaryCta, visual }) =>
<section style={{ contentVisibility: 'auto', containIntrinsicSize: '0 400px' }} className="py-16 md:py-32 bg-[#DBFE01] relative overflow-hidden">
    {/* Subtle Pattern */}
    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#1a1a1a 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
    
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <Reveal>
        <h2 className="text-2xl font-bold mb-6 leading-tight text-[#1a1a1a]">
          {title}
        </h2>
        {description && <p className="text-[#1a1a1a]/80 text-base font-normal mb-8 max-w-2xl mx-auto">{description}</p>}
        
        <div className="flex flex-col items-center gap-4">
          <Link
          to={createPageUrl('Book')}
          className="btn-primary px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2">
            Book 30-mins Free Roadmap Call
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
          href="mailto:info@conefia.com"
          className="text-[#1a1a1a]/70 hover:text-[#1a1a1a] font-semibold text-sm transition-colors">
            Prefer to message us? <span className="underline">Contact us</span>
          </a>
        </div>
      </Reveal>
      
      {visual &&
    <Reveal delay={0.2} className="mt-12">
          {visual}
        </Reveal>
    }
      
      <Reveal delay={0.3}>
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {[
        { icon: "🕐", label: "Free 30-min call" },
        { icon: "🚫", label: "No sales pitch" },
        { icon: "📋", label: "Get your roadmap" },
        { icon: "✅", label: "No commitment" }].
        map((item) =>
        <div key={item.label} className="flex items-center gap-2 bg-[#1a1a1a]/15 rounded-full px-4 py-2 text-xs font-bold text-[#1a1a1a] tracking-wide">
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
        )}
        </div>
      </Reveal>
    </div>
  </section>;


// cv = content-visibility shorthand — defers off-screen section rendering on mobile
const cvStyle = (size = '0 700px') => ({ contentVisibility: 'auto', containIntrinsicSize: size });

// Main Wrapper for Layout
export default function SeoLandingPage({ content, children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (children) {
    // Wrap children in a single container — each child section manages its own
    // content-visibility via its own wrapper in the page files.
    return (
      <div className="min-h-screen bg-[#FAFAFA] font-['Poppins',sans-serif]">
        {children}
      </div>
    );
  }

  // Legacy Object Support
  const {
    meta, hero, metrics, trustedBy, problem,
    solution, howItWorks, outcomes, proof, faq, finalCta
  } = content;

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-['Poppins',sans-serif]">
      <Seo title={meta.title} description={meta.description} canonical={meta.url} />
      <BreadcrumbStructuredData items={[{ label: 'Home', path: '/' }, { label: 'Solutions', path: '/#playbook' }, { label: meta.title }]} />
      <ServiceStructuredData name={meta.title} description={meta.description} url={meta.url} />

      {/* Hero is always above fold — no content-visibility */}
      <SolutionHero {...hero} />

      {metrics && (
        <div style={cvStyle('0 500px')}><SolutionMetrics {...metrics} /></div>
      )}
      <div style={cvStyle()}><SolutionProblem {...problem} /></div>
      <div style={cvStyle()}><SolutionDetails {...solution} /></div>
      <div style={cvStyle('0 800px')}><SolutionProcess {...howItWorks} /></div>
      {outcomes && (
        <div style={cvStyle()}><SolutionOutcomes {...outcomes} /></div>
      )}
      <div style={cvStyle('0 900px')}><SolutionProof {...proof} /></div>
      <div style={cvStyle('0 600px')}><SolutionFAQ {...faq} /></div>
      <div style={cvStyle('0 400px')}><SolutionFinalCta {...finalCta} /></div>
    </div>
  );
}