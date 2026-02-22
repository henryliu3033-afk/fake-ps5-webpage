import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      alert("請輸入賬號和密碼");
      return;
    }
    alert(`登入成功! ${email}`);
  }

  return (
    /* ✅ w-screen + h-[1000px] replaced with responsive min-h-screen */
    <div className="flex flex-col justify-center items-center bg-blue-300 w-full min-h-screen px-4 py-16">
      <div className="flex flex-col justify-center items-center bg-blue-400 w-full max-w-lg rounded-2xl gap-8 py-14 px-8">
        <h1 className="text-2xl md:text-3xl font-semibold">歡迎來到會員界面</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full items-center">

          <div className="flex flex-col sm:flex-row gap-3 w-full items-center">
            <label className="w-24 text-right shrink-0">User Id</label>
            <input
              type="email"
              placeholder="Your Email / Account name"
              className="flex-1 text-base bg-white rounded-lg px-4 py-2 w-full"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full items-center">
            <label className="w-24 text-right shrink-0">Password</label>
            <input
              type="password"
              placeholder="Your Password"
              className="flex-1 text-base bg-white rounded-lg px-4 py-2 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="bg-blue-200 hover:bg-blue-100 transition w-48 rounded-2xl text-lg py-2 mt-2">
            登入
          </button>

          <div className="flex flex-col gap-2 items-center text-base">
            <p>還不是會員嗎？</p>
            <button
              type="button"
              onClick={() => navigate("/createAccount")}
              className="hover:bg-blue-200 rounded-2xl px-4 py-1 transition"
            >
              創建新用戶
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
