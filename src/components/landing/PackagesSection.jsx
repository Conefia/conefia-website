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

    highlight: false
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

    highlight: true
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

    highlight: false
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

    highlight: false
  }];


  return (
    <section ref={ref} id="packages" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#DBFE01] opacity-[0.08] blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-500 opacity-[0.05] blur-[100px]" />
      
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#2F2F2F] mb-4">
            Pick a sprint. <span className="gradient-text">Ship outcomes.</span>
          </h2>
          <p className="text-lg text-[#2F2F2F]/80 max-w-2xl mx-auto font-medium">
            AI MVP development, mobile app development, clinic growth, and Shopify growth—delivered in focused sprints with one accountable team.
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
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#DBFE01] text-[#2F2F2F] text-xs font-semibold flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Most Popular
                </div>
            }
              
              <div className={`glass-card rounded-3xl p-8 h-full transition-all duration-300 ${
            pkg.highlight ?
            'border-2 border-[#DBFE01] bg-gradient-to-br from-[#DBFE01]/10 via-[#DBFE01]/5 to-transparent shadow-xl shadow-[#DBFE01]/10 hover:shadow-2xl hover:shadow-[#DBFE01]/20' :
            'border border-gray-200 hover:border-[#DBFE01]/40 hover:shadow-xl hover:shadow-black/5'} hover:-translate-y-1`
            }>
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all ${
              pkg.highlight ? 'bg-gradient-to-br from-[#DBFE01] to-[#c5e000] shadow-lg shadow-[#DBFE01]/30' : 'bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200'}`
              }>
                  <pkg.icon className={`w-7 h-7 ${pkg.highlight ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]'}`} />
                </div>

                {/* Name & pricing */}
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{pkg.name}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                  pkg.highlight ? 'bg-[#DBFE01] text-[#1a1a1a]' : 'bg-gray-100 text-gray-700 border border-gray-200'}`}>
                  {pkg.pricing}
                </span>
                
                {/* KPI chip */}
                <div className={`inline-flex items-center px-3 py-1.5 rounded-full mb-4 ${
                  pkg.highlight ? 'bg-[#DBFE01]/20 border border-[#DBFE01]' : 'bg-blue-50 border border-blue-200'}`}>
                  <span className={`text-xs font-bold ${pkg.highlight ? 'text-[#1a1a1a]' : 'text-blue-700'}`}>{pkg.kpi}</span>
                </div>
                
                <p className="text-gray-700 text-sm mb-5 font-medium leading-relaxed">{pkg.description}</p>

                {/* Popular proof (MVP Build only) */}
                {pkg.popularProof && (
                  <p className="text-gray-600 text-xs italic mb-5 bg-gray-50 p-3 rounded-lg border border-gray-100">{pkg.popularProof}</p>
                )}

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, fIndex) =>
                <li key={fIndex} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                  pkg.highlight ? 'text-[#DBFE01]' : 'text-blue-600'}`
                  } />
                      <span className="text-gray-800 font-medium leading-relaxed">{feature}</span>
                    </li>
                )}
                </ul>

                {/* Best for */}
                <div className={`pt-4 border-t ${pkg.highlight ? 'border-[#DBFE01]/20' : 'border-gray-200'}`}>
                  <p className="text-xs text-gray-500 mb-2 font-bold uppercase tracking-wider">Best for</p>
                  <p className="text-sm text-gray-900 font-semibold leading-relaxed">{pkg.bestFor}</p>
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