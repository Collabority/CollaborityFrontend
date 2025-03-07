import React from "react";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { Link } from "react-router";

const Footer = () => {
  
  return (
    // <div className="px-4 bg-red text-white">
    //   <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
    //   <div className="mt-4 max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between">
    //     <div className="flex flex-col items-start mb-4 sm:mb-0">
    //       <p className="text-3xl text-lightGrey">Collabority</p>
    //       <p className="text-sm text-left text-lightGrey mt-2">Bringing people and ideas together to create a brighter future.</p>
    //       <div className="flex mt-4 items-center gap-10">
    //         <div className="social-icons text-3xl ">
    //           <FaFacebookF />
    //         </div>
    //         <div className="social-icons text-3xl">
    //           <BsInstagram />
    //         </div>
    //         <div className="social-icons text-3xl">
    //           <BsTwitterX />
    //         </div>
    //         <div className="social-icons text-3xl">
    //           <FiYoutube />
    //         </div>
    //       </div>
    //     </div>
    //     <ul className="flex flex-wrap gap-4 text-lightGrey text-xl justify-center sm:justify-start flex-col sm:flex-row">
    //       {footerLinks.map((item, index) => {
    //         return (
    //           <li key={index}>
    //             <a
    //               href={`#${item.section}`}
    //               className="hover:text-white transition-all duration-500 cursor-pointer"
    //             >
    //               {item.name}
    //             </a>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </div>
    //   <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
    //     © 2025 Collabority | All Rights Reserved.
    //   </p>
    // </div>
    <footer className="bg-red text-white py-10 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side */}
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Collabority</h2>
          <p className="text-sm">
            Collabority is a platform for creative minds to connect, share, and collaborate on exciting projects.
          </p>
          <div className="flex space-x-6 mt-7">
            <Link to="#" className="text-white social-icons text-3xl">
              <FaFacebookF />
            </Link>
            <Link to="#" className="text-white social-icons text-3xl">
              <BsInstagram  />
            </Link>
            <Link to="#" className="text-white social-icons text-3xl">
              <BsTwitterX  />
            </Link>
            <Link to="#" className="text-white social-icons text-3xl">
              <FiYoutube  />
            </Link>
          </div>
        </div>

        {/* Center (Links) */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
            <li><Link to="/blogs" className="hover:text-gray-200">Blogs</Link></li>
            <li><Link to="/services" className="hover:text-gray-200">Services</Link></li>
          </ul>
        </div>

        {/* Right Side (Contact Information) */}
        <div className="space-y-4 text-center md:text-right">
          <h3 className="font-semibold text-lg">Contact Information</h3>
          <ul className="space-y-2">
            <li><span className="font-medium">Email:</span> contact@collabority.com</li>
            <li><span className="font-medium">Phone:</span> +1 (555) 123-4567</li>
            <li><span className="font-medium">Address:</span> 123 Main St, Cityville, ABC</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        <p>&copy; 2025 Collabority. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
