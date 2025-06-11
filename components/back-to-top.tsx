"use client"

import { useState, useEffect } from "react"

interface Section {
  id: string
  name: string
}

interface BackToTopProps {
  sections?: Section[]
}

export default function BackToTop({ sections = [] }: BackToTopProps) {
  const [visible, setVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMenuTransitioning, setIsMenuTransitioning] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }

      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = Math.min(Math.max(window.scrollY / windowHeight, 0), 1)
      setScrollProgress(scrolled)

      // Determine active section
      if (sections.length > 0) {
        const currentPosition = window.scrollY + 200

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i].id)
          if (section && section.offsetTop <= currentPosition) {
            setActiveSection(sections[i].id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    closeMenu()
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      })
    }
    closeMenu()
  }

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu()
    } else {
      setMenuOpen(true)
    }
  }

  const closeMenu = () => {
    setIsMenuTransitioning(true)
    setTimeout(() => {
      setMenuOpen(false)
      setIsMenuTransitioning(false)
    }, 300)
  }

  // Calculate the stroke-dashoffset for the progress circle
  const circleRadius = 18
  const circumference = 2 * Math.PI * circleRadius
  const dashOffset = circumference * (1 - scrollProgress)

  return (
    <div
      className={`fixed right-6 z-40 transition-all duration-300 ${
        visible ? "bottom-6 opacity-100" : "bottom-0 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-end">
        {(menuOpen || isMenuTransitioning) && (
          <div
            className={`bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg mb-2 overflow-hidden transition-all duration-300 ${
              isMenuTransitioning ? "opacity-0 transform translate-y-2" : "opacity-100 transform translate-y-0"
            }`}
          >
            <div className="p-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${
                    activeSection === section.id
                      ? "bg-gray-100 dark:bg-gray-800"
                      : "hover:bg-gray-50 dark:hover:bg-gray-900"
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>
        )}
        <button
          onClick={toggleMenu}
          className="relative w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <svg
            className="w-6 h-6 text-gray-600 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle
              className="text-gray-200 dark:text-gray-700"
              strokeWidth="2"
              stroke="currentColor"
              fill="transparent"
              r={circleRadius}
              cx="12"
              cy="12"
            />
            <circle
              className="text-blue-500"
              strokeWidth="2"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={circleRadius}
              cx="12"
              cy="12"
              transform="rotate(-90 12 12)"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v8M8 12h8"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
