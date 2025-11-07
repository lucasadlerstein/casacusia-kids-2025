'use client';

import { Button } from '@/components/ui/button';
import { ShoppingBag, Users, DollarSign, Copy, Check } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function HelpSection() {
  const [copied, setCopied] = useState(false);

  const copyAlias = async () => {
    try {
      await navigator.clipboard.writeText('casacusia.ong');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  return (
    <section
      id='ayudanos'
      className='py-16 md:py-20 rounded-lg bg-deep-blue/10 overflow-hidden shadow-inner relative w-[calc(100%-2rem)] flex items-center justify-center'
    >
      <span
        className='absolute top-0 left-0 opacity-30 blur-sm bg-fixed w-full h-full bg-contain bg-no-repeat bg-center'
        style={{
          backgroundImage: "url('/images/isotipo-color.png')",
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></span>
      <div className='px-4 z-10 w-full gap-8 flex flex-col items-center justify-center'>
        <h2 className='text-3xl md:text-5xl font-bold text-deep-blue text-center'>
          Ayudanos a hacerlo posible
        </h2>
        <p className='text-lg md:text-xl text-deep-blue/80 text-center text-pretty'>
          Hay diferentes formas de apoyar este evento y hacerlo realidad
        </p>

        {/* Three columns for the 3 options */}
        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl'>
          {/* Opción 1: Donar */}
          <div className='flex flex-col items-center text-center p-4 md:p-6 border-2 border-violet bg-violet/20 hover:shadow-lg rounded-lg'>
            <DollarSign className='w-12 h-12 text-deep-blue mb-4' />
            <h3 className='text-lg font-bold text-deep-blue mb-2'>Donar</h3>
            <p className='text-deep-blue mb-4'>
              Podés donar directamente a la Fundación Casacusia
            </p>
            <div className='w-full space-y-2 text-sm'>
              <p className='font-semibold text-deep-blue'>
                Fundación Casacusia
              </p>
              <p className='text-deep-blue/80'>Banco Galicia</p>
              <div className='flex items-center justify-center gap-2'>
                <p className='text-deep-blue/80'>
                  Alias:{' '}
                  <span className='font-semibold text-deep-blue'>
                    casacusia.ong
                  </span>
                </p>
                <button
                  onClick={copyAlias}
                  className='p-1 hover:bg-violet/20 rounded transition-colors'
                  title='Copiar alias'
                >
                  {copied ? (
                    <Check className='w-4 h-4 text-green' />
                  ) : (
                    <Copy className='w-4 h-4 text-violet' />
                  )}
                </button>
              </div>
            </div>
            <Button
              asChild
              className='w-full mt-4 bg-violet hover:bg-violet/90 text-white'
            >
              <Link
                href='https://cafe.casacusia.org'
                target='_blank'
                rel='noopener noreferrer'
              >
                Donar mensualmente
              </Link>
            </Button>
          </div>

          {/* Opción 2: Comprar productos */}
          <div className='flex flex-col items-center text-center p-4 md:p-6 border-2 border-green bg-green/20 hover:shadow-lg rounded-lg'>
            <ShoppingBag className='w-12 h-12 text-deep-blue mb-4' />
            <h3 className='text-lg font-bold text-deep-blue mb-2'>
              Comprar productos
            </h3>
            <p className='text-deep-blue mb-4'>
              Comprá remeras, gorras, bolsas, botellas y otros productos de
              CASACUSIA. Cada compra ayuda a costear el evento.
            </p>
            <Button
              asChild
              className='w-full mt-auto bg-green hover:bg-green/90 text-white'
            >
              <Link href='#contacto'>Vení temprano y conocelos!</Link>
            </Button>
          </div>

          {/* Opción 3: Ser voluntario */}
          <div className='flex flex-col items-center text-center p-4 md:p-6 border-2 border-yellow bg-yellow/20 hover:shadow-lg rounded-lg'>
            <Users className='w-12 h-12 text-deep-blue mb-4' />
            <h3 className='text-lg font-bold text-deep-blue mb-2'>
              Ser voluntario
            </h3>
            <p className='text-deep-blue mb-4'>
              Necesitamos personas comprometidas que quieran ayudar a que este
              evento sea inolvidable.
            </p>
            <Button
              asChild
              className='w-full mt-auto bg-yellow hover:bg-yellow/90 text-deep-blue font-bold'
            >
              <Link href='mailto:ari@casacusia.org'>
                Quiero ser voluntario
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
