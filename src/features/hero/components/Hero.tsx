import { motion } from 'framer-motion'
import * as React from "react"
import { ImageLightbox } from '@/components/ui/ImageLightbox'

interface HeroProps {
  day?: string;
  month?: string;
  year?: string;
}

export const Hero = ({ day = "07", month = "03", year = "2026" }: HeroProps) => {
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null)
  return (
    <div className="relative bg-[#FFF9F6] min-h-[90vh] flex items-center justify-center overflow-hidden">
      <ImageLightbox 
          src={selectedImage} 
          isOpen={!!selectedImage} 
          onClose={() => setSelectedImage(null)} 
      />
      
      <div className="container mx-auto px-4 relative z-20 grid lg:grid-cols-2 gap-4 lg:gap-12 items-center h-full w-full max-w-7xl">
        
        {/* Left Content: Text & Date */}
        <div className="flex flex-col items-center justify-center space-y-12 pt-10 lg:pt-0 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center space-y-6 relative z-20"
            >
                <p className="text-stone-500 font-serif text-xs md:text-sm tracking-[0.4em] uppercase opacity-90">Chúng tôi cưới</p>
                
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl text-[#A03D1A] italic leading-none drop-shadow-sm flex flex-col items-center gap-2" style={{ fontFamily: '"Pinyon Script", cursive' }}>
                        <span className="block relative z-10">Ngọc Minh</span>
                        <span className="text-3xl md:text-4xl text-stone-400 block font-serif my-2">&</span>
                        <span className="block relative z-10">Linh Nhi</span>
                    </h1>
                </div>
            </motion.div>

             {/* Date Section - Big & Faint Background-like */}
            {/* Date Section - Big & Faint Background-like */}
            <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1, delay: 0.3 }}
                 className="flex items-center gap-4 md:gap-8 mt-12 select-none"
            >
                <div className="text-center">
                    <span className="block text-5xl md:text-7xl lg:text-[80px] font-serif text-[rgb(244,219,206)] font-light tracking-tighter">{day}</span>
                </div>
                <div className="w-px h-16 md:h-24 bg-[rgb(244,219,206)]"></div>
                <div className="text-center">
                    <span className="block text-5xl md:text-7xl lg:text-[80px] font-serif text-[rgb(244,219,206)] font-light tracking-tighter">{month}</span>
                </div>
                <div className="w-px h-16 md:h-24 bg-[rgb(244,219,206)]"></div>
                <div className="text-center">
                    <span className="block text-5xl md:text-7xl lg:text-[80px] font-serif text-[rgb(244,219,206)] font-light tracking-tighter">{year}</span>
                </div>
            </motion.div>
        </div>

        {/* Right Content: 2 Images Composition */}
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative h-[450px] lg:h-[700px] w-full mt-12 lg:mt-0 max-w-[400px] lg:max-w-none mx-auto lg:mx-0"
        >
            {/* Main Image (Back - Arch) */}
            <div 
                onClick={() => setSelectedImage("/images/chung toi cuoi 3.jpg")}
                className="absolute top-0 lg:top-10 left-4 lg:left-auto lg:right-48 w-[260px] h-[380px] lg:w-[450px] lg:h-[650px] rounded-t-full overflow-hidden shadow-2xl z-10 cursor-pointer"
            >
                <img 
                    src="/images/chung toi cuoi 3.jpg" 
                    alt="Bride" 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Secondary Image (Front - Arch - Bottom Right) */}
             <div 
                onClick={() => setSelectedImage("/images/chung toi cuoi 4.jpg ")}
                className="absolute bottom-0 right-4 lg:right-0 w-[180px] h-[260px] lg:w-[260px] lg:h-[380px] rounded-t-full overflow-hidden shadow-2xl z-20 cursor-pointer"
             >
                <img 
                    src="/images/chung toi cuoi 4.jpg " 
                    alt="Couple" 
                     className="w-full h-full object-cover"
                />
            </div>
        </motion.div>
      </div>

       {/* Decorative Elements */}
       <div className="absolute top-0 left-0 w-[300px] md:w-[400px] pointer-events-none z-30">
        <img src="/images/top-flower.png" className="w-full h-auto" alt="" />
      </div>
      <div className="absolute bottom-0 right-0 w-[250px] md:w-[350px] pointer-events-none z-30 translate-y-1/4 translate-x-1/4">
        <img src="/images/right-flower.png" className="w-full h-auto" alt="" />
      </div>
    </div>
  )
}


