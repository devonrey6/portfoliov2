import React from "react";
import { CONTACT } from "../constants/data";

import {
  FaFacebook,
  FaFacebookMessenger,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-center my-10 border-t border-gray-600 ">
      <p className="flex items-center justify-center my-3 text-3xl font-semibold text-gray-400">
        Devon Donasco
      </p>

      <span className="block text-sm text-center text-gray-500">
        © 2025. All Rights Reserved. Built with{" "}
        <a href="" className="text-purple-600 hover:underline">
          ReactJS
        </a>{" "}
        and{" "}
        <a href="" className="text-purple-600 hover:underline">
          Tailwind CSS
        </a>
      </span>

      <ul className="flex justify-center mt-5 space-x-5">
        <li>
          <a href="" className="text-gray-500 hover:text-white">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="" className="text-gray-500 hover:text-white">
            <FaFacebookMessenger />
          </a>
        </li>
        <li>
          <a href="" className="text-gray-500 hover:text-white">
            <FaInstagramSquare />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
