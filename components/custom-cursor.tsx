"use client"
import { useEffect, useRef, useState } from "react"

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      // Check if the target is an Element before using closest
      if (e.target instanceof Element) {
        if (e.target.closest(".project-thumbnail")) {
          setIsHovering(true)
        } else {
          setIsHovering(false)
        }
      }
    }

    // Add event listeners
    document.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseover", handleMouseOver)

    // Hide default cursor
    document.body.style.cursor = "none"

    return () => {
      document.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseover", handleMouseOver)
      document.body.style.cursor = "auto"
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-50 transition-all duration-300 ease-out"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Small following dot */}
      <div
        className={`rounded-full transition-all duration-300 ease-out ${
          isHovering ? "opacity-0 scale-0" : "opacity-100 scale-100"
        }`}
        style={{
          width: "12px",
          height: "12px",
          background: "linear-gradient(135deg, #ff6b9d 0%, #4ecdc4 100%)",
        }}
      />

      {/* Large glass button on hover */}
      <div
        className={`absolute inset-0 rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-sm font-medium transition-all duration-300 ease-out ${
          isHovering ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
        style={{
          width: "120px",
          height: "120px",
          background: "rgba(255, 255, 255, 0.1)",
          transform: "translate(-50%, -50%)",
        }}
      >
        View Project
      </div>
    </div>
  )
}
