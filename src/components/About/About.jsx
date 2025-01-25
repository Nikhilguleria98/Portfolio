import React from 'react';
import { motion } from 'framer-motion'; // Importing Framer Motion
import Skills from '../Skill/Skill';

function AboutUs() {
  return (
   <>
   
   <div id='about' className="min-h-screen w-full  flex flex-col items-center justify-center p-6 text-black dark:text-white bg-zinc-100 dark:bg-zinc-900">
      {/* Animated Header */}
      <motion.h1
        className="text-[6vh] sm:text-[8vh] md:text-[4vw] text-center font-bold mt-10"
        initial={{ opacity: 0, y: 100 }} // Initial state (hidden and below the screen)
        whileInView={{ opacity: 1, y: 0 }}    // Trigger animation when in view
        transition={{ duration: 0.8 }}
      >
        Passion Fuels Purpose!
      </motion.h1>

      {/* Animated Main Content */}
      <motion.div
        className="flex flex-col md:flex-row mt-12 gap-8 md:gap-[10vw] w-full items-center justify-center"
        initial={{ opacity: 0, y: 100 }} // Initial state (hidden and below the screen)
        whileInView={{ opacity: 1, y: 0 }}    // Trigger animation when in view
        transition={{ duration: 0.8 }}
      >
        {/* Biography Section */}
        <motion.div
          className="flex-1 max-w-xl text-center md:text-left md:pr-4"
          initial={{ opacity: 0, y: 100 }} // Initial state (hidden and below the screen)
          whileInView={{ opacity: 1, y: 0 }}    // Trigger animation when in view
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl text-center font-semibold">BIOGRAPHY</h2>
          <p className="mt-4   text-black dark:text-white bg-zinc-100 dark:bg-zinc-900">
            Hi, I'm <span className="text-teal-400">Nikhil Guleria</span>, working as a Front-End Developer with a knack for crafting engaging and functional user interfaces. Alongside development, I also enjoy content writing, blending creativity with communication.
          </p>
          <p className="mt-4  text-black dark:text-white bg-zinc-100 dark:bg-zinc-900">
            During my college years, I worked on two impactful projects: a Blood Bank Management System and a Cloth Recycling Website. These experiences ignited my passion for solving real-world problems through technology and design.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center md:pl-4"
          initial={{ opacity: 0, y: 100 }} // Initial state (hidden and below the screen)
          whileInView={{ opacity: 1, y: 0 }}    // Trigger animation when in view
          transition={{ duration: 0.8 }}
        >
          <div className="w-64 h-64 rounded-lg overflow-hidden border-4 border-teal-400">
            <img
              src="Image.jpeg" // Replace with actual image link
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="flex flex-wrap justify-center lg:justify-between mt-12 gap-8 w-full max-w-4xl"
        initial={{ opacity: 0, y: 100 }} // Initial state (hidden and below the screen)
        whileInView={{ opacity: 1, y: 0 }}    // Trigger animation when in view
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <h3 className="text-3xl font-bold text-teal-400">5+</h3>
          <p className=" text-black dark:text-white">Projects Completed</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold text-teal-400">100%</h3>
          <p className=" text-black dark:text-white ">Learning Enthusiasm</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold text-teal-400">∞</h3>
          <p className=" text-black dark:text-white ">Growth Potential</p>
        </div>
      </motion.div>
    </div>

      <Skills/>
   </>
  );
}

export default AboutUs;
