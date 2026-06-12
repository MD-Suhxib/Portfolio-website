"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { FloatingWidgets } from "@/components/floating-widgets"
import { ArrowUpRight } from "lucide-react"

export interface BlogPost {
  title: string
  subtitle: string
  category: string
  date: string
  readTime: string
  slug: string
  summary: string
}

export default function BlogListing() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const posts: BlogPost[] = [
    {
      title: "How to optimize Next.js for 100/100 Core Web Vitals",
      subtitle: "A step-by-step guide to achieving flawless Lighthouse scores in modern production architectures.",
      category: "Engineering",
      date: "Jun 12, 2026",
      readTime: "5 Min",
      slug: "optimize-nextjs-lighthouse-100",
      summary: "Achieving a perfect 100 on Google Lighthouse requires meticulous attention to bundle sizes, font loading strategies, image formats, and network caching layouts."
    },
    {
      title: "The power of minimal UI: Why less is always more",
      subtitle: "How subtraction creates attention, focusing the user flow specifically to improve brand conversion metrics.",
      category: "Design",
      date: "May 28, 2026",
      readTime: "4 Min",
      slug: "power-of-minimal-ui",
      summary: "In a world of noise, quiet interfaces stand out. I discuss why high-contrast grids, micro-interactions, and premium typography drive higher engagement."
    },
    {
      title: "Maximizing conversion rates with custom briefing forms",
      subtitle: "Analyzing onboarding layouts that turn casual visitors into high-value clients.",
      category: "Strategy",
      date: "Apr 15, 2026",
      readTime: "6 Min",
      slug: "maximizing-conversion-briefing-forms",
      summary: "Bulky forms kill conversion rates. I explore how minimalist inline text inputs, predefined budget selectors, and visual guides streamline user submission flows."
    }
  ]

  const categories = ["All", "Design", "Engineering", "Strategy"]

  const filteredPosts = selectedCategory === "All"
    ? posts
    : posts.filter(p => p.category === selectedCategory)

  // Featured Post is the first one in the list
  const featuredPost = posts[0]
  // Remaining posts list
  const gridPosts = posts.slice(1)

  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-[#c9e265] selection:text-black scroll-smooth pt-32">
      <Navigation />

      <div className="mx-auto max-w-7xl px-6 pb-28 space-y-16">
        
        {/* Page Header */}
        <div className="space-y-4">
          <span className="font-mono text-xs text-[#c9e265] uppercase tracking-wider font-bold">
            [BLOG] Notizen aus dem Studio
          </span>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
            Notes from the{" "}
            <span className="font-serif italic text-[#c9e265] font-normal">
              Studio.
            </span>
          </h1>
        </div>

        {/* 2-Column Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
          
          {/* Left Column: Stats & Filters */}
          <div className="lg:col-span-4 space-y-10">
            {/* Stats Table */}
            <div className="rounded-xl border border-white/5 bg-[#121212] p-6 space-y-4">
              <span className="font-mono text-[10px] text-white/30 tracking-widest uppercase block">
                [ DATABASE STATUS ]
              </span>
              <div className="divide-y divide-white/5 text-xs font-mono text-white/50">
                <div className="flex justify-between py-2.5">
                  <span>TOTAL ARTICLES</span>
                  <span className="text-white font-semibold">{posts.length}</span>
                </div>
                <div className="flex justify-between py-2.5">
                  <span>CATEGORIES</span>
                  <span className="text-white font-semibold">{categories.length - 1}</span>
                </div>
                <div className="flex justify-between py-2.5">
                  <span>LAST UPDATE</span>
                  <span className="text-[#c9e265] font-semibold">MONTHLY</span>
                </div>
                <div className="flex justify-between py-2.5">
                  <span>LANGUAGE</span>
                  <span className="text-white font-semibold">EN / DE</span>
                </div>
              </div>
            </div>

            {/* Category Filters */}
            <div className="space-y-3">
              <span className="font-mono text-[10px] text-white/30 tracking-widest uppercase block">
                [ FILTER CATEGORY ]
              </span>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold font-mono border transition-all ${
                      selectedCategory === cat
                        ? "bg-[#c9e265] border-[#c9e265] text-black"
                        : "bg-[#121212] border-white/5 text-white/60 hover:text-white hover:border-white/10"
                    }`}
                  >
                    {cat.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Featured Post Card */}
          <div className="lg:col-span-8">
            <div className="space-y-3">
              <span className="font-mono text-[10px] text-white/30 tracking-widest uppercase block">
                [ FEATURED ARTICLE ]
              </span>
              
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group block p-8 md:p-10 rounded-2xl border border-white/5 bg-[#121212] hover:border-[#c9e265]/30 hover:scale-[1.005] hover:shadow-xl hover:shadow-[#c9e265]/5 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9e265]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#c9e265] font-bold">
                      // {featuredPost.category.toUpperCase()}
                    </span>
                    <span className="text-white/40">
                      {featuredPost.date} · {featuredPost.readTime}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white group-hover:text-[#c9e265] transition-colors leading-snug">
                      {featuredPost.title}
                    </h2>
                    <p className="text-white/50 text-sm md:text-base leading-relaxed">
                      {featuredPost.subtitle}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-white/40 text-xs md:text-sm leading-relaxed border-t border-white/5 pt-4">
                    {featuredPost.summary}
                  </p>

                  {/* Footer Link */}
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#c9e265] pt-4">
                    <span>READ ARTICLE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </div>
          </div>

        </div>

        {/* Remaining Grid list of articles */}
        <div className="space-y-6 pt-12 border-t border-white/5">
          <h2 className="font-mono text-xs text-white/30 tracking-widest uppercase">
            [ FROM THE WORKBENCH ]
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.slug}`}
                className="group p-6 md:p-8 rounded-2xl border border-white/5 bg-[#121212] hover:border-[#c9e265]/30 hover:scale-[1.005] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#c9e265] font-bold">
                      // {post.category.toUpperCase()}
                    </span>
                    <span className="text-white/40">
                      {post.date} · {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-[#c9e265] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-white/50 text-xs md:text-sm leading-relaxed">
                    {post.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#c9e265] pt-6 mt-6 border-t border-white/5">
                  <span>READ ARTICLE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>

      <ContactSection />
      <Footer />
      <FloatingWidgets />
    </main>
  )
}
