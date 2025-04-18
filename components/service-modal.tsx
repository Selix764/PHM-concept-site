"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export function ServiceModal({ isOpen, onClose, title, children }: ServiceModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      document.body.style.overflow = "hidden"
    } else {
      setTimeout(() => {
        setIsVisible(false)
      }, 300)
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isVisible && !isOpen) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
        isOpen ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
      onClick={onClose}
    >
      <div className="fixed inset-0 bg-black/50" />
      <div
        className={`relative bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto transform ${
          isOpen ? "translate-y-0" : "translate-y-8"
        } transition-transform duration-300`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b bg-white">
          <h2 className="text-2xl font-bold">{title}</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
