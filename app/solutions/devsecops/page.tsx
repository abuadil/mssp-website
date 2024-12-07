"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, GitBranch, Shield, Terminal } from "lucide-react"
import Link from "next/link"

export default function DevSecOps() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">DevSecOps Solutions</h1>
          <p className="text-xl text-muted-foreground">
            Integrate security throughout your development lifecycle with our comprehensive DevSecOps framework.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-6">
            <Code className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure CI/CD Pipeline</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Automated security testing integration</li>
              <li>• Container security scanning</li>
              <li>• Infrastructure as Code (IaC) security checks</li>
              <li>• Dependency vulnerability scanning</li>
            </ul>
          </Card>

          <Card className="p-6">
            <GitBranch className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Security as Code</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Policy as Code implementation</li>
              <li>• Automated compliance checks</li>
              <li>• Security controls versioning</li>
              <li>• Infrastructure security templates</li>
            </ul>
          </Card>
        </div>

        <div className="bg-muted/50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Our DevSecOps Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Terminal className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Plan</h3>
              <p className="text-muted-foreground">Security requirements and threat modeling</p>
            </div>
            <div>
              <Code className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Code</h3>
              <p className="text-muted-foreground">Secure coding practices and SAST</p>
            </div>
            <div>
              <GitBranch className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Build</h3>
              <p className="text-muted-foreground">Automated security testing and scanning</p>
            </div>
            <div>
              <Shield className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Deploy</h3>
              <p className="text-muted-foreground">Secure deployment and monitoring</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Implement DevSecOps?</h2>
          <Link href="/contact">
            <Button size="lg">Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}