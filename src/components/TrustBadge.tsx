import { Shield, Clock, Users, Award, HeadphonesIcon, Scale } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function TrustBadge() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: Award,
      title: 'Geprüfte Qualifikation',
      description: 'Alle unsere Mitarbeiter verfügen über die erforderliche §34a GewO Sachkundeprüfung und regelmäßige Weiterbildungen.',
    },
    {
      icon: Clock,
      title: '24/7 Verfügbarkeit',
      description: 'Rund um die Uhr erreichbar und einsatzbereit - 365 Tage im Jahr für Ihre Sicherheit.',
    },
    {
      icon: Users,
      title: 'Erfahrenes Team',
      description: 'Über 15 Jahre Erfahrung im Sicherheitsgewerbe mit hochqualifizierten Sicherheitskräften.',
    },
    {
      icon: Shield,
      title: 'Zertifizierte Qualität',
      description: 'IHK-zertifiziert und nach DIN 77200 für Sicherheitsdienstleistungen qualifiziert.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Persönlicher Service',
      description: 'Direkter Ansprechpartner und individuelle Betreuung für optimale Sicherheitslösungen.',
    },
    {
      icon: Scale,
      title: 'Rechtssicherheit',
      description: 'Vollständig versichert, rechtskonforme Dokumentation und professionelle Behördenkoordination.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [features.length]);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0d152d 0%, #213571 100%)',
        }}
      />

      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black mb-6 text-white tracking-tight">
            Maximaler Schutz durch Experten
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            500+ zufriedene Kunden vertrauen auf unsere Expertise in Hamburg und Norddeutschland
          </p>
        </div>

        <div className="relative h-80 lg:h-64">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = index === currentSlide;
            const isPrev = index === (currentSlide - 1 + features.length) % features.length;
            const isNext = index === (currentSlide + 1) % features.length;

            return (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  isActive
                    ? 'opacity-100 translate-x-0 scale-100 z-20'
                    : isPrev
                    ? 'opacity-0 -translate-x-full scale-95 z-10'
                    : isNext
                    ? 'opacity-0 translate-x-full scale-95 z-10'
                    : 'opacity-0 translate-x-full scale-90 z-0'
                }`}
              >
                <div className="h-full flex items-center justify-center">
                  <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10 max-w-3xl mx-auto hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-2xl"
                        style={{
                          background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
                        }}
                      />
                    </div>

                    <div className="relative flex flex-col items-center text-center">
                      <div className="mb-6 p-5 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/15 transition-all duration-300">
                        <Icon className="h-12 w-12 text-white" strokeWidth={1.5} />
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white tracking-tight">
                        {feature.title}
                      </h3>

                      <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Gehe zu Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
