import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <div className="relative bg-[#FFF9F6] min-h-[70vh] flex items-center justify-center overflow-hidden">
      
      {/* Top Left Floral */}
      <div className="absolute top-0 left-0 w-[400px] md:w-[600px] opacity-90 pointer-events-none z-20">
        <img src="/images/floral-corner.png" className="w-full h-auto" alt="" onError={(e) => (e.currentTarget.style.display = 'none')} />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:max-w-4xl lg:ml-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="space-y-4"
        >
          <p className="text-stone-500 font-serif text-sm md:text-base tracking-[0.5em] uppercase mb-8 opacity-80">Chúng tôi cưới</p>
          
          <div className="space-y-2">
             <h1 className="text-5xl md:text-7xl font-serif text-[#A03D1A] italic leading-[1] drop-shadow-sm flex flex-col items-center lg:items-start">
               <span className="block mb-4">Ngọc Minh</span>
               <span className="text-3xl md:text-4xl text-stone-400 block my-6 lg:ml-24">&</span>
               <span className="block">Linh Nhi</span>
             </h1>
          </div>
        </motion.div>
      </div>

      {/* Elegant Date Footer Block (Huge Faint Date) */}
      <div className="absolute bottom-12 left-1/2 lg:left-24 -translate-x-1/2 lg:translate-x-0 w-full lg:w-auto flex flex-col items-center lg:items-start z-0 opacity-20">
          <div className="flex items-center gap-10">
              <span className="text-5xl md:text-7xl font-serif text-[#A03D1A] font-light tracking-tighter">07</span>
              <div className="w-px h-20 bg-[#A03D1A]"></div>
              <span className="text-5xl md:text-7xl font-serif text-[#A03D1A] font-light tracking-tighter">03</span>
              <div className="w-px h-20 bg-[#A03D1A]"></div>
              <span className="text-5xl md:text-7xl font-serif text-[#A03D1A] font-light tracking-tighter">2026</span>
          </div>
      </div>
    </div>
  )
}


