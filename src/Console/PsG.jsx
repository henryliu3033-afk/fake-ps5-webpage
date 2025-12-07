import { motion } from "framer-motion";

function PlayStationIntro({ img, textTitle, text }) {
  return (
    <>
      <div className="w-full h-[1600px] flex justify-center items-center text-center relative bg-linear-to-b from-blue-200 to-blue-300 overflow-hidden">
        {/* 主机图片 */}
        <motion.img
          src={img}
          alt={textTitle}
          className="h-[1200px] object-contain opacity-95"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ y: [0, -6, 0] }}
          transition={{
            opacity: { duration: 1, ease: "easeOut" },
            scale: { duration: 1, ease: "easeOut" },

            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        {/* 光圈（怀旧回忆效果） */}
        <div className="absolute w-[600px] h-[600px] bg-blue-100 opacity-20 rounded-full blur-3xl"></div>

        {/* 文案 */}
        <motion.div
          className="absolute bottom-28 flex flex-col gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-bold text-blue-900">{textTitle}</h1>
          <p className="text-3xl text-blue-700 max-w-3xl leading-relaxed">
            {text}
          </p>
        </motion.div>
      </div>
    </>
  );
}
export default PlayStationIntro;
