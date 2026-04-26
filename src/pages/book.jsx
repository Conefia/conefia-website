import React, { useEffect, useState } from 'react';
import { CheckCircle2, Clock, Video, Shield, Zap, Users, Star, Check } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import HeroDarkBackground from '@/components/visual/HeroDarkBackground';
import BrandCarousel from '@/components/landing/BrandCarousel';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';

const WHAT_YOU_GET = [
  "A clear MVP scope — what to build first and what to skip",
  "Recommended AI or tech approach for your specific use case",
  "An 8–12 week delivery roadmap with milestones",
  "Early risk flags — data, compliance, cost, reliability",
];

const TRUST_CHIPS = [
  { icon: Clock, label: "30 Minutes" },
  { icon: Video, label: "Video Call" },
  { icon: Shield, label: "No Sales Pitch" },
  { icon: CheckCircle2, label: "No Commitment" },
];

const SOCIAL_PROOF = [
  { name: "Founder, HealthTech", quote: "Left the call with a full roadmap. Best 30 mins I invested." },
  { name: "CEO, AI SaaS", quote: "Yassen was direct, knowledgeable, and gave real insight — not generic advice." },
];

export default function Book() {
  const reduceMotion = useReducedMotion();
  const isMobile = useState(() => window.innerWidth < 768)[0];
  const animate = !reduceMotion;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <div className="min-h-screen">
      <Seo
        title="Book a Free Roadmap Call | Conefia"
        description="Book a free 30-minute roadmap call with Conefia. Get a clear MVP scope, AI approach, and delivery plan — no commitment required."
        canonical="/book"
      />

      {/* ══════════════════════════════════════════
          HERO — reuses the global dark hero design
      ══════════════════════════════════════════ */}
      <header className="relative min-h-screen flex items-center overflow-hidden">
        <HeroDarkBackground isMobile={isMobile} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-16 relative z-10 w-full">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumbs items={[{ label: 'Book a Roadmap Call' }]} theme="dark" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: Copy */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: animate ? 0.35 : 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#DBFE01]/10 border border-[#DBFE01]/30 mb-5 backdrop-blur-sm"
              >
                <Zap className="w-4 h-4 text-[#DBFE01]" />
                <span className="text-sm font-semibold text-[#DBFE01]">Free · No Commitment</span>
              </motion.div>

              {/* H1 — same gradient as global h1 */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: animate ? 0.4 : 0, delay: animate ? 0.08 : 0 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight will-change-transform"
              >
                Book Your Free<br />Roadmap Call
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: animate ? 0.4 : 0, delay: animate ? 0.16 : 0 }}
                className="text-base md:text-lg text-white/85 leading-relaxed mb-7 font-medium max-w-lg"
              >
                In 30 minutes you'll leave with a clear MVP scope, the right AI approach, and a realistic 8–12 week delivery plan — whether you hire us or not.
              </motion.p>

              {/* Trust chips */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: animate ? 0.4 : 0, delay: animate ? 0.22 : 0 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {TRUST_CHIPS.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 hover:bg-white/15 transition-colors">
                    <Icon className="w-4 h-4 text-[#DBFE01] flex-shrink-0" />
                    <span className="text-white/90 text-sm font-semibold">{label}</span>
                  </div>
                ))}
              </motion.div>

              {/* What you get */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: animate ? 0.4 : 0, delay: animate ? 0.28 : 0 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm mb-6"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#DBFE01]/80 mb-4">What you'll walk away with</p>
                <ul className="space-y-3">
                  {WHAT_YOU_GET.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#DBFE01] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_0_8px_rgba(219,254,1,0.4)]">
                        <Check className="w-3 h-3 text-[#1a1a1a]" strokeWidth={3} />
                      </div>
                      <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: animate ? 0.5 : 0, delay: animate ? 0.38 : 0 }}
                className="space-y-3"
              >
                {SOCIAL_PROOF.map((p, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10">
                    <div className="flex gap-0.5 flex-shrink-0 mt-0.5">
                      {[...Array(5)].map((_, s) => <Star key={s} className="w-3 h-3 fill-[#DBFE01] text-[#DBFE01]" />)}
                    </div>
                    <div>
                      <p className="text-white/80 text-xs leading-relaxed italic">"{p.quote}"</p>
                      <p className="text-white/40 text-xs font-semibold mt-1">— {p.name}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Stock image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: animate ? 0.55 : 0, delay: animate ? 0.15 : 0 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)] h-[560px]">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
                  alt="Strategy roadmap call with client"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1020]/70 via-[#0B1020]/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/60 via-transparent to-transparent" />

                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: animate ? 0.6 : 0 }}
                  className="absolute top-6 right-6 bg-[#DBFE01] text-[#1a1a1a] text-xs font-extrabold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg"
                >
                  Free · 30 min
                </motion.div>

                {/* Bottom card */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: animate ? 0.7 : 0, duration: animate ? 0.5 : 0 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#DBFE01] flex items-center justify-center flex-shrink-0 shadow-[0_0_16px_rgba(219,254,1,0.5)]">
                      <Users className="w-5 h-5 text-[#1a1a1a]" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">No-pressure, all signal</p>
                      <p className="text-white/75 text-xs mt-0.5">Leave with a clear plan — whether you hire us or not.</p>
                    </div>
                  </div>
                </motion.div>

                <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />
              </div>
              <div className="absolute -inset-4 bg-[#DBFE01]/6 rounded-3xl blur-[50px] -z-10" />
            </motion.div>
          </div>
        </div>
      </header>

      <BrandCarousel />

      {/* ══════════════════════════════════════════
          BODY — light section, Calendly embed
      ══════════════════════════════════════════ */}
      <main className="bg-gradient-to-b from-[#FAFAFA] to-white relative">
        {/* Subtle top glow transition */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DBFE01]/40 to-transparent" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-[#DBFE01]/8 blur-[60px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-10 justify-center">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest whitespace-nowrap">Pick a time that works for you</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Calendly embed */}
          <div
            className="rounded-3xl overflow-hidden border border-gray-200 shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
            style={{ boxShadow: '0 0 0 1px rgba(219,254,1,0.15), 0 8px 40px rgba(0,0,0,0.08)' }}
          >
            <div
              className="calendly-inline-widget bg-black"
              data-url="https://calendly.com/yassen-eltayeb-conefia?background_color=000000&text_color=ffffff&primary_color=dbfe01"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>

          {/* Footer note */}
          <p className="text-center text-gray-400 text-sm mt-8">
            Can't find a suitable time?{' '}
            <a href="mailto:info@conefia.com" className="text-gray-700 font-bold hover:text-[#1a1a1a] transition-colors underline decoration-gray-300 hover:decoration-[#DBFE01]">
              Email us
            </a>{' '}
            directly.
          </p>
        </div>
      </main>
    </div>
  );
}