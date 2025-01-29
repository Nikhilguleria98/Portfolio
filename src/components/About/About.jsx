import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaPenNib, FaProjectDiagram, FaRocket } from "react-icons/fa";
import Skills from "../Skill/Skill";
import AcademicSection from "../Academic section/Academic";

function About() {
  return (
    <>
      <div id="about" className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-12 text-black dark:text-white bg-zinc-100 dark:bg-gradient-to-b from-gray-900 to-black">
        {/* Header */}
        <motion.h1
          className="text-[6vh] sm:text-[8vh] md:text-[4vw] text-center font-extrabold mt-10 text-teal-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Passion Fuels Purpose!
        </motion.h1>

        {/* Content Section */}
        <motion.div
          className="flex flex-col md:flex-row mt-12 gap-10 md:gap-[10vw] w-full items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Biography */}
          <motion.div className="flex-1 max-w-xl text-center md:text-left md:pr-4">
            <h2 className="text-3xl font-semibold text-yellow-400">BIOGRAPHY</h2>
            <p className="mt-4 text-black dark:text-white">
              Hi, I'm <span className="text-teal-400">Nikhil Guleria</span>, a passionate Front-End Developer with an eye for detail and a love for UI/UX design. I specialize in crafting interactive and accessible web applications using modern technologies like React.js and Next.js.
            </p>
            <p className="mt-4 text-black dark:text-white">
              Over the years, I've worked on several impactful projects, including a **Blood Bank Management System** and a **Cloth Recycling Website**, which solidified my enthusiasm for tech-driven problem-solving.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex justify-center md:pl-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-64 h-64 rounded-xl overflow-hidden border-4 border-teal-400 shadow-lg">
              <img src="Image.jpeg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </motion.div>

        {/* Experience & Services */}
        <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="text-center p-6 bg-gray-800 rounded-lg shadow-lg">
            <FaCode className="text-4xl text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-teal-400">Frontend Development</h3>
            <p className="text-gray-300 mt-2">Building modern, scalable, and responsive web applications with React.js and Next.js.</p>
          </div>
          <div className="text-center p-6 bg-gray-800 rounded-lg shadow-lg">
            <FaLaptopCode className="text-4xl text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-teal-400">UI/UX Design</h3>
            <p className="text-gray-300 mt-2">Creating intuitive user interfaces with seamless user experiences.</p>
          </div>
          <div className="text-center p-6 bg-gray-800 rounded-lg shadow-lg">
            <FaPenNib className="text-4xl text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-teal-400">Content Writing</h3>
            <p className="text-gray-300 mt-2">Blending creativity and technology to write compelling and engaging content.</p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div className="flex flex-wrap justify-center gap-8 mt-12 w-full max-w-4xl">
          <div className="text-center text-black dark:text-white">
            <h3 className="text-3xl font-bold text-yellow-400">5+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="text-center text-black dark:text-white">
            <h3 className="text-3xl font-bold text-yellow-400">100%</h3>
            <p>Learning Enthusiasm</p>
          </div>
          <div className="text-center text-black dark:text-white">
            <h3 className="text-3xl font-bold text-yellow-400">∞</h3>
            <p>Growth Potential</p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-teal-400">Let's Work Together!</h2>
          <p className="text-black dark:text-white mt-4">Looking to build something amazing? I'm available for freelance and full-time opportunities.</p>
          <a href="#contact" className="mt-4 inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition-all duration-300">
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Skills & Academics */}
      <Skills />
      <AcademicSection />
    </>
  );
}

export default About;
