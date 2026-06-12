import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MD Suhaib S. · Software Engineer & AI ML Developer',
  description: 'Software Engineer specializing in AI & Machine Learning, full-stack Next.js web interfaces, data analytics, and automation workflows.',
  keywords: ['software engineer', 'AI', 'machine learning', 'nextjs', 'react', 'web developer', 'bangalore', 'data analyst'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="text-white font-sans antialiased relative bg-[#090909]">
        <div className="grain-overlay" />
        
        {/* Wavy neon background graphics */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#090909]">
          <svg className="absolute w-full h-full opacity-60" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            {/* Top-right spotlight */}
            <circle cx="950" cy="50" r="500" fill="url(#neonGlow)" />
            
            {/* First diagonal wave glow */}
            <path d="M 200 -100 Q 650 350 1100 550" stroke="#c9e265" strokeWidth="15" strokeOpacity="0.08" filter="url(#glowBlur)" />
            <path d="M 200 -100 Q 650 350 1100 550" stroke="#c9e265" strokeWidth="2" strokeOpacity="0.2" />
            <path d="M 200 -100 Q 650 350 1100 550" stroke="#ffffff" strokeWidth="0.6" strokeOpacity="0.3" />
            
            {/* Second bottom-left wave glow */}
            <path d="M -100 550 Q 250 850 750 1100" stroke="#c9e265" strokeWidth="10" strokeOpacity="0.06" filter="url(#glowBlur)" />
            <path d="M -100 550 Q 250 850 750 1100" stroke="#c9e265" strokeWidth="1" strokeOpacity="0.15" />

            <defs>
              <radialGradient id="neonGlow" cx="950" cy="50" r="500" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#c9e265" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#c9e265" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#c9e265" stopOpacity="0" />
              </radialGradient>
              <filter id="glowBlur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="35" />
              </filter>
            </defs>
          </svg>
        </div>

        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
