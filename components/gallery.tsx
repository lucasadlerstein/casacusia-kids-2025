import Image from 'next/image';

const photos = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Casacusia_GZ-215-min-xLsB4y1rwg7aCy1Yj2BaPprNl6fENm.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Casacusia_GZ-179-min-goue0P7cMRC3BpsGQxM4Z8HXwPknuK.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Casacusia_GZ-80-min-a0KeBlNvtWCodOrblh6CeO2OhY11ja.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Casacusia_GZ-39-min-3LbGtAmVYcsggv3flX9XgnO7f80XEO.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Casacusia_GZ-221-min-ae8aTSpHguBNp1cO6aHrtLNOjl5hkZ.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Casacusia_GZ-212-min-GoJjQCVAjolWb17EFsOwW9CgqsfYje.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Casacusia_GZ-69-min-dMZNMliXxj0toStyCGtbS8ed2HV2in.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Casacusia_GZ-80-min-zKaK2bB1TmcZLEYzyzcdPzJz1dMyW4.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copia%20de%20Casacusia_GZ-85-min-N11B0ZzuU7khehw097vRpZ0nafmsKl.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Casacusia_GZ-76-min-hvx8jdeM5Vit9FgfSPkjlEmGX3Z9Kk.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Casacusia_GZ-32-min-2E5ZbdzgozEth9pqGcjTnHoCcyuylI.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00032-min-CHP25nm3k9Axlu40AtNDPG4xn9RSaq.jpg',
];

// Bento grid layout patterns para desktop (4 columnas)
// Layout perfectamente balanceado: ambos lados terminan en fila 4
// Izquierda (col 1-2): grande(2) + pequeñas(1+1) + horizontal(1) = 4 filas
// Derecha (col 3-4): pequeñas(1+1+1+1) + grande(2) = 4 filas
const bentoPatternsDesktop = [
  { colSpan: 2, rowSpan: 2 }, // 1 - grande izquierda (col 1-2, filas 1-2)
  { colSpan: 1, rowSpan: 1 }, // 2 - pequeña derecha (col 3, fila 1)
  { colSpan: 1, rowSpan: 1 }, // 3 - pequeña derecha (col 4, fila 1)
  { colSpan: 1, rowSpan: 1 }, // 4 - pequeña derecha (col 3, fila 2)
  { colSpan: 1, rowSpan: 1 }, // 5 - pequeña derecha (col 4, fila 2)
  { colSpan: 1, rowSpan: 1 }, // 6 - pequeña izquierda (col 1, fila 3)
  { colSpan: 1, rowSpan: 1 }, // 7 - pequeña izquierda (col 2, fila 3)
  { colSpan: 2, rowSpan: 2 }, // 8 - grande derecha (col 3-4, filas 3-4)
  { colSpan: 2, rowSpan: 1 }, // 9 - horizontal izquierda (col 1-2, fila 4)
  { colSpan: 1, rowSpan: 1 }, // 10 - pequeña (no se usa en desktop para balance)
  { colSpan: 1, rowSpan: 1 }, // 11 - pequeña (no se usa en desktop para balance)
  { colSpan: 1, rowSpan: 1 }, // 12 - pequeña (no se usa en desktop para balance)
];

// Layout optimizado para mobile (2 columnas con variaciones)
const bentoPatternsMobile = [
  { colSpan: 2, rowSpan: 1 }, // 1 - horizontal destacado
  { colSpan: 1, rowSpan: 1 }, // 2
  { colSpan: 1, rowSpan: 1 }, // 3
  { colSpan: 1, rowSpan: 2 }, // 4 - vertical
  { colSpan: 1, rowSpan: 1 }, // 5
  { colSpan: 1, rowSpan: 1 }, // 6
  { colSpan: 1, rowSpan: 1 }, // 7
  { colSpan: 2, rowSpan: 1 }, // 8 - horizontal destacado
  { colSpan: 1, rowSpan: 1 }, // 9
  { colSpan: 1, rowSpan: 1 }, // 10
  { colSpan: 1, rowSpan: 2 }, // 11 - vertical
  { colSpan: 1, rowSpan: 1 }, // 12
];

export function Gallery() {
  return (
    <section
      id='galeria'
      className='bg-cream flex flex-col w-full'
      style={{
        height: 'calc(100dvh - 5.5rem)', // 100dvh menos header (h-20 = 5rem + top-2 = 0.5rem)
        maxHeight: 'calc(100dvh - 5.5rem)',
        width: '100%',
      }}
    >
      <div className='w-full px-3 md:px-4 py-2 md:py-3 shrink-0'>
        <h2 className='text-xl md:text-3xl lg:text-4xl font-bold text-deep-blue text-center mb-1 md:mb-2'>
          Así vivimos otros encuentros en Casacusia
        </h2>
        <p className='text-xs md:text-sm lg:text-base text-deep-blue/80 text-center max-w-3xl mx-auto'>
          Momentos de alegría, conexión y comunidad
        </p>
      </div>

      <div className='flex-1 px-3 md:px-4 pb-3 md:pb-4 min-h-0 overflow-hidden w-full'>
        {/* Mobile: Grid de 2 columnas con auto-rows */}
        <div
          className='grid grid-cols-2 gap-2 md:hidden w-full h-full'
          style={{
            gridAutoRows: 'minmax(0, 1fr)',
          }}
        >
          {photos.map((photo, index) => {
            const pattern = bentoPatternsMobile[index];
            return (
              <div
                key={index}
                className='relative rounded-lg overflow-hidden shadow-md transition-all duration-300'
                style={{
                  gridColumn: `span ${pattern.colSpan}`,
                  gridRow: `span ${pattern.rowSpan}`,
                  minHeight: 0,
                  minWidth: 0,
                }}
              >
                <Image
                  src={photo || '/placeholder.svg'}
                  alt={`Evento CASACUSIA ${index + 1}`}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 50vw, 100vw'
                  priority={index < 4}
                />
              </div>
            );
          })}
        </div>

        {/* Desktop: Bento grid de 4 columnas */}
        <div
          className='hidden md:grid grid-cols-4 gap-3 w-full h-full'
          style={{
            gridTemplateRows: 'repeat(4, 1fr)',
            gridAutoFlow: 'row',
            alignContent: 'stretch',
          }}
        >
          {photos.slice(0, 9).map((photo, index) => {
            const pattern = bentoPatternsDesktop[index];
            if (
              !pattern ||
              pattern.colSpan === 0 ||
              pattern.rowSpan === 0 ||
              index >= 9
            )
              return null;
            return (
              <div
                key={index}
                className='relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]'
                style={{
                  gridColumn: `span ${pattern.colSpan}`,
                  gridRow: `span ${pattern.rowSpan}`,
                  minHeight: 0,
                  minWidth: 0,
                }}
              >
                <Image
                  src={photo || '/placeholder.svg'}
                  alt={`Evento CASACUSIA ${index + 1}`}
                  fill
                  className='object-cover'
                  sizes='(max-width: 1024px) 20vw, 15vw'
                  priority={index < 4}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
