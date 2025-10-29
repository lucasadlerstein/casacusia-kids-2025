export function VideoTestimonial() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-deep-blue text-center mb-6">
          Por esto es importante que vengas
        </h2>
        <p className="text-xl md:text-2xl text-deep-blue/80 text-center mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          En CASACUSIA KIDS, los chicos descubren que no están solos y crean vínculos y confianza que los acompañarán
          toda la vida.
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg text-deep-blue/80 leading-relaxed">
                CASACUSIA KIDS es más que un evento: es un espacio donde los chicos con hipoacusia pueden ser ellos
                mismos, compartir experiencias y crear amistades que durarán toda la vida.
              </p>
              <p className="text-lg text-deep-blue/80 leading-relaxed">
                Ver que hay otros niños como ellos les da confianza, seguridad y la certeza de que no están solos en
                este camino.
              </p>
            </div>

            <div className="relative aspect-[9/16] md:aspect-video rounded-2xl overflow-hidden shadow-2xl bg-deep-blue">
              <iframe
                src="https://www.youtube.com/embed/QQSehCQct20"
                title="Testimonio CASACUSIA KIDS"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
