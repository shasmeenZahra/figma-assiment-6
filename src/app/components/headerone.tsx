import React from 'react';
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const headerone = () => {
  return (

    <div className="w-[1280px] h-[54px] bg-[#F7F7F7] flex flex-row mb-4 border-b border-black">
      <div className="w-[1120px] h-[24px] flex flex-row justify-between items-center mt-4 ml-20">
    <div className="flex text-sm space-x-2 ml-2 font-thin w-[386px] h-[30px] ">
      <p className="">Phone Number: 956 742 455 678</p>
      <p>Email:info@ddsgnr.com</p>
    </div>

       <div className="flex flex-row items- justify-end space-x-4 text-xl ml-11">
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
