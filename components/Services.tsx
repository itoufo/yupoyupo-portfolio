import { services } from '@/lib/services'
import { ServiceCard } from './ServiceCard'

export function Services() {
  return (
    <section id="services" className="py-32 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-3 mb-6 text-sm font-black text-cyan-300 bg-cyan-500/20 border-2 border-cyan-400/50 rounded-full tracking-widest">
            WHAT I BUILD
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
            常識を疑い、本質を追求する。それが私のサービス設計哲学。
          </p>
        </div>

        {/* Service cards */}
        <div className="space-y-10">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
