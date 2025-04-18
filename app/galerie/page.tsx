import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play } from "lucide-react"

export default function Gallery() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Galerie</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
              Explorează portofoliul nostru de proiecte și descoperă creativitatea și expertiza echipei PHM.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-4 w-full max-w-md">
                <TabsTrigger value="all">Toate</TabsTrigger>
                <TabsTrigger value="branding">Branding</TabsTrigger>
                <TabsTrigger value="video">Video</TabsTrigger>
                <TabsTrigger value="photo">Foto</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-lg">
                    <div className="aspect-square relative">
                      <Image
                        src={item.image || "/placeholder.svg?height=600&width=600"}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {item.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full w-16 h-16 bg-black/30 border-white text-white hover:bg-black/50 hover:scale-110 transition-transform z-10"
                          >
                            <Play className="h-6 w-6" />
                          </Button>
                        </div>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="inline-block px-3 py-1 mb-2 text-xs font-medium text-white bg-red-600 rounded-full">
                          {item.category}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-gray-300">{item.client}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="branding" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems
                  .filter((item) => item.category === "Branding")
                  .map((item, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-lg">
                      <div className="aspect-square relative">
                        <Image
                          src={item.image || "/placeholder.svg?height=600&width=600"}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="inline-block px-3 py-1 mb-2 text-xs font-medium text-white bg-red-600 rounded-full">
                            {item.category}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                          <p className="text-gray-300">{item.client}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>

            {/* Similar TabsContent for other categories */}
          </Tabs>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Încarcă mai multe
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vrei să lucrăm împreună?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Hai să discutăm despre proiectul tău și cum putem aduce valoare afacerii tale.
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
const galleryItems = [
  {
    title: "Rebranding Complet",
    category: "Branding",
    client: "Compania X",
    image: "/placeholder.svg?height=600&width=600",
    type: "image",
  },
  {
    title: "Campanie Video",
    category: "Video",
    client: "Compania Y",
    image: "/placeholder.svg?height=600&width=600",
    type: "video",
  },
  {
    title: "Sesiune Foto Produs",
    category: "Fotografie",
    client: "Compania Z",
    image: "/placeholder.svg?height=600&width=600",
    type: "image",
  },
  {
    title: "Identitate Vizuală",
    category: "Branding",
    client: "Start-up A",
    image: "/placeholder.svg?height=600&width=600",
    type: "image",
  },
  {
    title: "Spot Publicitar",
    category: "Video",
    client: "Compania B",
    image: "/placeholder.svg?height=600&width=600",
    type: "video",
  },
  {
    title: "Fotografie Corporate",
    category: "Fotografie",
    client: "Compania C",
    image: "/placeholder.svg?height=600&width=600",
    type: "image",
  },
  {
    title: "Manual de Brand",
    category: "Branding",
    client: "Compania D",
    image: "/placeholder.svg?height=600&width=600",
    type: "image",
  },
  {
    title: "Video Prezentare",
    category: "Video",
    client: "Compania E",
    image: "/placeholder.svg?height=600&width=600",
    type: "video",
  },
  {
    title: "Campanie Socială",
    category: "Marketing",
    client: "ONG F",
    image: "/placeholder.svg?height=600&width=600",
    type: "image",
  },
]
