import { motion } from 'framer-motion'

const images = [
  '/images/image-01.png',
  '/images/image-02.png',
  '/images/image-03.png',
  '/images/image-04.png',
  '/images/image-05.png',
  '/images/image-01.png', // Repeat or find another for 2x3
]

export const Album = () => {
    return (
        <section id="album" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-[150px] md:w-[250px] pointer-events-none opacity-40">
                <img src="/images/top-flower.png" className="w-full h-auto" alt="" />
            </div>
            <div className="absolute bottom-0 right-0 w-[150px] md:w-[250px] pointer-events-none opacity-40">
                <img src="/images/right-flower.png" className="w-full h-auto" alt="" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl text-[#A03D1A]" style={{ fontFamily: '"Pinyon Script", cursive' }}>Album Ảnh Cưới</h2>
                    <div className="w-24 h-px bg-[#A03D1A] mx-auto mt-4 opacity-30"></div>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {images.map((src, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="aspect-[4/5] rounded-lg overflow-hidden border-[6px] border-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group"
                    >
                        <img 
                            src={src} 
                            alt={`Wedding Photo ${index + 1}`} 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                            loading="lazy"
                        />
                    </motion.div>
                ))}
                </div>
            </div>
        </section>
    )
}
