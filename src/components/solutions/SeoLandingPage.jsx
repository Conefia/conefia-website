import React, { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import TestimonialSlider from '@/components/landing/TestimonialSlider';
import ContourBackground from '@/components/visual/ContourBackground';
import HeroDarkBackground from '@/components/visual/HeroDarkBackground';
import BrandCarousel from '@/components/landing/BrandCarousel';
import {
  ArrowRight, Check, X, Sparkles, ShieldCheck,
  ChevronDown, Bot, BarChart3, FileText,
  Users, Zap, Brain, Shield } from
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
</h2>


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
          <SectionHeading>{title?.replace(/\.$/, '')}</SectionHeading>
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
        <span className="bg-[#1a1a1a] text-white px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-2 border border-white/10 mb-6">
          <Sparkles className="w-4 h-4 text-[#DBFE01]" />
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
           <SectionHeading className="text-white">{title?.replace(/\.$/, '')}</SectionHeading>
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


export const SolutionUseCases = ({ useCasesTitle, useCases = [] }) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Animated AI sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(18)].map((_, i) => {
          const x = (i * 5.8 + 3) % 100;
          const y = (i * 7.3 + 8) % 100;
          const delay = (i * 0.4) % 3;
          const size = i % 3 === 0 ? 'w-5 h-5' : i % 3 === 1 ? 'w-4 h-4' : 'w-3 h-3';
          return (
            <motion.div
              key={i}
              className={`absolute ${size} text-[#DBFE01]`}
              style={{ left: `${x}%`, top: `${y}%` }}
              animate={{ opacity: [0.08, 0.35, 0.08], scale: [0.8, 1.2, 0.8], rotate: [0, 20, 0] }}
              transition={{ duration: 3 + (i % 3), repeat: Infinity, delay, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2zm0 10l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"/></svg>
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-12">
          <span className="bg-[#1a1a1a] text-white px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-2 border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-[#DBFE01]" />
            Common Use Cases
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">{useCasesTitle || "Common use cases"}</h2>
        </Reveal>

        <UseCasesLinkedLight useCases={useCases} />
      </div>
    </section>
  );
};

const defaultUseCasesLeft = [
  { label: "We need an AI workflow users trust (not just chat)", icon: Brain, index: 0 },
  { label: "We need architecture done right — without rework", icon: Shield, index: 1 },
  { label: "We need pilots launched with measurable activation", icon: Zap, index: 2 },
];

const defaultUseCasesRight = [
  { title: "B2B Agent Workflows", description: "Ops, support, sales, compliance automation", icon: Bot, index: 0 },
  { title: "Data & Analytics Copilots", description: "Turn raw data into decisions instantly", icon: BarChart3, index: 1 },
  { title: "GenAI Content Systems", description: "Review, governance, and workflow automation", icon: FileText, index: 2 },
];

function UseCasesLinkedLight({ useCases }) {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const defaultLeftIcons = [Brain, Shield, Zap];
  const defaultRightIcons = [Bot, BarChart3, FileText];

  const leftItems = useCases && useCases.length > 0
    ? useCases.map((uc, i) => ({ label: typeof uc === 'string' ? uc : uc.label, icon: defaultLeftIcons[i % defaultLeftIcons.length], index: i }))
    : defaultUseCasesLeft;

  const rightItems = useCases && useCases.length > 0
    ? useCases.map((uc, i) => ({ title: typeof uc === 'string' ? uc : uc.title, description: typeof uc === 'object' ? uc.description || '' : '', icon: defaultRightIcons[i % defaultRightIcons.length], index: i }))
    : defaultUseCasesRight;

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
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "flex items-center gap-5 p-6 rounded-2xl border cursor-pointer transition-all duration-300",
                activeIndex === i
                  ? "bg-[#DBFE01] border-[#b8d400] shadow-[0_8px_32px_rgba(219,254,1,0.4)]"
                  : "bg-[#f2ffc0] border-[#d4f500]/50 hover:bg-[#e8ff80]"
              )}
            >
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
            </motion.div>
          );
        })}
      </div>

      {/* Right: Dark cards */}
      <div className="space-y-4">
        {rightItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.15 }}
              animate={activeIndex === i ? { scale: 1.03, x: -4 } : { scale: 1, x: 0 }}
              className={cn(
                "p-6 rounded-2xl border transition-all duration-300 flex items-center gap-5",
                activeIndex === i
                  ? "bg-[#1a1a1a] border-[#DBFE01]/40 shadow-[0_8px_32px_rgba(26,26,26,0.25),0_0_0_1px_rgba(219,254,1,0.2)]"
                  : "bg-[#111] border-gray-800 hover:bg-[#1a1a1a]"
              )}
            >
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
                {item.description && (
                  <p className="text-white/50 text-sm leading-snug">{item.description}</p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function UseCasesLinked({ useCases }) {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const leftItems = useCases && useCases.length > 0
    ? useCases.map((uc, i) => ({ label: typeof uc === 'string' ? uc : uc.label, index: i }))
    : defaultUseCasesLeft;

  const rightItems = useCases && useCases.length > 0
    ? useCases.map((uc, i) => ({ title: typeof uc === 'string' ? uc : uc.title, description: '', index: i }))
    : defaultUseCasesRight;

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Left: Bullets */}
      <div className="space-y-4">
        {leftItems.map((item, i) => (
          <motion.div
            key={i}
            onHoverStart={() => setActiveIndex(i)}
            onHoverEnd={() => setActiveIndex(null)}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "flex items-start gap-4 p-5 rounded-2xl border cursor-pointer transition-all duration-300",
              activeIndex === i
                ? "bg-[#DBFE01]/10 border-[#DBFE01]/40 shadow-[0_0_20px_rgba(219,254,1,0.1)]"
                : "bg-white/5 border-white/10 hover:bg-white/8"
            )}
          >
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 font-bold text-sm",
              activeIndex === i ? "bg-[#DBFE01] text-[#1a1a1a]" : "bg-white/10 text-white/50"
            )}>
              {i + 1}
            </div>
            <span className={cn(
              "text-base leading-relaxed transition-colors duration-300 pt-0.5",
              activeIndex === i ? "text-white" : "text-white/70"
            )}>{item.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Right: Cards */}
      <div className="space-y-4">
        {rightItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 + 0.15 }}
            animate={activeIndex === i ? { scale: 1.03 } : { scale: 1 }}
            className={cn(
              "p-6 rounded-2xl border transition-all duration-300",
              activeIndex === i
                ? "bg-[#DBFE01]/10 border-[#DBFE01]/50 shadow-[0_0_30px_rgba(219,254,1,0.12)]"
                : "bg-white/5 border-white/10"
            )}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                activeIndex === i ? "bg-[#DBFE01] shadow-[0_0_8px_rgba(219,254,1,0.6)]" : "bg-white/30"
              )} />
              <h4 className={cn(
                "font-bold text-base transition-colors duration-300",
                activeIndex === i ? "text-[#DBFE01]" : "text-white"
              )}>{item.title}</h4>
            </div>
            {item.description && (
              <p className="text-white/60 text-sm ml-5">{item.description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export const SolutionProof = ({ title, items = [], visual, testimonials = [], useCasesTitle, useCases = [] }) => {
  const reduceMotion = useReducedMotion();
  return (
    <>
      <section className="py-24 bg-gradient-to-b from-white via-[#FAFAFA] to-white relative overflow-hidden">
        {/* Subtle accent blob */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#DBFE01]/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DBFE01]/3 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal className="mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-8">Built for speed and scale</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {[
                { title: "Build fast", desc: "Modern full-stack (React / Node / Python) so you ship weekly, not \"someday.\"" },
                { title: "RAG that holds up", desc: "Reliable retrieval with Pinecone or pgvector—built for real usage, not demos." },
                { title: "Ready for real teams", desc: "Roles + permissions from day one, so pilots don't break when customers invite teammates." },
                { title: "Know what's working", desc: "LangSmith evals + tracing so quality improves and costs stay under control." }
              ].map((item, i) =>
              <div key={i} className="p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-lg text-[#1a1a1a] mb-2">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-16 pt-12 border-t border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-[#DBFE01] rounded-full" />
              <h3 className="text-xl font-bold text-[#1a1a1a]">Tech stack we ship with</h3>
            </div>
            <p className="text-[#1a1a1a]/70 text-sm mb-8">Proven tools we trust—so you don't gamble on your MVP.</p>
            
            <div className="relative overflow-hidden">
              <motion.div 
                className="flex gap-8 pb-6"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                {[
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
                  { name: "Kubernetes", url: "https://logo.svgcdn.com/logos/kubernetes.svg" }
                ].map((tech, i) => (
                  <div key={i} className="flex-shrink-0 w-28 h-28">
                    <div className="w-full h-full bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                      <img
                        src={tech.url}
                        alt={tech.name}
                        className="w-20 h-20 object-contain group-hover:scale-110 transition-transform"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
                {[
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
                  { name: "Kubernetes", url: "https://logo.svgcdn.com/logos/kubernetes.svg" }
                ].map((tech, i) => (
                  <div key={`${i}-duplicate`} className="flex-shrink-0 w-28 h-28">
                    <div className="w-full h-full bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                      <img
                        src={tech.url}
                        alt={tech.name}
                        className="w-20 h-20 object-contain group-hover:scale-110 transition-transform"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
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
  <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.02]" />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="text-center mb-16">
        <span className="bg-gradient-to-r from-[#1a1a1a]/5 to-[#2F2F2F]/5 text-[#1a1a1a]/70 px-4 py-2.5 text-sm font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-2 border border-[#1a1a1a]/15 mb-6 shadow-sm">
          <Sparkles className="w-4 h-4 stroke-black fill-[#DBFE01]" />
          FAQ
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-4">
          Common questions, <span className="bg-gradient-to-r from-[#DBFE01] via-[#c5e000] to-[#a8c600] bg-clip-text text-transparent">answered</span>
        </h2>
      </Reveal>
      
      <div className="space-y-4 relative z-10">
        {displayItems.map((item, i) =>
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="relative"
        >
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
            <div className="text-[#2F2F2F]/70 mt-4 pl-14 leading-relaxed font-medium">
              {item.answer}
            </div>
          </details>
        </motion.div>
        )}
      </div>

      {items.length > 5 && (
        <Reveal delay={0.2} className="mt-8 text-center relative z-20">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-[#1a1a1a] font-bold underline decoration-[#DBFE01] decoration-2 underline-offset-2 hover:text-black hover:decoration-4 transition-all"
          >
            {showAll ? 'Show less' : 'Read more'}
          </button>
        </Reveal>
      )}

      <Reveal delay={0.3} className="mt-8 text-center">
        <p className="text-sm text-[#2F2F2F]/60">Still unsure? <Link to={createPageUrl('Book')} className="text-[#1a1a1a] font-bold hover:text-[#a8c600] transition-colors underline">Book a quick chat</Link></p>
      </Reveal>
    </div>
  </section>
  );
};


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