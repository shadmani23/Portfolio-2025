"use client"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: "01",
    title: "Enliven the Aura",
    subtitle: "Elevating the look and feel of Rubrik's design system websites",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Website", "Visual", "Motion"],
    size: "large",
    position: "top-right",
  },
  {
    id: "02",
    title: "Better Role Creation",
    subtitle: "Leveling up the role creation flow for Rubrik's data security SaaS platform",
    image: "/placeholder.svg?height=400&width=400",
    tags: ["Enterprise SaaS", "UX", "Research"],
    size: "medium",
    position: "left",
  },
  {
    id: "03",
    title: "The Neighborhood Steward",
    subtitle: "Redesigning the identity for the Alliance for Pioneer Square",
    image: "/placeholder.svg?height=400&width=400",
    tags: ["Branding", "Website"],
    size: "medium",
    position: "right",
  },
  {
    id: "04",
    title: "Volatility",
    subtitle: "Connecting volunteers with opportunities that matches their values and interest",
    image: "/placeholder.svg?height=300&width=800",
    tags: ["Mobile", "UX"],
    size: "wide",
    position: "bottom",
  },
]

export default function StaggeredProjects() {
  return (
    <div className="px-6 md:px-12 py-24">
      <div className="mb-12">
        <h2 className="text-sm text-muted-foreground mb-8">Projects</h2>
      </div>

      <div className="grid grid-cols-12 gap-6 auto-rows-min">
        {/* First project - top right, large */}
        <div className="col-span-12 md:col-span-7 md:col-start-6 mb-8">
          <Link href={`/projects/${projects[0].title.toLowerCase().replace(/\s+/g, "-")}`} className="block group">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <Image
                src={projects[0].image || "/placeholder.svg"}
                alt={projects[0].title}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-normal mb-2">{projects[0].title}</h3>
            <p className="text-sm text-muted-foreground mb-2">{projects[0].subtitle}</p>
            <div className="text-xs text-muted-foreground">{projects[0].tags.join(" / ")}</div>
          </Link>
        </div>

        {/* Second project - left side */}
        <div className="col-span-12 md:col-span-5 mb-8">
          <Link href={`/projects/${projects[1].title.toLowerCase().replace(/\s+/g, "-")}`} className="block group">
            <div className="relative overflow-hidden rounded-lg mb-4 bg-gradient-to-br from-blue-500 to-purple-600 p-8">
              <div className="text-white">
                <div className="w-12 h-8 bg-white/20 rounded mb-4"></div>
                <div className="text-sm">New Role</div>
              </div>
            </div>
            <h3 className="text-lg font-normal mb-2">{projects[1].title}</h3>
            <p className="text-sm text-muted-foreground mb-2">{projects[1].subtitle}</p>
            <div className="text-xs text-muted-foreground">{projects[1].tags.join(" / ")}</div>
          </Link>
        </div>

        {/* Third project - right side */}
        <div className="col-span-12 md:col-span-5 md:col-start-8 mb-8">
          <Link href={`/projects/${projects[2].title.toLowerCase().replace(/\s+/g, "-")}`} className="block group">
            <div className="relative overflow-hidden rounded-lg mb-4 bg-gray-800 p-8">
              <div className="text-white">
                <h4 className="text-xl mb-2">Your Neighborhood Steward.</h4>
                <div className="w-8 h-8 bg-orange-500 rounded"></div>
              </div>
            </div>
            <h3 className="text-lg font-normal mb-2">{projects[2].title}</h3>
            <p className="text-sm text-muted-foreground mb-2">{projects[2].subtitle}</p>
            <div className="text-xs text-muted-foreground">{projects[2].tags.join(" / ")}</div>
          </Link>
        </div>

        {/* Fourth project - full width bottom */}
        <div className="col-span-12 mb-8">
          <Link href={`/projects/${projects[3].title.toLowerCase().replace(/\s+/g, "-")}`} className="block group">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <Image
                src={projects[3].image || "/placeholder.svg"}
                alt={projects[3].title}
                width={800}
                height={300}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-normal mb-2">{projects[3].title}</h3>
            <p className="text-sm text-muted-foreground mb-2">{projects[3].subtitle}</p>
            <div className="text-xs text-muted-foreground">{projects[3].tags.join(" / ")}</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
