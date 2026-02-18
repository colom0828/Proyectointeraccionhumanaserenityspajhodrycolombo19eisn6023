import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Serenity Spa</h3>
            <p className="text-gray-400 mb-4">
              Tu destino de belleza y bienestar en San José. Profesionalismo, calidad y atención personalizada.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/serenityspa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/serenityspa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/serenityspa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="hover:text-rose-400 transition-colors">
                  Corte y Peinado
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-rose-400 transition-colors">
                  Tratamiento Facial
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-rose-400 transition-colors">
                  Masaje Relajante
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-rose-400 transition-colors">
                  Manicure & Pedicure
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-rose-400 transition-colors">
                  Depilación
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-rose-400 transition-colors">
                  Hidratación Capilar
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-rose-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-rose-400 transition-colors">
                  Nuestros Servicios
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-rose-400 transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-rose-400 transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-rose-400 transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-400 transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                <span className="text-sm">
                  Av. Abraham Lincoln #1023, Piantini, Santo Domingo
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <a href="tel:+18096724598" className="hover:text-rose-400 block">
                    809-672-4598
                  </a>
                  <a href="tel:+18095551234" className="hover:text-rose-400 block">
                    809-555-1234
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <a href="mailto:info@serenityspa.com" className="hover:text-rose-400 block">
                    info@serenityspa.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Serenity Spa. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-rose-400 transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-sm hover:text-rose-400 transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="text-sm hover:text-rose-400 transition-colors">
              Política de Cancelación
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}