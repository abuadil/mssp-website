import { Card } from "@/components/ui/card"
import { Brain, Shield, FileCheck, Users } from "lucide-react"

const capabilities = [
  {
    icon: Shield,
    title: "Cybersecurity Governance",
    description: "Develop and maintain robust security frameworks aligned with industry standards and regulatory requirements.",
    features: [
      "Risk Assessment & Management",
      "Policy Development",
      "Compliance Frameworks",
      "Security Audits"
    ]
  },
  {
    icon: Users,
    title: "Strategic Partnership",
    description: "Lead comprehensive cybersecurity strategies tailored to your specific security needs and business objectives.",
    features: [
      "Custom Security Solutions",
      "Stakeholder Collaboration",
      "Security Roadmapping",
      "Business Alignment"
    ]
  },
  {
    icon: Brain,
    title: "AI-Driven Security",
    description: "Integrate cutting-edge AI technologies to optimize security operations and proactively mitigate emerging threats.",
    features: [
      "Threat Intelligence",
      "Automated Response",
      "Predictive Analytics",
      "Behavioral Analysis"
    ]
  },
  {
    icon: FileCheck,
    title: "Security Integration",
    description: "Ensure seamless integration of security frameworks and AI technologies across your environment.",
    features: [
      "Framework Integration",
      "Technology Optimization",
      "Continuous Monitoring",
      "Performance Analytics"
    ]
  }
]

export function ServiceCapabilities() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Advanced Capabilities</h2>
          <p className="text-lg text-muted-foreground">
            Leveraging cutting-edge technology and industry expertise to deliver comprehensive security solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <Card key={index} className="p-6">
              <capability.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
              <p className="text-muted-foreground mb-4">{capability.description}</p>
              <ul className="space-y-2">
                {capability.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}