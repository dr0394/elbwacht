import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-royal-600 to-royal-800 border-2 border-royal-600">
                <Shield className="h-8 w-8 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-gray-900 font-black text-xl tracking-wide">ELBWACHT</div>
                <div className="text-royal-700 text-xs font-bold tracking-widest">SECURITY SERVICE</div>
              </div>
            </Link>
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-royal-700 transition-colors font-medium"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Zurück zur Startseite</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-8 lg:p-12 shadow-lg border border-gray-200 rounded-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="mb-2">
                <strong>Elbwacht GmbH</strong><br />
                Wandsbeker Chaussee 11<br />
                22089 Hamburg<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vertreten durch</h2>
              <p>Geschäftsführer: Nivin Mohssen</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontakt</h2>
              <p>
                Telefon: +49 40 / 25330294<br />
                Telefon: +49 163 / 8467694<br />
                Telefon: +49 172 / 6173032<br />
                E-Mail: <a href="mailto:info@elbwacht.de" className="text-blue-700 hover:underline">info@elbwacht.de</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Registereintrag</h2>
              <p>
                Eintragung im Handelsregister<br />
                Registergericht: Amtsgericht Hamburg<br />
                Registernummer: HRB195772
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                Wird beantragt
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Aufsichtsbehörde</h2>
              <p>
                Zuständige Aufsichtsbehörde gemäß § 34a Gewerbeordnung (GewO):<br />
                <br />
                Bezirksamt Hamburg-Mitte<br />
                Ordnungsamt<br />
                Caffamacherreihe 1-3<br />
                20355 Hamburg
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p>
                Berufsbezeichnung: Bewachungsgewerbe<br />
                Zuständige Kammer: IHK Hamburg<br />
                Verliehen in: Deutschland
              </p>
              <p className="mt-4">
                Es gelten folgende berufsrechtliche Regelungen:<br />
                § 34a Gewerbeordnung (GewO)<br />
                Bewachungsverordnung (BewachV)
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Versicherung</h2>
              <p>
                Betriebshaftpflichtversicherung für das Bewachungsgewerbe:<br />
                Mustermann Versicherungen AG<br />
                Versicherungsplatz 1<br />
                10115 Berlin<br />
                <br />
                Geltungsbereich: Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                <br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Haftungsausschluss</h2>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Haftung für Inhalte</h3>
              <p className="mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="mb-4">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Haftung für Links</h3>
              <p className="mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p className="mb-4">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
            </section>

            <section className="pt-8 border-t border-gray-300">
              <p className="text-sm text-gray-600">
                Stand: Dezember 2024
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
