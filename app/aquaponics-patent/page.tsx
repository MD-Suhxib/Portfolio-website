"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Eye } from "lucide-react"

export default function AquaponicsPatentPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white selection:bg-[#c9e265] selection:text-black font-sans relative">
      {/* Floating Control Panel */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-black/70 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-2xl transition-all hover:border-[#c9e265]/20">
        {/* Back Link */}
        <Link href="/" className="flex items-center gap-1.5 text-white/75 hover:text-white transition-colors text-xs font-mono font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
        
        {/* Divider */}
        <span className="w-[1px] h-4 bg-white/15" />

        {/* View Patent CTA */}
        <a
          href="https://integrated-patent.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold text-black bg-[#c9e265] hover:bg-[#c9e265]/90 transition-all px-4 py-1.5 rounded-full shadow-md shadow-[#c9e265]/10 active:scale-95"
        >
          <Eye className="w-3.5 h-3.5" />
          View Patent
        </a>
      </div>

      {/* Full Screen Image Content */}
      <div className="w-full relative bg-[#070707]">
        <Image
          src="/Revised-Aquaponics.png"
          alt="Integrated Aquaponics System Mockup"
          width={1920}
          height={2400}
          className="w-full h-auto block"
          priority
        />
      </div>
    </main>
  )
}
