import Link from "next/link"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { FloatingWidgets } from "@/components/floating-widgets"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"

interface ArticleContent {
  title: string
  subtitle: string
  category: string
  date: string
  readTime: string
  contentHtml: React.ReactNode
}

export default async function BlogPostDetail(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params

  const articles: Record<string, ArticleContent> = {
    "optimize-nextjs-lighthouse-100": {
      title: "How to optimize Next.js for 100/100 Core Web Vitals",
      subtitle: "A step-by-step guide to achieving flawless Lighthouse scores in modern production architectures.",
      category: "Engineering",
      date: "Jun 12, 2026",
      readTime: "5 Min",
      contentHtml: (
        <div className="space-y-6 text-white/70 leading-relaxed text-sm md:text-base">
          <p className="drop-cap">
            Achieving a perfect 100 on Google Lighthouse requires meticulous attention to bundle sizes, font loading strategies, image formats, and network caching layouts. Next.js offers outstanding default behaviors, but developers must optimize page components to hit absolute maximum quality.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight pt-4">
            1. Optimize Loading Paths for Custom Web Fonts
          </h2>
          <p>
            Fonts are a primary cause of Cumulative Layout Shift (CLS) and Largest Contentful Paint (LCP) delays. By utilizing Next.js's built-in font loader, fonts are downloaded locally and automatically injected into CSS payloads. This prevents flashes of unstyled text and eliminates runtime requests to external servers.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight pt-4">
            2. Responsive Image Ratios & Next-gen Compression
          </h2>
          <p>
            Always use the Next.js `Image` component. It forces you to define dimensions or layout metrics, preventing page shifting as assets load. Furthermore, it transcodes files automatically into WebP and AVIF formats, compressing file weights by up to 70% without visual degradation.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight pt-4">
            3. Dynamic Imports & Code Splitting
          </h2>
          <p>
            Do not bundle bulky interactive widgets (like chart engines, popups, or complex animation modules) on the initial loading route. Use React's `lazy` or Next's `dynamic` utilities to load scripts only when needed, minimizing the critical JavaScript payload.
          </p>
        </div>
      )
    },
    "power-of-minimal-ui": {
      title: "The power of minimal UI: Why less is always more",
      subtitle: "How subtraction creates attention, focusing the user flow specifically to improve brand conversion metrics.",
      category: "Design",
      date: "May 28, 2026",
      readTime: "4 Min",
      contentHtml: (
        <div className="space-y-6 text-white/70 leading-relaxed text-sm md:text-base">
          <p className="drop-cap">
            In a world of constant visual noise, quiet interfaces stand out. Subtraction is not simply the absence of design element; it is the deliberate focus on the core information that guides the user toward a specific action.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight pt-4">
            1. Establishing Clear Hierarchy
          </h2>
          <p>
            A clean dark theme combined with a single contrasting accent color (like neon lime green) creates an immediate visual anchor. Users do not need to scan the whole page; their eyes are naturally guided to highlights, active tabs, and primary action items.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight pt-4">
            2. The Value of Generous Spacing
          </h2>
          <p>
            Negative space is a functional layout utility. It allows components to breathe, lowering cognitive fatigue and allowing readers to easily digest paragraphs, grids, and technical specifications.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight pt-4">
            3. Subtle Micro-animations
          </h2>
          <p>
            Over-designed pages have scrolling elements flying in from all directions. A high-end minimal site relies on micro-animations: smooth transitions, hover rolls, and gentle spring-loaded followers. They confirm user interaction without causing distraction.
          </p>
        </div>
      )
    },
    "maximizing-conversion-briefing-forms": {
      title: "Maximizing conversion rates with custom briefing forms",
      subtitle: "Analyzing onboarding layouts that turn casual visitors into high-value clients.",
      category: "Strategy",
      date: "Apr 15, 2026",
      readTime: "6 Min",
      contentHtml: (
        <div className="space-y-6 text-white/70 leading-relaxed text-sm md:text-base">
          <p className="drop-cap">
            Bulky inputs kill conversion metrics. Traditional forms with multi-column card headers and dozens of inputs trigger friction. Modern briefing layouts prioritize conversational questions, inline underlines, and quick budget selections.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight pt-4">
            1. Minimizing Inputs via Inline Editing
          </h2>
          <p>
            Instead of standard boxes, use borders underneath that resemble writing fields. This feels lighter and mimics the sensation of writing a letter, making the onboarding experience feel personal rather than bureaucratic.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight pt-4">
            2. Segmenting Budget & Options with Tiles
          </h2>
          <p>
            Users dislike typing numbers. Predefining selection ranges using clear tiles allows prospects to submit their requirements in a single click, dramatically improving completion rates.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight pt-4">
            3. Setting Immediate Expectation
          </h2>
          <p>
            Always clarify what happens next. A simple microcopy explaining that I reply within 24 hours to schedule a kickoff session eliminates uncertainty and boosts user trust.
          </p>
        </div>
      )
    }
  }

  const article = articles[slug]

  if (!article) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-[#c9e265] selection:text-black scroll-smooth pt-32">
      <Navigation />

      <article className="mx-auto max-w-3xl px-6 pb-28 space-y-12">
        {/* Back Button */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-white/40 hover:text-[#c9e265] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>BACK TO ARTICLES</span>
          </Link>
        </div>

        {/* Metadata Header */}
        <div className="flex flex-wrap gap-4 text-xs font-mono text-white/40 border-b border-white/5 pb-6">
          <span className="flex items-center gap-1.5 text-[#c9e265] font-semibold">
            <Tag className="w-3.5 h-3.5" />
            {article.category.toUpperCase()}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime} READ TIME
          </span>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.15] text-white">
            {article.title}
          </h1>
          <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light">
            {article.subtitle}
          </p>
        </div>

        {/* Content body */}
        <div className="border-t border-white/5 pt-8">
          {article.contentHtml}
        </div>
      </article>

      <ContactSection />
      <Footer />
      <FloatingWidgets />
    </main>
  )
}
