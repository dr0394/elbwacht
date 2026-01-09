import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface ContactProps {
  onOpenForm: () => void;
}

export default function Contact({ onOpenForm }: ContactProps) {
  return (
    <section id="kontakt" className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px)`,
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div
            className="inline-block mb-6 px-6 py-2 border-2 border-white/20 backdrop-blur-sm rounded-full"
            style={{
              background: 'linear-gradient(135deg, #0d152d 0%, #213571 100%)',
            }}
          >
            <span className="text-white font-black text-sm tracking-widest uppercase">Kontakt</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Wir sind für Sie da
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="relative group">
              <div
                className="absolute -inset-1 blur-2xl group-hover:opacity-100 opacity-50 transition-all rounded-lg"
                style={{
                  background: 'radial-gradient(circle, rgba(13,21,45,0.15) 0%, transparent 70%)',
                }}
              ></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200 group-hover:border-white/30 rounded-lg p-8 transition-all">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div
                      className="p-4 border-2 border-white/20 rounded-lg relative overflow-hidden group-hover:scale-105 transition-transform"
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
                      <Phone className="h-8 w-8 text-white relative z-10" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-3 tracking-tight">Telefon</h3>
                    <a href="tel:+4940123456789" className="text-gray-600 hover:bg-gradient-to-r hover:from-royal-700 hover:to-royal-500 hover:bg-clip-text hover:text-transparent transition-all text-lg font-medium">
                      +49 40 25330294
                    </a>
                    <p className="text-gray-700 mt-2 font-medium">24/7 Notrufhotline</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div
                className="absolute -inset-1 blur-2xl group-hover:opacity-100 opacity-50 transition-all rounded-lg"
                style={{
                  background: 'radial-gradient(circle, rgba(13,21,45,0.15) 0%, transparent 70%)',
                }}
              ></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200 group-hover:border-white/30 rounded-lg p-8 transition-all">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div
                      className="p-4 border-2 border-white/20 rounded-lg relative overflow-hidden group-hover:scale-105 transition-transform"
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
                      <Mail className="h-8 w-8 text-white relative z-10" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-3 tracking-tight">E-Mail</h3>
                    <a href="mailto:info@elbwacht.de" className="text-gray-600 hover:bg-gradient-to-r hover:from-royal-700 hover:to-royal-500 hover:bg-clip-text hover:text-transparent transition-all text-lg font-medium">
                      info@elbwacht.de
                    </a>
                    <p className="text-gray-700 mt-2 font-medium">Antwort innerhalb von 24h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div
                className="absolute -inset-1 blur-2xl group-hover:opacity-100 opacity-50 transition-all rounded-lg"
                style={{
                  background: 'radial-gradient(circle, rgba(13,21,45,0.15) 0%, transparent 70%)',
                }}
              ></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200 group-hover:border-white/30 rounded-lg p-8 transition-all">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div
                      className="p-4 border-2 border-white/20 rounded-lg relative overflow-hidden group-hover:scale-105 transition-transform"
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
                      <MapPin className="h-8 w-8 text-white relative z-10" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-3 tracking-tight">Adresse</h3>
                    <p className="text-gray-600 text-lg font-medium">
                      Elbwacht Security Service GmbH<br />
                      Wandsbeker Chaussee 11<br />
                      22089 Hamburg
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div
                className="absolute -inset-1 blur-2xl group-hover:opacity-100 opacity-50 transition-all rounded-lg"
                style={{
                  background: 'radial-gradient(circle, rgba(13,21,45,0.15) 0%, transparent 70%)',
                }}
              ></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200 group-hover:border-white/30 rounded-lg p-8 transition-all">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div
                      className="p-4 border-2 border-white/20 rounded-lg relative overflow-hidden group-hover:scale-105 transition-transform"
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
                      <Clock className="h-8 w-8 text-white relative z-10" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-3 tracking-tight">Erreichbarkeit</h3>
                    <p className="text-gray-600 text-lg font-medium mb-2">
                      Mo - Fr: 08:00 - 18:00 Uhr
                    </p>
                    <p className="font-bold bg-gradient-to-r from-royal-700 to-royal-500 bg-clip-text text-transparent">
                      24/7 Notfall-Hotline
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div
              className="absolute -inset-2 blur-2xl rounded-lg"
              style={{
                background: 'radial-gradient(circle, rgba(13,21,45,0.2) 0%, rgba(33,53,113,0.15) 50%, transparent 70%)',
              }}
            ></div>
            <div
              className="relative backdrop-blur-sm border-2 border-white/20 rounded-lg p-10 h-full flex flex-col justify-center overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(13,21,45,0.05) 0%, rgba(33,53,113,0.05) 100%)',
              }}
            >
              <h3 className="text-3xl font-black mb-6 tracking-tight bg-gradient-to-r from-royal-700 to-royal-500 bg-clip-text text-transparent">
                Jetzt Anfrage senden
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed font-medium">
                Nutzen Sie unser Kontaktformular für eine schnelle und unkomplizierte Anfrage.
                Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück und erstellen ein
                individuelles Angebot für Ihre Sicherheitsbedürfnisse.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Kostenlose Erstberatung',
                  'Individuelle Sicherheitskonzepte',
                  'Transparente Preisgestaltung',
                  'Schnelle Reaktionszeit'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, #0d152d 0%, #213571 100%)',
                      }}
                    ></div>
                    <span className="text-gray-600 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onOpenForm}
                className="w-full relative overflow-hidden border border-white/20 text-white px-10 py-5 text-lg font-bold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl"
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
        </div>
      </div>
    </section>
  );
}
