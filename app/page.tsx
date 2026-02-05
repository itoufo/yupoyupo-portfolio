import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Career } from '@/components/Career'
import { Services } from '@/components/Services'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] noise">
      <Header />
      <Hero />
      <Career />
      <Services />
      <Footer />
    </main>
  )
}
