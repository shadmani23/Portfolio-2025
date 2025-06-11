export default function ContactSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      {/* Left side - Contact heading (40%) */}
      <div className="md:col-span-5">
        <h2 className="flex items-center text-sm font-normal">
          <span className="transform -rotate-45 inline-block mr-2">↓</span> Contact
        </h2>
      </div>

      {/* Right side - Contact content (55%) */}
      <div className="md:col-span-7">
        <p className="text-lg mb-4">I am currently available to freelance</p>
        <a
          href="mailto:shadmani.work@gmail.com"
          className="text-3xl md:text-4xl hover:underline transition-all duration-300 hover:opacity-80 block mb-12"
        >
          shadmani.work@gmail.com
        </a>

        <div className="space-y-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-lg font-normal hover:underline transition-all duration-300"
          >
            LinkedIn
          </a>
          <a href="#" className="block text-lg font-normal hover:underline transition-all duration-300">
            Resume
          </a>
        </div>
      </div>
    </div>
  )
}
