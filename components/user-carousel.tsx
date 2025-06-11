"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface UserType {
  name: string
  role: string
  description: string
  technicalLevel: "High" | "Medium" | "Low"
  image: string
  quote: string
}

interface ProcessSlide {
  title: string
  description: string
  content: UserType[]
}

const processSlides: ProcessSlide[] = [
  {
    title: "Understanding the needs of different user types",
    description:
      "Platform has 3 types of users, Data engineers/scientist, team managers, and team partners, each with different goals and levels of technical literacy",
    content: [
      {
        name: "Dan",
        role: "Data engineer/scientist",
        description: "Data engineers/data scientists that is working on the ground on client projects on a daily basis",
        technicalLevel: "High",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop",
        quote: "I want to spend less time on admin tasks, and more on delivering work.",
      },
      {
        name: "Amir",
        role: "Manager",
        description: "The project manager who oversees multiple work-streams on a client project",
        technicalLevel: "Medium",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
        quote: "I want to be aware and resolve any blockers for my team.",
      },
      {
        name: "Sally",
        role: "Partner",
        description:
          "Senior leadership who over often oversees multiple projects, but tends to have low awareness on what is happening on the ground",
        technicalLevel: "Low",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
        quote: "I want to make sure our project is compliant.",
      },
    ],
  },
  {
    title: "Identifying key pain points",
    description:
      "Through user interviews and surveys, we identified several pain points that needed to be addressed in the platform redesign",
    content: [
      {
        name: "Alex",
        role: "Data Analyst",
        description: "Works with large datasets and needs efficient tools to process and visualize data",
        technicalLevel: "High",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
        quote: "I need better tools to visualize complex data relationships quickly.",
      },
      {
        name: "Maya",
        role: "Project Lead",
        description: "Responsible for coordinating multiple teams and ensuring project milestones are met",
        technicalLevel: "Medium",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
        quote: "I need a clear overview of all project components and their status.",
      },
      {
        name: "James",
        role: "Executive",
        description: "Needs high-level insights without getting lost in technical details",
        technicalLevel: "Low",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
        quote: "I want simple reports that show me the business impact.",
      },
    ],
  },
  {
    title: "Developing user personas",
    description:
      "Based on our research, we created detailed user personas to guide our design decisions and ensure we addressed the needs of all user types",
    content: [
      {
        name: "Priya",
        role: "Data Scientist",
        description: "Specializes in machine learning models and needs advanced tools for data manipulation",
        technicalLevel: "High",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
        quote: "I need to be able to quickly iterate on my models and share results.",
      },
      {
        name: "Carlos",
        role: "Team Manager",
        description: "Manages a team of analysts and needs to track progress and allocate resources effectively",
        technicalLevel: "Medium",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
        quote: "I need to understand my team's capacity and identify bottlenecks.",
      },
      {
        name: "Lisa",
        role: "Client Partner",
        description: "Interfaces with clients and needs to communicate project status and value clearly",
        technicalLevel: "Low",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
        quote: "I need to show our clients the value we're delivering.",
      },
    ],
  },
]

export default function UserCarousel() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [direction, setDirection] = useState<"left" | "right" | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    if (isTransitioning) return
    setDirection("right")
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % processSlides.length)
    }, 300)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setDirection("left")
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveSlide((prev) => (prev === 0 ? processSlides.length - 1 : prev - 1))
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

  const currentSlide = processSlides[activeSlide]

  return (
    <div className="w-full py-16 border-t border-gray-200 dark:border-gray-800" id="user-research">
      <div className="max-w-[80%] mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal mb-12">Process</h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-6">
            <div
              className={`transition-all duration-300 ${
                isTransitioning
                  ? direction === "right"
                    ? "opacity-0 transform -translate-x-10"
                    : "opacity-0 transform translate-x-10"
                  : "opacity-100 transform translate-x-0"
              }`}
            >
              <h3 className="text-[22px] font-normal mb-4">{currentSlide.title}</h3>
              <p className="text-[16px] leading-relaxed mb-8">{currentSlide.description}</p>
            </div>

            <div className="flex space-x-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#5F7EFF] text-white hover:bg-[#4A69E8] transition-colors"
                aria-label="Previous slide"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#5F7EFF] text-white hover:bg-[#4A69E8] transition-colors"
                aria-label="Next slide"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="md:col-span-6">
            <div
              ref={containerRef}
              className="relative h-[500px] bg-gray-50 dark:bg-gray-900 rounded-lg p-6 overflow-hidden"
            >
              <div
                className={`transition-all duration-300 ${
                  isTransitioning
                    ? direction === "right"
                      ? "opacity-0 transform -translate-x-full"
                      : "opacity-0 transform translate-x-full"
                    : "opacity-100 transform translate-x-0"
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-normal mb-8">Who are our user?</h3>

                <div className="grid grid-cols-1 gap-8">
                  <div className="transition-all duration-500">
                    <div className="flex flex-col items-center mb-4">
                      <div className="relative w-48 h-48 mb-4">
                        <Image
                          src={currentSlide.content[0].image || "/placeholder.svg"}
                          alt={currentSlide.content[0].name}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="bg-white dark:bg-black p-4 rounded-lg max-w-md relative">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white dark:border-b-black"></div>
                        <p className="text-center italic">{currentSlide.content[0].quote}</p>
                      </div>
                    </div>

                    <div className="text-center mb-4">
                      <h4 className="text-xl font-medium">{currentSlide.content[0].name}</h4>
                      <p className="text-[#5F7EFF]">{currentSlide.content[0].role}</p>
                    </div>

                    <p className="text-[16px] leading-relaxed text-center mb-4">
                      {currentSlide.content[0].description}
                    </p>

                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-4">
                      <div
                        className="bg-[#5F7EFF] h-2 rounded-full"
                        style={{
                          width:
                            currentSlide.content[0].technicalLevel === "High"
                              ? "100%"
                              : currentSlide.content[0].technicalLevel === "Medium"
                                ? "60%"
                                : "30%",
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>High</span>
                      <span>Technical Literacy</span>
                      <span>Low</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
