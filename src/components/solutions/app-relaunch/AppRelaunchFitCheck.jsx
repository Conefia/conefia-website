import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const goodFits = [
  "Your app is live, but too few users come back after install",
  "You are getting users, but growth is not compounding",
  "You have reviews, analytics, or user feedback to learn from",
  "You want meaningful improvement in the next 60–90 days",
  "You need one team to handle product, UX, engineering, and growth together",
];

const notFits = [
  "You are still at idea stage with no product live yet",
  "You only want cosmetic design work without fixing product friction",
  "You want to pour more money into acquisition before fixing retention",
  "You are looking for strategy slides, not delivery",
];

export default function AppRelaunchFitCheck() {
  return (
    <section className="py-20 bg-[#F7F8FA] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a1a1a]/5 border border-[#1a1a1a]/10 text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/50 mb-4">
            Quick Fit Check
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-4">Is this the right fit?</h2>
          <p className="text-base text-[#1a1a1a]/60 max-w-2xl mx-auto leading-relaxed">
            This is for teams with a live app that already has users, installs, reviews, or product history — but retention, growth, ratings, or store performance are not where they should be.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Good fit */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-emerald-100 p-7 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center">
                <Check className="w-4 h-4 text-emerald-600" strokeWidth={2.5} />
              </div>
              <h3 className="font-bold text-[#1a1a1a] text-base">Good fit if:</h3>
            </div>
            <ul className="space-y-3">
              {goodFits.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emerald-500" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm text-[#1a1a1a]/75 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not a fit */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-white rounded-2xl border border-rose-100 p-7 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-full bg-rose-100 flex items-center justify-center">
                <X className="w-4 h-4 text-rose-500" strokeWidth={2.5} />
              </div>
              <h3 className="font-bold text-[#1a1a1a] text-base">Not a fit if:</h3>
            </div>
            <ul className="space-y-3">
              {notFits.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-rose-400" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm text-[#1a1a1a]/75 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Mini CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-10 flex justify-center"
        >
          <Link
            to={createPageUrl('book')}
            className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_4px_12px_rgba(219,254,1,0.25)] hover:scale-105 transition-all"
          >
            Get Relaunch Plan
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}