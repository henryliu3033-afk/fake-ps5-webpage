import ProductsIntroImage from "../assets/productsintro.png";
import React, { useState } from "react";
import { motion } from "framer-motion";

function ProductsIntro() {
  const [isBlur, setIsBlur] = useState(true);
  return (
    <div className="relative w-full h-[95vh] mt-20 overflow-hidden">
      {/* 背景图 */}
      <motion.img
        src={ProductsIntroImage}
        alt="ps5 accessories"
        className="w-full h-full object-cover opacity-90"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{
          filter: isBlur ? "blur(8px)" : "blur(0px)",
          opacity: isBlur ? 0.85 : 1,
          scale: isBlur ? 1.1 : 1,
        }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      />

      {/* 玻璃拟态层 */}
      <div className="absolute inset-0 backdrop-blur-[20px] bg-white/10"></div>

      {/* Sony 蓝色光影 */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-200/20 via-transparent to-blue-500/30 pointer-events-none" />

      {/* 玻璃卡片 */}
      <motion.div
        className="
          absolute top-32 left-1/2 -translate-x-1/2
          w-[70%] max-w-4xl
          bg-white/20 backdrop-blur-xl
          rounded-3xl border border-white/30
          shadow-[0_0_50px_rgba(0,0,0,0.2)]
          p-10 text-center
        "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
      >
        <h1 className="text-5xl font-extrabold text-blue-900 drop-shadow-lg">
          PS5 周邊裝備 — 次時代科技的延伸
        </h1>

        <p className="text-2xl text-blue-800 mt-6 leading-relaxed">
          從 Tempest 3D 音效、DualSense 觸覺回饋,到 PS5 高清追蹤設備,
          <br />
          每一件周邊都為了提升沉浸感而誕生
        </p>

        {/* 底部蓝光条 */}
        <motion.div
          className="h-1 mt-8 bg-linear-to-r from-blue-400 to-blue-600 rounded-full shadow-lg"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.4, delay: 0.8 }}
        />
        {/* 切换按钮 */}
        <button
          onClick={() => setIsBlur(!isBlur) && to}
          className="
            mt-10 text-2xl px-8 py-3 rounded-xl font-bold w-2xs 
            bg-blue-200 text-blue-700 shadow-lg hover:bg-blue-300
            transition-all duration-300
          "
        >
          Lets Go
        </button>
      </motion.div>
    </div>
  );
}

export default ProductsIntro;
