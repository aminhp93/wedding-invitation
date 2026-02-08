import { motion } from 'framer-motion'

interface DateTimeLocationProps {
  timeLine?: string;
  day?: string;
  month?: string;
  year?: string;
  locationName?: string;
  address?: string;
  lunarDate?: string;
}

export const DateTimeLocation = ({
  timeLine = "11:00, Thứ Bảy",
  day = "07",
  month = "03",
  year = "2026",
  locationName = "W.JARDIN (Sảnh 3)",
  address = "Số 307 Nguyễn Văn Linh, Lê Chân, Hải Phòng",
  lunarDate
}: DateTimeLocationProps) => {
    return (
        <section className="py-24 bg-[#FFF9F6] relative overflow-hidden">
            {/* Floral Corners */}
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-[150px] md:w-[250px] pointer-events-none opacity-90">
                <img src="/images/top-flower.png" className="w-full h-auto object-contain" alt="" />
            </div>
            <div className="absolute bottom-0 right-0 w-[150px] md:w-[250px] pointer-events-none opacity-90">
                <img src="/images/right-flower.png" className="w-full h-auto object-contain" alt="" />
            </div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="container mx-auto px-4 text-center space-y-10 relative z-10"
            >
                <div>
                   <p className="text-xl md:text-2xl font-serif text-[#A03D1A] italic mb-6">{timeLine}</p>
                   <div className="flex justify-center items-center gap-6 md:gap-10">
                        <span className="text-4xl md:text-6xl font-serif text-[#A03D1A] font-light">{day}</span>
                        <div className="w-px h-16 bg-stone-200"></div>
                        <span className="text-4xl md:text-6xl font-serif text-[#A03D1A] font-light">{month}</span>
                        <div className="w-px h-16 bg-stone-200"></div>
                        <span className="text-4xl md:text-6xl font-serif text-[#A03D1A] font-light">{year}</span>
                   </div>
                   {lunarDate && (
                       <p className="mt-4 text-stone-500 font-serif italic text-sm md:text-base">
                           {lunarDate}
                       </p>
                   )}
                </div>

                <div className="space-y-4">
                    <p className="text-lg md:text-xl font-serif text-[#A03D1A] italic tracking-tight uppercase">{locationName}</p>
                    <p className="text-stone-500 font-serif italic text-sm">{address}</p>
                </div>
            </motion.div>
        </section>
    )
}
