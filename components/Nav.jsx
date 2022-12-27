import React, { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline/";
import { Bars2Icon } from "@heroicons/react/24/outline/";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline/";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 0) {
        setShadow(true);
        // console.log("turun");
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <>
      <nav className={`w-full selection:bg-red-600 selection:text-white z-[9999] bg-white ${shadow ? "shadow-xl transition-all duration-300 ease-in-out" : "transition-all duration-300 ease-in-out"} fixed top-0`}>
        <div className="container px-8 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div>
              <Link  className="text-2xl lg:px-3 font-bold text-gray-800 transition-colors duration-300 transform  lg:text-3xl hover:text-gray-700 " href="/">
                Zidane
              </Link>
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
            className={`absolute selection:bg-red-600 selection:text-white inset-x-0 z-20 w-full px-8 py-4 transition-all duration-300 ease-in-out bg-white  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
              isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col md:flex-row ">
              <a onClick={() => setIsOpen(!isOpen)} className="my-2 text-black transition-colors duration-300 transform  hover:text-deep-purple-accent-400 md:mx-4 md:my-0" href="#projects">
                Projects
              </a>
              <a onClick={() => setIsOpen(!isOpen)} className="my-2 text-black transition-colors duration-300 transform  hover:text-deep-purple-accent-400 md:mx-4 md:my-0" href="#skills">
                Skills
              </a>
              <a onClick={() => setIsOpen(!isOpen)} className="my-2 text-black transition-colors duration-300 transform  hover:text-deep-purple-accent-400 md:mx-4 md:my-0" href="#contact">
                Contact
              </a>
              <a onClick={() => setIsOpen(!isOpen)} className="my-2 text-black transition-colors duration-300 transform  hover:text-deep-purple-accent-400 md:mx-4 md:my-0" href="#">
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className={`${shadow ? "fixed" : "hidden"} z-[9999] hover:cursor-pointer bottom-4 right-4`}>
        <div className="p-2 shadow-xl bg-black rounded-full">
          <a href="#">
            <ChevronDoubleUpIcon className="h-8 w-8 text-white animate-pulse" />
          </a>
        </div>
      </div>
    </>
  );
};
export default Nav;
