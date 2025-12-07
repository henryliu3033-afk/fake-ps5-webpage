import React, { useState } from "react";
import ProductsIntro from "../productsCards/productsIntro";
import consoleImage from "../assets/ps5products.png";
import consoleOnlineImage from "../assets/consoleOnlineImage.png";
import Playstation4 from "../assets/playstation4.png";
import Playstation3 from "../assets/playstation3.png";
import Playstation2 from "../assets/playstation2.png";
import ProductsCard from "../productsCards/productsCard.jsx";
import headPhoneImage from "../assets/pselite.png";
import PlaystationCamera from "../assets/playstationcamera.png";
import DualSense from "../assets/psconsole.png";
import VrConsole from "../assets/vrconsole.png";
import PS1Limited from "../assets/goldsense.png";

function Products() {
  const product = [
    {
      id: 1,
      img: consoleImage,
      name: "PS5",
      price: "2,9999$",
    },
    {
      id: 2,
      img: consoleOnlineImage,
      name: "PS5 Online",
      price: "2,4999$",
    },
    {
      id: 3,
      img: Playstation4,
      name: "PS4",
      price: "1,9999$",
    },
    {
      id: 4,
      img: Playstation3,
      name: "PS3",
      price: "4999$",
    },
    {
      id: 5,
      img: Playstation2,
      name: "PS2 Limited Edition",
      price: "3,9999$",
    },
  ];
  const productMerch = [
    {
      id: 6,
      img: headPhoneImage,
      name: "PS Elite",
      price: "5,999$",
    },
    {
      id: 7,
      img: PlaystationCamera,
      name: "PS Camera",
      price: "3,599$",
    },
    {
      id: 8,
      img: VrConsole,
      name: "PS dual sense",
      price: "2,500$",
    },
    {
      id: 9,
      img: DualSense,
      name: "PS Dual Sense",
      price: "2,500$",
    },
    {
      id: 10,
      img: PS1Limited,
      name: "PS Console Limited Edition",
      price: "3,9999$",
    },
  ];

  return (
    <>
      <ProductsIntro />
      <div className="border consoles flex flex-row justify-around bg-blue-200 ">
        <h1 className="text-3xl text-blue-800">最新主機</h1>
        {product.map((item) => {
          return (
            <ProductsCard
              key={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
      <div className="border consoles flex flex-row justify-around bg-blue-200 ">
        <h1 className="text-3xl text-blue-800">周邊機器</h1>
        {productMerch.map((item) => {
          return (
            <ProductsCard
              key={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </>
  );
}
export default Products;
