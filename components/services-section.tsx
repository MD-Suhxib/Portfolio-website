"use client"

import { motion } from "framer-motion"
import {
  Globe,
  Database,
  Brain,
  Cog,
  Cpu,
  MessageSquare,
  Sparkles,
  Layout,
  Code2,
  Paintbrush,
  Radio,
  Workflow,
  Terminal,
  Server,
  Layers,
  Network,
  ArrowRight
} from "lucide-react"

export function ServicesSection() {
  const disciplines = [
    {
      icon: Brain,
      number: "01",
      title: "AI/ML",
      description: "Developing intelligent algorithms. Exploring deep learning, neural networks, natural language processing, and integrating large language models to solve complex real-world challenges.",
      tags: [
        { name: "Neural Networks", icon: Network },
        { name: "NLP", icon: MessageSquare },
        { name: "LLM APIs", icon: Sparkles },
        { name: "Deep Learning", icon: Brain }
      ]
    },
    {
      icon: Globe,
      number: "02",
      title: "Web Interfaces",
      description: "Designing, coding, and maintaining websites and web apps. Specializing in React, Next.js, and Tailwind CSS to build user-friendly, responsive, and performance-optimized frontends.",
      tags: [
        { name: "UX Design", icon: Layout },
        { name: "React", icon: Code2 },
        { name: "Next.js", icon: Globe },
        { name: "Tailwind CSS", icon: Paintbrush }
      ]
    },
    {
      icon: Cog,
      number: "03",
      title: "Automation",
      description: "Designing intelligent systems for streamlined, automated workflows. Integrating microcontrollers like Arduino and Raspberry Pi with sensors to create functional IoT platforms.",
      tags: [
        { name: "IoT / Sensors", icon: Radio },
        { name: "Arduino", icon: Cpu },
        { name: "Raspberry Pi", icon: Workflow },
        { name: "Pipelines", icon: Terminal }
      ]
    },
    {
      icon: Database,
      number: "04",
      title: "Database Management",
      description: "Designing, optimizing, and administering relational and non-relational database systems. Focusing on schema design, query optimization, and structured data modeling for high-performance applications.",
      tags: [
        { name: "PostgreSQL", icon: Database },
        { name: "MongoDB", icon: Server },
        { name: "SQL / NoSQL", icon: Layers },
        { name: "Schema Design", icon: Network }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="services" className="py-28 bg-transparent border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-[#c9e265]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <div className="space-y-6 mb-20">
          <div className="font-mono text-xs text-[#c9e265] uppercase tracking-wider">
            [04] Services
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold text-white tracking-tighter leading-[1.05]">
            Four disciplines.{" "}
            <span className="font-serif italic text-[#c9e265] font-normal">
              One engineer.
            </span>
          </h2>
          <p className="text-white/40 text-sm md:text-base max-w-xl leading-relaxed">
            Scalable digital systems that combine full-stack engineering with machine learning and automated workflows.
          </p>
        </div>

        {/* 2x2 Grid of cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {disciplines.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative flex flex-col justify-between p-8 md:p-10 rounded-2xl border border-white/5 bg-[#0c0c0c]/90 backdrop-blur-md transition-all duration-500 hover:border-[#c9e265]/40 hover:shadow-[0_0_35px_rgba(201,226,101,0.03)] hover:scale-[1.002]"
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#c9e265]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Huge Outline Index Number */}
                <span className="outline-number absolute top-6 right-8 font-mono text-8xl md:text-9xl font-bold select-none pointer-events-none text-transparent transition-all duration-500 group-hover:opacity-100 opacity-20">
                  {item.number}
                </span>

                <div className="space-y-8 relative z-10 w-full">
                  {/* Top: Icon Badge */}
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/[0.02] border border-white/10 text-white group-hover:border-[#c9e265]/30 group-hover:bg-[#c9e265]/[0.02] group-hover:text-[#c9e265] transition-all duration-500">
                      <Icon className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-4 max-w-md">
                    <h3 className="text-3xl font-semibold text-white tracking-tight group-hover:text-[#c9e265] transition-colors duration-500">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Tags & Arrow */}
                <div className="flex flex-wrap gap-2.5 mt-10 pt-6 border-t border-white/5 relative z-10 w-full items-center justify-between">
                  <div className="flex flex-wrap gap-2 max-w-[85%]">
                    {item.tags.map((tag, tagIdx) => {
                      const TagIcon = tag.icon
                      return (
                        <span
                          key={tagIdx}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/[0.01] border border-white/10 font-mono text-[10px] tracking-wider uppercase text-white/50 group-hover:text-white/80 group-hover:border-white/20 transition-all duration-300"
                        >
                          <TagIcon className="w-3 h-3 text-white/30 group-hover:text-[#c9e265]/60 transition-colors" />
                          {tag.name}
                        </span>
                      )
                    })}
                  </div>

                  {/* Right Arrow */}
                  <div className="text-white/20 group-hover:text-[#c9e265] group-hover:translate-x-1.5 transition-all duration-500 self-end mb-1">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}