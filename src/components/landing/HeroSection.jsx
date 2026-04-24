import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import HeroDarkBackground from '../visual/HeroDarkBackground';
import AccelerateProcessVisual from './AccelerateProcessVisual';
import { usePersona } from '@/components/context/PersonaContext';

export default function HeroSection({ reduceMotion }) {
  const { selectedPersona } = usePersona();
  const [isMobile, setIsMobile] = React.useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
        delayChildren: reduceMotion ? 0 : 0.3
      }
    }
  };

  // GPU-friendly: use transform instead of y for hardware acceleration
  const itemVariants = {
    hidden: { opacity: 0, transform: reduceMotion || isMobile ? 'translateY(0)' : 'translateY(20px)' },
    visible: {
      opacity: 1,
      transform: 'translateY(0)',
      transition: {
        duration: reduceMotion || isMobile ? 0 : 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const phases = ['Idea', 'MVP', 'Launch', 'Growth'];

  return (
    <section ref={ref} className="relative min-h-screen md:min-h-[85vh] flex items-center pt-32 md:pt-20 pb-8 sm:pb-12 md:pb-0 overflow-hidden">
      <HeroDarkBackground isMobile={isMobile} />

      
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:pl-8 lg:pr-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-items-center lg:justify-items-start relative z-10">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-left">

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 max-w-4xl leading-tight text-center md:text-left gradient-heading gradient-heading--glow">
              One Partner to Build, Launch, and Scale Your Digital Venture.
            </motion.h1>

            {/* Subhead */}
            <motion.p
              variants={itemVariants} 
              className="text-white/80 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed max-w-xl text-center md:text-left"
            >
              For founders, clinic teams, and Shopify brands tired of juggling vendors, CONEFIA is your all-in-one AI + mobile app and growth marketing studio—so you acquire customers or patients faster and scale with confidence.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center lg:justify-start"
            >
              <Link
                to={createPageUrl('book')}
                className="bg-gradient-to-r from-[#DBFE01] to-[#c5e000] text-[#0a0e1a] px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold flex items-center justify-center gap-2 shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_4px_12px_rgba(219,254,1,0.25)] hover:shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset,0_6px_20px_rgba(219,254,1,0.35)] hover:-translate-y-0.5 transition-all duration-300 flex-1 sm:flex-initial"
              >
                Book Roadmap Call
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <button
                onClick={() => scrollToSection('track-selector')}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/70 transition-all duration-300 backdrop-blur-md flex-1 sm:flex-initial"
              >
                Choose Your Track
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-12 w-full lg:w-auto"
            >
              <div className="text-center lg:text-left group">
                <p className="text-white/50 mb-1 text-xs font-bold uppercase tracking-wider">TYPICAL MVP</p>
                <p className="text-white font-bold text-sm sm:text-base md:text-lg bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-[#DBFE01] group-hover:to-[#c5e000] transition-all">8–12 weeks</p>
              </div>
              <div className="text-center lg:text-left group">
                <p className="text-white/50 mb-1 text-xs font-bold uppercase tracking-wider">WEEKLY DEMOS</p>
                <p className="text-white font-bold text-sm sm:text-base md:text-lg bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-[#DBFE01] group-hover:to-[#c5e000] transition-all">Guaranteed</p>
              </div>
              <div className="text-center lg:text-left group">
                <p className="text-white/50 mb-1 text-xs font-bold uppercase tracking-wider">PRIVACY-FIRST</p>
                <p className="text-white font-bold text-sm sm:text-base md:text-lg bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-[#DBFE01] group-hover:to-[#c5e000] transition-all">HIPAA-aware</p>
              </div>
              <div className="text-center lg:text-left group">
                <p className="text-white/50 mb-1 text-xs font-bold uppercase tracking-wider">ONE BACKLOG</p>
                <p className="text-white font-bold text-sm sm:text-base md:text-lg bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-[#DBFE01] group-hover:to-[#c5e000] transition-all">One owner</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual - GPU-friendly animation */}
          <motion.div
            initial={{ opacity: 0, transform: isMobile ? 'scale(1)' : 'scale(0.98)' }}
            animate={isInView ? { opacity: 1, transform: 'scale(1)' } : { opacity: 0, transform: 'scale(0.98)' }}
            transition={{ duration: reduceMotion || isMobile ? 0 : 0.5, delay: reduceMotion || isMobile ? 0 : 0.2 }}
            className="relative w-full lg:w-fit flex justify-center lg:justify-end will-change-transform"
          >
            <AccelerateProcessVisual reduceMotion={reduceMotion || isMobile} />
          </motion.div>
      </div>

      {/* Scroll indicator - GPU-friendly with transform */}
      {!reduceMotion && !isMobile && (
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block opacity-50 will-change-transform"
        animate={{ transform: ['translateY(0px)', 'translateY(8px)', 'translateY(0px)'] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>

          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <motion.div
            className="w-1.5 h-3 bg-white/50 rounded-full will-change-transform"
            animate={{ transform: ['translateY(0px)', 'translateY(12px)', 'translateY(0px)'], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />

          </div>
        </motion.div>
      )}
    </section>);

    }