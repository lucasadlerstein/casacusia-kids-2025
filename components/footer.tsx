import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer id="inscripcion" className="bg-deep-blue text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/images/Casacusia-Horizontal.png"
                alt="CASACUSIA"
                width={200}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mb-6 max-w-sm text-pretty text-white/80 leading-relaxed">
              Conectamos personas con hipoacusia y sus familias, generando un espacio colectivo que nos acompañe a
              mejorar nuestra calidad de vida.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://instagram.com/casacusia.ong"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-violet transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:somos@casacusia.org"
                className="text-white/80 hover:text-violet transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Event info */}
          <div>
            <h3 className="mb-4 text-lg font-bold">KIDS 2025</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link href="#evento" className="hover:text-violet transition-colors">
                  El Evento
                </Link>
              </li>
              <li>
                <Link href="#actividades" className="hover:text-violet transition-colors">
                  Actividades
                </Link>
              </li>
              <li>
                <Link href="#galeria" className="hover:text-violet transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-violet transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Contacto</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link
                  href="mailto:somos@casacusia.org"
                  className="hover:text-violet transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  somos@casacusia.org
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com/casacusia.ong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet transition-colors flex items-center gap-2"
                >
                  <Instagram className="h-4 w-4" />
                  @casacusia.ong
                </Link>
              </li>
              <li className="pt-4">
                <Link
                  href="https://casacusia.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-violet hover:text-violet/80 transition-colors font-semibold"
                >
                  <Globe className="h-4 w-4" />
                  ¿Querés conocer a CASACUSIA? Ingresá en nuestra web
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/60">© 2025 Fundación CASACUSIA. Todos los derechos reservados.</p>
            <p className="text-sm text-white/60">Hecho con ❤️ para la comunidad con hipoacusia</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
