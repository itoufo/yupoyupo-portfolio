import { profile } from '@/lib/profile'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center font-black text-black text-sm">
              Y
            </div>
            <span className="text-gray-400">
              {profile.nickname}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.taolis.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-cyan-400 transition-colors font-mono"
            >
              TAOLIS
            </a>
            <span className="text-gray-700">|</span>
            <span className="text-sm text-gray-600 font-mono">
              &copy; {currentYear} {profile.role.split(' ')[0]}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
