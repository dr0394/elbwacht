import { Shield, Target, Users, TrendingUp } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function AboutUs() {
  const { theme } = useTheme();

  return (
    <section id="ueber-uns" className={`relative py-24 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-black via-gray-900 to-black'
        : 'bg-gradient-to-b from-gray-50 via-white to-gray-100'
    }`}>
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px),
          repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)
        `,
        backgroundSize: '40px 40px',
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-block mb-6 px-6 py-2 border-2 border-red-600 bg-red-950/20 backdrop-blur-sm rounded-full">
              <span className="text-red-500 font-black text-sm tracking-widest uppercase">Über uns</span>
            </div>
            <h2 className={`text-4xl lg:text-5xl font-black mb-6 tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Stärke durch Präsenz
            </h2>
            <p className={`text-xl mb-8 leading-relaxed font-medium ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
            }`}>
              Bei Elbwacht arbeiten wir für Unternehmen, Immobilienbesitzer und Veranstalter, die Sicherheit ernst nehmen.
            </p>
            <p className={`text-lg mb-8 leading-relaxed font-medium ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
            }`}>
              Sie möchten Schutz vor Einbruch, Vandalismus oder unkontrolliertem Zutritt – und brauchen einen Partner, auf den sie sich wirklich verlassen können.
            </p>
            <p className={`text-lg leading-relaxed font-medium ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
            }`}>
              Wir bieten professionelles, geschultes Personal, klare Abläufe und schnelle Reaktionszeiten – damit Sie sich auf Ihr Kerngeschäft konzentrieren können, während wir für Ruhe, Ordnung und Sicherheit sorgen.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-red-600/20 blur-3xl rounded-full"></div>
            <div className="relative">
              <div className="absolute inset-0 border-4 border-red-600/30 translate-x-6 translate-y-6 rounded-lg"></div>
              <div className="relative border-4 border-red-600 overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="https://i.imgur.com/vtR48i2.jpeg"
                  alt="Elbwacht Security Team"
                  className="w-full h-[500px] object-cover grayscale contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute inset-0 bg-red-600/5"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-red-600/10 blur-2xl group-hover:bg-red-600/20 transition-all rounded-lg"></div>
              <div className={`relative h-full backdrop-blur-sm border group-hover:border-red-600/50 rounded-lg p-8 transition-all ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-900/90 to-black/90 border-gray-800'
                  : 'bg-gradient-to-br from-white to-gray-50/50 border-gray-200'
              }`}>
                <div className="mb-6">
                  <div className="inline-block p-4 bg-red-600/20 border-2 border-red-600 rounded-lg group-hover:scale-110 transition-transform">
                    <item.icon className="h-8 w-8 text-red-500" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className={`text-xl font-black mb-4 tracking-tight ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {item.title}
                </h3>
                <p className={`leading-relaxed font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
                }`}>
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
