import React, { useState } from "react";

function CreateUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      alert("請輸入賬號和密碼");

      return;
    }
    alert(`登入成功!${email}`);
  }
  return (
    <>
      <div className="User flex flex-col justify-center items-center bg-blue-300 w-screen h-screen">
        <div className="flex flex-col justify-center items-center bg-blue-400 w-2xl h-[1000px] rounded-2xl gap-10">
          <h1 className="text-3xl ">歡迎來到會員界面</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-9 justify-center items-center "
          >
            <div className="flex gap-5  w-[400px]">
              <label htmlFor="User">User Id</label>
              <input
                type="email"
                placeholder="Your Email/Account name"
                className="text-xl bg-white w-xs text-center "
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="password">User Password</label>
              <input
                type="password"
                placeholder="Your Password"
                className="bg-white text-center"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>
            <button
              type="submit"
              className=" bg-blue-200 w-[200px] rounded-2xl text-xl "
            >
              登入
            </button>
            <div className="create user flex flex-col gap-2">
              <p>還不是會員嗎？</p>

              <button className="hover:bg-blue-200 rounded-2xl">
                創建新用戶
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateUser;
