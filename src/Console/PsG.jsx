import { motion } from "framer-motion";

function PlayStationIntro({ img, textTitle, text }) {
  return (
    /* ✅ h-[1600px] / h-[1200px] were enormous — replaced with min-h-screen and auto sizing */
    <div className="w-full min-h-screen flex flex-col justify-center items-center text-center relative bg-linear-to-b from-blue-200 to-blue-300 overflow-hidden py-20 px-6">

      {/* Console image */}
      <motion.img
        src={img}
        alt={textTitle}
        className="w-full max-w-xs md:max-w-md lg:max-w-lg object-contain opacity-95"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        animate={{ y: [0, -6, 0] }}
        transition={{
          opacity: { duration: 1, ease: "easeOut" },
          scale:   { duration: 1, ease: "easeOut" },
          y:       { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Glow */}
      <div className="absolute w-72 h-72 bg-blue-100 opacity-20 rounded-full blur-3xl pointer-events-none" />

      {/* Text */}
      <motion.div
        className="mt-10 flex flex-col gap-4 max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        viewport={{ once: true }}
      >
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-900">{textTitle}</h1>
        <p className="text-lg md:text-2xl text-blue-700 leading-relaxed">{text}</p>
      </motion.div>
    </div>
  );
}

export default PlayStationIntro;
