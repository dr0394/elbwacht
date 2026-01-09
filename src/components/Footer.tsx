import { Shield, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t bg-gray-50 border-gray-200">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px)`,
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-royal-700 to-royal-800 border-2 border-royal-700">
                <Shield className="h-8 w-8 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-black text-xl tracking-wide text-gray-900">ELBWACHT</div>
                <div className="text-royal-700 text-xs font-bold tracking-widest">SECURITY SERVICE</div>
              </div>
            </div>
            <p className="mb-6 leading-relaxed font-medium text-gray-700">
              Ihr professioneller Partner für Sicherheitsdienstleistungen in Hamburg und Norddeutschland.
            </p>
          </div>

          <div>
            <h3 className="font-black text-lg mb-6 tracking-tight text-gray-900">Leistungen</h3>
            <ul className="space-y-3">
              {['Objektschutz', 'Eventschutz', 'Revierdienst', 'Empfangsdienste', 'Baustellensicherung', 'Mietnomaden-Schutz'].map((item) => (
                <li key={item}>
                  <a href="#leistungen" className="hover:text-royal-700 transition-colors font-medium text-gray-700">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-black text-lg mb-6 tracking-tight text-gray-900">Unternehmen</h3>
            <ul className="space-y-3">
              {[
                { label: 'Über uns', href: '#ueber-uns' },
                { label: 'Karriere', href: '#karriere' },
                { label: 'Zertifikate', href: '#zertifikate' },
                { label: 'Kontakt', href: '#kontakt' }
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-royal-700 transition-colors font-medium text-gray-700">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-black text-lg mb-6 tracking-tight text-gray-900">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-royal-700 flex-shrink-0 mt-0.5" />
                <div className="font-medium text-gray-700">
                  <a href="tel:+4940253302940" className="hover:text-royal-700 transition-colors block">
                    +49 40 / 25330294
                  </a>
                  <a href="tel:+491638467694" className="hover:text-royal-700 transition-colors block text-sm mt-1">
                    +49 163 / 8467694
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-royal-700 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@elbwacht.de" className="hover:text-royal-700 transition-colors font-medium text-gray-700">
                  info@elbwacht.de
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-royal-700 flex-shrink-0 mt-0.5" />
                <span className="font-medium text-gray-700">
                  Wandsbeker Chaussee 11<br />
                  22089 Hamburg
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-medium text-gray-700">
              © {currentYear} Elbwacht Security Service GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <Link to="/impressum" className="hover:text-royal-700 transition-colors text-sm font-medium text-gray-700">
                Impressum
              </Link>
              <Link to="/datenschutz" className="hover:text-royal-700 transition-colors text-sm font-medium text-gray-700">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
