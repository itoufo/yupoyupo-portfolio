import type { Service } from '@/lib/services'

interface ServiceCardProps {
  service: Service
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <div className="group relative">
      {/* Glow effect on hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

      <div className="relative p-8 md:p-10 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
        {/* Background number */}
        <div className="absolute -right-8 -top-8 text-[200px] font-black text-white/[0.02] select-none pointer-events-none">
          {String(index + 1).padStart(2, '0')}
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <span className="text-4xl mb-4 block">{service.icon}</span>
              <h3 className={`text-2xl md:text-3xl font-black bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                {service.name}
              </h3>
              <p className="text-sm text-gray-500 font-mono mt-1">
                {service.tagline}
              </p>
            </div>

            <a
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient} opacity-80 hover:opacity-100 transition-all hover:scale-110 hover:shadow-lg`}
            >
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed mb-8 text-lg">
            {service.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {service.features.map((feature) => (
              <span
                key={feature}
                className="px-3 py-1.5 text-xs font-mono text-gray-400 bg-white/5 border border-white/10 rounded-lg"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      </div>
    </div>
  )
}
