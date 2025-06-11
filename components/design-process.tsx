"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface ProcessStep {
  number: string
  title: string
  description: string
  image: string
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Research & Discovery",
    description: "Conducted interviews with students to understand their pain points and needs.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Ideation & Concepts",
    description: "Created low-fidelity wireframes to explore different UI patterns and solutions.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Follow directions to correctly align device to connect with a satellite",
    description: "Developed interactive prototypes to test with users and gather feedback.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HWARJvo2BAC9HvCERYzMWTUF1YhMmS.png",
  },
  {
    number: "04",
    title: "And continue messaging services",
    description: "Conducted usability tests to validate the design and identify areas for improvement.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
  },
]

export default function DesignProcess() {
  const [activeStep, setActiveStep] = useState(0)
  const [direction, setDirection] = useState<"left" | "right" | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextStep = () => {
    if (isTransitioning) return
    setDirection("right")
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length)
    }, 300)
  }

  const prevStep = () => {
    if (isTransitioning) return
    setDirection("left")
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveStep((prev) => (prev === 0 ? processSteps.length - 1 : prev - 1))
    }, 300)
  }

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
      }, 600) // Total transition time
      return () => clearTimeout(timer)
    }
  }, [isTransitioning])

  const currentStep = processSteps[activeStep]

  return (
    <div className="w-full py-16 bg-white dark:bg-black" id="design-process">
      <div className="max-w-[80%] mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal mb-12">Design Process</h2>

        <div className="relative overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <div className="flex space-x-4">
              <button
                onClick={prevStep}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5F7EFF] text-white hover:bg-[#4A69E8] transition-colors"
                aria-label="Previous step"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={nextStep}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5F7EFF] text-white hover:bg-[#4A69E8] transition-colors"
                aria-label="Next step"
              >
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="flex items-center space-x-2">
              {processSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (index > activeStep) {
                      setDirection("right")
                    } else if (index < activeStep) {
                      setDirection("left")
                    }
                    setActiveStep(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeStep ? "bg-[#5F7EFF] w-4" : "bg-gray-300 dark:bg-gray-700"
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className={`transition-all duration-300 ${
                isTransitioning
                  ? direction === "right"
                    ? "opacity-0 transform -translate-x-10"
                    : "opacity-0 transform translate-x-10"
                  : "opacity-100 transform translate-x-0"
              }`}
            >
              <div className="relative mb-4">
                <div className="absolute -left-4 -top-16 text-[180px] font-light text-gray-200 dark:text-gray-800 opacity-50 z-0">
                  {currentStep.number}
                </div>
                <div className="relative z-10 pt-8">
                  <h3 className="text-2xl font-normal mb-4">{currentStep.title}</h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 max-w-md">{currentStep.description}</p>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-300 ${
                isTransitioning
                  ? direction === "right"
                    ? "opacity-0 transform -translate-x-full"
                    : "opacity-0 transform translate-x-full"
                  : "opacity-100 transform translate-x-0"
              }`}
            >
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src={currentStep.image || "/placeholder.svg"}
                  alt={currentStep.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
