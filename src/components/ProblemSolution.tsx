import { AlertTriangle, CheckCircle, X, CheckSquare } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px)`,
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 border-b border-gray-200 pb-12">
          <div className="inline-block mb-6 px-6 py-2 border-2 border-royal-700 bg-royal-50 backdrop-blur-sm rounded-full">
            <span className="text-royal-700 font-black text-sm tracking-widest uppercase">Mission Statement</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Ihre Sicherheit ist unser Auftrag
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Wir verstehen die Herausforderungen moderner Sicherheitsanforderungen
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-royal-700/10 blur-2xl group-hover:bg-royal-700/20 transition-all rounded-lg"></div>
            <div className="relative bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm p-8 border-l-4 border-royal-700 border border-gray-200 rounded-lg">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-royal-700/20 border-2 border-royal-700 rounded-lg">
                    <AlertTriangle className="h-8 w-8 text-royal-700" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Die Bedrohung</h3>
                </div>
                <div className="px-4 py-2 bg-royal-700 border-2 border-royal-700 rounded-full">
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
                      <div className="w-6 h-6 border-2 border-royal-700 rounded-sm flex items-center justify-center">
                        <X className="h-4 w-4 text-royal-700" strokeWidth={3} />
                      </div>
                    </div>
                    <span className="text-gray-600 font-medium group-hover/item:text-gray-900 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-royal-700/10 blur-2xl group-hover:bg-royal-700/20 transition-all rounded-lg"></div>
            <div className="relative bg-gradient-to-br from-royal-50 to-gray-50 backdrop-blur-sm p-8 border-l-4 border-royal-700 border border-royal-700/30 rounded-lg">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-royal-700/20 border-2 border-royal-700 rounded-lg">
                    <CheckCircle className="h-8 w-8 text-royal-700" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Die Lösung</h3>
                </div>
                <div className="px-4 py-2 bg-royal-700 border-2 border-royal-700 rounded-full">
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
                      <div className="w-6 h-6 bg-royal-700 border-2 border-royal-700 rounded-sm flex items-center justify-center group-hover/item:scale-110 transition-transform">
                        <CheckSquare className="h-4 w-4 text-white" strokeWidth={3} />
                      </div>
                    </div>
                    <span className="text-gray-600 font-medium group-hover/item:text-gray-900 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
