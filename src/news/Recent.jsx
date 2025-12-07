import PsNews from "../assets/psnews.png";

import { motion } from "framer-motion";

function RecentNews() {
  return (
    // 這裡用 calc，把 sticky navbar 80px 高度扣掉
    <div className="relative w-full h-[calc(100vh-70px)] overflow-hidden flex justify-center items-center bg-black">
      {/* 背景圖：淡入 + 微縮放 */}
      <motion.img
        src={PsNews}
        alt="news"
        className="w-full h-full object-cover opacity-90"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* SONY 藍紫漸層光暈 */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-blue-500/25 via-transparent to-purple-700/25 blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* 下方的介紹文字 + 按鈕 */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2
                   flex flex-col items-center text-center gap-6 px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
      >
        <p className="text-3xl font-medium text-blue-100 leading-relaxed max-w-4xl drop-shadow">
          無論是主機更新、熱門遊戲消息，還是周邊新品發表，
          <br />
          這裡為你整理最即時、最重要的 PlayStation 情報。
        </p>

        <motion.button
          className="text-3xl font-bold text-white px-10 py-2.5 rounded-2xl
                     bg-linear-to-r from-blue-500 to-purple-600 w-80
                     shadow-lg shadow-blue-500/40"
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 25px rgba(80,150,255,0.9)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          開始探索吧
        </motion.button>
      </motion.div>
    </div>
  );
}

export default RecentNews;
