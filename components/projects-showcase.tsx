"use client"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: "01",
    title: "Satellite SOS",
    description:
      "Connecting users to emergency services when they do not have network coverage. Emergency communication system for remote areas.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop",
    tags: ["UX Design", "Product Design"],
    slug: "satellite-sos",
  },
  {
    id: "02",
    title: "Design System Manager",
    description:
      "A Figma plugin that streamlines design system management and component updates across multiple files.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
    tags: ["Product Design", "Development"],
    slug: "figma-plugin",
  },
  {
    id: "03",
    title: "Susa Agency",
    description: "A comprehensive brand identity and website design for a creative agency based in London.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6qY2ZdOqbmoSAIs6NFK39svse5fWr7.png",
    tags: ["Website Design", "Brand Identity"],
    slug: "susa-agency",
  },
]

export default function ProjectsShowcase() {
  return (
    <section className="projects-showcase py-24">
      <div className="max-w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left side - Selected Work heading (4/12 columns) */}
          <div className="md:col-span-4">
            <h2 className="flex items-center text-sm font-normal">
              <span className="transform -rotate-45 inline-block mr-2">↓</span> Selected Work
            </h2>
          </div>

          {/* Right side - Projects list (8/12 columns) */}
          <div className="md:col-span-8">
            <div className="space-y-16">
              {projects.map((project) => (
                <div key={project.id} className="project-item">
                  {/* Project Image */}
                  <Link href={`/projects/${project.slug}`} className="block group">
                    <div className="relative h-[400px] overflow-hidden rounded-lg mb-6 project-thumbnail">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </Link>

                  {/* Project Details */}
                  <div className="flex justify-between items-start">
                    <div className="flex-1 pr-8">
                      <h3 className="text-xl font-normal mb-2">{project.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">{project.tags.join(", ")}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
