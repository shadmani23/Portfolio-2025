"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import BackToTop from "@/components/back-to-top"
import UserCarousel from "@/components/user-carousel"
import DesignProcess from "@/components/design-process"
import VersionToggle from "@/components/version-toggle"

export default function FigmaPlugin() {
  const sections = [
    { id: "problem", name: "Problem" },
    { id: "design-process", name: "Design Process" },
    { id: "user-research", name: "User Research" },
    { id: "version-toggle", name: "Versions" },
    { id: "making-real", name: "Making It Real" },
    { id: "impact", name: "Impact" },
  ]

  // Version toggle data
  const versionData = {
    title: "Design Iterations",
    description:
      "Several UI iterations were created for the plugin. Designers and developers worked together to evaluate each version with different teams to gather feedback and refine the solution.",
    versions: [
      {
        id: "v1",
        label: "V1",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BnjSZCnonK17ViNVHGY0c1eTaFIAek.png",
      },
      {
        id: "v2",
        label: "V2",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "v3",
        label: "V3",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "v4",
        label: "Final",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
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
            <span className="inline-block bg-[#5F7EFF] text-white text-xs px-3 py-1 rounded-full">
              Productivity Tool
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-normal mb-4">Design System Manager</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            A Figma plugin that streamlines design system management and component updates
          </p>
        </div>
      </div>

      {/* Hero Images */}
      <div className="w-full bg-white dark:bg-black">
        <div className="max-w-[80%] mx-auto">
          <Image
            src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop"
            alt="Figma Plugin hero image"
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
                The Design System Manager plugin helps design teams maintain consistency across projects by automating
                component updates and providing powerful tools for design system governance.
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
                  <p className="text-sm">Figma, TypeScript, React</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Client</p>
                  <p className="text-sm">Figma</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Year</p>
                  <p className="text-sm">Q3 2022 - Q1 2023</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Team</p>
                  <p className="text-sm">Design Team, Development Team</p>
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
                Design teams struggle to maintain consistency across projects as their design systems evolve. Manual
                updates to components are time-consuming and error-prone, leading to inconsistencies and design debt.
              </p>
              <p className="text-[16px] leading-relaxed">
                Key challenges included time-consuming manual updates to components across files, difficulty tracking
                which files use specific components, inconsistent implementation of design system changes, and poor
                visibility into design system usage and compliance.
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

      {/* Making Real Section */}
      <div className="w-full bg-white dark:bg-black py-16" id="making-real">
        <div className="max-w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-6">
              <h2 className="text-[22px] font-normal">The Solution</h2>
            </div>
            <div className="md:col-span-6">
              <p className="text-[16px] leading-relaxed mb-6">
                We created a Figma plugin that automates the process of updating components across files and provides
                powerful tools for design system governance.
              </p>
              <p className="text-[16px] leading-relaxed">
                Key features include batch component updates across multiple files, component usage analytics and
                visualization, design system compliance reporting, version history and change tracking, and integration
                with design system documentation.
              </p>
            </div>
          </div>
          <div className="w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BnjSZCnonK17ViNVHGY0c1eTaFIAek.png"
              alt="The Solution"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="w-full bg-white dark:bg-black py-16" id="impact">
        <div className="max-w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-6">
              <h2 className="text-[22px] font-normal">Results & Impact</h2>
              <h3 className="text-3xl font-normal mt-2">Transforming design workflows</h3>
            </div>
            <div className="md:col-span-6">
              <p className="text-[16px] leading-relaxed">
                The plugin has been adopted by over 500 design teams globally, with users reporting an 80% reduction in
                time spent on component updates and a 65% improvement in design system compliance. It has received a
                4.9/5 average rating in the Figma Community.
              </p>
            </div>
          </div>
          <div className="w-full">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
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
              <h2 className="text-3xl md:text-4xl font-normal">Figma Plugin</h2>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-[22px] font-normal mb-4">Request a case study</h3>
              <p className="text-[16px] text-gray-500 dark:text-gray-400 mb-8">
                Want to learn more about this project? Get in touch to request a case study.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#5F7EFF] text-white rounded-full hover:bg-[#4A69E8] transition-colors"
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
              <Link href="/projects/susa-agency" className="block group">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute top-4 left-4 z-10 bg-[#5F7EFF] text-white text-xs px-3 py-1 rounded-full">
                    FEATURED
                  </div>
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Susa Agency"
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-normal">Susa Agency</h3>
                  <p className="text-gray-500 dark:text-gray-400">Brand Identity & Website Design</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
