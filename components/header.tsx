"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./theme-toggle"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = isOpen ? "auto" : "hidden"
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <>
      <header className="relative w-full z-50 py-6 bg-background">
        <div className="max-w-[90%] mx-auto flex justify-between items-center">
          <div>
            <Link href="/" className="inline-block">
              <div
                className="w-6 h-6 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #ff6b9d 0%, #4ecdc4 100%)",
                }}
              />
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-8">
              <Link href="/about" className="text-sm font-normal transition-all duration-300 hover:opacity-80">
                About
              </Link>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-normal transition-all duration-300 hover:opacity-80"
              >
                LinkedIn
              </a>
            </nav>

            <ThemeToggle />

            <button className="md:hidden z-50" onClick={toggleMenu} aria-label={isOpen ? "Close menu" : "Open menu"}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="fixed inset-0 bg-background flex flex-col justify-center items-center z-40"
              >
                <nav className="flex flex-col space-y-8 items-center">
                  <Link
                    href="/about"
                    className="text-3xl font-medium transition-all duration-300 hover:opacity-80"
                    onClick={toggleMenu}
                  >
                    About
                  </Link>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl font-medium transition-all duration-300 hover:opacity-80"
                    onClick={toggleMenu}
                  >
                    LinkedIn
                  </a>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  )
}
