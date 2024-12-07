"use client"

import { Bell, Clock, Shield, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    icon: Bell,
    title: "Rapid Response",
    description: "24/7 incident response team ready to handle security incidents."
  },
  {
    icon: Clock,
    title: "Quick Recovery",
    description: "Minimize downtime with efficient incident handling and recovery."
  },
  {
    icon: Shield,
    title: "Incident Analysis",
    description: "Thorough investigation and root cause analysis of security incidents."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified security professionals with extensive experience."
  }
]

export default function IncidentResponse() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Incident Response</h1>
          <p className="text-xl text-muted-foreground">
            Professional incident response services to handle and resolve security incidents effectively.
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
          <h2 className="text-2xl font-bold mb-6">Response Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Detection</h3>
              <p className="text-muted-foreground">Identify and validate security incidents.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Containment</h3>
              <p className="text-muted-foreground">Isolate and prevent incident spread.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Eradication</h3>
              <p className="text-muted-foreground">Remove threat and restore systems.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Recovery</h3>
              <p className="text-muted-foreground">Return to normal operations.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Need Incident Response Support?</h2>
          <Link href="/contact">
            <Button size="lg">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}