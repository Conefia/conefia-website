import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroDarkBackground from '@/components/visual/HeroDarkBackground';
import Breadcrumbs from '@/components/Breadcrumbs';
import { createPageUrl } from '@/utils';

// Scroll-reveal wrapper for content sections
function Reveal({ children, delay = 0 }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function PolicyLayout({ title, effectiveDate, breadcrumb, children }) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Wrap each child in a Reveal with staggered delay
  const childArray = React.Children.toArray(children);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero header — matches home page hero design */}
      <div className="relative overflow-hidden pt-28 pb-20">
        <HeroDarkBackground isMobile={isMobile} />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb — same as solution pages */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Breadcrumbs
              items={[
                { label: 'Legal', path: '/legal' },
                { label: breadcrumb || title },
              ]}
              theme="dark"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center mb-5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#DBFE01]/10 text-[#DBFE01] border border-[#DBFE01]/20 gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#DBFE01] inline-block" />
            Legal Document
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="text-white/50 text-sm"
          >
            CONEFIA LLC, d/b/a Conefia Technologies &nbsp;·&nbsp; Effective Date: {effectiveDate}
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        {childArray.map((child, i) => (
          <Reveal key={i} delay={i === 0 ? 0 : 0}>
            {child}
          </Reveal>
        ))}

        {/* Contact card */}
        <Reveal>
          <div className="mt-6 p-6 rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-stone-950 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[#DBFE01]" />
              </span>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Contact</p>
            </div>
            <p className="font-semibold text-gray-900">Conefia LLC, d/b/a Conefia Technologies</p>
            <p className="text-sm text-gray-500 mt-1">6272 Saginaw Road #1136, Grand Blanc, MI 48439, United States</p>
            <a
              href="mailto:info@conefia.com"
              className="inline-block mt-2 text-sm font-semibold text-stone-900 underline underline-offset-2 decoration-[#DBFE01] hover:text-[#8aaa00] transition-colors"
            >
              info@conefia.com
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export function Section({ number, title, children }) {
  return (
    <section className="group">
      <div className="flex items-start gap-3 mb-4">
        {number && (
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-stone-950 text-[#DBFE01] flex items-center justify-center text-xs font-bold mt-0.5 shadow-[0_0_0_3px_rgba(219,254,1,0.12)]">
            {number}
          </span>
        )}
        <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-snug pt-0.5">{title}</h2>
      </div>
      <div className={`text-gray-600 text-sm leading-relaxed space-y-2 ${number ? 'pl-10' : ''}`}>
        {children}
      </div>
    </section>
  );
}

export function BulletList({ items }) {
  return (
    <ul className="space-y-2 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#DBFE01] flex-shrink-0 shadow-[0_0_4px_rgba(219,254,1,0.5)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}