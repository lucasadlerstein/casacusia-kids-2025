'use client';

import Link from 'next/link';
import { DollarSign } from 'lucide-react';

export function FloatingDonateButton() {
  return (
    <Link
      href='#ayudanos'
      className='fixed bottom-2 right-4 z-40 bg-violet hover:bg-violet/90 text-white rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center gap-2 px-4 md:px-6 py-3 md:py-4 font-semibold text-sm md:text-base'
      aria-label='Ir a sección de donación'
    >
      <DollarSign className='w-4 h-4 md:w-5 md:h-5' />
      <span className=''>Donar</span>
    </Link>
  );
}
