import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

const features = [
  "Modern full-stack build — React / Node / Python with clean architecture so you can iterate fast",
  "RAG-ready retrieval — scalable knowledge pipelines with Pinecone + pgvector options",
  "Enterprise-grade access control — roles/permissions patterns that support real orgs",
  "Observability + evals — LangSmith for quality checks, regression testing, and cost tracking"
];

const techStackGroups = [
  {
    title: "LLM APIs",
    items: [
      { name: "OpenAI", alt: "OpenAI LLM API logo", icon: "https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/pguuhujkhcrfkqk1vfhy" },
      { name: "Anthropic", alt: "Anthropic Claude API logo", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Anthropic_logo.svg/1200px-Anthropic_logo.svg.png" },
      { name: "Google Gemini", alt: "Google Gemini API logo", icon: "https://www.gstatic.com/devrel-devsite/prod/v2d21f2b520920cd5bdeb0d4a3e37a9b7920eac4b39a9d9ac4198e1cd7fbe04ef" },
      { name: "Azure OpenAI", alt: "Azure OpenAI Service logo", icon: "https://www.svgrepo.com/show/303600/azure-1-logo.svg" }
    ]
  },
  {
    title: "Agents + Orchestration",
    items: [
      { name: "LangChain", alt: "LangChain agent framework logo", icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
      { name: "LangGraph", alt: "LangGraph orchestration framework logo", icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" }
    ]
  },
  {
    title: "Retrieval",
    items: [
      { name: "Pinecone", alt: "Pinecone vector database logo", icon: "https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/z0eoiwq4qfsufmh3r9s1" },
      { name: "pgvector (Postgres)", alt: "pgvector Postgres vector extension logo", icon: "https://www.postgresql.org/media/img/about/press/elephant.png" }
    ]
  },
  {
    title: "Evaluation + Observability",
    items: [
      { name: "LangSmith", alt: "LangSmith LLM evaluation and observability logo", icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" }
    ]
  },
  {
    title: "Infrastructure",
    items: [
      { name: "AWS", alt: "Amazon Web Services logo", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png" },
      { name: "Google Cloud", alt: "Google Cloud Platform logo", icon: "https://www.gstatic.com/devrel-devsite/prod/v2d21f2b520920cd5bdeb0d4a3e37a9b7920eac4b39a9d9ac4198e1cd7fbe04ef" },
      { name: "Docker", alt: "Docker container platform logo", icon: "https://www.docker.com/wp-content/uploads/2023/08/logo-guide-logos-2.png" },
      { name: "Kubernetes", alt: "Kubernetes orchestration logo", icon: "https://kubernetes.io/images/kubernetes-logo.png" }
    ]
  }
];

export default function TechStackSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.02]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-12">
            Built for speed and scale
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-4 items-start"
              >
                <Check className="w-6 h-6 text-[#DBFE01] flex-shrink-0 mt-1" />
                <p className="text-lg text-[#2F2F2F] font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <div className="pt-12 border-t border-gray-200">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">Tech stack we ship with</h3>
            <p className="text-sm text-[#2F2F2F]/60 font-medium">Built on proven AI tooling — no fragile experiments.</p>
          </motion.div>

          <div className="space-y-12">
            {techStackGroups.map((group, groupIdx) => (
              <motion.div
                key={groupIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + groupIdx * 0.1 }}
              >
                <h4 className="text-lg font-bold text-[#1a1a1a] mb-6">{group.title}</h4>
                <div className="flex flex-wrap gap-8">
                  {group.items.map((item, itemIdx) => (
                    <motion.div
                      key={itemIdx}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center justify-center gap-3"
                    >
                      <img
                        src={item.icon}
                        alt={item.alt}
                        className="h-12 w-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      />
                      <span className="text-sm text-[#2F2F2F] font-medium text-center max-w-[80px]">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center text-sm text-[#2F2F2F]/70 italic max-w-3xl mx-auto"
          >
            Stack-agnostic when needed: We'll recommend the simplest stack that meets your latency, security, and cost constraints — and document every decision.
          </motion.p>
        </div>
      </div>
    </section>
  );
}