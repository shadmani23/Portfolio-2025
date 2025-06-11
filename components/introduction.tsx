"use client"
import { useEffect, useRef } from "react"
import { ArrowDown } from "lucide-react"

export default function Introduction() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (headingRef.current) {
      // Split text into words and wrap each in a span
      const text = headingRef.current.textContent || ""
      const words = text.split(" ")

      headingRef.current.innerHTML = words
        .map(
          (word, index) =>
            `<span class="word" style="display: inline-block; opacity: 0; transform: translateY(100px);">${word}</span>`,
        )
        .join(" ")

      // Animate each word with staggered delay
      const wordElements = headingRef.current.querySelectorAll(".word")
      wordElements.forEach((word, index) => {
        setTimeout(() => {
          ;(word as HTMLElement).style.transition = "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
          ;(word as HTMLElement).style.opacity = "1"
          ;(word as HTMLElement).style.transform = "translateY(0px)"
        }, index * 100)
      })
    }
  }, [])

  const scrollToProjects = () => {
    const projectsSection = document.querySelector(".project-container")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="h-screen flex flex-col justify-center px-6 md:px-12 relative">
      {/* Main heading with tighter spacing */}
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

      {/* Bottom section with two separate divs side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left side - Current work */}
        <div>
          <p className="text-base text-foreground mb-2">Current: JumpStartCSR</p>
          <p className="text-base text-muted-foreground mb-4">Role: Lead Product Designer</p>

          {/* LinkedIn and Resume links */}
          <div className="space-y-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-base text-foreground hover:opacity-70 transition-opacity"
            >
              LinkedIn
            </a>
            <a href="#" className="block text-base text-foreground hover:opacity-70 transition-opacity">
              Resume
            </a>
          </div>
        </div>

        {/* Right side - Selected work */}
        <div className="flex items-start justify-between md:justify-end">
          <div>
            <button
              onClick={scrollToProjects}
              className="flex items-center space-x-2 text-base text-foreground hover:opacity-70 transition-opacity group"
            >
              <span>Selected work</span>
              <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-1" />
            </button>
            <p className="text-base text-muted-foreground mt-2">2020 - Present</p>
          </div>
        </div>
      </div>
    </section>
  )
}
