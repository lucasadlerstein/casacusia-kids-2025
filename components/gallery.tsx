"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const photos = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Casacusia_GZ-215-min-xLsB4y1rwg7aCy1Yj2BaPprNl6fENm.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Casacusia_GZ-179-min-goue0P7cMRC3BpsGQxM4Z8HXwPknuK.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Casacusia_GZ-80-min-a0KeBlNvtWCodOrblh6CeO2OhY11ja.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Casacusia_GZ-39-min-3LbGtAmVYcsggv3flX9XgnO7f80XEO.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Casacusia_GZ-221-min-ae8aTSpHguBNp1cO6aHrtLNOjl5hkZ.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Casacusia_GZ-212-min-GoJjQCVAjolWb17EFsOwW9CgqsfYje.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Casacusia_GZ-69-min-dMZNMliXxj0toStyCGtbS8ed2HV2in.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Casacusia_GZ-80-min-zKaK2bB1TmcZLEYzyzcdPzJz1dMyW4.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copia%20de%20Casacusia_GZ-85-min-N11B0ZzuU7khehw097vRpZ0nafmsKl.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Casacusia_GZ-76-min-hvx8jdeM5Vit9FgfSPkjlEmGX3Z9Kk.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Casacusia_GZ-32-min-2E5ZbdzgozEth9pqGcjTnHoCcyuylI.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00032-min-CHP25nm3k9Axlu40AtNDPG4xn9RSaq.jpg",
]

export function Gallery() {
  const [showAll, setShowAll] = useState(true)
  const displayPhotos = showAll ? photos : photos.slice(0, 12)

  return (
    <section id="galeria" className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-deep-blue text-center mb-4">
          Así vivimos otros encuentros en Casacusia
        </h2>
        <p className="text-lg md:text-xl text-deep-blue/80 text-center mb-12 max-w-3xl mx-auto">
          Momentos de alegría, conexión y comunidad
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {displayPhotos.map((photo, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Image
                src={photo || "/placeholder.svg"}
                alt={`Evento CASACUSIA ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {true && (
          <div className="flex justify-center md:hidden">
            <Button onClick={() => setShowAll(true)} className="bg-violet hover:bg-violet/90 text-white font-semibold">
              Ver más fotos
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
