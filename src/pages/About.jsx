import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Link2, Rocket, Smartphone, TrendingUp, Users } from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import HeroDarkBackground from '@/components/visual/HeroDarkBackground';

export default function About() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <HeroDarkBackground />
      <Seo
        title="About Us | Conefia - Build, Launch, Scale"
        description="Conefia is the build + growth partner for tech founders and teams that want to launch faster and scale with confidence—without the handoff chaos."
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

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            About <span className="bg-gradient-to-r from-[#DBFE01] to-[#c5e000] bg-clip-text text-transparent">Conefia</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            The build + growth partner for tech founders and teams that want to launch faster and scale with confidence—without the handoff chaos.
          </p>
        </motion.div>

        {/* The Name + Inspiration */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#DBFE01]/30 transition-all"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DBFE01]/10 border border-[#DBFE01]/20 mb-5">
              <span className="text-[#DBFE01] text-xs font-bold uppercase tracking-widest">The Name</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">What does Conefia mean?</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              <span className="text-[#DBFE01] font-semibold">Conefia</span> stands for <span className="italic text-white/90">Connected data and processes for intelligent founders.</span>
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              It comes from a simple belief: when data, tools, and execution are connected, AI becomes practical—and businesses become faster, sharper, and more competitive.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#DBFE01]/30 transition-all"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DBFE01]/10 border border-[#DBFE01]/20 mb-5">
              <span className="text-[#DBFE01] text-xs font-bold uppercase tracking-widest">The Inspiration</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Why we built this</h2>
            <p className="text-white/70 leading-relaxed mb-3 text-sm">
              After 10+ years helping startups and teams build products, we noticed something painful: brilliant ideas don't fail because the idea is bad—they fail because execution is weak, fragmented, or disconnected.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Strategy lives in one place. Development in another. Growth is "later." Context gets lost, decisions get delayed, and momentum fades. So we built Conefia to fix that.
            </p>
          </motion.div>
        </div>

        {/* What We Solve */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 mb-4">
              <span className="text-rose-400 text-xs font-bold uppercase tracking-widest">What We Solve</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              The problems we're built for
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Great ideas stuck in endless planning or slow delivery",
              "MVPs that launch without traction or clear learning",
              "AI features that sound exciting but don't ship into real workflows",
              "Too many vendors, too little ownership, unclear outcomes"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5"
              >
                <div className="w-2 h-2 rounded-full bg-rose-400 flex-shrink-0 mt-2" />
                <span className="text-white/75 leading-relaxed text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What We Do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DBFE01]/10 border border-[#DBFE01]/20 mb-4">
              <span className="text-[#DBFE01] text-xs font-bold uppercase tracking-widest">What We Do</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our approach: <span className="bg-gradient-to-r from-[#DBFE01] to-[#c5e000] bg-clip-text text-transparent">Build → Launch → Scale</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Rocket, title: "AI MVP & Product Launch", desc: "Product strategy, UX, rapid build, and practical AI features that are measurable and user-safe." },
              { icon: Smartphone, title: "Mobile & Web App Development", desc: "End-to-end delivery: discovery → build → QA → launch, with clear ownership and steady reporting." },
              { icon: TrendingUp, title: "Growth & Retention Systems", desc: "Instrumentation, conversion improvements, retention loops, and growth support tied to product reality." },
              { icon: Users, title: "Accelerator & Cohort Execution Support", desc: "Build squads, run milestones, and keep teams shipping with sponsor-ready updates." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#DBFE01]/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#DBFE01] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-[#1a1a1a]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Conefia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#DBFE01] to-[#c5e000] rounded-2xl p-12 text-center"
        >
          <div className="w-14 h-14 rounded-xl bg-[#1a1a1a]/10 flex items-center justify-center mx-auto mb-6">
            <Link2 className="w-7 h-7 text-[#1a1a1a]" />
          </div>
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Why Conefia?</h2>
          <p className="text-[#1a1a1a]/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Because "build" and "growth" shouldn't be separate lanes. We connect them—so execution stays aligned, fast, and outcome-driven.
          </p>
        </motion.div>
      </div>
    </div>
  );
}