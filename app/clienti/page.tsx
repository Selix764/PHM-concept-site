import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Quote } from "lucide-react"

export default function Clients() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/70 to-black/50 mix-blend-multiply" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Clienții Noștri</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
              Descoperă poveștile de succes ale clienților noștri și cum i-am ajutat să își atingă obiectivele.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Branduri care ne-au ales</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Suntem mândri să colaborăm cu branduri de top din diverse industrii, oferindu-le soluții media
              personalizate.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {clients.map((client, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={client.logo || "/placeholder.svg?height=100&width=200"}
                  alt={client.name}
                  width={150}
                  height={80}
                  className="object-contain h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Studii de Caz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explorează proiectele noastre de succes și rezultatele obținute pentru clienții noștri.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">Toate</TabsTrigger>
                <TabsTrigger value="branding">Branding</TabsTrigger>
                <TabsTrigger value="video">Video</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((study, index) => (
                  <Card key={index} className="overflow-hidden border border-gray-200 shadow-md">
                    <div className="relative h-48">
                      <Image
                        src={study.image || "/placeholder.svg?height=400&width=600"}
                        alt={study.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-white bg-red-600 rounded-full">
                        {study.category}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                      <p className="text-gray-600 mb-4">{study.description}</p>
                      <Button variant="outline" className="w-full">
                        Vezi studiul de caz
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="branding" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies
                  .filter((study) => study.category === "Branding")
                  .map((study, index) => (
                    <Card key={index} className="overflow-hidden border border-gray-200 shadow-md">
                      <div className="relative h-48">
                        <Image
                          src={study.image || "/placeholder.svg?height=400&width=600"}
                          alt={study.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-white bg-red-600 rounded-full">
                          {study.category}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                        <p className="text-gray-600 mb-4">{study.description}</p>
                        <Button variant="outline" className="w-full">
                          Vezi studiul de caz
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            {/* Similar TabsContent for other categories */}
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce Spun Clienții Noștri</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descoperă experiențele clienților noștri și cum i-am ajutat să își atingă obiectivele.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-red-600/20 mb-4" />
                  <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg?height=100&width=100"}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Devino unul dintre clienții noștri de succes</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Hai să discutăm despre cum putem ajuta afacerea ta să strălucească în peisajul media.
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 border border-white shadow-md">
            Contactează-ne acum
          </Button>
        </div>
      </section>
    </div>
  )
}

// Sample data
const clients = [
  { name: "Brand 1", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Brand 2", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Brand 3", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Brand 4", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Brand 5", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Brand 6", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Brand 7", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Brand 8", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Brand 9", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Brand 10", logo: "/placeholder.svg?height=100&width=200" },
]

const caseStudies = [
  {
    title: "Rebranding Complet pentru Compania X",
    category: "Branding",
    description: "Am creat o nouă identitate vizuală care a ajutat compania să se repoziționeze pe piață.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Campanie Video pentru Lansare Produs Y",
    category: "Video",
    description: "O campanie video care a generat peste 1 milion de vizualizări și a crescut vânzările cu 30%.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Strategie de Marketing Digital pentru Z",
    category: "Marketing",
    description: "Strategie integrată care a dus la o creștere de 45% a traficului organic și 25% a conversiilor.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Sesiune Foto pentru Catalogul Sezonier",
    category: "Fotografie",
    description: "Fotografii profesionale care au crescut angajamentul pe social media cu 60%.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Campanie Integrată pentru Eveniment",
    category: "Marketing",
    description: "Strategie 360° care a dus la sold-out al evenimentului cu 2 săptămâni înainte.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Identitate Vizuală pentru Start-up",
    category: "Branding",
    description: "Brand complet care a ajutat start-up-ul să atragă investiții de 500.000€.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const testimonials = [
  {
    quote:
      "Colaborarea cu echipa PHM a fost o experiență extraordinară. Profesionalismul și creativitatea lor au depășit toate așteptările noastre.",
    name: "Alexandru Popescu",
    position: "CEO, Compania X",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "PHM ne-a ajutat să ne transformăm complet identitatea de brand. Rezultatele au fost imediate și impactul asupra afacerii noastre a fost semnificativ.",
    name: "Maria Ionescu",
    position: "Marketing Director, Compania Y",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Apreciem foarte mult atenția la detalii și dedicarea echipei PHM. Au înțeles perfect nevoile noastre și au livrat soluții personalizate.",
    name: "Andrei Dumitrescu",
    position: "Fondator, Start-up Z",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]
