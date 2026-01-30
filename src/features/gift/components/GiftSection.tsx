import { motion } from 'framer-motion'

export const GiftSection = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="container mx-auto px-4 max-w-6xl"
            >
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
                    
                    {/* Left: Groom QR */}
                    <div className="flex-1 flex flex-col items-center">
                        <h3 className="text-2xl font-serif text-[#8B4513] italic mb-6">Mừng cưới đến chú rể</h3>
                        <div className="flex items-center gap-6">
                            <div className="w-32 h-40 bg-white shadow-md rounded-lg overflow-hidden border border-stone-100 p-1 flex items-center justify-center">
                                <img 
                                    src="/images/ngan hang chu re.jpg" 
                                    className="w-full h-full object-contain" 
                                    alt="QR Chú rể" 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Center: Image */}
                    <div className="flex-shrink-0 w-80 h-[480px] relative z-20">
                        <div className="w-full h-full rounded-t-full border-[8px] border-white shadow-2xl overflow-hidden">
                            <img 
                                src="/images/mung cuoi.jpg" 
                                alt="Couple" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                    </div>

                    {/* Right: Bride QR */}
                    <div className="flex-1 flex flex-col items-center">
                        <h3 className="text-2xl font-serif text-[#8B4513] italic mb-6">Mừng cưới đến cô dâu</h3>
                        <div className="flex items-center gap-6">
                            <div className="w-32 h-40 bg-white shadow-md rounded-lg overflow-hidden border border-stone-100 p-1 flex items-center justify-center">
                                <img 
                                    src="/images/ngan hang co dau.jpeg" 
                                    className="w-full h-full object-contain" 
                                    alt="QR Cô dâu" 
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-5xl md:text-6xl text-[#A03D1A] mb-8" style={{ fontFamily: '"Pinyon Script", cursive' }}>Mừng cưới</h2>
                    <p className="text-stone-500 font-light max-w-lg mx-auto leading-relaxed">
                        Nếu có thể, bạn hãy tới tham dự Đám cưới, chung vui và Mừng cưới trực tiếp cho chúng mình nhé ^^. Cảm ơn bạn rất nhiều!
                    </p>
                </div>
            </motion.div>
        </section>
    )
}
