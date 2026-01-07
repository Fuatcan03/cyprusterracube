"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    alert("Mesajınız alındı! En kısa sürede size dönüş yapacağız.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-accent/30 rounded-2xl p-8">
      <div>
        <h3 className="text-2xl font-bold mb-6">Fiyat Teklifi İste</h3>
      </div>

      <div>
        <Label htmlFor="name">İsim *</Label>
        <Input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Adınız Soyadınız"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="email">E-posta Adresi *</Label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="ornek@email.com"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="message">Teklif İçin Mesajınız *</Label>
        <Textarea
          id="message"
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Projeniz hakkında detaylı bilgi verin..."
          rows={6}
          className="mt-1"
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        Teklifi Gönder
      </Button>
    </form>
  )
}
