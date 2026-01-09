import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';

export default function Datenschutz() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Set page-specific meta tags
    document.title = 'Datenschutzerklärung - Elbwacht Security Service GmbH';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Datenschutzerklärung der Elbwacht Security Service GmbH - Informationen zum Schutz Ihrer persönlichen Daten');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px)`,
      }}></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-royal-700 transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="h-5 w-5" />
          Zurück zur Startseite
        </Link>

        <div className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200 rounded-lg p-8 lg:p-12 shadow-lg">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-royal-700/20 border-2 border-royal-700 rounded-lg">
              <Shield className="h-8 w-8 text-royal-700" strokeWidth={2.5} />
            </div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">Datenschutzerklärung</h1>
          </div>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">1. Datenschutz auf einen Blick</h2>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Allgemeine Hinweise</h3>
              <p className="mb-4 leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Datenerfassung auf dieser Website</h3>
              <p className="mb-4 leading-relaxed">
                <strong className="text-gray-900">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              <p className="mb-4 leading-relaxed">
                <strong className="text-gray-900">Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p className="mb-4 leading-relaxed">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">2. Hosting</h2>
              <p className="mb-4 leading-relaxed">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              <p className="mb-4 leading-relaxed">
                <strong className="text-gray-900">Externes Hosting</strong><br />
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">3. Allgemeine Hinweise und Pflichtinformationen</h2>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Hinweis zur verantwortlichen Stelle</h3>
              <p className="mb-4 leading-relaxed">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg mb-4">
                <p className="leading-relaxed">
                  Elbwacht Security Service GmbH<br />
                  Hafenstraße 123<br />
                  20359 Hamburg<br />
                  Deutschland<br />
                  <br />
                  Telefon: +49 40 / 123 456 789<br />
                  E-Mail: info@elbwacht.de
                </p>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p className="mb-4 leading-relaxed">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
              <p className="mb-4 leading-relaxed">
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">4. Datenerfassung auf dieser Website</h2>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Cookies</h3>
              <p className="mb-4 leading-relaxed">
                Unsere Internetseiten verwenden so genannte "Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Kontaktformular</h3>
              <p className="mb-4 leading-relaxed">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Anfrage per E-Mail oder Telefon</h3>
              <p className="mb-4 leading-relaxed">
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">5. Plugins und Tools</h2>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Google Maps</h3>
              <p className="mb-4 leading-relaxed">
                Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p className="mb-4 leading-relaxed">
                Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote.
              </p>
              <p className="mb-4 leading-relaxed">
                Mehr Informationen:{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-royal-600 hover:text-royal-700 underline"
                >
                  https://policies.google.com/privacy
                </a>
              </p>
            </section>

            <section className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Stand: Dezember 2024
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
