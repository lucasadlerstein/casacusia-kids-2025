import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet via-green to-yellow animate-gradient">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 opacity-30 animate-float">
        <svg viewBox="0 0 100 100" className="text-cream">
          <circle cx="50" cy="50" r="40" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-20 right-20 w-16 h-16 opacity-30 animate-float-delayed">
        <svg viewBox="0 0 100 100" className="text-deep-blue">
          <polygon points="50,10 90,90 10,90" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 opacity-20 animate-float">
        <svg viewBox="0 0 100 100" className="text-cream">
          <rect x="10" y="10" width="80" height="80" rx="15" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Date and time above title */}
          <p className="text-lg md:text-xl font-semibold text-cream mb-4">Domingo 30 de Noviembre • 14 a 18hs</p>

          <div className="mb-6">
            <Image
              src="/images/isotipo-color.png"
              alt="CASACUSIA"
              width={200}
              height={200}
              className="w-32 h-32 md:w-48 md:h-48"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-cream mb-4 text-balance">CASACUSIA KIDS 2025</h1>

          <div className="flex items-center gap-2 mb-8">
            <p className="text-sm md:text-base font-medium text-cream">Presentado por</p>
            <Image
              src="/images/logo-amplitone.png"
              alt="Amplitone"
              width={150}
              height={40}
              className="h-6 md:h-8 w-auto"
            />
          </div>

          <p className="text-xl md:text-2xl text-cream mb-12 max-w-3xl text-pretty leading-relaxed">
            Un evento para que chicos y chicas con hipoacusia se diviertan, jueguen y vean que no son los únicos.
          </p>

          <div className="flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="bg-deep-blue hover:bg-deep-blue/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <Link href="#inscripcion">Inscribirme ahora</Link>
            </Button>
            <p className="text-sm font-semibold text-cream">Inscripción gratuita y obligatoria</p>
          </div>
        </div>
      </div>
    </section>
  )
}
