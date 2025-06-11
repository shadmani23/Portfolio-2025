import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    id: "01",
    title: "Satellite SOS",
    slug: "satellite-sos",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop",
    tags: ["UX Design", "Product Design"],
    description: "Emergency communication system for Pixel phones when there's no cellular coverage",
  },
  {
    id: "02",
    title: "Figma Plugin",
    slug: "figma-plugin",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
    tags: ["Product Design", "Development"],
    description: "Design system management tool that streamlines component updates across files",
  },
  {
    id: "03",
    title: "Susa Agency",
    slug: "susa-agency",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Website Design", "Brand Identity"],
    description: "A comprehensive brand identity and website design for a creative agency based in London.",
  },
  {
    id: "04",
    title: "Seven Studio",
    slug: "seven-studio",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Website Design", "Website Development"],
    description: "A minimalist website design and development project for a photography studio.",
  },
  {
    id: "05",
    title: "Duke Portfolio",
    slug: "duke-portfolio",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Website Design"],
    description: "A portfolio website design for a digital artist showcasing their work in an elegant and modern way.",
  },
  {
    id: "06",
    title: "Levi Portfolio",
    slug: "levi-portfolio",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Website Design", "Brand Identity"],
    description: "A brand identity and portfolio website for a fashion photographer with a focus on minimalism.",
  },
]

export default function WorkPage() {
  return (
    <div className="px-6 md:px-12 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl mb-8">Work</h1>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row">
                <div className="project-number text-xs text-gray-500 mr-6 mb-4 md:mb-0">{project.id}</div>

                <div className="flex-1">
                  <Link href={`/projects/${project.slug}`}>
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={500}
                        className="project-image w-full h-auto object-cover"
                      />
                    </div>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <h3 className="text-lg font-normal">{project.title}</h3>
                      <p className="text-sm text-gray-300 md:col-span-2">{project.description}</p>
                    </div>

                    <div className="mt-4 text-xs text-gray-500">{project.tags.join(", ")}</div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
