"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            alt="CASACUSIA"
            src="images/Casacusia-Horizontal.png"
            width={50}
            height={50}
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#evento" className="text-sm font-medium text-deep-blue hover:text-violet transition-colors">
            El Evento
          </Link>
          <Link href="#actividades" className="text-sm font-medium text-deep-blue hover:text-violet transition-colors">
            Actividades
          </Link>
          <Link href="#galeria" className="text-sm font-medium text-deep-blue hover:text-violet transition-colors">
            Galería
          </Link>
          <Link href="#faq" className="text-sm font-medium text-deep-blue hover:text-violet transition-colors">
            Preguntas
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button className="bg-violet hover:bg-violet/90 text-white font-semibold" asChild>
            <Link href="#inscripcion">Inscribirme</Link>
          </Button>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6 text-deep-blue" />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container mx-auto flex flex-col gap-4 p-4">
            <Link href="#evento" className="text-sm font-medium text-deep-blue hover:text-violet">
              El Evento
            </Link>
            <Link href="#actividades" className="text-sm font-medium text-deep-blue hover:text-violet">
              Actividades
            </Link>
            <Link href="#galeria" className="text-sm font-medium text-deep-blue hover:text-violet">
              Galería
            </Link>
            <Link href="#faq" className="text-sm font-medium text-deep-blue hover:text-violet">
              Preguntas
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
