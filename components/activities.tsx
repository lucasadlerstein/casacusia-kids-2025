import { Button } from '@/components/ui/button';
import {
  Palette,
  Shirt,
  Drum,
  Target,
  BellIcon as Balloon,
  Wand2,
  Mic,
  Ear,
} from 'lucide-react';
import Link from 'next/link';

const activities = [
  {
    icon: Palette,
    title: 'Espacio de arte fluorescente',
    description: 'con Mauro Crema',
    color: 'violet',
  },
  {
    icon: Shirt,
    title: 'Taller de diseño de indumentaria',
    description: 'con Mimo and Co',
    color: 'green',
  },
  {
    icon: Drum,
    title: 'Taller de percusión',
    description: 'con Santy Ablin de Choque Urbano',
    color: 'yellow',
  },
  {
    icon: Target,
    title: 'Kermesse y juegos',
    description: 'al aire libre',
    color: 'violet',
  },
  {
    icon: Balloon,
    title: 'Globos, burbujas, maquillaje',
    description: 'y sorpresas',
    color: 'green',
  },
  {
    icon: Wand2,
    title: 'Shows de magia y circo',
    description: 'para toda la familia',
    color: 'yellow',
  },
  {
    icon: Mic,
    title: 'Grabación del podcast',
    description: 'Sordo pero no mudo - entrevistas para chicos',
    color: 'violet',
  },
  {
    icon: Ear,
    title: 'Experiencia sensorial',
    description: 'Los padres podrán escuchar cómo se oye con audífonos',
    color: 'green',
  },
];

export function Activities() {
  return (
    <section id='actividades' className='bg-cream py-16 md:py-20'>
      <div className='px-4 flex flex-col gap-8'>
        <h2 className='text-3xl md:text-5xl font-bold text-deep-blue text-center'>
          Actividades y espacios
        </h2>

        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6'>
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            const colorClass =
              activity.color === 'violet'
                ? 'bg-violet'
                : activity.color === 'green'
                ? 'bg-green'
                : 'bg-yellow';

            return (
              <div
                key={index}
                className={`${colorClass} rounded-lg md:rounded-2xl p-3 md:p-6 shadow-md md:shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}
              >
                <div
                  className={`w-8 h-8 md:w-16 md:h-16 rounded-md md:rounded-xl flex items-center justify-center mb-2 md:mb-4 mx-auto`}
                >
                  <Icon className='w-4 h-4 md:w-8 md:h-8 text-deep-blue' />
                </div>
                <h3 className='text-xs md:text-lg font-bold text-deep-blue text-center mb-1 md:mb-2 leading-tight'>
                  {activity.title}
                </h3>
                <p className='text-[10px] md:text-sm text-deep-blue/70 text-center leading-tight'>
                  {activity.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
          <Button
            variant='outline'
            size='lg'
            className='border-2 border-violet text-violet hover:bg-violet hover:text-white font-semibold bg-transparent'
            disabled
          >
            Ver cronograma - próximamente
          </Button>

          <Link
            href='https://luma.com/lu65w0js'
            target='_blank'
            rel='noopener noreferrer'
            className='text-lg transition-all duration-300 bg-violet hover:bg-violet/90 hover:scale-105 text-white font-semibold rounded-lg px-4 py-2'
          >
            Inscribirme ahora
          </Link>
        </div>
      </div>
    </section>
  );
}
