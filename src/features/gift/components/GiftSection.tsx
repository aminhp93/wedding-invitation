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
                            <div className="w-24 h-24 bg-stone-100 flex items-center justify-center font-mono text-xs text-stone-400">QR CODE</div>
                            <div className="text-left space-y-1">
                                <p className="text-xs uppercase tracking-widest text-stone-400">Ngân hàng A</p>
                                <p className="text-sm font-serif">Ngọc Minh</p>
                                <p className="text-sm tracking-widest">123456789</p>
                            </div>
                        </div>
                    </div>

                    {/* Center: Image */}
                    <div className="flex-shrink-0 w-80 h-[480px] relative z-20">
                        <div className="w-full h-full rounded-t-full border-[8px] border-white shadow-2xl overflow-hidden">
                            <img 
                                src="/images/image-05.png" 
                                alt="Couple" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                    </div>

                    {/* Right: Bride QR */}
                    <div className="flex-1 flex flex-col items-center">
                        <h3 className="text-2xl font-serif text-[#8B4513] italic mb-6">Mừng cưới đến cô dâu</h3>
                        <div className="flex items-center gap-6">
                            <div className="text-right space-y-1">
                                <p className="text-xs uppercase tracking-widest text-stone-400">Ngân hàng B</p>
                                <p className="text-sm font-serif">Linh Nhi</p>
                                <p className="text-sm tracking-widest">987654321</p>
                            </div>
                            <div className="w-24 h-24 bg-stone-100 flex items-center justify-center font-mono text-xs text-stone-400">QR CODE</div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-5xl md:text-6xl font-serif text-[#8B4513] italic mb-8">Mừng cưới</h2>
                    <p className="text-stone-500 font-light max-w-lg mx-auto leading-relaxed">
                        Nếu có thể, bạn hãy tới tham dự Đám cưới, chung vui và Mừng cưới trực tiếp cho chúng mình nhé ^^. Cảm ơn bạn rất nhiều!
                    </p>
                </div>
            </motion.div>
        </section>
    )
}
