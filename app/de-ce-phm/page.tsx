import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Users, Award, TrendingUp } from "lucide-react"

export default function WhyPHM() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">De Ce PHM?</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
              Descoperă ce ne face diferiți și cum putem aduce valoare afacerii tale prin soluții media personalizate.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Povestea Noastră</h2>
              <p className="text-gray-700 mb-4">
                PHM a luat naștere ca o reală soluție a nevoilor de promovare a brand-urilor naționale și internaționale
                de pe piața media din România.
              </p>
              <p className="text-gray-700 mb-4">
                "Ideea de proiect PHM a apărut în urma unor participări frecvente la evenimentele publicitare și
                campanii media, fiind invitat ca persoană publică sau ca om de televiziune. Atunci, am simțit nevoia de
                a îmbunătăți instrumentele de publicitate; a serviciilor de promovare media, a activităților BTL și a
                promovării în sine de publicitate. Majoritatea companiilor de publicitate nu ofereau un pachet complet
                de servicii, iar cele care ofereau, aveau prețuri foarte mari."
              </p>
              <p className="text-gray-700 mb-4">
                Astfel, am decis să creăm o companie care să ofere servicii complete de media și publicitate la prețuri
                accesibile, adaptate nevoilor fiecărui client.
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="PHM Story" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Valorile Noastre</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              La PHM, ne ghidăm după un set de valori care ne definesc munca și relațiile cu clienții noștri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">De Ce Să Ne Alegi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descoperă avantajele colaborării cu echipa PHM și cum putem contribui la succesul afacerii tale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pregătit să colaborăm?</h2>
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
const values = [
  {
    icon: <Users className="h-6 w-6 text-red-600" />,
    title: "Orientare către client",
    description:
      "Punem nevoile și obiectivele clienților noștri pe primul loc, oferind soluții personalizate pentru fiecare proiect.",
  },
  {
    icon: <Award className="h-6 w-6 text-red-600" />,
    title: "Excelență",
    description:
      "Ne străduim să oferim servicii de cea mai înaltă calitate, depășind așteptările clienților noștri în fiecare proiect.",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-red-600" />,
    title: "Inovație",
    description:
      "Suntem mereu la curent cu cele mai noi tendințe și tehnologii din industrie, implementând soluții inovatoare.",
  },
]

const reasons = [
  {
    title: "Experiență și expertiză",
    description:
      "Echipa noastră are o experiență vastă în domeniul media și publicitate, oferind soluții profesionale pentru orice tip de proiect.",
  },
  {
    title: "Abordare personalizată",
    description:
      "Înțelegem că fiecare afacere este unică, de aceea oferim soluții personalizate, adaptate nevoilor și obiectivelor tale specifice.",
  },
  {
    title: "Servicii complete",
    description:
      "Oferim o gamă completă de servicii media și publicitate, de la branding și identitate vizuală, la producție video și fotografie profesională.",
  },
  {
    title: "Rezultate măsurabile",
    description:
      "Ne concentrăm pe obținerea unor rezultate concrete și măsurabile, care să contribuie la creșterea și dezvoltarea afacerii tale.",
  },
  {
    title: "Raport calitate-preț excelent",
    description:
      "Oferim servicii de înaltă calitate la prețuri competitive, asigurând un raport calitate-preț excelent pentru clienții noștri.",
  },
  {
    title: "Comunicare transparentă",
    description:
      "Menținem o comunicare deschisă și transparentă pe tot parcursul proiectului, ținându-te la curent cu fiecare etapă a procesului.",
  },
]
