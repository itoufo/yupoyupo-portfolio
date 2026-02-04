import type { Service } from '@/lib/services'

interface ServiceCardProps {
  service: Service
  index: number
}

const gradientColors: Record<string, { text: string; border: string; bg: string }> = {
  'from-cyan-500 to-blue-500': {
    text: 'from-cyan-300 to-blue-400',
    border: 'border-cyan-400/40 hover:border-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  'from-purple-500 to-pink-500': {
    text: 'from-purple-300 to-pink-400',
    border: 'border-purple-400/40 hover:border-purple-400',
    bg: 'bg-purple-500/10',
  },
  'from-emerald-500 to-teal-500': {
    text: 'from-emerald-300 to-teal-400',
    border: 'border-emerald-400/40 hover:border-emerald-400',
    bg: 'bg-emerald-500/10',
  },
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const colors = gradientColors[service.gradient] || gradientColors['from-cyan-500 to-blue-500']

  return (
    <div className="group relative">
      {/* Glow effect on hover */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />

      <div className={`relative p-10 md:p-12 rounded-3xl bg-gray-900/80 border-2 ${colors.border} transition-all duration-300 overflow-hidden card-glow`}>
        {/* Background number */}
        <div className="absolute -right-4 -top-4 text-[180px] font-black text-white/[0.03] select-none pointer-events-none leading-none">
          {String(index + 1).padStart(2, '0')}
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <span className="text-5xl mb-6 block">{service.icon}</span>
              <h3 className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${colors.text} bg-clip-text text-transparent`}>
                {service.name}
              </h3>
              <p className={`text-base font-bold mt-2 bg-gradient-to-r ${colors.text} bg-clip-text text-transparent opacity-80`}>
                {service.tagline}
              </p>
            </div>

            <a
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-90 hover:opacity-100 transition-all hover:scale-110 hover:shadow-xl`}
            >
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-10 text-lg font-medium">
            {service.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-3">
            {service.features.map((feature) => (
              <span
                key={feature}
                className={`px-4 py-2 text-sm font-bold text-white/90 ${colors.bg} border ${colors.border.split(' ')[0]} rounded-xl`}
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      </div>
    </div>
  )
}
