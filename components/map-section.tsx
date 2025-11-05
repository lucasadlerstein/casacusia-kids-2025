import { MapPin, Navigation } from 'lucide-react';
import Link from 'next/link';

export function MapSection() {
  // Direct link to open in Google Maps app
  const googleMapsLink =
    'https://www.google.com/maps/search/?api=1&query=Parque+de+la+Innovaci%C3%B3n,+Campos+Salles+1138,+N%C3%BA%C3%B1ez,+CABA';

  // Embed URL with the correct location and marker for Parque de la Innovación
  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.3481073437765!2d-58.45541422405681!3d-34.54474057297549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb575cce0211b%3A0xe179903ccf208a4!2sParque%20de%20Innovaci%C3%B3n!5e0!3m2!1ses!2sar!4v1762372863095!5m2!1ses!2sar';

  return (
    <section id='ubicacion' className='py-16 md:py-20 bg-cream w-full'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-3xl md:text-5xl font-bold text-deep-blue text-center mb-4'>
            ¿Cómo llegar?
          </h2>
          <p className='text-base md:text-lg lg:text-xl text-deep-blue/80 text-center mb-6 md:mb-8 flex flex-col sm:flex-row items-center justify-center gap-2 px-4'>
            <MapPin className='w-5 h-5 md:w-6 md:h-6 text-violet shrink-0' />
            <span className='text-center'>
              Parque de la Innovación - Campos Salles 1138, Núñez, CABA
            </span>
          </p>

          <div className='relative aspect-video rounded-lg md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl border-2 md:border-4 border-deep-blue/10 hover:shadow-3xl transition-shadow duration-300'>
            <iframe
              src={mapEmbedUrl}
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='absolute inset-0 w-full h-full'
              title='Ubicación del Parque de la Innovación'
            />
          </div>

          <div className='mt-6 flex flex-col md:flex-row items-center justify-center gap-4'>
            <p className='text-center text-sm md:text-base text-deep-blue/70'>
              Para ingresar y estacionar, usar la dirección:{' '}
              <span className='font-semibold text-deep-blue'>
                Campos Salles 1138
              </span>
            </p>
            <Link
              href={googleMapsLink}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 px-4 py-2 bg-violet hover:bg-violet/90 text-white rounded-lg transition-colors font-medium text-sm md:text-base'
            >
              <Navigation className='w-4 h-4' />
              Abrir en Google Maps
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
