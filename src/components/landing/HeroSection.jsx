import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import ContourBackground from '../visual/ContourBackground';

export default function HeroSection({ reduceMotion }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.15,
        delayChildren: reduceMotion ? 0 : 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const phases = ['Idea', 'MVP', 'Launch', 'Growth'];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-20 md:pt-0 overflow-hidden">
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
          mixBlendMode: 'color-dodge',
        }}
      />

      {/* Flowing topographic contour lines */}
      <ContourBackground className="opacity-80" />
      
      {/* Galaxy-like lime glows - stronger and more focused */}
      <motion.div 
        className="absolute top-[20%] right-[25%] w-[600px] h-[600px]"
        style={{
          background: 'radial-gradient(circle, rgba(219, 254, 1, 0.25) 0%, rgba(219, 254, 1, 0.15) 30%, transparent 60%)',
          filter: 'blur(80px)',
        }}
        animate={reduceMotion ? {} : {
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      
      <motion.div 
        className="absolute bottom-[15%] right-[35%] w-[500px] h-[500px]"
        style={{
          background: 'radial-gradient(circle, rgba(219, 254, 1, 0.2) 0%, rgba(219, 254, 1, 0.1) 40%, transparent 70%)',
          filter: 'blur(70px)',
        }}
        animate={reduceMotion ? {} : {
          scale: [1.1, 0.9, 1.1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      />
      
      <motion.div 
        className="absolute bottom-[40%] left-[10%] w-[400px] h-[400px]"
        style={{
          background: 'radial-gradient(circle, rgba(219, 254, 1, 0.18) 0%, rgba(219, 254, 1, 0.08) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={reduceMotion ? {} : {
          scale: [0.9, 1.15, 0.9],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />
      
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
                   boxShadow: Math.random() > 0.8 ? '0 0 3px rgba(219, 254, 1, 0.8)' : 'none',
                 }}
                 animate={{
                   opacity: [opacity, opacity * 1.5, opacity],
                 }}
                 transition={{
                   duration: 2 + Math.random() * 3,
                   repeat: Infinity,
                   delay: Math.random() * 2,
                 }}
               />
             );
          })}
        </div>

        {/* Dust Field 2 - Luminous Concentrations */}
        <div className="absolute inset-0">
           {/* Top Right Concentration */}
           {[...Array(100)].map((_, i) => {
             const cx = 80; const cy = 20; 
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
                 transition={{ duration: 2 + Math.random() * 2, repeat: Infinity }}
               />
             );
           })}

           {/* Bottom Left Stream Concentration */}
           {[...Array(100)].map((_, i) => {
             const cx = 20; const cy = 75; 
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
                   opacity: Math.random() * 0.5 + 0.1,
                 }}
                 animate={{ opacity: [0.1, 0.5, 0.1] }}
                 transition={{ duration: 3 + Math.random() * 3, repeat: Infinity }}
               />
             );
           })}
        </div>

        {/* Stream Dust - Flow path */}
        <div className="absolute inset-0" style={{ transform: 'rotate(-25deg) scale(1.05)' }}>
          {[...Array(120)].map((_, i) => {
            const t = Math.random();
            const x = 20 + t * 60; // 20% to 80%
            const base = 55 + Math.sin(t * Math.PI * 1.2 - Math.PI/2) * 18 + Math.sin(t * Math.PI * 2) * 6;
            const y = base + (Math.random() - 0.5) * 6;
            const size = Math.random() * 1.4 + 0.4;
            const opacity = 0.25 + Math.random() * 0.5;
            return (
              <motion.div
                key={`stream-${i}`}
                className="absolute rounded-full bg-[#DBFE01]"
                style={{ left: `${x}%`, top: `${y}%`, width: `${size}px`, height: `${size}px`, boxShadow: '0 0 3px rgba(219,254,1,0.6)' }}
                animate={{ opacity: [opacity, opacity * 1.4, opacity] }}
                transition={{ duration: 2 + Math.random() * 2.5, repeat: Infinity, delay: Math.random() * 1.5 }}
              />
            );
          })}
        </div>

        {/* Bright Stars - Highlights */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`bright-${i}`}
            className="absolute rounded-full bg-[#DBFE01]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              boxShadow: '0 0 6px rgba(219, 254, 1, 0.9), 0 0 12px rgba(219, 254, 1, 0.4)',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      {/* Fine grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay',
        }}
      />
      
      {/* Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(11, 16, 32, 0.4) 100%)',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DBFE01]/20 border border-[#DBFE01]/40 mb-6">
              <Sparkles className="w-4 h-4 text-[#DBFE01]" />
              <span className="text-sm font-semibold text-[#DBFE01]">Your Founder Ops Partner</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
            >
              Build it.{' '}
              <span className="text-[#DBFE01]">Launch it.</span>{' '}
              Grow it.
            </motion.h1>

            {/* Subhead */}
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-white/70 font-medium leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Validate, build, and scale your digital venture with one partner. We turn concepts into market-leading AI, mobile apps, and healthcare products—faster, leaner, and all under one roof.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-2"
              >
                Book roadmap call
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('playbook')}
                className="px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-2 border-2 border-white/20 text-white hover:bg-white hover:text-[#0B1020] hover:border-white transition-all duration-300 backdrop-blur-sm"
              >
                <Play className="w-4 h-4" />
                See playbook
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-8 mt-10 justify-center lg:justify-start"
            >
              {[
                { label: 'Typical MVP', value: '8–12 weeks' },
                { label: 'Weekly demos', value: 'Guaranteed' },
                { label: 'Privacy-first', value: 'HIPAA-aware' },
              ].map((item, i) => (
                <div key={i} className="text-center lg:text-left">
                  <p className="text-xs text-white/40 uppercase tracking-wider font-semibold mb-1">{item.label}</p>
                  <p className="text-white font-bold text-lg">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual - Animated Flow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.4 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#DBFE01]/20 to-transparent rounded-full blur-3xl" />
              
              {/* Flow diagram */}
              <div className="relative glass-card rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/5">
                <div className="space-y-6">
                  {phases.map((phase, index) => (
                    <motion.div
                      key={phase}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ 
                        duration: reduceMotion ? 0 : 0.6, 
                        delay: reduceMotion ? 0 : 0.6 + index * 0.15 
                      }}
                      className="flex items-center gap-4"
                    >
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg ${
                        index === 0 ? 'bg-[#1a1a1a] text-white' :
                        index === 1 ? 'bg-[#DBFE01] text-[#1a1a1a]' :
                        index === 2 ? 'bg-[#1a1a1a]/10 text-[#1a1a1a] border-2 border-[#1a1a1a]/20' :
                        'bg-gradient-to-br from-[#DBFE01] to-[#B8D600] text-[#1a1a1a]'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-[#1a1a1a] text-xl">{phase}</p>
                        <p className="text-[#1a1a1a]/60 text-sm font-medium">
                          {index === 0 && '2–4 weeks'}
                          {index === 1 && '6–12 weeks'}
                          {index === 2 && '2–4 weeks'}
                          {index === 3 && 'Ongoing'}
                        </p>
                      </div>
                      {index < phases.length - 1 && (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                          transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : 1 + index * 0.15 }}
                          className="w-8 h-[3px] bg-gradient-to-r from-[#DBFE01] to-transparent origin-left"
                        />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Floating tags */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 1.4 }}
                  className="flex flex-wrap gap-2 mt-8"
                >
                  {['AI Agents', 'Mobile Apps', 'Healthcare', 'Web Apps'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-[#1a1a1a]/5 text-[#1a1a1a]/80 text-xs font-semibold border border-[#1a1a1a]/10"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Decorative elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-[#DBFE01] rounded-2xl flex items-center justify-center shadow-xl"
              >
                <Sparkles className="w-8 h-8 text-[#1a1a1a]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={reduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
          >
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}