import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useState } from 'react';
import { toast } from 'sonner';

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedService: string | null;
}

const services = [
  'Corte y Peinado',
  'Tratamiento Facial',
  'Masaje Relajante',
  'Manicure & Pedicure',
  'Depilación',
  'Hidratación Capilar',
];

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
  '05:00 PM', '06:00 PM',
];

export function BookingDialog({ open, onOpenChange, selectedService }: BookingDialogProps) {
  const [date, setDate] = useState<Date>();
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedService || '',
    time: '',
    notes: '',
  });

  // Actualizar servicio cuando cambia selectedService
  useState(() => {
    if (selectedService) {
      setBookingData(prev => ({ ...prev, service: selectedService }));
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!bookingData.name || !bookingData.email || !bookingData.phone || !bookingData.service || !date || !bookingData.time) {
      toast.error('Por favor completa todos los campos obligatorios');
      return;
    }

    const formattedDate = format(date, 'PPP', { locale: es });
    toast.success(
      `¡Reserva confirmada! ${bookingData.service} el ${formattedDate} a las ${bookingData.time}. Te enviaremos un correo de confirmación.`,
      { duration: 5000 }
    );

    onOpenChange(false);
    setBookingData({
      name: '',
      email: '',
      phone: '',
      service: '',
      time: '',
      notes: '',
    });
    setDate(undefined);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Reservar Cita</DialogTitle>
          <DialogDescription>
            Completa el formulario para reservar tu cita. Te confirmaremos por email y WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nombre Completo *</Label>
              <Input
                id="name"
                type="text"
                value={bookingData.name}
                onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                placeholder="Tu nombre"
                className="mt-2"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">Teléfono *</Label>
              <Input
                id="phone"
                type="tel"
                value={bookingData.phone}
                onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                placeholder="809-000-0000"
                className="mt-2"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Correo Electrónico *</Label>
            <Input
              id="email"
              type="email"
              value={bookingData.email}
              onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
              placeholder="tu@email.com"
              className="mt-2"
              required
            />
          </div>

          <div>
            <Label htmlFor="service">Servicio *</Label>
            <Select
              value={bookingData.service}
              onValueChange={(value) => setBookingData({ ...bookingData, service: value })}
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Selecciona un servicio" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Fecha *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal mt-2"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, 'PPP', { locale: es }) : 'Selecciona una fecha'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => {
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      return date < today || date.getDay() === 0; // Disable past dates and Sundays
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <Label htmlFor="time">Hora *</Label>
              <Select
                value={bookingData.time}
                onValueChange={(value) => setBookingData({ ...bookingData, time: value })}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Selecciona una hora" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="notes">Notas Adicionales (Opcional)</Label>
            <Textarea
              id="notes"
              value={bookingData.notes}
              onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
              placeholder="¿Alguna preferencia especial o condición que debamos conocer?"
              className="mt-2 min-h-24"
            />
          </div>

          <div className="bg-rose-50 border border-rose-200 rounded-lg p-4 text-sm">
            <p className="text-gray-700">
              <strong>Nota:</strong> Recibirás un correo de confirmación con los detalles de tu cita. 
              Si necesitas cancelar o reagendar, contáctanos con al menos 24 horas de anticipación.
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button type="submit" className="flex-1 bg-rose-600 hover:bg-rose-700">
              Confirmar Reserva
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}