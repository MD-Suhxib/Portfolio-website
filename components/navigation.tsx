"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/#about", label: "About" },
    { href: "/#work", label: "Work" },
    { href: "/#services", label: "Services" },
    { href: "/#process", label: "Process" },
    { href: "/#contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-[#090909]/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
            <span className="text-white">MD Suhaib</span>
            <span className="text-[#c9e265]">S.</span>
            <span className="w-2 h-2 rounded-full bg-[#c9e265] mt-1.5 animate-pulse" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#c9e265] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-semibold text-black bg-[#c9e265] hover:bg-[#c9e265]/90 transition-all overflow-hidden duration-300 group shadow-md shadow-[#c9e265]/10 hover:shadow-[#c9e265]/20 hover:scale-[1.02]"
            >
              <span className="relative z-10">Start a project</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-[-150%] transition-transform duration-1000 ease-out" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:text-[#c9e265] transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-white/5 bg-[#090909]/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-white/75 hover:text-[#c9e265] transition-colors block"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="pt-4 border-t border-white/5"
              >
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex w-full items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-black bg-[#c9e265] hover:bg-[#c9e265]/90 transition-colors"
                >
                  Start a project
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
