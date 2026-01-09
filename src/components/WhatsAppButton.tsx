import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleClick = () => {
    const whatsappNumber = '491638467694';
    const message = 'Hallo! Ich interessiere mich für Ihre Sicherheitsdienstleistungen.';
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 shadow-2xl hover:scale-110 transition-transform z-40 group"
      aria-label="WhatsApp Kontakt"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#1a2332] text-white px-4 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Per WhatsApp kontaktieren
      </span>
    </button>
  );
}
