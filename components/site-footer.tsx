"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="relative h-12 w-32 mb-6">
              <Image
                src="/phm-logo-light.png"
                alt="PHM Logo"
                fill
                className="object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p className="text-gray-400 mb-6">
              Perfect Home Media oferă soluții creative pentru susținerea succesului afacerii tale în producția de media
              și lifestyle.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Link-uri Rapide</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/de-ce-phm" className="text-gray-400 hover:text-white transition-colors">
                  De Ce PHM?
                </Link>
              </li>
              <li>
                <Link href="/servicii" className="text-gray-400 hover:text-white transition-colors">
                  Servicii
                </Link>
              </li>
              <li>
                <Link href="/clienti" className="text-gray-400 hover:text-white transition-colors">
                  Clienți
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="text-gray-400 hover:text-white transition-colors">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Servicii</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("media-modal-trigger")?.click()
                  }}
                >
                  Media
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("events-modal-trigger")?.click()
                  }}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("productie-modal-trigger")?.click()
                  }}
                >
                  Producție Publicitară
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <span className="text-gray-400">Adresa ta, București, România</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-red-500 mr-3" />
                <span className="text-gray-400">+40 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-red-500 mr-3" />
                <span className="text-gray-400">contact@perfecthomemedia.ro</span>
              </li>
            </ul>
            <Button className="mt-6 bg-red-600 hover:bg-red-700 text-white border border-red-600 shadow-md">
              Trimite un mesaj
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Perfect Home Media. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/termeni-si-conditii" className="text-gray-500 text-sm hover:text-white transition-colors">
                Termeni și Condiții
              </Link>
              <Link
                href="/politica-de-confidentialitate"
                className="text-gray-500 text-sm hover:text-white transition-colors"
              >
                Politica de Confidențialitate
              </Link>
              <Link href="/cookies" className="text-gray-500 text-sm hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
