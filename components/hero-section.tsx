import Image from "next/image"
import { Download, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 pulse-green"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 pulse-green delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-lime-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 pulse-green delay-500"></div>
      </div>

      <div className="absolute inset-0 grid-pattern opacity-40"></div>

      {/* Green gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-emerald-950/30 to-black"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-sm text-green-300 font-medium">Welcome to my portfolio</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Hi there! I am
                </span>
                <br />
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                  Suhaib.
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                A <span className="text-green-400 font-semibold">Final year Software Engineer</span> specializing in{" "}
                <span className="text-emerald-400 font-semibold">AI & Machine Learning</span>, crafting intelligent
                solutions for tomorrow's challenges.
              </p>
            </div>
           <div className="flex flex-col sm:flex-row gap-4">
  <a
    href="https://drive.google.com/file/d/1wMIVuq5dBe-P5-9GOckU4h7tj8XYr6Gw/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      size="lg"
      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-0 shadow-lg shadow-green-500/25 group"
    >
      <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
      Visit CV
    </Button>
  </a>

  <a href="#work">
    <Button
      size="lg"
      variant="outline"
      className="border-green-500/50 text-green-300 hover:bg-green-500/10 hover:text-white hover:border-green-400 group"
    >
      View Projects
      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
    </Button>
  </a>
</div>



            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Dev</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">AI/ML</div>
                <div className="text-sm text-gray-400">Enthusiast</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative float-animation">
            <div className="relative w-full max-w-md mx-auto">
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 rounded-3xl blur-sm opacity-75 glow-animation"></div>

              {/* Image container */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-2">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/hero-image.jpeg?height=500&width=400"
                    alt="MD Suhaib S. - Software Engineer"
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover"
                    priority
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/25 animate-pulse">
                <span className="text-white font-bold text-sm">AI/ML</span>
              </div>

              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/25 animate-pulse delay-1000">
                <span className="text-white font-bold text-xs">DEV</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
