import { useState } from "react";

function ProductsCard({ img, name, price }) {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div
      className="
      group 
      max-w-sm 
      bg-white 
      rounded-3xl 
      shadow-lg 
      hover:shadow-2xl 
      transition-all 
      duration-300 
      hover:-translate-y-3 
      p-6 
      flex 
      flex-col 
      items-center
    "
    >
      {/* 商品圖片 */}
      <div className="w-full flex justify-center bg-blue-400">
        <img
          src={img}
          alt={name}
          className="w-60 h-60 object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* 商品資訊 */}
      <div className="mt-5 text-center">
        <h3 className="text-2xl font-extrabold text-blue-700 tracking-wide">
          {name}
        </h3>
        <p className="text-xl text-gray-700 mt-1 font-semibold">{price}</p>
      </div>

      {/* 數量控制區 */}
      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={decrease}
          className="
            w-10 h-10 
            flex justify-center items-center 
            bg-gray-200 
            rounded-full 
            text-2xl 
            font-bold 
            hover:bg-gray-300 
            transition 
            active:scale-90
          "
        >
          –
        </button>

        <span className="text-2xl font-bold text-blue-800 w-10 text-center">
          {count}
        </span>

        <button
          onClick={increase}
          className="
            w-10 h-10 
            flex justify-center items-center 
            bg-blue-600 
            text-white 
            rounded-full 
            text-2xl 
            font-bold 
            hover:bg-blue-700 
            transition 
            active:scale-90
          "
        >
          +
        </button>
      </div>

      {/* 加入購物車 */}
      <button
        className="
          mt-6 
          w-full 
          py-3 
          rounded-2xl 
          bg-linear-to-r from-blue-600 to-blue-400 
          text-white 
          font-bold 
          text-xl 
          shadow-md 
          hover:shadow-xl 
          hover:brightness-110 
          transition 
          active:scale-95
        "
      >
        加入購物車
      </button>
    </div>
  );
}

export default ProductsCard;
