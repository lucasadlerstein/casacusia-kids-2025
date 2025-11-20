import Image from 'next/image';

// Imágenes de sponsors organizadas por categoría
const sponsorsPresenta = [
  {
    src: '/sponsors/presenta/Amplitone_Pediatrico.png',
    alt: 'Amplitone Pediátrico',
  },
];

const sponsorsAcompanan = [
  { src: '/sponsors/acompanan/infinidad.png', alt: 'Infinidad' },
  { src: '/sponsors/acompanan/paxassistance.png', alt: 'Pax Assistance' },
  { src: '/sponsors/acompanan/arcos-dorados.png', alt: 'Arcos Dorados' },
  { src: '/sponsors/acompanan/tecnosalud.png', alt: 'Tecnosalud' },
  { src: '/sponsors/acompanan/modo.png', alt: 'MODO' },
  { src: '/sponsors/acompanan/medel.png', alt: 'MED-EL' },
  { src: '/sponsors/acompanan/iso.png', alt: 'ISO' },
  { src: '/sponsors/acompanan/pam.png', alt: 'PAM' },
  { src: '/sponsors/acompanan/diller_logo.png', alt: 'Diller Teen Fellows' },
];

const sponsorsHacenPosible = [
  { src: '/sponsors/hacen_posible/doctored.png', alt: 'Doctored' },
  { src: '/sponsors/hacen_posible/eterna.png', alt: 'Eterna' },
  { src: '/sponsors/hacen_posible/mimo.png', alt: 'Mimo' },
  { src: '/sponsors/hacen_posible/topper.png', alt: 'Topper' },
  { src: '/sponsors/hacen_posible/cabrales.png', alt: 'Cabrales' },
  { src: '/sponsors/hacen_posible/calm.png', alt: 'CALM es Simple' },
  { src: '/sponsors/hacen_posible/psa.png', alt: 'PSA' },
  { src: '/sponsors/hacen_posible/parque_de_innovacion.png', alt: 'Parque de Innovación', },
  { src: '/sponsors/hacen_posible/cic.png', alt: 'CIC' },
  { src: '/sponsors/hacen_posible/zafran.png', alt: 'Zafran' },
  { src: '/sponsors/hacen_posible/py-media.webp', alt: 'PY MEDIA' },
  { src: '/sponsors/hacen_posible/casan.png', alt: 'CASAN' },
  { src: '/sponsors/hacen_posible/basani.png', alt: 'Basani' },
  { src: '/sponsors/hacen_posible/via-cotone.png', alt: 'Via Cotone' },
  { src: '/sponsors/hacen_posible/las-ilusiones.png', alt: 'Las Ilusiones' },
  { src: '/sponsors/hacen_posible/monococo.webp', alt: 'Monococo' },
];

export function Sponsors() {
  return (
    <section
      id='sponsors'
      className='flex flex-col w-[calc(100%-2rem)] rounded-lg min-h-[calc(100dvh-5.5rem)]'
      style={{
        minHeight: 'calc(100dvh - 5.5rem)',
      }}
    >
      <div className='px-4 md:px-6 lg:px-8 py-16 md:py-20 flex flex-col flex-1 justify-center gap-6 md:gap-8 lg:gap-12 overflow-auto'>
        {/* Presenta */}
        {sponsorsPresenta.length > 0 && (
          <div className='text-center'>
            <h3 className='text-lg md:text-xl font-semibold text-deep-blue/60 uppercase tracking-wider mb-4'>
              Presenta
            </h3>
            <div className='relative w-full max-w-lg md:max-w-xl mx-auto h-24 sm:h-32 md:h-36 lg:h-40 xl:h-44'>
              <Image
                src={sponsorsPresenta[0].src}
                alt={sponsorsPresenta[0].alt}
                fill
                className='object-contain'
                sizes='(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 500px, 600px'
                priority
              />
            </div>
          </div>
        )}

        {/* Acompañan */}
        {sponsorsAcompanan.length > 0 && (
          <div>
            <h3 className='text-lg md:text-xl font-semibold text-deep-blue/60 uppercase tracking-wider text-center mb-4 md:mb-6'>
              Acompañan
            </h3>
            <div className='flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 max-w-7xl mx-auto'>
              {sponsorsAcompanan.map((sponsor, index) => (
                <div
                  key={index}
                  className='relative h-14 sm:h-18 md:h-22 lg:h-22 xl:h-26 w-auto min-w-[110px] sm:min-w-[130px] md:min-w-[140px] lg:min-w-[150px] px-2 sm:px-3 md:px-4 lg:px-5'
                >
                  <Image
                    src={sponsor.src}
                    alt={sponsor.alt}
                    fill
                    className='object-contain'
                    sizes='(max-width: 640px) 110px, (max-width: 768px) 130px, (max-width: 1024px) 140px, (max-width: 1280px) 150px, 170px'
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hacen posible el evento */}
        {sponsorsHacenPosible.length > 0 && (
          <div>
            <h3 className='text-lg md:text-xl font-semibold text-deep-blue/60 uppercase tracking-wider text-center mb-4 md:mb-6'>
              Hacen posible el evento
            </h3>
            <div className='flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 max-w-5xl mx-auto'>
              {sponsorsHacenPosible.map((sponsor, index) => (
                <div
                  key={index}
                  className='relative h-10 sm:h-14 md:h-18 lg:h-18 xl:h-22 w-auto min-w-[90px] sm:min-w-[110px] md:min-w-[120px] lg:min-w-[130px] px-2 sm:px-3 md:px-4 lg:px-5'
                >
                  <Image
                    src={sponsor.src}
                    alt={sponsor.alt}
                    fill
                    className='object-contain'
                    sizes='(max-width: 640px) 90px, (max-width: 768px) 110px, (max-width: 1024px) 120px, (max-width: 1280px) 130px, 150px'
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
