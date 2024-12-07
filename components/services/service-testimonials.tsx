import { Card } from "@/components/ui/card"

const testimonials = [
  {
    quote: "Their security services have been invaluable in protecting our infrastructure.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp"
  },
  {
    quote: "The 24/7 monitoring gives us peace of mind knowing we're always protected.",
    author: "Michael Chen",
    role: "CISO, DataFlow Inc"
  },
  {
    quote: "Outstanding incident response team. They've helped us prevent numerous threats.",
    author: "Emma Williams",
    role: "Security Director, SecureBank"
  }
]

export function ServiceTestimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <blockquote className="text-lg mb-4">"{testimonial.quote}"</blockquote>
              <div>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}