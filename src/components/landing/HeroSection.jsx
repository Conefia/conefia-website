import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import ContourBackground from '../visual/ContourBackground';
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

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const phases = ['Idea', 'MVP', 'Launch', 'Growth'];

  return (
    <section ref={ref} className="relative min-h-screen md:min-h-[85vh] flex items-center pt-16 md:pt-0 overflow-hidden">
      {/* Enhanced gradient base layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#111827] to-[#1a1f2e]" />
      
      {/* Accent gradient overlays */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#DBFE01]/10 via-[#c5e000]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />
      
      {/* Contour lines */}
      <ContourBackground className="opacity-60" isMobile={isMobile} />

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
      
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(11, 16, 32, 0.4) 100%)'
        }} />

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-4 pb-4 md:pb-2 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center lg:text-left">

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 max-w-4xl mx-auto lg:mx-0 leading-tight">
              One Partner to <span className="bg-gradient-to-r from-[#DBFE01] to-[#c5e000] bg-clip-text text-transparent">Build, Launch, and Scale</span> Your Digital Venture.
            </motion.h1>

            {/* Subhead */}
            <motion.p
              variants={itemVariants} className="text-lg md:text-xl text-white/80 font-medium leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              For founders, clinic teams, and Shopify brands tired of juggling vendors, CONEFIA is your all-in-one AI + mobile app and growth marketing studio—so you acquire customers or patients faster and scale with confidence.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-[#DBFE01] to-[#c5e000] text-[#0a0e1a] px-8 py-4 rounded-full text-base font-bold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-[#DBFE01]/40 hover:-translate-y-0.5 transition-all duration-300 flex-1">

                Book Roadmap Call
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('track-selector')}
                className="px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-md flex-1">

                Choose Your Track
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 md:gap-8 mt-8 justify-center lg:justify-start">

              <div className="text-center lg:text-left group">
                <p className="text-white/50 mb-1 text-xs font-bold uppercase tracking-widest">TYPICAL MVP</p>
                <p className="text-white font-extrabold text-xl bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-[#DBFE01] group-hover:to-[#c5e000] transition-all">8–12 weeks</p>
              </div>
              <div className="text-center lg:text-left group">
                <p className="text-white/50 mb-1 text-xs font-bold uppercase tracking-widest">WEEKLY DEMOS</p>
                <p className="text-white font-extrabold text-xl bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-[#DBFE01] group-hover:to-[#c5e000] transition-all">Guaranteed</p>
              </div>
              <div className="text-center lg:text-left group">
                <p className="text-white/50 mb-1 text-xs font-bold uppercase tracking-widest">PRIVACY-FIRST</p>
                <p className="text-white font-extrabold text-xl bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-[#DBFE01] group-hover:to-[#c5e000] transition-all">HIPAA-aware</p>
              </div>
              <div className="text-center lg:text-left group">
                <p className="text-white/50 mb-1 text-xs font-bold uppercase tracking-widest">ONE BACKLOG</p>
                <p className="text-white font-extrabold text-xl bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-[#DBFE01] group-hover:to-[#c5e000] transition-all">One owner</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual - Animated Flow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.4 }}
            className="relative w-fit ml-auto">

            <AccelerateProcessVisual reduceMotion={reduceMotion || isMobile} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - simplified */}
      {!reduceMotion &&
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block opacity-50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-3 bg-white/50 rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      }
    </section>);

}