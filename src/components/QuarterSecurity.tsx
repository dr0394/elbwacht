import { Shield, Eye, FileCheck, Clock } from 'lucide-react';

export default function QuarterSecurity() {
  const features = [
    {
      icon: Eye,
      title: 'Regelmäßige Objektkontrollen und Revierfahrten',
      description: 'Planmäßige Rundgänge und Kontrollfahrten durch geschultes Personal'
    },
    {
      icon: Shield,
      title: 'Sichtbare Präsenz zur Abschreckung',
      description: 'Uniformierte Sicherheitskräfte als wirksame Präventionsmaßnahme'
    },
    {
      icon: Clock,
      title: 'Früherkennung von Besetzungsversuchen',
      description: 'Rechtzeitige Erkennung verdächtiger Aktivitäten und Zutrittversuche'
    },
    {
      icon: FileCheck,
      title: 'Dokumentation & schnelle Reaktion',
      description: 'Lückenlose Protokollierung und sofortige Maßnahmen bei Vorfällen'
    }
  ];

  return (
    <>
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0d152d 0%, #213571 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px),
              repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)
            `,
            backgroundSize: '60px 60px',
          }}
        ></div>
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          }}
        ></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className="inline-block border-l-4 pl-4 mb-6"
            style={{
              borderColor: 'rgba(255,255,255,0.4)',
            }}
          >
            <span className="font-black text-sm tracking-widest uppercase text-white/80">
              Objektschutz & Prävention
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white leading-tight">
            Quartiersicherung & Objektüberwachung
          </h2>

          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
            Schutz leerstehender Immobilien und Quartiere vor unbefugtem Zutritt, Besetzung und Vandalismus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative backdrop-blur-sm border-2 p-8 rounded-lg transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  borderColor: 'rgba(255,255,255,0.1)',
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%)',
                  }}
                ></div>

                <div className="relative flex items-start space-x-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    }}
                  >
                    <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="relative backdrop-blur-sm border-2 p-8 rounded-lg text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%)',
            borderColor: 'rgba(255,255,255,0.2)',
          }}
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Shield className="h-8 w-8 text-white" strokeWidth={2} />
            <h3 className="text-2xl font-black text-white">
              Schutz leerstehender Häuser und Anlagen
            </h3>
          </div>
          <p className="text-white/90 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Wir sind da, bevor etwas passiert. Professionelle Überwachung verhindert Besetzungen, Vandalismus und unbefugte Zutritte durch kontinuierliche Präsenz und dokumentierte Kontrollen.
          </p>
        </div>
      </div>
    </section>

    <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px),
          repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)
        `,
        backgroundSize: '40px 40px',
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-6 py-2 border-2 border-royal-700 bg-royal-50 backdrop-blur-sm rounded-full">
            <span className="text-royal-700 font-black text-sm tracking-widest uppercase">Referenzprojekt</span>
          </div>

          <h3 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
            Göttingen
          </h3>

          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl lg:text-2xl text-gray-900 font-bold leading-relaxed">
              Stabilisierung einer öffentlich bekannten Problemimmobilie durch strukturierte Präsenz und klare Sicherheitsabläufe.
            </p>

            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
              Bei einem öffentlich bekannten Objekt mit erhöhtem Risiko wurde durch konsequente Präsenz, strukturierte Abläufe und kontinuierliche Kontrolle eine stabile und sichere Situation hergestellt.
            </p>

            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-medium">
              Der Fokus lag auf Prävention, klarer Organisation und schneller Reaktion – dauerhaft und ohne Eskalation.
            </p>
          </div>
        </div>

        <div className="relative border-2 border-gray-200 rounded-lg overflow-hidden shadow-xl bg-gray-900">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mb-4">
                  <svg
                    className="w-24 h-24 mx-auto text-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <p className="text-white text-lg font-semibold">YouTube Video Platzhalter</p>
                <p className="text-gray-400 text-sm mt-2">Video-ID hier einfügen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
