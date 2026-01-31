import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import * as React from "react"
import { CalendarDialog } from './CalendarDialog'

const events = [
  {
    title: "ĂN HỎI",
    time: "10:00 AM",
    date: "21 | 02 | 2026",
    address: "Tổ dân phố Đồng Sau, phường Tiền Phong, tỉnh Bắc Ninh",
    icon: "/images/icon-rings.png", 
    mapLink: "https://www.google.com/maps/place/Ch%C3%B9a+Di%C3%AAn+Kh%C3%A1nh+-+Ch%C3%B9a+B%C3%BAn/@21.2582736,106.182414,17z/data=!3m1!4b1!4m6!3m5!1s0x3135096531853d45:0xe597b4700078027b!8m2!3d21.2582736!4d106.182414!16s%2Fg%2F11ghj7vj6q"
  },
  {
    title: "ĐÓN DÂU",
    time: "08:00 AM",
    date: "28 | 02 | 2026",
    address: "Tổ dân phố Đồng Sau, phường Tiền Phong, tỉnh Bắc Ninh",
    icon: "/images/icon-car.png",
    mapLink: "https://www.google.com/maps/place/Ch%C3%B9a+Di%C3%AAn+Kh%C3%A1nh+-+Ch%C3%B9a+B%C3%BAn/@21.2582736,106.182414,17z/data=!3m1!4b1!4m6!3m5!1s0x3135096531853d45:0xe597b4700078027b!8m2!3d21.2582736!4d106.182414!16s%2Fg%2F11ghj7vj6q"
  },
  {
    title: "TIỆC CƯỚI",
    time: "10:00 AM",
    date: "07 | 03 | 2026",
    address: "W.JARDIN (Sảnh 3), Số 307 Nguyễn Văn Linh, Lê Chân, Hải Phòng",
    icon: "/images/icon-cake.png",
    mapLink: "https://www.google.com/maps/place/Trung+t%C3%A2m+ti%E1%BB%87c+c%C6%B0%E1%BB%9Bi+W.JARDIN/@20.8407481,106.6669986,17z/data=!3m1!4b1!4m6!3m5!1s0x314a7af2760f38df:0x9da9d68b2098674c!8m2!3d20.8407481!4d106.6669986!16s%2Fg%2F11h9026n6w"
  }
]

export const Events = () => {
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false)
  const [selectedEvent, setSelectedEvent] = React.useState<typeof events[0] | null>(null)

  return (
    <section className="py-24 bg-[#FCF9F6] border-t border-stone-100">
      <CalendarDialog 
        open={isCalendarOpen} 
        onOpenChange={setIsCalendarOpen} 
        event={selectedEvent}
      />
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

                <p className="text-stone-500 font-light text-sm mb-8 px-4 max-w-[260px]">
                    {event.address}
                </p>

                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    className="border-[#8B4513] text-[#8B4513] hover:bg-[#8B3513] hover:text-white rounded-none px-6 shadow-none"
                    onClick={() => window.open(event.mapLink, '_blank')}
                  >
                    CHỈ ĐƯỜNG
                  </Button>
                  <Button 
                    variant="secondary"
                    onClick={() => {
                        setSelectedEvent(event)
                        setIsCalendarOpen(true)
                    }}
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

