import React from "react";

const Course = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto text-center px-4">
        {/* Heading Section */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Explore Courses By Category
        </h2>
        <p className="text-gray-700 mb-8 text-sm md:text-base">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-100 shadow rounded p-6 flex items-center space-x-4 h-auto">
            <div className="flex items-center justify-center w-[100px] h-[100px] bg-gray-200 rounded-md">
              <img src="/image/Frame1.png" alt="Design & Development" className="h-[100px] w-[100px]" />
            </div>
            <div>
              <h3 className="font-bold">Design & Development</h3>
              <p className="text-gray-600 text-sm">50+ Courses Available</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 shadow rounded p-6 flex items-center space-x-4 h-auto">
            <div className="flex items-center justify-center w-[100px] h-[100px] bg-gray-200 rounded-md">
              <img src="/image/Frame2.png" alt="Marketing" className="h-[100px] w-[100px]" />
            </div>
            <div>
              <h3 className="font-bold">Marketing</h3>
              <p className="text-gray-600 text-sm">50+ Courses Available</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 shadow rounded p-6 flex items-center space-x-4 h-auto">
            <div className="flex items-center justify-center w-[100px] h-[100px] bg-gray-200 rounded-md">
              <img src="/image/Frame3.png" alt="Development" className="h-[100px] w-[100px]" />
            </div>
            <div>
              <h3 className="font-bold">Development</h3>
              <p className="text-gray-600 text-sm">50+ Courses Available</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-100 shadow rounded p-6 flex items-center space-x-4 h-auto">
            <div className="flex items-center justify-center w-[100px] h-[100px] bg-gray-200 rounded-md">
              <img src="/image/Frame4.png" alt="Communication" className="h-[100px] w-[100px]" />
            </div>
            <div>
              <h3 className="font-bold">Communication</h3>
              <p className="text-gray-600 text-sm">50+ Courses Available</p>
            </div>
          </div>

          {/* Repeat cards as needed */}
          {/* Card 5 */}
          <div className="bg-gray-100 shadow rounded p-6 flex items-center space-x-4 h-auto">
            <div className="flex items-center justify-center w-[100px] h-[100px] bg-gray-200 rounded-md">
              <img src="/image/Frame5.png" alt="Digital Marketing" className="h-[100px] w-[100px]" />
            </div>
            <div>
              <h3 className="font-bold">Digital Marketing</h3>
              <p className="text-gray-600 text-sm">50+ Courses Available</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-gray-100 shadow rounded p-6 flex items-center space-x-4 h-auto">
            <div className="flex items-center justify-center w-[100px] h-[100px] bg-gray-200 rounded-md">
              <img src="/image/Frame6.png" alt="Self Development" className="h-[100px] w-[100px]" />
            </div>
            <div>
              <h3 className="font-bold">Self Development</h3>
              <p className="text-gray-600 text-sm">50+ Courses Available</p>
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex justify-center mt-8">
          <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
