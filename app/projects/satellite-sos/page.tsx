"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import BackToTop from "@/components/back-to-top"
import UserCarousel from "@/components/user-carousel"
import DesignProcess from "@/components/design-process"
import VersionToggle from "@/components/version-toggle"

export default function SatelliteSOS() {
  const sections = [
    { id: "problem", name: "Problem" },
    { id: "design-process", name: "Design Process" },
    { id: "user-research", name: "User Research" },
    { id: "version-toggle", name: "Versions" },
    { id: "making-real", name: "Making It Real" },
    { id: "impact", name: "Impact" },
  ]

  const versionData = {
    title: "Evaluate with different teams",
    description:
      "Several UI iterations were created for the project. Designers and PMs worked together to evaluate each version with different teams to gather feedback and refine the solution.",
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
        label: "V4",
        image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop",
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
              Emergency Communication
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-normal mb-4">Satellite SOS</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Connecting users to emergency services when they do not have network coverage
          </p>
        </div>
      </div>

      {/* Hero Images */}
      <div className="w-full bg-white dark:bg-black">
        <div className="max-w-[80%] mx-auto">
          <Image
            src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop"
            alt="Satellite SOS hero image"
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
                Satellite SOS was introduced on the Pixel 8 series in 2023. It allows users to connect to emergency
                services when they do not have network coverage. This feature provides peace of mind to users in remote
                areas where traditional cellular networks might not reach.
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
                  <p className="text-sm">Figma, Protopie, After Effects</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Client</p>
                  <p className="text-sm">Google</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Year</p>
                  <p className="text-sm">Q2 2023 - Q2 2024</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Team</p>
                  <p className="text-sm">Pixel Team, Android, UI/UX Team</p>
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
              <h2 className="text-[22px] font-normal">Problem space</h2>
            </div>
            <div className="md:col-span-6">
              <p className="text-[16px] leading-relaxed mb-6">
                Most of the world population is covered by a mobile broadband network, but that does not mean there is
                full connectivity in wilderness areas or remote areas where there is cellular coverage.
              </p>
              <p className="text-[16px] leading-relaxed">
                Even if there may be cell signal in some areas with satellites, this can be spotty, unreliable and the
                service might have limited using standard cellular networks. In emergency situations, this can be life
                threatening.
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
              <h2 className="text-[22px] font-normal">Making it real</h2>
            </div>
            <div className="md:col-span-6">
              <p className="text-[16px] leading-relaxed">
                One of the challenges was the get-up-and-testing the interface in remote locations. Since we cannot
                really test with the real satellite connection, we needed to create a simulation environment that would
                be as close as possible to the existing experience.
              </p>
            </div>
          </div>
          <div className="w-full">
            <Image
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop"
              alt="Making it real"
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
              <h2 className="text-[22px] font-normal">Impact</h2>
              <h3 className="text-3xl font-normal mt-2">Giving peace of mind to millions</h3>
            </div>
            <div className="md:col-span-6">
              <p className="text-[16px] leading-relaxed">
                Satellite SOS was installed on Pixel 9 devices. It is a feature on the Pixel 9 series, a leading Android
                phone that sells to an estimated 20 million users in the US.
              </p>
            </div>
          </div>
          <div className="w-full">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
              alt="Impact"
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
              <h2 className="text-3xl md:text-4xl font-normal">Satellite SOS</h2>
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
              <Link href="/projects/figma-plugin" className="block group">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute top-4 left-4 z-10 bg-[#5F7EFF] text-white text-xs px-3 py-1 rounded-full">
                    FEATURED
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop"
                    alt="Figma Plugin"
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-normal">Figma Plugin</h3>
                  <p className="text-gray-500 dark:text-gray-400">Streamlining design workflows</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
