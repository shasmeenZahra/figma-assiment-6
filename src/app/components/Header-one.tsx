import React from 'react';
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const headerone = () => {
  return (
    
    <div className="lg:w-[1280px] lg:h-[54px] h-[72px] w-[428px] bg-[#F7F7F7] flex flex-row mb-2 border-b border-black lg:border-black lg:border-b">
      <div className="lg:w-[1120px] lg:h-[24px] h-[42px] w-[400px] lg:flex lg:flex-row lg:justify-between lg:space-x-36 lg:items-center lg:mt-4 lg:ml-20">
    <div className="lg:flex text-sm lg:space-x-2  mt-6 lg:flex-row ">
      <p className="">Phone Number: 956 742 455 678</p>
      <span className="hidden sm:inline-block ">|</span>
      <p>Email:info@ddsgnr.com</p>
    </div>

       <div className="flex flex-row justify-end lg:space-x-4 space-x-2 text-xl ml-16 lg:ml-11">
      <BiLogoFacebook />
      <FaInstagram />
      <FaTwitter/>
     <FaLinkedin/>
</div>
</div>
</div>

  )
}

export default headerone
