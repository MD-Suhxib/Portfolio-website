"use client"

import { User } from "lucide-react"
import Image from "next/image"

export function ProfileSection() {
  const roleTags = ["DEVELOPER", "AI / ML", "Full Stack"]

  return (
    <section id="about" className="py-28 bg-transparent border-t border-white/5 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Copywriting */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="font-mono text-xs text-[#c9e265] uppercase tracking-wider font-bold">
                [02] About Me
              </span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tighter leading-[1.05]">
                Mohammed Suhaib S.{" "}
                <span className="font-serif italic text-[#c9e265] font-normal">
                  Software Engineer.
                </span>
              </h2>
            </div>

            <p className="text-white/55 text-sm md:text-base leading-relaxed">
              I am a Software Engineer passionate about AI/ML and full-stack development. With hands-on experience in LLMs, data analysis, and real-world problem-solving, I create impactful and scalable digital solutions that blend cutting-edge AI with intuitive user interfaces. I love building web apps, leading technical projects, and visualizing data insights.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {roleTags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full bg-[#121212] border border-white/5 font-mono text-[10px] text-white/60 uppercase tracking-widest"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5">
              <div>
                <div className="text-2xl font-semibold text-white font-mono">3+</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">Years Dev</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white font-mono">100%</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">Commitment</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white font-mono">Bangalore</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">Base Base</div>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative aspect-[4/5] w-full rounded-2xl border border-white/5 bg-[#121212] p-3 shadow-2xl overflow-hidden group">
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-[#090909]">
                <Image
                  src="/About me section .jpeg"
                  alt="Mohammed Suhaib S."
                  fill
                  priority
                  sizes="(max-w-768px) 100vw, 400px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Glowing hover boundary */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#c9e265]/20 rounded-2xl transition-all duration-300 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
