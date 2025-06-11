export default function ClientSection() {
  const clients = ["Webflow", "Adobe", "Meta", "Seven Studio", "Nike"]

  return (
    <div className="col-span-6">
      <h2 className="flex items-center text-sm font-normal mb-8">
        <span className="transform -rotate-45 inline-block mr-2">↓</span> Featured Client
      </h2>

      <ul className="space-y-4">
        {clients.map((client, index) => (
          <li key={index} className="text-base">
            {client}
          </li>
        ))}
      </ul>
    </div>
  )
}
