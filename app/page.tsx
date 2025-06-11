import HeroSection from "@/components/hero-section"
import ProjectsShowcase from "@/components/projects-showcase"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProjectsShowcase />

      <div className="max-w-[90%] mx-auto py-24 border-t border-border">
        <AboutSection />
      </div>

      <div className="max-w-[90%] mx-auto py-24 border-t border-border">
        <ContactSection />
      </div>
    </div>
  )
}
