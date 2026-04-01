import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Paintbrush, Video, FileText, Search, Layout, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const deliverables = [
  { icon: Paintbrush, label: "Ad creatives for Meta and Google" },
  { icon: Video, label: "Short-form video edits for ads and social" },
  { icon: Layout, label: "Post designs for services, offers, and education" },
  { icon: Search, label: "SEO blog articles built around patient intent" },
  { icon: FileText, label: "Landing page copy that matches campaign goals" },
  { icon: Shield, label: "Trust-building content across key touchpoints" },
];

export default function ClinicContentCreativeSection() {
  return (
    <section className="py-24 bg-[#f9ffe0] relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Glow blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#DBFE01]/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DBFE01]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-[#1a1a1a] text-[#DBFE01] px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-full inline-flex items-center gap-2 mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Content + Creative
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6 text-[#1a1a1a]">
                Content that builds trust.<br />
                <span className="gradient-text">Creative that drives action.</span>
              </h2>

              <div className="space-y-4 text-[#1a1a1a]/70 text-base leading-relaxed font-medium mb-8">
                <p>
                  A lot of clinic marketing breaks because the strategy and the content live in different places. Ads need creative. SEO needs content. Social needs posts. The website needs better copy. Nobody owns the full story.
                </p>
                <p className="text-[#1a1a1a] font-bold text-lg">We do.</p>
              </div>

              {/* Why it matters callout */}
              <div className="bg-white border border-[#c5e000] rounded-2xl p-5 mb-8">
                <p className="text-sm font-bold text-[#1a1a1a]/60 uppercase tracking-wider mb-2">Why it matters</p>
                <p className="text-[#1a1a1a]/80 text-sm leading-relaxed">
                  Your clinic should feel strong everywhere a patient checks you out — not just on one channel.
                </p>
              </div>

              <Link
                to={createPageUrl('book')}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1a1a1a] text-white font-bold rounded-xl text-sm hover:bg-black hover:scale-105 transition-all shadow-lg"
              >
                Get Clinic Growth Plan
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Deliverables grid */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-[#1a1a1a]/50 uppercase tracking-widest mb-5"
            >
              What we create
            </motion.p>
            <div className="grid sm:grid-cols-2 gap-4">
              {deliverables.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    whileHover={{ y: -3, boxShadow: "0 8px 30px rgba(219,254,1,0.25)" }}
                    className="bg-white border border-[#c5e000]/60 rounded-2xl p-5 flex items-start gap-4 cursor-default transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#DBFE01] flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon className="w-4.5 h-4.5 text-[#1a1a1a]" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-semibold text-[#1a1a1a] leading-snug pt-1">{item.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}