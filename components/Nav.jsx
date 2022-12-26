import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline/";
import { Bars2Icon } from "@heroicons/react/24/outline/";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-[9999] bg-white fixed top-0">
      <div className="container px-8 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div>
            <a className="text-2xl lg:px-3 font-bold text-gray-800 transition-colors duration-300 transform  lg:text-3xl hover:text-gray-700 " href="#">
              Zidane
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-black focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
              {isOpen ? <XMarkIcon className="w-8 h-8 text-red-600 " /> : <Bars2Icon className="w-8 h-8 text-deep-purple-accent-400" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-8 py-4 transition-all duration-300 ease-in-out bg-white  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="flex flex-col md:flex-row ">
            <a className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#projects">
              Projects
            </a>
            <a className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#skills">
              Skills
            </a>
            <a className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#contact">
              Contact
            </a>
            <a className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
