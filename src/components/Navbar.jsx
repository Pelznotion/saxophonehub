import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-20">
      {/* Desktop Navbar */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo_hub} className="w-32 h-32" alt="Logo" />

        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#Testimonials" className="hover:text-gray-400">
            Testimonials
          </a>
        </ul>

        {/* Register button with router link */}
        <Link to="/register">
          <button className="hidden md:block bg-white px-8 py-2 rounded-full font-semibold text-black hover:bg-orange-500 hover:text-white transition-all">
            Register Today
          </button>
        </Link>

        {/* Hamburger icon */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt="menu"
        />
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            key="mobileMenu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-95 text-white flex flex-col items-center justify-center space-y-8 z-30"
          >
            {/* Close Button */}
            <motion.button
              onClick={() => setShowMobileMenu(false)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute top-5 right-8 text-3xl font-bold text-orange-400 hover:text-white"
            >
              ✕
            </motion.button>

            <motion.a
              href="#Header"
              onClick={() => setShowMobileMenu(false)}
              className="text-xl hover:text-orange-400"
              whileHover={{ scale: 1.1 }}
            >
              Home
            </motion.a>

            <motion.a
              href="#About"
              onClick={() => setShowMobileMenu(false)}
              className="text-xl hover:text-orange-400"
              whileHover={{ scale: 1.1 }}
            >
              About
            </motion.a>

            <motion.a
              href="#Projects"
              onClick={() => setShowMobileMenu(false)}
              className="text-xl hover:text-orange-400"
              whileHover={{ scale: 1.1 }}
            >
              Projects
            </motion.a>

            <motion.a
              href="#Testimonials"
              onClick={() => setShowMobileMenu(false)}
              className="text-xl hover:text-orange-400"
              whileHover={{ scale: 1.1 }}
            >
              Testimonials
            </motion.a>

            <Link to="/register" onClick={() => setShowMobileMenu(false)}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-orange-500 px-8 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition-all"
              >
                Register Today
              </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
