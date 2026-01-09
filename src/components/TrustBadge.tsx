import { Star } from 'lucide-react';

export default function TrustBadge() {
  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-16 space-y-8 md:space-y-0">
          <div className="flex items-center space-x-4">
            <img
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_74x24dp.png"
              alt="Google"
              className="h-8"
            />
            <div>
              <div className="flex items-center space-x-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#D4AF37] fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-600">5.0 Sterne Bewertung</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-3xl font-bold text-[#1a2332]">500+</p>
            <p className="text-gray-600">Zufriedene Kunden</p>
          </div>

          <div className="text-center">
            <p className="text-3xl font-bold text-[#1a2332]">24/7</p>
            <p className="text-gray-600">Erreichbarkeit</p>
          </div>

          <div className="text-center">
            <p className="text-3xl font-bold text-[#1a2332]">15+</p>
            <p className="text-gray-600">Jahre Erfahrung</p>
          </div>
        </div>
      </div>
    </section>
  );
}
