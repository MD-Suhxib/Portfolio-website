"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-20 bg-transparent border-t border-white/5 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16">
          
          {/* Column 1: Brand details */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white">
              <span>MD Suhaib</span>
              <span className="text-[#c9e265]">S.</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#c9e265] mt-2 animate-pulse" />
            </Link>
            <p className="text-white/50 text-sm max-w-xs leading-relaxed">
              Full-Stack AI Engineer based in{" "}
              <span className="font-serif italic text-[#c9e265] font-normal">
                Bangalore.
              </span>
            </p>
          </div>

          {/* Column 2: Services Sitemap */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Services</div>
            <ul className="space-y-2.5">
              {["Web Interfaces", "Data Analyst", "AI & ML", "Automation"].map((srv) => (
                <li key={srv}>
                  <Link href="#services" className="text-xs text-white/50 hover:text-[#c9e265] transition-colors">
                    {srv}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Sitemap */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Sitemap</div>
            <ul className="space-y-2.5">
              {["About", "Work", "Services", "Process", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-xs text-white/50 hover:text-[#c9e265] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Connect</div>
            <ul className="space-y-2.5 text-xs text-white/50">
              <li>
                <a href="mailto:mohammedsuhaib.0294@gmail.com" className="hover:text-[#c9e265] transition-colors">
                  mohammedsuhaib.0294@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-white/30">Studio Base:</span>
                <span>Bangalore, Karnataka, IN</span>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <a
                  href="https://github.com/MD-Suhxib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono text-white/30 hover:text-[#c9e265] hover:border-[#c9e265] border border-white/5 bg-[#121212] px-2 py-1 rounded transition-colors"
                >
                  GITHUB
                </a>
                <a
                  href="https://www.linkedin.com/in/md-suhaib/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono text-white/30 hover:text-[#c9e265] hover:border-[#c9e265] border border-white/5 bg-[#121212] px-2 py-1 rounded transition-colors"
                >
                  LINKEDIN
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-white/30">
          <div className="flex flex-wrap items-center gap-2.5">
            <span>© 2026 MD SUHAIB S.</span>
            <span className="text-white/10">|</span>
            <Link href="#" className="hover:text-white transition-colors">IMPRINT</Link>
            <Link href="#" className="hover:text-white transition-colors">PRIVACY</Link>
            <Link href="#" className="hover:text-white transition-colors">TERMS</Link>
          </div>
          <div>
            <span>BUILT IN INDIA</span>
          </div>
        </div>

      </div>
    </footer>
  )
}