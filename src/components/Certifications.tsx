import { Award, Shield, FileCheck, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const certifications = [
  {
    icon: Shield,
    title: '§34a GewO Sachkundeprüfung',
    description: 'Alle unsere Sicherheitskräfte verfügen über die gesetzlich vorgeschriebene Sachkundeprüfung nach §34a der Gewerbeordnung.',
    features: ['IHK-Prüfung', 'Rechtskunde', 'Deeskalation']
  },
  {
    icon: Award,
    title: 'DIN 77200 Zertifizierung',
    description: 'Qualitätsmanagementsystem für Sicherheitsdienstleistungen nach den höchsten deutschen Standards.',
    features: ['Qualitätsmanagement', 'Prozessoptimierung', 'Kundenzufriedenheit']
  },
  {
    icon: FileCheck,
    title: 'IHK-Fachkraft für Schutz und Sicherheit',
    description: 'Mehrjährige Ausbildung und anerkannter Berufsabschluss unserer leitenden Sicherheitskräfte.',
    features: ['3-jährige Ausbildung', 'Fachtheorie', 'Praxiserfahrung']
  },
  {
    icon: CheckCircle,
    title: 'Zuverlässigkeitsprüfung',
    description: 'Behördliche Überprüfung aller Mitarbeiter nach §34a GewO und polizeilichem Führungszeugnis.',
    features: ['Polizeiliche Prüfung', 'Führungszeugnis', 'Regelmäßige Updates']
  }
];

export default function Certifications() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = direction === 'left'
        ? sliderRef.current.scrollLeft - scrollAmount
        : sliderRef.current.scrollLeft + scrollAmount;

      sliderRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };
  return (
    <section id="zertifikate" className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px)`,
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-6 px-6 py-2 border-2 border-royal-700 bg-royal-50 backdrop-blur-sm rounded-full">
            <span className="text-royal-700 font-black text-sm tracking-widest uppercase">Qualifikationen</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Zertifizierte Kompetenz
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Höchste Standards durch anerkannte Qualifikationen und Zertifizierungen
          </p>
        </div>

        <div className="relative mb-16">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-4 bg-white hover:bg-royal-700 text-royal-700 hover:text-white border-2 border-royal-700 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" strokeWidth={3} />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-4 bg-white hover:bg-royal-700 text-royal-700 hover:text-white border-2 border-royal-700 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" strokeWidth={3} />
          </button>

          <div
            ref={sliderRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth px-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {certifications.map((cert, index) => (
              <div key={index} className="group relative flex-shrink-0 w-[500px]">
                <div className="absolute -inset-1 bg-royal-700/10 blur-2xl group-hover:bg-royal-700/20 transition-all rounded-lg"></div>
                <div className="relative h-full bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200 group-hover:border-royal-700/50 rounded-lg p-8 transition-all">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-royal-700/20 border-2 border-royal-700 rounded-lg group-hover:scale-110 transition-transform">
                        <cert.icon className="h-10 w-10 text-royal-700" strokeWidth={2.5} />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">
                        {cert.title}
                      </h3>

                      <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                        {cert.description}
                      </p>

                      <div className="space-y-3 pt-6 border-t border-gray-200">
                        {cert.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <div className="w-1.5 h-1.5 bg-royal-700 rounded-full"></div>
                            <span className="text-gray-600 text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-royal-700/20 via-royal-700/30 to-royal-700/20 blur-2xl rounded-lg"></div>
          <div className="relative bg-gradient-to-r from-royal-700 to-royal-800 text-white p-10 border-2 border-royal-700 rounded-lg shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <p className="text-2xl lg:text-3xl font-black mb-3 uppercase tracking-tight">
                  Regelmäßige Weiterbildung
                </p>
                <p className="text-gray-100 text-lg font-medium">
                  Kontinuierliche Schulungen in Deeskalation, Brandschutz, Erster Hilfe und aktueller Rechtsprechung
                </p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center px-8 py-5 bg-gray-50/20 backdrop-blur-sm border-2 border-white rounded-lg">
                  <div className="text-5xl font-black mb-1">100%</div>
                  <div className="text-sm font-bold tracking-wider uppercase text-gray-200">Zertifiziert</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
