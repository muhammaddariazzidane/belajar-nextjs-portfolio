import React from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Certificate = () => {
  return (
    <div className="container mx-auto px-12">
      <h1 className="text-center my-20 text-4xl font-semibold text-black">My Certificate</h1>
      <div className="w-full flex justify-center items-center">
        <div id={"slider"} className="w-full scrollbar-hide h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
          <div className="inline-block relative p-2 cursor-pointer">
            <Image className="shadow-lg" src="/dicoding.png" alt="/" width={300} height={30} />
          </div>
          <div className="inline-block relative p-2 cursor-pointer">
            <Image className="shadow-lg" src="/cisco.png" alt="/" width={300} height={30} />
          </div>
          <div className="inline-block relative p-2 cursor-pointer">
            <Image className="shadow-lg" src="/pcap.png" alt="/" width={300} height={30} />
          </div>
          <div className="inline-block relative p-2 cursor-pointer">
            <Image className="shadow-lg" src="/skilvull.png" alt="/" width={300} height={30} />
          </div>
          <div className="inline-block relative p-2 cursor-pointer">
            <Image className="shadow-lg" src="/codefirst.png" alt="/" width={300} height={30} />
          </div>
          <div className="inline-block relative p-2 cursor-pointer">
            <Image className="shadow-lg" src="/dea1.png" alt="/" width={300} height={30} />
          </div>
          <div className="inline-block relative p-2 cursor-pointer">
            <Image className="shadow-lg" src="/dea2.png" alt="/" width={300} height={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
