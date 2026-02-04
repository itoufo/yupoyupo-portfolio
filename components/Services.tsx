import { services } from '@/lib/services'
import { ServiceCard } from './ServiceCard'

export function Services() {
  return (
    <section id="services" className="py-32 px-4 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 mb-4 text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            WHAT I BUILD
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Services
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            常識を疑い、本質を追求する。それが私のサービス設計哲学。
          </p>
        </div>

        {/* Service cards */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
