import { CheckCircle } from "lucide-react"

const features = [
  "24/7 Security Monitoring",
  "Real-time Threat Detection",
  "Incident Response",
  "Vulnerability Management",
  "Security Assessment",
  "Compliance Reporting"
]

export function ServiceFeatures() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Enterprise-Grade Security Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}