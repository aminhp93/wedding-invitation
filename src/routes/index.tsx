import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/features/hero/components/Hero'
import { Milestones } from '@/features/our-story/components/Milestones'
import { Events } from '@/features/events/components/Events'
import { Album } from '@/features/gallery/components/Album'
import { GiftSection } from '@/features/gift/components/GiftSection'
import { Guestbook } from '@/features/rsvp/components/Guestbook'
import { Music2, Menu } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="min-h-screen bg-[#FCF9F6] text-stone-900 font-sans selection:bg-[#F5E6DA] selection:text-[#8B4513]">
      
      {/* Decorative Corners (Abstract placeholders for now) */}
      <div className="fixed top-0 left-0 w-64 h-64 pointer-events-none z-50 opacity-40">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-rose-100/50 to-transparent"></div>
      </div>
      <div className="fixed bottom-0 right-0 w-64 h-64 pointer-events-none z-50 opacity-40 rotate-180">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-rose-100/50 to-transparent"></div>
      </div>

      <Hero />
      <Events />
      <Milestones />
      <Album />
      <GiftSection />
      <Guestbook />
      
      <footer className="py-12 bg-white text-stone-400 text-center text-sm font-light">
        <p className="uppercase tracking-[0.3em] mb-4">Wedding Celebration</p>
        <p>© 2024 - 2025. All Rights Reserved.</p>
      </footer>

      {/* Floating Controls */}
      <div className="fixed bottom-8 left-8 z-[100]">
        <button className="bg-[#A03D1A] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform">
          <Music2 size={24} />
        </button>
      </div>
      <div className="fixed bottom-8 right-8 z-[100]">
        <button className="bg-[#A03D1A] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform">
          <Menu size={24} />
        </button>
      </div>
    </div>
  )
}
