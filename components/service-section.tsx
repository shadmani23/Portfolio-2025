export default function ServiceSection() {
  const services = [
    "Art & Design Direction",
    "Digital Brand Identity",
    "Web Design",
    "Creative Strategy",
    "Product Design",
  ]

  return (
    <div className="col-span-6">
      <h2 className="flex items-center text-sm font-normal mb-8">
        <span className="transform -rotate-45 inline-block mr-2">↓</span> Service
      </h2>

      <ul className="space-y-4">
        {services.map((service, index) => (
          <li key={index} className="text-base">
            {service}
          </li>
        ))}
      </ul>
    </div>
  )
}
