import { motion } from 'framer-motion'

const milestones = [
  {
    title: "Lần đầu gặp nhau",
    description: "Mỗi lời chúc phúc và sự hiện diện của bạn trong ngày đặc biệt này chính là món quà vô giá với chúng tôi. Hãy cùng chúng tôi tận hưởng niềm vui, tiếng cười và sự ấm áp trong ngày hạnh phúc nhất này!",
    date: "18 | 09 | 2023",
    image: "/images/image-02.png", // Reusing existing assets
  },
  {
    title: "Chuyến đi đầu tiên",
    description: "Mỗi lời chúc phúc và sự hiện diện của bạn trong ngày đặc biệt này chính là món quà vô giá với chúng tôi. Hãy cùng chúng tôi tận hưởng niềm vui, tiếng cười và sự ấm áp trong ngày hạnh phúc nhất này!",
    date: "18 | 09 | 2024",
    image: "/images/image-03.png",
  },
  {
    title: "Hẹn ước trọn đời",
    description: "Mỗi lời chúc phúc và sự hiện diện của bạn trong ngày đặc biệt này chính là món quà vô giá với chúng tôi. Hãy cùng chúng tôi tận hưởng niềm vui, tiếng cười và sự ấm áp trong ngày hạnh phúc nhất này!",
    date: "18 | 09 | 2025",
    image: "/images/image-04.png",
  }
]

export const Milestones = () => {
  return (
    <section className="py-24 bg-[#FCF9F6] text-stone-800 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-serif text-center mb-20 text-[#8B4513] italic">Cột mốc</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-full aspect-[4/5] mb-8">
                {/* Arch frame effect using clip-path or rounded-t-full */}
                <div className="w-full h-full overflow-hidden rounded-t-full border-[10px] border-white shadow-xl">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative flowers could be added here as small absolute imgs */}
              </div>
              
              <h3 className="text-3xl font-serif mb-4 text-[#8B4513] italic">{item.title}</h3>
              <p className="text-sm font-light leading-relaxed text-stone-500 mb-6 max-w-[280px]">
                {item.description}
              </p>
              <div className="text-2xl font-light tracking-[0.2em] text-[#D4A373] opacity-60">
                {item.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
