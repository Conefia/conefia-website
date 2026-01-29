import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, TrendingUp, Users, DollarSign, 
  BarChart3, ArrowRight, MousePointerClick, Zap, 
  CreditCard, RefreshCw, Mail, MessageSquare, 
  Smartphone, Package, Target, ShoppingCart, Percent,
  AlertCircle, CheckCircle2, Calendar
} from 'lucide-react';

// Hero Visual: Profit Engine + Dashboard
export const HeroVisual = () => {
  return (
    <div className="relative w-full h-[450px] flex items-center justify-center select-none perspective-[1200px] overflow-visible">
       {/* Background Ambience */}
       <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 mx-4 md:mx-0 shadow-2xl">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center">
        
        {/* Floating Metrics Cards */}
        <div className="flex gap-4 mb-8">
            {[
                { label: "ROAS", val: "4.2x", icon: Target, color: "text-green-500", bg: "bg-green-500/10" },
                { label: "CAC", val: "$24", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
                { label: "CVR", val: "3.8%", icon: MousePointerClick, color: "text-purple-500", bg: "bg-purple-500/10" },
            ].map((m, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="bg-[#0B1020]/90 backdrop-blur border border-white/10 rounded-xl p-3 md:p-4 flex items-center gap-3 shadow-xl min-w-[120px]"
                >
                    <div className={`p-2 rounded-lg ${m.bg}`}>
                        <m.icon className={`w-4 h-4 ${m.color}`} />
                    </div>
                    <div>
                        <div className="text-[10px] text-gray-400 uppercase font-bold">{m.label}</div>
                        <div className="text-lg font-bold text-white">{m.val}</div>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Profit Engine Flow */}
        <div className="w-full relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 md:block hidden" />
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 relative">
                {[
                    { label: "Paid Ads", icon: MegaphoneIcon, color: "bg-blue-500" },
                    { label: "PDP", icon: ShoppingBag, color: "bg-indigo-500" },
                    { label: "Checkout", icon: CreditCard, color: "bg-purple-500" },
                    { label: "LTV", icon: RefreshCw, color: "bg-[#DBFE01]", text: "text-black" }
                ].map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.2, type: "spring" }}
                        className="relative z-10 flex flex-col items-center"
                    >
                        <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-lg shadow-${step.color}/20 mb-3 border-2 border-white/10 relative overflow-hidden group`}>
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            {i === 0 ? <Zap className="w-8 h-8 text-white" /> : 
                             i === 1 ? <ShoppingBag className="w-8 h-8 text-white" /> :
                             i === 2 ? <CreditCard className="w-8 h-8 text-white" /> :
                             <RefreshCw className="w-8 h-8 text-black" />}
                        </div>
                        <div className="text-white font-bold text-sm bg-[#0B1020]/80 px-3 py-1 rounded-full border border-white/10">
                            {step.label}
                        </div>
                        
                        {/* Flow Arrow */}
                        {i < 3 && (
                            <motion.div 
                                className="absolute -right-[50%] top-8 hidden md:block text-white/20"
                                animate={{ x: [0, 10, 0], opacity: [0.2, 0.6, 0.2] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <ArrowRight className="w-6 h-6" />
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

// Outcomes: Premium Tiles + Lift Strip
export const OutcomesVisual = () => (
    <div className="space-y-8">
        {/* Where We Lift Strip */}
        <div className="bg-[#1a1a1a] rounded-xl border border-white/10 p-4 overflow-x-auto">
            <div className="flex justify-between min-w-[600px] gap-4">
                {[
                    { area: "PDP", lift: "+12% Add to Cart" },
                    { area: "Cart Drawer", lift: "+8% AOV" },
                    { area: "Checkout", lift: "-15% Abandonment" },
                    { area: "Post-Purchase", lift: "+25% 2nd Order" }
                ].map((item, i) => (
                    <div key={i} className="flex-1 flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                        <div className="w-1 h-8 bg-[#DBFE01] rounded-full" />
                        <div>
                            <div className="text-xs text-white/50 uppercase font-bold">{item.area}</div>
                            <div className="text-sm text-white font-bold">{item.lift}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border border-green-100 shadow-sm"
            >
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-green-100 rounded-lg text-green-600"><TrendingUp className="w-5 h-5" /></div>
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+40% Stability</span>
                </div>
                <div className="text-3xl font-extrabold text-gray-900 mb-1">ROAS</div>
                <div className="text-sm text-gray-500">Consistent scaling, no more rollercoaster weeks.</div>
            </motion.div>

            <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 shadow-sm"
            >
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Users className="w-5 h-5" /></div>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">-25% Cost</span>
                </div>
                <div className="text-3xl font-extrabold text-gray-900 mb-1">CAC</div>
                <div className="text-sm text-gray-500">Acquisition costs dropped via creative testing.</div>
            </motion.div>
        </div>
    </div>
);

// Problem: Leak Map
export const ProblemVisual = () => (
    <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-xl relative min-h-[400px]">
        <div className="absolute top-0 right-0 p-4">
             <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold border border-red-100">
                <AlertCircle className="w-3 h-3" />
                Revenue Leaks Detected
             </div>
        </div>

        <div className="mt-8 space-y-6 relative">
            {/* Funnel Steps with Leaks */}
            {[
                { label: "Product Page", leak: "Low Add-to-Cart", drop: "-85%", icon: ShoppingBag },
                { label: "Cart", leak: "Abandonment Spike", drop: "-60%", icon: ShoppingCart },
                { label: "Checkout", leak: "Payment Friction", drop: "-40%", icon: CreditCard },
                { label: "Retention", leak: "One-time Buyers", drop: "No Repeat", icon: Users }
            ].map((step, i) => (
                <div key={i} className="relative pl-8 border-l-2 border-gray-100 last:border-0 pb-8 last:pb-0">
                    <div className={`absolute -left-[17px] top-0 w-8 h-8 rounded-full border-4 border-white shadow-sm flex items-center justify-center ${i === 3 ? 'bg-gray-200' : 'bg-red-100'}`}>
                        {i === 3 ? <div className="w-2 h-2 rounded-full bg-gray-400" /> : <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />}
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-4 flex justify-between items-center group hover:bg-red-50 transition-colors border border-transparent hover:border-red-100">
                        <div className="flex items-center gap-3">
                            <step.icon className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
                            <div>
                                <div className="font-bold text-gray-900">{step.label}</div>
                                <div className="text-xs text-red-500 font-medium">{step.leak}</div>
                            </div>
                        </div>
                        <div className="text-red-600 font-bold bg-white px-2 py-1 rounded border border-red-100 text-sm shadow-sm">
                            {step.drop}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

// Solution: Testing Calendar + Flows
export const SolutionVisual = () => (
    <div className="grid gap-6">
        {/* Testing Calendar */}
        <motion.div 
            whileHover={{ y: -2 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
        >
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="font-bold text-gray-900">Creative Testing</span>
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">Weekly Sprint</span>
            </div>

            <div className="grid grid-cols-4 gap-2 text-center mb-2">
                {['Mon', 'Wed', 'Fri', 'Sun'].map(d => <div key={d} className="text-[10px] text-gray-400 font-bold uppercase">{d}</div>)}
            </div>
            <div className="grid grid-cols-4 gap-2">
                {[
                    { type: 'launch', color: 'bg-blue-500' },
                    { type: 'analyze', color: 'bg-purple-500' },
                    { type: 'scale', color: 'bg-green-500' },
                    { type: 'report', color: 'bg-gray-800' }
                ].map((item, i) => (
                    <div key={i} className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center relative overflow-hidden group">
                        <div className={`w-2 h-2 rounded-full ${item.color}`} />
                        <div className={`absolute inset-0 ${item.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                    </div>
                ))}
            </div>
            <div className="mt-4 flex gap-4 justify-center">
                <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /><span className="text-[10px] text-gray-500">Launch</span></div>
                <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /><span className="text-[10px] text-gray-500">Scale Winner</span></div>
            </div>
        </motion.div>

        {/* Retention Flow Diagram */}
        <div className="bg-[#0B1020] rounded-2xl p-6 border border-white/10 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(219,254,1,0.05),transparent_60%)]" />
            
            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                    <Mail className="w-5 h-5 text-[#DBFE01]" />
                    <span className="font-bold text-white">LTV Engine</span>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/50">
                            <span className="text-blue-400 font-bold text-xs">1</span>
                        </div>
                        <div className="h-0.5 flex-1 bg-white/10 relative">
                            <div className="absolute right-0 -top-1 w-2 h-2 border-t-2 border-r-2 border-white/10 rotate-45" />
                        </div>
                        <div className="text-xs text-white/60 font-mono">Welcome Flow</div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/50">
                            <span className="text-purple-400 font-bold text-xs">2</span>
                        </div>
                        <div className="h-0.5 flex-1 bg-white/10 relative">
                            <div className="absolute right-0 -top-1 w-2 h-2 border-t-2 border-r-2 border-white/10 rotate-45" />
                        </div>
                        <div className="text-xs text-white/60 font-mono">Post-Purchase</div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#DBFE01]/20 flex items-center justify-center border border-[#DBFE01]/50">
                            <span className="text-[#DBFE01] font-bold text-xs">3</span>
                        </div>
                        <div className="h-0.5 flex-1 bg-white/10 relative">
                            <div className="absolute right-0 -top-1 w-2 h-2 border-t-2 border-r-2 border-white/10 rotate-45" />
                        </div>
                        <div className="text-xs text-[#DBFE01] font-mono">Winback</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const MegaphoneIcon = (props) => (
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
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
);