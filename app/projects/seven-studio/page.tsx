"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import BackToTop from "@/components/back-to-top"
import UserCarousel from "@/components/user-carousel"
import DesignProcess from "@/components/design-process"
import VersionToggle from "@/components/version-toggle"

export default function SevenStudio() {
  // Navigation sections for this specific project
  const sections = [
    { id: "problem", name: "Problem" },
    { id: "design-process", name: "Design Process" },
    { id: "user-research", name: "User Research" },
    { id: "version-toggle", name: "Versions" },
    { id: "solution", name: "Solution" },
    { id: "results", name: "Results" },
  ]

  // Version toggle data
  const versionData = {
    title: "Design Iterations",
    description:
      "Several design concepts were created for the photography platform. We worked closely with the client to evaluate each version and refine the solution.",
    versions: [
      {
        id: "v1",
        label: "Concept 1",
        image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=2074&auto=format&fit=crop",
      },
      {
        id: "v2",
        label: "Concept 2",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop",
      },
      {
        id: "v3",
        label: "Concept 3",
        image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "v4",
        label: "Final",
        image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=2074&auto=format&fit=crop",
      },
    ],
  }

  return (
    <div>
      <BackToTop sections={sections} />

      {/* Hero Section */}
      <div className="w-full bg-white dark:bg-black">
        <div className="max-w-[80%] mx-auto pt-24 text-center">
          <div className="mb-4">
            <span className="inline-block bg-[#000000] text-white text-xs px-3 py-1 rounded-full">
              Photography Platform
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-normal mb-4">Seven Studio</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            A minimalist website design and development project for a photography studio
          </p>
        </div>
      </div>

      {/* Hero Images */}
      <div className="w-full bg-white dark:bg-black">
        <div className="max-w-[80%] mx-auto">
          <Image
            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop"
            alt="Seven Studio hero image"
            width={1400}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Project Details */}
      <div className="w-full bg-white dark:bg-black py-16">
        <div className="max-w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-6">
              <p className="text-base leading-relaxed mb-6">
                Seven Studio is a photography platform designed for professional photographers to showcase their work in
                a minimalist and elegant way. The project focused on creating a clean, distraction-free environment that
                puts the photography front and center while still providing all necessary information about the studio's
                services.
              </p>
            </div>
            <div className="md:col-span-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Product design</p>
                  <p className="text-sm">UI/UX Design</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Product management</p>
                  <p className="text-sm">Product Strategy</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Development</p>
                  <p className="text-sm">Frontend Development</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Tools</p>
                  <p className="text-sm">Figma, React, Next.js</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Client</p>
                  <p className="text-sm">Seven Studio</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Year</p>
                  <p className="text-sm">Jan '22 - May '22</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Team</p>
                  <p className="text-sm">Design Team, Frontend Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="w-full bg-white dark:bg-black py-16" id="problem">
        <div className="max-w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-6">
              <h2 className="text-[22px] font-normal">The Challenge</h2>
            </div>
            <div className="md:col-span-6">
              <p className="text-[16px] leading-relaxed mb-6">
                Professional photographers need a clean, minimalist platform to showcase their work without
                distractions, while still providing necessary information about their services.
              </p>
              <p className="text-[16px] leading-relaxed">
                Most photography websites are either too complex with unnecessary features or too simple without proper
                organization. Seven Studio needed a balance between aesthetics and functionality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Design Process Section */}
      <div id="design-process">
        <DesignProcess />
      </div>

      {/* User Research Section */}
      <div id="user-research">
        <UserCarousel />
      </div>

      {/* Version Toggle Section */}
      <div id="version-toggle">
        <VersionToggle
          title={versionData.title}
          description={versionData.description}
          versions={versionData.versions}
        />
      </div>

      {/* Solution Section */}
      <div className="w-full bg-white dark:bg-black py-16" id="solution">
        <div className="max-w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-6">
              <h2 className="text-[22px] font-normal">The Solution</h2>
            </div>
            <div className="md:col-span-6">
              <p className="text-[16px] leading-relaxed mb-6">
                We created a minimalist website with a focus on typography, whitespace, and image display. The design
                emphasizes the photography while providing intuitive navigation and clear information about the studio's
                services.
              </p>
              <p className="text-[16px] leading-relaxed">
                Key features include full-screen image galleries with minimal UI elements, progressive image loading for
                optimal performance, responsive design that works beautifully on all devices, subtle animations that
                enhance the viewing experience, and an integrated contact and booking system.
              </p>
            </div>
          </div>
          <div className="w-full">
            <Image
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop"
              alt="The Solution"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="w-full bg-white dark:bg-black py-16" id="results">
        <div className="max-w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-6">
              <h2 className="text-[22px] font-normal">Results & Impact</h2>
              <h3 className="text-3xl font-normal mt-2">Elevating visual storytelling</h3>
            </div>
            <div className="md:col-span-6">
              <p className="text-[16px] leading-relaxed">
                Seven Studio's new website increased their client inquiries by 45% and improved the average time spent
                on the site by 3 minutes. The platform now serves as a benchmark for photography portfolio websites,
                with a client satisfaction rating of 4.9/5.
              </p>
            </div>
          </div>
          <div className="w-full">
            <Image
              src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=2074&auto=format&fit=crop"
              alt="Results & Impact"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Request Case Study */}
      <div className="w-full bg-white dark:bg-black py-16">
        <div className="max-w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-6">
              <h2 className="text-3xl md:text-4xl font-normal">Seven Studio</h2>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-[22px] font-normal mb-4">Request a case study</h3>
              <p className="text-[16px] text-gray-500 dark:text-gray-400 mb-8">
                Want to learn more about this project? Get in touch to request a case study.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#000000] text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                GET IN TOUCH <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Next Project */}
      <div className="w-full bg-white dark:bg-black py-16">
        <div className="max-w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-6">
              <h2 className="text-3xl md:text-4xl font-normal">Next project</h2>
            </div>

            <div className="md:col-span-6">
              <Link href="/projects/satellite-sos" className="block group">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute top-4 left-4 z-10 bg-[#5F7EFF] text-white text-xs px-3 py-1 rounded-full">
                    FEATURED
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop"
                    alt="Satellite SOS"
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-normal">Satellite SOS</h3>
                  <p className="text-gray-500 dark:text-gray-400">Emergency Communication</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
