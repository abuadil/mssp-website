"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Server, Lock, Code, Database, Cloud } from "lucide-react"
import Link from "next/link"
import { SolutionCard } from "@/components/solution-card"

export default function Solutions() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Security Solutions & Architecture</h1>
          <p className="text-xl text-muted-foreground">
            Enterprise-grade security architecture and solutions designed for modern organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <SolutionCard
            icon={Shield}
            title="SOC Architecture"
            description="State-of-the-art Security Operations Center design and implementation with 24/7 monitoring capabilities."
            features={[
              "SIEM Integration & Deployment",
              "Incident Response Playbooks",
              "Threat Intelligence Platform",
              "Security Metrics Dashboard"
            ]}
            href="/solutions/soc-architecture"
          />

          <SolutionCard
            icon={Server}
            title="Banking Security"
            description="Specialized security solutions for financial institutions meeting regulatory requirements."
            features={[
              "PCI DSS Compliance",
              "Fraud Detection Systems",
              "Transaction Monitoring",
              "Zero Trust Architecture"
            ]}
            href="/solutions/banking-security"
          />

          <SolutionCard
            icon={Code}
            title="DevSecOps"
            description="Integrate security into your development lifecycle with our comprehensive DevSecOps framework."
            features={[
              "CI/CD Security Integration",
              "Container Security",
              "Infrastructure as Code Scanning",
              "Automated Security Testing"
            ]}
            href="/solutions/devsecops"
          />

          <SolutionCard
            icon={Database}
            title="Data Security"
            description="Protect sensitive data with advanced encryption and access control solutions."
            features={[
              "Data Classification",
              "Encryption at Rest & Transit",
              "DLP Implementation",
              "Access Management"
            ]}
            href="/solutions/data-security"
          />
        </div>

        <div className="bg-muted/50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Security Architecture Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Assessment</h3>
              <p className="text-muted-foreground">Comprehensive analysis of your current security posture and requirements.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Design</h3>
              <p className="text-muted-foreground">Custom security architecture tailored to your organization's needs.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Implementation</h3>
              <p className="text-muted-foreground">Seamless deployment with continuous monitoring and optimization.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Strengthen Your Security Architecture?</h2>
          <Link href="/contact">
            <Button size="lg">Schedule a Consultation</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}