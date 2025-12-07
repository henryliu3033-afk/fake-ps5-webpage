import IntroImage from "../assets/ps5pro.webp";
import Products from "../pages/Products";
import { useNavigate } from "react-router-dom";
function Intro() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-row-reverse w-full justify-around ">
        <img src={IntroImage} alt="ps5pro" className="object-cover" />
        <div className="content flex flex-col justify-center  items-start text-center gap-7">
          <h2 className="text-6xl font-bold">Pro 级 GPU（提升 45%）</h2>
          <p className="text-3xl">
            更高浮点运算能力，支援更稳定的光线追踪效果。
          </p>
          <h2 className="text-6xl font-bold">真 4K + 动态提升技术</h2>
          <p className="text-3xl">
            即使在高负载场景，也能保持流畅帧率和细腻画质。
          </p>
          <h2 className="text-6xl font-bold">Tempest 3D Audio 强化版</h2>
          <p className="text-3xl"> 更立体、更沉浸、更清晰的音频细节。</p>
          <button
            onClick={() => navigate("/products", { replace: true })}
            className="text-2xl border rounded-2xl w-3xl cursor-pointer bg-blue-400 "
          >
            即刻購買PS5 PRO
          </button>
        </div>
      </div>
    </>
  );
}
export default Intro;
