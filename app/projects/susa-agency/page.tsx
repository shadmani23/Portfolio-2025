"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import BackToTop from "@/components/back-to-top"
import UserCarousel from "@/components/user-carousel"
import DesignProcess from "@/components/design-process"
import VersionToggle from "@/components/version-toggle"

export default function SusaAgency() {
  // Navigation sections for this specific project
  const sections = [
    { id: "problem", name: "Problem" },
    { id: "design-process", name: "Design Process" },
    { id: "user-research", name: "User Research" },
    { id: "version-toggle", name: "Versions" },
    { id: "approach", name: "Approach" },
    { id: "design", name: "Design" },
    { id: "results", name: "Results" },
  ]

  // Version toggle data
  const versionData = {
    title: "Brand Identity Iterations",
    description:
      "Several brand identity concepts were created for Susa Agency. We worked closely with the client to evaluate each version and refine the solution.",
    versions: [
      {
        id: "v1",
        label: "Concept 1",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        id: "v2",
        label: "Concept 2",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        id: "v3",
        label: "Concept 3",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        id: "v4",
        label: "Final",
        image: "/placeholder.svg?height=600&width=800",
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
            <span className="inline-block bg-[#FF6B00] text-white text-xs px-3 py-1 rounded-full">Brand Identity</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-normal mb-4">Susa Agency</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            A comprehensive brand identity and website design for a creative agency based in London
          </p>
        </div>
      </div>

      {/* Hero Images */}
      <div className="w-full bg-white dark:bg-black">
        <div className="max-w-[80%] mx-auto">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Susa Agency hero image"
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
                Susa Agency approached us to develop a comprehensive brand identity and website that would position them
                as a premium creative agency in the competitive London market. They needed a distinctive visual language
                that would appeal to high-end clients while showcasing their innovative approach to design and
                marketing.
              </p>
            </div>
            <div className="md:col-span-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Product design</p>
                  <p className="text-sm">Brand Design</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Product management</p>
                  <p className="text-sm">Brand Strategy</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Development</p>
                  <p className="text-sm">Website Development</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Tools</p>
                  <p className="text-sm">Figma, Adobe Suite, Webflow</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Client</p>
                  <p className="text-sm">Susa Agency</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Year</p>
                  <p className="text-sm">July '21 - Feb '22</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Team</p>
                  <p className="text-sm">Brand Team, Web Development</p>
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
                Susa Agency needed to stand out in London's saturated creative agency market while appealing to luxury
                and high-end clients.
              </p>
              <p className="text-[16px] leading-relaxed">
                The agency had previously relied on word-of-mouth referrals but needed a stronger brand presence to
                scale their business. Their existing visual identity lacked cohesion and failed to communicate their
                premium positioning and creative capabilities.
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

      {/* Approach Section */}
      <div className="w-full bg-white dark:bg-black py-16" id="approach">
        <div className="max-w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-6">
              <h2 className="text-[22px] font-normal">Our Approach</h2>
            </div>
            <div className="md:col-span-6">
              <p className="text-[16px] leading-relaxed mb-6">
                We conducted extensive market research, competitor analysis, and stakeholder interviews to understand
                Susa's unique positioning and target audience preferences.
              </p>
              <p className="text-[16px] leading-relaxed">
                We developed a comprehensive brand strategy that defined Susa's brand values, personality, positioning,
                and messaging framework to guide all creative decisions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Design Section */}
      <div className="w-full bg-white dark:bg-black py-16" id="design">
        <div className="max-w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-6">
              <h2 className="text-[22px] font-normal">The Design</h2>
            </div>
            <div className="md:col-span-6">
              <p className="text-[16px] leading-relaxed">
                We created a sophisticated visual identity with a minimalist logo, premium color palette, and custom
                typography that reflected Susa's creative expertise and premium positioning. The website features a
                clean, modern design with smooth animations, intuitive navigation, and an immersive portfolio showcase.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Brand Identity"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Website Design"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Design Detail 1"
                width={400}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Design Detail 2"
                width={400}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Design Detail 3"
                width={400}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="w-full bg-white dark:bg-black py-16" id="results">
        <div className="max-w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-6">
              <h2 className="text-[22px] font-normal">Results & Impact</h2>
              <h3 className="text-3xl font-normal mt-2">Elevating the brand</h3>
            </div>
            <div className="md:col-span-6">
              <p className="text-[16px] leading-relaxed">
                The new brand identity and website have completely transformed how potential clients perceive Susa
                Agency. They've seen a 40% increase in inbound client inquiries, won 3 major industry awards, and
                experienced a 25% increase in average project value.
              </p>
            </div>
          </div>
          <div className="w-full">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Results & Impact"
              width={1200}
              height={600}
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
              <h2 className="text-3xl md:text-4xl font-normal">Susa Agency</h2>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-[22px] font-normal mb-4">Request a case study</h3>
              <p className="text-[16px] text-gray-500 dark:text-gray-400 mb-8">
                Want to learn more about this project? Get in touch to request a case study.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#FF6B00] text-white rounded-full hover:bg-[#E05A00] transition-colors"
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
              <Link href="/projects/seven-studio" className="block group">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute top-4 left-4 z-10 bg-[#5F7EFF] text-white text-xs px-3 py-1 rounded-full">
                    FEATURED
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop"
                    alt="Seven Studio"
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-normal">Seven Studio</h3>
                  <p className="text-gray-500 dark:text-gray-400">Photography Platform</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
