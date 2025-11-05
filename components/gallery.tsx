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

export function Gallery() {
  return (
    <section id='galeria' className='bg-cream w-full py-16 md:py-20'>
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-8 md:mb-12'>
            <h2 className='text-3xl md:text-5xl font-bold text-deep-blue mb-4'>
              Así vivimos otros encuentros en Casacusia
            </h2>
            <p className='text-base md:text-lg text-deep-blue/80 max-w-3xl mx-auto'>
              Momentos de alegría, conexión y comunidad
            </p>
          </div>

          {/* Mobile: Grid de 2 columnas */}
          <div className='grid grid-cols-2 gap-3 md:hidden'>
            {photos.map((photo, index) => (
              <div
                key={index}
                className='relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group'
              >
                <Image
                  src={photo || '/placeholder.svg'}
                  alt={`Evento CASACUSIA ${index + 1}`}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-300'
                  sizes='(max-width: 768px) 50vw, 100vw'
                  priority={index < 4}
                />
              </div>
            ))}
          </div>

          {/* Tablet: Grid de 3 columnas */}
          <div className='hidden md:grid lg:hidden grid-cols-3 gap-4'>
            {photos.map((photo, index) => (
              <div
                key={index}
                className='relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group'
              >
                <Image
                  src={photo || '/placeholder.svg'}
                  alt={`Evento CASACUSIA ${index + 1}`}
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-300'
                  sizes='(max-width: 1024px) 33vw, 100vw'
                  priority={index < 6}
                />
              </div>
            ))}
          </div>

          {/* Desktop: Grid de 4 columnas con algunas destacadas */}
          <div className='hidden lg:grid grid-cols-4 gap-4'>
            {photos.map((photo, index) => {
              // Algunas imágenes más grandes para crear interés visual
              const isLarge = index === 0 || index === 5 || index === 8;
              return (
                <div
                  key={index}
                  className={`relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group ${
                    isLarge ? 'col-span-2 row-span-2' : 'aspect-square'
                  }`}
                  style={isLarge ? { gridRow: 'span 2' } : {}}
                >
                  <Image
                    src={photo || '/placeholder.svg'}
                    alt={`Evento CASACUSIA ${index + 1}`}
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-300'
                    sizes={
                      isLarge
                        ? '(max-width: 1280px) 50vw, 33vw'
                        : '(max-width: 1280px) 25vw, 16vw'
                    }
                    priority={index < 6}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
