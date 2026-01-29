import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/image-01.png"
          alt="Wedding Couple"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 text-center text-white space-y-6 px-4"
      >
        <p className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase">Trân trọng kính mời</p>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif leading-tight">
          <span className="block mb-2">Chú Rể</span>
          <span className="text-2xl md:text-5xl font-light block my-4">&</span>
          <span className="block mt-2">Cô Dâu</span>
        </h1>

        <div className="flex items-center justify-center gap-6 text-xl md:text-3xl font-light tracking-widest mt-8">
          <span>01</span>
          <span className="w-px h-8 bg-white/60"></span>
          <span>01</span>
          <span className="w-px h-8 bg-white/60"></span>
          <span>2025</span>
        </div>

        <p className="text-lg md:text-xl font-light italic mt-4 opacity-90">
          Hà Nội, Việt Nam
        </p>

        <div className="pt-12">
          <Button 
            size="lg" 
            className="bg-white/90 text-stone-900 hover:bg-white hover:scale-105 transition-all duration-300 rounded-full px-10 py-6 text-lg tracking-wider shadow-lg"
          >
            Xác nhận tham dự
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
