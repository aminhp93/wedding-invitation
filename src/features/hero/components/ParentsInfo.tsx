import { motion } from "framer-motion";

interface ParentInfo {
  fatherName: string;
  motherName: string;
}

interface ParentsInfoProps {
  brideFamily?: ParentInfo;
  groomFamily?: ParentInfo;
}

export const ParentsInfo = ({
  brideFamily = {
    fatherName: "Ông Trịnh Văn Vịnh",
    motherName: "Bà Cáp Thị Thuý",
  },
  groomFamily = {
    fatherName: "Ông Phạm Minh Tân",
    motherName: "Bà Bùi Thị Ngọc Hiền",
  },
}: ParentsInfoProps) => {
  return (
    <section className="py-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-24">
          {/* Nhà Gái */}
          <div className="text-center space-y-4">
            <h3 className="text-xl md:text-2xl font-serif text-[#A03D1A] italic mb-4">
              Nhà Gái
            </h3>
            <div className="space-y-2">
              <p className="text-stone-600 font-serif text-base md:text-lg">
                {brideFamily.fatherName}
              </p>
              <p className="text-stone-600 font-serif text-base md:text-lg">
                {brideFamily.motherName}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-24 bg-stone-200"></div>
          <div className="md:hidden w-16 h-px bg-stone-200"></div>

          {/* Nhà Trai */}
          <div className="text-center space-y-4">
            <h3 className="text-xl md:text-2xl font-serif text-[#A03D1A] italic mb-4">
              Nhà Trai
            </h3>
            <div className="space-y-2">
              <p className="text-stone-600 font-serif text-base md:text-lg">
                {groomFamily.fatherName}
              </p>
              <p className="text-stone-600 font-serif text-base md:text-lg">
                {groomFamily.motherName}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
