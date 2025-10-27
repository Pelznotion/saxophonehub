import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/front.png') " }}
      id="Header"
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto py-4 px 6 md:px-20 lg:px-32 text-white"
      >
        <h2 className="text-3xl sm:text-8xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          Welcome to where Champions are made!
        </h2>
        <div className="space-x-6 mt-16 ">
          <a
            href="#Projects"
            className="border border-white px-8 py-3 rounded transition-all duration-300 hover:bg-white hover:text-black"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="border bg-orange-600 px-8 py-3 rounded transition-all duration-300 hover:bg-orange-700 hover:border-orange-700"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
