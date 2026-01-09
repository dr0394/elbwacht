import { useState, useEffect } from 'react';
import { Menu, X, Shield, Star, AlertCircle } from 'lucide-react';

interface NavigationProps {
  onOpenForm: () => void;
}

export default function Navigation({ onOpenForm }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b shadow-2xl transition-all duration-300 bg-white/95 border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => scrollToSection('hero')} className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-700/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-2 bg-gradient-to-br from-blue-600 to-blue-800 border-2 border-blue-500">
                <Shield className="h-8 w-8 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <div>
              <div className="font-black text-xl tracking-wide text-gray-900">ELBWACHT</div>
              <div className="text-blue-700 text-xs font-bold tracking-widest">SECURITY SERVICE</div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center space-x-6">
            {[
              { id: 'hero', label: 'Start' },
              { id: 'leistungen', label: 'Leistungen' },
              { id: 'ueber-uns', label: 'Über uns' },
              { id: 'zertifikate', label: 'Zertifikate' },
              { id: 'karriere', label: 'Karriere' },
              { id: 'kontakt', label: 'Kontakt' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="transition-all duration-300 font-medium relative group drop-shadow-md text-gray-700 hover:text-gray-900"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}

            <div className="flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full border bg-white/80 border-gray-200">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="font-medium text-sm text-gray-900">Google</span>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <span className="font-bold text-lg text-gray-900">5,0</span>
            </div>

            <button
              onClick={onOpenForm}
              className="bg-blue-700 hover:bg-blue-800 border border-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <AlertCircle className="w-4 h-4" />
              <span>Anfrage senden</span>
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors backdrop-blur-md border hover:bg-gray-100 border-gray-300 text-gray-900"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden backdrop-blur-xl border-t bg-white/95 border-gray-200">
          <div className="px-4 py-4 space-y-2">
            {[
              { id: 'hero', label: 'Start' },
              { id: 'leistungen', label: 'Leistungen' },
              { id: 'ueber-uns', label: 'Über uns' },
              { id: 'zertifikate', label: 'Zertifikate' },
              { id: 'karriere', label: 'Karriere' },
              { id: 'kontakt', label: 'Kontakt' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 px-4 rounded-lg font-medium transition-all text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={onOpenForm}
              className="block w-full bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-semibold transition-all mt-4"
            >
              Anfrage senden
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
