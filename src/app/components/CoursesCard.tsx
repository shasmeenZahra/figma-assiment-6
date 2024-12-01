import React from "react";
import Image from "next/image";

const Courses = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center">Courses</h1>
      <p className="text-center text-gray-500 mt-2">
        Your Ultimate Guide to Learning
      </p>

      {/* Tab Section */}
      <div className="flex justify-center mt-6 space-x-6">
        <button className="border-b-2 border-black pb-2">Popular</button>
        <button className="text-gray-500">Recommended</button>
        <button className="text-gray-500">Best Price</button>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">


        
        <div className=" bg-white  overflow-hidden ">
          <Image
            src="/image/image1.png"
            alt="UX/UI Design 201"
            width={400}
            height={300}
            className="w-full h-[200px] object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Design</span>
              <span className="text-black">
              <Image
              src="/image/Star.png"
              alt="star logo"
              height={24}
              width={48}
              />
            </span>
              
            </div>
            <h3 className="text-lg font-bold mt-2">UX/UI Design 201</h3>
            <p className="text-sm text-gray-500 mt-1">
              Lorem ipsum dolor sit amet &#44; consectetur adipiscing elit.
            </p>
            <div className="flex justify-between items-center mt-4">
              <button className=" hover:bg-blue-100 text-black px-4 py-2 border border-black rounded-md">
                Enroll Now
              </button>
              <span className="text-gray-800 font-bold">$400</span>
            </div>
          </div>
        </div>

        
        {/* Card 2 */}
        <div className=" bg-white  overflow-hidden">
          <Image
            src="/image/image2.png"
            alt="Introduction to Python"
            width={400}
            height={300}
            className="w-full h-[200px] object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Programming</span>
              <span className="text-black">
              <Image
              src="/image/Star.png"
              alt="star logo"
              height={24}
              width={48}
              />
            </span>
            </div>
            <h3 className="text-lg font-bold mt-2">Introduction to Python</h3>
            <p className="text-sm text-gray-500 mt-1">
              Lorem ipsum dolor sit amet &#44; consectetur adipiscing elit.
            </p>
            <div className="flex justify-between items-center mt-4">
              <button className="hover:bg-blue-100 text-black px-4 py-2 border border-black rounded-md">
                Enroll Now
              </button>
              <span className="text-gray-800 font-bold">$400</span>
            </div>
          </div>
        </div>
           {/* cart 3 */}
        <div className=" bg-white  overflow-hidden">
          <Image
            src="/image/image3.png"
            alt="Introduction to Python"
            width={400}
            height={300}
            className="w-full h-[200px] object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Business</span>
              <span className="text-black">
              <Image
              src="/image/Star.png"
              alt="star logo"
              height={24}
              width={48}
              />
            </span>
            </div>
            <h3 className="text-lg font-bold mt-2">Data Analysis for Beginners</h3>
            <p className="text-sm text-gray-500 mt-1">
              Lorem ipsum dolor sit amet &#44; consectetur adipiscing elit.
            </p>
            <div className="flex justify-between items-center mt-4">
              <button className=" hover:bg-blue-100 text-black px-4 py-2 border border-black rounded-md ">
                Enroll Now
              </button>
              <span className="text-gray-800 font-bold">$400</span>
            </div>
          </div>
        </div> 
               {/*cart 4*/}
        <div className=" bg-white  overflow-hidden">
          <Image
            src="/image/image4.png"
            alt="Introduction to Python"
            width={400}
            height={300}
            className="w-full h-[200px] object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Art</span>
              <span className="text-black">
              <Image
              src="/image/Star.png"
              alt="star logo"
              height={24}
              width={48}
              />
            </span>
            </div>
            <h3 className="text-lg font-bold mt-2">Art Specialization</h3>
            <p className="text-sm text-gray-500 mt-1">
              Lorem ipsum dolor sit amet &#44; consectetur adipiscing elit.
            </p>
            <div className="flex justify-between items-center mt-4">
              <button className="hover:bg-blue-100 text-black px-4 py-2 border border-black rounded-md">
                Enroll Now
              </button>
              <span className="text-gray-800 font-bold">$400</span>
            </div>
          </div>
        </div>
{/* card 5*/}
        <div className=" bg-white overflow-hidden">
          <Image
            src="/image/image5.png"
            alt="Introduction to Python"
            width={400}
            height={300}
            className="w-full h-[200px] object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Law</span>
              <span className="text-black">
              <Image
              src="/image/Star.png"
              alt="star logo"
              height={24}
              width={48}
              />
            </span>
            </div>
            <h3 className="text-lg font-bold mt-2">Rule of Law</h3>
            <p className="text-sm text-gray-500 mt-1">
              Lorem ipsum dolor sit amet &#44; consectetur adipiscing elit.
            </p>
            <div className="flex justify-between items-center mt-4">
              <button className="  hover:bg-blue-100 text-black px-4 py-2 border border-black rounded-md ">
                Enroll Now
              </button>
              <span className="text-gray-800 font-bold">$400</span>
            </div>
          </div>
        </div>
{/* card 6 */}
        <div className=" bg-white overflow-hidden">
          <Image
            src="/image/image6.png"
            alt="Introduction to Python"
            width={400}
            height={300}
            className="w-full h-[200px] object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Tech</span>
              <span className="text-black">
              <Image
              src="/image/Star.png"
              alt="star logo"
              height={24}
              width={48}
              />
            </span>
            </div>
            <h3 className="text-lg font-bold mt-2">Introduction to webflow</h3>
            <p className="text-sm text-gray-500 mt-1">
              Lorem ipsum dolor sit amet &#44; consectetur adipiscing elit.
            </p>
            <div className="flex justify-between items-center mt-4">
              <button className=" hover:bg-blue-100 text-black px-4 py-2 border border-black rounded-md ">
                Enroll Now
              </button>
              <span className="text-gray-800  font-bold">$400</span>
            </div>
          </div>
        </div>
        
      </div>
      

      
      <div className="flex justify-center mt-12">
        <button className="border border-black px-6 py-2 rounded-lg hover:bg-gray-200">
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default Courses;
