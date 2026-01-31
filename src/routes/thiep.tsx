import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/thiep')({
  component: Thiep,
})

function Thiep() {
  return (
    <div className="min-h-screen bg-[#FCF9F6] text-stone-900 font-sans selection:bg-[#F5E6DA] selection:text-[#8B4513]">
      {/* Header/Back Link */}
      <header className="p-6 text-center">
        <a 
          href="/" 
          className="text-[#A03D1A] font-medium hover:underline flex items-center justify-center gap-2"
        >
          ← Quay lại trang chủ
        </a>
      </header>

      {/* 12. thiệp mời chi tiết */}
      <section className="pt-4 pb-24">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white p-2">
            <img 
              src="/images/invitation-detail-1.jpg" 
              alt="Invitation Detail 1" 
              className="w-full h-auto rounded-xl"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white p-2">
            <img 
              src="/images/invitation-detail-2.jpg" 
              alt="Invitation Detail 2" 
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </section>

      <footer className="py-12 bg-white text-stone-400 text-center text-sm font-light">
        <p className="uppercase tracking-[0.3em] mb-4">Wedding Celebration</p>
        <p>© 2026. All Rights Reserved.</p>
      </footer>
    </div>
  )
}
