import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Trophy } from 'lucide-react';

export default function OutcomesSection() {
  const outcomes = [
    {
      title: "Clinic Owners",
      link: "ClinicGrowth",
      metrics: [
        "Portal adoption: 12% → 58%",
        "New patients: +100–500 per month",
        "Local SEO: Ranked #1–3",
        "Time to value: 8–12 weeks"
      ]
    },
    {
      title: "AI SaaS Founders",
      link: "AiFounderSprint",
      metrics: [
        "Customers: 0 → 100–500",
        "Monthly revenue: $0 → $5–25K MRR",
        "Product-market fit: Signal visible",
        "Time to launch: 12 weeks"
      ]
    },
    {
      title: "App Founders",
      link: "AppRelaunch",
      metrics: [
        "D30 retention: 15–20% → 40%+",
        "App ranking: Buried → Top 50",
        "CAC efficiency: 50% reduction",
        "Time to launch: 8 weeks"
      ]
    },
    {
      title: "DTC Brands",
      link: "DtcGrowth",
      metrics: [
        "Store conversion: 25–35% → 40%+",
        "CAC efficiency: 2–3x better",
        "Repeat purchase rate: <15% → 30%+",
        "Time to profit: 6–12 weeks"
      ]
    },
    {
      title: "Accelerator Directors",
      link: "AcceleratorSupport",
      metrics: [
        "Ship rate: 40–50% → 85%+",
        "Investor-ready MVPs: 100%",
        "Follow-on funding: 30% → 50%+",
        "Founder satisfaction: +25 NPS"
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#0B1020] relative overflow-hidden" id="outcomes">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#DBFE01]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-[#DBFE01] font-bold tracking-wider uppercase text-sm mb-4 block">Proven Results</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Happens In <br /><span className="text-[#DBFE01]">8–16 Weeks</span>
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Real metrics from real founders. We don't just ship code; we deliver outcomes.
            </p>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-6 h-6 text-[#DBFE01]" />
                <h3 className="text-lg font-bold text-white">Case Story: Chaos to Clarity</h3>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                A founder launched with 5 separate vendors—no unified roadmap, no accountability, growth stalled. 
                <br /><br />
                In 12 weeks with Conefia:
                <ul className="list-disc list-inside mt-2 space-y-1 ml-2 text-white/70">
                  <li>Clear execution strategy (weeks 1–2)</li>
                  <li>Product built + launched (weeks 3–10)</li>
                  <li>First customers + metrics live (weeks 9–10)</li>
                  <li>Growth team embedded (week 11+)</li>
                </ul>
              </p>
              <div className="flex items-center text-[#DBFE01] font-bold">
                Result: Massive clarity, real traction, investor momentum.
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {outcomes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                      {item.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center text-sm text-white/70">
                          <span className="text-[#DBFE01] mr-2">✓</span>
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link 
                    to={createPageUrl(item.link)}
                    className="flex-shrink-0 flex items-center text-[#DBFE01] font-bold text-sm hover:underline"
                  >
                    View Case Study <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}