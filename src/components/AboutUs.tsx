import { Shield, Target, Users, TrendingUp } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="ueber-uns" className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden w-full">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px),
          repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)
        `,
        backgroundSize: '40px 40px',
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          <div className="w-full">
            <div className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 border-2 border-royal-700 bg-royal-100/50 backdrop-blur-sm rounded-full">
              <span className="text-royal-700 font-black text-xs sm:text-sm tracking-widest uppercase">Über uns</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 tracking-tight text-gray-900 break-words">
              Stärke durch Präsenz
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed font-medium text-gray-700 break-words">
              Bei Elbwacht arbeiten wir für Unternehmen, Immobilienbesitzer und Veranstalter, die Sicherheit ernst nehmen.
            </p>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed font-medium text-gray-700 break-words">
              Sie möchten Schutz vor Einbruch, Vandalismus oder unkontrolliertem Zutritt – und brauchen einen Partner, auf den sie sich wirklich verlassen können.
            </p>
            <p className="text-base sm:text-lg leading-relaxed font-medium text-gray-700 break-words">
              Wir bieten professionelles, geschultes Personal, klare Abläufe und schnelle Reaktionszeiten – damit Sie sich auf Ihr Kerngeschäft konzentrieren können, während wir für Ruhe, Ordnung und Sicherheit sorgen.
            </p>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="relative">
              <div className="relative border-2 sm:border-4 border-royal-700 overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="https://i.imgur.com/vtR48i2.jpeg"
                  alt="Elbwacht Security Team"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover grayscale contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute inset-0 bg-royal-700/5"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {[
            {
              icon: Shield,
              title: 'Unsere Mission',
              text: 'Maximale Sicherheit durch professionelle Standards und individuelle Betreuung'
            },
            {
              icon: Target,
              title: 'Unser Ziel',
              text: 'Der führende Sicherheitsdienstleister für verlässlichen und diskreten Schutz'
            },
            {
              icon: Users,
              title: 'Unser Team',
              text: 'Hochqualifizierte Fachkräfte mit Expertise und Engagement'
            },
            {
              icon: TrendingUp,
              title: 'Unsere Vision',
              text: 'Kontinuierliche Weiterentwicklung für höchste Sicherheitsstandards'
            }
          ].map((item, index) => (
            <div key={index} className="group relative w-full">
              <div className="absolute -inset-0.5 sm:-inset-1 bg-royal-700/10 blur-xl sm:blur-2xl group-hover:bg-royal-700/20 transition-all rounded-lg"></div>
              <div className="relative h-full backdrop-blur-sm border group-hover:border-royal-700/50 rounded-lg p-5 sm:p-6 lg:p-8 transition-all bg-gradient-to-br from-white to-gray-50/50 border-gray-200 overflow-hidden">
                <div className="mb-4 sm:mb-6">
                  <div className="inline-block p-3 sm:p-4 bg-royal-700/20 border-2 border-royal-700 rounded-lg group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-royal-700" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-black mb-3 sm:mb-4 tracking-tight text-gray-900 break-words">
                  {item.title}
                </h3>
                <p className="leading-relaxed font-medium text-gray-700 text-sm sm:text-base break-words">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
