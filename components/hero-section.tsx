"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, FileText } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 z-0 bg-transparent">
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#c9e265]/5 filter blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Column: Monospace Category & Heading info */}
        <div className="flex-1 max-w-3xl space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3 text-xs font-mono text-white/40 tracking-wider uppercase"
          >
            <span className="text-[#c9e265] font-bold">[01]</span>
            <span>Software Engineer Portfolio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-7xl lg:text-8xl font-semibold leading-[1.12] text-white tracking-tight"
          >
            Hi there! I am{" "}
            <span className="font-serif italic text-[#c9e265] font-normal block sm:inline">
              Suhaib.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-white/50 max-w-2xl leading-relaxed"
          >
            A{" "}
            <span className="font-serif italic text-[#c9e265] font-normal">
              Software Engineer
            </span>{" "}
            specializing in{" "}
            <span className="font-serif italic text-[#c9e265] font-normal">
              AI & Machine Learning
            </span>
            , crafting intelligent solutions for tomorrow's challenges.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-6"
          >
            {/* Visit CV */}
            <a
              href="https://drive.google.com/file/d/1Zjok412_nt1xbNK_GwZ6_yZXy7D4bu3t/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-black bg-[#c9e265] hover:bg-[#c9e265]/90 transition-all duration-300 group shadow-lg shadow-[#c9e265]/10 hover:shadow-[#c9e265]/20 hover:scale-[1.02]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Visit CV
              </span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-[-150%] transition-transform duration-1000 ease-out" />
            </a>

            {/* View Projects */}
            <a
              href="#work"
              className="inline-flex items-center gap-3 text-sm font-semibold text-white/70 hover:text-white transition-colors duration-300 group"
            >
              <span>View Projects</span>
              <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 group-hover:border-[#c9e265] group-hover:text-[#c9e265] transition-colors duration-300">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </motion.div>

          {/* Core Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 pt-10 border-t border-white/5 max-w-md"
          >
            <div>
              <div className="text-2xl font-semibold text-white font-mono">Dev</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-white font-mono">3+</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Years Exp</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-white font-mono">AI/ML</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Focus</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Hero Profile Image Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-sm lg:max-w-md shrink-0 relative"
        >
          {/* Neon accent glowing ring border */}
          <div className="absolute inset-0 bg-[#c9e265]/20 rounded-3xl blur-xl opacity-50 pointer-events-none" />
          
          <div className="relative rounded-3xl border border-white/5 bg-[#121212] p-3 shadow-2xl overflow-hidden group">
            {/* Animated Shining Snake Border Beam */}
            <div className="absolute inset-0 pointer-events-none z-20">
              {/* Soft blur glow layer */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: "conic-gradient(from 0deg, transparent 40%, #c9e265 48%, #ffffff 50%, #c9e265 52%, transparent 60%)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                  padding: "4px",
                  filter: "blur(5px)",
                  opacity: 0.85
                }}
                animate={{ rotate: [0, 360] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "linear"
                }}
              />
              {/* Sharp border strand */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: "conic-gradient(from 0deg, transparent 43%, #c9e265 48%, #ffffff 50%, #c9e265 52%, transparent 57%)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                  padding: "1.5px"
                }}
                animate={{ rotate: [0, 360] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "linear"
                }}
              />
            </div>
            
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-[#090909]">
              <Image
                src="/Formals-landing.jpeg"
                alt="MD Suhaib S."
                fill
                priority
                sizes="(max-w-768px) 100vw, 400px"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Monospace floating label */}
              <div className="absolute bottom-4 left-4 font-mono text-[10px] text-white/80 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 tracking-widest uppercase">
                [ BANGALORE, IN ]
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}