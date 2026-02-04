import Image from 'next/image'
import { profile } from '@/lib/profile'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white/10">
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-cyan-500/50">
              <span className="w-2 h-2 bg-cyan-400 rounded-full pulse-glow" />
              <span className="text-xs text-cyan-400 font-mono">ONLINE</span>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Title badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-purple-500/50 bg-purple-500/10">
              <span className="text-purple-400 font-mono text-sm tracking-wider">
                {profile.title}
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight">
              <span className="gradient-text glitch">{profile.nickname}</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-2 font-mono">
              {profile.name} / {profile.nameEn}
            </p>

            <p className="text-sm text-gray-500 mb-8">
              {profile.role}
            </p>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              &ldquo;<span className="text-white font-medium">{profile.tagline}</span>&rdquo;
            </p>

            {/* Credentials */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              {profile.credentials.map((cred) => (
                <div
                  key={cred.label}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-500/50 transition-colors"
                >
                  <span className="text-cyan-400 font-bold text-sm">{cred.label}</span>
                  <span className="text-gray-400 text-sm ml-2">{cred.value}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#services"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-bold rounded-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)]"
            >
              EXPLORE SERVICES
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {profile.stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-white/5 border border-white/10 glow-box">
              <div className="text-3xl md:text-4xl font-black gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
