import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Code2, Rocket, TrendingUp, CheckCircle2, Star, ArrowRight } from 'lucide-react';
import { usePersona } from '@/components/context/PersonaContext';
import ContourBackground from '@/components/visual/ContourBackground';

export default function PackagesSection({ reduceMotion }) {
  const { selectedPersona } = usePersona();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const packages = [
  {
    icon: Search,
    name: 'Validate Sprint',
    pricing: 'Fixed',
    description: 'Research + prototype + roadmap',
    features: [
    'Discovery workshops',
    'Competitor analysis',
    'Interactive prototype',
    'MVP scope document',
    'Success criteria definition'],

    highlight: false
  },
  {
    icon: Code2,
    name: 'MVP Build',
    pricing: 'Fixed + Milestones',
    description: 'Core features + QA + deploy',
    features: [
    'UX/UI design system',
    'Full-stack development',
    'AI agent / app / web / store',
    'Integrations & APIs',
    'Security & compliance',
    'Analytics instrumentation'],

    highlight: true
  },
  {
    icon: Rocket,
    name: 'Launch Presence',
    pricing: 'Fixed',
    description: 'Brand, site, store, listings',
    features: [
    'Brand kit & identity',
    'Website / landing pages',
    'App Store / Shopify setup',
    'Google Business profile',
    'Social media setup',
    'Content starter kit'],

    highlight: false
  },
  {
    icon: TrendingUp,
    name: 'Growth Sprint',
    pricing: 'Monthly Retainer',
    description: '4-6 experiments/month + reporting',
    features: [
    'Paid ads management',
    'SEO & content strategy',
    'CRM & retention flows',
    'Analytics & reporting',
    'A/B testing',
    'Iteration backlog'],

    highlight: false
  }];


  return (
    <section ref={ref} id="packages" className="py-16 md:py-24 bg-[#2F2F2F] relative overflow-hidden">
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
              }} />
          );
        })}
      </div>
      
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(11, 16, 32, 0.4) 100%)'
        }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="text-center mb-16">

          <span className="bg-white/10 text-white px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-2 border border-white/20 mb-6">
            Packages &amp; Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start at <span className="text-[#DBFE01]">any phase</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-medium">
            Modular engagement, one integrated team. Optional success kicker at activation/revenue milestones.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              delay: reduceMotion ? 0 : 0.2 + index * 0.12
            }}
            className={`relative group ${pkg.highlight ? 'lg:-mt-4 lg:mb-4' : ''}`}>

              {pkg.highlight &&
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#DBFE01] text-[#1a1a1a] text-xs font-semibold flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Most Popular
                </div>
            }
              
              <div className={`bg-white/5 backdrop-blur-md rounded-3xl p-6 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
            pkg.highlight ?
            'border-2 border-[#DBFE01]' :
            'border border-white/10 hover:border-white/20'}`
            }>
                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
              pkg.highlight ? 'bg-[#DBFE01]' : 'bg-white/5'}`
              }>
                  <pkg.icon className={`w-6 h-6 ${pkg.highlight ? 'text-[#1a1a1a]' : 'text-white'}`} />
                </div>

                {/* Name & pricing */}
                <h3 className="text-xl font-bold text-white mb-1">{pkg.name}</h3>
                <span className="inline-block px-2 py-0.5 rounded bg-white/5 text-white/60 text-xs font-medium mb-3">
                  {pkg.pricing}
                </span>
                <p className="text-white/70 text-sm mb-6 font-medium">{pkg.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {pkg.features.map((feature, fIndex) =>
                <li key={fIndex} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                  pkg.highlight ? 'text-[#DBFE01]' : 'text-white/30'}`
                  } />
                      <span className="text-white/90 font-medium">{feature}</span>
                    </li>
                )}
                </ul>
              </div>
            </motion.div>
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.6 }}
          className="text-center mt-12">

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#DBFE01] text-[#1a1a1a] font-semibold hover:bg-[#c8e600] transition-all hover:shadow-lg hover:-translate-y-0.5">

            {selectedPersona.packagesCta || "Discuss your project"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>);

}