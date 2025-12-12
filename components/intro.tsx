import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export function Intro() {
  return (
    <section
      id='evento'
      className='py-16 md:py-20 w-full flex items-center justify-center'
    >
      <div className='px-4 w-full gap-8 flex flex-col items-center justify-center'>
        <h2 className='text-3xl md:text-5xl font-bold text-deep-blue text-center'>
          Un día especial para toda la familia
        </h2>
        <p className='text-lg md:text-xl text-deep-blue/80 text-center text-pretty'>
          Un espacio donde los chicos con hipoacusia pueden conocerse, jugar y
          compartir experiencias únicas
        </p>

        {/* Three columns for date, time, location */}
        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl'>
          <div className='flex flex-col items-center text-center p-4 md:p-6 border-2 border-violet bg-violet/10 hover:shadow-lg rounded-lg'>
            <Calendar className='w-10 h-10 md:w-12 md:h-12 text-deep-blue mb-3 md:mb-4' />
            <h3 className='text-base md:text-lg font-bold text-deep-blue mb-2'>Fecha</h3>
            <p className='text-sm md:text-base text-deep-blue'>Marzo 2026</p>
          </div>

          <div className='flex flex-col items-center text-center p-4 md:p-6 border-2 border-green bg-green/10 hover:shadow-lg rounded-lg'>
            <Clock className='w-10 h-10 md:w-12 md:h-12 text-deep-blue mb-3 md:mb-4' />
            <h3 className='text-base md:text-lg font-bold text-deep-blue mb-2'>Horario</h3>
            <p className='text-sm md:text-base text-deep-blue'>14:00 a 18:00 hs</p>
          </div>

          <div className='flex flex-col items-center text-center p-4 md:p-6 border-2 border-yellow bg-yellow/10 hover:shadow-lg rounded-lg'>
            <MapPin className='w-10 h-10 md:w-12 md:h-12 text-deep-blue mb-3 md:mb-4' />
            <h3 className='text-base md:text-lg font-bold text-deep-blue mb-2'>Lugar</h3>
            <p className='text-sm md:text-base text-deep-blue'>
              Parque de la Innovación, Núñez, CABA
            </p>
          </div>
        </div>

        {/* Alert box for registration */}
        <div className='w-full max-w-5xl bg-[#F44475]/10 border border-[#F44475] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 rounded-lg p-3 md:p-4'>
          <div className='flex items-start sm:items-center gap-2 flex-1'>
            <AlertCircle className='h-5 w-5 text-deep-blue shrink-0 mt-0.5 sm:mt-0' />
            <span className='text-sm md:text-base text-deep-blue font-semibold text-left'>
              ¡Importante! El evento es con inscripción gratuita y obligatoria
            </span>
          </div>
          <Link
            className='bg-[#F44475] hover:bg-[#F44475]/90 text-white font-semibold rounded-lg px-4 py-2 text-sm md:text-base text-center whitespace-nowrap shrink-0'
            href='https://www.eventbrite.com.ar/e/casacusia-kids-tickets-1972692368979'
            target='_blank'
            rel='noopener noreferrer'
          >
            Inscribirme
          </Link>
        </div>
      </div>
    </section>
  );
}
