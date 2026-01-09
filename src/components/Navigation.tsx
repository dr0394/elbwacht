import { useState, useEffect } from 'react';
import { Menu, X, Shield, AlertCircle } from 'lucide-react';

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
              <div
                className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-100 transition-opacity rounded-md"
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
                }}
              ></div>
              <div
                className="relative p-2 border-2 border-white/20 rounded-md"
                style={{
                  background: 'linear-gradient(135deg, #0d152d 0%, #213571 100%)',
                }}
              >
                <Shield className="h-8 w-8 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <div>
              <div className="font-black text-xl tracking-wide text-gray-900">ELBWACHT</div>
              <div className="text-xs font-bold tracking-widest bg-gradient-to-r from-royal-700 to-royal-500 bg-clip-text text-transparent">SECURITY SERVICE</div>
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
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #0d152d 0%, #213571 100%)',
                  }}
                ></span>
              </button>
            ))}

            <button
              onClick={onOpenForm}
              className="relative overflow-hidden border border-white/20 text-white px-6 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center space-x-2 group"
              style={{
                background: 'linear-gradient(135deg, #0d152d 0%, #213571 100%)',
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)',
                }}
              />
              <AlertCircle className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Anfrage senden</span>
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
              className="block w-full relative overflow-hidden border border-white/20 text-white px-6 py-3 rounded-full font-semibold transition-all mt-4 group"
              style={{
                background: 'linear-gradient(135deg, #0d152d 0%, #213571 100%)',
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)',
                }}
              />
              <span className="relative z-10">Anfrage senden</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
