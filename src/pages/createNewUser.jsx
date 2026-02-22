import React, { useState } from "react";

function CreateNewUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumbers, setPhoneNumbers] = useState("");
  const [address, setAdress] = useState("");
  const [postNumbers, setPostNumbers] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password || !phoneNumbers || !address || !postNumbers) {
      alert("您還有信息沒填寫完畢");
      return;
    }
    alert("創建成功");
  }

  return (
    /* ✅ w-screen + h-[900px] replaced — w-[800px] was overflowing on mobile */
    <div className="bg-blue-200 w-full min-h-screen flex justify-center items-center px-4 py-16">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-7 bg-blue-400 w-full max-w-xl justify-center items-center rounded-2xl px-8 py-14"
      >
        <h1 className="text-2xl md:text-3xl font-bold">歡迎創建新用戶</h1>

        <div className="flex flex-col sm:flex-row gap-3 w-full items-center">
          <label className="w-24 text-right shrink-0">賬號</label>
          <input
            type="email"
            placeholder="Email Here..."
            className="flex-1 bg-white text-center rounded-lg px-4 py-2 w-full"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full items-center">
          <label className="w-24 text-right shrink-0">密碼</label>
          <input
            type="password"
            placeholder="Password Here..."
            className="flex-1 bg-white text-center rounded-lg px-4 py-2 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full items-center">
          <label className="w-24 text-right shrink-0">手機/電話</label>
          <input
            type="tel"
            className="flex-1 bg-white rounded-lg px-4 py-2 w-full"
            required
            pattern="^09\d{8}$"
            placeholder="09xxxxxxxx"
            value={phoneNumbers}
            onChange={(e) => setPhoneNumbers(e.target.value)}
          />
        </div>

        {/* ✅ Address + postcode stacked vertically on mobile to avoid overflow */}
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col sm:flex-row gap-3 w-full items-center">
            <label className="w-24 text-right shrink-0">地址</label>
            <input
              type="text"
              placeholder="台北市..."
              className="flex-1 bg-white rounded-lg px-4 py-2 w-full"
              required
              value={address}
              onChange={(e) => setAdress(e.target.value)}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full items-center">
            <label className="w-24 text-right shrink-0">郵遞區號</label>
            <input
              type="text"
              required
              className="bg-white rounded-lg px-4 py-2 w-full sm:w-32"
              value={postNumbers}
              onChange={(e) => setPostNumbers(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="bg-blue-600 hover:bg-blue-700 transition text-white w-40 py-2 rounded-2xl text-lg mt-2">
          創建
        </button>
      </form>
    </div>
  );
}

export default CreateNewUser;
