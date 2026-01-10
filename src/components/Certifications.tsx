import { Award, Shield, FileCheck, CheckCircle, ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';
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
  },
  {
    icon: GraduationCap,
    title: 'Regelmäßige Weiterbildung',
    description: 'Kontinuierliche Schulungen in Deeskalation, Brandschutz, Erster Hilfe und aktueller Rechtsprechung.',
    features: ['100% Zertifiziert', 'Jährliche Schulungen', 'Aktuelle Standards']
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
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-4 bg-white hover:bg-royal-700 text-royal-700 hover:text-white border-2 border-royal-700 rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" strokeWidth={3} />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-4 bg-white hover:bg-royal-700 text-royal-700 hover:text-white border-2 border-royal-700 rounded-full p-3 transition-all duration-300 hover:scale-110"
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
                <div className="relative h-full bg-white border-2 border-gray-200 group-hover:border-royal-700 rounded-xl p-8 transition-all duration-300 group-hover:transform group-hover:-translate-y-1">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-royal-50 border-2 border-royal-700 rounded-xl group-hover:bg-royal-700 transition-all duration-300">
                        <cert.icon className="h-10 w-10 text-royal-700 group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-royal-700 transition-colors duration-300">
                        {cert.title}
                      </h3>

                      <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                        {cert.description}
                      </p>

                      <div className="space-y-3 pt-6 border-t-2 border-gray-200 group-hover:border-royal-700 transition-colors duration-300">
                        {cert.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-royal-700 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                            <span className="text-gray-600 text-sm font-medium group-hover:text-gray-900 transition-colors duration-300">{feature}</span>
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
      </div>
    </section>
  );
}
