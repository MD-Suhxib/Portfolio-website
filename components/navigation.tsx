"use client"

import { Github, Linkedin, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-green-500/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-2xl font-bold text-white hover:text-green-400 transition-colors"
          >
            MD Suhaib S.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Social Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/MD-Suhxib"
              className="p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-green-500/20 transition-all duration-200 group"
            >
              <Github className="w-5 h-5 text-gray-300 group-hover:text-green-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-suhaib/"
              className="p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-green-500/20 transition-all duration-200 group"
            >
              <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-green-400" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-green-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-green-500/20">
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4">
                <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-green-500/20 transition-all">
                  <Github className="w-5 h-5 text-gray-300 hover:text-green-400" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-green-500/20 transition-all">
                  <Linkedin className="w-5 h-5 text-gray-300 hover:text-green-400" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
