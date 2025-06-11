"use client"

import { useState } from "react"
import Image from "next/image"

export default function AboutWithExperience() {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const experiences = [
    {
      id: "nike",
      title: "Head of Design",
      company: "Nike",
      period: "2023-Now",
      description:
        "Leading design initiatives for Nike's digital products and experiences, focusing on user-centered design and innovation in athletic technology.",
    },
    {
      id: "seven-studio",
      title: "Senior Designer",
      company: "Seven Studio",
      period: "2021-2023",
      description:
        "Developed comprehensive design systems and led creative direction for various client projects, specializing in brand identity and digital experiences.",
    },
    {
      id: "relic",
      title: "Web Designer",
      company: "Relic",
      period: "2020-2021",
      description:
        "Created responsive web designs and user interfaces for diverse clients, focusing on modern design principles and user experience optimization.",
    },
    {
      id: "adobe",
      title: "Intern",
      company: "Adobe",
      period: "2019-2020",
      description:
        "Gained hands-on experience in design tools and methodologies while supporting various design projects and learning from industry professionals.",
    },
  ]

  return (
    <div className="h-[50vh] px-6 md:px-12 py-24 border-t border-border">
      <div className="grid-layout h-full">
        <div className="col-span-12">
          <div className="mb-8">
            <h2 className="flex items-center text-sm font-normal mb-8">
              <span className="transform -rotate-45 inline-block mr-2">↓</span> About
            </h2>

            <div className="mb-8">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Shadmani Shaikh"
                width={200}
                height={200}
                className="mb-8"
              />
            </div>

            <h3 className="text-xl font-normal mb-6">
              Design can be art. Design can be aesthetics. Design is so simple, that's why it is so complicated
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed mb-12">
              Hello there! My name is Shadmani. As a digital designer, I have a passion for crafting visually stunning
              and engaging experiences digital realm. I thrive on staying up-to-date with the latest design trends and
              technologies to deliver cutting-edge solutions that not only meet client objectives but also leave a
              lasting impact on users
            </p>
          </div>

          <div className="mb-8">
            <h2 className="flex items-center text-sm font-normal mb-8">
              <span className="transform -rotate-45 inline-block mr-2">↓</span> Experience
            </h2>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="border-t border-border pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-base font-normal">{exp.title}</h3>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="text-sm text-right">{exp.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
