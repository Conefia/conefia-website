import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, TrendingUp, Users, Zap, Shield, ArrowRight, Database, Cpu, Link2, CheckCircle } from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import HeroDarkBackground from '@/components/visual/HeroDarkBackground';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay }
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay }
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay }
});

export default function About() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <HeroDarkBackground />
      <Seo
        title="About Us | Conefia - Build, Launch, Scale"
        description="Learn about Conefia's vision, mission, and unique approach to helping founders, clinics, and brands build and scale digital ventures."
        canonical="/about"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": "https://conefia.com/about/#about",
          "url": "https://conefia.com/about",
          "name": "About CONEFIA",
          "about": { "@id": "https://conefia.com/#organization" },
          "isPartOf": { "@id": "https://conefia.com/#website" }
        })}}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-36 pb-20 relative z-10">
        <Breadcrumbs items={[{ label: 'About Us' }]} theme="dark" />

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block bg-[#DBFE01]/10 border border-[#DBFE01]/30 text-[#DBFE01] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Overview
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            About <span className="bg-gradient-to-r from-[#DBFE01] to-[#c5e000] bg-clip-text text-transparent">Conefia</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Conefia is the build + growth partner for tech founders and teams that want to launch faster and scale with confidence—without the handoff chaos.
          </p>
        </motion.div>

        {/* The Name Section */}
        <motion.div {...fadeUp(0)} className="mb-20">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80"
              alt="Connected team working"
              className="w-full h-64 md:h-80 object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1020] via-[#0B1020]/80 to-transparent flex items-center">
              <div className="p-8 md:p-14 max-w-2xl">
                <span className="text-[#DBFE01] text-xs font-bold uppercase tracking-widest mb-3 block">The Name</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Connected. Intelligent. Deliberate.
                </h2>
                <p className="text-white/70 leading-relaxed text-lg mb-3">
                  <span className="text-white font-semibold">Conefia</span> stands for <span className="text-[#DBFE01] font-semibold">Con</span>nected data and processes for <span className="text-[#DBFE01] font-semibold">e</span>nterprising, <span className="text-[#DBFE01] font-semibold">f</span>ounders, and <span className="text-[#DBFE01] font-semibold">i</span>ntelligent <span className="text-[#DBFE01] font-semibold">a</span>ction.
                </p>
                <p className="text-white/60 leading-relaxed">
                  When data, tools, and execution are connected, AI becomes practical—and businesses become faster, sharper, and more competitive.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Inspiration Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div {...fadeLeft(0)}>
            <span className="text-[#DBFE01] text-xs font-bold uppercase tracking-widest mb-3 block">The Inspiration</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
              10+ years. One painful observation.
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              After 10+ years helping startups and teams build products, we noticed something painful: a lot of brilliant ideas don't fail because the idea is bad. <span className="text-white font-medium">They fail because execution is weak, fragmented, or disconnected.</span>
            </p>
            <p className="text-white/60 leading-relaxed mb-4">
              Strategy lives in one place. Development in another. Growth is "later." And in between? Context gets lost, decisions get delayed, and momentum fades.
            </p>
            <p className="text-[#DBFE01] font-semibold text-lg">So we built Conefia to fix that.</p>
          </motion.div>
          <motion.div {...fadeRight(0.1)}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaborating"
                className="rounded-2xl w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/60 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#DBFE01] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1a1a1a] font-bold text-sm">10+</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Years of experience</p>
                    <p className="text-white/60 text-xs">Helping founders build & scale</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What We Solve */}
        <motion.div {...fadeUp(0)} className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[#DBFE01] text-xs font-bold uppercase tracking-widest mb-3 block">What We Solve</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The execution gaps that kill good ideas
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { text: 'Great ideas stuck in endless planning or slow delivery' },
              { text: 'MVPs that launch without traction or clear learning' },
              { text: 'AI features that sound exciting but don\'t ship into real workflows' },
              { text: 'Too many vendors, too little ownership, unclear outcomes' },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#DBFE01]/30 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-[#DBFE01]/10 border border-[#DBFE01]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-[#DBFE01]" />
                </div>
                <p className="text-white/80 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Approach */}
        <motion.div {...fadeUp(0)} className="mb-20">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 md:p-12">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#DBFE01]/5 rounded-full blur-3xl pointer-events-none" />
            <span className="text-[#DBFE01] text-xs font-bold uppercase tracking-widest mb-3 block">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Build → Launch → Scale
            </h2>
            <p className="text-white/60 max-w-xl mb-10">
              We solve disconnected execution with a simple model — one team, one backlog, one outcome.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Cpu, label: 'Build', desc: 'Scoped MVPs, AI architecture, and weekly delivery sprints that keep momentum.' },
                { icon: Zap, label: 'Launch', desc: 'Positioning, landing pages, onboarding, and analytics so pilots have somewhere to land.' },
                { icon: TrendingUp, label: 'Scale', desc: 'Growth systems, retention loops, and data-backed decisions to compound results.' },
              ].map((step, i) => (
                <motion.div key={i} {...fadeUp(i * 0.15)} className="relative">
                  {i < 2 && (
                    <div className="hidden md:block absolute top-7 right-0 w-8 h-px bg-gradient-to-r from-[#DBFE01]/50 to-transparent translate-x-full z-10" />
                  )}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#DBFE01]/30 transition-all h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#DBFE01] to-[#c5e000] flex items-center justify-center mb-4">
                      <step.icon className="w-6 h-6 text-[#1a1a1a]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.label}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div {...fadeLeft(0)} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#DBFE01]/30 transition-all group">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#DBFE01] to-[#c5e000] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7 text-[#1a1a1a]" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-white/70 leading-relaxed">
              To empower founders, clinics, and brands to transform their ideas into thriving digital ventures. We eliminate the complexity of product development and growth, delivering end-to-end solutions that drive real business results.
            </p>
          </motion.div>
          <motion.div {...fadeRight(0)} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#DBFE01]/30 transition-all group">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#DBFE01] to-[#c5e000] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Lightbulb className="w-7 h-7 text-[#1a1a1a]" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-white/70 leading-relaxed">
              To become the most trusted partner for digital innovation — where every entrepreneur and business can turn their vision into reality without the traditional barriers of time, cost, and technical complexity.
            </p>
          </motion.div>
        </div>

        {/* Why Conefia */}
        <motion.div {...fadeUp(0)} className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[#DBFE01] text-xs font-bold uppercase tracking-widest mb-3 block">Why Conefia</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              "Build" and "growth" <span className="bg-gradient-to-r from-[#DBFE01] to-[#c5e000] bg-clip-text text-transparent">shouldn't be separate lanes.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We connect them — so execution stays aligned, fast, and outcome-driven.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: 'Speed to Market', desc: 'Launch in weeks, not months. Our proven playbook and sprint system accelerate your time to market without compromising quality.' },
              { icon: TrendingUp, title: 'Growth-First Approach', desc: 'We don\'t just build apps. We build growth systems with built-in acquisition, retention, and monetization strategies from day one.' },
              { icon: Shield, title: 'Risk-Free Partnership', desc: 'Validated approach with proven case studies across industries. No guesswork — just results-driven methodology backed by data.' },
              { icon: Users, title: 'One Dedicated Team', desc: 'No handoffs, no miscommunication. One experienced team handles your entire journey from validation to scale.' },
              { icon: Link2, title: 'Connected Execution', desc: 'Strategy, product, and growth move together. We keep context intact across every sprint and milestone.' },
              { icon: Database, title: 'AI-Powered Innovation', desc: 'From intelligent workflows to agent-based automation — we integrate AI where it truly adds measurable value to your business.' },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#DBFE01]/30 transition-all">
                <item.icon className="w-10 h-10 text-[#DBFE01] mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Photo strip */}
        <motion.div {...fadeUp(0)} className="mb-20 grid grid-cols-3 gap-3 rounded-2xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80" alt="Team strategy" className="w-full h-48 object-cover rounded-xl" />
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80" alt="Product building" className="w-full h-48 object-cover rounded-xl" />
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" alt="Growth analytics" className="w-full h-48 object-cover rounded-xl" />
        </motion.div>

        {/* Stats */}
        <motion.div {...fadeUp(0)} className="bg-gradient-to-br from-[#DBFE01] to-[#c5e000] rounded-2xl p-12 text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '3x', label: 'Faster Launch' },
              { value: '95%', label: 'Client Satisfaction' },
              { value: '10+', label: 'Years Experience' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-2">{stat.value}</div>
                <div className="text-[#1a1a1a]/70 font-semibold text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp(0)} className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to build without the chaos?</h3>
          <p className="text-white/60 mb-8">Book a quick call and let's map your path from idea to pilot.</p>
          <Link to={createPageUrl('book')} className="inline-flex items-center gap-2 bg-[#DBFE01] text-[#1a1a1a] font-semibold px-8 py-4 rounded-xl hover:bg-[#c5e000] transition-all hover:shadow-[0_8px_30px_rgba(219,254,1,0.4)] hover:-translate-y-0.5">
            Book a Roadmap Call <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}