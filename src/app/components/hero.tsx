import React from "react";


const hero = () => {
 
  return (
    <section className="flex flex-col md:flex-row items-center py-16 px-6 md:px-16 bg-white">
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Learn new skills <br />
          online with ease
        </h1>
        <p className="text-gray-600 mb-8 text-sm md:text-lg">
          Discover a wide range of courses covering a variety of <br className="hidden md:block" />
          subjects &#44; taught by expert instructors.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-md text-sm md:text-base">
            Start learning now
          </button>
          <button className="border border-black text-black px-6 py-3 rounded-md text-sm md:text-base">
            Explore Courses
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1">
        <img
          src="/image/image.png"
          alt="Learning Illustration"
          className="w-full max-w-[500px] mx-auto md:mx-0"
        />
      </div>
    </section>
  );
}
export default hero


