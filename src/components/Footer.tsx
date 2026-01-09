import { Shield, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-white/10 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0d152d 0%, #213571 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px)`,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 border-2 border-white/30 bg-white/10 backdrop-blur-sm">
                <Shield className="h-8 w-8 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-black text-xl tracking-wide text-white">ELBWACHT</div>
                <div className="text-xs font-bold tracking-widest text-white/70">SECURITY SERVICE</div>
              </div>
            </div>
            <p className="mb-6 leading-relaxed font-medium text-white/80">
              Ihr professioneller Partner für Sicherheitsdienstleistungen in Hamburg und Norddeutschland.
            </p>
          </div>

          <div>
            <h3 className="font-black text-lg mb-6 tracking-tight text-white">Leistungen</h3>
            <ul className="space-y-3">
              {['Objektschutz', 'Eventschutz', 'Revierdienst', 'Empfangsdienste', 'Baustellensicherung', 'Mietnomaden-Schutz'].map((item) => (
                <li key={item}>
                  <a href="#leistungen" className="text-white/70 hover:text-white transition-all font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-black text-lg mb-6 tracking-tight text-white">Unternehmen</h3>
            <ul className="space-y-3">
              {[
                { label: 'Über uns', href: '#ueber-uns' },
                { label: 'Karriere', href: '#karriere' },
                { label: 'Zertifikate', href: '#zertifikate' },
                { label: 'Kontakt', href: '#kontakt' }
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-white/70 hover:text-white transition-all font-medium">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-black text-lg mb-6 tracking-tight text-white">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="h-5 w-5 flex-shrink-0 mt-0.5 rounded-sm p-1 bg-white/10 border border-white/20">
                  <Phone className="h-full w-full text-white" strokeWidth={2.5} />
                </div>
                <div className="font-medium text-white/80">
                  <a href="tel:+4940253302940" className="hover:text-white transition-all block">
                    +49 40 / 25330294
                  </a>
                  <a href="tel:+491638467694" className="hover:text-white transition-all block text-sm mt-1">
                    +49 163 / 8467694
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="h-5 w-5 flex-shrink-0 mt-0.5 rounded-sm p-1 bg-white/10 border border-white/20">
                  <Mail className="h-full w-full text-white" strokeWidth={2.5} />
                </div>
                <a href="mailto:info@elbwacht.de" className="text-white/80 hover:text-white transition-all font-medium">
                  info@elbwacht.de
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <div className="h-5 w-5 flex-shrink-0 mt-0.5 rounded-sm p-1 bg-white/10 border border-white/20">
                  <MapPin className="h-full w-full text-white" strokeWidth={2.5} />
                </div>
                <span className="font-medium text-white/80">
                  Wandsbeker Chaussee 11<br />
                  22089 Hamburg
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-medium text-white/70">
              © {currentYear} Elbwacht Security Service GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <Link to="/impressum" className="text-white/70 hover:text-white transition-all text-sm font-medium">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-white/70 hover:text-white transition-all text-sm font-medium">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
