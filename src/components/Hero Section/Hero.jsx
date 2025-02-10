import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import "../../index.css";
import { useTheme } from "../../ThemeContext";

const Home = ({ isImageRounded = false, isHover = true }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      className="relative flex flex-col-reverse gap-8 md:gap-0 md:flex-row items-center justify-center min-h-screen px-6 md:px-16 lg:px-24 text-black dark:text-white bg-zinc-100 dark:bg-black pb-10 pt-12"
    >
      {/* Left Section */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Hello! I'm <span className="text-yellow-400">Nikhil</span>
        </h1>
        <div className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2 text-teal-300">
          <Typewriter
            options={{
              strings: ["Frontend Developer", "UI/UX Enthusiast", "React & Next.js Expert"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="text-base sm:text-lg text-black dark:text-white mt-4 max-w-lg leading-relaxed">
          I build elegant and responsive web applications using modern technologies like React.js, Next.js, Tailwind CSS, and more.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
          <a
            href="#contact"
            className="px-5 py-3 sm:px-6 sm:py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-500 transition-all duration-300"
          >
            Hire Me
          </a>
          <a
            href="/Nikhil's Resume.pdf"
            download={"Nikhil Gukeria's Resume.pdf"}
            className="px-5 py-3 sm:px-6 sm:py-3 dark:border-2 dark:border-white border-2 border-gray-300  rounded-full font-semibold hover:bg-yellow-500 duration-300 hover:text-black transition-all "
          >
            Download Resume
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 sm:gap-6 mt-6 justify-center md:justify-start text-lg sm:text-xl">
          <a href="https://www.linkedin.com/in/nikhil-guleria/" target="_main" className="hover:text-yellow-400 transition-all duration-300">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Nikhilguleria98" target="_main" className="hover:text-yellow-400 transition-all duration-300">
            <FaGithub />
          </a>
          {/* <a href="https://twitter.com" className="hover:text-yellow-400 transition-all duration-300">
            <FaTwitter />
          </a> */}
          <a href="mailto:nikhil@example.com" target="_main" className="hover:text-yellow-400 transition-all duration-300">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>

      {/* Right Section (Image + Effects) */}
      <motion.div
        className="md:w-1/2 flex justify-center mt-12 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div
          className={`relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full shadow-xl border-4 border-yellow-400 ${
            isHover ? "hover:scale-110 transition-all duration-500" : ""
          }`}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="/developer.webp"
            alt="Nikhil"
            className="w-full h-full object-cover"
            style={{
              transition: "transform 0.3s ease",
              transform: `
                rotateY(${mousePosition.x * 15}deg) 
                rotateX(${-mousePosition.y * 15}deg) 
                scale(${isHover ? 1.1 : 1})
              `,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;