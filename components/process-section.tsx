"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

export function ProcessSection() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const steps = [
    {
      number: "01 / 04",
      title: "Strategy",
      description: "I get to know you and your brand. Goals, audience, competition. Out of that comes the roadmap everything else stands on.",
      image: "/process_strategy.png",
      details: ["Briefing & Workshop", "Competitor Analysis", "Brand Strategy", "Roadmap"]
    },
    {
      number: "02 / 04",
      title: "Design",
      description: "Identity, interface, prototype. This is where the brand becomes visible — from logo to the last pixel of the site.",
      image: "/process_design.png",
      details: ["Brand Identity", "Wireframes & UX", "UI Design", "Design System"]
    },
    {
      number: "03 / 04",
      title: "Build",
      description: "Engineering on a modern stack: Next.js, React, performance-first. Clean code that scales and still runs in five years.",
      image: "/process_build.png",
      details: ["Frontend & CMS", "Backend / API", "Performance & SEO", "QA & Testing"]
    },
    {
      number: "04 / 04",
      title: "Launch & Care",
      description: "Deployment, monitoring, continuous optimization. I stay on it — your brand grows, and I scale with it.",
      image: "/process_launch.png",
      details: ["Go-Live", "Analytics", "Maintenance & Updates", "Iteration & Growth"]
    }
  ]

  // Automatic slide rotation every 1.5 seconds, pauses on hover
  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 1500)
    return () => clearInterval(timer)
  }, [isHovered, steps.length])

  const nextSlide = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length)
  }

  const prevSlide = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length)
  }

  return (
    <section id="process" className="py-32 bg-transparent relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c9e265]/3 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <div className="space-y-6 mb-20">
          <div className="font-mono text-xs text-[#c9e265] uppercase tracking-wider flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#c9e265]"></span>
            [05] Process / How I Work
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-semibold text-white tracking-tighter leading-[1.05]">
            From{" "}
            <span className="font-serif italic text-[#c9e265] font-normal">
              briefing
            </span>{" "}
            to{" "}
            <span className="font-serif italic text-[#c9e265] font-normal">
              launch.
            </span>
          </h2>
        </div>

        {/* Interactive Slideshow Box */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-full max-w-5xl mx-auto rounded-3xl border border-white/5 bg-[#0c0c0c]/80 backdrop-blur-md overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col md:flex-row items-stretch h-[560px] md:h-[450px]"
        >
          {/* Left Graphic Column */}
          <div className="w-full md:w-1/2 bg-[#070707] border-b md:border-b-0 md:border-r border-white/5 relative overflow-hidden min-h-[280px] md:min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={steps[currentStep].image}
                  alt={steps[currentStep].title}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Content Column */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between relative bg-gradient-to-br from-white/[0.01] to-transparent">
            {/* Animating Contents */}
            <div className="relative flex-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="space-y-4 md:space-y-6"
                >
                  {/* Step Index Indicator */}
                  <span className="font-mono text-xs text-[#c9e265] uppercase tracking-wider font-bold">
                    {steps[currentStep].number}
                  </span>

                  {/* Title */}
                  <h3 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                    {steps[currentStep].title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                    {steps[currentStep].description}
                  </p>

                  {/* Tags list */}
                  <div className="flex flex-wrap gap-x-5 gap-y-2.5 pt-6 border-t border-white/5">
                    {steps[currentStep].details.map((detail, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="font-mono text-[9px] sm:text-[10px] tracking-wider uppercase text-white/40 flex items-center gap-1.5"
                      >
                        <span className="text-[#c9e265] text-[8px]">▪</span>
                        {detail}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Panel: Slide progress line and Arrow Controls */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5 relative z-10">
              {/* Custom Slide Progress Indicator */}
              <div className="flex items-center gap-2">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentStep(idx)}
                    className="group py-2 focus:outline-none"
                  >
                    <div
                      className={`h-[3px] rounded-full transition-all duration-500 ${
                        currentStep === idx
                          ? "w-8 bg-[#c9e265]"
                          : "w-3 bg-white/10 group-hover:bg-white/30"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  aria-label="Previous step"
                  className="p-3 rounded-full border border-white/10 text-[#c9e265] hover:bg-[#c9e265]/10 hover:border-[#c9e265]/30 active:scale-95 transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next step"
                  className="p-3 rounded-full border border-white/10 text-[#c9e265] hover:bg-[#c9e265]/10 hover:border-[#c9e265]/30 active:scale-95 transition-all duration-300"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
