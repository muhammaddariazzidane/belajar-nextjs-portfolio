import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function projects1() {
  const url = "https://muhammaddariazzidane.000webhostapp.com/";

  return (
    <Layout title="Recipe App" icon="/ci.png">
      <div className="px-4 mt-12 py-16 mx-auto sm:max-w-xl md:max-w-full selection:bg-deep-purple-accent-400 selection:text-white lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-transparent bg-gradient-to-r from-teal-accent-400 to-deep-purple-accent-400 bg-clip-text sm:text-4xl sm:leading-none">Recipe App</h2>
              <p className="text-base text-gray-700 md:text-lg">Recipe App adalah aplikasi untuk memposting sebuah resep masakan atau minuman, project ini terinspirasi dari playlist codeigniter 3 WPU </p>
            </div>
            <Link href={url} target="_blank" className="mb-8 w-24 hover:underline text-deep-purple-accent-400 inline-flex items-center font-semibold">
              Live Demo
            </Link>
            <p className="mb-4 text-sm font-bold tracking-widest uppercase">Teknologi yang digunakan</p>
            <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
              <ul className="space-y-3">
                <li className="flex">
                  <span className="mr-1">
                    <Image src="/ci.png" className="h-10 w-10" width={100} height={100} alt="/" />
                  </span>
                  <p className="mt-3">Codeigniter 3</p>
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <Image src="/tailwind.svg" className="h-10 w-10" width={100} height={100} alt="/" />
                  </span>
                  <p className="mt-3">Tailwind CSS</p>
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <Image src="/alpine.png" className="h-10 w-10" width={100} height={100} alt="/" />
                  </span>
                  <p className="mt-3">Alpine js</p>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex">
                  <span className="mr-2">
                    <Image src="/mysql.png" className="h-10 w-10" width={100} height={100} alt="/" />
                  </span>
                  <p className="mt-3">MYSQL</p>
                </li>
                <li className="flex">
                  <span className="mr-2">
                    <Image src="/000.png" className="h-8 w-10 mt-2" width={100} height={100} alt="/" />
                  </span>
                  <p className="mt-3">000webhost</p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Image className="object-cover w-full shadow-xl h-56 sm:h-96" src="/web2.png" width={1500} height={500} alt="" />
          </div>
        </div>
      </div>{" "}
    </Layout>
  );
}
