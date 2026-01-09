import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 max-w-md bg-white shadow-2xl z-40 border-2 border-gray-200">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-bold text-[#1a2332] text-lg">Cookie-Einstellungen</h3>
          <button
            onClick={handleDecline}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Banner schließen"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="text-sm text-gray-700 mb-4">
          Wir verwenden Cookies, um Ihnen die bestmögliche Nutzung unserer Website zu ermöglichen.
          Durch die weitere Nutzung der Website stimmen Sie der Verwendung von Cookies zu.
        </p>

        <p className="text-xs text-gray-600 mb-4">
          Weitere Informationen finden Sie in unserer{' '}
          <a href="/datenschutz" className="text-[#D4AF37] hover:underline">
            Datenschutzerklärung
          </a>
          .
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleDecline}
            className="flex-1 border-2 border-gray-300 text-[#1a2332] px-4 py-2.5 font-semibold hover:bg-gray-100 transition-all"
          >
            Alles ablehnen
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 bg-[#D4AF37] text-[#1a2332] px-4 py-2.5 font-semibold hover:bg-[#c19d2f] transition-all"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
