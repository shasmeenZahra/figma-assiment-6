"use client";
import { useState } from 'react';

import Image from 'next/image';
import React from 'react';


const Navbar = () => {

 "use client";

const [isOpen, setIsOpen] = useState(false);
 return (
 <header className="flex flex-row lg:w-[1280px] lg:h-[72px] w-[428px] h-[72px] bg-[#F7F7F7] lg:flex lg:items-center justify-between sm:px-7 lg:px-16 relative  ">
 <div className=" flex justify-center w-[1152px] h-[44px]">
 <div className="container mx-auto flex justify-between items-center gap-y-3 ">
 <div className="flex items-center space-x-20 ml-24 bg-[hashtag#F7F7F7] h-[72px] w-[1280px]">
 <div className='flex justify-start items-start'> 
 <Image
 src="/image/logo.jpg"
 alt='Logo'
 width={130}
 height={41}
 />
 </div>
 <button 
 className='lg:hidden block' onClick = {() => setIsOpen(!isOpen)}

 > 
 <div className="space-y-1">
 <span className="block h-0.5 w-6 bg-black"></span>
 <span className="block h-0.5 w-6 bg-black"></span>
 <span className="block h-0.5 w-6 bg-black"></span>
 </div>
 </button> 
 <nav 
 className={`${
 isOpen ? "block" : "hidden"
 } absolute top-16 bg-white shadow-lg lg:flex lg:static
 lg:space-x-6 lg:bg-transparent lg:shadow-none`}
 >
 
 
 <a href = "#" className= "block px-4 py-4 text-[#000000] hover:text-gray-500">
 Home
 </a>

 <a href = "#" className= "block px-4 py-4 text-[#000000] hover:text-gray-500">
 Courses
 </a>

 <a href = "#" className= "block px-4 py-4 text-[#000000] hover:text-gray-500">
 Services
 </a>

 <a href = "#" className= "block px-4 py-4 text-[#000000] hover:text-gray-500">
 Achievement
 </a>

 <a href = "#" className= "block px-4 py-4 text-[#000000] hover:text-gray-500">
 About Us
 </a>

 <a href = "#" className= "block px-4 py-4 text-[#000000] hover:text-gray-500">
 Testimonial
 </a>
 
 
 </nav>
 
 </div>

 </div>
 <div className="flex gap-4 h-[40px] w-[191px] lg:block hidden items justify-end">
 <button className="text-[#000000] border border-black rounded-md px-4 py-2 h-[40px] w-[80px]">Login</button>
 <button className="bg-[#000000] text-[#FFFFFF] border border-white  px-4 py-2 rounded h-[40px] w-[95px]">Sing Up</button>
 </div>
 </div>




 </header>
 )
}

export default Navbar
