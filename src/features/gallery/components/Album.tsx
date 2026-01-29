import { motion } from 'framer-motion'

const images = [
  '/images/image-01.png',
  '/images/image-02.png',
  '/images/image-03.png',
  '/images/image-04.png',
  '/images/image-05.png',
]

export const Album = () => {
    return (
        <section id="album" className="py-24 bg-white">
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-stone-900">Album Ảnh Cưới</h2>
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
               {images.map((src, index) => (
                   <motion.div 
                     key={index}
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                     viewport={{ once: true }}
                     className={`rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group ${index % 3 === 0 ? 'md:row-span-2' : ''}`}
                   >
                     <img 
                        src={src} 
                        alt={`Wedding Photo ${index + 1}`} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                        loading="lazy"
                     />
                   </motion.div>
               ))}
            </div>
        </section>
    )
}
