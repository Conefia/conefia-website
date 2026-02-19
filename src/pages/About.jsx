import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, TrendingUp, Users, Zap, Shield } from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import HeroDarkBackground from '@/components/visual/HeroDarkBackground';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1020] via-[#121829] to-[#0B1020] relative overflow-hidden">
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

      {/* Background Elements */}
      <div className="absolute inset-0">
        <ContourBackground className="opacity-60" isMobile={window.innerWidth < 768} />
      </div>

      {/* Star Dust */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(200)].map((_, i) => {
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const size = Math.random() * 2 + 0.3;
          const opacity = Math.random() * 0.6 + 0.2;
          return (
            <div
              key={`star-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity * 0.8,
                boxShadow: `0 0 ${size}px rgba(255, 255, 255, ${opacity * 0.3})`
              }}
            />
          );
        })}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-36 pb-20 relative z-10">
        <Breadcrumbs items={[{ label: 'About Us' }]} theme="dark" />

        {/* Hero Section */}
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
            One partner to build, launch, and scale your digital venture from idea to market leader.
          </p>
        </motion.div>

        {/* Mission & Vision Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#DBFE01]/30 transition-all group"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#DBFE01] to-[#c5e000] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7 text-[#1a1a1a]" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-white/70 leading-relaxed">
              To empower founders, clinics, and brands to transform their ideas into thriving digital ventures. We eliminate the complexity of product development and growth, delivering end-to-end solutions that drive real business results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#DBFE01]/30 transition-all group"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#DBFE01] to-[#c5e000] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Lightbulb className="w-7 h-7 text-[#1a1a1a]" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-white/70 leading-relaxed">
              To become the most trusted partner for digital innovation, where every entrepreneur and business can turn their vision into reality without the traditional barriers of time, cost, and technical complexity.
            </p>
          </motion.div>
        </div>

        {/* Unique Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose <span className="bg-gradient-to-r from-[#DBFE01] to-[#c5e000] bg-clip-text text-transparent">Conefia</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We're not just a development agency. We're your growth partner.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#DBFE01]/30 transition-all"
            >
              <Zap className="w-10 h-10 text-[#DBFE01] mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Speed to Market</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Launch in weeks, not months. Our proven playbook and pre-built systems accelerate your time to market without compromising quality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#DBFE01]/30 transition-all"
            >
              <TrendingUp className="w-10 h-10 text-[#DBFE01] mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Growth-First Approach</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                We don't just build apps. We build growth systems with built-in acquisition, retention, and monetization strategies from day one.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#DBFE01]/30 transition-all"
            >
              <Shield className="w-10 h-10 text-[#DBFE01] mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Risk-Free Partnership</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Validated approach with proven case studies across industries. No guesswork, just results-driven methodology backed by data.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#DBFE01]/30 transition-all"
            >
              <Users className="w-10 h-10 text-[#DBFE01] mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">One Dedicated Team</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                No handoffs, no miscommunication. One experienced team handles your entire journey from validation to scale.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#DBFE01]/30 transition-all md:col-span-2"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#DBFE01] to-[#c5e000] flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#1a1a1a]">AI</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">AI-Powered Innovation</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Leverage cutting-edge AI capabilities to build smarter products. From intelligent chatbots to predictive analytics, we integrate AI where it truly adds value to your business.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#DBFE01] to-[#c5e000] rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-2">50+</div>
              <div className="text-[#1a1a1a]/70 font-semibold text-sm">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-2">3x</div>
              <div className="text-[#1a1a1a]/70 font-semibold text-sm">Faster Launch</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-2">95%</div>
              <div className="text-[#1a1a1a]/70 font-semibold text-sm">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-2">24/7</div>
              <div className="text-[#1a1a1a]/70 font-semibold text-sm">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}