"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally handle the form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/top_right.png" alt="Background" fill className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/70 to-black/50 mix-blend-multiply" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contactează-ne</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
              Suntem aici pentru a te ajuta. Contactează-ne pentru orice întrebare sau pentru a discuta despre proiectul
              tău.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Trimite-ne un mesaj</h2>
              <p className="text-gray-600 mb-8">
                Completează formularul de mai jos și te vom contacta în cel mai scurt timp posibil.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nume</Label>
                    <Input id="name" placeholder="Numele tău" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="email@exemplu.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subiect</Label>
                  <Input id="subject" placeholder="Subiectul mesajului" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mesaj</Label>
                  <Textarea id="message" placeholder="Mesajul tău" rows={6} required />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white border border-red-600 shadow-md"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" /> Mesaj trimis
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Trimite mesajul
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Informații de contact</h2>
              <p className="text-gray-600 mb-8">
                Ne poți contacta direct folosind informațiile de mai jos sau ne poți vizita la sediul nostru.
              </p>

              <div className="grid gap-6">
                <Card>
                  <CardContent className="flex items-start gap-4 p-6 bg-white border border-gray-200">
                    <MapPin className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Adresa noastră</h3>
                      <p className="text-gray-600">Adresa ta, București, România</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <Phone className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Telefon</h3>
                      <p className="text-gray-600">+40 123 456 789</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <Mail className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <p className="text-gray-600">contact@perfecthomemedia.ro</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <Clock className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Program</h3>
                      <p className="text-gray-600">Luni - Vineri: 9:00 - 18:00</p>
                      <p className="text-gray-600">Sâmbătă - Duminică: Închis</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0">
        <div className="h-[400px] w-full bg-gray-200 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-500">Hartă Google Maps</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pregătit să începem?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactează-ne astăzi pentru a discuta despre proiectul tău și cum te putem ajuta să îți atingi obiectivele.
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 border border-white shadow-md">
            Programează o consultație
          </Button>
        </div>
      </section>
    </div>
  )
}
