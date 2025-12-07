import { useEffect, useState } from "react";
import HeroImage from "../assets/ps5hero.png"; // TODO: 換成你實際的圖片路徑

function Hero() {
  const title = "PLAY HAS NO LIMITS";
  const subtitle = "遊戲、科技、未來的交會點";

  const [typedTitle, setTypedTitle] = useState("");
  const [typedSubtitle, setTypedSubtitle] = useState("");
  const [showBg, setShowBg] = useState(false); // 控制背景淡入

  useEffect(() => {
    let titleIndex = 0;
    let subtitleIndex = 0;
    let titleTimer;
    let subtitleTimer;
    let bgTimer;

    // 打「英文標題」
    titleTimer = setInterval(() => {
      titleIndex++;
      setTypedTitle(title.slice(0, titleIndex));

      if (titleIndex >= title.length) {
        clearInterval(titleTimer);

        // 標題打完後，開始打「中文副標」
        subtitleTimer = setInterval(() => {
          subtitleIndex++;
          setTypedSubtitle(subtitle.slice(0, subtitleIndex));

          if (subtitleIndex >= subtitle.length) {
            clearInterval(subtitleTimer);

            // 副標打完後一小段時間，再讓背景慢慢亮出來
            bgTimer = setTimeout(() => {
              setShowBg(true);
            }, 400);
          }
        }, 80); // 中文每個字出現的速度
      }
    }, 60); // 英文每個字出現的速度

    return () => {
      clearInterval(titleTimer);
      clearInterval(subtitleTimer);
      clearTimeout(bgTimer);
    };
  }, []);

  return (
    <div className="relative w-screen h-[calc(100vh-80px)] overflow-hidden bg-black ">
      {/* 背景圖 */}
      <img
        src={HeroImage}
        alt="ps5hero"
        className={`
          absolute inset-0 w-full h-full object-fill object-center
          transition-opacity duration-1500 
          ${showBg ? "opacity-100" : "opacity-40"}
        `}
      />

      {/* 黑色遮罩（讓一開始更有電影感） */}
      <div
        className={`
          absolute inset-0 bg-gray-500
          transition-opacity duration-1500
          ${showBg ? "opacity-0" : "opacity-40"}
        `}
      />

      {/* 文字區塊 */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[0.2em] text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
          {typedTitle}
        </h1>
        <p className=" text-2xl sm:text-3xl font-semibold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
          {typedSubtitle}
        </p>
      </div>
    </div>
  );
}
export default Hero;
