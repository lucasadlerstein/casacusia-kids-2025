import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export function Intro() {
  return (
    <section
      id='evento'
      className='py-8 w-full md:py-16 flex items-center justify-center'
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
        <div className='grid md:grid-cols-3 gap-8 w-3/4'>
          <div className='flex flex-col items-center text-center p-6 border-2 border-violet bg-violet/10 hover:shadow-lg rounded-lg'>
            <Calendar className='w-12 h-12 text-deep-blue mb-4' />
            <h3 className='text-lg font-bold text-deep-blue mb-2'>Fecha</h3>
            <p className='text-deep-blue'>Domingo 30 de Noviembre, 2025</p>
          </div>

          <div className='flex flex-col items-center text-center p-6 border-2 border-green bg-green/10 hover:shadow-lg rounded-lg'>
            <Clock className='w-12 h-12 text-deep-blue mb-4' />
            <h3 className='text-lg font-bold text-deep-blue mb-2'>Horario</h3>
            <p className='text-deep-blue'>14:00 a 18:00 hs</p>
          </div>

          <div className='flex flex-col items-center text-center p-6 border-2 border-yellow bg-yellow/10 hover:shadow-lg rounded-lg'>
            <MapPin className='w-12 h-12 text-deep-blue mb-4' />
            <h3 className='text-lg font-bold text-deep-blue mb-2'>Lugar</h3>
            <p className='text-deep-blue'>
              Parque de la Innovación, Núñez, CABA
            </p>
          </div>
        </div>

        {/* Alert box for registration */}
        <div className='w-3/4 bg-[#F44475]/10 border border-[#F44475] flex items-center justify-between rounded-lg p-2'>
          <div className='flex items-center gap-2'>
            <AlertCircle className='h-5 w-5 text-deep-blue' />
            <span className='text-deep-blue font-semibold'>
              ¡Importante! El evento es con inscripción gratuita y obligatoria
            </span>
          </div>
          <Link
            className='bg-[#F44475] hover:bg-[#F44475]/90 text-white font-semibold rounded-lg px-4 py-2'
            href='#inscripcion'
          >
            Inscribirme
          </Link>
        </div>
      </div>
    </section>
  );
}
