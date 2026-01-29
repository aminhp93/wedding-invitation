import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export const ArchedImages = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 relative flex items-center justify-center">
                {/* Right Side: Double Arched Images */}
                <div className="relative w-full h-[500px] md:h-[650px] max-w-4xl flex items-center justify-center">
                    
                    {/* Background Circle Element */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-stone-200 rounded-full opacity-20 pointer-events-none scale-y-110"></div>

                    {/* Main Arch Image */}
                    <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className="relative z-10 w-[280px] md:w-[420px] h-[400px] md:h-[600px] rounded-t-full border-[12px] border-white shadow-2xl overflow-hidden"
                    >
                    <img src="/images/image-03.png" className="w-full h-full object-cover" alt="Main couple" />
                    </motion.div>

                    {/* Small Overlapping Arch Image */}
                    <motion.div 
                    initial={{ opacity: 0, x: 50, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="absolute right-0 bottom-0 z-20 w-[180px] md:w-[280px] h-[220px] md:h-[350px] rounded-t-full border-[10px] border-white shadow-2xl overflow-hidden"
                    >
                    <img src="/images/image-04.png" className="w-full h-full object-cover" alt="Couple smile" />
                    </motion.div>

                    {/* Decorative Icon Button */}
                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-lg z-30 opacity-70">
                        <ArrowUpRight size={24} className="text-stone-800" />
                    </div>
                </div>
            </div>
        </section>
    )
}
