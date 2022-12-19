import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="p-8 text-lg flex items-baseline font-bold">
      <div className="text-3xl">
        <Link to="/">RICHIE</Link>
      </div>
      <div className="hidden sm:flex space-x-8 ml-auto justify-between items-baseline">
        <Link className="hover:text-amber-500" to="/Skills">
          Skills
        </Link>
        <Link className="hover:text-amber-500" to="/Projects">
          Project
        </Link>
        <Link className="hover:text-amber-500" to="/About">
          About Me
        </Link>
        <Link to="/Contacts" className="btn">
          Hire Me
        </Link>
      </div>
      <div className="ml-auto block sm:hidden">
        <AiOutlineMenu size={24} onClick={handleClick} />
      </div>
      <div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 z-10 w-full bg-white h-full ease-in-out duration-300"
              : "fixed left-[-100%] "
          }
        >
          <div className="absolute right-4 top-8 text-black ">
            <AiOutlineClose size={24} onClick={handleClick} />
          </div>
          <div className="flex flex-col text-center mt-16 p-4 space-y-8 text-black mx-auto">
            <Link className="hover:text-amber-500" onClick={handleClick} to="/">
              Home
            </Link>
            <Link
              className="hover:text-amber-500"
              onClick={handleClick}
              to="/Skills"
            >
              Skills
            </Link>
            <Link
              className="hover:text-amber-500"
              onClick={handleClick}
              to="/Projects"
            >
              Project
            </Link>
            <Link
              className="hover:text-amber-500"
              onClick={handleClick}
              to="/About"
            >
              About Me
            </Link>
            <Link
              to="/Contacts"
              onClick={handleClick}
              className="btn  mx-auto w-1/2"
            >
              Hire Me
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
