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
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 leading-tight">
            Quartiersicherung & Objektüberwachung in Göttingen
          </h3>
          <h4 className="text-xl lg:text-2xl font-bold text-gray-700 leading-tight">
            Referenz: Kontrolle über eine deutschlandweit bekannte Problemimmobilie
          </h4>
        </div>

        <div className="relative border-2 border-gray-200 rounded-lg overflow-hidden min-h-[600px] flex items-center shadow-xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://i.imgur.com/bn62Iiv.jpg)',
            }}
          ></div>

          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(13,21,45,0.85) 0%, rgba(13,21,45,0.75) 50%, rgba(13,21,45,0.85) 100%)',
            }}
          ></div>

          <div className="relative z-10 w-full p-8 lg:p-16">
            <div className="max-w-4xl">
              <h5 className="text-lg lg:text-xl font-bold text-white/85 mb-8 leading-relaxed">
                Durch strukturierte Objektüberwachung, Präsenz und klare Abläufe konnte eine unkontrollierte Besetzung verhindert werden.
              </h5>

              <div className="space-y-4 text-white/90 text-base lg:text-lg font-medium leading-relaxed">
                <p>
                  Diese Referenz zeigt, wie professionelle Quartiersicherung bei besonders sensiblen Objekten funktioniert.
                </p>
                <p>
                  Bei einer in der Presse vielfach thematisierten Problemimmobilie in Göttingen bestand ein erhöhtes Risiko durch unbefugten Zutritt, Vandalismus und mögliche Besetzung.
                </p>
                <p>
                  Durch gezielte Objektüberwachung, regelmäßige Kontrollgänge und sichtbare Präsenz wurde die Situation stabilisiert und dauerhaft unter Kontrolle gebracht.
                </p>
                <p>
                  Der Fokus lag dabei auf Prävention, Dokumentation und schneller Reaktion – ohne Eskalation.
                </p>
                <p>
                  Diese Maßnahme belegt unsere Erfahrung im Umgang mit leerstehenden Häusern, Problemobjekten und quartalsweiser Quartiersicherung – auch in komplexen Fällen mit öffentlicher Aufmerksamkeit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
