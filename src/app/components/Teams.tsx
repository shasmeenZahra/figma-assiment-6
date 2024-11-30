import React from "react";
import Image from "next/image";
import { FaDribbble } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Teams = () => {
  return (
    <div className="w-full bg-[#F7F7F7] py-8 px-4 flex justify-center items-center">
      <div className="max-w-[1280px] w-full text-center">
        {/* Heading and Description */}
        <h1 className="text-4xl font-bold">Our Team</h1>
        <p className="text-gray-700 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Team Members */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
            <Image src="/image/pic1.png" alt="James Nduku" width={80} height={80} />
            <h3 className="font-bold mt-3">James Nduku</h3>
            <p>Marketing Coordinator</p>
            <div className="flex space-x-4 text-xl mt-3">
              <FaTwitter />
              <FaLinkedin />
              <FaDribbble />
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <Image src="/image/pic2.png" alt="Joseph Munyambu" width={80} height={80} />
            <h3 className="font-bold mt-3">Joseph Munyambu</h3>
            <p>Nursing Assistant</p>
            <div className="flex space-x-4 text-xl mt-3">
              <FaTwitter />
              <FaLinkedin />
              <FaDribbble />
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center">
            <Image src="/image/pic3.png" alt="Joseph Ngumbau" width={80} height={80} />
            <h3 className="font-bold mt-3">Joseph Ngumbau</h3>
            <p>Medical Assistant</p>
            <div className="flex space-x-4 text-xl mt-3">
              <FaTwitter />
              <FaLinkedin />
              <FaDribbble />
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="flex flex-col items-center">
            <Image src="/image/pic4.png" alt="Erick Kipkemboi" width={80} height={80} />
            <h3 className="font-bold mt-3">Erick Kipkemboi</h3>
            <p>Web Designer</p>
            <div className="flex space-x-4 text-xl mt-3">
              <FaTwitter />
              <FaLinkedin />
              <FaDribbble />
            </div>
          </div>

          {/* Team Member 5 */}
          <div className="flex flex-col items-center">
            <Image src="/image/pic5.png" alt="Stephen Kerubo" width={80} height={80} />
            <h3 className="font-bold mt-3">Stephen Kerubo</h3>
            <p>President of Sales</p>
            <div className="flex space-x-4 text-xl mt-3">
              <FaTwitter />
              <FaLinkedin />
              <FaDribbble />
            </div>
          </div>

          {/* Team Member 6 */}
          <div className="flex flex-col items-center">
            <Image src="/image/pic6.png" alt="John Leboo" width={80} height={80} />
            <h3 className="font-bold mt-3">John Leboo</h3>
            <p>Dog Trainer</p>
            <div className="flex space-x-4 text-xl mt-3">
              <FaTwitter />
              <FaLinkedin />
              <FaDribbble />
            </div>
          </div>
        </div>

        {/* View All Button */}
        <button className="mt-8 px-6 py-2 border border-black rounded-md text-sm font-semibold hover:bg-black hover:text-white transition-all">
          View All
        </button>
      </div>
    </div>
  );
};

export default Teams;
