import React, { useState } from "react";
import { motion } from "framer-motion";

const Hero = ({ isImageRounded = false, isHover = true }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
          className="text-[10vw] md:text-[5vw] md:text-6xl font-bold mb-4  inline-block "
          variants={itemVariant}
        >
          Hello! I'm Nikhil
        </motion.h1>
        <motion.p
          className="text-[8vw] md:text-[4vw] font-bold mb-4"
          variants={itemVariant}
        >
          Front End Developer
        </motion.p>
        <motion.p
          className="text-[2.7vh] md:text-[2.5vh] leading-relaxed"
          variants={itemVariant}
        >
          "Hi, I'm Nikhil, a passionate Front-End Developer focused on creating
          beautiful and user-friendly web experiences. I specialize in building
          responsive, interactive websites that are both functional and
          visually appealing."
        </motion.p>
        <motion.div className="flex justify-center md:justify-start mt-5 gap-4" variants={itemVariant}>
          <button className="p-3 border-2 rounded-lg hover:scale-105 duration-200">
            Hire me
          </button>
          <button className="p-3 border-2 rounded-lg hover:scale-105 duration-200">
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
          className={`relative w-full cursor-pointer ${
            isHover ? "border-2 shadow-xl hover:shadow-cyan-800" : ""
          } rounded-lg overflow-hidden max-w-[24rem] h-[27rem]`}
          style={{
            perspective: "1000px",
            transition: "box-shadow 0.3s ease",
          }}
        >
          <img
            src="/myimg.jpg"
            alt="Nikhil"
            className={`w-full h-full object-cover ${
              isImageRounded ? "rounded-full" : "rounded-lg"
            }`}
            style={{
              transition: "transform 0.3s ease",
              transform: `
                rotateY(${mousePosition.x * 35}deg) 
                rotateX(${-mousePosition.y * 35}deg) 
                scale3d(${isHover ? 1.25 : 1}, ${isHover ? 1.25 : 1}, ${isHover ? 1.25 : 1})
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
