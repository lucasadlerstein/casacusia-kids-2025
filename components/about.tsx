import Image from "next/image"

export function About() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/isotipo-color.png"
              alt="CASACUSIA"
              width={55}
              height={55}
              className="h-auto max-w-sm"
            />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-deep-blue mb-8">¿Qué es CASACUSIA?</h2>

          <div className="space-y-6 text-lg md:text-xl text-deep-blue/80 leading-relaxed">
            <p className="text-pretty">
              Somos una ONG que conecta personas con hipoacusia y sus familias,<br/>generando un espacio colectivo que nos
              acompañe a mejorar nuestra calidad de vida.
            </p>
            <p className="text-pretty">
              Creemos que la discapacidad no se cura: se acepta, se transita, se comparte. Y cuando lo hacemos
              acompañados, todo se vuelve más fácil.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
