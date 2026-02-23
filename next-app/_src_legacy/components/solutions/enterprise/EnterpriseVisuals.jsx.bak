import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Lock, FileText, CheckCircle2, 
  AlertCircle, Users, Activity, Server, 
  GitMerge, Database, Eye, FileCheck,
  Building2, Network, Clock
} from 'lucide-react';

// Hero Visual: Stage-Gate Timeline + Audit Trail
export const HeroVisual = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center select-none perspective-[1200px] overflow-visible">
       {/* Background Ambience */}
       <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 mx-4 md:mx-0 shadow-2xl">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col gap-8">
        
        {/* Stage-Gate Delivery Timeline */}
        <div className="flex flex-col md:flex-row items-center justify-between relative px-8">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-blue-500/20 via-blue-500/50 to-green-500/50 hidden md:block -z-10" />

            {[
                { label: "Alignment", icon: Users, status: "complete", color: "bg-blue-500" },
                { label: "Build", icon: Server, status: "complete", color: "bg-indigo-500" },
                { label: "Security Review", icon: ShieldCheck, status: "active", color: "bg-amber-500" },
                { label: "Pilot", icon: RocketIcon, status: "pending", color: "bg-green-500" }
            ].map((step, i) => (
                <motion.div 
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.15 }}
                    className="flex flex-col items-center bg-[#0B1020]/80 p-4 rounded-xl border border-white/10 backdrop-blur-sm min-w-[140px]"
                >
                    <div className={`w-10 h-10 rounded-full ${step.status === 'pending' ? 'bg-white/5' : step.color} flex items-center justify-center mb-3 shadow-lg relative`}>
                        <step.icon className={`w-5 h-5 ${step.status === 'pending' ? 'text-white/30' : 'text-white'}`} />
                        {step.status === 'active' && (
                            <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping" />
                        )}
                    </div>
                    <div className={`text-sm font-bold ${step.status === 'pending' ? 'text-white/30' : 'text-white'}`}>{step.label}</div>
                    <div className="text-[10px] text-white/50 uppercase mt-1 font-mono tracking-wider">
                        {step.status === 'complete' ? 'Approved' : step.status === 'active' ? 'In Progress' : 'Pending'}
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Audit Trail Mock */}
        <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-[#0f172a] rounded-xl border border-white/10 overflow-hidden max-w-2xl mx-auto w-full shadow-2xl"
        >
            <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-white/40" />
                    <span className="text-xs font-mono text-white/60">audit_log_v2.json</span>
                </div>
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
            </div>
            <div className="p-4 space-y-3 font-mono text-xs">
                <div className="flex gap-3 text-white/40 border-l-2 border-white/5 pl-3">
                    <span>10:42 AM</span>
                    <span className="text-blue-400">@sys_admin</span>
                    <span>Architecture review initiated</span>
                </div>
                <div className="flex gap-3 text-white/40 border-l-2 border-green-500 pl-3 bg-green-500/5 py-1">
                    <span>11:15 AM</span>
                    <span className="text-green-400">@compliance_bot</span>
                    <span>HIPAA Check: PASSED (Encryption at rest verified)</span>
                </div>
                 <div className="flex gap-3 text-white/40 border-l-2 border-amber-500 pl-3 bg-amber-500/5 py-1">
                    <span>11:30 AM</span>
                    <span className="text-amber-400">@sec_ops</span>
                    <span>Pending Sign-off: Data Retention Policy</span>
                </div>
            </div>
        </motion.div>

      </div>
    </div>
  );
};

// Outcomes: Tiles + Stage Gates Mini Strip
export const OutcomesVisual = () => (
    <div className="space-y-10">
        {/* Tiles */}
        <div className="grid md:grid-cols-4 gap-4">
            {[
                { label: "Time to Pilot", val: "6-10w", desc: "POC to Pilot-Ready", icon: Clock, color: "text-blue-600", bg: "bg-blue-50" },
                { label: "Alignment", val: "↓50%", desc: "Time lost in meetings", icon: Users, color: "text-indigo-600", bg: "bg-indigo-50" },
                { label: "Compliance", val: "100%", desc: "Handled early", icon: ShieldCheck, color: "text-green-600", bg: "bg-green-50" },
                { label: "Adoption", val: "Data", desc: "Proven with metrics", icon: Activity, color: "text-purple-600", bg: "bg-purple-50" },
            ].map((item, i) => (
                <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all text-center"
                >
                    <div className={`w-10 h-10 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-3`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div className={`text-2xl font-bold ${item.color} mb-1`}>{item.val}</div>
                    <div className="text-sm font-semibold text-gray-900 mb-1">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.desc}</div>
                </motion.div>
            ))}
        </div>

        {/* Stage Gates Strip */}
        <div className="bg-[#0B1020] rounded-2xl p-6 border border-white/10">
             <div className="text-sm text-white/40 uppercase font-bold mb-4 tracking-widest flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Governance Gates
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Security', 'Privacy', 'Architecture', 'Rollout'].map((gate, i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-3 border border-white/5 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                        <span className="text-white font-bold text-sm">{gate}</span>
                    </div>
                ))}
             </div>
        </div>
    </div>
);

// Problem: Stakeholder Map
export const ProblemVisual = () => (
    <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg relative min-h-[400px] flex items-center justify-center">
        
        {/* Stakeholder Nodes */}
        <div className="relative w-full max-w-lg aspect-video">
            {/* Center Node: Innovation Team */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full border-4 border-white shadow-lg flex items-center justify-center mx-auto relative">
                     <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 rounded-full font-bold animate-bounce">!</div>
                     <Users className="w-8 h-8 text-blue-600" />
                </div>
                <div className="mt-2 font-bold text-sm text-gray-900 bg-white/80 px-2 rounded backdrop-blur-sm">Innovation<br/>Team</div>
            </div>

            {/* Satellites */}
            {[
                { label: "IT Security", pos: "top-0 left-1/2 -translate-x-1/2", icon: Lock, status: "blocked" },
                { label: "Compliance", pos: "bottom-0 left-0", icon: FileCheck, status: "delayed" },
                { label: "Procurement", pos: "bottom-0 right-0", icon: Building2, status: "slow" },
            ].map((node, i) => (
                <div key={i} className={`absolute ${node.pos} z-10 text-center`}>
                    <div className="w-12 h-12 bg-gray-50 rounded-full border-2 border-gray-200 flex items-center justify-center mx-auto">
                        <node.icon className="w-5 h-5 text-gray-500" />
                    </div>
                    <div className="mt-1 font-medium text-xs text-gray-500 bg-white/80 px-1 rounded">{node.label}</div>
                    
                    {/* Connection Line (SVG would be better but CSS approximation for speed) */}
                    <div className={`absolute top-1/2 left-1/2 w-[100px] h-0.5 -z-10 origin-left 
                        ${node.status === 'blocked' ? 'bg-red-400 border-t-2 border-dotted' : 'bg-amber-400'}
                        ${i === 0 ? 'rotate-90 translate-y-6' : 
                          i === 1 ? '-rotate-[35deg] translate-x-6 -translate-y-12' : 
                          'rotate-[215deg] -translate-x-24 -translate-y-16' // Rough positioning
                        }
                    `} />
                    
                    {/* Status Badge */}
                     <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] px-1.5 py-0.5 rounded text-white font-bold
                        ${node.status === 'blocked' ? 'bg-red-500' : 'bg-amber-500'}
                     `}>
                        {node.status}
                     </div>
                </div>
            ))}
        </div>
    </div>
);

// Solution: Secure Pipeline Visual
export const SolutionVisual = () => (
    <div className="bg-gradient-to-br from-[#0B1020] to-[#1a1f35] rounded-3xl p-8 border border-white/10 shadow-2xl relative overflow-hidden">
         {/* Grid Background */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

         <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            {/* Shield Graphic */}
            <div className="relative flex-shrink-0">
                <div className="w-32 h-40 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-[2rem] flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.3)] border border-white/20">
                    <ShieldCheck className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full border border-[#0B1020]">
                    HIPAA Ready
                </div>
            </div>

            <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold text-white mb-2">Regulated Delivery Engine</h3>
                
                {[
                    { label: "Audit-Ready Logs", icon: FileCheck },
                    { label: "SOC 2 Patterns", icon: Lock },
                    { label: "Stakeholder Alignment", icon: Network }
                ].map((feat, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 bg-white/5 border border-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors"
                    >
                        <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                            <feat.icon className="w-4 h-4" />
                        </div>
                        <span className="text-white/80 font-medium text-sm">{feat.label}</span>
                        <CheckCircle2 className="w-4 h-4 text-green-500 ml-auto" />
                    </motion.div>
                ))}
            </div>
         </div>
    </div>
);

const RocketIcon = (props) => (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
);