import { motion } from 'framer-motion'

export const Invitation = () => {
    return (
        <section id="invitation" className="py-20 bg-white">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="container mx-auto px-4 text-center space-y-6"
            >
                <h2 className="text-3xl md:text-4xl font-serif text-[#A03D1A] italic">Trân trọng kính mời</h2>
                <p className="text-stone-500 font-serif italic text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                    Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng mình có thêm một niềm hạnh&nbsp;phúc!
                </p>
                <div className="w-16 h-px bg-stone-200 mx-auto"></div>
            </motion.div>
        </section>
    )
}
