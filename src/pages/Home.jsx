import React from "react";
import Hero from "../home/Hero.jsx";
import Intro from "../home/intro.jsx";
import GamesTiltle from "../home/gameTitle.jsx";
import SignIn from "../home/SignIn.jsx";
import Footer from "../home/footer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <GamesTiltle />
      <SignIn />
      <Footer />
    </>
  );
};
export default Home;
