import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Code2, Rocket, TrendingUp, CheckCircle2, Star, ArrowRight } from 'lucide-react';
import { usePersona } from '@/components/context/PersonaContext';

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
    <section ref={ref} id="packages" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#DBFE01] opacity-[0.04] blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="text-center mb-16">

          <span className="bg-[#DBFE01]/20 text-[#2F2F2F] mb-4 px-4 py-1.5 text-lg font-semibold rounded-full inline-block">Packages & Services

          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2F2F2F] mb-4">
            Start at <span className="gradient-text">any phase</span>
          </h2>
          <p className="text-lg text-[#2F2F2F]/80 max-w-2xl mx-auto font-medium">
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
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#DBFE01] text-[#2F2F2F] text-xs font-semibold flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Most Popular
                </div>
            }
              
              <div className={`glass-card rounded-3xl p-6 h-full transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 ${
            pkg.highlight ?
            'border-2 border-[#DBFE01] bg-gradient-to-b from-[#DBFE01]/5 to-transparent' :
            'border border-transparent hover:border-[#DBFE01]/20'}`
            }>
                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
              pkg.highlight ? 'bg-[#DBFE01]' : 'bg-[#2F2F2F]/5'}`
              }>
                  <pkg.icon className={`w-6 h-6 ${pkg.highlight ? 'text-[#2F2F2F]' : 'text-[#2F2F2F]'}`} />
                </div>

                {/* Name & pricing */}
                <h3 className="text-xl font-bold text-[#2F2F2F] mb-1">{pkg.name}</h3>
                <span className="inline-block px-2 py-0.5 rounded bg-[#2F2F2F]/5 text-[#2F2F2F]/60 text-xs font-medium mb-3">
                  {pkg.pricing}
                </span>
                <p className="text-[#2F2F2F]/70 text-sm mb-6 font-medium">{pkg.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {pkg.features.map((feature, fIndex) =>
                <li key={fIndex} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                  pkg.highlight ? 'text-[#DBFE01]' : 'text-[#2F2F2F]/30'}`
                  } />
                      <span className="text-[#2F2F2F]/90 font-medium">{feature}</span>
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2F2F2F] text-white font-semibold hover:bg-[#2F2F2F]/90 transition-all hover:shadow-lg hover:-translate-y-0.5">

            {selectedPersona.packagesCta || "Discuss your project"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>);

}