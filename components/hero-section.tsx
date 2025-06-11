"use client"
import { useEffect, useRef } from "react"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (headingRef.current) {
      // Simple fade-up animation for the entire sentence
      headingRef.current.style.opacity = "0"
      headingRef.current.style.transform = "translateY(50px)"

      setTimeout(() => {
        if (headingRef.current) {
          headingRef.current.style.transition = "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
          headingRef.current.style.opacity = "1"
          headingRef.current.style.transform = "translateY(0px)"
        }
      }, 300)
    }
  }, [])

  const scrollToProjects = () => {
    const projectsSection = document.querySelector(".projects-showcase")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex flex-col justify-center max-w-[90%] mx-auto relative">
      {/* Main heading */}
      <div className="mb-24">
        <h1
          ref={headingRef}
          className="font-normal leading-none"
          style={{
            fontSize: "clamp(32px, 6vw, 80px)",
            lineHeight: "0.95",
            letterSpacing: "-0.04em",
            maxWidth: "90%",
          }}
        >
          Shadmani is a product and interaction designer building human-centered systems at scale.
        </h1>
      </div>

      {/* Three divs with equal spacing */}
      <div className="grid grid-cols-12 gap-12 items-start">
        {/* Work + Role */}
        <div className="col-span-12 md:col-span-4">
          <p className="text-sm lg:text-[20px] mb-1">Current: JumpStartCSR</p>
          <p className="text-sm lg:text-[20px] text-muted-foreground">Role: Lead Product Designer</p>
        </div>

        {/* LinkedIn + Resume */}
        <div className="col-span-12 md:col-span-4">
          <div className="space-y-1">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm lg:text-[20px] hover:opacity-70 transition-opacity"
            >
              LinkedIn
            </a>
            <a href="#" className="block text-sm lg:text-[20px] hover:opacity-70 transition-opacity">
              Resume
            </a>
          </div>
        </div>

        {/* Selected work */}
        <div className="col-span-12 md:col-span-4">
          <button
            onClick={scrollToProjects}
            className="flex items-center space-x-2 text-sm lg:text-[20px] hover:opacity-70 transition-opacity group"
          >
            <span>Selected work</span>
            <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-1" />
          </button>
          <p className="text-sm lg:text-[20px] text-muted-foreground mt-2">2020 - Present</p>
        </div>
      </div>
    </section>
  )
}
