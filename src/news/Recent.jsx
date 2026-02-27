import { useNavigate } from "react-router-dom";
import PsNews from "../assets/psnews.png";
import PsNewsMobile from "../assets/ps5-news.png";
import { motion } from "framer-motion";

function RecentNews() {
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-[calc(100vh-70px)] overflow-hidden flex justify-center items-center bg-black">

      {/* Desktop image — landscape, original */}
      <motion.img
        src={PsNews}
        alt="news"
        className="hidden md:block w-full h-full object-cover opacity-90"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Mobile image — portrait */}
      <motion.img
        src={PsNewsMobile}
        alt="news mobile"
        className="md:hidden w-full h-full object-cover object-center opacity-90"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Desktop text + button — original layout */}
      <motion.div
        className="hidden md:flex absolute bottom-20 left-1/2 -translate-x-1/2 flex-col items-center text-center gap-6 px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
      >
        <p className="text-3xl font-medium text-blue-100 leading-relaxed max-w-4xl drop-shadow">
          無論是主機更新、熱門遊戲消息，還是周邊新品發表
          <br />
          這裡為你整理最即時、最重要的 PlayStation 情報
        </p>
        <motion.button
          className="text-3xl font-bold text-white px-10 py-2.5 rounded-2xl bg-linear-to-r from-blue-500 to-purple-600 w-80 shadow-lg shadow-blue-500/40 cursor-pointer"
          whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(80,150,255,0.9)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/console", { replace: true })}
        >
          開始探索吧
        </motion.button>
      </motion.div>

      {/* Mobile text + button — compact layout */}
      <motion.div
        className="md:hidden absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-center gap-4 w-full px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
      >
        <p className="text-base font-medium text-blue-100 leading-relaxed drop-shadow">
          無論是主機更新、熱門遊戲消息，還是周邊新品發表
          <br />
          這裡為你整理最即時、最重要的 PlayStation 情報
        </p>
        <motion.button
          className="text-base font-bold text-white px-6 py-2 rounded-2xl w-full max-w-xs bg-linear-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/40 cursor-pointer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/console", { replace: true })}
        >
          開始探索吧
        </motion.button>
      </motion.div>

    </div>
  );
}

export default RecentNews;
