import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Code2, Rocket, TrendingUp, CheckCircle2, Star, ArrowRight, Sparkles } from 'lucide-react';
import { usePersona } from '@/components/context/PersonaContext';

export default function PackagesSection({ reduceMotion }) {
  const { selectedPersona } = usePersona();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const packages = [
  {
    icon: Search,
    name: 'MVP Validation Sprint',
    pricing: 'Fixed',
    description: 'Research + prototype + roadmap',
    kpi: 'Clarity in 10 days',
    bestFor: 'founders who want to de-risk before building',
    features: [
    'Discovery workshop + goals',
    'Competitive teardown',
    'Clickable prototype (or UX wireflow)',
    'MVP scope + milestones',
    'Success metrics + launch plan'],

    highlight: false,
    gradient: 'from-blue-600 via-indigo-600 to-purple-600',
    bgGradient: 'from-blue-500/20 to-indigo-500/20',
    iconBg: 'from-blue-500 to-indigo-600',
    borderColor: 'border-blue-200/50',
    glowColor: 'shadow-blue-500/20',
    accentColor: 'text-blue-600'
  },
  {
    icon: Code2,
    name: 'AI / Mobile MVP Build',
    pricing: 'Fixed + Milestones',
    description: 'Production-ready MVP in 8–12 weeks',
    kpi: 'MVP in 8–12 weeks',
    bestFor: 'founders ready to ship and start pilots',
    popularProof: 'Chosen by founders shipping AI MVPs on tight timelines.',
    features: [
    'Product UX + UI system',
    'Full-stack build (web/mobile)',
    'AI features (LLMs/agents) when needed',
    'Integrations + APIs',
    'Analytics + event tracking',
    'Security + HIPAA-aware options'],

    highlight: true,
    gradient: 'from-[#DBFE01] via-[#c5e000] to-[#a8c600]',
    bgGradient: 'from-[#DBFE01]/20 to-[#a8c600]/20',
    iconBg: 'from-[#DBFE01] to-[#a8c600]',
    borderColor: 'border-[#DBFE01]/50',
    glowColor: 'shadow-[#DBFE01]/30',
    accentColor: 'text-[#a8c600]'
  },
  {
    icon: Rocket,
    name: 'Launch & Acquisition Setup',
    pricing: 'Fixed',
    description: 'Landing pages, store, and local visibility',
    kpi: 'Launch-ready in 2–4 weeks',
    bestFor: 'clinics + Shopify brands that need discoverability fast',
    features: [
    'Conversion landing page + tracking',
    'App Store / Play Store assets (if needed)',
    'Shopify setup + theme essentials',
    'Google Business Profile + local SEO (clinics)',
    'Social profiles + content starter kit'],

    highlight: false,
    gradient: 'from-purple-600 via-pink-600 to-rose-600',
    bgGradient: 'from-purple-500/20 to-pink-500/20',
    iconBg: 'from-purple-500 to-pink-600',
    borderColor: 'border-purple-200/50',
    glowColor: 'shadow-purple-500/20',
    accentColor: 'text-purple-600'
  },
  {
    icon: TrendingUp,
    name: 'Growth Experiment Sprint',
    pricing: 'Monthly Retainer',
    description: 'Predictable growth, measured weekly',
    kpi: '4–6 tests/month',
    bestFor: 'teams that want compounding results, not random marketing',
    features: [
    '4–6 experiments/month (CRO + paid + lifecycle)',
    'Creative + audience testing',
    'SEO content system + updates',
    'Email/SMS retention flows',
    'Dashboards: CAC, ROAS/MER, bookings, LTV',
    'Iteration backlog + weekly review'],

    highlight: false,
    gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
    bgGradient: 'from-emerald-500/20 to-teal-500/20',
    iconBg: 'from-emerald-500 to-teal-600',
    borderColor: 'border-emerald-200/50',
    glowColor: 'shadow-emerald-500/20',
    accentColor: 'text-emerald-600'
  }];


  return (
    <section ref={ref} id="packages" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-[#FAFAFA] to-white/70" />
      
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={reduceMotion ? {} : {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={reduceMotion ? {} : {
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="text-center mb-16">

          <span className="bg-[#1a1a1a]/5 text-[#1a1a1a]/60 px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-2 border border-[#1a1a1a]/10 mb-6">
            <Sparkles className="w-4 h-4 text-[#1a1a1a]" />
            Packages &amp; Services
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-4">
            Pick a sprint. <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Ship outcomes.</span>
          </h2>
          <p className="text-lg text-[#1a1a1a]/80 max-w-2xl mx-auto font-medium leading-relaxed">
            AI MVP development, mobile app development, clinic growth, and Shopify growth—delivered in focused sprints with one accountable team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, rotateX: -15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 40, rotateX: -15 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.2 + index * 0.15,
              type: "spring",
              stiffness: 80
            }}
            whileHover={reduceMotion ? {} : {
              y: -8,
              rotateY: 3,
              transition: { duration: 0.3 }
            }}
            className={`relative group perspective-1000 ${pkg.highlight ? 'lg:-mt-4 lg:mb-4' : ''}`}>

              {pkg.highlight &&
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#DBFE01] text-[#2F2F2F] text-xs font-semibold flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Most Popular
                </div>
            }
              
              <div className={`glass-card rounded-3xl p-7 h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 border-2 ${pkg.borderColor} hover:border-opacity-80 bg-gradient-to-br ${pkg.bgGradient} backdrop-blur-xl overflow-hidden relative group`}>
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)`
                  }}
                  animate={reduceMotion ? {} : {
                    x: ['-200%', '200%']
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut"
                  }}
                />

                {/* Icon */}
                <motion.div 
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.iconBg} flex items-center justify-center border-2 border-white/50 shadow-lg ${pkg.glowColor} group-hover:shadow-2xl transition-all duration-500 mb-5 relative`}
                  whileHover={reduceMotion ? {} : { scale: 1.1, rotate: 10 }}
                >
                  <pkg.icon className="w-8 h-8 text-white drop-shadow-lg" />
                </motion.div>

                {/* Name & pricing */}
                <h3 className="text-xl font-extrabold text-[#1a1a1a] mb-2 group-hover:scale-105 transition-transform duration-300">{pkg.name}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${pkg.accentColor} bg-white/80 border border-current/20 mb-3`}>
                  {pkg.pricing}
                </span>
                
                {/* KPI chip */}
                <div className={`inline-flex items-center px-3 py-1.5 rounded-full mb-4 bg-white/60 border-2 ${pkg.borderColor}`}>
                  <span className={`text-xs font-bold ${pkg.accentColor}`}>{pkg.kpi}</span>
                </div>
                
                <p className="text-[#1a1a1a]/80 text-sm mb-5 font-semibold leading-relaxed">{pkg.description}</p>

                {/* Popular proof (MVP Build only) */}
                {pkg.popularProof && (
                  <p className="text-[#1a1a1a]/70 text-xs italic mb-5 bg-white/50 p-3 rounded-lg border border-white/30">{pkg.popularProof}</p>
                )}

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, fIndex) =>
                <motion.li 
                  key={fIndex} 
                  className="flex items-start gap-2.5 text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.5 + fIndex * 0.05
                  }}
                >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <CheckCircle2 className={`w-4 h-4 ${pkg.accentColor} flex-shrink-0 mt-0.5`} />
                      </motion.div>
                      <span className="text-[#1a1a1a]/80 font-medium leading-snug">{feature}</span>
                    </motion.li>
                )}
                </ul>

                {/* Best for */}
                <div className="pt-4 border-t-2 border-[#1a1a1a]/5">
                  <p className="text-xs text-[#1a1a1a]/60 mb-2 font-bold uppercase tracking-wider">Best for</p>
                  <p className="text-sm text-[#1a1a1a] font-semibold leading-relaxed">{pkg.bestFor}</p>
                </div>
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2F2F2F] text-white font-semibold hover:bg-[#2F2F2F]/90 transition-all hover:shadow-lg hover:-translate-y-0.5">

            {selectedPersona.packagesCta || "Discuss your project"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>);

}