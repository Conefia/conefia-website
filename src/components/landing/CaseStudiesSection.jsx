import React, { useCallback, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, TrendingUp, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import ContourBackground from '../visual/ContourBackground';

export default function CaseStudiesSection({ reduceMotion }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  const caseStudyPages = {
    'vascular-institute': 'CaseStudyVascular',
    'menovia': 'CaseStudyMenovia',
    'larovie': 'CaseStudyLarovie',
    'al-mahfza': 'CaseStudyAlMahfza',
    'hartalega': 'CaseStudyHartalega',
    'aviya': 'CaseStudyAviya'
  };

  const caseStudies = [
  {
    id: 'vascular-institute',
    client: 'Vascular Institute of Michigan',
    url: 'https://vascularim.com',
    stage: 'Growth',
    headline: '200+ patients at $20 CAC in 6 months',
    summary: 'Comprehensive growth strategy across Meta, TikTok, and Google to scale awareness and patient acquisition for GAE.',
    metrics: [
    '+100% followers',
    '200+ confirmed patients',
    '$20 CAC',
    '6 months'],

    gradient: 'from-blue-600 via-cyan-500 to-teal-600',
    bgGradient: 'from-blue-500/20 to-teal-500/20',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'menovia',
    client: 'Menovia AI',
    url: 'https://menovia.ai',
    stage: 'Idea → Build → Launch',
    headline: 'MVP in 3 months (vs. 9) + digital presence foundation',
    summary: 'Market research + rapid prototyping, then built the women\'s health AI agent, website, and AI-integrated mobile app—plus social profiles and launch content.',
    metrics: [
    'MVP in 3 months',
    '~66% faster',
    'Social profiles set up',
    'Launch content produced'],

    gradient: 'from-purple-600 via-pink-500 to-rose-600',
    bgGradient: 'from-purple-500/20 to-rose-500/20',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'larovie',
    client: 'Larovie Beauty',
    url: 'https://larovie.ae',
    stage: 'Idea → Growth',
    headline: '1,500+ customers in 3 months with AED 32 CAC',
    summary: 'End-to-end build + growth: Shopify store, CRO optimization, brand identity, digital presence, and paid acquisition across Meta/TikTok/Google.',
    metrics: [
    '50% MoM revenue growth',
    '1,500+ customers',
    'AED 32 CAC',
    '3 months'],

    gradient: 'from-amber-600 via-orange-500 to-red-600',
    bgGradient: 'from-amber-500/20 to-red-500/20',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'al-mahfza',
    client: 'Al-Mahfza',
    url: 'https://al-mahfza.com',
    stage: 'Build',
    headline: 'Mobile app shipped in 60 days after 1 year stuck',
    summary: 'Took over a stalled mobile app effort, delivered a fully functioning optimized app, and guided U.S. money-transfer regulatory requirements.',
    metrics: [
    'Delivered in 60 days',
    '~83% faster vs prior attempts',
    'Compliance guidance'],

    gradient: 'from-emerald-600 via-green-500 to-lime-600',
    bgGradient: 'from-emerald-500/20 to-lime-500/20',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'hartalega',
    client: 'Hartalega',
    url: 'https://hartalega.com.my',
    stage: 'Build',
    headline: 'Validated AI PoCs in 3 months with 5× ROI',
    summary: 'Built a 3-year AI transformation strategy and delivered PoCs for predictive maintenance, predictive quality, and AI agents for process optimization.',
    metrics: [
    'PoCs validated in 3 months',
    '5× ROI',
    'Multi-use-case program'],

    gradient: 'from-indigo-600 via-violet-500 to-purple-600',
    bgGradient: 'from-indigo-500/20 to-purple-500/20',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'aviya',
    client: 'Aviya Telemed',
    url: 'https://www.aviyatelemed.com',
    stage: 'Build',
    headline: 'MVP delivered in 3 months after 2 years stalled',
    summary: 'Took over development, stabilized scope, and shipped a production-ready telemedicine MVP with release readiness and QA.',
    metrics: [
    'MVP in 3 months',
    '~87.5% faster vs 2 years',
    'Launch-ready'],

    gradient: 'from-sky-600 via-blue-500 to-indigo-600',
    bgGradient: 'from-sky-500/20 to-indigo-500/20',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80'
  }];


  return (
    <section ref={ref} id="case-studies" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1a1a1a]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#DBFE01]/5 via-transparent to-transparent" />
      
      <ContourBackground className="opacity-40" />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={reduceMotion ? {} : {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }} />

      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={reduceMotion ? {} : {
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }} />

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="text-center mb-12">

          <span className="bg-white/10 text-white/60 mb-6 px-4 py-2 text-lg font-semibold rounded-full inline-flex items-center gap-2 border border-white/20">Case Studies


          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Real outcomes.<br />
            <span className="text-[#DBFE01]">Real growth.</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto font-medium">
            See how we've helped founders go from idea to live product with measurable results.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {caseStudies.map((study, index) =>
              <motion.div
                key={study.id}
                className="flex-[0_0_100%] md:flex-[0_0_85%] lg:flex-[0_0_70%] min-w-0"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>

                  <div className="group relative">
                    {/* Glow effect */}
                    <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${study.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                    animate={reduceMotion ? {} : {
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }} />


                    <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-[#DBFE01]/30 transition-all duration-500">
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                        src={study.image}
                        alt={study.client}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                        <div className={`absolute inset-0 bg-gradient-to-t ${study.gradient} opacity-60`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                        
                        {/* Stage badge */}
                        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                          <span className="text-white text-xs font-bold">{study.stage}</span>
                        </div>

                        {/* Trending icon */}
                        <motion.div
                        className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20"
                        whileHover={{ scale: 1.1, rotate: 5 }}>

                          <TrendingUp className="w-6 h-6 text-white" />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-8">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#DBFE01] transition-colors">
                              {study.client}
                            </h3>
                            <a
                            href={study.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/40 hover:text-[#DBFE01] text-sm flex items-center gap-1 transition-colors"
                            onClick={(e) => e.stopPropagation()}>

                              {study.url.replace('https://', '')}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>

                        <h4 className={`text-2xl font-extrabold mb-3 bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                          {study.headline}
                        </h4>

                        <p className="text-white/80 mb-6 leading-relaxed font-medium">
                          {study.summary}
                        </p>

                        {/* Metrics */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {study.metrics.map((metric, mIndex) =>
                        <motion.div
                          key={mIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{ delay: 0.3 + mIndex * 0.1 }}
                          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10">

                              <Sparkles className={`w-3 h-3 ${study.gradient.includes('blue') ? 'text-blue-400' : study.gradient.includes('purple') ? 'text-purple-400' : study.gradient.includes('amber') ? 'text-amber-400' : study.gradient.includes('emerald') ? 'text-emerald-400' : study.gradient.includes('indigo') ? 'text-indigo-400' : 'text-sky-400'}`} />
                              <span className="text-white/80 text-xs font-semibold">{metric}</span>
                            </motion.div>
                        )}
                        </div>

                        {/* CTA */}
                        <Link
                        to={createPageUrl(caseStudyPages[study.id])}
                        className={`w-full px-6 py-3 rounded-xl bg-gradient-to-r ${study.gradient} text-white font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-white/20 transition-all hover:-translate-y-0.5`}>

                          View case study
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="hidden md:block">
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors group">

              <ChevronLeft className="w-6 h-6 text-white group-hover:text-[#DBFE01] transition-colors" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors group">

              <ChevronRight className="w-6 h-6 text-white group-hover:text-[#DBFE01] transition-colors" />
            </button>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {caseStudies.map((_, index) =>
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`transition-all ${
            index === selectedIndex ?
            'w-8 h-2 bg-[#DBFE01]' :
            'w-2 h-2 bg-white/20 hover:bg-white/40'} rounded-full`
            } />

          )}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.5 }}
          className="text-center mt-12">

          <p className="text-white/40 text-sm mb-4 font-medium">Want results like these?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#DBFE01] text-[#1a1a1a] font-bold hover:shadow-lg hover:shadow-[#DBFE01]/30 transition-all hover:-translate-y-0.5">

            Book a roadmap call
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>);

}