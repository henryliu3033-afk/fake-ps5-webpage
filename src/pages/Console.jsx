import HeroIntro from "../Console/HeroConsole.jsx";
import PlayStationIntro from "../Console/PsG.jsx";
import Ps1 from "../assets/ps1.png";
import Ps2 from "../assets/ps2.png";
import Ps3 from "../assets/ps3.png";
import Ps4 from "../assets/ps4.png";
import Ps5 from "../assets/ps6.png";

function Console() {
  const evoData = [
    {
      id: 1,
      img: Ps1,
      textTitle: "PS1 — 一切的起點",
      text: "多邊形拼出的世界，卻裝著整個童年的想像力",
    },
    {
      id: 2,
      img: Ps2,
      textTitle: "PS2 — 無可取代的傳奇",
      text: "全球最暢銷主機，承載了無數玩家的青春",
    },
    {
      id: 3,
      img: Ps3,
      textTitle: "PS3 — 跨世代的震撼",
      text: "HD 時代的開端，遊戲第一次如此真實 ",
    },
    {
      id: 4,
      img: Ps4,
      textTitle: "PS4 — 玩家世代的巔峰",
      text: "多邊形拼出的世界，卻裝著整個童年的想像力",
    },
    {
      id: 5,
      img: Ps5,
      textTitle: "PS5 — 次世代的極致",
      text: "極速SSD 光追畫面 DualSense 觸覺革命 ",
    },
  ];
  return (
    <>
      <HeroIntro />
      {evoData.map((item) => (
        <PlayStationIntro
          key={item.id}
          img={item.img}
          textTitle={item.textTitle}
          text={item.text}
        />
      ))}
    </>
  );
}

export default Console;
