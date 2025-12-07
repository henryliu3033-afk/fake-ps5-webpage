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
    <>
      <div>
        <div className="create user bg-blue-200 w-screen h-screen flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-9 bg-blue-400 w-[800px] h-[900px] justify-center items-center rounded-2xl"
          >
            <h1 className="text-3xl font-bold">歡迎創建新用戶</h1>
            <div className="email flex gap-4">
              <label>賬號</label>
              <input
                type="email"
                placeholder="Email Here..."
                className="bg-white text-center"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex gap-4">
              <label>密碼</label>
              <input
                type="text"
                placeholder="Password Here... "
                className="bg-white text-center"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>
            <div className=" flex gap-4 ">
              <label>手機/電話</label>
              <input
                type="tel"
                className="flex bg-white"
                required
                pattern="^09\d{8}$"
                value={phoneNumbers}
                onChange={(e) => {
                  setPhoneNumbers(e.target.value);
                }}
              />
            </div>
            <div className="flex gap-4">
              <label>地址</label>
              <input
                type="address"
                placeholder="台北市..."
                className="bg-white"
                required
                value={address}
                onChange={(e) => {
                  setAdress(e.target.value);
                }}
              />
              <label>郵遞區號</label>
              <input
                type="text"
                required
                value={postNumbers}
                onChange={(e) => {
                  setPostNumbers(e.target.value);
                }}
                className="bg-white w-24"
              />
            </div>
            <button type="submit" className="bg-blue-500 w-3xs rounded-2xl">
              創建
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateNewUser;
