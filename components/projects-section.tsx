"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Digital Experience",
    category: "Web Design",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
  {
    id: 2,
    title: "Brand Identity",
    category: "Branding",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    category: "Development",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
  {
    id: 4,
    title: "Mobile Application",
    category: "UI/UX",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
]

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Projects</h2>
            <p className="text-gray-300 max-w-xl">
              A collection of my recent work spanning web development, design, and branding.
            </p>
          </div>

          <Link
            href="/projects"
            className="mt-6 md:mt-0 flex items-center space-x-2 text-sm uppercase tracking-wider border-b border-white pb-1 hover:text-gray-300 transition-colors animate-on-scroll"
          >
            <span>View All Projects</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card animate-on-scroll"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={project.link} className="block">
                <div className="relative h-[400px] overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-black/30 z-10 transition-opacity duration-300 hover:opacity-0"></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  <div className="absolute bottom-0 left-0 p-8 z-20">
                    <p className="text-sm uppercase tracking-wider mb-2 text-gray-300">{project.category}</p>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                  </div>

                  <div className="absolute top-6 right-6 z-20">
                    <div
                      className={`rounded-full bg-white/10 backdrop-blur-sm p-3 transition-opacity duration-300 ${activeProject === project.id ? "opacity-100" : "opacity-0"}`}
                    >
                      <ArrowUpRight size={20} className="text-white" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
