import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1611211235015-e2e3a7d09e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMG1vZGVybiUyMGludGVyaW9yfGVufDF8fHx8MTc3MTI5MjU5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Interior moderno del spa',
    category: 'Instalaciones',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1659391542239-9648f307c0b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5pY3VyZSUyMG5haWxzJTIwYmVhdXR5fGVufDF8fHx8MTc3MTM1NDgxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Servicio de manicure',
    category: 'Manicure',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1664549761426-6a1cb1032854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpYWwlMjB0cmVhdG1lbnQlMjBzcGElMjB3b21hbnxlbnwxfHx8fDE3NzEzNTY0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Tratamiento facial',
    category: 'Faciales',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1761931403667-a6753db21f32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBzdHlsaW5nfGVufDF8fHx8MTc3MTMwMzA5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Peinado profesional',
    category: 'Cabello',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjByZWxheGluZyUyMHdvbWFuJTIwbWFzc2FnZSUyMHdlbGxuZXNzfGVufDF8fHx8MTc3MTM3MzkzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Masaje relajante',
    category: 'Masajes',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1611211235015-e2e3a7d09e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMG1vZGVybiUyMGludGVyaW9yfGVufDF8fHx8MTc3MTI5MjU5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Área de recepción',
    category: 'Instalaciones',
  },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-rose-600 font-medium text-sm uppercase tracking-wider">
            Galería
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Nuestro Espacio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un ambiente diseñado para tu comodidad y relajación. 
            Conoce nuestras instalaciones y servicios.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-rose-600 text-white text-sm rounded-full mb-2">
                    {image.category}
                  </span>
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Síguenos en Instagram para más fotos y promociones exclusivas
          </p>
          <a
            href="https://instagram.com/serenityspa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-medium"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @serenityspa
          </a>
        </div>
      </div>
    </section>
  );
}
