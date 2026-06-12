"use client"

import { MapPin } from "lucide-react"

export function StudioSection() {
  return (
    <section id="studio" className="py-28 bg-transparent border-t border-white/5 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image box placeholder */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] w-full rounded-2xl border border-white/5 bg-[#090909] flex flex-col items-center justify-center p-8 text-center overflow-hidden group">
              {/* Overlay grid */}
              <div className="absolute inset-0 grid-overlay opacity-25 pointer-events-none" />
              
              {/* Transparent placeholder container as requested: "wherever more images is there keep it empty" */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <MapPin className="w-8 h-8 text-[#c9e265] animate-bounce" />
                <span className="font-mono text-xs text-white/30 tracking-widest uppercase">
                  [ Workspace Image Placeholder ]
                </span>
                <p className="text-white/50 text-xs max-w-xs leading-relaxed">
                  Bangalore Workspace, India.
                </p>
              </div>

              {/* Glowing hover boundary */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#c9e265]/20 rounded-2xl transition-all duration-300 pointer-events-none" />
            </div>
            
            {/* Monospace coordinates label */}
            <div className="flex items-center justify-between text-xs font-mono text-white/30 px-2">
              <span>LOCATION ID: IN-KA</span>
              <span>12°57'48.1"N 77°35'30.2"E</span>
            </div>
          </div>

          {/* Right Column: Copywriting content */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs text-[#c9e265] uppercase tracking-wider font-bold">
                [06] Workspace
              </span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tighter leading-[1.05]">
                My workspace in Bangalore is my{" "}
                <span className="font-serif italic text-[#c9e265] font-normal">
                  Place-To-Be.
                </span>
              </h2>
            </div>

            <p className="text-white/50 text-sm md:text-base leading-relaxed">
              Operating from Bangalore, the Silicon Valley of India. This is my dedicated lab where AI/ML algorithms are trained, full-stack React databases are architected, and systems are deployed. It is built to facilitate focused, high-end technical creation.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/5">
              <div className="space-y-1">
                <div className="text-2xl font-semibold text-white font-mono">10+</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">Projects Completed</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-semibold text-white font-mono">Bangalore</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">Base Location</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
