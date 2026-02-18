import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { BookingSection } from './components/BookingSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LoginDialog } from './components/LoginDialog';
import { BookingDialog } from './components/BookingDialog';
import { Toaster } from './components/ui/sonner';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleBookService = (serviceName: string) => {
    setSelectedService(serviceName);
    setShowBooking(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={() => setShowLogin(true)} />
      
      <main>
        <Hero onBookNow={() => setShowBooking(true)} />
        <Services onBookService={handleBookService} />
        <Gallery />
        <Testimonials />
        <BookingSection onBookNow={() => setShowBooking(true)} />
        <Contact />
      </main>

      <Footer />

      <LoginDialog open={showLogin} onOpenChange={setShowLogin} />
      <BookingDialog 
        open={showBooking} 
        onOpenChange={setShowBooking}
        selectedService={selectedService}
      />

      <Toaster />
    </div>
  );
}

export default App;
