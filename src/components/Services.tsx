import { Shield, Users, Building2, Eye, Clock, HardHat } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const services = [
  {
    icon: Building2,
    title: 'Objektschutz',
    description: 'Professionelle Bewachung Ihrer Gebäude, Anlagen und Immobilien -inklusive Schutz vor Mietnomaden und unbefugtem Zutritt.',
    features: ['24/7 Bewachung', 'Zugangskontrolle', 'Mietnomaden-Prävention']
  },
  {
    icon: Users,
    title: 'Eventschutz',
    description: 'Sicherheitskonzepte für Veranstaltungen jeder Größe - von privaten Feiern bis zu Großveranstaltungen.',
    features: ['Einlasskontrolle', 'Crowdmanagement', 'VIP-Begleitung']
  },
  {
    icon: Eye,
    title: 'Revierdienst',
    description: 'Regelmäßige Kontrollgänge auf Ihrem Gelände mit dokumentierter Berichterstattung und schnellen Reaktionszeiten.',
    features: ['GPS-Tracking', 'Digitale Berichte', 'Flexible Intervalle']
  },
  {
    icon: Shield,
    title: 'Empfangsdienste',
    description: 'Professioneller Empfang und Besuchermanagement für Ihr Unternehmen mit höchster Servicequalität.',
    features: ['Besucherverwaltung', 'Telefonservice', 'Paketannahme']
  },
  {
    icon: HardHat,
    title: 'Baustellensicherung',
    description: 'Zuverlässiger Schutz Ihrer Baustelle vor Diebstahl, Vandalismus und unbefugtem Betreten.',
    features: ['Baustellen-Bewachung', 'Material-Schutz', 'Baustellenlogistik']
  },
  {
    icon: Clock,
    title: 'Nachtwache',
    description: 'Zuverlässige Sicherheitspräsenz während der Nachtstunden für Ihr Unternehmen und Ihre Immobilien.',
    features: ['Nachtpatrouille', 'Notfallreaktion', 'Schlüsseldienst']
  }
];

export default function Services() {
  const { theme } = useTheme();

  return (
    <section id="leistungen" className={`relative py-24 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-black via-gray-900 to-black'
        : 'bg-gradient-to-b from-gray-50 via-white to-gray-100'
    }`}>
      <div className={`absolute inset-0 ${theme === 'dark' ? 'opacity-[0.02]' : 'opacity-[0.03]'}`} style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px),
          repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)
        `,
        backgroundSize: '40px 40px',
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-6 px-6 py-2 border-2 border-red-600 bg-red-950/20 backdrop-blur-sm rounded-full">
            <span className="text-red-500 font-black text-sm tracking-widest uppercase">Unsere Leistungen</span>
          </div>
          <h2 className={`text-4xl lg:text-5xl font-black mb-6 tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Professionelle Sicherheitslösungen
          </h2>
          <p className={`text-xl max-w-3xl mx-auto font-medium ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
          }`}>
            Maßgeschneiderte Sicherheitsdienstleistungen für jeden Bedarf
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-red-600/10 blur-2xl group-hover:bg-red-600/20 transition-all rounded-lg"></div>
              <div className={`relative h-full backdrop-blur-sm border group-hover:border-red-600/50 rounded-lg p-8 transition-all ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-900/90 to-black/90 border-gray-800'
                  : 'bg-gradient-to-br from-white to-gray-50/50 border-gray-200'
              }`}>
                <div className="mb-6">
                  <div className="inline-block p-4 bg-red-600/20 border-2 border-red-600 rounded-lg group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-red-500" strokeWidth={2.5} />
                  </div>
                </div>

                <h3 className={`text-2xl font-black mb-4 group-hover:text-red-500 transition-colors tracking-tight ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>

                <p className={`mb-6 leading-relaxed font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
                }`}>
                  {service.description}
                </p>

                <div className="space-y-3 pt-6 border-t border-gray-800">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                      <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className={`inline-flex items-center gap-4 backdrop-blur-sm px-8 py-6 rounded-full border ${
            theme === 'dark'
              ? 'bg-black/80 border-white/10'
              : 'bg-white/80 border-gray-200'
          }`}>
            <Shield className="h-8 w-8 text-red-500" />
            <div className="text-left">
              <div className={`font-black text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Individuelle Lösungen</div>
              <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>Wir beraten Sie gerne persönlich</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
