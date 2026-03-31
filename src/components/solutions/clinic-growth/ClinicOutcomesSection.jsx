import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/solutions/SeoLandingPage';

const outcomeCards = [
  {
    icon: '📈',
    title: 'More',
    subtitle: 'Booked Appointments',
    description: 'Better website-to-booking conversion',
    bgColor: 'from-emerald-50 to-emerald-100/40',
    borderColor: 'border-emerald-200/50',
    shadowColor: 'shadow-emerald-200/30',
    hoverBgColor: 'group-hover:from-emerald-100 group-hover:to-emerald-150/50'
  },
  {
    icon: '⚡',
    title: 'Smoother',
    subtitle: 'Patient Intake',
    description: 'Less drop-off before scheduling',
    bgColor: 'from-blue-50 to-blue-100/40',
    borderColor: 'border-blue-200/50',
    shadowColor: 'shadow-blue-200/30',
    hoverBgColor: 'group-hover:from-blue-100 group-hover:to-blue-150/50'
  },
  {
    icon: '🗺️',
    title: 'Stronger',
    subtitle: 'Local Visibility',
    description: 'More qualified traffic from Google',
    bgColor: 'from-purple-50 to-purple-100/40',
    borderColor: 'border-purple-200/50',
    shadowColor: 'shadow-purple-200/30',
    hoverBgColor: 'group-hover:from-purple-100 group-hover:to-purple-150/50'
  },
  {
    icon: '📊',
    title: 'Clearer',
    subtitle: 'Growth Attribution',
    description: 'Know what is driving bookings',
    bgColor: 'from-amber-50 to-amber-100/40',
    borderColor: 'border-amber-200/50',
    shadowColor: 'shadow-amber-200/30',
    hoverBgColor: 'group-hover:from-amber-100 group-hover:to-amber-150/50'
  }
];

export default function ClinicOutcomesSection({ visual }) {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-center text-[#1a1a1a]">
            Outcomes clinic teams actually care about
          </h2>
          {visual && <div className="mb-12">{visual}</div>}
          
          {/* 4-column outcomes cards */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {outcomeCards.map((card, i) => (
              <motion.div
                key={i}
                group
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: 'easeOut' }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className={`relative overflow-hidden bg-gradient-to-br ${card.bgColor} border ${card.borderColor} p-8 rounded-2xl text-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${card.hoverBgColor}`}
              >
                {/* Animated background accent */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 blur-2xl"
                  style={{ background: 'currentColor' }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Content wrapper */}
                <div className="relative z-10">
                  {/* Icon with animation */}
                  <motion.div
                    className="text-5xl mb-4 inline-block"
                    whileHover={{ scale: 1.2, rotate: 12 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    {card.icon}
                  </motion.div>

                  {/* Title */}
                  <motion.div
                    className="text-2xl font-bold text-[#1a1a1a] mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.12 + 0.2 }}
                  >
                    {card.title}
                  </motion.div>

                  {/* Subtitle */}
                  <motion.div
                    className="text-lg font-semibold text-[#1a1a1a]/90 mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.12 + 0.3 }}
                  >
                    {card.subtitle}
                  </motion.div>

                  {/* Description with gradient underline */}
                  <motion.div
                    className="font-medium text-gray-700 text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.12 + 0.4 }}
                  >
                    {card.description}
                  </motion.div>

                  {/* Bottom accent line */}
                  <motion.div
                    className="h-1 bg-gradient-to-r from-[#DBFE01]/0 via-[#DBFE01] to-[#DBFE01]/0 mt-4 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.5, duration: 0.6 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}