import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faFacebook,
  faYoutube,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";

import { useState } from "react";

function Footer() {
  const [emailSubmit, setEmailSubmit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailSubmit === "") {
      alert("你需要填寫正確的郵箱地址");
      setEmailSubmit.trim();
    }
    alert(`感謝訂閱！我們會寄送最新消息至：${emailSubmit}`);
    setEmailSubmit("");
  };

  return (
    <>
      <div className="flex flex-row justify-around items-center">
        <div className="icons flex  text-4xl cursor-pointer gap-6 ">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faThreads} />
        </div>
        <form
          onSubmit={handleSubmit}
          className="content flex flex-col gap-5 px-3.5 text-center"
        >
          <h2 className="text-3xl">提前接收最新消息</h2>
          <input
            type="email"
            placeholder="輸入您的Email..."
            value={emailSubmit}
            onChange={(e) => setEmailSubmit(e.target.value)}
            required
            className="text-2xl border rounded-2xl"
          />
          <button
            type="submit"
            className="text-2xl bg-blue-300 rounded-2xl w-28"
          >
            提交
          </button>
        </form>
        <div className="flex flex-col justify-center items-center gap-3">
          <h3 className="text-3xl font-bold">聯繫我們</h3>
          <p className="text-2xl">地址:台北市中山區中山北路121號</p>
          <p className="text-2xl">電話:0212231111</p>
          <p className="text-2xl">Email:ps5@gmail.com</p>
          <p className="text-2xl">
            &copy;2025 reserved copyright from NYC organization
          </p>
        </div>
        <div className="privacy flex flex-col text-2xl gap-5">
          <a href="#">隱私條款</a>
          <a href="#">法律顧問</a>
          <a href="#">退換貨條款</a>
        </div>
      </div>
    </>
  );
}

export default Footer;
