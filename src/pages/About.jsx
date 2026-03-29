import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Lightbulb, TrendingUp, Users, Zap, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import HeroDarkBackground from '@/components/visual/HeroDarkBackground';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: 'easeOut' }
});

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '3×', label: 'Faster Time to Market' },
  { value: '95%', label: 'Client Satisfaction' },
  { value: '8–12wk', label: 'Avg MVP Ship Time' },
];

const pillars = [
  { icon: Zap, title: 'Speed to Market', body: 'Launch in weeks, not months. Our proven playbook and pre-built systems compress your time to value without cutting corners.' },
  { icon: TrendingUp, title: 'Growth-First Approach', body: "We don't just build apps. We build growth systems with acquisition, retention, and monetization baked in from day one." }, We build growth systems with acquisition, retention, and monetization baked in from day one.' },
  { icon: Shield, title: 'Risk-Free Partnership', body: 'Validated approach, weekly demos, and clear stage gates mean no surprises — just results backed by data.' },
  { icon: Users, title: 'One Dedicated Team', body: 'No handoffs, no miscommunication. One experienced team owns your entire journey from validation to scale.' },
];

const checks = [
  'Scope locked in week 1 — no drift',
  'Weekly demos, not monthly updates',
  'AI architecture done right (RAG, evals, monitoring)',
  'Launch system included — not sold separately',
  'Pilots, not just prototypes',
];

export default function About() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  return (
    <div className="min-h-screen bg-[#0B1020] overflow-hidden">
      <HeroDarkBackground />
      <Seo
        title="About Us | Conefia - Build, Launch, Scale"
        description="Learn about Conefia's vision, mission, and unique approach to helping founders, clinics, and brands build and scale digital ventures."
        canonical="/about"
      />

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Parallax background image */}
        <motion.div
          style={{ y: imgY }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1020]/60 via-[#0B1020]/40 to-[#0B1020]" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 text-center">
          <Breadcrumbs items={[{ label: 'About Us' }]} theme="dark" />
          <motion.div {...fadeUp(0.1)}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#DBFE01]/30 bg-[#DBFE01]/10 text-[#DBFE01] text-xs font-semibold uppercase tracking-widest mb-6">
              Who We Are
            </span>
          </motion.div>
          <motion.h1
            {...fadeUp(0.2)}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
          >
            One Partner to{' '}
            <span className="bg-gradient-to-r from-[#DBFE01] to-[#a8c600] bg-clip-text text-transparent">
              Build, Launch &amp; Scale
            </span>
          </motion.h1>
          <motion.p
            {...fadeUp(0.35)}
            className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            We help founders, clinics, and brands transform ideas into pilot-ready digital ventures — faster and with less risk.
          </motion.p>
          <motion.div {...fadeUp(0.5)} className="mt-10">
            <Link
              to={createPageUrl('book')}
              className="inline-flex items-center gap-2 bg-[#DBFE01] text-[#1a1a1a] font-bold px-8 py-4 rounded-xl hover:bg-[#c5e000] transition-colors shadow-[0_4px_24px_rgba(219,254,1,0.3)]"
            >
              Book a Free Roadmap Call <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="relative py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Image stack */}
            <motion.div {...fadeUp(0)} className="relative h-[420px] hidden md:block">
              <motion.img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                alt="Strategy session"
                className="absolute top-0 left-0 w-[72%] h-[68%] object-cover rounded-2xl shadow-2xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              />
              <motion.img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
                alt="Tech innovation"
                className="absolute bottom-0 right-0 w-[58%] h-[56%] object-cover rounded-2xl shadow-2xl border-4 border-[#0B1020]"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
              />
              {/* floating badge */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#DBFE01] text-[#1a1a1a] font-extrabold text-sm px-5 py-3 rounded-full shadow-xl whitespace-nowrap z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                8–12 Week MVP Sprint
              </motion.div>
            </motion.div>

            {/* Text */}
            <div className="space-y-8">
              <motion.div {...fadeUp(0.1)}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#DBFE01] to-[#c5e000] flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[#1a1a1a]" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
                <p className="text-white/60 leading-relaxed">
                  To empower founders, clinics, and brands to transform their ideas into thriving digital ventures — eliminating the complexity of product development and growth with one accountable partner.
                </p>
              </motion.div>

              <motion.div {...fadeUp(0.2)}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#DBFE01] to-[#c5e000] flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-[#1a1a1a]" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Our Vision</h2>
                <p className="text-white/60 leading-relaxed">
                  To become the most trusted partner for digital innovation — where every entrepreneur can turn their vision into reality without the traditional barriers of time, cost, and technical complexity.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Banner ── */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80"
            alt="Work"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#DBFE01]/20 to-[#a8c600]/10" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-extrabold text-[#DBFE01] mb-2">{s.value}</div>
                <div className="text-white/60 text-sm font-semibold">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Conefia ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-[#DBFE01] to-[#a8c600] bg-clip-text text-transparent">Conefia</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">We're not just a dev agency — we're your growth partner.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="group flex gap-5 bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-[#DBFE01]/40 hover:bg-white/8 transition-all"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#DBFE01]/10 border border-[#DBFE01]/20 flex items-center justify-center group-hover:bg-[#DBFE01]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#DBFE01]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{p.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What We Stand For ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <motion.div {...fadeUp(0)}>
                <span className="text-[#DBFE01] text-xs font-semibold uppercase tracking-widest mb-4 block">Our Commitments</span>
                <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">
                  Built for founders who are done waiting
                </h2>
                <p className="text-white/60 mb-8 leading-relaxed">
                  We've worked with AI founders, healthcare operators, DTC brands, and corporate innovation leads. The pattern is always the same: clarity, speed, and one accountable owner make the difference.
                </p>
              </motion.div>
              <ul className="space-y-4">
                {checks.map((c, i) => (
                  <motion.li
                    key={c}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#DBFE01] flex-shrink-0 mt-0.5" />
                    <span className="text-white/75 text-sm">{c}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Overlapping images */}
            <motion.div
              {...fadeUp(0.2)}
              className="relative h-[480px] hidden md:block"
            >
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
                alt="Team at work"
                className="absolute top-0 right-0 w-[80%] h-[65%] object-cover rounded-2xl shadow-2xl"
              />
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80"
                alt="Planning"
                className="absolute bottom-0 left-0 w-[65%] h-[50%] object-cover rounded-2xl shadow-2xl border-4 border-[#0B1020]"
              />
              <motion.div
                className="absolute bottom-6 right-6 bg-[#0B1020]/90 border border-[#DBFE01]/30 backdrop-blur-md rounded-xl px-5 py-3 z-10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-[#DBFE01] font-extrabold text-xl">95%</div>
                <div className="text-white/60 text-xs">Client Satisfaction</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80"
            alt="Team meeting"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-[#0B1020]/70 to-[#0B1020]" />
        </div>
        <motion.div
          {...fadeUp(0)}
          className="relative z-10 max-w-2xl mx-auto px-4 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to ship your{' '}
            <span className="bg-gradient-to-r from-[#DBFE01] to-[#a8c600] bg-clip-text text-transparent">
              AI MVP?
            </span>
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Book a free 30-minute roadmap call. No sales pitch — just clarity on scope, timeline, and fit.
          </p>
          <Link
            to={createPageUrl('book')}
            className="inline-flex items-center gap-2 bg-[#DBFE01] text-[#1a1a1a] font-bold px-10 py-5 rounded-xl text-lg hover:bg-[#c5e000] transition-colors shadow-[0_4px_32px_rgba(219,254,1,0.35)]"
          >
            Book a Free Roadmap Call <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}