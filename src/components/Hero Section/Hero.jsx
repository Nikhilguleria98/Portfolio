import React, { useState } from "react";
import { motion } from "framer-motion";

const Hero = ({ isImageRounded = false, isHover = true }) => {
  // State to track mouse position for the 3D effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track the mouse movement on the image container
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  // Reset the mouse position when mouse leaves the container
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  const itemVariant = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const rightSectionVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div
      id="/"
      className="text-white min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-16 gap-5 mt-32 md:mt-0"
    >
      {/* Left Section */}
      <motion.div
        className="md:w-1/2 text-center md:text-left mb-6 md:mb-0 md:mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariant}
      >
        <motion.h1
          className="text-3xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
          variants={itemVariant}
        >
          Hello! I'm Nikhil
        </motion.h1>
        <motion.p
          className="text-3xl md:text-6xl font-bold mb-4"
          variants={itemVariant}
        >
          Front End Developer
        </motion.p>
        <motion.p
          className="text-sm md:text-base leading-relaxed"
          variants={itemVariant}
        >
          "Hi, I'm Nikhil, a passionate Front-End Developer focused on creating
          beautiful and user-friendly web experiences. I specialize in building
          responsive, interactive websites that are both functional and
          visually appealing."
        </motion.p>
        <motion.div className="flex mt-5 gap-4" variants={itemVariant}>
          <button className="p-3 bg-gradient-to-r from-blue-700 to-indigo-400 rounded-lg hover:scale-105 duration-200">
            Hire me
          </button>
          <button className="p-3 bg-gradient-to-r from-blue-600 to-indigo-400 rounded-lg hover:scale-105 duration-200">
            Download Resume
          </button>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="md:w-1/2 flex justify-center items-center md:mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={rightSectionVariant}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`
            relative w-full cursor-pointer max-h-[20rem] md:max-h-[27rem] md:w-96 md:h-[27rem] 
            ${isHover ? "border-2 shadow-xl hover:shadow-cyan-800 " : ""}
            rounded-lg overflow-hidden
          `}
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
            transition: "box-shadow 0.3s ease",
          }}
        >
          <img
            src="/myimg.jpg"
            alt="Nikhil"
            className={`
              w-full h-full object-cover ${isHover ? "hover:scale-105" : ""}
              ${isImageRounded ? "rounded-full" : "rounded-lg"}
            `}
            style={{
              transition: "transform 0.3s ease",
              transform: `
                rotateY(${mousePosition.x * 13}deg)
                rotateX(${-mousePosition.y * 13}deg)
                ${isHover ? "scale3d(1.05, 1.05, 1.05)" : ""}
              `,
              transformOrigin: "center center",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
