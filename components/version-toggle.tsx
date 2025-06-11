"use client"

import { useState } from "react"
import Image from "next/image"

interface VersionToggleProps {
  title: string
  description: string
  versions: {
    id: string
    label: string
    image: string
  }[]
}

export default function VersionToggle({ title, description, versions }: VersionToggleProps) {
  const [activeVersion, setActiveVersion] = useState(0)

  return (
    <div className="w-full py-16 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-[80%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-6">
            <h2 className="text-[22px] font-normal">{title}</h2>
          </div>
          <div className="md:col-span-6">
            <p className="text-[16px] leading-relaxed mb-6">{description}</p>

            <div className="flex justify-end mb-8">
              <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                {versions.map((version, index) => (
                  <button
                    key={version.id}
                    onClick={() => setActiveVersion(index)}
                    className={`px-4 py-1 text-sm rounded-full transition-all ${
                      activeVersion === index
                        ? "bg-white dark:bg-black shadow-sm"
                        : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    {version.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="relative h-[500px] overflow-hidden rounded-lg">
            {versions.map((version, index) => (
              <div
                key={version.id}
                className={`absolute inset-0 transition-opacity duration-300 ${
                  activeVersion === index ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <Image
                  src={version.image || "/placeholder.svg"}
                  alt={`Version ${version.label}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
