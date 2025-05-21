"use client"

import { Button, type ButtonProps } from "@/components/ui/button"
import { PhoneIcon as WhatsApp } from "lucide-react"

interface WhatsAppButtonProps extends ButtonProps {
  phoneNumber?: string
  message?: string
}

export default function WhatsAppButton({
  phoneNumber = "5511999999999",
  message = "Olá! Gostaria de informações sobre aulas de Jiu Jitsu.",
  className,
  variant = "default",
  size,
  ...props
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Button onClick={handleClick} variant={variant} size={size} className={className} {...props}>
      <WhatsApp className="mr-2 h-4 w-4" />
      Fale pelo WhatsApp
    </Button>
  )
}
