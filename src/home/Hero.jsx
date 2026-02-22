import { useEffect, useState } from "react";
import HeroImage from "../assets/ps5hero.png";
import HeroImageMobile from "../assets/ps5switch.png"; // ← add this import

function Hero() {
  const title = "PLAY HAS NO LIMITS";
  const subtitle = "遊戲、科技、未來的交會點";

  const [typedTitle, setTypedTitle] = useState("");
  const [typedSubtitle, setTypedSubtitle] = useState("");
  const [showBg, setShowBg] = useState(false);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    // ✅ Skip animation on mobile — shows instantly
    if (isMobile) {
      setTypedTitle(title);
      setTypedSubtitle(subtitle);
      setShowBg(true);
      return;
    }

    let titleIndex = 0;
    let subtitleIndex = 0;
    let titleTimer, subtitleTimer, bgTimer;

    titleTimer = setInterval(() => {
      titleIndex++;
      setTypedTitle(title.slice(0, titleIndex));
      if (titleIndex >= title.length) {
        clearInterval(titleTimer);
        subtitleTimer = setInterval(() => {
          subtitleIndex++;
          setTypedSubtitle(subtitle.slice(0, subtitleIndex));
          if (subtitleIndex >= subtitle.length) {
            clearInterval(subtitleTimer);
            bgTimer = setTimeout(() => setShowBg(true), 400);
          }
        }, 80);
      }
    }, 60);

    return () => {
      clearInterval(titleTimer);
      clearInterval(subtitleTimer);
      clearTimeout(bgTimer);
    };
  }, []);

  return (
    <div className="relative w-full h-[70vh] md:h-screen overflow-hidden bg-black">

      {/* ✅ Mobile image — portrait, shown only on small screens */}
      <img
        src={HeroImageMobile}
        alt="ps5hero mobile"
        className="md:hidden absolute inset-0 w-full h-full object-cover object-center "
      />

      {/* ✅ Desktop image — landscape, shown only on md+ */}
      <img
        src={HeroImage}
        alt="ps5hero"
        className={`hidden md:block absolute inset-0 w-full h-full object-fill object-center
          transition-opacity duration-1500
          ${showBg ? "opacity-100" : "opacity-40"}`}
      />

      {/* Dark overlay — desktop only for cinematic effect */}
      <div className={`hidden md:block absolute inset-0 bg-gray-500
          transition-opacity duration-1500
          ${showBg ? "opacity-0" : "opacity-40"}`}
      />

      {/* Text — hidden on mobile since the mobile image already has text baked in */}
      <div className="hidden md:flex relative z-10 flex-col items-center justify-center text-center h-full px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[0.2em] text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
          {typedTitle}
        </h1>
        <p className="text-2xl sm:text-3xl font-semibold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
          {typedSubtitle}
        </p>
      </div>

    </div>
  );
}

export default Hero;