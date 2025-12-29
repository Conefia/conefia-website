import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection({ reduceMotion }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Can I start at any phase?',
      answer: 'Yes — our engagement is modular. Start with a Validate Sprint if you need research and prototyping, jump straight to Build if you have validated specs, or engage us for Launch/Growth if you have a product ready. One integrated team handles all phases.',
    },
    {
      question: 'Do you work with healthcare startups?',
      answer: 'Absolutely. We design HIPAA-aware flows, consent and privacy by design, secure data handling, and compliant intake processes. Our team has experience building health-tech products with proper security and compliance considerations.',
    },
    {
      question: 'Can you build AI agents?',
      answer: 'Yes — we build agentic workflows with proper safety rails, memory management, and guardrails. From conversational AI to autonomous task agents, we scaffold reliable AI systems that handle edge cases gracefully.',
    },
    {
      question: 'How do you measure success?',
      answer: 'We track four key metrics: Time-to-MVP (shipping speed), Activation rate (user engagement), CAC/LTV ratio (unit economics), and Speed of learning (experiment velocity). We instrument analytics from day one so you can measure what matters.',
    },
    {
      question: 'What if I just need help with one area?',
      answer: 'That\'s fine! While we offer end-to-end services, you can engage us for specific phases. Need a brand refresh? Launch Presence. Need growth experiments? Growth Sprint. We flex to your needs.',
    },
    {
      question: 'How do you handle communication?',
      answer: 'Weekly demos (you see progress every week), daily async updates via Slack/Loom, and a shared backlog where you always know what\'s in progress. No black boxes, no surprises.',
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-white/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2F2F2F]/5 text-[#2F2F2F]/60 text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2F2F2F] mb-4">
            Common <span className="gradient-text">questions</span>
          </h2>
          <p className="text-lg text-[#2F2F2F]/60">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: reduceMotion ? 0 : 0.5, 
                delay: reduceMotion ? 0 : index * 0.08 
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className={`w-full glass-card rounded-2xl p-6 text-left transition-all duration-300 ${
                  openIndex === index 
                    ? 'border-[#DBFE01]/30 shadow-lg shadow-black/5' 
                    : 'hover:border-[#2F2F2F]/10'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      openIndex === index ? 'bg-[#DBFE01]' : 'bg-[#2F2F2F]/5'
                    }`}>
                      <HelpCircle className={`w-5 h-5 ${
                        openIndex === index ? 'text-[#2F2F2F]' : 'text-[#2F2F2F]/50'
                      }`} />
                    </div>
                    <h3 className="text-lg font-semibold text-[#2F2F2F]">{faq.question}</h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-[#2F2F2F]/40 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} />
                </div>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#2F2F2F]/60 mt-4 pl-14 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}