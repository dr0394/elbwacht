import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Schmidt',
    company: 'Schmidt Logistik GmbH',
    text: 'Seit 3 Jahren betreut Elbwacht unseren Objektschutz. Absolute Zuverlässigkeit und Professionalität. Die Mitarbeiter sind immer pünktlich und kompetent.',
    rating: 5
  },
  {
    name: 'Sarah Wagner',
    company: 'Wagner Events',
    text: 'Für unsere Veranstaltungen setzen wir ausschließlich auf Elbwacht. Das Team ist hervorragend geschult und jederzeit ansprechbar. Sehr empfehlenswert!',
    rating: 5
  },
  {
    name: 'Thomas Müller',
    company: 'Müller Bau AG',
    text: 'Professioneller Service und schnelle Reaktionszeiten. Unsere Baustellen sind optimal geschützt. Die Dokumentation ist vorbildlich.',
    rating: 5
  },
  {
    name: 'Julia Hoffmann',
    company: 'Hoffmann Immobilien',
    text: 'Top Beratung und individuelle Sicherheitskonzepte für unsere Objekte. Elbwacht ist ein verlässlicher Partner, auf den wir zählen können.',
    rating: 5
  },
  {
    name: 'Daniel Koch',
    company: 'Koch & Partner',
    text: 'Die 24/7 Erreichbarkeit gibt uns ein sicheres Gefühl. Bei Notfällen ist das Team sofort zur Stelle. Hervorragender Service!',
    rating: 5
  },
  {
    name: 'Anna Becker',
    company: 'Becker Retail',
    text: 'Unsere Filiale wird seit Jahren zuverlässig bewacht. Das Personal ist freundlich, professionell und absolut vertrauenswürdig.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px),
          repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)
        `,
        backgroundSize: '40px 40px',
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-6 px-6 py-2 border-2 border-blue-700 bg-blue-50 backdrop-blur-sm rounded-full">
            <span className="text-blue-700 font-black text-sm tracking-widest uppercase">Kundenmeinungen</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Das sagen unsere Kunden
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Vertrauen und Zufriedenheit unserer Kunden sind unser höchstes Gut
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-blue-700/10 blur-2xl group-hover:bg-blue-700/20 transition-all rounded-lg"></div>
              <div className="relative h-full bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200 group-hover:border-blue-700/50 rounded-lg p-8 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <Quote className="h-10 w-10 text-blue-700/40" strokeWidth={2} />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed font-medium">
                  "{testimonial.text}"
                </p>

                <div className="pt-6 border-t border-gray-200">
                  <p className="text-gray-900 font-black text-lg tracking-tight">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-700 text-sm font-medium mt-1">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white backdrop-blur-sm px-8 py-6 rounded-full border border-gray-200">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-gray-900 font-medium">Google</span>
            </div>

            <div className="flex items-center gap-1 px-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <span className="text-gray-900 font-black text-xl">5,0</span>
            <span className="text-gray-700 font-medium">von über 200 Bewertungen</span>
          </div>
        </div>
      </div>
    </section>
  );
}
