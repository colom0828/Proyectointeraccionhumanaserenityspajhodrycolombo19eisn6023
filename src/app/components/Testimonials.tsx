import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const testimonials = [
  {
    id: 1,
    name: 'María González',
    service: 'Tratamiento Facial',
    rating: 5,
    comment: 'Excelente servicio! El tratamiento facial dejó mi piel radiante. El ambiente es muy relajante y el personal es súper profesional. Definitivamente volveré.',
    date: 'Hace 1 semana',
    avatar: 'MG',
  },
  {
    id: 2,
    name: 'Carlos Ramírez',
    service: 'Masaje Relajante',
    rating: 5,
    comment: 'La mejor experiencia de spa que he tenido. El masaje fue perfecto para aliviar el estrés del trabajo. Instalaciones impecables y atención de primera.',
    date: 'Hace 2 semanas',
    avatar: 'CR',
  },
  {
    id: 3,
    name: 'Laura Fernández',
    service: 'Manicure & Pedicure',
    rating: 5,
    comment: 'Me encantó el resultado! Súper profesionales y detallistas. Los productos que usan son de excelente calidad y el esmaltado gel me duró más de 3 semanas.',
    date: 'Hace 3 días',
    avatar: 'LF',
  },
  {
    id: 4,
    name: 'Roberto Mora',
    service: 'Corte y Peinado',
    rating: 5,
    comment: 'Ambiente moderno y profesional. La estilista entendió exactamente lo que quería y el resultado superó mis expectativas. Precio muy justo por la calidad.',
    date: 'Hace 1 mes',
    avatar: 'RM',
  },
  {
    id: 5,
    name: 'Ana Sofía Vargas',
    service: 'Hidratación Capilar',
    rating: 5,
    comment: 'Mi cabello quedó increíble después del tratamiento de keratina. Se ve más sano, brillante y manejable. El equipo es muy amable y conocedor.',
    date: 'Hace 2 días',
    avatar: 'AV',
  },
  {
    id: 6,
    name: 'José Méndez',
    service: 'Tratamiento Facial',
    rating: 5,
    comment: 'Primera vez que visito un spa y la experiencia fue genial. Me explicaron todo el proceso, fueron muy atentos y los resultados son notorios. Recomendado 100%.',
    date: 'Hace 1 semana',
    avatar: 'JM',
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-rose-600 font-medium text-sm uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor motivación. 
            Lee sus experiencias reales.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                {/* Avatar and Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.service}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.comment}"
                </p>

                {/* Date */}
                <p className="text-sm text-gray-500">{testimonial.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-rose-600 mb-2">500+</p>
            <p className="text-gray-600">Clientes Satisfechos</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-rose-600 mb-2">5.0</p>
            <p className="text-gray-600">Calificación Promedio</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-rose-600 mb-2">5+</p>
            <p className="text-gray-600">Años de Experiencia</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-rose-600 mb-2">15+</p>
            <p className="text-gray-600">Profesionales Certificados</p>
          </div>
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            ¿Ya visitaste Serenity Spa? Nos encantaría conocer tu opinión
          </p>
          <a
            href="https://g.page/r/serenityspa/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-medium"
          >
            Dejar una Reseña en Google
            <Star className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
