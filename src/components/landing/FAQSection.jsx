import React, { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import ContourBackground from '@/components/visual/ContourBackground';

export default function FAQSection({ reduceMotion }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
  {
    question: 'Can I start at any phase?',
    answer: 'Yes — our engagement is modular. Start with a Validate Sprint if you need research and prototyping, jump straight to Build if you have validated specs, or engage us for Launch/Growth if you have a product ready. One integrated team handles all phases.'
  },
  {
    question: 'Do you work with healthcare startups?',
    answer: 'Absolutely. We design HIPAA-aware flows, consent and privacy by design, secure data handling, and compliant intake processes. Our team has experience building health-tech products with proper security and compliance considerations.'
  },
  {
    question: 'Can you build AI agents?',
    answer: 'Yes — we build agentic workflows with proper safety rails, memory management, and guardrails. From conversational AI to autonomous task agents, we scaffold reliable AI systems that handle edge cases gracefully.'
  },
  {
    question: 'How do you measure success?',
    answer: 'We track four key metrics: Time-to-MVP (shipping speed), Activation rate (user engagement), CAC/LTV ratio (unit economics), and Speed of learning (experiment velocity). We instrument analytics from day one so you can measure what matters.'
  },
  {
    question: 'What if I just need help with one area?',
    answer: 'That\'s fine! While we offer end-to-end services, you can engage us for specific phases. Need a brand refresh? Launch Presence. Need growth experiments? Growth Sprint. We flex to your needs.'
  },
  {
    question: 'How do you handle communication?',
    answer: 'Weekly demos (you see progress every week), daily async updates via Slack/Loom, and a shared backlog where you always know what\'s in progress. No black boxes, no surprises.'
  }];


  return (
    <section ref={ref} id="faq" className="py-16 md:py-24 bg-[#2F2F2F] relative overflow-hidden">
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="text-center mb-16">

          <span className="bg-white/10 text-white px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-2 border border-white/20 mb-6">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Common <span className="text-[#DBFE01]">questions</span>
          </h2>
          <p className="text-lg text-white/80 font-medium">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              delay: reduceMotion ? 0 : 0.2 + index * 0.1
            }}>

              <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className={`w-full bg-white/5 backdrop-blur-md border rounded-2xl p-6 text-left transition-all duration-300 ${
              openIndex === index ?
              'border-[#DBFE01]/30 shadow-lg' :
              'border-white/10 hover:border-white/20'}`
              }>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                  openIndex === index ? 'bg-[#DBFE01]' : 'bg-white/5'}`
                  }>
                      <HelpCircle className={`w-5 h-5 ${
                    openIndex === index ? 'text-[#1a1a1a]' : 'text-white/50'}`
                    } />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-white/40 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''}`
                } />
                </div>
                
                <AnimatePresence>
                  {openIndex === index &&
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.3 }}
                  className="overflow-hidden">

                      <p className="text-white/80 mt-4 pl-14 leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </motion.div>
                }
                </AnimatePresence>
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}