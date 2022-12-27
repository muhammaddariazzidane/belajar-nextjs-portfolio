import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="container py-20 mx-auto" id="projects">
      <div className="w-full px-4 my-20">
        <div className="max-w-xl text-center mx-auto">
          <h1 className="font-semibold text-4xl text-black">My Projects</h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-full px-4 lg:w-1/4 ">
          <Link href="/projects1" scroll>
            <div className="mx-auto hover:cursor-pointer hover:-translate-y-4 overflow-hidden transition-all duration-300 flex  w-full flex-col justify-center bg-white rounded-2xl shadow-deep-purple-accent-400/40 shadow-xl">
              <Image className="aspect-video w-full rounded-t-2xl object-cover object-center" src="/web2.png" width={1500} height={100} alt="/" />
              <div className="p-6">
                <h1 className="text-2xl font-medium text-black pb-2">Recipe App</h1>
                <p className="text-gray-500 leading-6">Recipe App adalah aplikasi untuk memposting sebuah resep masakan atau minuman, project ini terinspirasi dari playlist codeigniter 3 WPU</p>
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
          <Link href="/projects2" scroll>
            <div className="mx-auto hover:cursor-pointer hover:-translate-y-4 transition-all duration-300 flex overflow-hidden flex-col justify-center bg-white rounded-2xl shadow-deep-purple-accent-400/40 shadow-xl">
              <Image className="aspect-video w-full rounded-t-2xl object-cover object-center" src="/webfilm.png" alt="/" width={1500} height={100} />
              <div className="p-6">
                <h1 className="text-2xl font-medium text-black pb-2">After Watch App</h1>
                <p className="text-gray-500 leading-6">After Watch App adalah aplikasi landing page yang menampilkan banyak film yang di ambil dari TMDB API</p>
              </div>
              <div className="flex space-x-2 ml-7 mb-5">
                <Image className="transition-all duration-300 hover:rotate-6" src="/next.svg" alt="/" width={40} height={25} />
                <Image className="transition-all duration-300 hover:rotate-6 " src="/tailwind.svg" alt="/" width={25} height={25} />
                <Image className="transition-all duration-300 hover:rotate-6 " src="/tmdb.svg" alt="/" width={40} height={25} />
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
