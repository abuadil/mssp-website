import { ServiceHero } from "@/components/services/service-hero"
import { ServicesList } from "@/components/services/services-list"
import { ServiceCapabilities } from "@/components/services/service-capabilities"
import { ServiceFeatures } from "@/components/services/service-features"
import { ServiceTestimonials } from "@/components/services/service-testimonials"
import { ServiceCTA } from "@/components/services/service-cta"

export default function Services() {
  return (
    <div className="min-h-screen">
      <ServiceHero />
      <ServicesList />
      <ServiceCapabilities />
      <ServiceFeatures />
      <ServiceTestimonials />
      <ServiceCTA />
    </div>
  )
}