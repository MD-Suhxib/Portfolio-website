"use client";

import React, { useState } from 'react';
import { ExternalLink, Github, Eye, ArrowUpRight, Star } from "lucide-react";

export function WorkSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Agro Chain",
      description: "Connecting Farmers Directly with Buyers for Fair Trade and Sustainable Agriculture",
      image: "/project2.png",
      tags: ["Blockchain", "Web3", "Agriculture"],
      liveUrl: "https://agro-chain.my.canva.site/",
      githubUrl: "https://github.com/MD-Suhxib/Agro-Chain-Retailer.git",
      category: "Blockchain",
      status: "Live",
      // year: "2024"
    },
    {
      title: "Competitor Intel",
      description: "AI-powered competitive analysis platform that delivers comprehensive market intelligence and competitor insights in real-time.",
      image: "/project(3).png",
      tags: ["AI/ML", "Analytics", "SaaS"],
      liveUrl: "#",
      githubUrl: "https://github.com/MD-Suhxib/Competitor-intel.git",
      category: "AI/ML",
      status: "Live",
      // year: "2024"
    },
    {
      title: "PATENT - AQUAPONICS & HYDROPINICS",
      description: "From Quarry to Perfection - Premium stone crafting marketplace with integrated logistics and quality assurance.",
      image: "/project(3).jpeg",
      tags: ["E-commerce", "Logistics", "React"],
      liveUrl: "https://integrated-patent.vercel.app/",
      githubUrl: "https://integrated-patent.vercel.app/",
      category: "E-commerce",
      status: "live",
      // year: "2024"
    },
    {
      title: "Global Apex Business Website",
      description: "From Quarry to Perfection - Premium stone crafting marketplace with integrated logistics and quality assurance.",
      image: "/project4.png",
      tags: ["E-commerce", "Logistics", "React"],
      liveUrl: "https://www.globalapexs.com/",
      githubUrl: "https://github.com/MD-Suhxib/Global-Apex-Website.git",
      category: "E-commerce",
      status: "live",
      // year: "2024"
    },
     {
      title: "Green Scope ",
      description: "From Quarry to Perfection - Premium stone crafting marketplace with integrated logistics and quality assurance.",
      image: "/project5.jpeg",
      tags: ["E-commerce", "Logistics", "React"],
      liveUrl: "https://green-scope.vercel.app/",
      githubUrl: "https://github.com/MD-Suhxib/Green-Scope.git",
      category: "E-commerce",
      status: "live",
      // year: "2024"
    }
    
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Development': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'Completed': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <section id="work" className="py-20 bg-black relative overflow-hidden scroll-mt-28">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 
            className="text-5xl lg:text-6xl font-bold text-white mb-4 animate-flow-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Work</span>
          </h2>
          <p 
            className="text-lg text-gray-400 max-w-3xl mx-auto animate-flow-up"
            style={{ animationDelay: '0.2s' }}
          >
            Projects showcasing my expertise in AI, full-stack development, and innovation.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-xl transition-transform duration-500 hover:-translate-y-1 animate-flow-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Square Image Container */}
              <div className="relative aspect-[4/3] w-full">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Project Title */}
                <div className="absolute bottom-4 left-4 bg-black/60 px-4 py-2 rounded-lg text-white font-semibold text-lg backdrop-blur-md shadow-md">
                  {project.title}
                </div>

                {/* Hover Buttons */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="flex space-x-3">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <button className="p-3 bg-green-600/20 hover:bg-green-600/40 rounded-full border border-green-400 text-green-200 hover:text-white transition">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <button className="p-3 bg-green-600/20 hover:bg-green-600/40 rounded-full border border-green-400 text-green-200 hover:text-white transition">
                        <Github className="w-5 h-5" />
                      </button>
                    </a>
                    <button className="p-3 bg-green-600/20 hover:bg-green-600/40 rounded-full border border-green-400 text-green-200 hover:text-white transition">
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Status & Year */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs rounded-full border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs bg-black/40 text-gray-300 rounded-full border border-gray-600/30">
                    {/* {project.year} */}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}