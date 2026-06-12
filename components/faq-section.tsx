"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: "What frameworks and tech stacks do you build on?",
      answer: "I primarily build custom websites using Next.js (React), Tailwind CSS, TypeScript, and Framer Motion. This stack provides maximum loading performance, fluid animations, modular scalability, and flawless security structures."
    },
    {
      question: "How long does a typical website development project take?",
      answer: "A standard landing page with integrated marketing structures takes 3-4 weeks. A full brand launch including multi-page UI, custom dashboards, database modeling, and extensive SEO planning takes 6-8 weeks."
    },
    {
      question: "Do you offer hosting, care, and continuous support?",
      answer: "Yes, I host on optimized edge CDNs like Vercel and Netlify. I set up SSL certification, continuous core security audits, and provide active retainer contracts for updates, backups, and page speed checks."
    },
    {
      question: "Is search engine optimization (SEO) included in the packages?",
      answer: "Absolutely. I build all platforms SEO-first. This includes setting up structured JSON-LD data schemas, configuring proper HTML headings hierarchies, optimizing image weights, and submitting active XML maps to Google Search Console."
    },
    {
      question: "What is your typical project onboarding workflow?",
      answer: "I begin with a briefing form and a kickoff design sprint where I align on copy drafts. Then I design Figma prototypes, build the React frontend with animations, deploy on testing routes, and push live."
    },
    {
      question: "Can I migrate my current website design to Next.js?",
      answer: "Yes, I can rebuild your existing design system to Next.js while keeping the design identical, resulting in 10x faster loading performance, higher core scores, and cleaner maintainable React files."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-28 bg-transparent border-t border-white/5 relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <span className="font-mono text-xs text-[#c9e265] uppercase tracking-wider font-bold">
            [09] FAQ
          </span>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-semibold text-white tracking-tighter leading-[1.05]">
            Answers up{" "}
            <span className="font-serif italic text-[#c9e265] font-normal">
              front.
            </span>
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="rounded-xl border border-white/5 bg-[#090909] overflow-hidden transition-all duration-300 hover:border-white/10"
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                >
                  <span className="text-base md:text-lg font-medium text-white group-hover:text-[#c9e265] transition-colors pr-4">
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus Indicator */}
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#121212] border border-white/5 text-white/50 group-hover:text-[#c9e265] transition-colors shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#c9e265]" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {/* Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-white/5 text-sm md:text-base text-white/55 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
