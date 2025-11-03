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
    <section id='actividades' className='bg-cream'>
      <div className='px-4 flex flex-col gap-8'>
        <h2 className='text-3xl md:text-5xl font-bold text-deep-blue text-center'>
          Actividades y espacios
        </h2>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 '>
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
                className={`${colorClass} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto`}
                >
                  <Icon className='w-8 h-8 text-deep-blue' />
                </div>
                <h3 className='text-lg font-bold text-deep-blue text-center mb-2'>
                  {activity.title}
                </h3>
                <p className='text-sm text-deep-blue/70 text-center'>
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
            href='#inscripcion'
            className='text-lg transition-all duration-300 bg-violet hover:bg-violet/90 hover:scale-105 text-white font-semibold rounded-lg px-4 py-2'
          >
            Inscribirme ahora
          </Link>
        </div>
      </div>
    </section>
  );
}
