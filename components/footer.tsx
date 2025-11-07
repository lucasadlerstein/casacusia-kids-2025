import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Mail, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer id='inscripcion' className='w-full flex justify-center pb-4'>
      <div className='w-[calc(100%-2rem)] bg-deep-blue text-white py-8 rounded-lg'>
        <div className='container mx-auto px-4'>
          <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12'>
            {/* Logo and description */}
            <div className='lg:col-span-2'>
              <Link href='/' className='mb-6 inline-block'>
                <Image
                  src='/images/Casacusia-Horizontal.png'
                  alt='CASACUSIA'
                  width={200}
                  height={50}
                  className='h-12 w-auto brightness-0 invert'
                />
              </Link>
              <p className='mb-4 md:mb-6 max-w-sm text-pretty text-sm md:text-base text-white/80 leading-relaxed'>
                Conectamos personas con hipoacusia y sus familias, generando un
                espacio colectivo que nos acompañe a mejorar nuestra calidad de
                vida.
              </p>
              <div className='flex gap-4'>
                <Link
                  href='https://instagram.com/casacusia.ong'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white/80 hover:text-violet transition-colors'
                  aria-label='Instagram'
                >
                  <Instagram className='h-6 w-6' />
                </Link>
                <Link
                  href='mailto:ari@casacusia.org'
                  className='text-white/80 hover:text-violet transition-colors'
                  aria-label='Email'
                >
                  <Mail className='h-6 w-6' />
                </Link>
              </div>
            </div>

            {/* Event info */}
            <div>
              <h3 className='mb-3 md:mb-4 text-base md:text-lg font-bold'>KIDS 2025</h3>
              <ul className='space-y-2 md:space-y-3 text-xs md:text-sm text-white/80'>
                <li>
                  <Link
                    href='#evento'
                    className='hover:text-violet transition-colors'
                  >
                    El Evento
                  </Link>
                </li>
                <li>
                  <Link
                    href='#actividades'
                    className='hover:text-violet transition-colors'
                  >
                    Actividades
                  </Link>
                </li>
                <li>
                  <Link
                    href='#galeria'
                    className='hover:text-violet transition-colors'
                  >
                    Galería
                  </Link>
                </li>
                <li>
                  <Link
                    href='#faq'
                    className='hover:text-violet transition-colors'
                  >
                    Preguntas Frecuentes
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className='mb-3 md:mb-4 text-base md:text-lg font-bold'>Contacto</h3>
              <ul className='space-y-2 md:space-y-3 text-xs md:text-sm text-white/80'>
                <li>
                  <Link
                    href='mailto:ari@casacusia.org'
                    className='hover:text-violet transition-colors flex items-center gap-2'
                  >
                    <Mail className='h-4 w-4' />
                    somos@casacusia.org
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://instagram.com/casacusia.ong'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-violet transition-colors flex items-center gap-2'
                  >
                    <Instagram className='h-4 w-4' />
                    @casacusia.ong
                  </Link>
                </li>
                <li className='pt-3 md:pt-4'>
                  <Link
                    href='https://casacusia.org'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex flex-wrap items-center gap-2 text-violet hover:text-violet/80 transition-colors font-semibold text-xs md:text-sm'
                  >
                    <Globe className='h-3 w-3 md:h-4 md:w-4 shrink-0' />
                    <span className='leading-tight'>¿Querés conocer a CASACUSIA? Ingresá en nuestra web</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className='border-t border-white/20 pt-8'>
            <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
              <p className='text-sm text-white/60'>
                © 2025 Fundación CASACUSIA. Todos los derechos reservados.
              </p>
              <p className='text-sm text-white/60'>
                Hecho con ❤️ para la comunidad con hipoacusia
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
