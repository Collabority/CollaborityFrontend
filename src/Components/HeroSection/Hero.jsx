import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const Hero = () => {
  return (
    <main className=" pt-52 sm:pb-16 md:pb-36 ">
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4">
        <HeroText />
        <HeroPic />
      </div>
    </main>
  );
};

export default Hero;
