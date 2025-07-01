import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 text-stone-300 mx-auto px-10">
      <div className="flex flex-shrink-0 items-center">
        <a href="/">
          <h2 className="text-7xl text-white font-bold mx-2">DD</h2>
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-4xl">
        <a href="">
          <FaGithub />
        </a>
        <a href="">
          <FaLinkedin />
        </a>
        <a href="">
          <FaUpwork />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
