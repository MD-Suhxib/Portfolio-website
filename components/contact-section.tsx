"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MapPin, ArrowRight } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Briefing form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-28 bg-transparent border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-[#c9e265]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-4">
              <span className="font-mono text-xs text-[#c9e265] uppercase tracking-wider font-bold">
                [08] Contact & Briefing
              </span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tighter leading-[1.05]">
                Let's start{" "}
                <span className="font-serif italic text-[#c9e265] font-normal">
                  something.
                </span>
              </h2>
            </div>

            <p className="text-white/55 text-sm md:text-base leading-relaxed">
              Have an ambitious project idea, need AI integration, or want to optimize your web performance? Send a brief spec and I will get back to you within 24 hours.
            </p>

            {/* Info Cards */}
            <div className="space-y-6 pt-6 border-t border-white/5">
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#090909] border border-white/5 text-[#c9e265]">
                  <Mail className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-[10px] font-mono text-white/30 uppercase">Email Address</div>
                  <a href="mailto:mohammedsuhaib.0294@gmail.com" className="text-sm font-medium text-white hover:text-[#c9e265] transition-colors">
                    mohammedsuhaib.0294@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#090909] border border-white/5 text-[#c9e265]">
                  <MapPin className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-[10px] font-mono text-white/30 uppercase">Location Office</div>
                  <span className="text-sm font-medium text-white">
                    Bangalore, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Briefing Form */}
          <div className="lg:col-span-8">
            <div className="p-8 md:p-10 rounded-2xl border border-white/5 bg-[#090909] relative overflow-hidden">
              <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-[#c9e265]/10 border border-[#c9e265] flex items-center justify-center text-[#c9e265]">
                    <Send className="w-5 h-5 animate-pulse" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Briefing Received!</h3>
                  <p className="text-white/40 text-sm max-w-xs leading-relaxed">
                    Thank you. I will review your project specifications and get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  {/* Name field */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="name" className="text-xs font-mono text-white/40 uppercase tracking-widest">
                      What is your name?
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Suhaib S."
                      required
                      className="contact-input"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="email" className="text-xs font-mono text-white/40 uppercase tracking-widest">
                      What is your email address?
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. mohammedsuhaib.0294@gmail.com"
                      required
                      className="contact-input"
                    />
                  </div>



                  {/* Message field */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="message" className="text-xs font-mono text-white/40 uppercase tracking-widest">
                      Tell me about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. I want to integrate a custom LLM model into a Next.js interface..."
                      required
                      rows={4}
                      className="contact-input resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="relative inline-flex w-full items-center justify-center px-8 py-4 rounded-full text-sm font-semibold text-black bg-[#c9e265] hover:bg-[#c9e265]/90 transition-all duration-300 group shadow-lg shadow-[#c9e265]/10"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Submit Briefing Spec <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-[-150%] transition-transform duration-1000 ease-out" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
