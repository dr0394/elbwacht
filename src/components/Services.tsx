import { Shield, Users, Building2, Eye, Clock, HardHat } from 'lucide-react';

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
  return (
    <section id="leistungen" className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden w-full">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px),
          repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)
        `,
        backgroundSize: '40px 40px',
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-8 sm:mb-12 lg:mb-20">
          <div
            className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 border-2 border-white/20 backdrop-blur-sm rounded-full relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0d152d 0%, #213571 100%)',
            }}
          >
            <span className="text-white font-black text-xs sm:text-sm tracking-widest uppercase relative z-10">Unsere Leistungen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 tracking-tight text-gray-900 px-4">
            Professionelle Sicherheitslösungen
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto font-medium text-gray-700 px-4">
            Maßgeschneiderte Sicherheitsdienstleistungen für jeden Bedarf
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative w-full">
              <div
                className="absolute -inset-0.5 sm:-inset-1 blur-xl sm:blur-2xl group-hover:opacity-100 opacity-50 transition-all rounded-lg"
                style={{
                  background: 'radial-gradient(circle, rgba(13,21,45,0.15) 0%, transparent 70%)',
                }}
              ></div>
              <div className="relative h-full backdrop-blur-sm border group-hover:border-white/30 rounded-lg p-5 sm:p-6 lg:p-8 transition-all bg-gradient-to-br from-white to-gray-50/50 border-gray-200 overflow-hidden">
                <div className="mb-4 sm:mb-6">
                  <div
                    className="inline-block p-3 sm:p-4 border-2 border-white/20 rounded-lg group-hover:scale-110 transition-all duration-300 relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #0d152d 0%, #213571 100%)',
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
                      }}
                    />
                    <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white relative z-10" strokeWidth={2.5} />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 transition-colors tracking-tight text-gray-900 group-hover:bg-gradient-to-r group-hover:from-royal-700 group-hover:to-royal-500 group-hover:bg-clip-text group-hover:text-transparent break-words">
                  {service.title}
                </h3>

                <p className="mb-4 sm:mb-6 leading-relaxed font-medium text-gray-700 text-sm sm:text-base break-words">
                  {service.description}
                </p>

                <div className="space-y-2 sm:space-y-3 pt-4 sm:pt-6 border-t border-gray-200">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 sm:space-x-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, #0d152d 0%, #213571 100%)',
                        }}
                      ></div>
                      <span className="text-xs sm:text-sm font-medium text-gray-600 break-words">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16 text-center px-4">
          <div
            className="inline-flex items-center gap-3 sm:gap-4 backdrop-blur-sm px-6 py-4 sm:px-8 sm:py-6 rounded-full border border-white/20 relative overflow-hidden group cursor-pointer transition-all hover:scale-105 w-full max-w-md sm:w-auto"
            style={{
              background: 'linear-gradient(135deg, #0d152d 0%, #213571 100%)',
            }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
              }}
            />
            <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white relative z-10 flex-shrink-0" />
            <div className="text-left relative z-10">
              <div className="font-black text-base sm:text-lg text-white">Individuelle Lösungen</div>
              <div className="text-xs sm:text-sm font-medium text-gray-300">Wir beraten Sie gerne persönlich</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
