import { Phone, Shield, Radio } from 'lucide-react';

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
              <div
                className="inline-block border-l-4 pl-4 mb-4"
                style={{
                  borderImage: 'linear-gradient(180deg, #0d152d 0%, #213571 100%) 1',
                }}
              >
                <span className="font-black text-sm tracking-widest uppercase bg-gradient-to-r from-royal-700 to-royal-500 bg-clip-text text-transparent">Sicherheit mit Verantwortung</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black mb-6 leading-tight tracking-tight">
                <span className="text-gray-900">Ihr Sicherheitsdienst aus Hamburg –</span>
                <br />
                <span className="bg-gradient-to-r from-royal-700 via-royal-500 to-royal-700 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(13,21,45,0.3)]">zuverlässig, präsent, verantwortungsvoll</span>
              </h1>
            </div>

            <p className="text-lg lg:text-xl mb-10 font-medium leading-relaxed text-gray-700">
              Elbawacht ist Ihr verlässlicher Partner für Objektschutz, Eventschutz und Sicherheitsservice aller Art – mit geschultem Personal, klaren Abläufen und schneller Reaktion, wenn es darauf ankommt.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={onOpenForm}
                className="group relative border border-white/20 text-white px-10 py-5 text-base font-bold rounded-full transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #0d152d 0%, #213571 100%)',
                }}
              >
                <span className="relative z-10">Jetzt unverbindlich anfragen</span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                  }}
                ></div>
              </button>
              <a
                href="tel:+4940253302940"
                className="border-2 backdrop-blur-sm px-10 py-5 text-base font-bold rounded-full transition-all flex items-center justify-center space-x-3 group border-gray-300 bg-white/50 text-gray-900 hover:bg-gray-100 hover:shadow-lg relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(13,21,45,0.05) 0%, rgba(33,53,113,0.05) 100%)',
                  }}
                />
                <Phone className="h-5 w-5 group-hover:animate-pulse relative z-10" />
                <span className="relative z-10">040 / 25330294</span>
              </a>
            </div>

            <div className="lg:hidden relative mb-10">
              <div
                className="relative border-4 border-white/20 overflow-hidden rounded-lg shadow-2xl group/image cursor-pointer"
                style={{
                  borderColor: 'rgba(13,21,45,0.3)',
                }}
              >
                <img
                  src="https://i.imgur.com/AROdPLs.jpg"
                  alt="Professioneller Sicherheitsdienst"
                  className="w-full h-[300px] object-cover object-[center_20%] contrast-110 group-hover/image:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(13,21,45,0.1) 0%, rgba(33,53,113,0.05) 100%)',
                  }}
                ></div>

                <div
                  className="absolute top-4 right-4 flex items-center space-x-2 backdrop-blur-sm px-3 py-2 border-2 border-white/20 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(13,21,45,0.95) 0%, rgba(33,53,113,0.95) 100%)',
                  }}
                >
                  <Radio className="h-3 w-3 text-white animate-pulse" />
                  <span className="text-white font-black text-xs tracking-widest">LIVE</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className="backdrop-blur-sm border-2 border-white/20 p-4 rounded-lg"
                    style={{
                      background: 'linear-gradient(135deg, rgba(13,21,45,0.95) 0%, rgba(33,53,113,0.95) 100%)',
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-black text-xs tracking-widest uppercase">Einsatzstatus</span>
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-lg shadow-white/50"></div>
                      <span className="font-bold text-sm tracking-wide text-white">24/7 EINSATZBEREIT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div
              className="absolute -inset-8 blur-3xl rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(13,21,45,0.2) 0%, transparent 70%)',
              }}
            ></div>
            <div className="relative">
              <div
                className="absolute inset-0 border-4 border-white/10 -translate-x-6 -translate-y-6 rounded-lg transition-all duration-700"
                style={{
                  borderColor: 'rgba(13,21,45,0.2)',
                }}
              ></div>
              <div
                className="relative border-4 border-white/20 overflow-hidden rounded-lg shadow-2xl group/image cursor-pointer hover:shadow-3xl transition-all duration-500"
                style={{
                  borderColor: 'rgba(13,21,45,0.3)',
                }}
              >
                <img
                  src="https://i.imgur.com/AROdPLs.jpg"
                  alt="Professioneller Sicherheitsdienst"
                  className="w-full h-[600px] object-cover object-[center_20%] contrast-110 group-hover/image:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(13,21,45,0.1) 0%, rgba(33,53,113,0.05) 100%)',
                  }}
                ></div>

                <div
                  className="absolute top-6 right-6 flex items-center space-x-2 backdrop-blur-sm px-4 py-2 border-2 border-white/20 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(13,21,45,0.95) 0%, rgba(33,53,113,0.95) 100%)',
                  }}
                >
                  <Radio className="h-4 w-4 text-white animate-pulse" />
                  <span className="text-white font-black text-xs tracking-widest">LIVE</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div
                    className="backdrop-blur-sm border-2 border-white/20 p-5 rounded-lg"
                    style={{
                      background: 'linear-gradient(135deg, rgba(13,21,45,0.95) 0%, rgba(33,53,113,0.95) 100%)',
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white font-black text-xs tracking-widest uppercase">Einsatzstatus</span>
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-lg shadow-white/50"></div>
                      <span className="font-bold text-base tracking-wide text-white">24/7 EINSATZBEREIT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 mt-12">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Sicherheit mit Verantwortung',
                  description: 'Unsere Sicherheitskräfte handeln vorausschauend, deeskalierend und verantwortungsbewusst – immer im Einklang mit geltendem Recht und Ihren individuellen Anforderungen.'
                },
                {
                  title: 'Stärke durch sichtbare Präsenz',
                  description: 'Präsenz schafft Sicherheit. Unsere Mitarbeitenden sind sichtbar, ansprechbar und konsequent – zur Abschreckung, Prävention und schnellen Intervention.'
                },
                {
                  title: 'Persönlich. Professionell. Verlässlich.',
                  description: 'Keine anonyme Sicherheitsfirma: Bei Elbawacht haben Sie feste Ansprechpartner, klare Abläufe und einen Partner, auf den Sie sich jederzeit verlassen können.'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm border-2 p-6 rounded-lg relative overflow-hidden group hover:scale-105 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(13,21,45,0.05) 0%, rgba(33,53,113,0.03) 100%)',
                    borderColor: 'rgba(13,21,45,0.2)',
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(13,21,45,0.08) 0%, rgba(33,53,113,0.05) 100%)',
                    }}
                  />
                  <div className="relative">
                    <div className="flex items-start space-x-3 mb-3">
                      <div
                        className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                        style={{
                          background: 'linear-gradient(135deg, #0d152d 0%, #213571 100%)',
                          boxShadow: '0 0 10px rgba(13,21,45,0.5)',
                        }}
                      />
                      <h3 className="font-black text-lg leading-tight text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-sm font-medium leading-relaxed text-gray-700 pl-5">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
