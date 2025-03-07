import React from "react";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center lg:items-start sm:items-center  md:text-left sm:text-center ">
      <div className=" bg-red/80 rounded-full max-w-max px-6 py-1">
      <h2 className="lg:text-xl sm:text-lg uppercase text-white font-semibold ">
        Design Agency
      </h2>
      </div>
      <h1 className="md:text-[2.8rem] lg:text-7xl md:leading-24 sm:leading-12 sm:text-4xl font-bold font-body text-blue">
        Dedicated To <br /> Bring Your <br /> Ideas To Life
      </h1>
      <p className="text-xl font-medium mt-4 text-red font-special ">
        We Design, We Build, We Develop
      </p>
    </div>
  );
};

export default HeroText;
