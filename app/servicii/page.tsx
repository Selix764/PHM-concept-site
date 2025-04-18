"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ServiceModal } from "@/components/service-modal"

export default function Services() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const openModal = (modalId: string) => {
    setActiveModal(modalId)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/services-hero.jpg" alt="Background" fill className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/70 to-black/50 mix-blend-multiply" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Serviciile Noastre</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
              Descoperă gama noastră completă de servicii media și publicitate, create pentru a-ți transforma viziunea
              în realitate.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Soluții Complete pentru Brandul Tău</h2>
              <p className="text-gray-700 mb-4">
                La PHM, oferim o gamă completă de servicii media și publicitate, adaptate nevoilor și obiectivelor
                afacerii tale. De la strategii media și organizare de evenimente, la producție publicitară, suntem aici
                pentru a te ajuta să îți construiești și să îți promovezi brandul în mod eficient.
              </p>
              <p className="text-gray-700 mb-6">
                Echipa noastră de profesioniști are experiența și expertiza necesare pentru a oferi soluții creative și
                inovatoare, care să te ajute să te diferențiezi pe piață și să îți atingi obiectivele de business.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/services-overview.jpg" alt="Services Overview" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serviciile Noastre</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explorează gama noastră de servicii și descoperă cum te putem ajuta să îți atingi obiectivele.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    id={`${service.id}-modal-trigger`}
                    className="w-full bg-red-600 hover:bg-red-700 text-white border border-red-600 shadow-md"
                    onClick={() => openModal(service.id)}
                  >
                    Află mai multe <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
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
            Solicită o ofertă
          </Button>
        </div>
      </section>

      {/* Service Modals */}
      <ServiceModal isOpen={activeModal === "media"} onClose={closeModal} title="Media">
        <div className="prose max-w-none">
          <p>
            PHM este o platforma media dedicată punerii în aplicare a unor idei proaspete şi a unui stil de viaţă
            sănătos. Compania propune dezvoltarea unui plan de comunicare pentru identificarea gradului de notorietate a
            brandului ori afacerii. PHM oferă soluţii de identificare a existenţei ca şi brand pe piaţă serviciilor şi
            canalelor media propuse:
          </p>

          <h3 className="font-bold text-lg mt-6 mb-2">1. Strategii:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>strategie de marketing şi dezvoltare brand/produs</li>
            <li>strategie inovativă bazată pe canalele media şi dezvoltarea de concepte creative</li>
          </ul>

          <h3 className="font-bold text-lg mt-6 mb-2">2. Producţie audio-vizual:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>producţie materiale audio</li>
            <li>producţie materiale video</li>
            <li>producţii multimedia</li>
          </ul>

          <h3 className="font-bold text-lg mt-6 mb-2">3. Emisiuni Online:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Emisiunea "Faţă-în- faţă" (emisiune dedicate studenţilor)</li>
            <li>Emisiunea "Mişcarea - o pasiune" (un show despre sănătate şi lifestyle)</li>
            <li>Emisiunea "Interviul Săptămânii" ("lecţii de viaţă cu…..")</li>
            <li>Rubrica Meteo cu Iulia Zgripcea</li>
          </ul>
        </div>
      </ServiceModal>

      <ServiceModal isOpen={activeModal === "events"} onClose={closeModal} title="Events">
        <div className="prose max-w-none">
          <p>
            PHM oferă o gama largă de evenimente cu standarde de înalta tehnologie. Indiferent de evenimentul dvs.,
            oferim consultanţă pentru a executa orice mărime de eveniment; de la un eveniment privat la un mass event,
            un eveniment modern la unul istoric ori un eveniment outdoor sau indoor.
          </p>

          <h3 className="font-bold text-lg mt-6 mb-2">Creăm amintiri pentru:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Evenimente sociale şi evenimente caritabile</li>
            <li>
              Evenimente corporative şi evenimente de producţie (team building, conferinţe, evenimente anuale,
              evenimente formale, evenimente pentru angajaţi, ceremonii)
            </li>
            <li>Evenimente tematice</li>
          </ul>
        </div>
      </ServiceModal>

      <ServiceModal isOpen={activeModal === "productie"} onClose={closeModal} title="Producţie publicitară">
        <div className="prose max-w-none">
          <p>
            PHM oferă o mare varietate de imprimare cu opţiuni de finisare şi cu materiale promoţionale pentru orice tip
            de afacere. Membrii echipei noastre sunt gata să va ajute cu soluţii de imprimare care vor crea materiale de
            marketing personalizate, cum ar fi:
          </p>

          <ul className="list-disc pl-6 mt-4">
            <li>
              Printurile digitale de mari dimensiuni: autocolante, bannere, backlit-uri, mesh-uri, steaguri, afise,
              panouri PVC.
            </li>
            <li>Printuri pentru sisteme de expunere; (roll-up, postere)</li>
            <li>
              Materiale publicitare, materiale tiparite (brosuri, flyere,) materiale promotionale si standuri
              expozitionale.
            </li>
          </ul>
        </div>
      </ServiceModal>
    </div>
  )
}

// Sample data
const services = [
  {
    id: "media",
    icon: (
      <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
      </svg>
    ),
    title: "Media",
    shortDescription: "Platformă media dedicată punerii în aplicare a unor idei proaspete.",
    description:
      "Dezvoltăm planuri de comunicare pentru identificarea gradului de notorietate a brandului și oferim soluții de marketing personalizate.",
  },
  {
    id: "events",
    icon: (
      <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path>
      </svg>
    ),
    title: "Events",
    shortDescription: "Organizăm evenimente de înaltă calitate cu standarde tehnologice superioare.",
    description:
      "De la evenimente private la evenimente de masă, oferim consultanță și execuție pentru orice tip de eveniment, fie el modern, istoric, indoor sau outdoor.",
  },
  {
    id: "productie",
    icon: (
      <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path>
      </svg>
    ),
    title: "Producţie publicitară",
    shortDescription: "Oferim soluții de imprimare și materiale promoționale personalizate.",
    description:
      "De la printuri digitale de mari dimensiuni la materiale publicitare și promoționale, echipa noastră este pregătită să ofere soluții creative pentru orice tip de afacere.",
  },
]
