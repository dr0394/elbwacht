import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface ContactProps {
  onOpenForm: () => void;
}

export default function Contact({ onOpenForm }: ContactProps) {
  return (
    <section id="kontakt" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px)`,
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-6 px-6 py-2 border-2 border-red-600 bg-red-950/20 backdrop-blur-sm rounded-full">
            <span className="text-red-500 font-black text-sm tracking-widest uppercase">Kontakt</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
            Wir sind für Sie da
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-medium">
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-red-600/10 blur-2xl group-hover:bg-red-600/20 transition-all rounded-lg"></div>
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-gray-800 group-hover:border-red-600/50 rounded-lg p-8 transition-all">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-red-600/20 border-2 border-red-600 rounded-lg">
                      <Phone className="h-8 w-8 text-red-500" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white mb-3 tracking-tight">Telefon</h3>
                    <a href="tel:+4940123456789" className="text-gray-300 hover:text-red-500 transition-colors text-lg font-medium">
                      +49 40 25330294
                    </a>
                    <p className="text-gray-400 mt-2 font-medium">24/7 Notrufhotline</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-red-600/10 blur-2xl group-hover:bg-red-600/20 transition-all rounded-lg"></div>
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-gray-800 group-hover:border-red-600/50 rounded-lg p-8 transition-all">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-red-600/20 border-2 border-red-600 rounded-lg">
                      <Mail className="h-8 w-8 text-red-500" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white mb-3 tracking-tight">E-Mail</h3>
                    <a href="mailto:info@elbwacht.de" className="text-gray-300 hover:text-red-500 transition-colors text-lg font-medium">
                      info@elbwacht.de
                    </a>
                    <p className="text-gray-400 mt-2 font-medium">Antwort innerhalb von 24h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-red-600/10 blur-2xl group-hover:bg-red-600/20 transition-all rounded-lg"></div>
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-gray-800 group-hover:border-red-600/50 rounded-lg p-8 transition-all">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-red-600/20 border-2 border-red-600 rounded-lg">
                      <MapPin className="h-8 w-8 text-red-500" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white mb-3 tracking-tight">Adresse</h3>
                    <p className="text-gray-300 text-lg font-medium">
                      Elbwacht Security Service GmbH<br />
                      Wandsbeker Chaussee 11<br />
                      22089 Hamburg
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-red-600/10 blur-2xl group-hover:bg-red-600/20 transition-all rounded-lg"></div>
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-gray-800 group-hover:border-red-600/50 rounded-lg p-8 transition-all">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-red-600/20 border-2 border-red-600 rounded-lg">
                      <Clock className="h-8 w-8 text-red-500" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white mb-3 tracking-tight">Erreichbarkeit</h3>
                    <p className="text-gray-300 text-lg font-medium mb-2">
                      Mo - Fr: 08:00 - 18:00 Uhr
                    </p>
                    <p className="text-red-500 font-bold">
                      24/7 Notfall-Hotline
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-red-600/20 via-red-600/30 to-red-600/20 blur-2xl rounded-lg"></div>
            <div className="relative bg-gradient-to-br from-red-950/20 to-black/90 backdrop-blur-sm border-2 border-red-600/50 rounded-lg p-10 h-full flex flex-col justify-center">
              <h3 className="text-3xl font-black text-white mb-6 tracking-tight">
                Jetzt Anfrage senden
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed font-medium">
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
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onOpenForm}
                className="w-full bg-red-600 hover:bg-red-700 text-white px-10 py-5 text-lg font-bold rounded-full transition-all transform hover:scale-105 shadow-lg"
              >
                Kontaktformular öffnen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
