import React, { useEffect, useState } from 'react';
import { CheckCircle2, Clock, Video, ArrowRight, Star, Shield, Zap, Users } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import ContourBackground from '@/components/visual/ContourBackground';
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

// Pre-computed star positions
const STARS = Array.from({ length: 120 }, (_, i) => ({
  x: (i * 47.3 + 11) % 100,
  y: (i * 31.7 + 23) % 100,
  size: (i % 10) * 0.15 + 0.3,
  opacity: (i % 7) * 0.055 + 0.15,
}));

export default function Book() {
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const animate = !reduceMotion;

  return (
    <div className="min-h-screen bg-stone-950 relative overflow-hidden">
      <Seo
        title="Book a Free Roadmap Call | Conefia"
        description="Book a free 30-minute roadmap call with Conefia. Get a clear MVP scope, AI approach, and delivery plan — no commitment required."
        canonical="/book"
      />

      {/* Background layers */}
      <ContourBackground className="opacity-60" isMobile={isMobile} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 60% 0%, rgba(219,254,1,0.04) 0%, transparent 60%), radial-gradient(ellipse at center, transparent 30%, rgba(11,16,32,0.5) 100%)' }} />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {STARS.map((s, i) => (
          <div key={i} className="absolute rounded-full bg-white" style={{ left: `${s.x}%`, top: `${s.y}%`, width: `${s.size}px`, height: `${s.size}px`, opacity: s.opacity }} />
        ))}
      </div>

      {/* Accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#DBFE01]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-4 relative z-10">
        <Breadcrumbs items={[{ label: 'Book a Roadmap Call' }]} theme="dark" />
      </div>

      {/* ── HERO ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animate ? 0.4 : 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DBFE01]/10 border border-[#DBFE01]/30 mb-6"
            >
              <Zap className="w-4 h-4 text-[#DBFE01]" />
              <span className="text-sm font-bold text-[#DBFE01] tracking-wide">Free · No Commitment</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animate ? 0.45 : 0, delay: animate ? 0.08 : 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
              style={{
                background: 'linear-gradient(95deg, #FFFFFF 0%, #D9FF2F 30%, #B8FF00 55%, #a0f0ff 85%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Book Your Free Roadmap Call
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animate ? 0.4 : 0, delay: animate ? 0.16 : 0 }}
              className="text-lg text-white/80 leading-relaxed mb-8 font-medium max-w-xl"
            >
              In 30 minutes you'll leave with a clear MVP scope, the right AI approach, and a realistic 8–12 week delivery plan — whether you hire us or not.
            </motion.p>

            {/* Trust chips */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animate ? 0.4 : 0, delay: animate ? 0.24 : 0 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {TRUST_CHIPS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-white/8 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/15 shadow-sm">
                  <Icon className="w-4 h-4 text-[#DBFE01] flex-shrink-0" />
                  <span className="text-white/90 text-sm font-semibold">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* What you get */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animate ? 0.4 : 0, delay: animate ? 0.3 : 0 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm mb-8"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-[#DBFE01]/80 mb-4">What you'll walk away with</p>
              <ul className="space-y-3">
                {WHAT_YOU_GET.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#DBFE01] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_0_8px_rgba(219,254,1,0.4)]">
                      <CheckCircle2 className="w-3 h-3 text-[#1a1a1a]" strokeWidth={3} />
                    </div>
                    <span className="text-white/85 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social proof quotes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: animate ? 0.5 : 0, delay: animate ? 0.4 : 0 }}
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
            transition={{ duration: animate ? 0.6 : 0, delay: animate ? 0.15 : 0 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)] h-[560px]">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
                alt="Strategy roadmap call with client"
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-stone-950/70 via-stone-950/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />

              {/* Floating badge */}
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

              {/* Glow border */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />
              <div className="absolute -inset-px rounded-3xl border border-[#DBFE01]/10 pointer-events-none" />
            </div>

            {/* Decorative glow behind image */}
            <div className="absolute -inset-4 bg-[#DBFE01]/8 rounded-3xl blur-[40px] -z-10" />
          </motion.div>
        </div>
      </section>

      {/* ── CALENDLY ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: animate ? 0.5 : 0, delay: animate ? 0.35 : 0 }}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Pick a time that works for you</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="bg-black/60 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
            style={{ boxShadow: '0 0 0 1px rgba(219,254,1,0.08), 0 30px 80px rgba(0,0,0,0.4)' }}>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/yassen-eltayeb-conefia?background_color=000000&text_color=ffffff&primary_color=dbfe01"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER NOTE ── */}
      <div className="pb-20 relative z-10 text-center">
        <p className="text-white/40 text-sm">
          Can't find a suitable time?{' '}
          <a href="mailto:info@conefia.com" className="text-white/70 font-bold hover:text-[#DBFE01] transition-colors underline decoration-white/30 hover:decoration-[#DBFE01]">
            Email us
          </a>{' '}
          directly.
        </p>
      </div>
    </div>
  );
}