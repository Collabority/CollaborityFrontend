import React from "react";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center lg:items-start sm:items-center  md:text-left sm:text-center ">
      <div className=" bg-red/80 rounded-full max-w-max px-6 py-4">
        <h2 className="lg:text-xl sm:text-lg uppercase text-white font-semibold ">
          Design agency
        </h2>
      </div>
      <h1 className="md:text-[2.8rem] lg:text-7xl lg:leading-24 md:leading-16 sm:leading-12 sm:text-4xl font-bold font-body text-blue">
        Dedicated to <br /> bring your <br /> ideas to life
      </h1>
      <p className="lg:text-2xl font-medium mt-4 text-red font-special ">
        We Design, We Build, We Develop
      </p>
    </div>
  );
};

export default HeroText;
