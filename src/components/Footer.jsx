import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-black w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_hub} className="w-28 h-28" alt="" />
          <p className="text-white  mt-2">
            At Saxophone Hub, we’re passionate about shaping skilled and soulful
            saxophonists. Through expert guidance, personalized training, and a
            love for music, we help every student find their unique sound and
            confidence to perform anywhere.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md;mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Saxophone Hub</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header" className="hover:text-white text-orange-400">
              Home
            </a>
            <a href="#About" className="hover:text-white text-orange-400">
              About Us
            </a>
            <a href="#Contact" className="hover:text-white text-orange-400">
              Contact us
            </a>
            <a href="#" className="hover:text-white text-orange-400">
              Privacy policy
            </a>
          </ul>
        </div>
        <div className="2-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-orange-400">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-white text-gray-800 border border-gray-700 focus:outline-none w-full md:w-auto"
              name=""
              id=""
            />
            <button className="py-2 px-4 rounded bg-orange-600 text-black">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 text-center text-white">
        Copyright 2025 @ Saxophonehub. All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
