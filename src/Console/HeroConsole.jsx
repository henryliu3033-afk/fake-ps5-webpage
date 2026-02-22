import { motion } from "framer-motion";
import PsImage from "../assets/ps-evo.png";

function HeroIntro() {
  return (
    <div className="relative w-full h-[calc(100vh-64px)] overflow-hidden bg-black">
      {/* Background image */}
      <motion.img
        src={PsImage}
        alt="ps evolution"
        className="w-full h-full object-cover opacity-90"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 via-transparent to-purple-800/10 pointer-events-none" />

      {/* Text — ✅ text-6xl → responsive clamp via Tailwind */}
      <div className="absolute top-4 md:top-8 w-full flex flex-col items-center text-center px-4 md:px-6 gap-4 md:gap-6">
        <motion.h1
          className="text-xl md:text-3xl lg:text-5xl font-extrabold tracking-wide drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          五世代傳承，只為成就現在的 PS5
        </motion.h1>

        <motion.p
          className="text-base md:text-xl lg:text-3xl max-w-3xl leading-relaxed drop-shadow"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          從 PS1 的經典回憶，到 PS5 的次世代體驗，PlayStation 用五個世代陪你一起成長。
          每一次跨代，都是畫面、性能與創意的全面升級，讓「遊戲」變得更純粹、更震撼。
        </motion.p>

        <motion.div
          className="h-1 rounded-full bg-linear-to-r from-blue-400 to-white shadow-lg"
          initial={{ width: 0 }}
          animate={{ width: "10rem" }}
          transition={{ duration: 1.2, delay: 1.3 }}
        />
      </div>
    </div>
  );
}

export default HeroIntro;
