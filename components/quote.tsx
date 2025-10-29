export function Quote() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-relaxed">
            "Cuando nos encontramos, el sonido se vuelve comunidad."
          </blockquote>
          <cite className="text-xl text-primary font-semibold not-italic">— Fundación CASACUSIA</cite>
        </div>
      </div>
    </section>
  )
}
