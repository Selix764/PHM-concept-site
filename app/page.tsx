"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ArrowRight, Play, ArrowDown } from "lucide-react"
import { ServiceModal } from "@/components/service-modal"

export default function Home() {
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
          <Image src="/images/top_right.png" alt="Background" fill className="object-cover opacity-50" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/70 to-black/50 mix-blend-multiply" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">We Brand Your Lifestyle</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
              Perfect Home Media oferă soluții creative pentru susținerea succesului afacerii tale în producția de media
              și lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white border border-red-600 shadow-md">
                Serviciile Noastre <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20 shadow-md bg-red-600/50"
              >
                Contactează-ne
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border border-white/30 bg-black/30 text-white hover:bg-black/50"
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Povestea PHM</h2>
              <p className="text-gray-700 mb-4">
                PHM a luat naștere ca o reală soluție a nevoilor de promovare a brand-urilor naționale și internaționale
                de pe piața media din România.
              </p>
              <p className="text-gray-700 mb-6">
                "Ideea de proiect PHM a apărut în urma unor participări frecvente la evenimentele publicitare și
                campanii media, fiind invitat ca persoană publică sau ca om de televiziune. Atunci, am simțit nevoia de
                a îmbunătăți instrumentele de publicitate."
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white border border-red-600 shadow-md">
                Află mai multe <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/top_left.png" alt="PHM Story" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-16 h-16 bg-red-600 border-none text-white hover:bg-red-700 hover:scale-110 transition-transform"
              >
                <Play className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serviciile Noastre</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferim o gamă completă de servicii media pentru a vă ajuta să vă construiți și să vă promovați brandul.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button
                  id={`${service.id}-modal-trigger`}
                  onClick={() => openModal(service.id)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white border border-red-600 shadow-md"
                >
                  Află mai multe <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Proiectele Noastre</h2>
              <p className="text-gray-400 max-w-xl">
                Explorați o selecție din proiectele noastre recente care demonstrează expertiza și creativitatea echipei
                PHM.
              </p>
            </div>
            <Button className="mt-6 md:mt-0 bg-red-600 hover:bg-red-700 text-white border border-red-600 shadow-md">
              Vezi toate proiectele
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg h-[300px]">
                <Image
                  src={project.image || "/images/bottom_right.png"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.category}</p>
                  <Link href="#" className="text-red-500 font-medium flex items-center hover:text-red-400">
                    Vezi proiectul <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pregătit să îți transformi brandul?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Hai să discutăm despre cum putem ajuta afacerea ta să strălucească în peisajul media.
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 border border-white shadow-md">
            Contactează-ne acum
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
    description: "Platformă media dedicată punerii în aplicare a unor idei proaspete şi a unui stil de viaţă sănătos.",
  },
  {
    id: "events",
    icon: (
      <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path>
      </svg>
    ),
    title: "Events",
    description: "Organizăm evenimente de înaltă calitate, de la evenimente private la evenimente de masă.",
  },
  {
    id: "productie",
    icon: (
      <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path>
      </svg>
    ),
    title: "Producţie publicitară",
    description: "Oferim o varietate de soluții de imprimare și materiale promoționale pentru orice tip de afacere.",
  },
]

const projects = [
  {
    title: "Campanie Brand X",
    category: "Branding & Marketing",
    image: "/images/bottom_left.png",
  },
  {
    title: "Producție Video Y",
    category: "Producție Video",
    image: "/images/bottom_right.png",
  },
  {
    title: "Sesiune Foto Z",
    category: "Fotografie",
    image: "/images/top_left.png",
  },
]
