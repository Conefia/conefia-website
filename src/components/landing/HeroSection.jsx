import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

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
    <section ref={ref} className="relative min-h-screen flex items-center pt-20 md:pt-0 bg-[#0A1628] overflow-hidden">
      {/* Flowing contour lines - diagonal flow */}
      <div className="absolute inset-0 opacity-40">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#1a3a5a', stopOpacity: 0.3 }} />
              <stop offset="70%" style={{ stopColor: '#DBFE01', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#DBFE01', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          {[...Array(20)].map((_, i) => {
            const yStart = -200 + i * 100;
            const amplitude = 80 + i * 5;
            return (
              <path
                key={i}
                d={`M -500 ${yStart} Q 200 ${yStart - amplitude}, 700 ${yStart} T 1700 ${yStart} T 2700 ${yStart}`}
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                opacity={0.3 + (i * 0.02)}
              />
            );
          })}
        </svg>
      </div>

      {/* Primary lime glow - concentrated on right */}
      <div className="absolute top-1/4 right-0 w-[900px] h-[900px] -translate-y-1/4 translate-x-1/3">
        <motion.div 
          className="absolute inset-0 rounded-full bg-[#DBFE01]"
          style={{
            filter: 'blur(150px)',
            opacity: 0.35,
          }}
          animate={reduceMotion ? {} : {
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.45, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Secondary lime accent - bottom right */}
      <motion.div 
        className="absolute bottom-0 right-0 w-[600px] h-[600px] translate-y-1/4 translate-x-1/4 rounded-full bg-[#DBFE01] opacity-25 blur-[120px]"
        animate={reduceMotion ? {} : {
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      />

      {/* Blue atmospheric depth */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] rounded-full bg-[#1e4a7a] opacity-30 blur-[100px]" />

      {/* Scattered particles with depth */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(60)].map((_, i) => {
          const rightBias = Math.random() > 0.3 ? Math.random() * 40 + 60 : Math.random() * 60;
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left: `${rightBias}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: rightBias > 60 ? '#DBFE01' : '#4a7fa7',
                opacity: rightBias > 60 ? 0.6 : 0.3,
              }}
              animate={reduceMotion ? {} : {
                opacity: [0.2, 0.8, 0.2],
                scale: [0.8, 1.5, 0.8],
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
              Your end-to-end Founder Ops partner for AI apps, e-commerce, and healthcare. 
              From validation to product launch to data-driven growth — all under one roof.
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
                className="btn-secondary px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-2"
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
                  {['AI Agents', 'E-commerce', 'Healthcare', 'Web Apps'].map((tag) => (
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