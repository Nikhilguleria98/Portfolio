import React, { useState } from "react";
import { motion } from "framer-motion";

const Hero = ({ isImageRounded = false, isHover = true }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Track mouse movement on the image itself
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true); // Set hover state to true
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Set hover state to false and reset position
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div
      id="/"
      className="text-white min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-16 gap-5 mt-24 md:mt-0"
    >
      {/* Left Section */}
      <motion.div
        className="md:w-1/2 text-center md:text-left mb-6 md:mb-0 md:mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h1
          className="text-[10vw] md:text-[5vw] font-bold mb-4 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
        >
          Hello! I'm Nikhil
        </motion.h1>
        <motion.p className="text-[8vw] md:text-[4vw] font-bold mb-4">
          Front End Developer
        </motion.p>
        <motion.p className="text-[3vh] md:text-[3vh] leading-relaxed">
          "Hi, I'm Nikhil, a passionate Front-End Developer focused on creating
          beautiful and user-friendly web experiences."
        </motion.p>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="md:w-1/2 flex justify-center items-center md:mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div
          className={`relative w-full cursor-pointer 
          ${isHovered ? "border-2 shadow-xl hover:shadow-cyan-800" : ""}
          rounded-lg overflow-hidden max-w-[24rem] h-[27rem]`}
          style={{
            perspective: "1000px",
            transition: "box-shadow 0.3s ease",
          }}
        >
          <img
            src="/Image.jpeg"
            alt="Nikhil"
            className={`w-full h-full object-cover ${
              isImageRounded ? "rounded-full" : "rounded-lg"
            }`}
            style={{
              transition: "transform 0.3s ease",
              transform: `rotateY(${mousePosition.x * 25}deg) rotateX(${
                -mousePosition.y * 25
              }deg) scale3d(${isHovered ? 1.25 : 1}, ${
                isHovered ? 1.25 : 1
              }, ${isHovered ? 1.25 : 1})`,
              transformOrigin: "center center",
            }}
            onMouseMove={handleMouseMove} // Mouse move on image itself
            onMouseEnter={handleMouseEnter} // When hovering starts
            onMouseLeave={handleMouseLeave} // When hovering ends
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
