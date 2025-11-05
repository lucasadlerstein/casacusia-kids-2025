export function EmotionalSection() {
  return (
    <section className='relative py-16 md:py-20 rounded-lg overflow-hidden w-[calc(100%-2rem)]'>
      {/* Animated colorful background with kermesse theme */}
      <div className='absolute inset-0 bg-linear-to-br from-violet/30 via-yellow/30 to-violet/30 animate-gradient' />

      {/* Decorative circus and kermesse elements */}
      <div className='absolute top-4 left-4 md:top-10 md:left-10 w-20 h-20 md:w-32 md:h-32 opacity-15 md:opacity-20 animate-float'>
        <svg viewBox='0 0 100 100' className='text-yellow'>
          <circle cx='50' cy='50' r='45' fill='currentColor' />
        </svg>
      </div>
      <div className='absolute top-8 right-4 md:top-20 md:right-10 w-16 h-16 md:w-24 md:h-24 opacity-15 md:opacity-25 animate-float-delayed'>
        <svg viewBox='0 0 100 100' className='text-violet'>
          <circle cx='50' cy='50' r='40' fill='currentColor' />
        </svg>
      </div>
      <div className='absolute bottom-8 left-1/4 md:bottom-20 w-20 h-20 md:w-28 md:h-28 opacity-15 md:opacity-20 animate-float'>
        <svg viewBox='0 0 100 100' className='text-green'>
          <circle cx='50' cy='50' r='42' fill='currentColor' />
        </svg>
      </div>
      <div className='absolute bottom-4 right-1/3 md:bottom-10 w-14 h-14 md:w-20 md:h-20 opacity-20 md:opacity-30 animate-float-delayed'>
        <svg viewBox='0 0 100 100' className='text-yellow'>
          <polygon points='50,10 90,90 10,90' fill='currentColor' />
        </svg>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-2xl md:text-5xl font-bold text-deep-blue mb-8 text-balance leading-tight'>
            Cuando nos encontramos,
            <br />
            el sonido se vuelve comunidad
          </h2>
        </div>
      </div>
    </section>
  );
}
