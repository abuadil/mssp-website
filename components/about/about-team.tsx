import { Card } from "@/components/ui/card"
import { LinkedinIcon, TwitterIcon } from "lucide-react"

const team = [
  {
    name: "David Anderson",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Sarah Mitchell",
    role: "Chief Security Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "James Wilson",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    linkedin: "#",
    twitter: "#"
  }
]

export function AboutTeam() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-muted-foreground mb-4">{member.role}</p>
                <div className="flex space-x-4">
                  <a href={member.linkedin} className="text-muted-foreground hover:text-primary">
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                  <a href={member.twitter} className="text-muted-foreground hover:text-primary">
                    <TwitterIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}