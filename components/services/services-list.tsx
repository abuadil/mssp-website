import { Shield, Bell, Zap, Lock, FileCheck, Users } from "lucide-react"
import { Card } from "@/components/ui/card"

const services = [
  {
    icon: Shield,
    title: "SOC as a Service",
    description: "24/7 security operations center monitoring and threat detection for your infrastructure."
  },
  {
    icon: Bell,
    title: "Incident Response",
    description: "Rapid response to security incidents with expert remediation services."
  },
  {
    icon: Zap,
    title: "Threat Detection",
    description: "Advanced threat detection and prevention using cutting-edge technology."
  },
  {
    icon: Lock,
    title: "Access Management",
    description: "Secure identity and access management solutions for your organization."
  },
  {
    icon: FileCheck,
    title: "Compliance Management",
    description: "Ensure compliance with industry standards and regulatory requirements."
  },
  {
    icon: Users,
    title: "Security Training",
    description: "Comprehensive security awareness training for your employees."
  }
]

export function ServicesList() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6">
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}