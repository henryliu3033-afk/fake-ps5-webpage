import { useNavigate } from "react-router-dom";
import GamesTiltleImage from "../assets/games.png";

function GamesTiltle() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-row justify-around  w-screen h-[calc(100vh-80px)] ">
        <img src={GamesTiltleImage} alt="ps5pro" className="object-cover" />
        <div className="content flex flex-col justify-center  items-start text-center gap-7">
          <h3 className="text-5xl font-bold">
            跨越时代的游戏阵容，让每一次启动主机都是一场盛宴
          </h3>
          <p className="text-3xl">
            从神作级叙事到极致沉浸式玩法，PS5
            不只是性能强大，更是大作云集的平台。
          </p>
          <button
            onClick={() => navigate("/console", { replace: true })}
            className="text-2xl rounded-2xl w-60 cursor-pointer bg-blue-400 "
          >
            瀏覽
          </button>
        </div>
      </div>
    </>
  );
}

export default GamesTiltle;
