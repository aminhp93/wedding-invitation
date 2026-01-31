import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/features/hero/components/Hero'

export const Route = createFileRoute('/an-hoi')({
  component: AnHoi,
})

function AnHoi() {
  return (
    <div className="min-h-screen bg-[#FCF9F6] text-stone-900 font-sans selection:bg-[#F5E6DA] selection:text-[#8B4513]">
      <header className="fixed top-6 left-6 z-[100]">
        <a 
          href="/" 
          className="bg-white/80 backdrop-blur-sm shadow-sm border border-stone-100 px-4 py-2 rounded-full text-stone-500 text-sm hover:text-[#A03D1A] transition-colors"
        >
          ← Trang chủ
        </a>
      </header>

      <Hero day="28" month="02" year="2026" />

      <footer className="py-12 bg-white text-stone-400 text-center text-sm font-light relative z-20">
        <p className="uppercase tracking-[0.3em] mb-4">Wedding Celebration</p>
        <p>© 2026. All Rights Reserved.</p>
      </footer>
    </div>
  )
}
