import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 py-8 bg-[#F7F7F7]">
      {/* Trusted Text */}
      <div className="text-center md:text-left text-lg md:text-2xl font-bold mb-4 md:mb-0">
        Trusted by 2000+ companies worldwide.
      </div>

      {/* Logos Section */}
      <div className=" flex flex-col lg:flex-row items-center lg:space-x-4 mt-4 lg:mt-0">
        <Image
          src="/image/logos.png"
          alt="Company logos"
          width={1400}
          height={56}
           className=" object-cover items-center lg:mb-0 mb-20"
        />
      </div>
    </div>
  );
};

export default Footer;
