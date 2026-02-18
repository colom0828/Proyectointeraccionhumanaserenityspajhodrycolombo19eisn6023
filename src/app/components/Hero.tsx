import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onBookNow: () => void;
}

export function Hero({ onBookNow }: HeroProps) {
  return (
    <section id="inicio" className="relative h-screen pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjByZWxheGluZyUyMHdvbWFuJTIwbWFzc2FnZSUyMHdlbGxuZXNzfGVufDF8fHx8MTc3MTM3MzkzMnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Spa relajante"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl text-white">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-rose-400" />
            <span className="text-rose-400 text-sm font-medium tracking-wider uppercase">
              Bienvenido a Serenity Spa
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Tu momento de paz y belleza
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Descubre una experiencia única de relajación y renovación. 
            Profesionales expertos, productos premium y un ambiente diseñado para tu bienestar.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={onBookNow}
              className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-6 text-lg"
            >
              Reservar Cita
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg backdrop-blur-sm"
            >
              Ver Servicios
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-rose-400 rounded-full" />
              <span>+5 años de experiencia</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-rose-400 rounded-full" />
              <span>Productos orgánicos certificados</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-rose-400 rounded-full" />
              <span>Profesionales calificados</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
