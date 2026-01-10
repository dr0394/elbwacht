import { Shield, Clock, Users } from 'lucide-react';

export default function TrustBadge() {
  const stats = [
    { icon: Users, value: '500+', label: 'Kunden', description: 'Vertrauen uns' },
    { icon: Clock, value: '24/7', label: 'Service', description: 'Rund um die Uhr' },
    { icon: Shield, value: '15+', label: 'Jahre', description: 'Erfahrung' },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10"
                style={{
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-2xl"
                    style={{
                      background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
                    }}
                  />
                </div>

                <div className="relative flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/15 transition-all duration-300">
                    <Icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                  </div>

                  <div className="text-5xl lg:text-6xl font-black mb-2 text-white tracking-tight">
                    {stat.value}
                  </div>

                  <div className="text-xl font-bold text-gray-200 mb-1">
                    {stat.label}
                  </div>

                  <div className="text-sm text-gray-400">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
