import Image from "next/image";
import React from "react";
import { FiGithub, FiInstagram, FiYoutube, FiFacebook } from "react-icons/fi";

const Content = () => {
  return (
    <div className="lg:flex container mx-auto mt-32 mb-16">
      <div className="flex items-center lg:ml-16 justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
        <div className="max-w-xl">
          <h5 className="mb-4 text-4xl font-extrabold leading-none">
            Muhammad Dariaz Zidane
            <br className="hidden md:block" />
            Front-end web <span className="inline-block text-deep-purple-accent-400">Developer</span>
          </h5>

          <p className="mt-4 text-sm text-gray-500  lg:text-base">Halo👋, saya Zidan, cowok yang suka coding, musik, dan gaming. Selamat datang di situs web pribadi saya</p>

          <div className="flex items-center mt-5 space-x-4">
            <a href="https://github.com/muhammaddariazzidane" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <FiGithub size={25} />
            </a>
            <a href="https://www.instagram.com/dzm416/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <FiInstagram size={25} />
            </a>
            <a href="https://web.facebook.com/m.zidan.186/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <FiFacebook size={25} />
            </a>
            <a href="https://www.youtube.com/@zidaneuchiha1554" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <FiYoutube size={25} />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full mt-14 lg:mt-0 h-64 lg:w-1/2 lg:h-auto">
        <Image src="/my.png" className="mx-auto" alt="/" width={300} height={300} />
      </div>
    </div>
  );
};

export default Content;
