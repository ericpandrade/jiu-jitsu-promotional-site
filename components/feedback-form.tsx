"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

export default function FeedbackForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "5",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRatingChange = (value: string) => {
    setFormData((prev) => ({ ...prev, rating: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulando envio para um servidor
    try {
      // Aqui você implementaria a lógica real de envio para seu backend
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Feedback enviado!",
        description: "Agradecemos por compartilhar sua experiência conosco.",
      })

      // Resetar formulário
      setFormData({
        name: "",
        email: "",
        rating: "5",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Erro ao enviar feedback",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Seu nome" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu.email@exemplo.com"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Como você avalia sua experiência?</Label>
        <RadioGroup value={formData.rating} onValueChange={handleRatingChange} className="flex space-x-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="flex items-center space-x-1">
              <RadioGroupItem value={num.toString()} id={`rating-${num}`} />
              <Label htmlFor={`rating-${num}`}>{num}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Sua mensagem</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Compartilhe sua experiência ou sugestões..."
          rows={5}
          required
        />
      </div>

      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar Feedback"
        )}
      </Button>
    </form>
  )
}
