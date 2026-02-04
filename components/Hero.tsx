import Image from 'next/image'
import { profile } from '@/lib/profile'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-black">
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-black/90 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-400/50">
              <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full pulse-glow" />
              <span className="text-sm text-cyan-400 font-mono font-bold tracking-wider">ONLINE</span>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Title badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 rounded-full border-2 border-purple-400/60 bg-purple-500/20">
              <span className="text-purple-300 font-bold text-sm tracking-wider">
                {profile.title}
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight">
              <span className="gradient-text glitch">{profile.nickname}</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-2 font-mono">
              {profile.name} / {profile.nameEn}
            </p>

            <p className="text-base text-cyan-400/80 mb-8 font-medium">
              {profile.role}
            </p>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-xl leading-relaxed">
              &ldquo;<span className="text-white font-bold">{profile.tagline}</span>&rdquo;
            </p>

            {/* Credentials */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
              {profile.credentials.map((cred) => (
                <div
                  key={cred.label}
                  className="px-5 py-3 bg-cyan-500/10 border-2 border-cyan-400/40 rounded-xl hover:border-cyan-400 hover:bg-cyan-500/20 transition-all"
                >
                  <span className="text-cyan-300 font-black text-sm">{cred.label}</span>
                  <span className="text-white text-sm font-medium ml-2">{cred.value}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#services"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 text-black font-black text-lg rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(0,245,255,0.5)]"
            >
              EXPLORE SERVICES
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          {profile.stats.map((stat) => (
            <div key={stat.label} className="text-center p-8 rounded-2xl bg-white/5 border-2 border-white/10 hover:border-cyan-400/50 transition-all card-glow">
              <div className="text-4xl md:text-5xl font-black gradient-text mb-3">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-mono uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3 text-gray-400">
          <span className="text-xs font-mono tracking-[0.3em] font-bold">SCROLL</span>
          <svg className="w-6 h-6 animate-bounce text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
