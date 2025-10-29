export function EmotionalSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated colorful background with kermesse theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet/30 via-yellow/30 via-green/30 to-violet/30 animate-gradient" />

      {/* Decorative circus and kermesse elements */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-20 animate-float">
        <svg viewBox="0 0 100 100" className="text-yellow">
          <circle cx="50" cy="50" r="45" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-20 right-10 w-24 h-24 opacity-25 animate-float-delayed">
        <svg viewBox="0 0 100 100" className="text-violet">
          <circle cx="50" cy="50" r="40" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-1/4 w-28 h-28 opacity-20 animate-float">
        <svg viewBox="0 0 100 100" className="text-green">
          <circle cx="50" cy="50" r="42" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-1/3 w-20 h-20 opacity-30 animate-float-delayed">
        <svg viewBox="0 0 100 100" className="text-yellow">
          <polygon points="50,10 90,90 10,90" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-5xl font-bold text-deep-blue mb-8 text-balance leading-tight">
            Cuando nos encontramos,<br/>el sonido se vuelve comunidad
          </h2>
        </div>
      </div>
    </section>
  )
}
