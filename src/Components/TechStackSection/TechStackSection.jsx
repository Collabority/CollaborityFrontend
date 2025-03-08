import React from "react";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";

const techIcons = [
  {
    color: "#E34C26",
    icon: <TiHtml5 />,
  },
  {
    color: "#663399",
    icon: <FaCss3Alt />,
  },
  {
    color: "#F0DB4F",
    icon: <IoLogoJavascript />,
  },
  {
    color: "#61DBFB",
    icon: <RiReactjsLine />,
  },
  {
    color: "#4DB33D",
    icon: <SiMongodb />,
  },
  {
    color: "#000000",
    icon: <SiExpress />,
  },
  {
    color: "011627",
    icon: <TbBrandNextjs />,
  },
];
const TechStackSection = () => {
  // Duplicate the array to create a seamless loop
  const techIconsLoop = [...techIcons, ...techIcons, ...techIcons];

  return (
    <>
      <div className=" font-body wework py-32 ">
        <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8">
          <div className="text-center">
            <h3 className="md:text-6xl sm:text-3xl font-bold text-black my-2 ">
              We cater to diverse industries.
            </h3>
            <h3 className="md:text-6xl sm:text-3xl font-bold text-black opacity-50 lg:mr-48 my-2">
              We cater to diverse industries.
            </h3>
            <h3 className="md:text-6xl sm:text-3xl font-bold text-black opacity-25 lg:-pr-32 my-2">
              We cater to diverse industries.
            </h3>
          </div>
        </div>
        {/* Slider */}
        <div className="w-full overflow-hidden py-6">
          <div className="flex w-[200%] animate-slide">
            {techIconsLoop.map(
              (
                tech,
                i // Duplicate icons for seamless effect
              ) => (
                <div
                  key={i}
                  className="w-40 px-20 py-28 flex flex-col items-center mx-4 p-4"
                >
                  <div className="text-9xl" style={{ color: tech.color }}>
                    {tech.icon}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStackSection;
