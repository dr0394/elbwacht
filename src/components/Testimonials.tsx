import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      handlePrevious();
    }
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

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
          <div className="inline-block mb-6 px-6 py-2 border-2 border-royal-700 bg-royal-50 backdrop-blur-sm rounded-full">
            <span className="text-royal-700 font-black text-sm tracking-widest uppercase">Kundenmeinungen</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Das sagen unsere Kunden
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Vertrauen und Zufriedenheit unserer Kunden sind unser höchstes Gut
          </p>
        </div>

        <div className="relative">
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getVisibleTestimonials().map((testimonial, index) => (
                <div key={index} className="group relative animate-fadeIn">
                  <div className="absolute -inset-1 bg-royal-700/10 blur-2xl group-hover:bg-royal-700/20 transition-all rounded-lg"></div>
                  <div className="relative h-full bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200 group-hover:border-royal-700/50 rounded-lg p-8 transition-all">
                    <div className="flex justify-between items-start mb-6">
                      <Quote className="h-10 w-10 text-royal-700/40" strokeWidth={2} />
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
          </div>

          <button
            onClick={handlePrevious}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white hover:bg-royal-700 text-royal-700 hover:text-white border-2 border-royal-700 rounded-full p-3 transition-all shadow-lg hover:shadow-xl z-10 items-center justify-center"
            aria-label="Vorherige Bewertung"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white hover:bg-royal-700 text-royal-700 hover:text-white border-2 border-royal-700 rounded-full p-3 transition-all shadow-lg hover:shadow-xl z-10 items-center justify-center"
            aria-label="Nächste Bewertung"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-royal-700'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Gehe zu Bewertung ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
