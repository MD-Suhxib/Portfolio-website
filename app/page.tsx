"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WorkSection } from "@/components/work-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { ProfileSection } from "@/components/profile-section"
import { ResultsSection } from "@/components/results-section"
import { ScoresSection } from "@/components/scores-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingWidgets } from "@/components/floating-widgets"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-[#c9e265] selection:text-black scroll-smooth relative overflow-hidden">
      {/* Navigation Header */}
      <Navigation />

      {/* Hero Intro */}
      <HeroSection />

      {/* Profile / Kerim Bilin (Mohammed Suhaib S. About Me) */}
      <ProfileSection />

      {/* Selected Work List */}
      <WorkSection />

      {/* Services Grid */}
      <ServicesSection />

      {/* Scroll-Pinned Process Section */}
      <ProcessSection />

      {/* Outcomes & Charts */}
      <ResultsSection />

      {/* Lighthouse Scores */}
      <ScoresSection />

      {/* Briefing / Contact Form */}
      <ContactSection />

      {/* Sitemap Footer */}
      <Footer />

      {/* Fixed WhatsApp/Call Widgets */}
      <FloatingWidgets />
    </main>
  )
}
