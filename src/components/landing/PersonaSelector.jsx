import React from 'react';
import { motion } from 'framer-motion';
import { createPageUrl } from '@/utils';
import { Link } from 'react-router-dom';
import { Stethoscope, Bot, Smartphone, ShoppingBag, Rocket, ArrowRight } from 'lucide-react';

export default function PersonaSelector() {
  const personas = [
    {
      id: 'clinic',
      icon: Stethoscope,
      title: 'Clinic Owners',
      subtitle: 'Vendor Fragmentation, Low Adoption, Patient Growth Stall',
      copy: "You're managing 5+ separate teams: EHR, portal, website, SEO, ads. Portal adoption is stuck at 12%. Website doesn't convert. When growth stalls, everyone blames everyone else. The cost: Weeks wasted coordinating. Thousands spent on vendors you don't trust.",
      results: [
        'Portal adoption: 12% → 58%',
        'New patients: +100–500/mo',
        'Time to launch: 8–12 weeks'
      ],
      cta: 'Get My Clinic Roadmap',
      link: 'ClinicGrowth',
      color: 'bg-blue-500'
    },
    {
      id: 'ai',
      icon: Bot,
      title: 'AI SaaS Founders',
      subtitle: 'Prototype Ready, No Path to Customers',
      copy: "You've got a prototype and 6 months of runway. But you're bouncing between a prompt engineer, dev contractor, designer, and part-time marketer. Nothing is connected. Every decision requires 4 calls. No GTM strategy.",
      results: [
        'Customers: 0 → 100–500',
        'Monthly revenue: $0 → $5–25K MRR',
        'Time to launch: 12 weeks'
      ],
      cta: 'Get My AI Roadmap',
      link: 'AiFounderSprint',
      color: 'bg-purple-500'
    },
    {
      id: 'app',
      icon: Smartphone,
      title: 'App Founders',
      subtitle: 'Poor Retention, Buried in Rankings, Investor Pressure',
      copy: "Your app has traction (5K–50K users) but D30 retention is stuck at 15–20%. App ranking is buried. CAC is rising. Investors are asking hard questions. You know V2 will fix it, but V1 is a legacy codebase and nobody owns the rebuild.",
      results: [
        'Retention: 15–20% → 40%+',
        'App ranking: #10K → top 50',
        'CAC efficiency: 50% reduction'
      ],
      cta: 'Get My App Roadmap',
      link: 'AppRelaunch',
      color: 'bg-green-500'
    },
    {
      id: 'dtc',
      icon: ShoppingBag,
      title: 'DTC Founders',
      subtitle: 'Rising CAC, Low Conversion, Broken Retention',
      copy: "Your store converts at 25–35%. CAC is rising $80 to $120. Repeat customers are rare. You're optimizing ad performance but ignoring the fundamentals: store experience, email flows, and product positioning. Something is broken.",
      results: [
        'Store conversion: 25–35% → 40%+',
        'CAC efficiency: 2–3x better',
        'Repeat rate: <15% → 30%+'
      ],
      cta: 'Get My DTC Roadmap',
      link: 'DtcGrowth',
      color: 'bg-pink-500'
    },
    {
      id: 'accelerator',
      icon: Rocket,
      title: 'Accelerator Directors',
      subtitle: '40% Cohort Doesn\'t Ship, Demo Day Unpreparedness',
      copy: "You're running a 12–16 week accelerator cohort. 40–50% won't ship an MVP by demo day. Non-technical founders get stuck on technical decisions. Mentors give conflicting advice. Demo day arrives with fragile, unpresentable code.",
      results: [
        'Ship rate: 40–50% → 85%+',
        'Investor-ready MVPs: Variable → 100%',
        'Follow-on funding: 30% → 50%+'
      ],
      cta: 'Get My Cohort Roadmap',
      link: 'AcceleratorSupport',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="problem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">
            What's Blocking Your <span className="gradient-text">Growth?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Most founders and leaders share one root problem: too many vendors, no unified team.
          </p>
          <p className="text-lg text-gray-600">
            When you have separate specialists for product, marketing, operations, and analytics—things move slow. 
            Decisions take longer. Growth stalls. You become the project manager instead of the founder.
            <br className="hidden md:block" />
            <span className="font-semibold mt-2 block text-[#1a1a1a]">But the specific solution depends on your situation. Pick yours below.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((persona, index) => (
            <Link 
              key={persona.id} 
              to={createPageUrl(persona.link)}
              className="group"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 ${persona.color}`} />
                
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-[#DBFE01]/20 transition-colors">
                  <persona.icon className="w-6 h-6 text-[#1a1a1a]" />
                </div>

                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{persona.title}</h3>
                <p className="text-xs font-bold text-[#DBFE01] bg-[#1a1a1a] inline-block px-2 py-1 rounded mb-4 uppercase tracking-wider">
                  {persona.subtitle.split(',')[0]}
                </p>
                <p className="text-sm text-gray-500 font-medium mb-6 italic border-l-2 border-gray-100 pl-3">
                  {persona.subtitle}
                </p>

                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {persona.copy}
                </p>

                <div className="space-y-2 mb-8 bg-gray-50 p-4 rounded-xl">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Typical Results</p>
                  {persona.results.map((result, i) => (
                    <div key={i} className="flex items-center text-sm font-medium text-[#1a1a1a]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#DBFE01] mr-2" />
                      {result}
                    </div>
                  ))}
                </div>

                <div className="flex items-center font-bold text-sm text-[#1a1a1a] group-hover:text-blue-600 transition-colors">
                  {persona.cta}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}