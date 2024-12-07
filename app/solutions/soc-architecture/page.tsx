"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Eye, Bell, Zap } from "lucide-react"
import Link from "next/link"

export default function SOCArchitecture() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">SOC Architecture & Design</h1>
          <p className="text-xl text-muted-foreground">
            Build a world-class Security Operations Center with our comprehensive design and implementation services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-6">
            <Eye className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Monitoring & Detection</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• SIEM platform integration</li>
              <li>• Real-time threat detection</li>
              <li>• Log aggregation and analysis</li>
              <li>• Custom detection rules</li>
            </ul>
          </Card>

          <Card className="p-6">
            <Bell className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Incident Response</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Automated response playbooks</li>
              <li>• Incident tracking system</li>
              <li>• Team collaboration tools</li>
              <li>• Case management</li>
            </ul>
          </Card>
        </div>

        <div className="bg-muted/50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">SOC Maturity Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Shield className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Foundation</h3>
              <p className="text-muted-foreground">Basic security monitoring and alerting capabilities</p>
            </div>
            <div>
              <Eye className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Developing</h3>
              <p className="text-muted-foreground">Enhanced detection and response procedures</p>
            </div>
            <div>
              <Bell className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Advanced</h3>
              <p className="text-muted-foreground">Proactive threat hunting and intelligence</p>
            </div>
            <div>
              <Zap className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Leading</h3>
              <p className="text-muted-foreground">Automated response and continuous improvement</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Build Your SOC?</h2>
          <Link href="/contact">
            <Button size="lg">Schedule a Consultation</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}