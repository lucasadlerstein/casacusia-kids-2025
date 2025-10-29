import { MapPin } from "lucide-react"

export function MapSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-deep-blue text-center mb-4">¿Cómo llegar?</h2>
        <p className="text-lg text-deep-blue/80 text-center mb-12">
          <MapPin className="inline-block w-5 h-5 mr-2" />
          Parque de la Innovación - Campos Salles 1138, Núñez, CABA
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.4567890123456!2d-58.45678901234567!3d-34.54321012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5c0c0c0c0c0%3A0x0!2sCDI%20Parque%20de%20la%20Innovaci%C3%B3n!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
          <p className="text-center text-sm text-deep-blue/60 mt-4">
            Para ingresar y estacionar, usar la dirección: Campos Salles 1138
          </p>
        </div>
      </div>
    </section>
  )
}
