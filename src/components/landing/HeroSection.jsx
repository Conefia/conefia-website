import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

export default function HeroSection({ reduceMotion }) {
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
        staggerChildren: reduceMotion ? 0 : 0.12,
        delayChildren: reduceMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const phases = ['Idea', 'MVP', 'Launch', 'Growth'];

  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DBFE01]/10 border border-[#DBFE01]/20 mb-6">
              <Sparkles className="w-4 h-4 text-[#2F2F2F]" />
              <span className="text-sm font-medium text-[#2F2F2F]">Founder Ops Partner</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#2F2F2F] leading-[1.1] tracking-tight mb-6"
            >
              Build it.{' '}
              <span className="gradient-text">Launch it.</span>{' '}
              Grow it.
            </motion.h1>

            {/* Subhead */}
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-[#2F2F2F]/60 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Founder Ops for AI apps, e-commerce, and healthcare. We validate your idea, build the product, launch your presence, and scale with data-driven growth.
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
              className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start"
            >
              {[
                { label: 'Typical MVP', value: '8–12 weeks' },
                { label: 'Weekly demos', value: 'Always' },
                { label: 'Privacy-first', value: 'HIPAA-aware' },
              ].map((item, i) => (
                <div key={i} className="text-center lg:text-left">
                  <p className="text-sm text-[#2F2F2F]/40 uppercase tracking-wider">{item.label}</p>
                  <p className="text-[#2F2F2F] font-semibold">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual - Animated Flow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.3 }}
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
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: reduceMotion ? 0 : 0.5, 
                        delay: reduceMotion ? 0 : 0.5 + index * 0.15 
                      }}
                      className="flex items-center gap-4"
                    >
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg ${
                        index === 0 ? 'bg-[#2F2F2F] text-white' :
                        index === 1 ? 'bg-[#DBFE01] text-[#2F2F2F]' :
                        index === 2 ? 'bg-[#2F2F2F]/10 text-[#2F2F2F]' :
                        'bg-gradient-to-br from-[#DBFE01] to-[#B8D600] text-[#2F2F2F]'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-[#2F2F2F] text-lg">{phase}</p>
                        <p className="text-[#2F2F2F]/50 text-sm">
                          {index === 0 && '2–4 weeks'}
                          {index === 1 && '6–12 weeks'}
                          {index === 2 && '2–4 weeks'}
                          {index === 3 && 'Ongoing'}
                        </p>
                      </div>
                      {index < phases.length - 1 && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: reduceMotion ? 0 : 0.3, delay: reduceMotion ? 0 : 0.8 + index * 0.15 }}
                          className="w-8 h-[2px] bg-gradient-to-r from-[#DBFE01] to-transparent"
                        />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Floating tags */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 1.2 }}
                  className="flex flex-wrap gap-2 mt-8"
                >
                  {['AI Agents', 'E-commerce', 'Healthcare', 'Web Apps'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-[#2F2F2F]/5 text-[#2F2F2F]/70 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Decorative elements */}
              <motion.div
                animate={reduceMotion ? {} : { 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-[#DBFE01] rounded-2xl flex items-center justify-center shadow-lg"
              >
                <Sparkles className="w-8 h-8 text-[#2F2F2F]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={reduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-[#2F2F2F]/20 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-[#2F2F2F]/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}