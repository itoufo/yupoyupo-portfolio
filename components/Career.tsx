'use client'

import { profile } from '@/lib/profile'
import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

function RolesSection() {
  const { ref, isInView } = useInView()

  const colorMap: Record<string, { border: string; bg: string; text: string; glow: string }> = {
    cyan: {
      border: 'border-cyan-400/40 group-hover:border-cyan-400',
      bg: 'bg-cyan-500/10',
      text: 'text-cyan-400',
      glow: 'group-hover:shadow-[0_0_40px_rgba(0,245,255,0.2)]',
    },
    purple: {
      border: 'border-purple-400/40 group-hover:border-purple-400',
      bg: 'bg-purple-500/10',
      text: 'text-purple-400',
      glow: 'group-hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]',
    },
    pink: {
      border: 'border-pink-400/40 group-hover:border-pink-400',
      bg: 'bg-pink-500/10',
      text: 'text-pink-400',
      glow: 'group-hover:shadow-[0_0_40px_rgba(236,72,153,0.2)]',
    },
    amber: {
      border: 'border-amber-400/40 group-hover:border-amber-400',
      bg: 'bg-amber-500/10',
      text: 'text-amber-400',
      glow: 'group-hover:shadow-[0_0_40px_rgba(245,158,11,0.2)]',
    },
  }

  return (
    <div ref={ref} className="mb-32">
      <div className="text-center mb-16">
        <span className="inline-block px-6 py-3 mb-6 text-sm font-black text-cyan-300 bg-cyan-500/20 border-2 border-cyan-400/50 rounded-full tracking-widest">
          ONE-MAN ARMY
        </span>
        <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
          四刀流の<span className="gradient-text">異次元</span>
        </h3>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          経営・開発・営業・教育。普通なら4人必要な役割を、一人で完結させる。
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {profile.roles.map((role, i) => {
          const colors = colorMap[role.color]
          return (
            <div
              key={role.title}
              className={`group relative p-8 rounded-2xl bg-gray-900/60 border-2 ${colors.border} ${colors.glow} transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${colors.bg} mb-6`}>
                <span className={`text-xl font-black font-mono ${colors.text}`}>{role.icon}</span>
              </div>
              <h4 className={`text-2xl font-black ${colors.text} mb-4`}>{role.title}</h4>
              <p className="text-gray-400 leading-relaxed text-sm">{role.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ProofsSection() {
  const { ref, isInView } = useInView()

  return (
    <div ref={ref} className="mb-32">
      <div className="text-center mb-16">
        <span className="inline-block px-6 py-3 mb-6 text-sm font-black text-purple-300 bg-purple-500/20 border-2 border-purple-400/50 rounded-full tracking-widest">
          PROOF OF WORK
        </span>
        <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
          数字が<span className="gradient-text">証明</span>する
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {profile.proofs.map((proof, i) => (
          <div
            key={proof.label}
            className={`group relative p-6 md:p-8 rounded-2xl bg-gray-900/60 border-2 border-white/10 hover:border-cyan-400/50 transition-all duration-500 card-glow text-center ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="mb-2">
              <span className="text-4xl md:text-5xl font-black gradient-text">{proof.value}</span>
              <span className="text-lg md:text-xl font-bold text-cyan-400 ml-1">{proof.unit}</span>
            </div>
            <div className="text-white font-bold text-sm md:text-base mb-1">{proof.label}</div>
            <div className="text-gray-500 text-xs md:text-sm">{proof.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TimelineSection() {
  const { ref, isInView } = useInView(0.05)

  return (
    <div ref={ref} className="mb-32">
      <div className="text-center mb-16">
        <span className="inline-block px-6 py-3 mb-6 text-sm font-black text-pink-300 bg-pink-500/20 border-2 border-pink-400/50 rounded-full tracking-widest">
          CHRONICLE
        </span>
        <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
          <span className="gradient-text">軌跡</span>
        </h3>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 md:-translate-x-px" />

        <div className="space-y-8 md:space-y-12">
          {profile.timeline.map((item, i) => {
            const isLeft = i % 2 === 0
            return (
              <div
                key={item.year}
                className={`relative flex items-start ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                } transition-all duration-700`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Mobile layout */}
                <div className="md:hidden flex items-start w-full">
                  {/* Dot */}
                  <div className="relative z-10 flex-shrink-0 w-8 flex justify-center">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(0,245,255,0.8)] mt-2" />
                  </div>
                  {/* Content */}
                  <div className="ml-4 flex-1 p-4 rounded-xl bg-gray-900/80 border border-white/10 hover:border-cyan-400/30 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-cyan-400 font-mono font-black text-sm">{item.year}</span>
                      <span className="px-2 py-0.5 text-[10px] font-bold text-purple-300 bg-purple-500/20 border border-purple-400/30 rounded-full">
                        {item.tag}
                      </span>
                    </div>
                    <h4 className="text-white font-bold text-sm mb-1">{item.event}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.detail}</p>
                  </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 w-full items-start">
                  {/* Left content */}
                  <div className={`${isLeft ? 'text-right' : ''}`}>
                    {isLeft && (
                      <div className="p-6 rounded-xl bg-gray-900/80 border border-white/10 hover:border-cyan-400/30 transition-colors">
                        <div className={`flex items-center gap-3 mb-2 ${isLeft ? 'justify-end' : ''}`}>
                          <span className="px-2 py-0.5 text-[10px] font-bold text-purple-300 bg-purple-500/20 border border-purple-400/30 rounded-full">
                            {item.tag}
                          </span>
                          <span className="text-cyan-400 font-mono font-black">{item.year}</span>
                        </div>
                        <h4 className="text-white font-bold mb-1">{item.event}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.detail}</p>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="relative z-10 flex justify-center">
                    <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(0,245,255,0.8)] mt-6 ring-4 ring-[#0a0a0f]" />
                  </div>

                  {/* Right content */}
                  <div>
                    {!isLeft && (
                      <div className="p-6 rounded-xl bg-gray-900/80 border border-white/10 hover:border-cyan-400/30 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-cyan-400 font-mono font-black">{item.year}</span>
                          <span className="px-2 py-0.5 text-[10px] font-bold text-purple-300 bg-purple-500/20 border border-purple-400/30 rounded-full">
                            {item.tag}
                          </span>
                        </div>
                        <h4 className="text-white font-bold mb-1">{item.event}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.detail}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function SkillsSection() {
  const { ref, isInView } = useInView()

  const categories = [
    { key: 'languages' as const, label: 'LANGUAGES', icon: '{ }', color: 'cyan' },
    { key: 'frameworks' as const, label: 'FRAMEWORKS', icon: '< >', color: 'purple' },
    { key: 'infra' as const, label: 'INFRA', icon: '[ ]', color: 'pink' },
    { key: 'ai' as const, label: 'AI / ML', icon: '* *', color: 'emerald' },
  ]

  const colorMap: Record<string, { border: string; bg: string; text: string; tagBorder: string; tagBg: string }> = {
    cyan: { border: 'border-cyan-400/30', bg: 'bg-cyan-500/10', text: 'text-cyan-400', tagBorder: 'border-cyan-400/20', tagBg: 'bg-cyan-500/5' },
    purple: { border: 'border-purple-400/30', bg: 'bg-purple-500/10', text: 'text-purple-400', tagBorder: 'border-purple-400/20', tagBg: 'bg-purple-500/5' },
    pink: { border: 'border-pink-400/30', bg: 'bg-pink-500/10', text: 'text-pink-400', tagBorder: 'border-pink-400/20', tagBg: 'bg-pink-500/5' },
    emerald: { border: 'border-emerald-400/30', bg: 'bg-emerald-500/10', text: 'text-emerald-400', tagBorder: 'border-emerald-400/20', tagBg: 'bg-emerald-500/5' },
  }

  return (
    <div ref={ref} className="mb-32">
      <div className="text-center mb-16">
        <span className="inline-block px-6 py-3 mb-6 text-sm font-black text-emerald-300 bg-emerald-500/20 border-2 border-emerald-400/50 rounded-full tracking-widest">
          TECH STACK
        </span>
        <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
          <span className="gradient-text">武器庫</span>
        </h3>
        <p className="text-lg text-gray-400">
          8言語 / 8フレームワーク / 8インフラ / 5 AI技術
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((cat, i) => {
          const colors = colorMap[cat.color]
          return (
            <div
              key={cat.key}
              className={`p-6 rounded-2xl bg-gray-900/60 border ${colors.border} transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className={`font-mono font-black text-lg ${colors.text}`}>{cat.icon}</span>
                <span className={`text-sm font-black tracking-widest ${colors.text}`}>{cat.label}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.skills[cat.key].map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-sm font-bold text-gray-300 ${colors.tagBg} border ${colors.tagBorder} rounded-lg`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function HobbiesSection() {
  const { ref, isInView } = useInView()

  return (
    <div ref={ref} className="mb-32">
      <div className="text-center mb-16">
        <span className="inline-block px-6 py-3 mb-6 text-sm font-black text-amber-300 bg-amber-500/20 border-2 border-amber-400/50 rounded-full tracking-widest">
          OFF DUTY
        </span>
        <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
          もう一つの<span className="gradient-text">顔</span>
        </h3>
        <p className="text-lg text-gray-400">
          コードを書かない時間にも、創造は止まらない。
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {profile.hobbies.map((hobby, i) => (
          <div
            key={hobby.title}
            className={`group relative p-8 rounded-2xl bg-gray-900/60 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${hobby.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            <div className="relative z-10">
              <div className="text-5xl mb-5">
                {hobby.icon === 'palette' ? '🎨' : '🌿'}
              </div>
              <h4 className="text-xl font-black text-white mb-3">{hobby.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function WeaknessesSection() {
  const { ref, isInView } = useInView()

  return (
    <div ref={ref} className="mb-32">
      <div className="text-center mb-16">
        <span className="inline-block px-6 py-3 mb-6 text-sm font-black text-red-300 bg-red-500/20 border-2 border-red-400/50 rounded-full tracking-widest">
          SYSTEM ERROR
        </span>
        <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
          <span className="gradient-text">バグ</span>一覧
        </h3>
        <p className="text-lg text-gray-400">
          天才にも未修正のバグがある。ADHDという名のOS仕様。
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {profile.weaknesses.map((w, i) => (
          <div
            key={w.title}
            className={`relative p-6 rounded-2xl bg-gray-900/60 border border-red-400/20 hover:border-red-400/40 transition-all duration-500 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className="text-4xl mb-4">{w.icon}</div>
            <h4 className="text-lg font-black text-red-400 mb-2">{w.title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">{w.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function SideProjectsSection() {
  const { ref, isInView } = useInView()

  const tagIcons: Record<string, string> = {
    COMMUNITY: '👥',
    EDUCATION: '🎓',
    TOOL: '🔧',
    SECURITY: '🔐',
    AI: '🤖',
    GAME: '🎮',
  }

  return (
    <div ref={ref}>
      <div className="text-center mb-16">
        <span className="inline-block px-6 py-3 mb-6 text-sm font-black text-cyan-300 bg-cyan-500/20 border-2 border-cyan-400/50 rounded-full tracking-widest">
          SIDE PROJECTS
        </span>
        <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
          遊びも<span className="gradient-text">本気</span>
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {profile.sideProjects.map((project, i) => {
          const Wrapper = project.url ? 'a' : 'div'
          const linkProps = project.url
            ? { href: project.url, target: '_blank' as const, rel: 'noopener noreferrer' }
            : {}
          return (
            <Wrapper
              key={project.title}
              {...linkProps}
              className={`group block p-6 rounded-2xl bg-gray-900/60 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 card-glow ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{tagIcons[project.tag] || '💡'}</span>
                  <h4 className="text-lg font-black text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h4>
                </div>
                <span className="px-2.5 py-1 text-[10px] font-bold text-purple-300 bg-purple-500/20 border border-purple-400/30 rounded-full">
                  {project.tag}
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
              {project.url && (
                <div className="mt-3 flex items-center gap-1 text-xs text-gray-600 group-hover:text-cyan-400/60 transition-colors">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="font-mono">OPEN</span>
                </div>
              )}
            </Wrapper>
          )
        })}
      </div>
    </div>
  )
}

export function Career() {
  return (
    <section id="career" className="py-32 px-4 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/3 -right-64 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-64 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main section header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Who is <span className="gradient-text">ゆぽゆぽ</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            経営・開発・営業・教育。4つの役割を一人で完遂する、異次元の存在。
          </p>
        </div>

        <RolesSection />
        <ProofsSection />
        <TimelineSection />
        <SkillsSection />
        <HobbiesSection />
        <WeaknessesSection />
        <SideProjectsSection />
      </div>
    </section>
  )
}
