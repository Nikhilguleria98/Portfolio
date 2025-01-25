import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../index.css";
import { useTheme } from "../../ThemeContext";


const Hero = ({ isImageRounded = false, isHover = true }) => {
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
      id="home"
      className=" min-h-screen  flex flex-col md:flex-row items-center justify-center px-4 md:px-16 gap-5 relative pt-[6rem] md:pt-[2rem] overflow-hidden  text-black dark:text-white bg-teal-50 dark:bg-zinc-800"
      style={{
        // backgroundColor: "#060717",
        marginTop: "-5rem", // Adjust this based on the Navbar height
        // paddingTop: "4rem", // Match the height of the Navbar
      }}
    >


      {/*Left  Section */}
      <motion.div
  className="md:w-1/2 flex justify-center items-center md:mt-20"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
  variants={rightSectionVariant}
>
  <div
    className={`relative w-full cursor-pointer ${
      isHover ? " " : ""
    } rounded-lg overflow-hidden max-w-[28rem] md:h-[28rem]`}
    style={{
      perspective: "1000px",
      transition: "box-shadow 0.3s ease",
    }}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
  >
    <img
      src="/developer.webp"
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

      {/* Right  Section */}
      <motion.div
        className="md:w-1/2 text-center md:text-left mb-6 md:mb-0 md:mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariant}
      >
        <motion.h1
          className="text-[6vh] sm:text-[8vh] md:text-[4vw] font-bold   inline-block "
          variants={itemVariant}
        >
          Hello! I'm Nikhil
        </motion.h1>
        <motion.p
          className="text-[6vh] sm:text-[8vh] md:text-[4vw] font-bold "
          variants={itemVariant}
        >
          Front End Developer
        </motion.p>
        <motion.p
          className="text-[2.7vh] md:text-[2.5vh] leading-relaxed p-4 md:p-0"
          variants={itemVariant}
        >
          "Hi, I'm Nikhil, a passionate Front-End Developer focused on creating
          beautiful and user-friendly web experiences. I specialize in building
          responsive, interactive websites that are both functional and
          visually appealing."
        </motion.p>

        
      <motion.div className="flex justify-center md:justify-start mt-5 gap-4" variants={itemVariant}>
  <button className="relative md:hidden block p-3 border-2 rounded-lg overflow-hidden group">
    <span className="relative z-10  group-hover:text-black transition duration-300 text-black dark:text-white">Hire me</span>
    <span className="absolute inset-0 bg-teal-400 scale-0 group-hover:scale-125 rounded-full transition-transform duration-500 ease-out "></span>
  </button>
  <button className="relative p-3 border-2 rounded-lg overflow-hidden group">
    <span className="relative z-10  group-hover:text-black transition duration-300 text-black dark:text-white  ">Download Resume</span>
    <span className="absolute inset-0 bg-teal-400 scale-0 group-hover:scale-125 rounded-full transition-transform duration-500 ease-out"></span>
  </button>
</motion.div>


{/* <motion.div className="flex justify-center md:justify-start mt-5 gap-4" variants={itemVariant}>
<StarBorder
  as="button"
  className="custom-class md:hidden block "
  color="cyan"
  speed="5s"
>
  Hire me
</StarBorder>
<StarBorder
  as="button"
  className="custom-class "
  color="cyan"
  speed="5s" 
>
  Download Resume
</StarBorder>
</motion.div> */}

      </motion.div>



      <div className="absolute bottom-8 right-8 md:fixed z-50">
      <div className="h-36 w-36 hidden md:flex justify-center items-center rounded-full relative">
        <div
          className={`h-20 w-20 border border-black rounded-full flex justify-center items-center font-bold hover:bg-black hover:text-white cursor-pointer duration-200 ${
            theme === "light"
              ? "text-black bg-zinc-100" // Light mode styles
              : "text-white bg-zinc-900" // Dark mode styles
          }`}
        >
          Hire Me
        </div>
        <svg
          className="absolute w-full h-full animate-spin-slow cursor-pointer pointer-events-none"
          viewBox="0 0 150 150"
        >
          <defs>
            <path
              id="circlePath"
              d="M 75, 75 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
            />
          </defs>
          <text
            fill={theme === "light" ? "black" : "white"} // Adjust text color based on theme
            fontSize="26"
            fontWeight="bold"
          >
            <textPath href="#circlePath" textAnchor="middle" startOffset="50%">
              Web Developer
            </textPath>
          </text>
        </svg>
      </div>
    </div>





    </div>
  );
};

export default Hero;
