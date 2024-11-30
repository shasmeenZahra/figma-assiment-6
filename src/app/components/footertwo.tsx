import Image from "next/image";
import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const FooterTwo = () => {
  return (
    <div className="w-full bg-[#FFFFFF] px-4 py-8 flex justify-center items-center">
      <div className="max-w-[1120px] w-full">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
          <div>
            <h3 className="text-lg font-bold">Subscribe to our newsletter</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-full md:w-[400px]">
            <form className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <input
                className="w-full md:w-[265px] h-[48px] border border-black rounded-md px-4 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                type="email"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="w-full md:w-[135px] h-[48px] bg-black text-white rounded-md text-sm font-semibold"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-xs">
              By subscribing you agree to our{" "}
              <span className="underline text-black cursor-pointer">
                Privacy Policy
              </span>.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-11 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-start">
            <Image src="/image/logo.jpg" alt="logo" width={130} height={40} />
          </div>

          <div>
            <h3 className="font-bold mb-2">Courses</h3>
            <ul className="space-y-1">
              <li>Business</li>
              <li>Development</li>
              <li>Technology</li>
              <li>Design</li>
              <li>Programming</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">Resources</h3>
            <ul className="space-y-1">
              <li>Career</li>
              <li>Resume</li>
              <li>Learning</li>
              <li>Interview Preparation</li>
              <li>Jobs</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">About Us</h3>
            <ul className="space-y-1">
              <li>Contact</li>
              <li>Help/Support</li>
              <li>FAQ</li>
              <li>Terms and Conditions</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-black w-full mt-11"></div>

        {/* Footer Bottom Section */}
        <div className="mt-4 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Left Section */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center md:text-left">
            <p>2023 Ddsgnr. All rights reserved.</p>
            <p className="underline cursor-pointer">Privacy Policy</p>
            <p className="underline cursor-pointer">Terms of Service</p>
            <p className="underline cursor-pointer">Cookies Settings</p>
          </div>

          {/* Right Section */}
          <div className="flex space-x-4 text-xl justify-center md:justify-end">
            <BiLogoFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTwo;
