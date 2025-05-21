import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, StarHalf } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
}

export default function TestimonialCard({ name, role, content, rating }: TestimonialCardProps) {
  // Gerar iniciais para o avatar
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .substring(0, 2)

  // Renderizar estrelas baseado na avaliação
  const renderStars = () => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    // Estrelas cheias
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)
    }

    // Meia estrela se necessário
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-5 w-5 fill-yellow-400 text-yellow-400" />)
    }

    // Completar até 5 estrelas (vazias)
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="h-5 w-5 text-yellow-400" />)
    }

    return stars
  }

  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Avatar>
            <AvatarFallback className="bg-red-100 text-red-600">{initials}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
        <div className="flex mb-4">{renderStars()}</div>
        <p className="text-gray-700">{content}</p>
      </CardContent>
    </Card>
  )
}
