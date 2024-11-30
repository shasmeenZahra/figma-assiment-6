import Image from 'next/image';
import React from "react";

const course = () => {
  return (
    <div className="py-16 bg-[#FFFFFF]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Explore Courses By Category</h2>
        <p className="text-[#000000] mb-8">
          Discover a wide range of courses covering a variety of subjects &#44; taught by expert instructors.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-center">
         

          <div className="bg-[#F7F7F7] shadow rounded p-6 flex items-center space-x-4 h-[132px] w-[410.67px]">
            <div className=" flex items-center justify-center w-[100] h-[100] bg-gray-200 rounded-md">
              


                    <Image src="/image/Frame1.png" alt="  Web developement" width={100} height={100} />

            </div>
            <div className="flex justify-center items-center flex-col">
              <h3 className="font-bold ">Design & Development</h3>
              <p className="text-[#000000] ">50+ Courses Available</p>
            </div>
          </div>

        
          <div className="bg-[#F7F7F7] shadow rounded p-6 flex items-center space-x-4 h-[132px] w-[410.67px]">
            <div className="h-100 w-100 flex items-center justify-center bg-gray-200 rounded-md">
              <Image src="/image/Frame2.png" alt="Design" className="h-[100px] w-[100px]" />
            </div>
            <div>
              <h3 className="font-bold">Marketing</h3>
              <p className="text-[#000000] text-sm">50+ Courses Available</p>
            </div>
          </div>

          
          <div className="bg-[#F7F7F7] shadow rounded p-6 flex items-center space-x-4  h-[132px] w-[410.67px]">
            <div className="h-100 w-100 flex items-center justify-center bg-gray-200 rounded-md">
              <img src="/image/Frame3.png" alt="Data Science" className="h-[100px] w-[100px]" />
            </div>
            <div>
              <h3 className="font-bold">Development</h3>
              <p className="text-[#000000] text-sm">50+ Courses Available </p>
            </div>
          </div>
        

          
        <div className="bg-[#F7F7F7] shadow rounded p-6 flex items-center space-x-4 h-[132px] w-[410.67px] ">
            <div className="h-100 w-100 flex items-center justify-center bg-gray-200 rounded-md">
              <Image src="/image/Frame4.png" alt="Web Development" className="h-[100px] w-[100px]" />
            </div>
            <div>
              <h3 className="font-bold">Communication</h3>
              <p className="text-[#000000] text-sm">50+ Courses Available</p>
            </div>
          </div>

        
          <div className="bg-[#F7F7F7] shadow rounded p-6 flex items-center space-x-4 h-[132px] w-[410.67px] ">
            <div className="h-100 w-100 flex items-center justify-center bg-gray-200 rounded-md">
              <img src="/image/Frame5.png" alt="Design" className="h-[100px] w-[1p0px]" />
            </div>
            <div>
              <h3 className="font-bold">Digital Marketing</h3>
              <p className="text-[#000000] text-sm">50+ Courses Available </p>
            </div>
          </div>

          
          <div className="bg-[#F7F7F7] shadow rounded p-6 flex items-center space-x-4  h-[132px] w-[410.67px]">
            <div className="h-100 w-100 flex items-center justify-center bg-gray-200 rounded-md">
              <img src="/image/Frame6.png" alt="Data Science" className="h-[100px] w-[100px]" />
            </div>
            <div>
              <h3 className="font-bold">Self Development</h3>
              <p className="text-[#000000] text-sm">50+ Courses Available</p>
            </div>
          </div>
        
         
         <div className="bg-[#F7F7F7] shadow rounded p-6 flex items-center space-x-4  h-[132px] w-[410.67px]">
           <div className="h-100 w-100 flex items-center justify-center bg-gray-200 rounded-md">
             <img src="/image/Frame7.png" alt="Web Development" className="h-[100px] w-[100px]" />
           </div>
           <div>
             <h3 className="font-bold">Business</h3>
             <p className="text-[#000000] text-sm">50+ Courses Available</p>
           </div>
         </div>

       
          <div className="bg-[#F7F7F7] shadow rounded p-6 flex items-center space-x-4  h-[132px] w-[410.67px]">
           <div className="h-100 w-100 flex items-center justify-center bg-gray-200 rounded-md">
             <Image src="/image/Frame7.png" alt="Design" className="h-[100px] w-[100px]" />
           </div>
           <div>
             <h3 className="font-bold">Finance</h3>
             <p className="text-[#000000] text-sm">50+ Courses Available</p>
           </div>
         </div>

         
         <div className="bg-[#F7F7F7] shadow rounded p-6 flex items-center space-x-4  h-[132px] w-[410.67px]">
           <div className="h-[100px] w-[100px] flex items-center justify-center bg-gray-200 rounded-md">
             <Image src="/image/Frame8.png" alt="Data Science" className="h-[100px] w-[100px]" />
           </div>
           <div>
             <h3 className="font-bold">Consulting</h3>
             <p className="text-[#000000] text-sm">50+ Courses Available</p>
           </div>
         </div>
                    
        <div className="flex justify-center mt-8">
          <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">
            View All Courses
          </button>
        </div>
      </div>
</div>      
</div>
    
  )
}

export default course;
