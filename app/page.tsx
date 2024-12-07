import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, Lock, Bell, Clock, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 via-primary/5 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Enterprise Security Solutions for the Digital Age
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Protect your business with our comprehensive managed security services. 24/7 monitoring, threat detection, and expert incident response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">Get Started</Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Security Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">SOC as a Service</h3>
              <p className="text-muted-foreground">24/7 security operations center monitoring and management for your infrastructure.</p>
            </Card>
            <Card className="p-6">
              <Bell className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Threat Detection</h3>
              <p className="text-muted-foreground">Advanced threat detection and prevention using cutting-edge technology.</p>
            </Card>
            <Card className="p-6">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Incident Response</h3>
              <p className="text-muted-foreground">Rapid response to security incidents with expert remediation services.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Technosive</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">24/7 Monitoring</h3>
                <p className="text-muted-foreground">Round-the-clock security monitoring and threat detection.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Expert Team</h3>
                <p className="text-muted-foreground">Certified security professionals with years of experience.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Lock className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Compliance Ready</h3>
                <p className="text-muted-foreground">Meet industry standards and regulatory requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Business?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with our security experts to learn how we can protect your organization.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">Schedule a Consultation</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}