import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="px-6 md:px-12 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl mb-8">About</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="Kai Reynolds"
              width={400}
              height={600}
              className="w-full h-auto"
            />
          </div>

          <div>
            <h2 className="text-xl mb-6">
              Design can be art. Design can be aesthetics. Design is so simple, that's why it is so complicated.
            </h2>

            <p className="text-base text-gray-300 mb-6">
              Hello! My name is Kai. I'm a digital designer. I have a passion for crafting visually stunning and
              engaging experiences through digital design. I'm constantly exploring new technologies and design trends
              to bring fresh perspectives to my work.
            </p>

            <p className="text-base text-gray-300 mb-6">
              With over 5 years of experience in the industry, I've had the opportunity to work with a diverse range of
              clients, from startups to established brands, helping them achieve their design goals and create
              meaningful connections with their audience.
            </p>

            <p className="text-base text-gray-300">
              My approach to design is centered around simplicity, functionality, and user experience. I believe that
              good design should not only look beautiful but also serve a purpose and solve problems effectively.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-xl mb-6">Experience</h2>

          <div className="space-y-8">
            <div className="border-t border-gray-800 pt-4">
              <div className="flex justify-between mb-2">
                <h3 className="text-lg">Senior Designer</h3>
                <span className="text-sm text-gray-500">2021-2023</span>
              </div>
              <p className="text-base text-gray-300">
                Led design projects for major clients, overseeing the creative direction and ensuring high-quality
                deliverables.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-4">
              <div className="flex justify-between mb-2">
                <h3 className="text-lg">Web Designer</h3>
                <span className="text-sm text-gray-500">2019-2021</span>
              </div>
              <p className="text-base text-gray-300">
                Created responsive websites and digital experiences, focusing on user interface and experience design.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-4">
              <div className="flex justify-between mb-2">
                <h3 className="text-lg">Junior Designer</h3>
                <span className="text-sm text-gray-500">2018-2019</span>
              </div>
              <p className="text-base text-gray-300">
                Assisted senior designers with various design tasks and developed skills in digital design and branding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
