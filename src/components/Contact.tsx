import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface ContactProps {
  onOpenForm: () => void;
}

export default function Contact({ onOpenForm }: ContactProps) {
  return (
    <section id="kontakt" className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px)`,
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-20">
          <div
            className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 border-2 border-white/20 backdrop-blur-sm rounded-full"
            style={{
              background: 'linear-gradient(135deg, #0d152d 0%, #213571 100%)',
            }}
          >
            <span className="text-white font-black text-xs sm:text-sm tracking-widest uppercase">Kontakt</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6 tracking-tight px-4">
            Wir sind für Sie da
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-medium px-4">
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-8 lg:space-y-12">
          <div className="relative group">
            <div
              className="absolute -inset-1 sm:-inset-2 blur-xl sm:blur-2xl rounded-lg"
              style={{
                background: 'radial-gradient(circle, rgba(13,21,45,0.2) 0%, rgba(33,53,113,0.15) 50%, transparent 70%)',
              }}
            ></div>
            <div
              className="relative backdrop-blur-sm border-2 border-white/20 rounded-lg p-6 sm:p-8 lg:p-10 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(13,21,45,0.05) 0%, rgba(33,53,113,0.05) 100%)',
              }}
            >
              <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 tracking-tight bg-gradient-to-r from-royal-700 to-royal-500 bg-clip-text text-transparent">
                Jetzt Anfrage senden
              </h3>
              <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed font-medium">
                Nutzen Sie unser Kontaktformular für eine schnelle und unkomplizierte Anfrage.
                Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück und erstellen ein
                individuelles Angebot für Ihre Sicherheitsbedürfnisse.
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  'Kostenlose Erstberatung',
                  'Individuelle Sicherheitskonzepte',
                  'Transparente Preisgestaltung',
                  'Schnelle Reaktionszeit'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, #0d152d 0%, #213571 100%)',
                      }}
                    ></div>
                    <span className="text-gray-600 font-medium text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onOpenForm}
                className="w-full relative overflow-hidden border border-white/20 text-white px-6 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-bold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl active:scale-95"
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
                <span className="relative z-10">Kontaktformular öffnen</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="relative group">
              <div
                className="absolute -inset-0.5 sm:-inset-1 blur-xl sm:blur-2xl group-hover:opacity-100 opacity-50 transition-all rounded-lg"
                style={{
                  background: 'radial-gradient(circle, rgba(13,21,45,0.15) 0%, transparent 70%)',
                }}
              ></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200 group-hover:border-white/30 rounded-lg p-5 sm:p-6 transition-all h-full flex flex-col">
                <div className="flex flex-col items-center text-center flex-1">
                  <div
                    className="p-3 sm:p-4 border-2 border-white/20 rounded-lg relative overflow-hidden group-hover:scale-105 transition-transform mb-3 sm:mb-4"
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
                    <Phone className="h-6 w-6 sm:h-7 sm:w-7 text-white relative z-10" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-gray-900 mb-2 sm:mb-3 tracking-tight">Telefon</h3>
                  <a href="tel:+4940253302940" className="text-gray-600 hover:bg-gradient-to-r hover:from-royal-700 hover:to-royal-500 hover:bg-clip-text hover:text-transparent transition-all text-sm sm:text-base font-medium break-all">
                    +49 40 25330294
                  </a>
                  <p className="text-gray-700 mt-1 sm:mt-2 font-medium text-xs sm:text-sm">24/7 Notrufhotline</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div
                className="absolute -inset-0.5 sm:-inset-1 blur-xl sm:blur-2xl group-hover:opacity-100 opacity-50 transition-all rounded-lg"
                style={{
                  background: 'radial-gradient(circle, rgba(13,21,45,0.15) 0%, transparent 70%)',
                }}
              ></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200 group-hover:border-white/30 rounded-lg p-5 sm:p-6 transition-all h-full flex flex-col">
                <div className="flex flex-col items-center text-center flex-1">
                  <div
                    className="p-3 sm:p-4 border-2 border-white/20 rounded-lg relative overflow-hidden group-hover:scale-105 transition-transform mb-3 sm:mb-4"
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
                    <Mail className="h-6 w-6 sm:h-7 sm:w-7 text-white relative z-10" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-gray-900 mb-2 sm:mb-3 tracking-tight">E-Mail</h3>
                  <a href="mailto:info@elbwacht.de" className="text-gray-600 hover:bg-gradient-to-r hover:from-royal-700 hover:to-royal-500 hover:bg-clip-text hover:text-transparent transition-all text-sm sm:text-base font-medium break-all overflow-wrap-anywhere">
                    info@elbwacht.de
                  </a>
                  <p className="text-gray-700 mt-1 sm:mt-2 font-medium text-xs sm:text-sm">Antwort innerhalb von 24h</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div
                className="absolute -inset-0.5 sm:-inset-1 blur-xl sm:blur-2xl group-hover:opacity-100 opacity-50 transition-all rounded-lg"
                style={{
                  background: 'radial-gradient(circle, rgba(13,21,45,0.15) 0%, transparent 70%)',
                }}
              ></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200 group-hover:border-white/30 rounded-lg p-5 sm:p-6 transition-all h-full flex flex-col">
                <div className="flex flex-col items-center text-center flex-1">
                  <div
                    className="p-3 sm:p-4 border-2 border-white/20 rounded-lg relative overflow-hidden group-hover:scale-105 transition-transform mb-3 sm:mb-4"
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
                    <MapPin className="h-6 w-6 sm:h-7 sm:w-7 text-white relative z-10" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-gray-900 mb-2 sm:mb-3 tracking-tight">Adresse</h3>
                  <p className="text-gray-600 text-sm sm:text-base font-medium break-words">
                    Elbwacht Security Service GmbH<br />
                    Wandsbeker Chaussee 11<br />
                    22089 Hamburg
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div
                className="absolute -inset-0.5 sm:-inset-1 blur-xl sm:blur-2xl group-hover:opacity-100 opacity-50 transition-all rounded-lg"
                style={{
                  background: 'radial-gradient(circle, rgba(13,21,45,0.15) 0%, transparent 70%)',
                }}
              ></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200 group-hover:border-white/30 rounded-lg p-5 sm:p-6 transition-all h-full flex flex-col">
                <div className="flex flex-col items-center text-center flex-1">
                  <div
                    className="p-3 sm:p-4 border-2 border-white/20 rounded-lg relative overflow-hidden group-hover:scale-105 transition-transform mb-3 sm:mb-4"
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
                    <Clock className="h-6 w-6 sm:h-7 sm:w-7 text-white relative z-10" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-gray-900 mb-2 sm:mb-3 tracking-tight">Erreichbarkeit</h3>
                  <p className="text-gray-600 text-sm sm:text-base font-medium mb-1 sm:mb-2">
                    Mo - Fr: 08:00 - 18:00 Uhr
                  </p>
                  <p className="font-bold bg-gradient-to-r from-royal-700 to-royal-500 bg-clip-text text-transparent text-xs sm:text-sm">
                    24/7 Notfall-Hotline
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
