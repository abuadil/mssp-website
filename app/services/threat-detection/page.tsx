"use client"

import { Zap, Search, Shield, Brain } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    icon: Search,
    title: "Advanced Detection",
    description: "AI-powered threat detection using behavioral analysis and machine learning."
  },
  {
    icon: Shield,
    title: "Proactive Defense",
    description: "Continuous monitoring and prevention of emerging threats."
  },
  {
    icon: Brain,
    title: "Intelligent Analysis",
    description: "Advanced correlation and analysis of security events."
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description: "Automated threat response and containment capabilities."
  }
]

export default function ThreatDetection() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Threat Detection</h1>
          <p className="text-xl text-muted-foreground">
            Advanced threat detection and prevention powered by artificial intelligence.
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
          <h2 className="text-2xl font-bold mb-6">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">AI-Powered</h3>
              <p className="text-muted-foreground">Machine learning algorithms for accurate threat detection.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Real-time</h3>
              <p className="text-muted-foreground">Instant detection and response to threats.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Comprehensive</h3>
              <p className="text-muted-foreground">Full coverage across your entire infrastructure.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Detect Threats?</h2>
          <Link href="/contact">
            <Button size="lg">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}