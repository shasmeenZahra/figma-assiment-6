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
      <div className="w-full md:w-auto flex justify-center md:justify-end">
        <Image
          src="/image/logos.png"
          alt="Company logos"
          width={700}
          height={56}
          className="w-full max-w-[700px] h-auto"
        />
      </div>
    </div>
  );
};

export default Footer;
