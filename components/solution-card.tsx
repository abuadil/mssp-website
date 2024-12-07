"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { LucideIcon } from "lucide-react"

interface SolutionCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  href: string
}

export function SolutionCard({ icon: Icon, title, description, features, href }: SolutionCardProps) {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <Icon className="h-12 w-12 text-primary mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
      </div>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm">
            <ChevronRight className="h-4 w-4 text-primary mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <Link href={href}>
        <Button className="w-full">Learn More</Button>
      </Link>
    </Card>
  )
}