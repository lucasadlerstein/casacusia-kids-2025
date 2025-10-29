import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"
import Link from "next/link"

export function Volunteer() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-yellow/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <Users className="w-10 h-10 text-yellow" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-deep-blue mb-6">¿Querés ser voluntario?</h2>

          <p className="text-lg md:text-xl text-deep-blue/80 mb-8 leading-relaxed">
            Necesitamos personas comprometidas que quieran ayudar a que este evento sea inolvidable. Si querés sumarte
            como voluntario, escribinos.
          </p>

          <Button size="lg" className="bg-yellow hover:bg-yellow/90 text-deep-blue font-bold" asChild>
            <Link href="mailto:somos@casacusia.org">Quiero ser voluntario</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
