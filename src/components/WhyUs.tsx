import { Shield, Users, Clock, Award, CheckCircle, HeadphonesIcon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const features = [
  {
    icon: Shield,
    title: 'Geprüfte Qualifikation',
    description: 'Alle unsere Mitarbeiter verfügen über die erforderliche §34a GewO Sachkundeprüfung und regelmäßige Weiterbildungen.'
  },
  {
    icon: Clock,
    title: '24/7 Verfügbarkeit',
    description: 'Rund um die Uhr erreichbar und einsatzbereit - 365 Tage im Jahr für Ihre Sicherheit.'
  },
  {
    icon: Users,
    title: 'Erfahrenes Team',
    description: 'Über 15 Jahre Erfahrung im Sicherheitsgewerbe mit hochqualifizierten Sicherheitskräften.'
  },
  {
    icon: Award,
    title: 'Zertifizierte Qualität',
    description: 'IHK-zertifiziert und nach DIN 77200 für Sicherheitsdienstleistungen qualifiziert.'
  },
  {
    icon: HeadphonesIcon,
    title: 'Persönlicher Service',
    description: 'Direkter Ansprechpartner und individuelle Betreuung für optimale Sicherheitslösungen.'
  },
  {
    icon: CheckCircle,
    title: 'Rechtssicherheit',
    description: 'Vollständig versichert, rechtskonforme Dokumentation und professionelle Behördenkoordination.'
  }
];

export default function WhyUs() {
  const { theme } = useTheme();

  return (
    <section id="warum-wir" className={`relative py-24 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-black via-gray-900 to-black'
        : 'bg-gradient-to-b from-gray-50 via-white to-gray-100'
    }`}>
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px)`,
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-6 px-6 py-2 border-2 border-red-600 bg-red-950/20 backdrop-blur-sm rounded-full">
            <span className="text-red-500 font-black text-sm tracking-widest uppercase">Warum Elbwacht</span>
          </div>
          <h2 className={`text-4xl lg:text-5xl font-black mb-6 tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Sicherheit, auf die Sie sich verlassen können
          </h2>
          <p className={`text-xl max-w-3xl mx-auto font-medium ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
          }`}>
            Persönlich. Professionell. Verantwortungsbewusst.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-red-600/10 blur-2xl group-hover:bg-red-600/20 transition-all rounded-lg"></div>
              <div className={`relative h-full backdrop-blur-sm border group-hover:border-red-600/50 rounded-lg p-8 transition-all ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-900/90 to-black/90 border-gray-800'
                  : 'bg-gradient-to-br from-white to-gray-50/50 border-gray-200'
              }`}>
                <div className="mb-6">
                  <div className="inline-block p-4 bg-red-600/20 border-2 border-red-600 rounded-lg group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-red-500" strokeWidth={2.5} />
                  </div>
                </div>

                <h3 className={`text-xl font-black mb-4 tracking-tight ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>

                <p className={`leading-relaxed font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
                }`}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-red-600/20 via-red-600/30 to-red-600/20 blur-2xl rounded-lg"></div>
          <div className="relative bg-gradient-to-r from-red-600 to-red-700 text-white p-10 border-2 border-red-500 rounded-lg shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-black/50 backdrop-blur-sm border-2 border-white rounded-lg">
                <div className="text-5xl font-black mb-2">15+</div>
                <div className="text-gray-200 font-bold tracking-wider uppercase">Jahre Erfahrung</div>
              </div>
              <div className="p-6 bg-black/50 backdrop-blur-sm border-2 border-white rounded-lg">
                <div className="text-5xl font-black mb-2">500+</div>
                <div className="text-gray-200 font-bold tracking-wider uppercase">Zufriedene Kunden</div>
              </div>
              <div className="p-6 bg-black/50 backdrop-blur-sm border-2 border-white rounded-lg">
                <div className="text-5xl font-black mb-2">100%</div>
                <div className="text-gray-200 font-bold tracking-wider uppercase">Zuverlässigkeit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
