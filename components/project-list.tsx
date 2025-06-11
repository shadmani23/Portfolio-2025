"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: "01",
    title: "FromAtoB Travel App Redesign",
    description:
      "Led the complete redesign of the entire product, covering the web platform, iOS, and Android mobile applications.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Visual Design", "Motion"],
    url: "fromatob.de",
    period: "2019 - 2021",
    slug: "fromatob-travel-app",
  },
  {
    id: "02",
    title: "Better Role Creation",
    description:
      "Leveling up the role creation flow for Rubrik's data security SaaS platform with improved UX and accessibility.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Enterprise SaaS", "UX Research"],
    url: "rubrik.com",
    period: "2021 - 2022",
    slug: "better-role-creation",
  },
  {
    id: "03",
    title: "The Neighborhood Steward",
    description:
      "Redesigning the identity for the Alliance for Pioneer Square to strengthen community engagement and local pride.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Branding", "Website"],
    url: "pioneersquare.org",
    period: "2022",
    slug: "neighborhood-steward",
  },
  {
    id: "04",
    title: "Volatility",
    description:
      "Connecting volunteers with opportunities that match their values and interest through an intuitive mobile platform.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Mobile", "UX"],
    url: "volatility.app",
    period: "2022 - 2023",
    slug: "volatility",
  },
]

export default function ProjectList() {
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-10")
          }
        })
      },
      { threshold: 0.1 },
    )

    const projectElements = document.querySelectorAll(".project-item")
    projectElements.forEach((el) => observer.observe(el))

    return () => {
      projectElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div ref={projectsRef} className="bg-white dark:bg-black pt-24 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-item opacity-0 translate-y-10 transition-all duration-700 ease-out border-b border-border last:border-b-0 py-16"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="grid grid-cols-12 gap-4 mb-8">
              {/* Project title on left */}
              <div className="col-span-12 md:col-span-4">
                <h2 className="text-2xl md:text-3xl font-normal">{project.title}</h2>
              </div>

              {/* Description in middle */}
              <div className="col-span-12 md:col-span-5">
                <p className="text-base text-muted-foreground">{project.description}</p>
              </div>

              {/* Tags on right */}
              <div className="col-span-12 md:col-span-3 text-right">
                <div className="text-sm text-muted-foreground mb-2">{project.tags.join(", ")}</div>
                <div className="text-sm">
                  <span className="text-muted-foreground">{project.url}</span>
                  <br />
                  <span>{project.period}</span>
                </div>
              </div>
            </div>

            {/* Full-width image with rounded corners */}
            <Link href={`/projects/${project.slug}`} className="block">
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
