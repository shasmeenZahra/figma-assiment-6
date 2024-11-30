import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <header className="bg-[#F7F7F7] shadow w-full p-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-y-3">
        {/* Logo Section */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Image src="/image/logo.jpg" alt="Logo" width={130} height={41} />
        </div>

        {/* Navigation Section */}
        <nav className="hidden lg:flex justify-center items-center space-x-6 bg-white px-4 py-2 rounded shadow">
          <a href="#" className="text-[#676767] hover:text-[#000000]">Home</a>
          <a href="#" className="text-[#676767] hover:text-[#000000]">Courses</a>
          <a href="#" className="text-[#676767] hover:text-[#000000]">Services</a>
          <a href="#" className="text-[#676767] hover:text-[#000000]">Achievement</a>
          <a href="#" className="text-[#676767] hover:text-[#000000]">About Us</a>
          <a href="#" className="text-[#676767] hover:text-[#000000]">Testimonial</a>
        </nav>

        {/* Action Buttons */}
        
        <div className="flex gap-2 mt-4 lg:mt-0">
          <button className="text-black border border-black rounded px-4 py-2 w-[95px] h-40px]">
            Login
          </button>
          <button className="bg-black text-white px-3 py-2 rounded ">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="flex lg:hidden flex-col mt-4 gap-2">
        <a href="#" className="text-[#676767] hover:text-[#000000]">Home</a>
        <a href="#" className="text-[#676767] hover:text-[#000000]">Courses</a>
        <a href="#" className="text-[#676767] hover:text-[#000000]">Services</a>
        <a href="#" className="text-[#676767] hover:text-[#000000]">Achievement</a>
        <a href="#" className="text-[#676767] hover:text-[#000000]">About Us</a>
        <a href="#" className="text-[#676767] hover:text-[#000000]">Testimonial</a>
      </nav>
    </header>
  );
};

export default Hero;
