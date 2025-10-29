import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Calendar, Clock, MapPin, AlertCircle } from "lucide-react"
import Link from "next/link"

export function Intro() {
  return (
    <section id="evento" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-deep-blue text-center mb-4">
          Un día especial para toda la familia
        </h2>
        <p className="text-lg md:text-xl text-deep-blue/80 text-center mb-12 max-w-3xl mx-auto text-pretty">
          Un espacio donde los chicos con hipoacusia pueden conocerse, jugar y compartir experiencias únicas
        </p>

        {/* Three columns for date, time, location */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 bg-cream rounded-2xl">
            <Calendar className="w-12 h-12 text-violet mb-4" />
            <h3 className="text-lg font-bold text-deep-blue mb-2">Fecha</h3>
            <p className="text-deep-blue">Domingo 30 de Noviembre, 2025</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-cream rounded-2xl">
            <Clock className="w-12 h-12 text-green mb-4" />
            <h3 className="text-lg font-bold text-deep-blue mb-2">Horario</h3>
            <p className="text-deep-blue">14:00 a 18:00 hs</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-cream rounded-2xl">
            <MapPin className="w-12 h-12 text-yellow mb-4" />
            <h3 className="text-lg font-bold text-deep-blue mb-2">Lugar</h3>
            <p className="text-deep-blue">Parque de la Innovación, Núñez, CABA</p>
          </div>
        </div>

        {/* Alert box for registration */}
        <Alert className="max-w-3xl mx-auto bg-violet/10 border-violet">
          <AlertCircle className="h-5 w-5 text-violet" />
          <AlertDescription className="flex flex-col md:flex-row items-center justify-between gap-4 ml-2">
            <span className="text-deep-blue font-semibold">
              ¡Importante! El evento es con inscripción gratuita y obligatoria
            </span>
            <Button className="bg-violet hover:bg-violet/90 text-white font-semibold shrink-0" asChild>
              <Link href="#inscripcion">Inscribirme</Link>
            </Button>
          </AlertDescription>
        </Alert>
      </div>
    </section>
  )
}
