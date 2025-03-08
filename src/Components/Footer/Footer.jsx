import React from "react";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { Link } from "react-router";

const Footer = () => {
  
  return (
    <footer className="font-body bg-red text-white py-10 px-6 md:px-12 rounded-t-4xl">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side */}
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Collabority</h2>
          <p className="text-sm">
            Collabority is a platform for creative minds to connect, share, and collaborate on exciting projects.
          </p>
          <div className="flex space-x-6 mt-7">
            <Link to="https://facebook.com/collaborityofficial" target="blank" className="text-white social-icons text-3xl">
              <FaFacebookF />
            </Link>
            <Link to="https://www.instagram.com/collaborityofficial" target="blank" className="text-white social-icons text-3xl">
              <BsInstagram  />
            </Link>
            <Link to="https://x.com/Collabority" target="blank" className="text-white social-icons text-3xl">
              <BsTwitterX  />
            </Link>
            <Link to="https://youtube.com/@collaborityofficial" target="blank" className="text-white social-icons text-3xl">
              <FiYoutube  />
            </Link>
            <Link to="https://www.linkedin.com/company/collaborityofficial/" target="blank" className="text-white social-icons text-3xl">
            <CiLinkedin />
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
