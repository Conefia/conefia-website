import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Brain, ShoppingCart, Bot, Heart, Sparkles } from 'lucide-react';

export default function CaseStudiesSection({ reduceMotion }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const caseStudies = [
    {
      id: 'menovia',
      title: 'Menovia',
      category: 'Health / AI',
      icon: Brain,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60',
      description: 'AI-powered health companion with safety rails and HIPAA-aware intake.',
      highlights: [
        'Agent scaffolding with memory & safety rails',
        'Onboarding + symptom tracking + curated content',
        'Brand site, social, early waitlist growth',
      ],
      tags: ['AI Agent', 'Healthcare', 'HIPAA'],
      gradient: 'from-rose-500 to-pink-600',
    },
    {
      id: 'larovie',
      title: 'Larovie',
      category: 'E-commerce',
      icon: ShoppingCart,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60',
      description: 'Premium Shopify store with CRO blocks and full analytics stack.',
      highlights: [
        'Shopify build with CRO blocks & analytics',
        'Brand identity, content system, paid/SEO plan',
        'Early traction and CAC baselines',
      ],
      tags: ['Shopify', 'E-commerce', 'Growth'],
      gradient: 'from-amber-500 to-orange-600',
    },
  ];

  return (
    <section ref={ref} id="case-studies" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1a1a1a]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#DBFE01]/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/60 text-sm font-medium mb-4">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Real outcomes.<br />
              <span className="text-[#DBFE01]">Real growth.</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-md mt-4 md:mt-0">
            See how we've helped founders go from idea to live product with measurable results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ 
                duration: reduceMotion ? 0 : 0.7, 
                delay: reduceMotion ? 0 : 0.3 + index * 0.2 
              }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-[#DBFE01]/30 transition-all duration-500 h-full">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${study.gradient} opacity-60`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                  
                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                    <study.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Category */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-medium">
                    {study.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#DBFE01] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-white/50 mb-6">
                    {study.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-3 mb-6">
                    {study.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-3">
                        <Sparkles className="w-4 h-4 text-[#DBFE01] flex-shrink-0 mt-1" />
                        <span className="text-white/70 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-white/40 text-sm mb-4">Want results like these?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#DBFE01] text-[#2F2F2F] font-semibold hover:shadow-lg hover:shadow-[#DBFE01]/30 transition-all hover:-translate-y-0.5"
          >
            Book a roadmap call
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}