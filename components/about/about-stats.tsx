import { Card } from "@/components/ui/card"

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Clients Protected" },
  { value: "24/7", label: "Monitoring" },
  { value: "99.9%", label: "Uptime" }
]

export function AboutStats() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}