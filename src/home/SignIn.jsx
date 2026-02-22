import PlayerImage from "../assets/player.png";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  return (
    /* ✅ flex-col on mobile, flex-row on lg+ — was 3 columns crushing on small screens */
 <div className="w-full py-24 flex flex-col lg:flex-row justify-center items-center px-8 gap-10 bg-blue-200">

      {/* Left Text */}
      <div className="flex flex-col gap-6 max-w-sm text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600">立即加入 PS5 會員</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          解鎖專屬優惠、搶先體驗新作、雲端存檔、線上多人遊玩，讓你的遊戲旅程全面升級！
        </p>
      </div>

      {/* Middle Image + Button */}
      <div className="flex flex-col items-center text-center gap-6">
        <img
          src={PlayerImage}
          alt="ps5-join"
          className="w-full max-w-sm md:max-w-md object-cover rounded-2xl shadow-lg"
        />
        <button
          onClick={() => navigate("/createAccount")}
          className="px-10 py-3 text-xl bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
        >
          加入會員
        </button>
      </div>

      {/* Right Text */}
      <div className="flex flex-col gap-6 max-w-sm text-center lg:text-right">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600">升級你的遊戲體驗</h3>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          PS Plus 會員提供更多獨家遊戲、每月免費領取遊戲，還有專屬折扣與雲端備份功能，讓你玩得更安心更爽快！
        </p>
      </div>
    </div>
  );
}

export default SignIn;
