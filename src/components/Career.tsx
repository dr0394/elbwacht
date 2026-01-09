import { Briefcase, GraduationCap, TrendingUp, Heart, CheckCircle } from 'lucide-react';

const benefits = [
  {
    icon: GraduationCap,
    title: 'Ausbildung & Weiterbildung',
    description: 'Vollständig finanzierte §34a Ausbildung und regelmäßige Fortbildungen'
  },
  {
    icon: TrendingUp,
    title: 'Karrierechancen',
    description: 'Klare Aufstiegsmöglichkeiten vom Mitarbeiter bis zur Führungskraft'
  },
  {
    icon: Heart,
    title: 'Attraktive Konditionen',
    description: 'Überdurchschnittliche Bezahlung, Zuschläge und betriebliche Altersvorsorge'
  },
  {
    icon: CheckCircle,
    title: 'Flexibilität',
    description: 'Verschiedene Arbeitszeitmodelle für optimale Work-Life-Balance'
  }
];

const positions = [
  'Sicherheitsmitarbeiter (m/w/d) für Objektschutz',
  'Veranstaltungsschutz-Mitarbeiter (m/w/d)',
  'Reviergänger (m/w/d) für Kontrolldienste',
  'Teamleiter Sicherheit (m/w/d)',
  'Ausbildung zur Fachkraft für Schutz und Sicherheit (m/w/d)'
];

export default function Career() {
  return (
    <section id="karriere" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px)`,
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-6 px-6 py-2 border-2 border-red-600 bg-red-950/20 backdrop-blur-sm rounded-full">
            <span className="text-red-500 font-black text-sm tracking-widest uppercase">Karriere</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
            Werde Teil unseres Teams
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-medium">
            Sichere deine Zukunft mit einer Karriere im Sicherheitsgewerbe
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-red-600/10 blur-2xl group-hover:bg-red-600/20 transition-all rounded-lg"></div>
              <div className="relative h-full bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-gray-800 group-hover:border-red-600/50 rounded-lg p-8 transition-all">
                <div className="mb-6">
                  <div className="inline-block p-4 bg-red-600/20 border-2 border-red-600 rounded-lg group-hover:scale-110 transition-transform">
                    <benefit.icon className="h-8 w-8 text-red-500" strokeWidth={2.5} />
                  </div>
                </div>

                <h3 className="text-xl font-black text-white mb-4 tracking-tight">
                  {benefit.title}
                </h3>

                <p className="text-gray-400 leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative group">
            <div className="absolute -inset-1 bg-red-600/10 blur-2xl group-hover:bg-red-600/20 transition-all rounded-lg"></div>
            <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-gray-800 rounded-lg p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-red-600/20 border-2 border-red-600 rounded-lg">
                  <Briefcase className="h-10 w-10 text-red-500" strokeWidth={2.5} />
                </div>
                <h3 className="text-3xl font-black text-white tracking-tight">
                  Offene Stellen
                </h3>
              </div>

              <div className="space-y-4">
                {positions.map((position, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-black/50 border border-gray-800 rounded-lg hover:border-red-600/50 transition-all">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-300 font-medium">
                      {position}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-red-600/10 blur-2xl group-hover:bg-red-600/20 transition-all rounded-lg"></div>
            <div className="relative bg-gradient-to-br from-red-950/20 to-black/90 backdrop-blur-sm border-2 border-red-600/50 rounded-lg p-10">
              <h3 className="text-3xl font-black text-white mb-6 tracking-tight">
                Das bringst du mit
              </h3>

              <ul className="space-y-4 mb-8">
                {[
                  'Mindestalter 18 Jahre',
                  'Einwandfreies polizeiliches Führungszeugnis',
                  'Zuverlässigkeit und Teamfähigkeit',
                  'Bereitschaft zur Schichtarbeit',
                  'Deutschkenntnisse in Wort und Schrift',
                  'Idealerweise §34a Sachkundeprüfung (kann erworben werden)'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-red-600 border-2 border-red-500 rounded-sm flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-white" strokeWidth={3} />
                      </div>
                    </div>
                    <span className="text-gray-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-black/50 backdrop-blur-sm border-2 border-red-600 rounded-lg p-6">
                <p className="text-white text-lg font-bold mb-2">
                  Interesse geweckt?
                </p>
                <p className="text-gray-300 font-medium">
                  Sende deine Bewerbung an <a href="mailto:karriere@elbwacht.de" className="text-red-500 hover:text-red-400 underline">karriere@elbwacht.de</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
