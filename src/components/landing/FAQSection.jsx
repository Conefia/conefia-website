import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection({ reduceMotion }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What if my situation doesn't exactly match your playbook?",
      answer: "We've adapted our framework across 50+ companies. Each founder's situation is different, but the core process is the same: Validate → Build → Launch → Scale. We customize timeline, scope, and focus areas to your specific situation. For persona-specific answers, see your landing page (link in the outcomes cards above)."
    },
    {
      question: "How much hands-on involvement do I need?",
      answer: "We need you 2–4 hours per week: weekly demo review, decision sign-offs, and GTM feedback. You're partnered with us, not delegated. We don't disappear into a cave for 12 weeks. You see progress every week."
    },
    {
      question: "How much does this cost?",
      answer: "Packages start at $35K–$60K depending on scope and complexity. Milestone-based pricing means you pay as we hit outcomes, not upfront. For persona-specific pricing details, see your landing page."
    },
    {
      question: "What if you don't hit the outcome metrics?",
      answer: "We do. Our average ship rate is 85%+. Our average traction metrics hit targets 70%+ of the time. But if we're not a good fit, we'll tell you early (week 2–3). We're confident in our playbook, and we back it with accountability."
    },
    {
      question: "What if we're not the right fit?",
      answer: "We'll know by week 2 of the Validate phase. If it's not a fit, we'll tell you directly and give you the roadmap we've built anyway. You won't be locked into a bad engagement."
    },
    {
      question: "What if we want to keep building after the engagement ends?",
      answer: "Many clients do. We offer continuation packages (embedded team, fractional CTO support, ongoing growth marketing) so you maintain momentum. Details available on your persona landing page."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-6">
            Questions Before You <span className="gradient-text">Book a Call</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-[#1a1a1a]">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-[#DBFE01] text-[#1a1a1a]' : 'bg-gray-100 text-gray-500'}`}>
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-gray-500">
          <p>For persona-specific questions (HIPAA compliance for clinics, ASO for apps, etc.), see your landing page for 4 additional targeted questions tailored to your situation.</p>
        </div>
      </div>
    </section>
  );
}