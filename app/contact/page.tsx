import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { Card } from "@/components/ui/card"
import { Phone } from "lucide-react"

export default function Contact() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Get in touch with our security experts to discuss your needs and how we can help protect your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <ContactForm />
              </div>
              <div className="md:border-l md:pl-8">
                <ContactInfo />
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Emergency Support</h2>
          <p className="text-muted-foreground mb-6">
            For urgent security incidents or immediate assistance, please contact our 24/7 emergency response team.
          </p>
          <div className="inline-flex items-center justify-center space-x-2 bg-destructive/10 text-destructive px-4 py-2 rounded-md">
            <Phone className="h-5 w-5" />
            <span className="font-semibold">Emergency Hotline: +44 999 888 7777</span>
          </div>
        </div>
      </div>
    </div>
  )
}