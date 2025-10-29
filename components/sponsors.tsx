import Image from "next/image"

export function Sponsors() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Amplitone - Presenta */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-deep-blue text-center mb-8">Presenta</h3>
          <div className="flex justify-center">
            <Image
              src="/images/Logo_AMPLITONE_web.png"
              alt="Amplitone"
              width={300}
              height={100}
              className="h-[100px] w-auto object-contain"
            />
          </div>
        </div>

        {/* Other sponsors */}
        <div>
          <h3 className="text-2xl font-bold text-deep-blue text-center mb-8">Hacen posible el evento</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center max-w-5xl mx-auto">
            <Image
              src="/images/Logo_INFINIDAD_Negro-01.png"
              alt="Infinidad"
              width={195}
              height={100}
              className="h-[100px] w-auto max-w-[195px] object-contain"
            />
            <Image
              src="/images/pax.png"
              alt="Pax Assistance"
              width={155}
              height={100}
              className="h-[100px] w-auto max-w-[155px] object-contain"
            />
            <Image
              src="/images/tecnosalud.png"
              alt="Tecnosalud"
              width={195}
              height={100}
              className="h-[100px] w-auto max-w-[195px] object-contain"
            />
            <Image
              src="/images/MEDEL.png"
              alt="MED-EL"
              width={195}
              height={100}
              className="h-[100px] w-auto max-w-[195px] object-contain"
            />
            <Image
              src="/images/parque.png"
              alt="Parque de Innovación"
              width={155}
              height={100}
              className="h-[100px] w-auto max-w-[155px] object-contain"
            />
            <Image
              src="/images/pinturas_eterna.png"
              alt="Eterna"
              width={155}
              height={100}
              className="h-[100px] w-auto max-w-[155px] object-contain"
            />
            
            <Image
              src="/images/CASAN.png"
              alt="CASAN"
              width={155}
              height={100}
              className="h-[100px] w-auto max-w-[155px] object-contain"
            />
            
          </div>
        </div>
      </div>
    </section>
  )
}
