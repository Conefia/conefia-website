import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const sections = [
  { title: "Store Audit", icon: "🔍", status: "Complete" },
  { title: "Growth Roadmap", icon: "📈", status: "Mapped" },
  { title: "Sprint Plan", icon: "📅", status: "8–12 Weeks" }
];

export default function ShopifyGrowthPlanVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03, boxShadow: '0 30px 60px -15px rgba(0,0,0,0.15)' }}
      className="bg-gradient-to-br from-white to-gray-50 w-72 mx-auto rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] p-7 relative border border-gray-100 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(219,254,1,0.07),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4 relative z-10"
      >
        <motion.div
          animate={{ rotate: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-11 h-11 bg-gradient-to-br from-[#1a1a1a] to-gray-800 rounded-lg flex items-center justify-center shadow-lg"
        >
          <ShoppingBag className="w-6 h-6 text-[#DBFE01]" />
        </motion.div>
        <div className="text-left">
          <div className="text-sm font-bold text-gray-900">Growth Roadmap</div>
          <div className="text-[10px] text-gray-500 font-medium">Your Shopify Launch Plan</div>
        </div>
      </motion.div>

      {/* Sections */}
      <div className="space-y-3 mb-6 relative z-10">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.1 }}
            className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-white transition-colors"
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-lg">{section.icon}</span>
                <span className="text-xs font-bold text-gray-900">{section.title}</span>
              </div>
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                className="text-[10px] font-bold text-[#1a1a1a] bg-[#DBFE01] px-2 py-0.5 rounded"
              >
                {section.status}
              </motion.span>
            </div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + i * 0.1, duration: 0.6, ease: 'easeOut' }}
              className="h-1 bg-gradient-to-r from-[#DBFE01] to-[#c5e000] rounded-full"
            />
          </motion.div>
        ))}
      </div>

      {/* Deliverables */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-lg p-3 mb-4 border border-gray-200 relative z-10"
      >
        <div className="text-[10px] font-bold text-gray-800 uppercase tracking-wide mb-2">Deliverables</div>
        <div className="space-y-1.5">
          {["Weekly demos", "CRO + retention fixes", "Profit-first tracking"].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.08 }}
              className="flex items-center gap-2 text-[10px] text-gray-800"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                className="w-1.5 h-1.5 rounded-full bg-[#DBFE01]"
              />
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Badge */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 10 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, type: 'spring', stiffness: 300 }}
        animate={{ y: [0, -4, 0] }}
        className="flex justify-center mt-6 relative z-20"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#1a1a1a] text-[#DBFE01] font-bold px-6 py-2.5 rounded-full shadow-[0_12px_24px_rgba(0,0,0,0.25)] text-xs border-2 border-[#DBFE01]/30 tracking-wide"
        >
          🛍️ Scale in 8–12 Weeks
        </motion.div>
      </motion.div>
    </motion.div>
  );
}