"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

interface Project {
  title: string
  category: string
  year: string
  liveUrl: string
  image: string
}

export function WorkSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Motion values for tracking cursor relative to the container
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring settings for smooth lagging/inertial follow effect
  const springConfig = { stiffness: 150, damping: 15, mass: 0.6 }
  const forceX = useSpring(mouseX, springConfig)
  const forceY = useSpring(mouseY, springConfig)

  const projects: Project[] = [
    {
      title: "Aquaponics Patent",
      category: "Logistics & Commerce",
      year: "2024",
      liveUrl: "/aquaponics-patent",
      image: "/Revised-Aquaponics.png"
    },
    {
      title: "Amara Coffee",
      category: "E-Commerce / Brand",
      year: "2024",
      liveUrl: "https://amara-coffee.vercel.app/",
      image: "/coffee01.png"
    },
    {
      title: "Agro Chain",
      category: "Blockchain / Web3",
      year: "2024",
      liveUrl: "https://agro-chain.my.canva.site/",
      image: "/project2.png"
    },
    {
      title: "Global Apex Business",
      category: "B2B Showcase Site",
      year: "2024",
      liveUrl: "https://www.globalapexs.com/",
      image: "/project4.png"
    },
    {
      title: "Green Scope",
      category: "E-Commerce / Green Tech",
      year: "2024",
      liveUrl: "https://green-scope.vercel.app/",
      image: "/project5.jpeg"
    }
  ]

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    // Align coordinates to be absolute offsets relative to container
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <section
      id="work"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-28 bg-transparent border-t border-white/5 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <div className="space-y-6 mb-20">
          <div className="font-mono text-xs text-[#c9e265] uppercase tracking-wider">
            [03] Selected Work
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold text-white tracking-tighter leading-[1.05]">
            What I Have{" "}
            <span className="font-serif italic text-[#c9e265] font-normal">
              Built.
            </span>
          </h2>
          <p className="text-white/40 text-sm md:text-base max-w-xl leading-relaxed">
            I engineer high-fidelity products with clean codebases, performance optimization, and custom designs.
          </p>
        </div>

        {/* Project List Rows */}
        <div className="border-t border-white/10 relative">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex items-center justify-between py-10 md:py-12 group relative transition-colors duration-300"
            >
              {/* Dynamic Animated Borders */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-transparent group-hover:bg-[#c9e265] transition-colors duration-300 z-20" />
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10 group-hover:bg-[#c9e265] transition-colors duration-300 z-20" />

              {/* Left Column: Project Name (with rolling animation) */}
              <div className="flex items-center gap-6 md:gap-12 z-10">
                <span className="font-mono text-xs text-white/30 group-hover:text-[#c9e265] transition-colors">
                  0{index + 1}
                </span>
                <span className="roll-text text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
                  <span className="roll-text-inner">
                    <span className="block">{project.title}</span>
                    <span className="block text-[#c9e265]">{project.title}</span>
                  </span>
                </span>
              </div>

              {/* Right Column: Category & Year & Arrow */}
              <div className="flex items-center gap-6 md:gap-12 text-sm z-10">
                <span className="text-white/40 font-medium hidden sm:inline">
                  {project.category}
                </span>
                <span className="font-mono text-white/30 group-hover:text-white transition-colors">
                  {project.year}
                </span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 group-hover:border-[#c9e265] group-hover:bg-[#c9e265] group-hover:text-black transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Floating Mouse Follower Preview Container */}
      <motion.div
        style={{
          left: forceX,
          top: forceY,
          x: "-50%",
          y: "-50%",
          scale: hoveredIndex !== null ? 1 : 0.8,
          opacity: hoveredIndex !== null ? 1 : 0,
        }}
        className="pointer-events-none absolute z-20 w-80 h-52 hidden md:flex items-center justify-center rounded-xl border border-white/20 bg-[#121212] overflow-hidden shadow-2xl transition-opacity duration-300"
      >
        {hoveredIndex !== null && (
          <div className="relative w-full h-full">
            <Image
              src={projects[hoveredIndex].image}
              alt={projects[hoveredIndex].title}
              fill
              sizes="320px"
              priority
              className="object-cover object-top"
            />
            {/* Subtle overlay shading */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        )}
      </motion.div>
    </section>
  )
}