import { motion } from 'framer-motion'

export const DateTimeLocation = () => {
    return (
        <section className="py-24 bg-[#FFF9F6] relative overflow-hidden">
            {/* Floral Corners */}
            <div className="absolute top-0 left-0 w-64 opacity-50 pointer-events-none">
                <img src="/images/floral-corner.png" className="w-full h-auto" alt="" onError={(e) => (e.currentTarget.style.display = 'none')} />
            </div>
            <div className="absolute bottom-0 right-0 w-64 opacity-50 pointer-events-none rotate-180">
                <img src="/images/floral-corner.png" className="w-full h-auto" alt="" onError={(e) => (e.currentTarget.style.display = 'none')} />
            </div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="container mx-auto px-4 text-center space-y-10 relative z-10"
            >
                <div>
                   <p className="text-xl md:text-2xl font-serif text-[#A03D1A] italic mb-6">11:00, Thứ Bảy</p>
                   <div className="flex justify-center items-center gap-6 md:gap-10">
                        <span className="text-4xl md:text-6xl font-serif text-[#A03D1A] font-light">07</span>
                        <div className="w-px h-16 bg-stone-200"></div>
                        <span className="text-4xl md:text-6xl font-serif text-[#A03D1A] font-light">03</span>
                        <div className="w-px h-16 bg-stone-200"></div>
                        <span className="text-4xl md:text-6xl font-serif text-[#A03D1A] font-light">2026</span>
                   </div>
                </div>

                <div className="space-y-4">
                    <p className="text-lg md:text-xl font-serif text-[#A03D1A] italic tracking-tight uppercase">W.JARDIN (Sảnh 2)</p>
                    <p className="text-stone-500 font-serif italic text-sm">Số 307 Nguyễn Văn Linh, Lê Chân, Hải Phòng</p>
                </div>
            </motion.div>
        </section>
    )
}
