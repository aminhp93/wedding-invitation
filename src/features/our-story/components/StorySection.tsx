import { motion } from 'framer-motion'
import * as React from "react"
import { ImageLightbox } from '@/components/ui/ImageLightbox'

export const StorySection = () => {
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null)
  return (
    <section id="story" className="py-24 bg-[#FCF9F6] text-stone-800 relative overflow-hidden min-h-[900px] flex items-center">
      <ImageLightbox 
          src={selectedImage} 
          isOpen={!!selectedImage} 
          onClose={() => setSelectedImage(null)} 
      />
      
      {/* Large Vertical LOVE STORY Text - Far Right */}
      <div className="absolute right-2 md:right-10 top-1/2 -translate-y-1/2 z-0 hidden lg:block">
          <span className="font-serif text-[#E8D7D0] text-[80px] md:text-[140px] leading-none tracking-widest opacity-60 select-none" style={{ writingMode: 'vertical-rl' }}>
              LOVE STORY
          </span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-5xl md:text-6xl text-[#A03D1A]" style={{ fontFamily: '"Pinyon Script", cursive' }}>Chuyện chúng mình</h2>
            <div className="w-24 h-px bg-[#A03D1A] mx-auto opacity-30"></div>
          </motion.div>

          {/* Narrative Text - Now Above Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-stone-500 font-light leading-relaxed space-y-6 text-lg max-w-2xl mx-auto"
          >
            <p>
              Tình yêu không phải là tìm thấy một người hoàn hảo, mà là học cách nhìn thấy những điều tuyệt vời từ một người không hoàn hảo. 
              Chúng tôi đã cùng nhau đi qua những cung bậc cảm xúc, từ những rung động đầu tiên đến lời hẹn ước trọn đời.
            </p>
          </motion.div>

          {/* Image - Now Below Text & Wider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative w-full max-w-6xl mx-auto"
          >
            <div 
                onClick={() => setSelectedImage("/images/chuyen chung minh 2.jpg")}
                className="relative aspect-[16/10] md:aspect-[3/2] rounded-t-[300px] overflow-hidden border-[8px] border-white shadow-2xl cursor-pointer"
            >
              <img 
                src="/images/chuyen chung minh 2.jpg" 
                className="w-full h-full object-cover object-top" 
                alt="Chuyện chúng mình" 
              />
            </div>
            
            {/* Subtle decorative flower overlapping image corner */}
            <div className="absolute -bottom-10 -right-10 w-32 md:w-48 opacity-30 -z-10 group-hover:scale-110 transition-transform">
                <img src="/images/right-flower.png" className="w-full h-auto rotate-[-15deg]" alt="" />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
