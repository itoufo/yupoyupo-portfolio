import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

export const metadata: Metadata = {
  title: '令和のエジソン | ゆぽゆぽ',
  description: '社会の型に収まらない人間が、テクノロジーを武器にする。伊東雄歩（ゆぽゆぽ）のポートフォリオサイト。',
  openGraph: {
    title: '令和のエジソン | ゆぽゆぽ',
    description: '社会の型に収まらない人間が、テクノロジーを武器にする。',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning className="dark">
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
