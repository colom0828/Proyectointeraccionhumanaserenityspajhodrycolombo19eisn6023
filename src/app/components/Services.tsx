import { Scissors, Sparkles, Heart, Smile, HandMetal, Droplets } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

interface ServicesProps {
  onBookService: (serviceName: string) => void;
}

const services = [
  {
    id: 1,
    name: 'Corte y Peinado',
    description: 'Estilo personalizado con productos profesionales. Incluye lavado, corte, secado y acabado.',
    price: 'RD$1,200',
    duration: '60 min',
    icon: Scissors,
    color: 'bg-rose-100 text-rose-600',
  },
  {
    id: 2,
    name: 'Tratamiento Facial',
    description: 'Limpieza profunda, exfoliación y mascarilla nutritiva adaptada a tu tipo de piel.',
    price: 'RD$2,000',
    duration: '90 min',
    icon: Sparkles,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    id: 3,
    name: 'Masaje Relajante',
    description: 'Masaje corporal completo con aceites aromáticos para aliviar tensiones.',
    price: 'RD$2,400',
    duration: '75 min',
    icon: Heart,
    color: 'bg-pink-100 text-pink-600',
  },
  {
    id: 4,
    name: 'Manicure & Pedicure',
    description: 'Cuidado completo de manos y pies con esmaltado gel de larga duración.',
    price: 'RD$1,440',
    duration: '90 min',
    icon: Smile,
    color: 'bg-orange-100 text-orange-600',
  },
  {
    id: 5,
    name: 'Depilación',
    description: 'Depilación con cera hipoalergénica en zonas seleccionadas. Piel suave y sin irritación.',
    price: 'RD$960',
    duration: '45 min',
    icon: HandMetal,
    color: 'bg-teal-100 text-teal-600',
  },
  {
    id: 6,
    name: 'Hidratación Capilar',
    description: 'Tratamiento intensivo con keratina para cabello dañado. Resultados inmediatos.',
    price: 'RD$1,600',
    duration: '60 min',
    icon: Droplets,
    color: 'bg-blue-100 text-blue-600',
  },
];

export function Services({ onBookService }: ServicesProps) {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-rose-600 font-medium text-sm uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Experiencias de Belleza
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos tratamientos personalizados con productos de la más alta calidad 
            y profesionales certificados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id}
                className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-md"
              >
                <CardHeader>
                  <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-2xl">{service.name}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-3xl font-bold text-gray-900">{service.price}</p>
                      <p className="text-sm text-gray-500 mt-1">{service.duration}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => onBookService(service.name)}
                    className="w-full bg-rose-600 hover:bg-rose-700 text-white"
                  >
                    Reservar Ahora
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">¿No encuentras lo que buscas?</h3>
          <p className="text-gray-600 mb-6">
            Contáctanos para consultar sobre paquetes especiales, tratamientos personalizados o eventos grupales.
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="border-rose-600 text-rose-600 hover:bg-rose-50"
          >
            Consultar Servicios Especiales
          </Button>
        </div>
      </div>
    </section>
  );
}