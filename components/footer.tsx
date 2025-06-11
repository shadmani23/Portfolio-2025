"use client"
import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentCatMessage, setCurrentCatMessage] = useState(0)
  const [currentTime, setCurrentTime] = useState("")

  const catMessages = ["mfkjsdhfkjsdhf", "qwertyuiop", "asdfghjkl;", "zxcvbnm,./"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCatMessage((prev) => (prev + 1) % catMessages.length)
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString("en-US", {
        timeZone: "America/Los_Angeles",
        hour12: true,
        hour: "numeric",
        minute: "2-digit",
      })
      setCurrentTime(timeString)
    }

    updateTime()
    const timeInterval = setInterval(updateTime, 60000) // Update every minute

    return () => clearInterval(timeInterval)
  }, [])

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <footer className="border-t border-border py-12">
        <div className="max-w-[90%] mx-auto flex flex-col md:flex-row md:justify-between md:items-end">
          {/* Left side - Location and Time */}
          <div className="mb-8 md:mb-0">
            <div className="text-sm text-muted-foreground">
              <div>Based in Seattle, WA</div>
              <div>USA (GMT-7) • {currentTime}</div>
            </div>
          </div>

          {/* Right side - Cat messages and Colophon */}
          <div className="flex justify-between items-end">
            {/* Cat typing animation */}
            <div className="mr-12">
              <div className="text-sm text-muted-foreground mb-2 font-mono transition-all duration-500">
                {catMessages[currentCatMessage]}
              </div>
              <div className="text-sm text-muted-foreground">
                Words typed by my cat while I worked on this portfolio
              </div>
            </div>

            {/* Colophon */}
            <button
              onClick={openModal}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Colophon
            </button>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div className="relative bg-background border border-border rounded-lg p-8 max-w-md mx-4 transform transition-all duration-300 scale-100 opacity-100">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>

            <h3 className="text-xl font-normal mb-6">Colophon</h3>

            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                This website is built with <strong>Next.js</strong> and <strong>TypeScript</strong>, styled with{" "}
                <strong>Tailwind CSS</strong>, and deployed on <strong>Vercel</strong>.
              </p>

              <p>
                Typography uses <strong>Inter</strong> as the primary typeface, chosen for its excellent readability and
                modern aesthetic across all screen sizes.
              </p>

              <p>
                The design system emphasizes minimal aesthetics, thoughtful spacing, and smooth animations to create an
                engaging user experience while maintaining focus on the content.
              </p>

              <p className="text-xs pt-4 border-t border-border">© 2024 Shadmani Shaikh</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
