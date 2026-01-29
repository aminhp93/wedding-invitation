import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'

export const HeroActionButtons = ({ onRsvpTrigger }: { onRsvpTrigger: () => void }) => {
    return (
        <section className="py-12 bg-white">
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="container mx-auto px-4 flex flex-col items-center space-y-6"
            >
                <p className="text-stone-400 font-serif italic text-sm text-center mb-4">
                    Sự hiện diện của bạn là niềm vinh dự của chúng tôi!
                </p>
                <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center">
                    <Button 
                        onClick={() => document.getElementById('guestbook')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-[#A03D1A] hover:bg-[#8B3516] text-white rounded-full px-10 py-6 h-auto uppercase tracking-[0.2em] text-[10px] shadow-lg transition-transform hover:scale-105"
                    >
                        GỬI LỜI CHÚC
                    </Button>
                    <Button 
                        onClick={onRsvpTrigger}
                        variant="secondary"
                        className="bg-[#F5E6DA] text-[#8B4513] hover:bg-[#EEDDCC] rounded-full px-10 py-6 h-auto uppercase tracking-[0.2em] text-[10px] transition-transform hover:scale-105"
                    >
                        XÁC NHẬN THAM DỰ
                    </Button>
                </div>
            </motion.div>
        </section>
    )
}
