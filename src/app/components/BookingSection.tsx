import { Calendar, Clock, Gift } from 'lucide-react';
import { Button } from './ui/button';

interface BookingSectionProps {
  onBookNow: () => void;
}

export function BookingSection({ onBookNow }: BookingSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-600 to-rose-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Lista para tu momento de bienestar?
            </h2>
            <p className="text-xl text-rose-100 mb-8">
              Reserva tu cita ahora y disfruta de una experiencia única. 
              Agenda en línea de forma rápida y sencilla.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Reserva Flexible</h3>
                  <p className="text-rose-100">
                    Elige el día y hora que mejor te convenga. Confirmación instantánea.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Sin Esperas</h3>
                  <p className="text-rose-100">
                    Tu cita es exclusiva. Llegamos puntuales y te atendemos de inmediato.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Gift className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Primera Visita</h3>
                  <p className="text-rose-100">
                    Obtén 15% de descuento en tu primer servicio. No necesitas cupón.
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              onClick={onBookNow}
              className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg"
            >
              Reservar Mi Cita
            </Button>
          </div>

          {/* Right Content - Promo Box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
            <div className="text-center">
              <div className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm mb-6">
                OFERTA ESPECIAL
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Paquete de Bienvenida
              </h3>
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-2xl line-through text-rose-200">RD$4,800</span>
                <span className="text-5xl font-bold">RD$3,600</span>
              </div>
              <p className="text-rose-100 mb-8">
                Incluye: Tratamiento Facial + Masaje Relajante + Manicure
              </p>

              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>3 sesiones completas</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Válido por 60 días</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Horarios flexibles</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>25% de ahorro</span>
                </li>
              </ul>

              <Button
                size="lg"
                onClick={onBookNow}
                variant="outline"
                className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-rose-600"
              >
                Solicitar Paquete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}