import { AboutHero } from "@/components/about/about-hero"
import { AboutMission } from "@/components/about/about-mission"
import { AboutTeam } from "@/components/about/about-team"
import { AboutStats } from "@/components/about/about-stats"
import { AboutCertifications } from "@/components/about/about-certifications"

export default function About() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutMission />
      <AboutStats />
      <AboutTeam />
      <AboutCertifications />
    </div>
  )
}