export default function ContactPage() {
  return (
    <div className="px-6 md:px-12 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl mb-8">Contact</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl mb-6">Let's work together</h2>

            <p className="text-base text-gray-300 mb-8">
              I'm currently available for freelance projects, collaborations, or full-time opportunities. If you'd like
              to discuss a project or just say hello, feel free to get in touch.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Email</h3>
                <a href="mailto:Hello@kai.reynolds" className="text-lg hover:underline">
                  Hello@kai.reynolds
                </a>
              </div>

              <div>
                <h3 className="text-sm text-gray-500 mb-1">Location</h3>
                <p className="text-lg">London, UK</p>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-500 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-transparent border-b border-gray-800 py-2 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-500 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border-b border-gray-800 py-2 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-500 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-800 py-2 focus:outline-none focus:border-white transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-2 border border-white hover:bg-white hover:text-black transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
