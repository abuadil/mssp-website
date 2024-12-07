import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServiceCTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to learn how our security services can protect your organization.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">Get Started</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}