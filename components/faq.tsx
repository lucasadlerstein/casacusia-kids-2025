import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-deep-blue text-center mb-12">Preguntas frecuentes</h2>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
          <AccordionItem value="item-1" className="bg-white rounded-xl px-6 border-none">
            <AccordionTrigger className="text-lg font-semibold text-deep-blue hover:text-violet">
              ¿El evento es accesible?
            </AccordionTrigger>
            <AccordionContent className="text-deep-blue/80 leading-relaxed">
              Sí, pero se nos puede escapar algo, por eso te pedimos que si tenés algún requerimiento nos lo hagas saber
              en tu inscripción y por Instagram a{" "}
              <Link
                href="https://instagram.com/casacusia.ong"
                target="_blank"
                className="text-violet hover:underline font-semibold"
              >
                @casacusia.ong
              </Link>
              . Además, estamos intentando que haya un espacio de Calma para quienes lo necesiten durante el evento.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-white rounded-xl px-6 border-none">
            <AccordionTrigger className="text-lg font-semibold text-deep-blue hover:text-violet">
              ¿Qué pasa si llueve?
            </AccordionTrigger>
            <AccordionContent className="text-deep-blue/80 leading-relaxed">
              El evento se reprograma y te vamos a avisar.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-white rounded-xl px-6 border-none">
            <AccordionTrigger className="text-lg font-semibold text-deep-blue hover:text-violet">
              ¿Qué puedo traer?
            </AccordionTrigger>
            <AccordionContent className="text-deep-blue/80 leading-relaxed">
              Ganas de compartir una tarde hermosa y disfrutar.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-white rounded-xl px-6 border-none">
            <AccordionTrigger className="text-lg font-semibold text-deep-blue hover:text-violet">
              ¿Va a haber algo para tomar o comer?
            </AccordionTrigger>
            <AccordionContent className="text-deep-blue/80 leading-relaxed">
              Sí, vamos a contar con agua y vas a poder comprar comida, lo que ayuda a costear el evento junto a venta
              de remeras, gorras, bolsas, botellas y distintas cosas de Casacusia. Así que cada vez que veas algo en
              venta, estás colaborando para que el evento sea posible.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <p className="text-center text-deep-blue/80 mt-12 text-lg">
          Si tenés ideas, propuestas o algo que quieras contarnos, escribinos por{" "}
          <Link
            href="https://instagram.com/casacusia.ong"
            target="_blank"
            className="text-violet hover:underline font-semibold"
          >
            Instagram
          </Link>
          !
        </p>
      </div>
    </section>
  )
}
