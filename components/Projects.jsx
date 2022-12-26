import Image from "next/image";
import Link from "next/link";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline/";

import React from "react";

const Projects = () => {
  return (
    <div className="container py-28 mx-auto" id="projects">
      <div className="w-full px-4 my-20">
        <div className="max-w-xl text-center mx-auto">
          <h1 className="font-semibold text-4xl text-black">My Projects</h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-full px-4 lg:w-1/4 ">
          <Link href="https://muhammaddariazzidane.000webhostapp.com/" scroll>
            <div class="mx-auto hover:cursor-pointer hover:-translate-y-4 overflow-hidden transition-all duration-300 flex  w-full flex-col justify-center bg-white rounded-2xl shadow-deep-purple-accent-400/40 shadow-xl">
              <img class="aspect-video w-full rounded-t-2xl object-cover object-center" src="/web2.png" />
              <div class="p-6">
                <h1 class="text-2xl font-medium text-gray-700 pb-2">Your Heading</h1>
                <p class="text-gray-500 leading-6">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
              </div>
              <div className="flex space-x-2 ml-4 mb-5">
                <Image className="transition-all duration-300 hover:rotate-6" src="/ci.png" alt="/" width={25} height={25} />
                <Image className="transition-all duration-300 hover:rotate-6 " src="/tailwind.svg" alt="/" width={25} height={25} />
                <Image className="transition-all duration-300 hover:rotate-6" src="/alpine.png" alt="/" width={25} height={25} />
                <Image className="transition-all duration-300 hover:rotate-6" src="/mysql.png" alt="/" width={30} height={25} />
                <Image className="transition-all duration-300 hover:rotate-6 mt-3" src="/000.svg" alt="/" width={55} height={25} />
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full px-4 lg:w-1/4 ">
          <Link href="https://muhammaddariazzidane.000webhostapp.com/" scroll>
            <div class="mx-auto hover:cursor-pointer hover:-translate-y-4 transition-all duration-300 flex overflow-hidden flex-col justify-center bg-white rounded-2xl shadow-deep-purple-accent-400/40 shadow-xl">
              <img class="aspect-video w-full rounded-t-2xl object-cover object-center" src="/webfilm.png" />
              <div class="p-6">
                <h1 class="text-2xl font-medium text-gray-700 pb-2">Your Heading</h1>
                <p class="text-gray-500 leading-6">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
              </div>
              <div className="flex space-x-2 ml-7 mb-5">
                <Image className="transition-all duration-300 hover:rotate-6" src="/next.svg" alt="/" width={40} height={25} />
                <Image className="transition-all duration-300 hover:rotate-6 " src="/tailwind.svg" alt="/" width={25} height={25} />
                <Image className="transition-all duration-300 hover:rotate-6 " src="/vercel.svg" alt="/" width={40} height={25} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
