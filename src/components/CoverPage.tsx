import { Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface CoverPageProps {
  onOpen: () => void
  guestName?: string
}

export function CoverPage({ onOpen, guestName = "Quý Khách" }: CoverPageProps) {
  return (
    <motion.div 
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, pointerEvents: 'none' }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-[200] bg-[#FCF9F6] flex flex-col items-center justify-center p-6 text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-md w-full bg-white p-12 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-[#A03D1A]" />
        
        <div className="mb-8 flex justify-center">
          <Heart className="text-[#A03D1A] w-12 h-12" fill="#A03D1A" />
        </div>

        <h2 className="text-stone-400 uppercase tracking-widest text-xs mb-4">Thân mời</h2>
        <h1 className="text-4xl md:text-5xl font-serif italic text-[#A03D1A] mb-8">
          {guestName}
        </h1>
        
        <p className="text-stone-600 mb-12 italic font-serif leading-relaxed">
          Trân trọng kính mời {guestName} tới dự bữa tiệc thân mật mừng lễ đính hôn của hai con chúng tôi.
        </p>

        <Button 
            onClick={onOpen}
            className="w-full bg-[#A03D1A] hover:bg-[#8B3516] text-white rounded-none py-8 h-auto uppercase tracking-widest text-sm shadow-lg"
        >
          Mở thiệp mời
        </Button>
      </motion.div>
      
      <p className="mt-8 text-stone-400 text-xs uppercase tracking-widest">
        Ngọc Minh & Linh Nhi — 2026
      </p>
    </motion.div>
  )
}
