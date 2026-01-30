import { motion } from 'framer-motion'
import * as React from "react"
import { ImageLightbox } from '@/components/ui/ImageLightbox'

export const ArchedImages = () => {
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null)
    return (
        <section className="py-20 bg-[#FFF9F6] overflow-hidden relative min-h-[800px] flex items-center justify-center">
            <ImageLightbox 
                src={selectedImage} 
                isOpen={!!selectedImage} 
                onClose={() => setSelectedImage(null)} 
            />
            
            {/* Large Vertical GROOM Text - Far Left */}
            <div className="absolute left-2 md:left-10 top-1/2 -translate-y-1/2 z-0 hidden md:block">
                <span className="font-serif text-[#E8D7D0] text-[80px] md:text-[140px] leading-none tracking-widest opacity-60 select-none" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                    GROOM
                </span>
            </div>

            {/* Large Vertical BRIDE Text - Far Right */}
            <div className="absolute right-2 md:right-10 top-1/2 -translate-y-1/2 z-0 hidden md:block">
                <span className="font-serif text-[#E8D7D0] text-[80px] md:text-[140px] leading-none tracking-widest opacity-60 select-none" style={{ writingMode: 'vertical-rl' }}>
                    BRIDE
                </span>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Double Arched Images Side-by-Side - Design 5 */}
                <div className="w-full max-w-5xl mx-auto flex justify-center items-start gap-4 md:gap-8">
                    
                    {/* Groom Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center space-y-4 md:space-y-6"
                    >   
                         {/* Image */}
                         <div 
                            onClick={() => setSelectedImage("/images/chu re.jpg")}
                            className="relative w-[48vw] max-w-[280px] h-[400px] md:h-[550px] rounded-t-full overflow-hidden border-[2px] border-[#A03D1A] shadow-xl cursor-pointer"
                         >
                            <img src="/images/chu re.jpg" className="w-full h-full object-cover scale-x-[-1]" alt="Groom" />
                         </div>

                        {/* Text Below */}
                        <div className="text-center space-y-4 flex flex-col items-center relative">
                             <p className="font-serif text-[#5c5c5c] text-lg md:text-xl">Chú rể</p> 
                             
                             {/* Name with Flower Background */}
                             <div className="relative">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 md:w-48 opacity-60 -z-10">
                                     <img src="/images/right-flower.png" className="w-full h-full object-contain rotate-12" alt="" />
                                </div>
                                <h3 className="text-4xl md:text-6xl text-[#A03D1A] flex flex-col gap-1 leading-[0.9]" style={{ fontFamily: '"Pinyon Script", cursive' }}>
                                    <span>Ngọc</span>
                                    <span>Minh</span>
                                </h3>
                             </div>
                        </div>
                    </motion.div>

                    {/* Bride Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center space-y-4 md:space-y-6"
                    >
                         {/* Image */}
                         <div 
                            onClick={() => setSelectedImage("/images/co dau.jpg")}
                            className="relative w-[48vw] max-w-[280px] h-[400px] md:h-[550px] rounded-t-full overflow-hidden border-[2px] border-[#A03D1A] shadow-xl cursor-pointer"
                         >
                            <img src="/images/co dau.jpg" className="w-full h-full object-cover" alt="Bride" />
                         </div>

                         {/* Text Below */}
                        <div className="text-center space-y-4 flex flex-col items-center relative">
                            <p className="font-serif text-[#5c5c5c] text-lg md:text-xl">Cô dâu</p>
                            
                            {/* Name with Flower Background */}
                            <div className="relative">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 md:w-48 opacity-60 -z-10">
                                     <img src="/images/right-flower.png" className="w-full h-full object-contain -rotate-12 scale-x-[-1]" alt="" />
                                </div>
                                <h3 className="text-4xl md:text-6xl text-[#A03D1A] flex flex-col gap-1 leading-[0.9]" style={{ fontFamily: '"Pinyon Script", cursive' }}>
                                    <span>Linh</span>
                                    <span>Nhi</span>
                                </h3>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

