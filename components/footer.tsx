import Link from "next/link"
import { Github, Linkedin, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">Mohammed Suhaib S.</h3>
            <p className="text-gray-400">A Full-Stack AI Engineer</p>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              href="https://github.com/MD-Suhxib"
              className="p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-green-500/20 transition-all duration-200 group"
            >
              <Github className="w-5 h-5 text-gray-300 group-hover:text-green-400" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/md-suhaib/"
              className="p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-green-500/20 transition-all duration-200 group"
            >
              <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-green-400" />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-green-500/20 transition-all duration-200 group"
            >
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 text-green-500 mx-2" /> by MD Suhaib S. © 2024
          </p>
        </div>
      </div>
    </footer>
  )
}
