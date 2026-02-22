import IntroImage from "../assets/ps5pro.webp";
import { useNavigate } from "react-router-dom";

function Intro() {
  const navigate = useNavigate();
  return (
    /* ✅ flex-col on mobile, flex-row-reverse on md+ */
    <div className="flex flex-col md:flex-row-reverse w-full justify-around items-center px-6 py-16 gap-10">
      <img
        src={IntroImage}
        alt="ps5pro"
        className="w-full md:w-1/2 max-w-xl object-cover"
      />
      <div className="flex flex-col justify-center items-start text-center gap-6 md:w-1/2">
        {/* ✅ clamp font sizes — were text-6xl which breaks on mobile */}
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold">Pro 级 GPU（提升 45%）</h2>
<p className="text-base md:text-xl xl:text-2xl">更高浮点运算能力...</p>


        <h2 className="text-3xl md:text-5xl font-bold">真 4K + 动态提升技术</h2>
        <p className="text-lg md:text-2xl">即使在高负载场景,也能保持流畅帧率和细腻画质</p>

        <h2 className="text-3xl md:text-5xl font-bold">Tempest 3D Audio 强化版</h2>
        <p className="text-lg md:text-2xl">更立体、更沉浸、更清晰的音频细节</p>

        <button
          onClick={() => navigate("/products", { replace: true })}
          className="text-lg md:text-2xl border rounded-2xl w-full max-w-xs cursor-pointer bg-blue-400 py-2 hover:bg-blue-500 transition"
        >
          即刻購買PS5 PRO
        </button>
      </div>
    </div>
  );
}

export default Intro;
