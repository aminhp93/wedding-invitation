import { motion } from 'framer-motion'
import * as React from "react"
import { ImageLightbox } from '@/components/ui/ImageLightbox'

const images = [
  '/images/album-01.jpg',
  '/images/album-02.jpg',
  '/images/album-03.jpg',
  '/images/album-04.jpg',
  '/images/album-05.jpg',
  '/images/album-06.jpg', // Repeat or find another for 2x3
]

export const Album = () => {
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null)

    return (
        <section id="album" className="py-24 bg-white relative overflow-hidden">
            {/* ... simplified for chunk ... */}
            <ImageLightbox 
                src={selectedImage} 
                isOpen={!!selectedImage} 
                onClose={() => setSelectedImage(null)} 
            />

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
                        onClick={() => setSelectedImage(src)}
                        className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group"
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
