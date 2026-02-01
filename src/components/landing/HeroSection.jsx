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
    <section ref={ref} className="relative min-h-screen flex items-center pt-20 md:pt-0 overflow-hidden bg-[#2F2F2F]">
      {/* Base layer */}
      <div className="absolute inset-0 bg-[#2F2F2F]" />
      
      {/* Static background gradient */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 60% 40%, rgba(219, 254, 1, 0.15), transparent 60%),
            radial-gradient(circle at 20% 80%, rgba(219, 254, 1, 0.1), transparent 50%)
          `
        }} />

      {/* Contour lines */}
      <ContourBackground className="opacity-50" />
      
      {/* Static glows */}
      <div
        className="absolute top-[20%] right-[25%] w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(219, 254, 1, 0.2) 0%, transparent 60%)',
          filter: 'blur(80px)'
        }} />
      <div
        className="absolute bottom-[15%] left-[15%] w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(219, 254, 1, 0.15) 0%, transparent 60%)',
          filter: 'blur(70px)'
        }} />

      {/* Static Star Dust */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(150)].map((_, i) => {
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const size = Math.random() * 2 + 0.3;
          const opacity = Math.random() * 0.6 + 0.2;
          const hasGlow = Math.random() > 0.85;
          
          return (
            <div
              key={`star-${i}`}
              className="absolute rounded-full bg-[#DBFE01]"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                boxShadow: hasGlow ? '0 0 4px rgba(219, 254, 1, 0.8)' : 'none'
              }}
            />
          );
        })}
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

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center lg:text-left">

            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DBFE01]/20 border border-[#DBFE01]/40 mb-6">
              <Sparkles className="w-4 h-4 text-[#DBFE01]" />
              <span className="text-sm font-semibold text-[#DBFE01]">Your Build → Launch → Scale Partner</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">

              Build it.{' '}
              <span className="text-[#DBFE01]">Launch it.</span>{' '}
              Scale it.
            </motion.h1>

            {/* Subhead */}
            <motion.p
              variants={itemVariants} className="text-lg md:text-xl text-white/90 font-medium leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">AI MVP development, launch systems, and growth execution—done by one integrated team.
For AI SaaS founders, clinics, Shopify brands, and accelerators who want to ship fast and measure outcomes.


            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-2">

                Book Roadmap Call
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('track-selector')}
                className="px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-2 border-2 border-white/20 text-white hover:bg-white hover:text-[#0B1020] hover:border-white transition-all duration-300 backdrop-blur-sm">

                Choose Your Track
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-8 mt-10 justify-center lg:justify-start">

              {[
              { label: 'Typical MVP', value: '8–12 weeks' },
              { label: 'Weekly demos', value: 'Guaranteed' },
              { label: 'Privacy-first', value: 'HIPAA-aware' },
              { label: 'One backlog', value: 'One owner' }].
              map((item, i) =>
              <div key={i} className="text-center lg:text-left">
                  <p className="text-xs text-white/40 uppercase tracking-wider font-semibold mb-1">{item.label}</p>
                  <p className="text-white font-bold text-lg">{item.value}</p>
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Right Visual - Animated Flow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.4 }}
            className="relative flex items-center justify-center">

            <AccelerateProcessVisual reduceMotion={reduceMotion || isMobile} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - simplified */}
      {!reduceMotion && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block opacity-50">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      )}
    </section>);

}