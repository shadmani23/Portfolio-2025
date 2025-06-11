"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: "satellite-sos",
    title: "Pixel Satellite SOS",
    description: "Emergency Satellite Messaging",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop",
    status: "SHIPPED",
    year: "2023",
  },
  {
    id: "figma-plugin",
    title: "Design System Manager",
    description: "Figma Plugin for Design Systems",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
    status: "SHIPPED",
    year: "2022",
  },
  {
    id: "susa-agency",
    title: "Susa Agency",
    description: "Brand Identity & Website",
    image: "/placeholder.svg?height=600&width=800",
    status: "SHIPPED",
    year: "2022",
  },
  {
    id: "seven-studio",
    title: "Seven Studio",
    description: "Photography Platform",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop",
    status: "SHIPPED",
    year: "2021",
  },
]

export default function ProjectsGrid() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <section className="py-24 max-w-[80%] mx-auto">
      <h2 className="text-2xl font-normal mb-12">Selected Projects</h2>

      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.id}`}
            key={project.id}
            className="block group"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative overflow-hidden rounded-lg mb-4">
              {project.status && (
                <div className="absolute top-4 left-4 z-10 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                  {project.status}
                </div>
              )}
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={500}
                className={`w-full h-auto object-cover transition-transform duration-700 ${
                  hoveredProject === project.id ? "scale-105" : ""
                }`}
              />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-normal">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
