import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/features/hero/components/Hero'
import { Album } from '@/features/gallery/components/Album'
import { Events } from '@/features/events/components/Events'
import { Invitation } from '@/features/hero/components/Invitation'
import { DateTimeLocation } from '@/features/hero/components/DateTimeLocation'
import { HeroActionButtons } from '@/features/hero/components/HeroActionButtons'
import { ArchedImages } from '@/features/hero/components/ArchedImages'
import { RsvpDialog } from '@/features/rsvp/components/RsvpDialog'
import { Music2, Menu, X, Heart, ClipboardCheck, Mail as MailIcon } from 'lucide-react'
import * as React from 'react'
import { MusicPlayer } from '@/components/MusicPlayer'
import { AnimatePresence, motion } from 'framer-motion'
import { CoverPage } from '@/components/CoverPage2'

export const Route = createFileRoute('/don-dau-2')({
  component: DonDau,
})

function DonDau() {
  const [isRsvpOpen, setIsRsvpOpen] = React.useState(false)
  const [isMusicPlaying, setIsMusicPlaying] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const [showCover, setShowCover] = React.useState(true)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#FCF9F6] text-stone-900 font-sans selection:bg-[#F5E6DA] selection:text-[#8B4513]">
      <AnimatePresence>
          {showCover && <CoverPage onOpen={() => setShowCover(false)} />}
      </AnimatePresence>
      <RsvpDialog 
        open={isRsvpOpen} 
        onOpenChange={setIsRsvpOpen} 
        eventType="Lễ Vu Quy"
        eventDateLabel="Lễ Vu Quy — 08h00, 28/02/2026"
      />
      <MusicPlayer isPlaying={isMusicPlaying} onToggle={() => setIsMusicPlaying(!isMusicPlaying)} />
      
      {/* Decorative Corners */}
      <div className="fixed top-0 left-0 w-64 h-64 pointer-events-none z-50 opacity-40">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-rose-100/50 to-transparent"></div>
      </div>
      <div className="fixed bottom-0 right-0 w-64 h-64 pointer-events-none z-50 opacity-40 rotate-180">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-rose-100/50 to-transparent"></div>
      </div>

      {/* 1. Chung toi cuoi - Specific date for Don Dau */}
      <Hero day="28" month="02" year="2026" />
      
      {/* 2. tran trong kinh moi */}
      <Invitation title="Sự hiện diện và lời chúc phúc của Quý vị là niềm vinh hạnh và niềm hạnh phúc lớn lao đối với gia đình chúng tôi." />

      {/* 3. thoi gian - dia diem */}
      <DateTimeLocation 
        timeLine="09:30, Thứ Bảy"
        day="28"
        month="02"
        year="2026"
        locationName="LỄ VU QUY"
        address="Tổ dân phố Đồng Sau, phường Tiền Phong, tỉnh Bắc Ninh"
      />

      {/* 4. gui loi chuc - xac nhan tham du */}
      <HeroActionButtons onRsvpTrigger={() => setIsRsvpOpen(true)} />

      {/* 5. anh co dau , chu re */}
      <ArchedImages />

      {/* 6. album anh cuoi */}
      <Album />

            {/* 9. Sự kiện */}
            <Events />

      <footer className="py-12 bg-white text-stone-400 text-center text-sm font-light relative z-20">
        <p className="uppercase tracking-[0.3em] mb-4">Wedding Celebration</p>
        <p>© 2026. All Rights Reserved.</p>
      </footer>

      {/* Floating Controls */}
      <div className="fixed bottom-8 left-8 z-[100]">
        <button 
          onClick={() => setIsMusicPlaying(!isMusicPlaying)}
          className={`bg-[#A03D1A] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center ${!isMusicPlaying ? 'opacity-50 grayscale' : ''}`}
        >
          {isMusicPlaying ? <Music2 size={24} fill="white" className="animate-pulse" /> : <Music2 size={24} />}
        </button>
      </div>

      <div className="fixed bottom-8 right-8 z-[100]">
        <div className="relative">
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                className="absolute bottom-16 right-0 w-56 p-2 bg-white border border-stone-100 shadow-2xl rounded-2xl mb-4"
              >
                <div className="flex flex-col gap-1">
                  <button 
                    onClick={() => scrollToSection('guestbook')}
                    className="flex items-center gap-3 p-3 hover:bg-stone-50 rounded-xl transition-colors text-stone-600 text-sm"
                  >
                    <Heart size={18} className="text-[#A03D1A]" />
                    Gửi lời chúc
                  </button>
                  <button 
                    onClick={() => {
                        setIsRsvpOpen(true)
                        setIsMenuOpen(false)
                    }}
                    className="flex items-center gap-3 p-3 hover:bg-stone-50 rounded-xl transition-colors text-stone-600 text-sm"
                  >
                    <ClipboardCheck size={18} className="text-[#A03D1A]" />
                    Xác nhận tham dự
                  </button>
                  <button 
                    onClick={() => scrollToSection('invitation')}
                    className="flex items-center gap-3 p-3 hover:bg-stone-50 rounded-xl transition-colors text-stone-600 text-sm"
                  >
                    <MailIcon size={18} className="text-[#A03D1A]" />
                    Mời cưới
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-[#A03D1A] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </div>
  )
}
