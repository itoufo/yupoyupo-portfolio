import { services } from '@/lib/services'
import { ServiceCard } from './ServiceCard'

export function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          サービス一覧
        </h2>
        <div className="space-y-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
