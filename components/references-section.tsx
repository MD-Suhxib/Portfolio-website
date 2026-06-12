"use client"

import { ShieldCheck, HardDrive, Cpu, Search, Sparkles, Code2 } from "lucide-react"

export function ReferencesSection() {
  const specs = [
    { icon: Cpu, label: "Framework", value: "Next.js 15 / React 19" },
    { icon: HardDrive, label: "Hosting / CDN", value: "Vercel Edge Network" },
    { icon: Code2, label: "Styling System", value: "Tailwind CSS & Motion" },
    { icon: ShieldCheck, label: "Core Web Vitals", value: "Checked (Perfect 100)" },
    { icon: Search, label: "SEO Schemas", value: "Schema.org JSON-LD" },
    { icon: Sparkles, label: "AI & LLM Docs", value: "/llms-full.txt Enabled" }
  ]

  return (
    <section className="py-20 bg-transparent border-t border-white/5 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="font-mono text-xs text-white/30 uppercase tracking-widest">
              [REF] Verification
            </span>
            <h3 className="text-xl font-semibold text-white tracking-tight">
              Verify my claims.
            </h3>
          </div>
          <p className="text-white/40 text-xs max-w-xs leading-relaxed font-mono">
            Every deployment is audited for semantic markup, accessibility compliance, and structural performance.
          </p>
        </div>

        {/* Technical stack tags */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {specs.map((spec, idx) => {
            const Icon = spec.icon
            return (
              <div
                key={idx}
                className="p-5 rounded-xl border border-white/5 bg-[#121212] flex flex-col justify-between space-y-4 hover:border-[#c9e265]/20 hover:bg-[#121212]/90 transition-all duration-300"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#090909] border border-white/5 text-[#c9e265]">
                  <Icon className="w-4 h-4" />
                </span>
                
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-white/30 uppercase tracking-wider">
                    {spec.label}
                  </div>
                  <div className="text-xs font-semibold text-white">
                    {spec.value}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
