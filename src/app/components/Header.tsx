import { Menu, X, User, Phone } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

interface HeaderProps {
  onLoginClick: () => void;
}

export function Header({ onLoginClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-rose-600">Serenity Spa</h1>
            <p className="text-xs text-gray-500">Belleza & Bienestar</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-rose-600 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-gray-700 hover:text-rose-600 transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('galeria')}
              className="text-gray-700 hover:text-rose-600 transition-colors"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection('testimonios')}
              className="text-gray-700 hover:text-rose-600 transition-colors"
            >
              Testimonios
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-gray-700 hover:text-rose-600 transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+18096724598"
              className="flex items-center text-gray-700 hover:text-rose-600 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">809-672-4598</span>
            </a>
            <Button
              variant="outline"
              size="sm"
              onClick={onLoginClick}
              className="border-rose-600 text-rose-600 hover:bg-rose-50"
            >
              <User className="w-4 h-4 mr-2" />
              Mi Cuenta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left py-2 text-gray-700 hover:text-rose-600"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="block w-full text-left py-2 text-gray-700 hover:text-rose-600"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('galeria')}
              className="block w-full text-left py-2 text-gray-700 hover:text-rose-600"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection('testimonios')}
              className="block w-full text-left py-2 text-gray-700 hover:text-rose-600"
            >
              Testimonios
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left py-2 text-gray-700 hover:text-rose-600"
            >
              Contacto
            </button>
            <div className="pt-3 border-t">
              <a
                href="tel:+18096724598"
                className="flex items-center py-2 text-gray-700 hover:text-rose-600"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>809-672-4598</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}