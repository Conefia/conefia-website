import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const goodFits = [
  'You know who the user is and what "success" means',
  "You can access sample data/docs (or we can define a data plan)",
  "You want pilots running in the next 60–90 days",
];

const notFits = [
  "You're looking for pure R&D with no product deadline",
  'You want "just a chatbot" without a workflow or buyer',
  "You can't access users, feedback, or data",
];

export default function FitCheck() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#DBFE01]/10 border border-[#DBFE01]/30 mb-4 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#5a7a00]" />
            <span className="text-sm font-semibold text-[#5a7a00]">Quick Fit Check</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-4">
            Is this the right fit?
          </h2>
          <p className="text-[#1a1a1a]/60 text-base max-w-xl mx-auto leading-relaxed">
            If you have a real workflow to improve and access to users (or data), we can get you to pilots fast.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Good fit */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#f9ffe0] border border-[#c5e000] rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-[#DBFE01] flex items-center justify-center flex-shrink-0 shadow-sm">
                <Check className="w-5 h-5 text-[#1a1a1a]" strokeWidth={3} />
              </div>
              <h3 className="text-lg font-bold text-[#4a6800]">Good fit if</h3>
            </div>
            <ul className="space-y-4">
              {goodFits.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#6a9200] mt-0.5 flex-shrink-0" />
                  <span className="text-[#1a1a1a]/80 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not a fit */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-rose-50 border border-rose-200 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-rose-100 flex items-center justify-center flex-shrink-0 border border-rose-300">
                <X className="w-5 h-5 text-rose-500" strokeWidth={3} />
              </div>
              <h3 className="text-lg font-bold text-rose-600">Not a fit if</h3>
            </div>
            <ul className="space-y-4">
              {notFits.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                  <span className="text-[#1a1a1a]/70 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Mini CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <Link
            to={createPageUrl('Book')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#DBFE01] text-[#1a1a1a] font-bold rounded-xl text-base hover:scale-105 hover:shadow-[0_6px_30px_rgba(219,254,1,0.35)] transition-all shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_4px_12px_rgba(219,254,1,0.2)]"
          >
            Get MVP Plan
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}