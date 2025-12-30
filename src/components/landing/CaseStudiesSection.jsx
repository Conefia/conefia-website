import React from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles, TrendingUp } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function CaseStudiesSection({ reduceMotion }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const caseStudies = [
    {
      id: 'vascular-institute',
      client: 'Vascular Institute of Michigan',
      url: 'https://vascularim.com',
      stage: 'Growth',
      headline: '200+ patients at $20 CAC in 6 months',
      summary: 'Comprehensive growth strategy across Meta, TikTok, and Google to scale awareness and patient acquisition for GAE.',
      metrics: ['+100% followers', '200+ confirmed patients', '$20 CAC', '6 months'],
      gradient: 'from-blue-500 to-indigo-600',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60',
    },
    {
      id: 'menovia',
      client: 'Menovia AI',
      url: 'https://menovia.ai',
      stage: 'Idea → Build → Launch',
      headline: 'MVP in 3 months (vs. 9) + digital presence foundation',
      summary: 'Market research + rapid prototyping, then built the women's health AI agent, website, and AI-integrated mobile app—plus social profiles and launch content.',
      metrics: ['MVP in 3 months', '~66% faster', 'Social profiles set up', 'Launch content produced'],
      gradient: 'from-purple-500 to-pink-600',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60',
    },
    {
      id: 'larovie',
      client: 'Larovie Beauty',
      url: 'https://larovie.ae',
      stage: 'Idea → Growth',
      headline: '1,500+ customers in 3 months with AED 32 CAC',
      summary: 'End-to-end build + growth: Shopify store, CRO optimization, brand identity, digital presence, and paid acquisition across Meta/TikTok/Google.',
      metrics: ['50% MoM revenue growth', '1,500+ customers', 'AED 32 CAC', '3 months'],
      gradient: 'from-amber-500 to-orange-600',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60',
    },
    {
      id: 'al-mahfza',
      client: 'Al-Mahfza',
      url: 'https://al-mahfza.com',
      stage: 'Build',
      headline: 'Mobile app shipped in 60 days after 1 year stuck',
      summary: 'Took over a stalled mobile app effort, delivered a fully functioning optimized app, and guided U.S. money-transfer regulatory requirements.',
      metrics: ['Delivered in 60 days', '~83% faster vs prior attempts', 'Compliance guidance'],
      gradient: 'from-emerald-500 to-teal-600',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=60',
    },
    {
      id: 'hartalega',
      client: 'Hartalega',
      url: 'https://hartalega.com.my',
      stage: 'Build',
      headline: 'Validated AI PoCs in 3 months with 5× ROI',
      summary: 'Built a 3-year AI transformation strategy and delivered PoCs for predictive maintenance, predictive quality, and AI agents for process optimization.',
      metrics: ['PoCs validated in 3 months', '5× ROI', 'Multi-use-case program'],
      gradient: 'from-cyan-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60',
    },
    {
      id: 'aviya-telemed',
      client: 'Aviya Telemed',
      url: 'https://www.aviyatelemed.com',
      stage: 'Build',
      headline: 'MVP delivered in 3 months after 2 years stalled',
      summary: 'Took over development, stabilized scope, and shipped a production-ready telemedicine MVP with release readiness and QA.',
      metrics: ['MVP in 3 months', '~87.5% faster vs 2 years', 'Launch-ready'],
      gradient: 'from-rose-500 to-red-600',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60',
    },
  ];

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section ref={ref} id="case-studies" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1a1a1a]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#DBFE01]/5 via-transparent to-transparent" />
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={reduceMotion ? {} : {
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        animate={reduceMotion ? {} : {
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/70 text-sm font-semibold mb-6 border border-white/20"
            animate={reduceMotion ? {} : {
              boxShadow: [
                '0 0 20px rgba(219, 254, 1, 0.2)',
                '0 0 40px rgba(219, 254, 1, 0.4)',
                '0 0 20px rgba(219, 254, 1, 0.2)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <TrendingUp className="w-4 h-4" />
            Success Stories
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Real outcomes.<br />
            <span className="bg-gradient-to-r from-[#DBFE01] via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Real growth.
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto font-medium">
            See how we've helped founders go from idea to live product with measurable results.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, delay: 0.3 }}
            className="overflow-hidden"
            ref={emblaRef}
          >
            <div className="flex gap-6">
              {caseStudies.map((study, index) => (
                <div
                  key={study.id}
                  className="flex-[0_0_100%] md:flex-[0_0_85%] lg:flex-[0_0_70%] min-w-0"
                >
                  <motion.div
                    whileHover={reduceMotion ? {} : { scale: 1.02, y: -5 }}
                    className="group h-full"
                  >
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border-2 border-white/10 hover:border-[#DBFE01]/40 transition-all duration-500 h-full">
                      {/* Gradient glow */}
                      <motion.div 
                        className={`absolute -inset-1 bg-gradient-to-r ${study.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                      />
                      
                      <div className="relative">
                        {/* Image */}
                        <div className="relative h-72 overflow-hidden">
                          <img
                            src={study.image}
                            alt={study.client}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${study.gradient} opacity-60`} />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent" />
                          
                          {/* Stage badge */}
                          <motion.div 
                            className={`absolute top-6 left-6 px-4 py-2 rounded-full bg-gradient-to-r ${study.gradient} text-white text-sm font-bold shadow-xl`}
                            whileHover={{ scale: 1.05 }}
                          >
                            {study.stage}
                          </motion.div>

                          {/* Sparkle */}
                          <motion.div
                            className="absolute top-6 right-6"
                            animate={reduceMotion ? {} : {
                              rotate: [0, 360],
                              scale: [1, 1.2, 1],
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                          >
                            <Sparkles className="w-6 h-6 text-[#DBFE01]" />
                          </motion.div>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-10">
                          <h3 className="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider">
                            {study.client}
                          </h3>
                          <h4 className={`text-2xl md:text-3xl font-extrabold mb-4 bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent leading-tight`}>
                            {study.headline}
                          </h4>
                          <p className="text-white/70 mb-6 leading-relaxed font-medium">
                            {study.summary}
                          </p>

                          {/* Metrics */}
                          <div className="grid grid-cols-2 gap-3 mb-8">
                            {study.metrics.map((metric, mIndex) => (
                              <motion.div
                                key={mIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ 
                                  duration: 0.4, 
                                  delay: 0.5 + mIndex * 0.1 
                                }}
                                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors"
                              >
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${study.gradient}`} />
                                <span className="text-white/80 text-sm font-semibold">{metric}</span>
                              </motion.div>
                            ))}
                          </div>

                          {/* CTA */}
                          <motion.a
                            href={study.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${study.gradient} text-white font-bold shadow-xl hover:shadow-2xl transition-all group/cta`}
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            View case study
                            <ArrowUpRight className="w-5 h-5 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1 transition-transform" />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Navigation arrows */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.6 }}
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all shadow-xl z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.6 }}
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all shadow-xl z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-white/50 text-sm mb-4 font-medium">Want results like these?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#DBFE01] text-[#1a1a1a] font-bold hover:shadow-2xl hover:shadow-[#DBFE01]/40 transition-all hover:-translate-y-1"
          >
            Book a roadmap call
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}