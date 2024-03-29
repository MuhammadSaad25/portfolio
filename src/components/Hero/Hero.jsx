import React from "react";
import Images from "./Images";
import Content from "./Content";

const Hero = () => {
  return (
    <div className="main_hero flex bg-black-500 lg:flex-row flex-col-reverse items-center justify-between w-[100%] lg:h-[91.5vh] h-auto">
      <Content />
      <Images />
    </div>
  );
};

export default Hero;
