"use client"

import { Mail, Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"

export function FloatingWidgets() {
  const widgets = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/md-suhaib/",
      label: "LinkedIn",
      color: "hover:text-[#c9e265] hover:border-[#c9e265]"
    },
    {
      icon: Github,
      href: "https://github.com/MD-Suhxib",
      label: "GitHub",
      color: "hover:text-white hover:border-white"
    },
    {
      icon: Mail,
      href: "mailto:mohammedsuhaib.0294@gmail.com",
      label: "Email Me",
      color: "hover:text-[#c9e265] hover:border-[#c9e265]"
    }
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {widgets.map((widget, index) => {
        const Icon = widget.icon
        return (
          <motion.a
            key={index}
            href={widget.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 260, damping: 20 }}
            className={`group relative flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-[#121212]/90 backdrop-blur-md text-white/70 transition-all duration-300 ${widget.color} shadow-lg hover:shadow-[#c9e265]/10`}
          >
            {/* Label badge on hover */}
            <span className="absolute right-14 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 origin-right whitespace-nowrap rounded bg-[#121212] border border-white/10 px-3 py-1.5 text-xs text-white shadow-xl">
              {widget.label}
            </span>

            <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />

            {/* Subtle glow border ring */}
            <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-[#c9e265]/20 group-hover:scale-110 transition-all duration-300 pointer-events-none" />
          </motion.a>
        )
      })}
    </div>
  )
}
