import React, { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import TestimonialSlider from '@/components/landing/TestimonialSlider';
import ContourBackground from '@/components/visual/ContourBackground';
import { 
  ArrowRight, Check, X, Sparkles, HelpCircle, 
  ChevronDown, ChevronUp, Star, ShieldCheck, 
  Clock, ListTodo, BarChart3, Users, Layout, 
  MessageSquare, FileText, Search, Settings, 
  Activity, Play
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

// Reusable Components
const SectionHeading = ({ children, className }) => (
  <h2 className={cn("text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6", className)}>
    {children}
  </h2>
);

const Reveal = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const CheckListItem = ({ children }) => (
  <li className="flex items-start gap-3">
    <div className="w-6 h-6 rounded-full bg-[#DBFE01]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
      <Check className="w-3.5 h-3.5 text-[#1a1a1a]" />
    </div>
    <span className="text-[#1a1a1a]/80 font-medium leading-relaxed">{children}</span>
  </li>
);

const DarkCheckListItem = ({ children }) => (
  <li className="flex items-start gap-3">
    <div className="w-6 h-6 rounded-full bg-[#DBFE01]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
      <Check className="w-3.5 h-3.5 text-[#DBFE01]" />
    </div>
    <span className="text-white/80 font-medium leading-relaxed">{children}</span>
  </li>
);

const ProblemItem = ({ children }) => (
  <li className="flex items-start gap-3">
    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
      <X className="w-3.5 h-3.5 text-red-600" />
    </div>
    <span className="text-[#1a1a1a]/80 font-medium leading-relaxed">{children}</span>
  </li>
);

export default function SeoLandingPage({ content }) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    meta,
    hero,
    metrics,
    trustedBy,
    problem,
    solution,
    howItWorks,
    outcomes,
    proof,
    faq,
    finalCta
  } = content;

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-['Poppins',sans-serif]">
      <Seo 
        title={meta.title} 
        description={meta.description} 
        canonical={meta.url} 
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#0B1020]">
        {/* Base layer - Deep navy */}
        <div className="absolute inset-0 bg-[#0B1020]" />
        
        {/* Dense Galaxy Lumination (Noise + Color Dodge) */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at 60% 40%, rgba(219, 254, 1, 0.15), transparent 60%),
              radial-gradient(circle at 80% 60%, rgba(219, 254, 1, 0.1), transparent 50%)
            `,
            filter: 'url(#noiseFilter) contrast(150%) brightness(150%)',
            mixBlendMode: 'color-dodge'
          }} />

        {/* Flowing topographic contour lines */}
        <ContourBackground className="opacity-80" />
        
        {/* Galaxy-like lime glows - stronger and more focused */}
        <motion.div
          className="absolute top-[20%] right-[25%] w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(circle, rgba(219, 254, 1, 0.25) 0%, rgba(219, 254, 1, 0.15) 30%, transparent 60%)',
            filter: 'blur(80px)'
          }}
          animate={reduceMotion ? {} : {
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 6, repeat: Infinity }} />

        <motion.div
          className="absolute bottom-[15%] right-[35%] w-[500px] h-[500px]"
          style={{
            background: 'radial-gradient(circle, rgba(219, 254, 1, 0.2) 0%, rgba(219, 254, 1, 0.1) 40%, transparent 70%)',
            filter: 'blur(70px)'
          }}
          animate={reduceMotion ? {} : {
            scale: [1.1, 0.9, 1.1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }} />

        <motion.div
          className="absolute bottom-[40%] left-[10%] w-[400px] h-[400px]"
          style={{
            background: 'radial-gradient(circle, rgba(219, 254, 1, 0.18) 0%, rgba(219, 254, 1, 0.08) 40%, transparent 70%)',
            filter: 'blur(60px)'
          }}
          animate={reduceMotion ? {} : {
            scale: [0.9, 1.15, 0.9],
            opacity: [0.25, 0.45, 0.25]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }} />

        {/* Galaxy Star Dust (High density) */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Dust Field 1 - Dense Main Galaxy Stream */}
          <div className="absolute inset-0" style={{ transform: 'rotate(-25deg) scale(1.3)' }}>
            {[...Array(450)].map((_, i) => {
              // Create a band/stream of stars
              const x = Math.random() * 100;
              const yBand = 50 + (Math.random() - 0.5) * 60 * Math.sin(x / 30); // Wavy band
              const y = yBand + (Math.random() - 0.5) * 40; // Scatter around band
              const size = Math.random() * 1.5 + 0.2;
              const opacity = Math.random() * 0.6 + 0.1;

              return (
                <motion.div
                  key={`dust-${i}`}
                  className="absolute rounded-full bg-[#DBFE01]"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    boxShadow: Math.random() > 0.8 ? '0 0 3px rgba(219, 254, 1, 0.8)' : 'none'
                  }}
                  animate={{
                    opacity: [opacity, opacity * 1.5, opacity]
                  }}
                  transition={{
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }} />
              );
            })}
          </div>

          {/* Dust Field 2 - Luminous Concentrations */}
          <div className="absolute inset-0">
             {/* Top Right Concentration */}
             {[...Array(100)].map((_, i) => {
              const cx = 80;const cy = 20;
              const r = Math.pow(Math.random(), 1.5) * 25;
              const angle = Math.random() * Math.PI * 2;
              const x = cx + Math.cos(angle) * r;
              const y = cy + Math.sin(angle) * r;
              return (
                <motion.div
                  key={`cluster-1-${i}`}
                  className="absolute rounded-full bg-[#DBFE01]"
                  style={{
                    left: `${x}%`, top: `${y}%`,
                    width: `${Math.random() * 1.5 + 0.5}px`,
                    height: `${Math.random() * 1.5 + 0.5}px`,
                    opacity: Math.random() * 0.7 + 0.2,
                    boxShadow: '0 0 4px rgba(219, 254, 1, 0.6)'
                  }}
                  animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2 + Math.random() * 2, repeat: Infinity }} />
              );
            })}

             {/* Bottom Left Stream Concentration */}
             {[...Array(100)].map((_, i) => {
              const cx = 20;const cy = 75;
              const r = Math.pow(Math.random(), 1.5) * 30;
              const angle = Math.random() * Math.PI * 2;
              const x = cx + Math.cos(angle) * r;
              const y = cy + Math.sin(angle) * r * 0.6;
              return (
                <motion.div
                  key={`cluster-2-${i}`}
                  className="absolute rounded-full bg-white"
                  style={{
                    left: `${x}%`, top: `${y}%`,
                    width: `${Math.random() * 1.2 + 0.3}px`,
                    height: `${Math.random() * 1.2 + 0.3}px`,
                    opacity: Math.random() * 0.5 + 0.1
                  }}
                  animate={{ opacity: [0.1, 0.5, 0.1] }}
                  transition={{ duration: 3 + Math.random() * 3, repeat: Infinity }} />
              );
            })}
          </div>

          {/* Stream Dust - Flow path */}
          <div className="absolute inset-0" style={{ transform: 'rotate(-25deg) scale(1.05)' }}>
            {[...Array(120)].map((_, i) => {
              const t = Math.random();
              const x = 20 + t * 60; // 20% to 80%
              const base = 55 + Math.sin(t * Math.PI * 1.2 - Math.PI / 2) * 18 + Math.sin(t * Math.PI * 2) * 6;
              const y = base + (Math.random() - 0.5) * 6;
              const size = Math.random() * 1.4 + 0.4;
              const opacity = 0.25 + Math.random() * 0.5;
              return (
                <motion.div
                  key={`stream-${i}`}
                  className="absolute rounded-full bg-[#DBFE01]"
                  style={{ left: `${x}%`, top: `${y}%`, width: `${size}px`, height: `${size}px`, boxShadow: '0 0 3px rgba(219,254,1,0.6)' }}
                  animate={{ opacity: [opacity, opacity * 1.4, opacity] }}
                  transition={{ duration: 2 + Math.random() * 2.5, repeat: Infinity, delay: Math.random() * 1.5 }} />
              );
            })}
          </div>

          {/* Bright Stars - Highlights */}
          {[...Array(40)].map((_, i) =>
          <motion.div
            key={`bright-${i}`}
            className="absolute rounded-full bg-[#DBFE01]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              boxShadow: '0 0 6px rgba(219, 254, 1, 0.9), 0 0 12px rgba(219, 254, 1, 0.4)'
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5
            }} />
          )}
        </div>
        
        {/* Fine grain texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            mixBlendMode: 'overlay'
          }} />

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(11, 16, 32, 0.4) 100%)'
          }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24">
          <div className="mb-8">
            <Breadcrumbs items={[{ label: 'Solutions', path: createPageUrl('Home') + '#playbook' }, { label: hero.title }]} theme="dark" />
          </div>

          {hero.layout === 'split' ? (
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-left">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DBFE01]/10 border border-[#DBFE01]/30 mb-8 backdrop-blur-sm"
                >
                  <Sparkles className="w-4 h-4 text-[#DBFE01]" />
                  <span className="text-sm font-semibold text-[#DBFE01]">Clinic Growth Package</span>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
                >
                  {hero.title}
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl"
                >
                  {hero.subtitle}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 mb-10"
                >
                  <Link to="/contact" className="btn-primary px-8 py-4 rounded-full text-base font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#DBFE01]/20 hover:scale-105 transition-transform">
                    {hero.primaryCta}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <button onClick={() => document.getElementById('solution').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 rounded-full text-base font-bold flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white hover:text-[#0B1020] transition-all hover:scale-105">
                    {hero.secondaryCta}
                  </button>
                </motion.div>

                {/* Trust Chips - Left Aligned */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-3"
                >
                  {hero.trustChips.map((chip, i) => (
                    <div key={i} className="flex items-center gap-2 text-white/70 text-xs font-medium bg-white/5 px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                      {chip.icon ? (
                        <chip.icon className="w-3 h-3 text-[#DBFE01]" />
                      ) : (
                        <Check className="w-3 h-3 text-[#DBFE01]" />
                      )}
                      {chip.name || chip}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right Column Visual */}
              <div className="relative">
                 {hero.visual && (
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                  >
                    {hero.visual}
                  </motion.div>
                 )}
              </div>
            </div>
          ) : (
            /* CENTERED LAYOUT (DEFAULT) */
            <div className="max-w-4xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DBFE01]/10 border border-[#DBFE01]/30 mb-8 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-[#DBFE01]" />
                <span className="text-sm font-semibold text-[#DBFE01]">Clinic Growth Package</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8"
              >
                {hero.title}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto"
              >
                {hero.subtitle}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <Link to="/contact" className="btn-primary px-8 py-4 rounded-full text-base font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#DBFE01]/20 hover:scale-105 transition-transform">
                  {hero.primaryCta}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button onClick={() => document.getElementById('solution').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 rounded-full text-base font-bold flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white hover:text-[#0B1020] transition-all hover:scale-105">
                  {hero.secondaryCta}
                </button>
              </motion.div>

              {/* Trust Chips */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4 md:gap-8"
              >
                {hero.trustChips.map((chip, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/70 text-sm font-medium bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                    {chip.icon ? (
                      <chip.icon className="w-4 h-4 text-[#DBFE01]" />
                    ) : (
                      <Check className="w-4 h-4 text-[#DBFE01]" />
                    )}
                    {chip.name || chip}
                  </div>
                ))}
              </motion.div>

              {hero.visual && (
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="mt-12"
                >
                  {hero.visual}
                </motion.div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* METRICS SECTION */}
      {metrics && (
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading className="text-center">{metrics.title}</SectionHeading>
              {metrics.visual && <div className="mb-12">{metrics.visual}</div>}
              {metrics.items && metrics.items.length > 0 && (
                <div className="grid md:grid-cols-4 gap-6">
                  {metrics.items.map((item, i) => (
                      <motion.div 
                        key={i} 
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-all"
                      >
                        {item.includes('—') ? (
                            <>
                              <div className="text-3xl font-extrabold text-blue-600 mb-2 tracking-tight">{item.split('—')[0].trim()}</div>
                              <div className="font-medium text-gray-700 text-sm">{item.split('—')[1].trim()}</div>
                            </>
                        ) : (
                            <p className="font-semibold text-lg text-[#1a1a1a]">{item}</p>
                        )}
                      </motion.div>
                  ))}
                </div>
              )}
            </Reveal>
          </div>
        </section>
      )}

      {/* TRUSTED BY SECTION */}
      {trustedBy && (
        <section className="py-12 bg-gray-50/50 border-b border-gray-100">
          <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {trustedBy.title && <SectionHeading className="mb-8 text-2xl">{trustedBy.title}</SectionHeading>}
            {trustedBy.visual}
          </Reveal>
        </section>
      )}

      {/* PROBLEM SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-rose-600 text-sm font-bold mb-6 border border-rose-100">
                <X className="w-4 h-4" />
                The Problem
              </div>
              <SectionHeading>{problem.title}</SectionHeading>
              <ul className="space-y-4">
                {problem.items.map((item, i) => (
                  <ProblemItem key={i}>{item}</ProblemItem>
                ))}
              </ul>
              <div className="mt-8 p-6 bg-gradient-to-br from-rose-50 to-white rounded-2xl border border-rose-100 shadow-sm">
                <p className="text-rose-900/80 italic font-medium relative pl-4 border-l-4 border-rose-300">
                  "{problem.quote}"
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2} className="relative">
               {problem.visual ? (
                 problem.visual
               ) : (
                 <div className="aspect-square rounded-3xl bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-100 relative overflow-hidden flex items-center justify-center">
                    {/* Default visual fallback */}
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-red-100/90 backdrop-blur-sm p-4 rounded-full border border-red-200 shadow-xl">
                            <X className="w-12 h-12 text-red-500" />
                        </div>
                    </div>
                 </div>
               )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section id="solution" className="py-24 bg-[#F4F4F5] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#DBFE01]/10 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal className="order-2 lg:order-1 relative">
                {solution.visual ? (
                  solution.visual
                ) : (
                  <div className="bg-white rounded-3xl p-8 border border-[#DBFE01] shadow-2xl shadow-[#DBFE01]/10 relative z-10">
                      {/* Default visual content */}
                  </div>
                )}
            </Reveal>

            <Reveal delay={0.2} className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DBFE01]/20 text-[#1a1a1a] text-sm font-bold mb-6 border border-[#DBFE01]/30">
                <Check className="w-4 h-4" />
                The Solution
              </div>
              <SectionHeading>{solution.title}</SectionHeading>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {solution.description}
              </p>
              
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200 mb-8 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#DBFE01]" />
                  What you get:
                </h4>
                <ul className="grid sm:grid-cols-1 gap-4">
                  {solution.features && solution.features.map((feature, i) => (
                    <CheckListItem key={i}>{feature}</CheckListItem>
                  ))}
                </ul>
              </div>

              <Link to="/contact" className="btn-primary px-8 py-4 rounded-full text-base font-bold inline-flex items-center gap-2 shadow-lg shadow-[#DBFE01]/20 hover:scale-105 transition-transform">
                {solution.primaryCta}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <span className="text-[#DBFE01] font-bold tracking-wider uppercase text-sm bg-[#1a1a1a] px-3 py-1 rounded-full">Process</span>
            <SectionHeading className="mt-4">Build → Launch → Scale</SectionHeading>
          </Reveal>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 md:-translate-x-1/2" />

            <div className="space-y-12">
              {howItWorks.steps.map((step, i) => (
                <Reveal key={i} delay={i * 0.1} className={cn("flex flex-col md:flex-row gap-8 relative", i % 2 === 0 ? "md:flex-row-reverse" : "")}>
                  <div className="flex-1 md:text-right">
                    {i % 2 === 0 && (
                      <div className="hidden md:block">
                        <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    )}
                  </div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="relative flex-shrink-0 z-10"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#DBFE01] border-4 border-white shadow-lg flex items-center justify-center font-bold text-[#1a1a1a]">
                      {i + 1}
                    </div>
                  </motion.div>

                  <div className="flex-1">
                    <div className={cn("md:hidden", i % 2 === 0 ? "" : "")}>
                        <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                    {i % 2 !== 0 && (
                      <div className="hidden md:block">
                        <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
            {howItWorks.visual && (
              <Reveal className="mt-20">
                {howItWorks.visual}
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* OUTCOMES SECTION */}
      {outcomes && (
        <section className="py-24 bg-[#1a1a1a] text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-[#DBFE01]/5 blur-[120px] pointer-events-none" />
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
               <Reveal>
                 <SectionHeading className="text-white">{outcomes.title}</SectionHeading>
                 {outcomes.items && (
                   <ul className="space-y-4">
                     {outcomes.items.map((item, i) => (
                       <DarkCheckListItem key={i}>{item}</DarkCheckListItem>
                     ))}
                   </ul>
                 )}
               </Reveal>
               <Reveal delay={0.2}>
                 {outcomes.visual}
               </Reveal>
             </div>
           </div>
        </section>
      )}

      {/* PROOF SECTION */}
      <section className="py-24 bg-[#0B1020] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#DBFE01_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal className="text-center mb-16">
            <SectionHeading className="text-white">{proof.title}</SectionHeading>
            {proof.visual && <div className="mt-8">{proof.visual}</div>}
          </Reveal>

          {proof.items && proof.items.length > 0 && (
            <Reveal className="grid md:grid-cols-3 gap-8 mb-16">
              {proof.items.map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <Check className="w-8 h-8 text-[#DBFE01] mb-4" />
                  <p className="font-semibold text-lg">{item}</p>
                </div>
              ))}
            </Reveal>
          )}

          {/* Testimonials Slider */}
        </div>
      </section>
      
      <TestimonialSlider 
        testimonials={proof.testimonials.map(t => ({
          id: t.author,
          content: t.quote,
          client_name: t.author,
          client_role: t.role,
          client_company: "", // Assuming company is part of role or not provided separately in current data structure
          rating: 5
        }))} 
        title={proof.title}
        reduceMotion={reduceMotion}
      />

      <section className="py-24 bg-[#0B1020] text-white relative overflow-hidden pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Use Cases */}
          <Reveal delay={0.2} className="bg-[#1a1a1a] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 text-center">{proof.useCasesTitle || "Common Use Cases"}</h3>
            <div className="grid sm:grid-cols-3 gap-8">
              {proof.useCases.map((useCase, i) => (
                <div key={i} className="text-center group">
                  <div className="w-14 h-14 mx-auto bg-[#DBFE01]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#DBFE01] group-hover:scale-110 transition-all duration-300">
                    <Check className="w-7 h-7 text-[#DBFE01] group-hover:text-[#1a1a1a] transition-colors" />
                  </div>
                  <p className="font-medium text-white/80 group-hover:text-white transition-colors">{useCase}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <span className="text-[#DBFE01] font-bold tracking-wider uppercase text-xs mb-2 block bg-[#1a1a1a] w-fit mx-auto px-3 py-1 rounded-full">Most asked by clinic owners</span>
            <SectionHeading>Frequently Asked Questions</SectionHeading>
          </Reveal>
          
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="space-y-4">
              {faq.items.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow">
                  <AccordionTrigger className="hover:no-underline py-6 text-lg font-semibold text-[#1a1a1a]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base pb-6 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
          <Reveal delay={0.2} className="mt-8 text-center">
            <p className="text-sm text-gray-500">Still unsure? <Link to="/contact" className="text-[#1a1a1a] font-bold underline decoration-[#DBFE01] decoration-2 underline-offset-2 hover:text-black hover:decoration-4 transition-all">Book a quick chat</Link></p>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-[#DBFE01] relative overflow-hidden">
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#1a1a1a 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-8 leading-tight">
              {finalCta.title}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-[#1a1a1a] text-white rounded-full text-base font-bold flex items-center justify-center gap-2 hover:bg-black transition-all hover:scale-105 shadow-xl"
              >
                {finalCta.primaryCta}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-transparent border-2 border-[#1a1a1a] text-[#1a1a1a] rounded-full text-base font-bold flex items-center justify-center gap-2 hover:bg-[#1a1a1a] hover:text-[#DBFE01] transition-all hover:scale-105"
              >
                {finalCta.secondaryCta}
              </Link>
            </div>
          </Reveal>
          
          {finalCta.visual && (
            <Reveal delay={0.2} className="mt-12">
              {finalCta.visual}
            </Reveal>
          )}
          
          <Reveal delay={0.3}>
            <p className="text-[#1a1a1a]/60 text-xs font-semibold mt-12 uppercase tracking-wider">No spam. Clear next steps within 24 hours.</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}