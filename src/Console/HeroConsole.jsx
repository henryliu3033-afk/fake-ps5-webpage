import { motion } from "framer-motion";
import PsImage from "../assets/ps-evo.png";

function HeroIntro() {
  return (
    <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden bg-black gap-6 ">
      {/* 背景淡入 */}
      <motion.img
        src={PsImage}
        alt="ps evolution"
        className="w-full h-full object-cover opacity-90"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      />

      {/* Sony 光線感漸層 */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 via-transparent to-purple-800/10 pointer-events-none"></div>

      {/* 文字區（置中頂部） */}
      <div className="absolute top-10 w-full flex flex-col items-center text-center text-blue-700 select-none space-y-10 gap-6">
        {/* 主標題 */}
        <motion.h1
          className="text-6xl font-extrabold tracking-wide drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          五世代傳承，只為成就現在的 PS5
        </motion.h1>

        {/* 副標 */}
        <motion.p
          className="text-3xl max-w-4xl leading-relaxed drop-shadow"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          從 PS1 的經典回憶，到 PS5 的次世代體驗，PlayStation
          用五個世代陪你一起成長。
          每一次跨代，都是畫面、性能與創意的全面升級，讓「遊戲」變得更純粹、更震撼。
        </motion.p>

        {/* Sony Style 藍白光條 */}
        <motion.div
          className="h-1 rounded-full bg-linear-to-r from-blue-400 to-white shadow-lg"
          style={{ width: "0rem" }}
          initial={{ width: 0 }}
          animate={{ width: "10rem" }}
          transition={{ duration: 1.2, delay: 1.3 }}
        />
      </div>
    </div>
  );
}

export default HeroIntro;
