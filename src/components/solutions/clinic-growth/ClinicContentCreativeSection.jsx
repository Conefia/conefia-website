import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const deliverables = [
  { label: "Ad creatives", sub: "Meta & Google", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&q=80" },
  { label: "Short-form video", sub: "Ads & social reels", img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&q=80" },
  { label: "Post designs", sub: "Services & offers", img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80" },
  { label: "SEO blog articles", sub: "Patient intent-driven", img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&q=80" },
  { label: "Landing page copy", sub: "Campaign-matched", img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&q=80" },
  { label: "Trust content", sub: "Across touchpoints", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80" },
];

export default function ClinicContentCreativeSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100/80 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="bg-[#1a1a1a]/8 border border-[#1a1a1a]/10 text-[#1a1a1a] px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-full inline-flex items-center gap-2 mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            Content + Creative
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-[#1a1a1a]">
            Content that builds trust.<br />
            <span className="gradient-text">Creative that drives action.</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#1a1a1a]/60 text-base max-w-2xl mx-auto leading-relaxed"
          >
            A lot of clinic marketing breaks because the strategy and the content live in different places. Ads need creative. SEO needs content. Social needs posts. The website needs better copy. Nobody owns the full story.
          </motion.p>
        </motion.div>

        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {deliverables.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="relative rounded-2xl overflow-hidden shadow-md group cursor-default"
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-44 md:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-[#1a1a1a]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-bold text-sm leading-tight">{item.label}</p>
                <p className="text-white/60 text-xs mt-0.5">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#f9f9f9] border border-gray-200 rounded-2xl px-8 py-6"
        >
          <p className="text-[#1a1a1a]/70 text-sm leading-relaxed max-w-lg">
            <span className="font-bold text-[#1a1a1a]">Your clinic should feel strong everywhere a patient checks you out</span> — not just on one channel.
          </p>
          <Link
            to={createPageUrl('book')}
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-[#1a1a1a] text-white font-bold rounded-xl text-sm hover:bg-black hover:scale-105 transition-all shadow-lg whitespace-nowrap"
          >
            Get Clinic Growth Plan
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}