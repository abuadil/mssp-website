import { Card } from "@/components/ui/card"
import { Shield, Target, Users } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Excellence in Security",
    description: "We maintain the highest standards in cybersecurity practices and technology."
  },
  {
    icon: Target,
    title: "Proactive Protection",
    description: "We anticipate and prevent threats before they become incidents."
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We work closely with our clients to understand and meet their unique security needs."
  }
]

export function AboutMission() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            To provide world-class security solutions that enable businesses to operate with confidence in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="p-6 text-center">
              <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}