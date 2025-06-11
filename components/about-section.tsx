"use client"
import Image from "next/image"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function AboutSection() {
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
    },
    {
      id: "seven-studio",
      title: "Senior Designer",
      company: "Seven Studio",
      period: "2021-2023",
    },
    {
      id: "relic",
      title: "Web Designer",
      company: "Relic",
      period: "2020-2021",
    },
    {
      id: "adobe",
      title: "Intern",
      company: "Adobe",
      period: "2019-2020",
    },
  ]

  const education = [
    {
      id: "parsons",
      title: "Parsons School of Design",
      degree: "BFA",
      period: "2015-2019",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      {/* Left side - About heading (40%) */}
      <div className="md:col-span-5">
        <h2 className="flex items-center text-sm font-normal">
          <span className="transform -rotate-45 inline-block mr-2">↓</span> About
        </h2>
      </div>

      {/* Right side - About content (55%) */}
      <div className="md:col-span-7">
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
          Hello there! My name is Shadmani. As a digital designer, I have a passion for crafting visually stunning and
          engaging experiences digital realm. I thrive on staying up-to-date with the latest design trends and
          technologies to deliver cutting-edge solutions that not only meet client objectives but also leave a lasting
          impact on users
        </p>

        {/* Experience Section */}
        <div className="mb-12">
          <h3 className="text-sm text-[#5F7EFF] mb-8 tracking-wider">EXPERIENCE</h3>

          <div className="space-y-0">
            {experiences.map((exp) => (
              <div key={exp.id} className="border-b border-border last:border-b-0">
                <button
                  onClick={() => toggleExpanded(exp.id)}
                  className="w-full py-6 flex items-center justify-between text-left hover:opacity-80 transition-opacity"
                >
                  <div className="flex-1">
                    <h4 className="text-lg font-normal">{exp.title}</h4>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
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
                    <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
                      {exp.id === "nike" &&
                        "Leading design initiatives for Nike's digital products and experiences, focusing on user-centered design and innovation in athletic technology."}
                      {exp.id === "seven-studio" &&
                        "Developed comprehensive design systems and led creative direction for various client projects, specializing in brand identity and digital experiences."}
                      {exp.id === "relic" &&
                        "Created responsive web designs and user interfaces for diverse clients, focusing on modern design principles and user experience optimization."}
                      {exp.id === "adobe" &&
                        "Gained hands-on experience in design tools and methodologies while supporting various design projects and learning from industry professionals."}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-sm text-[#5F7EFF] mb-8 tracking-wider">EDUCATION</h3>

          <div className="space-y-0">
            {education.map((edu) => (
              <div key={edu.id} className="border-b border-border last:border-b-0">
                <button
                  onClick={() => toggleExpanded(edu.id)}
                  className="w-full py-6 flex items-center justify-between text-left hover:opacity-80 transition-opacity"
                >
                  <div className="flex-1">
                    <h4 className="text-lg font-normal">{edu.title}</h4>
                    <p className="text-sm text-muted-foreground">{edu.degree}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        expandedItems.includes(edu.id) ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {expandedItems.includes(edu.id) && (
                  <div className="pb-6 -mt-2">
                    <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
                      Studied design fundamentals, user experience, and interactive media. Focused on creating
                      human-centered design solutions and developing a strong foundation in visual communication.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
