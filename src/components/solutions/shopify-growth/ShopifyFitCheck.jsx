import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const goodFits = [
  "Your store is live, but growth feels inefficient",
  "You want stronger conversion, retention, and campaign performance",
  "You are early, but ready to build the store and growth engine properly",
  "You want one team across store, creative, SEO, retention, and ads",
];

const notFits = [
  "You only want a visual redesign",
  "You want to scale ads without fixing the customer journey",
  "You are still too early to commit to a real launch or sprint",
];

export default function ShopifyFitCheck() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
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
          <span className="bg-[#1a1a1a]/5 text-[#1a1a1a]/60 px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-2 border border-[#1a1a1a]/10 mb-6">
            <Sparkles className="w-4 h-4 stroke-black fill-[#DBFE01]" />
            Quick Fit Check
          </span>
          <h2 className="text-2xl font-bold mb-4 text-[#1a1a1a]">
            Is this the right fit?
          </h2>
          <p className="text-[#1a1a1a]/80 mx-auto text-lg font-medium leading-relaxed max-w-2xl">
            This is for brands that want to grow faster — or launch smarter from day one.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-12"
        >
          <img
            src="https://media.base44.com/images/public/695311d1426e4dadf87a8d53/2dffb7fc9_conefia-shopify-growth-solution.jpg"
            alt="Shopify Growth Solution"
            className="w-full rounded-3xl shadow-lg object-cover" />
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Good fit */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#f9ffe0] border border-[#c5e000] rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-[#DBFE01] flex items-center justify-center flex-shrink-0 shadow-sm">
                <Check className="w-5 h-5 text-[#1a1a1a]" strokeWidth={3} />
              </div>
              <h3 className="text-slate-950 text-lg font-bold">Good fit if</h3>
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
                  <span className="text-[#1a1a1a]/80 text-sm leading-relaxed">{item}</span>
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
            to={createPageUrl('book')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#DBFE01] text-[#1a1a1a] font-bold rounded-xl text-base hover:scale-105 hover:shadow-[0_6px_30px_rgba(219,254,1,0.35)] transition-all shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_4px_12px_rgba(219,254,1,0.2)]"
          >
            Get Growth Plan
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}