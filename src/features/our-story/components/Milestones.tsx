import { motion } from 'framer-motion'

const milestones = [
  {
    title: "Lần đầu gặp nhau",
    description: "Khoảnh khắc định mệnh khi hai tâm hồn tìm thấy nhau giữa dòng đời hối hả.",
    date: "22 | 02 | 2022",
    image: "/images/cot moc 01.jpg",
  },
  {
    title: "Chuyến đi đầu tiên",
    description: "Cùng nhau đi đến những chân trời mới, dệt nên những kỷ niệm ngọt ngào nhất.",
    date: "10 | 03 | 2023",
    image: "/images/cot moc 02.jpg",
  },
  {
    title: "Hẹn ước trọn đời",
    description: "Giây phút thiêng liêng khi lời hứa trăm năm được trao đi, bắt đầu một hành trình mới.",
    date: "25 | 10 | 2025",
    image: "/images/cot moc 03.jpg",
  }
]

export const Milestones = () => {
  return (
    <section id="milestones" className="py-24 bg-white text-stone-800 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl text-[#A03D1A]" style={{ fontFamily: '"Pinyon Script", cursive' }}>Cột mốc</h2>
          <div className="w-24 h-px bg-[#A03D1A] mx-auto opacity-30"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Unified Block: Image + Content */}
              <div className="space-y-6 flex flex-col items-center text-center">
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-full">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle overlay gradient to tie image and text together if needed */}
                  <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white/20 to-transparent"></div>
                </div>
                
                <div className="px-4 space-y-3">
                  <h3 className="text-4xl text-[#A03D1A]" style={{ fontFamily: '"Pinyon Script", cursive' }}>{item.title}</h3>
                  <div className="text-xl font-light tracking-[0.2em] text-[#D4A373] opacity-80">
                    {item.date}
                  </div>
                  <p className="text-sm font-light leading-relaxed text-stone-500 max-w-[280px] mx-auto">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
