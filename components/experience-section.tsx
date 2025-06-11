export default function ExperienceSection() {
  const experiences = [
    {
      title: "Head of Design",
      company: "Nike",
      period: "2023-Now",
    },
    {
      title: "Senior Designer",
      company: "Seven Studio",
      period: "2021-2023",
    },
    {
      title: "Web Designer",
      company: "Relic",
      period: "2020-2021",
    },
    {
      title: "Intern",
      company: "Adobe",
      period: "2019-2020",
    },
  ]

  return (
    <div className="col-span-6">
      <h2 className="flex items-center text-sm font-normal mb-8">
        <span className="transform -rotate-45 inline-block mr-2">↓</span> Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-t border-border pt-4">
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
  )
}
