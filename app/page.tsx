import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { BentoGrid } from "@/components/bento-grid"
import { ProjectsSection } from "@/components/projects-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <BentoGrid />
      <ProjectsSection />
      <Footer />
    </main>
  )
}
