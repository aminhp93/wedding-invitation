import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import * as React from "react"
import { CalendarDialog } from './CalendarDialog'

const events = [
  {
    title: "ĂN HỎI",
    time: "10:00 AM",
    date: "21 | 02 | 2026",
    address: "Nhà riêng: Tại số 62B Kiều Sơn, Hải An, Hải Phòng",
    icon: "/images/icon-rings.png", 
  },
  {
    title: "ĐÓN DÂU",
    time: "08:00 AM",
    date: "28 | 02 | 2026",
    address: "Nhà riêng: Tại Chùa gần Đồng Sau, Đồng Sơn, Thành phố Bắc Giang, Tỉnh Bắc Giang",
    icon: "/images/icon-car.png",
  },
  {
    title: "TIỆC CƯỚI",
    time: "10:00 AM",
    date: "07 | 03 | 2026",
    address: "TRUNG TÂM TIỆC CƯỚI W.JARDIN (Sảnh 3), Số 307 Nguyễn Văn Linh, Lê Chân, Hải Phòng",
    icon: "/images/icon-cake.png",
  }
]

export const Events = () => {
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false)

  return (
    <section className="py-24 bg-[#FCF9F6] border-t border-stone-100">
      <CalendarDialog open={isCalendarOpen} onOpenChange={setIsCalendarOpen} />
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl text-center mb-24 text-[#A03D1A]" style={{ fontFamily: '"Pinyon Script", cursive' }}>Sự kiện</h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-[#8B4513]/20 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Rendering */}
                <div className="w-32 h-32 mb-8 relative z-10 flex items-center justify-center">
                      <img 
                        src={event.icon} 
                        alt={event.title} 
                        className="w-full h-full object-contain"
                      />

                </div>

                <div className="bg-[#8B4513] text-white px-8 py-2 rounded-full mb-8 tracking-[0.2em] transform -translate-y-4 group-hover:scale-110 transition-transform">
                  {event.title}
                </div>

                <div className="text-xl md:text-2xl font-light tracking-widest text-[#8B4513] mb-4">
                    {event.time} — {event.date}
                </div>

                <p className="text-stone-500 font-light text-sm mb-8 px-4 max-w-[240px]">
                    {event.address}
                </p>

                <div className="flex gap-4">
                  <Button variant="outline" className="border-[#8B4513] text-[#8B4513] hover:bg-[#8B3513] hover:text-white rounded-none px-6 shadow-none">
                    CHỈ ĐƯỜNG
                  </Button>
                  <Button 
                    variant="secondary"
                    onClick={() => setIsCalendarOpen(true)}
                    className="bg-[#F5E6DA] text-[#8B4513] hover:bg-[#EEDDCC] rounded-none px-6 shadow-none"
                  >
                    THÊM VÀO LỊCH
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

