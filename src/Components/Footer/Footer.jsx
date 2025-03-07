import React from "react";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { Link } from "react-router";

const Footer = () => {
  const footerLinks = [
    {
      name: "About",
      section: "about",
    },
    {
      name: "Career",
      section: "career",
    },
    {
      name: "Blogs",
      section: "blog",
    },
    {
      name: "Projects",
      section: "projects",
    },
  ];

  return (
    <div className="px-4 bg-red text-white">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="mt-4 max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col items-start mb-4 sm:mb-0">
          <p className="text-3xl text-lightGrey">Collabority</p>
          <p className="text-sm text-left text-lightGrey mt-2">Bringing people and ideas together to create a brighter future.</p>
          <div className="flex mt-4 items-center gap-10">
            <div className="social-icons text-3xl ">
              <FaFacebookF />
            </div>
            <div className="social-icons text-3xl">
              <BsInstagram />
            </div>
            <div className="social-icons text-3xl">
              <BsTwitterX />
            </div>
            <div className="social-icons text-3xl">
              <FiYoutube />
            </div>
          </div>
        </div>
        <ul className="flex flex-wrap gap-4 text-lightGrey text-xl justify-center sm:justify-start flex-col sm:flex-row">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href={`#${item.section}`}
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        © 2025 Collabority | All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
