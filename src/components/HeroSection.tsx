import { Check, Phone, Shield, Radio } from 'lucide-react';

interface HeroSectionProps {
  onOpenForm: () => void;
}

export default function HeroSection({ onOpenForm }: HeroSectionProps) {
  return (
    <section id="hero" className="relative pt-20 overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-royal-50/30 via-white to-gray-50"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)
          `,
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8">
              <div className="inline-block border-l-4 border-royal-700 pl-4 mb-4">
                <span className="text-royal-700 font-black text-sm tracking-widest uppercase">Sicherheit mit Verantwortung</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black mb-6 leading-tight tracking-tight">
                <span className="text-gray-900">Professionelle Sicherheitsdienste in Hamburg –</span>{' '}
                <span className="text-royal-700 drop-shadow-[0_0_30px_rgba(29,78,216,0.5)]">zuverlässig, präsent, verantwortungsvoll</span>
              </h1>
            </div>

            <p className="text-lg lg:text-xl mb-10 font-medium leading-relaxed text-gray-700">
              Elbawacht ist Ihr verlässlicher Partner für Objektschutz, Eventschutz und Sicherheitsservice aller Art – mit geschultem Personal, klaren Abläufen und schneller Reaktion, wenn es darauf ankommt.
            </p>

            <div className="lg:hidden relative mb-10">
              <div className="relative border-4 border-royal-700 overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="https://i.imgur.com/aqDFjQB.jpeg"
                  alt="Professioneller Sicherheitsdienst"
                  className="w-full h-[300px] object-cover grayscale contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute inset-0 bg-royal-700/5"></div>

                <div className="absolute top-4 right-4 flex items-center space-x-2 bg-black/90 backdrop-blur-sm px-3 py-2 border-2 border-royal-700 rounded-full">
                  <Radio className="h-3 w-3 text-royal-600 animate-pulse" />
                  <span className="text-white font-black text-xs tracking-widest">LIVE</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="backdrop-blur-sm border-2 border-royal-700 p-4 rounded-lg bg-white/90">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-royal-700 font-black text-xs tracking-widest uppercase">Einsatzstatus</span>
                      <Shield className="h-5 w-5 text-royal-700" />
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-royal-700 rounded-full animate-pulse shadow-lg shadow-royal-700/50"></div>
                      <span className="font-bold text-sm tracking-wide text-gray-900">24/7 EINSATZBEREIT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-10 backdrop-blur-sm border-l-2 border-royal-700 p-6 rounded-r-lg bg-gradient-to-r from-royal-50/50 to-transparent">
              {[
                'Professionelles, geschultes Personal mit §34a Qualifikation',
                '24/7 Erreichbarkeit mit schnellen Reaktionszeiten',
                'Klare Abläufe & rechtssichere Dokumentation'
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-6 h-6 bg-royal-700 border-2 border-royal-600 rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="font-medium transition-colors text-gray-700 group-hover:text-gray-900">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenForm}
                className="group relative bg-royal-700 hover:bg-royal-800 border border-royal-700 text-white px-10 py-5 text-base font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden"
              >
                <span className="relative z-10">Jetzt unverbindlich anfragen</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              <a
                href="tel:+4940253302940"
                className="border-2 backdrop-blur-sm px-10 py-5 text-base font-bold rounded-full transition-all flex items-center justify-center space-x-3 group border-gray-300 bg-white/50 text-gray-900 hover:bg-gray-100 hover:border-royal-700"
              >
                <Phone className="h-5 w-5 group-hover:animate-pulse" />
                <span>040 / 25330294</span>
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-8 bg-royal-700/20 blur-3xl rounded-full"></div>
            <div className="relative">
              <div className="absolute inset-0 border-4 border-royal-700/30 -translate-x-6 -translate-y-6 rounded-lg"></div>
              <div className="relative border-4 border-royal-700 overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="https://i.imgur.com/aqDFjQB.jpeg"
                  alt="Professioneller Sicherheitsdienst"
                  className="w-full h-[600px] object-cover grayscale contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute inset-0 bg-royal-700/5"></div>

                <div className="absolute top-6 right-6 flex items-center space-x-2 bg-black/90 backdrop-blur-sm px-4 py-2 border-2 border-royal-700 rounded-full">
                  <Radio className="h-4 w-4 text-royal-600 animate-pulse" />
                  <span className="text-white font-black text-xs tracking-widest">LIVE</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="backdrop-blur-sm border-2 border-royal-700 p-5 rounded-lg bg-white/90">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-royal-700 font-black text-xs tracking-widest uppercase">Einsatzstatus</span>
                      <Shield className="h-6 w-6 text-royal-700" />
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-royal-700 rounded-full animate-pulse shadow-lg shadow-royal-700/50"></div>
                      <span className="font-bold text-base tracking-wide text-gray-900">24/7 EINSATZBEREIT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
