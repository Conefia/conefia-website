import React, { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import TestimonialSlider from '@/components/landing/TestimonialSlider';
import ContourBackground from '@/components/visual/ContourBackground';
import HeroDarkBackground from '@/components/visual/HeroDarkBackground';
import BrandCarousel from '@/components/landing/BrandCarousel';
import {
  ArrowRight, Check, X, Sparkles, ShieldCheck,
  ChevronDown, ChevronUp } from
'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BreadcrumbStructuredData, ServiceStructuredData } from '@/components/StructuredData';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

// Reusable Components
export const SectionHeading = ({ children, className }) =>
<h2 className={cn("text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6", className)}>
    {children}
  </h2>;


export const Reveal = ({ children, className, delay = 0 }) =>
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.5, delay, ease: "easeOut" }}
  className={className}>

    {children}
  </motion.div>;


export const CheckListItem = ({ children }) =>
<li className="flex items-start gap-3">
    <div className="w-6 h-6 rounded-full bg-[#DBFE01]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
      <Check className="w-3.5 h-3.5 text-[#1a1a1a]" />
    </div>
    <span className="text-[#1a1a1a]/80 font-medium leading-relaxed">{children}</span>
  </li>;


export const DarkCheckListItem = ({ children }) =>
<li className="flex items-start gap-3">
    <div className="w-6 h-6 rounded-full bg-[#DBFE01]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
      <Check className="w-3.5 h-3.5 text-[#DBFE01]" />
    </div>
    <span className="text-white/80 font-medium leading-relaxed">{children}</span>
  </li>;


export const ProblemItem = ({ children }) =>
<li className="flex items-start gap-3">
    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
      <X className="w-3.5 h-3.5 text-red-600" />
    </div>
    <span className="text-[#1a1a1a]/80 font-medium leading-relaxed">{children}</span>
  </li>;


// --- Sections ---

export const SolutionHero = ({ title, subtitle, primaryCta, secondaryCta, trustChips = [], trustStrip = [], visual, layout = "center", microCopy }) => {
  const reduceMotion = useReducedMotion();
  return (
    <div>
    <section className="relative min-h-screen md:min-h-[85vh] flex items-center pt-16 md:pt-0 overflow-hidden">
        <HeroDarkBackground />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-4 pb-4 md:pb-2 relative z-10">
          <div className="mb-4">
            <Breadcrumbs items={[{ label: 'Solutions', path: createPageUrl('Home') + '#playbook' }, { label: title }]} theme="dark" />
          </div>

          {layout === 'split' ?
        <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 max-w-4xl leading-tight">

                  {title && title.split(/(\bAI\b|\bMVP\b|\bShip\b|8–12)/).map((part, i) => 
                   ['AI', 'MVP', 'Ship', '8–12'].includes(part) ? 
                   <span key={i} className="bg-gradient-to-r from-[#DBFE01] to-[#c5e000] bg-clip-text text-transparent">{part}</span> : 
                   part
                 )}
                </motion.h1>
                
                <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base text-white/80 leading-relaxed mb-6 max-w-xl">

                  Scope locked by week 2. Production-ready LLM architecture. Full product + launch kit to win pilots — under one accountable team.
                </motion.p>
                
                <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-3">

                  <Link to={createPageUrl('Book')} className="btn-primary px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_4px_12px_rgba(219,254,1,0.25)] hover:shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset,0_6px_20px_rgba(219,254,1,0.35)] hover:scale-105 transition-all">
                    {primaryCta}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <button onClick={() => document.getElementById('solution').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white hover:text-[#0B1020] transition-all hover:scale-105">
                    {secondaryCta}
                  </button>
                </motion.div>
                {microCopy && (
                  <p className="text-white/50 text-xs font-medium mb-6">{microCopy}</p>
                )}

                {/* Trust Chips - Left Aligned */}
                <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-8">

                  {trustChips.map((chip, i) =>
              <div key={i} className="flex items-center gap-2 text-white/70 text-xs font-medium bg-white/5 px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#DBFE01]/10 border border-[#DBFE01]/30 mb-4 backdrop-blur-sm">

                <Sparkles className="w-4 h-4 text-[#DBFE01]" />
                <span className="text-sm font-semibold text-[#DBFE01]">Solutions Package</span>
              </motion.div>
              
              <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">

                {title}
              </motion.h1>
              
              <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-white/80 leading-relaxed mb-6 max-w-2xl mx-auto">

                {subtitle}
              </motion.p>
              
              <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-6">

                <Link to={createPageUrl('Book')} className="btn-primary px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_4px_12px_rgba(219,254,1,0.25)] hover:shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset,0_6px_20px_rgba(219,254,1,0.35)] hover:scale-105 transition-all">
                   {primaryCta}
                   <ArrowRight className="w-5 h-5" />
                </Link>
                <button onClick={() => document.getElementById('solution').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white hover:text-[#0B1020] transition-all hover:scale-105">
                   {secondaryCta}
                </button>
              </motion.div>

              {/* Trust Chips */}
              <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8">

                {trustChips.map((chip, i) =>
            <div key={i} className="flex items-center gap-2 text-white/70 text-sm font-medium bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
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
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-12">

                  {visual}
                </motion.div>
          }
            </div>)
        }
        </div>
      {!reduceMotion &&
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block opacity-50"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-3 bg-white/50 rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
          </div>
        </motion.div>
      }
    </section>
    <BrandCarousel />
    </div>);

};

export const SolutionMetrics = ({ title, visual, items = [] }) =>
<section className="py-20 bg-white border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeading className="text-center">{title}</SectionHeading>
        {visual && <div className="mb-12">{visual}</div>}
        {items.length > 0 &&
      <div className="grid md:grid-cols-4 gap-6">
            {items.map((item, i) =>
        <motion.div
          key={i}
          whileHover={{ y: -5 }}
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
  </section>;





export const SolutionProblem = ({ title, quote, items = [], visual }) =>
<section className="py-24 bg-white relative overflow-hidden">
    {/* Subtle dot grid */}
    <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:28px_28px]" />
    {/* Soft red accent blob */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-50 rounded-full blur-[100px] pointer-events-none opacity-60" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Label */}
      <Reveal className="mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-rose-600 text-xs font-bold uppercase tracking-widest border border-rose-200">
          <X className="w-3.5 h-3.5" />
          The Problem
        </div>
        <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] leading-tight max-w-3xl">
          {title || "Your MVP keeps moving — and traction stays unclear."}
        </h2>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Bullet list */}
        <Reveal>
          <ul className="space-y-4">
            {items.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="mt-0.5 w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-100 transition-colors">
                  <X className="w-4 h-4 text-rose-500" />
                </div>
                <span className="text-[#1a1a1a]/75 text-base leading-relaxed pt-1 group-hover:text-[#1a1a1a] transition-colors">{item}</span>
              </motion.li>
            ))}
          </ul>

          {/* Callout quote */}
          {quote && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10 relative"
            >
              <div className="relative bg-rose-50 rounded-2xl p-6 border border-rose-200 shadow-sm">
                <div className="flex gap-3 items-start">
                  <div className="text-rose-400 text-4xl font-serif leading-none mt-1 flex-shrink-0">"</div>
                  <p className="text-[#1a1a1a]/80 italic text-base leading-relaxed font-medium">{quote}</p>
                </div>
              </div>
            </motion.div>
          )}
        </Reveal>

        {/* Visual */}
        <Reveal delay={0.2} className="relative">
          {visual ? visual : (
            <div className="rounded-2xl bg-rose-50 border border-rose-200 p-8 relative overflow-hidden">
              <div className="flex items-center justify-center h-48">
                <div className="w-20 h-20 rounded-full bg-white border border-rose-200 flex items-center justify-center shadow-sm">
                  <X className="w-10 h-10 text-rose-400" />
                </div>
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </div>
  </section>;


export const SolutionDetails = ({ title, description, features = [], primaryCta, riskReducer, visual }) =>
<section id="solution" className="py-24 bg-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:28px_28px]" />
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#DBFE01]/10 rounded-full blur-[120px] pointer-events-none" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="order-2 lg:order-1 relative">
            {visual ? visual : (
            <div className="bg-white rounded-3xl p-8 border border-[#DBFE01] shadow-2xl shadow-[#DBFE01]/10 relative z-10" />
            )}
        </Reveal>

        <Reveal delay={0.2} className="order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a] text-[#DBFE01] text-xs font-bold uppercase tracking-widest mb-6 border border-[#1a1a1a]">
            <Check className="w-3.5 h-3.5" />
            The Solution
          </div>
          <SectionHeading>{title}</SectionHeading>
          <p className="text-lg text-[#1a1a1a]/70 mb-8 leading-relaxed">
            {description}
          </p>
          
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

          {riskReducer && (
            <p className="text-sm text-gray-500 italic mb-8 flex items-center gap-2 pl-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              {riskReducer}
            </p>
          )}

          <Link to={createPageUrl('Book')} className="btn-primary px-8 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2 shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_4px_12px_rgba(219,254,1,0.25)] hover:shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset,0_6px_20px_rgba(219,254,1,0.35)] hover:scale-105 transition-all">
            {primaryCta}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Reveal>
      </div>
    </div>
  </section>;


export const RoadmapCallSection = () =>
<section className="py-24 bg-[#2F2F2F] text-white relative overflow-hidden">
  {/* Base layer */}
  <div className="bg-stone-950 absolute inset-0" />
  {/* Contour lines */}
  <ContourBackground className="opacity-80" />
  {/* Star Dust */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(200)].map((_, i) => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 2 + 0.3;
      const opacity = Math.random() * 0.6 + 0.2;
      return (
        <div key={`star-${i}`} className="absolute rounded-full bg-white" style={{ left: `${x}%`, top: `${y}%`, width: `${size}px`, height: `${size}px`, opacity: opacity * 0.8, boxShadow: `0 0 ${size}px rgba(255,255,255,${opacity * 0.3})` }} />
      );
    })}
  </div>
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#DBFE01]/5 rounded-full blur-[120px] pointer-events-none" />

  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <Reveal className="text-center mb-4">
      <span className="bg-white/10 text-white px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-2 border border-white/20 mb-6">
        <Sparkles className="w-4 h-4 text-[#DBFE01]" />
        Roadmap Call
      </span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
        What you'll get in the 30-minute roadmap call
      </h2>
      <p className="text-white/60 text-lg max-w-xl mx-auto">
        This isn't a generic sales chat. We'll map your MVP like we're shipping it.
      </p>
    </Reveal>

    <Reveal delay={0.1} className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
      <ul className="space-y-5 mb-10">
        {[
          "Confirm your target user + workflow in 2 minutes",
          "Define MVP scope (must-have vs later)",
          "Recommend the AI approach (RAG vs agents vs fine-tuning)",
          "Map your 8–12 week delivery plan",
          "Flag risks early (data, compliance, cost, reliability)"
        ].map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-start gap-4"
          >
            <div className="w-6 h-6 rounded-full bg-[#DBFE01] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_0_10px_rgba(219,254,1,0.3)]">
              <Check className="w-3.5 h-3.5 text-[#1a1a1a]" strokeWidth={3} />
            </div>
            <span className="text-white/80 text-base leading-relaxed">{item}</span>
          </motion.li>
        ))}
      </ul>
      <div className="flex justify-center">
        <Link
          to={createPageUrl('Book')}
          className="btn-primary px-8 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2 shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_4px_12px_rgba(219,254,1,0.25)] hover:shadow-[0_4px_20px_rgba(219,254,1,0.4)] hover:scale-105 transition-all"
        >
          Get MVP Plan
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </Reveal>
  </div>
</section>;


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
  }
];

export const SolutionProcess = ({ steps, visual }) => {
  const displaySteps = steps && steps.length > 0 ? steps : processStepsDefault;
  return (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="text-center mb-16">
        <span className="bg-white/10 text-[#1a1a1a] px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-2 border border-[#1a1a1a]/20 mb-6 bg-[#1a1a1a]/5">
          <Sparkles className="w-4 h-4 text-[#1a1a1a]" />
          Our Process
        </span>
        <SectionHeading className="mt-4">Build → Launch → Scale</SectionHeading>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: Stock Image */}
        <Reveal className="relative rounded-3xl overflow-hidden shadow-2xl lg:sticky lg:top-28 h-[420px] lg:h-[580px]">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
            alt="Team collaborating on a product sprint"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/70 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <p className="text-white font-semibold text-sm">Each phase has a stage gate</p>
              <p className="text-white/70 text-xs mt-1">You always know where you stand.</p>
            </div>
          </div>
        </Reveal>

        {/* Right: Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#DBFE01]/60 via-gray-200 to-gray-100" />

          <div className="space-y-0">
            {displaySteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                className="flex gap-6 group pb-10 last:pb-0"
              >
                {/* Step number bubble */}
                <div className="relative flex-shrink-0 z-10">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-10 h-10 rounded-full bg-[#DBFE01] border-4 border-white shadow-lg flex items-center justify-center font-extrabold text-[#1a1a1a] text-sm group-hover:shadow-[0_0_20px_rgba(219,254,1,0.5)] transition-shadow"
                  >
                    {i + 1}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="pt-1 pb-2">
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-1.5 group-hover:text-[#1a1a1a] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stage gate note */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-6 ml-16 flex items-center gap-2 text-sm text-gray-400 border-t border-gray-100 pt-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#DBFE01] flex-shrink-0" />
            <span className="italic">Each phase has a stage gate — you always know where you stand.</span>
          </motion.div>
        </div>
      </div>

      {visual &&
        <Reveal className="mt-20">
          {visual}
        </Reveal>
      }
    </div>
  </section>
  );
};


export const SolutionOutcomes = ({ title, items = [], visual }) =>
<section className="py-24 bg-[#2F2F2F] text-white overflow-hidden relative">
     {/* Base layer */}
     <div className="bg-stone-950 absolute inset-0" />
     
     {/* Contour lines */}
     <ContourBackground className="opacity-80" />

     {/* Static Star Dust */}
     <div className="absolute inset-0 overflow-hidden pointer-events-none">
       {[...Array(300)].map((_, i) => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 2 + 0.3;
      const opacity = Math.random() * 0.6 + 0.2;
      const isTwinkle = Math.random() > 0.92;

      if (isTwinkle) {
        const twinkleSize = Math.random() * 3 + 2;
        return (
          <div
            key={`star-${i}`}
            className="absolute"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: `${twinkleSize}px`,
              height: `${twinkleSize}px`,
            }}>
            <div 
              className="absolute bg-white rounded-full"
              style={{
                width: '100%',
                height: '100%',
                opacity: opacity * 1.2,
                boxShadow: `
                  0 0 ${twinkleSize * 2}px ${twinkleSize}px rgba(219, 254, 1, ${opacity * 0.6}),
                  0 ${-twinkleSize * 4}px ${twinkleSize * 2}px 0px rgba(219, 254, 1, ${opacity * 0.4}),
                  0 ${twinkleSize * 4}px ${twinkleSize * 2}px 0px rgba(219, 254, 1, ${opacity * 0.4}),
                  ${-twinkleSize * 4}px 0 ${twinkleSize * 2}px 0px rgba(219, 254, 1, ${opacity * 0.4}),
                  ${twinkleSize * 4}px 0 ${twinkleSize * 2}px 0px rgba(219, 254, 1, ${opacity * 0.4})
                `
              }} />
          </div>
        );
      }

      return (
        <div
          key={`star-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: `${size}px`,
            height: `${size}px`,
            opacity: opacity * 0.8,
            boxShadow: `0 0 ${size}px rgba(255, 255, 255, ${opacity * 0.3})`
          }} />);

    })}
     </div>

     <div className="absolute top-0 right-0 w-1/3 h-full bg-[#DBFE01]/5 blur-[120px] pointer-events-none" />
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
       <div className="grid lg:grid-cols-2 gap-16 items-center">
         <Reveal>
           <SectionHeading className="text-white">{title}</SectionHeading>
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
  </section>;


export const SolutionProof = ({ title, items = [], visual, testimonials = [], useCasesTitle, useCases = [] }) => {
  const reduceMotion = useReducedMotion();
  return (
    <>
      <section className="py-24 bg-[#2F2F2F] text-white relative overflow-hidden">
        {/* Base layer */}
        <div className="bg-stone-950 absolute inset-0" />
        
        {/* Contour lines */}
        <ContourBackground className="opacity-80" />

        {/* Static Star Dust */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(300)].map((_, i) => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const size = Math.random() * 2 + 0.3;
            const opacity = Math.random() * 0.6 + 0.2;
            const isTwinkle = Math.random() > 0.92;

            if (isTwinkle) {
              const twinkleSize = Math.random() * 3 + 2;
              return (
                <div
                  key={`star-${i}`}
                  className="absolute"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    width: `${twinkleSize}px`,
                    height: `${twinkleSize}px`,
                  }}>
                  <div 
                    className="absolute bg-white rounded-full"
                    style={{
                      width: '100%',
                      height: '100%',
                      opacity: opacity * 1.2,
                      boxShadow: `
                        0 0 ${twinkleSize * 2}px ${twinkleSize}px rgba(219, 254, 1, ${opacity * 0.6}),
                        0 ${-twinkleSize * 4}px ${twinkleSize * 2}px 0px rgba(219, 254, 1, ${opacity * 0.4}),
                        0 ${twinkleSize * 4}px ${twinkleSize * 2}px 0px rgba(219, 254, 1, ${opacity * 0.4}),
                        ${-twinkleSize * 4}px 0 ${twinkleSize * 2}px 0px rgba(219, 254, 1, ${opacity * 0.4}),
                        ${twinkleSize * 4}px 0 ${twinkleSize * 2}px 0px rgba(219, 254, 1, ${opacity * 0.4})
                      `
                    }} />
                </div>
              );
            }

            return (
              <div
                key={`star-${i}`}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity: opacity * 0.8,
                  boxShadow: `0 0 ${size}px rgba(255, 255, 255, ${opacity * 0.3})`
                }} />);

          })}
        </div>

        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#DBFE01_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal className="text-center mb-16">
            <SectionHeading className="text-white">{title}</SectionHeading>
            {visual && <div className="mt-8">{visual}</div>}
          </Reveal>

          {items.length > 0 &&
          <Reveal className="grid md:grid-cols-3 gap-8 mb-16">
              {items.map((item, i) =>
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <Check className="w-8 h-8 text-[#DBFE01] mb-4" />
                  <p className="font-semibold text-lg">{item}</p>
                </div>
            )}
            </Reveal>
          }
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


      <section className="py-24 bg-[#2F2F2F] text-white relative overflow-hidden pt-0">
        {/* Base layer */}
        <div className="bg-stone-950 absolute inset-0" />
        
        {/* Contour lines */}
        <ContourBackground className="opacity-80" />

        {/* Static Star Dust */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(300)].map((_, i) => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const size = Math.random() * 2 + 0.3;
            const opacity = Math.random() * 0.6 + 0.2;
            const isTwinkle = Math.random() > 0.92;

            if (isTwinkle) {
              const twinkleSize = Math.random() * 3 + 2;
              return (
                <div
                  key={`star-${i}`}
                  className="absolute"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    width: `${twinkleSize}px`,
                    height: `${twinkleSize}px`,
                  }}>
                  <div 
                    className="absolute bg-white rounded-full"
                    style={{
                      width: '100%',
                      height: '100%',
                      opacity: opacity * 1.2,
                      boxShadow: `
                        0 0 ${twinkleSize * 2}px ${twinkleSize}px rgba(219, 254, 1, ${opacity * 0.6}),
                        0 ${-twinkleSize * 4}px ${twinkleSize * 2}px 0px rgba(219, 254, 1, ${opacity * 0.4}),
                        0 ${twinkleSize * 4}px ${twinkleSize * 2}px 0px rgba(219, 254, 1, ${opacity * 0.4}),
                        ${-twinkleSize * 4}px 0 ${twinkleSize * 2}px 0px rgba(219, 254, 1, ${opacity * 0.4}),
                        ${twinkleSize * 4}px 0 ${twinkleSize * 2}px 0px rgba(219, 254, 1, ${opacity * 0.4})
                      `
                    }} />
                </div>
              );
            }

            return (
              <div
                key={`star-${i}`}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity: opacity * 0.8,
                  boxShadow: `0 0 ${size}px rgba(255, 255, 255, ${opacity * 0.3})`
                }} />);

          })}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal delay={0.2} className="bg-[#2F2F2F] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 text-center">{useCasesTitle || "Common Use Cases"}</h3>
            <div className="grid sm:grid-cols-3 gap-8">
              {useCases.map((useCase, i) =>
              <div key={i} className="text-center group">
                  <div className="w-14 h-14 mx-auto bg-[#DBFE01]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#DBFE01] group-hover:scale-110 transition-all duration-300">
                    <Check className="w-7 h-7 text-[#DBFE01] group-hover:text-[#1a1a1a] transition-colors" />
                  </div>
                  <p className="font-medium text-white/80 group-hover:text-white transition-colors">{useCase}</p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>);

};

export const SolutionFAQ = ({ items = [] }) =>
<section className="py-24 bg-[#FAFAFA]">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="text-center mb-12">
        <span className="text-[#DBFE01] font-bold tracking-wider uppercase text-xs mb-2 block bg-[#1a1a1a] w-fit mx-auto px-3 py-1 rounded-full">Most asked by clients</span>
        <SectionHeading>Frequently Asked Questions</SectionHeading>
      </Reveal>
      
      <Reveal delay={0.1}>
        <Accordion type="single" collapsible className="space-y-4">
          {items.map((item, i) =>
        <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="hover:no-underline py-6 text-lg font-semibold text-[#1a1a1a]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base pb-6 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
        )}
        </Accordion>
      </Reveal>
      <Reveal delay={0.2} className="mt-8 text-center">
        <p className="text-sm text-gray-500">Still unsure? <Link to={createPageUrl('Book')} className="text-[#1a1a1a] font-bold underline decoration-[#DBFE01] decoration-2 underline-offset-2 hover:text-black hover:decoration-4 transition-all">Book a quick chat</Link></p>
      </Reveal>
    </div>
  </section>;


export const SolutionFinalCta = ({ title, primaryCta, secondaryCta, visual }) =>
<section className="py-24 bg-[#DBFE01] relative overflow-hidden">
    {/* Subtle Pattern */}
    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#1a1a1a 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
    
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-8 leading-tight">
          {title}
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
          to={createPageUrl('Book')}
          className="px-8 py-4 bg-[#1a1a1a] text-white rounded-xl text-base font-bold flex items-center justify-center gap-2 hover:bg-black transition-all hover:scale-105 shadow-[0_1px_0_0_rgba(255,255,255,0.1)_inset,0_4px_12px_rgba(0,0,0,0.3)]">

            {primaryCta}
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
          to={createPageUrl('Book')}
          className="px-8 py-4 bg-transparent border-2 border-[#1a1a1a] text-[#1a1a1a] rounded-xl text-base font-bold flex items-center justify-center gap-2 hover:bg-[#1a1a1a] hover:text-[#DBFE01] transition-all hover:scale-105">

            {secondaryCta}
          </Link>
        </div>
      </Reveal>
      
      {visual &&
    <Reveal delay={0.2} className="mt-12">
          {visual}
        </Reveal>
    }
      
      <Reveal delay={0.3}>
        <p className="text-[#1a1a1a]/60 text-xs font-semibold mt-12 uppercase tracking-wider">No spam. Clear next steps within 24 hours.</p>
      </Reveal>
    </div>
  </section>;


// Main Wrapper for Layout
export default function SeoLandingPage({ content, children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (children) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] font-['Poppins',sans-serif]">
        {children}
      </div>);

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

      <SolutionHero {...hero} />
      {metrics && <SolutionMetrics {...metrics} />}
      <SolutionProblem {...problem} />
      <SolutionDetails {...solution} />
      <SolutionProcess {...howItWorks} />
      {outcomes && <SolutionOutcomes {...outcomes} />}
      <SolutionProof {...proof} />
      <SolutionFAQ {...faq} />
      <SolutionFinalCta {...finalCta} />
    </div>);

}