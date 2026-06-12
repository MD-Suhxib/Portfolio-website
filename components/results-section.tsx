"use client"

import { motion } from "framer-motion"
import { Search, BarChart3, ShieldCheck, HeartHandshake } from "lucide-react"

export function ResultsSection() {
  const points = [
    {
      icon: Search,
      title: "On-page SEO",
      description: "Structured schema.org JSON-LD formatting, meta descriptors, and microdata optimized for Google crawling."
    },
    {
      icon: BarChart3,
      title: "Tracking & Analytics",
      description: "GDPR-compliant tracking systems (Matomo / Plausible) mapped to analyze conversions and optimize sales flows."
    },
    {
      icon: ShieldCheck,
      title: "100% Responsive & Secure",
      description: "Optimized mobile fluid grid layouts protected with HTTPS certificates, CSP headers, and secure dependencies."
    },
    {
      icon: HeartHandshake,
      title: "ROI-First Mindset",
      description: "I align copy, CTAs, structure, and loading performance specifically to turn visitors into paying customers."
    }
  ]

  // Values for the SVG line chart
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  }

  return (
    <section id="results" className="py-28 bg-transparent border-t border-white/5 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive SVG Graph */}
          <div className="lg:col-span-6 space-y-6">
            <div className="w-full rounded-2xl border border-white/5 bg-[#090909] p-6 space-y-6 relative overflow-hidden group">
              <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />
              
              {/* Card Header */}
              <div className="flex items-center justify-between relative z-10">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-white/30 tracking-widest uppercase">
                    [ CONVERSION TRAFFIC OUTCOME ]
                  </span>
                  <div className="text-xl font-semibold text-white">93.4M Page Views</div>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#c9e265]/10 border border-[#c9e265]/20 text-xs text-[#c9e265] font-semibold font-mono">
                  +47.2%
                </span>
              </div>

              {/* SVG Line Graph */}
              <div className="h-44 w-full relative z-10 flex items-end">
                <svg className="w-full h-32 text-[#c9e265]" viewBox="0 0 100 30" preserveAspectRatio="none" fill="none">
                  {/* Grid lines */}
                  <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                  <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />

                  {/* Gradient Area under curve */}
                  <path d="M 0 30 L 0 25 Q 20 20 40 12 T 80 5 T 100 2 L 100 30 Z" fill="url(#chartGrad)" opacity="0.08" />
                  
                  {/* Drawing Animated Line Path */}
                  <motion.path
                    d="M 0 25 Q 20 20 40 12 T 80 5 T 100 2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    variants={pathVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  />

                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#c9e265" />
                      <stop offset="100%" stopColor="#c9e265" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Pulsing indicator dots */}
                <div className="absolute right-0 top-[2%] w-2 h-2 rounded-full bg-[#c9e265] animate-ping" />
                <div className="absolute right-0 top-[2%] w-2 h-2 rounded-full bg-[#c9e265]" />
              </div>

              {/* Graph Footer */}
              <div className="flex justify-between items-center text-[10px] font-mono text-white/30 pt-4 border-t border-white/5 relative z-10">
                <span>Q1 INDEX START</span>
                <span>AUDITED GROWTH SCALE</span>
                <span>Q4 LAUNCH TARGET</span>
              </div>
            </div>
          </div>

          {/* Right Column: Copywriting Points */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs text-[#c9e265] uppercase tracking-wider font-bold">
                [06] Results
              </span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tighter leading-[1.05]">
                Websites, optimized for{" "}
                <span className="font-serif italic text-[#c9e265] font-normal">
                  real outcomes.
                </span>
              </h2>
            </div>

            {/* Benefit Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((point, idx) => {
                const Icon = point.icon
                return (
                  <div key={idx} className="space-y-2 p-4 rounded-xl border border-white/5 bg-[#090909] hover:border-[#c9e265]/10 transition-colors">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#121212] border border-white/5 text-[#c9e265]">
                      <Icon className="w-4 h-4" />
                    </span>
                    <h3 className="text-sm font-semibold text-white">
                      {point.title}
                    </h3>
                    <p className="text-xs text-white/40 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
