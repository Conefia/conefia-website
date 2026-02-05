import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, CheckCircle, TrendingUp, Clock, Zap, ExternalLink, Target, Lightbulb, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';

function Section({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Menovia() {
  const scrollToContact = () => {
    window.location.href = createPageUrl('Home') + '#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FAFAFA]">
      <Seo 
        title="Menovia AI Case Study - Women's Health Tech" 
        description="Conefia built and launched Menovia AI's MVP in 3 months. AI agent, mobile app, and digital presence for a women's health startup."
        canonical="https://conefia.com/case-studies/menovia-ai-femtech-app"
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
        <motion.div 
          className="absolute top-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumbs items={[{ label: 'Case Studies', path: null }, { label: 'Menovia AI' }]} />

          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold mb-6">
            Idea → Build → Launch
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-[#1a1a1a] mb-6 leading-tight">
            MVP in 3 months (vs. 9) + digital presence foundation
          </h1>

          <div className="flex flex-wrap gap-8 mb-8">
            {[
              { icon: Clock, label: 'MVP in 3 months', color: 'text-purple-600' },
              { icon: Zap, label: '~66% faster', color: 'text-pink-600' },
              { icon: CheckCircle, label: 'Launch content ready', color: 'text-rose-600' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#DBFE01] flex items-center justify-center">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <span className="font-bold text-[#1a1a1a]">{stat.label}</span>
              </div>
            ))}
          </div>

          <a 
            href="https://menovia.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#1a1a1a]/60 hover:text-[#DBFE01] transition-colors"
          >
            menovia.ai
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Hero Image */}
      <Section>
        <div className="relative h-[400px] -mt-8 mb-16 overflow-hidden rounded-3xl mx-4 sm:mx-6 lg:mx-8">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&auto=format&fit=crop&q=80"
            alt="Women's health tech AI platform"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent" />
        </div>
      </Section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section>
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a]/40 uppercase tracking-wider mb-3">Client</h3>
                <p className="text-lg font-semibold text-[#1a1a1a]">Menovia AI</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a]/40 uppercase tracking-wider mb-3">Industry</h3>
                <p className="text-lg font-semibold text-[#1a1a1a]">Women's health / AI agent + mobile</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a]/40 uppercase tracking-wider mb-3">Timeline</h3>
                <p className="text-lg font-semibold text-[#1a1a1a]">3 months</p>
              </div>
            </div>
          </Section>

          <div className="space-y-16">
            {/* Situation */}
            <Section delay={0.1}>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                <div className="pl-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      The Situation
                    </h2>
                  </div>
                  <div className="glass-card rounded-3xl p-8 md:p-10 border-l-4 border-purple-500">
                    <p className="text-[#1a1a1a]/80 text-lg leading-relaxed mb-6">
                      Menovia AI had a compelling vision: build an AI-powered women's health agent that provides personalized support and insights. But they needed help sharpening their positioning, validating their niche, and shipping an MVP quickly—all while establishing a credible digital presence to support post-launch growth.
                    </p>
                    <p className="text-[#1a1a1a]/70 text-lg leading-relaxed">
                      The challenge: compress a 9-month timeline into 3 months without sacrificing quality. Validate the concept through research, build the AI agent and mobile app, launch the website, and set up social profiles with engaging content—all in parallel, not sequentially.
                    </p>
                  </div>
                </div>
              </div>
            </Section>

            {/* Action */}
            <Section delay={0.2}>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-rose-500 to-fuchsia-500 rounded-full" />
                <div className="pl-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-fuchsia-500 flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-fuchsia-600 bg-clip-text text-transparent">
                      Our Approach
                    </h2>
                  </div>
                  <div className="glass-card rounded-3xl p-8 md:p-10 border-l-4 border-rose-500">
                    <p className="text-[#1a1a1a]/80 text-lg leading-relaxed mb-8">
                      We executed across three phases simultaneously—validation, build, and launch—to accelerate time-to-market:
                    </p>
                    <div className="space-y-6">
                      {[
                        {
                          phase: 'Validate',
                          title: 'Market Research & Consumer Insights',
                          desc: 'Conducted market analysis and consumer interviews to refine positioning, identify the most compelling niche within women\'s health, and validate product-market fit assumptions before committing to full build.'
                        },
                        {
                          phase: 'Validate',
                          title: 'Rapid Prototyping',
                          desc: 'Built quick prototypes to test core concepts with target users, gathering feedback early to finalize MVP scope and prioritize features that matter most—avoiding feature bloat and scope creep.'
                        },
                        {
                          phase: 'Build',
                          title: 'AI Agent Development',
                          desc: 'Developed the women\'s health AI agent with conversational intelligence, personalization engine, and health tracking capabilities—ensuring the AI felt empathetic, accurate, and helpful.'
                        },
                        {
                          phase: 'Build',
                          title: 'Website & Mobile App',
                          desc: 'Built a responsive website showcasing the product and value proposition, plus an AI-integrated mobile app that delivers the core user experience seamlessly across platforms.'
                        },
                        {
                          phase: 'Launch',
                          title: 'Digital Presence Foundation',
                          desc: 'Created and optimized social profiles (Instagram, LinkedIn, TikTok), produced engaging launch content (educational posts, testimonials, product demos), and established brand voice for sustained growth readiness.'
                        }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                              {i + 1}
                            </div>
                            {i < 4 && <div className="w-0.5 h-8 bg-gradient-to-b from-rose-500 to-fuchsia-500 mt-2" />}
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-1">{item.phase}</div>
                            <h3 className="font-bold text-[#1a1a1a] mb-1">{item.title}</h3>
                            <p className="text-[#1a1a1a]/70 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Results */}
            <Section delay={0.3}>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#DBFE01] to-purple-500 rounded-full" />
                <div className="pl-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#DBFE01] to-purple-500 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-[#1a1a1a]" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-[#DBFE01] to-purple-600 bg-clip-text text-transparent">
                      The Results
                    </h2>
                  </div>
                  <div className="glass-card rounded-3xl p-8 md:p-10 bg-gradient-to-br from-[#DBFE01]/10 to-purple-500/10 border-l-4 border-[#DBFE01]">
                    <p className="text-[#1a1a1a]/80 text-lg leading-relaxed mb-8">
                      In 3 months—66% faster than the original 9-month plan—we delivered a validated, launch-ready product with growth infrastructure in place:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {[
                        { label: '3 Months', desc: 'MVP vs. 9-month plan', color: 'from-purple-500 to-pink-600' },
                        { label: '~66% Faster', desc: 'Time-to-market acceleration', color: 'from-rose-500 to-fuchsia-600' },
                      ].map((stat, i) => (
                        <div key={i} className="glass-card rounded-2xl p-6 text-center border border-[#1a1a1a]/10">
                          <div className={`text-3xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                            {stat.label}
                          </div>
                          <p className="text-[#1a1a1a]/60 text-sm font-medium">{stat.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4 mb-8">
                      {[
                        'Validated product-market fit through research and rapid prototyping',
                        'Shipped AI agent, website, and mobile app—all production-ready',
                        'Established digital presence: social profiles optimized and launch content produced',
                        'Growth-ready from day one: product, brand, and audience infrastructure in place'
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span className="text-[#1a1a1a]/80 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white/50 rounded-2xl p-6">
                      <p className="text-[#1a1a1a]/70 leading-relaxed italic">
                        "This is the power of parallel execution: validate, build, and launch simultaneously rather than sequentially. By compressing phases and working in parallel, we cut 6 months off the timeline while delivering higher quality—because we validated assumptions early and built with launch in mind from day one."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          </div>

          {/* CTA */}
          <Section delay={0.4}>
            <div className="mt-16 text-center glass-card rounded-3xl p-12 bg-gradient-to-br from-purple-500/5 to-pink-500/5">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Want similar results?</h3>
              <button 
                onClick={scrollToContact}
                className="btn-primary px-8 py-4 rounded-full text-base font-semibold inline-flex items-center gap-2"
              >
                Book roadmap call
                <TrendingUp className="w-5 h-5" />
              </button>
            </div>
          </Section>
        </div>
      </section>
    </div>
  );
}