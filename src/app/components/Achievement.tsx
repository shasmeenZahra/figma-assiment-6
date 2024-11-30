import React from "react";

const Achievement = () => {
  return (
    <div className="w-full">
      <section className="text-center py-16 px-4 md:px-8 bg-white">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-4xl font-bold mb-6">Our Achievements</h2>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-10">
          Lorem ipsum dolor sit amet &#44; consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          Duis cursus &#44; mi quis viverra ornare &#44; eros dolor interdum nulla &#44; ut commodo diam libero vitae erat.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 justify-center items-center">
          <div className="flex flex-col items-center">
            <h3 className="text-3xl md:text-4xl font-bold">+200</h3>
            <p className="text-gray-600 text-sm md:text-base">Courses</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-3xl md:text-4xl font-bold">50K</h3>
            <p className="text-gray-600 text-sm md:text-base">Mentors</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-3xl md:text-4xl font-bold">370k</h3>
            <p className="text-gray-600 text-sm md:text-base">Students</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-3xl md:text-4xl font-bold">100+</h3>
            <p className="text-gray-600 text-sm md:text-base">Recognition</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievement;
