"use client"
import Image from "next/image"
import Link from "next/link"

interface ProjectItemProps {
  id: string
  title: string
  image: string
  tags: string[]
  role: string
  timeline: string
  description: string
}

export default function ProjectItem({ id, title, image, tags, role, timeline, description }: ProjectItemProps) {
  return (
    <div className="project-container py-16 border-b border-border last:border-b-0">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left side - Project Details (40%) */}
        <div className="md:col-span-5 space-y-6">
          {/* Project Title - smaller size */}
          <h3 className="text-xl md:text-2xl font-normal leading-tight">{title}</h3>

          {/* Project Description */}
          <p className="text-base text-foreground leading-relaxed">{description}</p>

          {/* Tags - more subtle */}
          <div className="text-sm text-muted-foreground">{tags.join(", ")}</div>

          {/* View Project Link */}
          <Link
            href={`/projects/${title.toLowerCase().replace(/\s+/g, "-")}`}
            className="inline-block text-sm border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
          >
            View Project
          </Link>
        </div>

        {/* Right side - Project Image (55%) */}
        <div className="md:col-span-7 relative overflow-hidden">
          <Link href={`/projects/${title.toLowerCase().replace(/\s+/g, "-")}`}>
            <div className="relative overflow-hidden rounded-lg project-image">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                width={800}
                height={500}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
