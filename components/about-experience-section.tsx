"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function AboutExperienceSection() {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const experiences = [
    {
      id: "nike",
      title: "Nike, Head of Design",
      period: "2023-Now",
      description:
        "Leading design initiatives for Nike's digital products and experiences, focusing on user-centered design and innovation in athletic technology.",
    },
    {
      id: "seven-studio",
      title: "Seven Studio, Senior Designer",
      period: "2021-2023",
      description:
        "Developed comprehensive design systems and led creative direction for various client projects, specializing in brand identity and digital experiences.",
    },
    {
      id: "relic",
      title: "Relic, Web Designer",
      period: "2020-2021",
      description:
        "Created responsive web designs and user interfaces for diverse clients, focusing on modern design principles and user experience optimization.",
    },
    {
      id: "adobe",
      title: "Adobe, Intern",
      period: "2019-2020",
      description:
        "Gained hands-on experience in design tools and methodologies while supporting various design projects and learning from industry professionals.",
    },
  ]

  return (
    <div className="px-6 md:px-12 py-24 border-t border-border">
      <div className="grid-layout">
        <div className="col-span-3">
          <p className="text-sm text-muted-foreground">[About me]</p>
        </div>

        <div className="col-span-9">
          <div className="mb-16">
            <p className="text-2xl md:text-3xl font-normal leading-relaxed mb-8">
              Product designer turning emerging tech into customer-ready tools—shipping scalable ad solutions and
              experimental interfaces at Nike.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-sm text-green-500 mb-8 tracking-wider">EXPERIENCE</h3>

            <div className="space-y-0">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="border-b border-border last:border-b-0">
                  <button
                    onClick={() => toggleExpanded(exp.id)}
                    className="w-full py-6 flex items-center justify-between text-left hover:opacity-80 transition-opacity"
                  >
                    <div className="flex-1">
                      <h4 className="text-lg font-normal">{exp.title}</h4>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          expandedItems.includes(exp.id) ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {expandedItems.includes(exp.id) && (
                    <div className="pb-6 -mt-2">
                      <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">{exp.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm text-green-500 mb-8 tracking-wider">EDUCATION</h3>

            <div className="border-b border-border">
              <div className="py-6">
                <h4 className="text-lg font-normal">Parsons School of Design, BFA</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
