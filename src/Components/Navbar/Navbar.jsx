import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="font-special navbar max-w-full mx-auto w-full fixed z-20 flex gap-4 bg-white">
      <div className="flex justify-between items-center w-full max-w-full mx-auto p-5  ">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>
        <button
          onClick={toggleMenu}
          className="lg:hidden sm:block flex text-2xl p-4 text-blue cursor-pointer"
        >
          <GiHamburgerMenu />
        </button>
    </nav>
  );
};

export default Navbar;
