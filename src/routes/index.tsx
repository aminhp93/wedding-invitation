import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/features/hero/components/Hero'
import { Milestones } from '@/features/our-story/components/Milestones'
import { Events } from '@/features/events/components/Events'
import { Album } from '@/features/gallery/components/Album'
import { GiftSection } from '@/features/gift/components/GiftSection'
import { Guestbook } from '@/features/rsvp/components/Guestbook'
import { Invitation } from '@/features/hero/components/Invitation'
import { DateTimeLocation } from '@/features/hero/components/DateTimeLocation'
import { HeroActionButtons } from '@/features/hero/components/HeroActionButtons'
import { ArchedImages } from '@/features/hero/components/ArchedImages'
import { RsvpDialog } from '@/features/rsvp/components/RsvpDialog'
import { Music2, Menu } from 'lucide-react'
import * as React from 'react'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const [isRsvpOpen, setIsRsvpOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-[#FCF9F6] text-stone-900 font-sans selection:bg-[#F5E6DA] selection:text-[#8B4513]">
      <RsvpDialog open={isRsvpOpen} onOpenChange={setIsRsvpOpen} />
      
      {/* Decorative Corners (Abstract placeholders for now) */}
      <div className="fixed top-0 left-0 w-64 h-64 pointer-events-none z-50 opacity-40">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-rose-100/50 to-transparent"></div>
      </div>
      <div className="fixed bottom-0 right-0 w-64 h-64 pointer-events-none z-50 opacity-40 rotate-180">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-rose-100/50 to-transparent"></div>
      </div>

      {/* 1. Chung toi cuoi */}
      <Hero />
      
      {/* 2. tran trong kinh moi */}
      <Invitation />

      {/* 3. thoi gian - dia diem */}
      <DateTimeLocation />

      {/* 4. gui loi chuc - xac nhan tham du */}
      <HeroActionButtons onRsvpTrigger={() => setIsRsvpOpen(true)} />

      {/* 5. anh co dau , chu re */}
      <ArchedImages />

      {/* 6. album anh cuoi */}
      <Album />

      {/* 7. Chuyện chúng mình & 8. cot moc */}
      <Milestones />

      {/* 9. Sự kiện */}
      <Events />

      {/* 10. so luu but */}
      <Guestbook />

      {/* 11. mung cuoi */}
      <GiftSection />
      
      <footer className="py-12 bg-white text-stone-400 text-center text-sm font-light">
        <p className="uppercase tracking-[0.3em] mb-4">Wedding Celebration</p>
        <p>© 2026. All Rights Reserved.</p>
      </footer>

      {/* Floating Controls */}
      <div className="fixed bottom-8 left-8 z-[100]">
        <button className="bg-[#A03D1A] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center">
          <Music2 size={24} fill="white" />
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
