"use client"

import { FileCheck, Shield, Lock, CheckCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    icon: FileCheck,
    title: "Compliance Assessment",
    description: "Comprehensive evaluation of your compliance status and requirements."
  },
  {
    icon: Shield,
    title: "Framework Implementation",
    description: "Implementation of security controls aligned with compliance frameworks."
  },
  {
    icon: Lock,
    title: "Documentation",
    description: "Detailed documentation and evidence collection for audits."
  },
  {
    icon: CheckCircle,
    title: "Continuous Monitoring",
    description: "Ongoing compliance monitoring and maintenance."
  }
]

export default function Compliance() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Compliance Management</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive compliance solutions to meet regulatory requirements and industry standards.
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
          <h2 className="text-2xl font-bold mb-6">Supported Frameworks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">ISO 27001</h3>
              <p className="text-muted-foreground">Information security management system.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">GDPR</h3>
              <p className="text-muted-foreground">Data protection and privacy compliance.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">PCI DSS</h3>
              <p className="text-muted-foreground">Payment card industry security standards.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Achieve Compliance?</h2>
          <Link href="/contact">
            <Button size="lg">Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}