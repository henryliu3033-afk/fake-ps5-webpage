import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faYoutube, faThreads } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

function Footer() {
  const [emailSubmit, setEmailSubmit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailSubmit.trim()) {
      alert("你需要填寫正確的郵箱地址");
      return;
    }
    alert(`感謝訂閱！我們會寄送最新消息至：${emailSubmit}`);
    setEmailSubmit("");
  };

  return (
    /* ✅ flex-col on mobile, flex-row on lg+ — was 4 columns breaking on small screens */
    <footer className="flex flex-col lg:flex-row justify-around items-center gap-10 px-8 py-12 bg-white border-t border-gray-200">

      {/* Social Icons */}
      <div className="flex text-3xl cursor-pointer gap-6 text-gray-600">
        <FontAwesomeIcon icon={faInstagram} className="hover:text-pink-500 transition" />
        <FontAwesomeIcon icon={faYoutube} className="hover:text-red-600 transition" />
        <FontAwesomeIcon icon={faFacebook} className="hover:text-blue-600 transition" />
        <FontAwesomeIcon icon={faThreads} className="hover:text-gray-900 transition" />
      </div>

      {/* Email subscribe */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-center w-full max-w-xs">
        <h2 className="text-2xl font-semibold">提前接收最新消息</h2>
        <input
          type="email"
          placeholder="輸入您的Email..."
          value={emailSubmit}
          onChange={(e) => setEmailSubmit(e.target.value)}
          required
          className="text-base border rounded-2xl px-4 py-2 w-full"
        />
        <button type="submit" className="text-lg bg-blue-300 hover:bg-blue-400 transition rounded-2xl py-2">
          提交
        </button>
      </form>

      {/* Contact info */}
      <div className="flex flex-col justify-center items-center gap-2 text-center">
        <h3 className="text-2xl font-bold mb-1">聯繫我們</h3>
        <p className="text-base text-gray-700">地址:台北市中山區中山北路121號</p>
        <p className="text-base text-gray-700">電話:0212231111</p>
        <p className="text-base text-gray-700">Email:ps5@gmail.com</p>
        <p className="text-sm text-gray-400 mt-1">&copy;2025 reserved copyright from NYC organization</p>
      </div>

      {/* Privacy links */}
      <div className="flex flex-col text-base gap-3 text-blue-600">
        <a href="#" className="hover:underline">隱私條款</a>
        <a href="#" className="hover:underline">法律顧問</a>
        <a href="#" className="hover:underline">退換貨條款</a>
      </div>
    </footer>
  );
}

export default Footer;
