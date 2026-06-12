"use client"

import { motion } from "framer-motion"

export function ScoresSection() {
  const scores = [
    { label: "Performance", value: 100 },
    { label: "Accessibility", value: 100 },
    { label: "Best Practices", value: 100 },
    { label: "SEO", value: 100 }
  ]

  // Circle radius and circumference calculations
  const radius = 28
  const circumference = 2 * Math.PI * radius

  const circleVariants = {
    hidden: { strokeDashoffset: circumference },
    visible: {
      strokeDashoffset: 0,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.2 }
    }
  }

  return (
    <section id="scores" className="py-28 bg-transparent border-t border-white/5 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copywriting */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs text-[#c9e265] uppercase tracking-wider font-bold">
                [07] Quality Scores
              </span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tighter leading-[1.05]">
                Four scores.{" "}
                <span className="font-serif italic text-[#c9e265] font-normal">
                  All 100.
                </span>
              </h2>
            </div>
            
            <p className="text-white/50 text-sm md:text-base leading-relaxed">
              I design and write code with precision. I verify performance indices on Google Lighthouse core algorithms. My layouts score 100/100 across accessibility rules, technical best practices, clean indexing structures, and caching optimizations.
            </p>

            <div className="p-4 rounded-xl border border-[#c9e265]/10 bg-[#c9e265]/5 text-xs text-[#c9e265]/80 font-mono leading-relaxed max-w-md">
              [✓] Verified on Next.js 15 App Router production server pipelines.
            </div>
          </div>

          {/* Right Column: Lighthouse circles grid */}
          <div className="lg:col-span-6">
            <div className="w-full rounded-2xl border border-white/5 bg-[#121212] p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 relative z-10">
                {scores.map((score, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center space-y-4">
                    {/* Circle Gauge */}
                    <div className="relative w-20 h-20">
                      {/* Grey Background track */}
                      <svg className="w-full h-full -rotate-90">
                        <circle
                          cx="40"
                          cy="40"
                          r={radius}
                          stroke="rgba(255, 255, 255, 0.05)"
                          strokeWidth="3.5"
                          fill="transparent"
                        />
                        {/* Neon Green Fill Track */}
                        <motion.circle
                          cx="40"
                          cy="40"
                          r={radius}
                          stroke="#c9e265"
                          strokeWidth="3.5"
                          fill="transparent"
                          strokeDasharray={circumference}
                          variants={circleVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          strokeLinecap="round"
                          style={{
                            filter: "drop-shadow(0px 0px 4px rgba(201, 226, 101, 0.3))"
                          }}
                        />
                      </svg>
                      {/* Score Value text */}
                      <span className="absolute inset-0 flex items-center justify-center font-mono text-sm font-semibold text-white">
                        {score.value}
                      </span>
                    </div>

                    {/* Score Label */}
                    <span className="text-xs text-white/50 font-medium text-center">
                      {score.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Lighthouse watermark tag */}
              <div className="flex justify-center items-center mt-8 pt-6 border-t border-white/5 text-[9px] font-mono text-white/20 tracking-wider">
                <span>SYSTEM PERFORMANCE METRICS AUDITED BY GOOGLE LIGHTHOUSE</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
