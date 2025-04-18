"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 text-white shadow-md py-2" : "bg-black/40 text-white py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-32">
              <Image
                src={isScrolled ? "/phm-logo-dark.png" : "/phm-logo-light.png"}
                alt="PHM Logo"
                fill
                className="object-contain"
                style={{ filter: isScrolled ? "none" : "brightness(0) invert(1)" }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium hover:text-red-500 transition-colors">
              Acasă
            </Link>
            <Link href="/de-ce-phm" className="font-medium hover:text-red-500 transition-colors">
              De Ce PHM?
            </Link>
            <Link href="/servicii" className="font-medium hover:text-red-500 transition-colors">
              Servicii
            </Link>
            <Link href="/clienti" className="font-medium hover:text-red-500 transition-colors">
              Clienți
            </Link>
            <Link href="/galerie" className="font-medium hover:text-red-500 transition-colors">
              Galerie
            </Link>
            <Link href="/contact" className="font-medium hover:text-red-500 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`flex items-center ${isScrolled ? "text-white hover:bg-white/20 border border-white/30" : "text-white hover:bg-white/20 border border-white/30"}`}
                >
                  <Globe className="h-4 w-4 mr-1" />
                  <span>RO</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Română</DropdownMenuItem>
                <DropdownMenuItem>English</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className="bg-red-600 hover:bg-red-700 text-white border border-red-600 shadow-md">
              Contactează-ne
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 text-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="font-medium py-2 hover:text-red-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Acasă
            </Link>
            <Link
              href="/de-ce-phm"
              className="font-medium py-2 hover:text-red-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              De Ce PHM?
            </Link>
            <Link
              href="/servicii"
              className="font-medium py-2 hover:text-red-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Servicii
            </Link>
            <Link
              href="/clienti"
              className="font-medium py-2 hover:text-red-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Clienți
            </Link>
            <Link
              href="/galerie"
              className="font-medium py-2 hover:text-red-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Galerie
            </Link>
            <Link
              href="/contact"
              className="font-medium py-2 hover:text-red-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="flex items-center pt-2">
              <Button variant="outline" size="sm" className="mr-2 border border-gray-300 bg-white text-gray-700">
                <Globe className="h-4 w-4 mr-1" />
                RO
              </Button>
              <Button className="bg-red-600 hover:bg-red-700 text-white border border-red-600 shadow-md">
                Contactează-ne
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
