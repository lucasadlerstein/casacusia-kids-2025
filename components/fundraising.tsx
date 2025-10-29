import { Heart, ShoppingBag, DollarSign } from "lucide-react"

export function Fundraising() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-deep-blue text-center mb-8">
            Ayudanos a hacerlo posible
          </h2>

          <div className="bg-gradient-to-br from-violet to-violet/80 rounded-2xl p-8 md:p-12 shadow-2xl mb-8 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">Si querés colaborar, <br/>podes contactarnos o donar directamente</h3>
              </div>
            </div>

            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              Agradecemos la colaboración de empresas y personas que quieran apoyarnos.
            </p>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
              <h4 className="font-bold text-xl mb-3">Podés donar a:</h4>
              <div className="space-y-2 text-lg">
                <p>
                  <span className="font-semibold">Fundación Casacusia</span>
                </p>
                <p>
                  <span className="font-semibold">Banco Galicia</span> 
                </p>
                <p>
                  <span className="font-semibold">Alias:</span> casacusia.ong
                </p>
              </div>
            </div>

            <p className="text-lg font-semibold">O también podés donar mensualmente el valor de un café <a target="_blank" href="https://cafe.casacusia.org">haciendo clic acá.</a></p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-violet/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-violet" />
              </div>
              <h3 className="text-2xl font-bold text-deep-blue mb-4">Colaboración de empresas</h3>
              <p className="text-deep-blue/80 leading-relaxed">
                Aceptamos la colaboración de empresas y personas que quieran sumarse a hacer este evento posible.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-green/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <ShoppingBag className="w-8 h-8 text-green" />
              </div>
              <h3 className="text-2xl font-bold text-deep-blue mb-4">Productos CASACUSIA</h3>
              <p className="text-deep-blue/80 leading-relaxed">
                Vas a poder comprar remeras, gorras, bolsas, botellas y distintas cosas de Casacusia. Cada compra ayuda
                a costear el evento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
