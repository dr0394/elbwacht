import { useState, useEffect } from 'react';

export default function TrustBadge() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      url: 'https://i.imgur.com/McuRdWL.jpg',
      alt: 'Professionelle Sicherheitskraft im Einsatz',
    },
    {
      url: 'https://i.imgur.com/BHNNaxC.jpg',
      alt: 'Sicherheitsteam bei der Arbeit',
    },
    {
      url: 'https://i.imgur.com/27g8p3R.jpg',
      alt: 'Sicherheitsdienst in Hamburg',
    },
    {
      url: 'https://i.imgur.com/GnsJnNS.jpg',
      alt: 'Objektschutz durch Experten',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

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

        <div className="relative h-[500px] lg:h-[600px]">
          {images.map((image, index) => {
            const isActive = index === currentSlide;
            const isPrev = index === (currentSlide - 1 + images.length) % images.length;
            const isNext = index === (currentSlide + 1) % images.length;

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
                <div className="h-full flex items-center justify-center px-4">
                  <div className="group relative max-w-5xl w-full mx-auto overflow-hidden rounded-2xl border-2 border-white/20 hover:border-white/40 transition-all duration-500">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {images.map((_, index) => (
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
