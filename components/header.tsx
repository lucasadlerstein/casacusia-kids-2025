'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import HamburguerIcon from './hamburguer/HamburguerIcon';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='fixed top-2 z-50 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] rounded-lg bg-white/80 backdrop-blur-md shadow-md'>
      <div className='flex h-20 items-center justify-between px-4'>
        <Link href='/' className='flex items-center'>
          <Image
            alt='CASACUSIA'
            src='images/Casacusia-Horizontal.png'
            width={50}
            height={50}
            className='h-12 w-auto'
          />
        </Link>

        <nav className='hidden items-center gap-8 md:flex'>
          <Link
            href='#evento'
            className='text-sm font-medium text-deep-blue hover:text-violet transition-colors'
          >
            El Evento
          </Link>
          <Link
            href='#actividades'
            className='text-sm font-medium text-deep-blue hover:text-violet transition-colors'
          >
            Actividades
          </Link>
          <Link
            href='#galeria'
            className='text-sm font-medium text-deep-blue hover:text-violet transition-colors'
          >
            Galería
          </Link>
          <Link
            href='#faq'
            className='text-sm font-medium text-deep-blue hover:text-violet transition-colors'
          >
            Preguntas
          </Link>
        </nav>

        <div className='flex items-center gap-4'>
          <Button
            className='bg-violet hidden md:block hover:bg-violet/90 text-white font-semibold'
            asChild
          >
            <Link
              href='https://www.eventbrite.com.ar/e/casacusia-kids-tickets-1972692368979'
              target='_blank'
              rel='noopener noreferrer'
            >
              Inscribirme
            </Link>
          </Button>
          <div className='md:hidden'>
            <HamburguerIcon
              isSelected={mobileMenuOpen}
              handleClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </div>
        </div>
      </div>

      <div
        className={`md:max-h-0 overflow-hidden transition-all duration-300 border-t md:border-t-0 rounded-b-lg z-40 shadow-md ${
          mobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <nav className='container mx-auto flex flex-col gap-4 p-4'>
          <Link
            href='#evento'
            className='text-sm font-medium text-deep-blue hover:text-violet'
            onClick={() => setMobileMenuOpen(false)}
          >
            El Evento
          </Link>
          <Link
            href='#actividades'
            className='text-sm font-medium text-deep-blue hover:text-violet'
            onClick={() => setMobileMenuOpen(false)}
          >
            Actividades
          </Link>
          <Link
            href='#galeria'
            className='text-sm font-medium text-deep-blue hover:text-violet'
            onClick={() => setMobileMenuOpen(false)}
          >
            Galería
          </Link>
          <Link
            href='#faq'
            className='text-sm font-medium text-deep-blue hover:text-violet'
            onClick={() => setMobileMenuOpen(false)}
          >
            Preguntas
          </Link>
          <Button
            className='bg-violet hover:bg-violet/90 text-white font-semibold mt-2'
            asChild
          >
            <Link
              href='https://www.eventbrite.com.ar/e/casacusia-kids-tickets-1972692368979'
              target='_blank'
              rel='noopener noreferrer'
              onClick={() => setMobileMenuOpen(false)}
            >
              Inscribirme
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
