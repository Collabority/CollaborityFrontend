import React from "react";
import { Link } from "react-router";

const NavbarLinks = () => {
  const links = [
    { links: "Home", section: "/" },
    { links: "About", section: "about" },
    { links: "Blogs", section: "blogs" },
    { links: "Career", section: "career" },
  ];
  return (
    <ul className="flex gap-16  text-xl text-center py-4 lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%]  lg:font-medium  backdrop:blur-lg sm:w-full ">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              to={link.section}
              className="cursor-pointer text-blue hover:text-blue/50  transition-all duration-300 "
            >
              {link.links}
            </Link>
            <div className="mx-auto bg-blue w-0 group-hover:w-full h-[1px] transition-all duration-300 "></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
