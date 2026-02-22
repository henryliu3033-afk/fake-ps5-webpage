import { useNavigate } from "react-router-dom";
import GamesTiltleImage from "../assets/games.png";

function GamesTiltle() {
  const navigate = useNavigate();
  return (
    /* ✅ flex-col on mobile, flex-row on md+ — was w-screen causing scroll */
    <div className="flex flex-col md:flex-row justify-around items-center w-full min-h-screen px-6 py-16 gap-10">
      <img
        src={GamesTiltleImage}
        alt="ps5pro"
        className="w-full md:w-1/2 max-w-xl object-cover"
      />
      <div className="flex flex-col justify-center items-center text-center gap-6 md:w-1/2">
        <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold">
          跨越時代的遊戲陣容,讓每一次啟動主機都是一場盛宴
        </h3>
        <p className="text-lg md:text-2xl">
          從神作級敘事到極致沉浸式玩法,PS5 不只是性能強大,更是大作雲集的平台
        </p>
        <button
          onClick={() => navigate("/console", { replace: true })}
          className="text-xl rounded-2xl px-10 py-2 cursor-pointer bg-blue-400 hover:bg-blue-500 transition"
        >
          瀏覽
        </button>
      </div>
    </div>
  );
}

export default GamesTiltle;
