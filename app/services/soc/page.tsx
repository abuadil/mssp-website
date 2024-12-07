"use client"

import { Shield, Monitor, Bell, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    icon: Monitor,
    title: "24/7 Monitoring",
    description: "Continuous security monitoring and threat detection across your infrastructure."
  },
  {
    icon: Bell,
    title: "Incident Response",
    description: "Rapid response to security incidents with automated and manual remediation."
  },
  {
    icon: Shield,
    title: "Threat Intelligence",
    description: "Advanced threat intelligence integration and proactive threat hunting."
  },
  {
    icon: Clock,
    title: "Real-time Alerts",
    description: "Immediate notification of security events and potential threats."
  }
]

export default function SOCService() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">SOC as a Service</h1>
          <p className="text-xl text-muted-foreground">
            Enterprise-grade security operations center monitoring and management for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6">
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-muted/50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Why Choose Our SOC Service?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Expert Team</h3>
              <p className="text-muted-foreground">Certified security analysts with years of experience.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Advanced Technology</h3>
              <p className="text-muted-foreground">State-of-the-art SIEM and security tools.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Scalable Solution</h3>
              <p className="text-muted-foreground">Flexible services that grow with your business.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Enhance Your Security?</h2>
          <Link href="/contact">
            <Button size="lg">Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}