import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const certifications = [
  "ISO 27001 Certified",
  "SOC 2 Type II Compliant",
  "PCI DSS Certified",
  "NIST Cybersecurity Framework",
  "GDPR Compliant",
  "Cyber Essentials Plus"
]

export function AboutCertifications() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-4 flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg">{cert}</span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}