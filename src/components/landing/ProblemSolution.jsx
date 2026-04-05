import { motion } from 'framer-motion';

export default function ProblemSolution({ reduceMotion }) {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            Build Faster, Launch Smarter
          </h2>
          <p className="text-lg text-[#1a1a1a]/70 max-w-2xl mx-auto">
            We handle the technical complexity so you can focus on your users and growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#DBFE01]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-[#DBFE01]">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a1a] mb-2">Production-Ready Code</h3>
                <p className="text-[#1a1a1a]/70">Modern stack, CI/CD pipelines, and scalable architecture from day one.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#DBFE01]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-[#DBFE01]">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a1a] mb-2">Weekly Demos</h3>
                <p className="text-[#1a1a1a]/70">See tangible progress every week with working features you can test.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#DBFE01]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-[#DBFE01]">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a1a] mb-2">Pilot-Ready in 8–12 Weeks</h3>
                <p className="text-[#1a1a1a]/70">Scope-locked timelines with no surprises. Ready to gather real user feedback.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-2xl h-[400px] bg-gradient-to-br from-[#DBFE01]/10 to-[#DBFE01]/5 flex items-center justify-center border border-[#DBFE01]/20">
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <p className="text-[#1a1a1a]/60 font-medium">Ship faster with expert guidance</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}