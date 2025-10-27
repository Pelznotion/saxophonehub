import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center 
    justify-center container mx-auto p-14
     md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoratiob-1 under font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Raising music stars! Blowing Rhythm of excellence{" "}
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.jerry}
          alt=""
          className="w-full sm:w-1/2 max-w-lg rounded-tl-lg rounded-tr-[48px]"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p> 20+</p>
              <p>Years ofExperience</p>
            </div>
            <div>
              <p> 8+</p>
              <p>Classes Completed</p>
            </div>
            <div>
              <p> 5+</p>
              <p>International Collaborations</p>
            </div>
            <div>
              <p> 7+</p>
              <p>Ongoing Classes and Events</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            At SaxophoneHub, we are dedicated to helping aspiring saxophonists
            of all ages achieve their full musical potential. With a commitment
            to excellence, we provide comprehensive, personalized training
            designed to nurture both beginners and advanced players. Our expert
            instructors offer tailored lessons that focus on mastering
            technique, enhancing performance, and developing a deep
            understanding of music theory. Whether you're just starting out or
            refining your craft, SaxophoneHub offers a structured yet creative
            environment to guide you on your journey toward becoming a top-tier
            saxophonist. Join us and elevate your saxophone skills to the next
            level.
          </p>
          <button className="bg-black text-orange-400 px-8 py-2 rounded">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
