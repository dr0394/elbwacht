import { AlertTriangle, CheckCircle, X, CheckSquare } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px)`,
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 border-b border-gray-800 pb-12">
          <div className="inline-block mb-6 px-6 py-2 border-2 border-red-600 bg-red-950/20 backdrop-blur-sm rounded-full">
            <span className="text-red-500 font-black text-sm tracking-widest uppercase">Mission Statement</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
            Ihre Sicherheit ist unser Auftrag
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-medium">
            Wir verstehen die Herausforderungen moderner Sicherheitsanforderungen
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-red-600/10 blur-2xl group-hover:bg-red-600/20 transition-all rounded-lg"></div>
            <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm p-8 border-l-4 border-red-600 border border-gray-800 rounded-lg">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-red-600/20 border-2 border-red-600 rounded-lg">
                    <AlertTriangle className="h-8 w-8 text-red-500" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">Die Bedrohung</h3>
                </div>
                <div className="px-4 py-2 bg-red-600 border-2 border-red-500 rounded-full">
                  <span className="text-white font-black text-xs">RISIKO</span>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  'Unzureichender Objektschutz führt zu Vandalismus und Diebstahl',
                  'Veranstaltungen ohne professionelle Sicherheit bergen Haftungsrisiken',
                  'Fehlende Nachkontrollen gefährden den Versicherungsschutz',
                  'Ungeschultes Personal kann Situationen eskalieren lassen',
                  '24/7 Sicherheitsbedarf überfordert interne Ressourcen'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-4 group/item">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 border-2 border-red-600 rounded-sm flex items-center justify-center">
                        <X className="h-4 w-4 text-red-500" strokeWidth={3} />
                      </div>
                    </div>
                    <span className="text-gray-300 font-medium group-hover/item:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-red-600/10 blur-2xl group-hover:bg-red-600/20 transition-all rounded-lg"></div>
            <div className="relative bg-gradient-to-br from-red-950/20 to-black/90 backdrop-blur-sm p-8 border-l-4 border-red-600 border border-red-600/30 rounded-lg">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-red-600/20 border-2 border-red-600 rounded-lg">
                    <CheckCircle className="h-8 w-8 text-red-500" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">Die Lösung</h3>
                </div>
                <div className="px-4 py-2 bg-red-600 border-2 border-red-500 rounded-full">
                  <span className="text-white font-black text-xs">SICHER</span>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  'Professioneller Objektschutz durch geschultes Sicherheitspersonal',
                  'Rechtssichere Veranstaltungsbetreuung mit Behördenkoordination',
                  'Dokumentierte Revierdienste mit digitalen Kontrollberichten',
                  'Deeskalationstraining und Konfliktmanagement-Expertise',
                  'Rund-um-die-Uhr Service mit schnellen Reaktionszeiten'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-4 group/item">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-red-600 border-2 border-red-500 rounded-sm flex items-center justify-center group-hover/item:scale-110 transition-transform">
                        <CheckSquare className="h-4 w-4 text-white" strokeWidth={3} />
                      </div>
                    </div>
                    <span className="text-gray-300 font-medium group-hover/item:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-red-600/20 via-red-600/30 to-red-600/20 blur-2xl rounded-lg"></div>
          <div className="relative bg-gradient-to-r from-red-600 to-red-700 text-white p-10 border-2 border-red-500 rounded-lg shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <p className="text-2xl lg:text-3xl font-black mb-3 uppercase tracking-tight">
                  Maximaler Schutz durch Experten
                </p>
                <p className="text-gray-100 text-lg font-medium">
                  500+ zufriedene Kunden vertrauen auf unsere Expertise in Hamburg und Norddeutschland
                </p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center px-8 py-5 bg-black/50 backdrop-blur-sm border-2 border-white rounded-lg">
                  <div className="text-5xl font-black mb-1">500+</div>
                  <div className="text-sm font-bold tracking-wider uppercase text-gray-200">Kunden</div>
                </div>
                <div className="text-center px-8 py-5 bg-black/50 backdrop-blur-sm border-2 border-white rounded-lg">
                  <div className="text-5xl font-black mb-1">24/7</div>
                  <div className="text-sm font-bold tracking-wider uppercase text-gray-200">Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
