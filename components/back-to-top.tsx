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
            className={`bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg mb-2 overflow-hidden transition-all duration-300 ${\
              isMenuTransitioning ? "opacity-0 transform translate-y\
