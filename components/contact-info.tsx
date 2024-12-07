import { Mail, Phone, MapPin } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
        <p className="text-muted-foreground">
          Get in touch with our security experts to discuss your needs.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <Mail className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <p className="font-medium">Email</p>
            <a
              href="mailto:consult@technosive.co.uk"
              className="text-muted-foreground hover:text-primary"
            >
              consult@technosive.co.uk
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Phone className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <p className="font-medium">Phone</p>
            <a
              href="tel:+441234567890"
              className="text-muted-foreground hover:text-primary"
            >
              +44 123 456 7890
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <MapPin className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <p className="font-medium">Location</p>
            <p className="text-muted-foreground">
              London, United Kingdom
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}