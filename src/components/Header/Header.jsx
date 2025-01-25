import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { HiXMark } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../ThemeContext";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    open: {
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.1, staggerDirection: -1 },
    },
  };

  const menuItemVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 50 },
  };

  return (
    <>
      <nav
        className="sticky top-0 z-50 w-full "
        style={{
          backdropFilter: "blur(10px)", // Adds the glass effect
          backgroundColor: "rgba(255, 255, 255, 0.2)", // Transparent glass background
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Soft shadow for depth
          overflowX: "hidden", // Prevent horizontal scroll behind the navbar
        }}
      >
        <div className="flex justify-between px-4 md:px-16 py-5 items-center  text-black dark:text-white ">
          <div>Nikhil Guleria</div>
          <div>
            <ul className="hidden md:flex gap-10">
              <li className="hover:text-gray-300 transition-colors">
                <a href="#home">Home</a>
              </li>
              <li className="hover:text-gray-300 transition-colors">
                <a href="#about">About</a>
              </li>
              <li className="hover:text-gray-300 transition-colors">
                <a href="#projects">Projects</a>
              </li>
              <li className="hover:text-gray-300 transition-colors">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <button
            onClick={toggleTheme}
            className="relative w-16 h-9  bg-gray-300 dark:bg-gray-700 rounded-full flex items-center transition-all duration-300"
            aria-label="Toggle theme"
          >
            {/* Slider Circle */}
            <motion.div
              className="absolute w-7 h-7 bg-yellow-400 dark:bg-gray-900 rounded-full shadow-md transform"
              layout
              initial={false}
              animate={{ x: theme === "light" ? 4 : 36 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {/* Sun/Cloud for Light Mode */}
              {theme === "light" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Sun */}
                    <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                    {/* Clouds */}
                    <motion.div
                      className="absolute top-1/2 left-3 w-3 h-3 bg-white rounded-full"
                      animate={{ x: [0, 5, 0], opacity: [0.8, 1, 0.8] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    ></motion.div>
                    <motion.div
                      className="absolute top-1/2 left-6 w-2 h-2 bg-white rounded-full"
                      animate={{ x: [0, 4, 0], opacity: [0.8, 1, 0.8] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    ></motion.div>
                  </motion.div>
                </div>
              )}

              {/* Moon/Stars for Dark Mode */}
              {theme === "dark" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Moon */}
                    <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                    {/* Stars */}
                    <motion.div
                      className="absolute top-1 w-1 h-1 bg-white rounded-full"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    ></motion.div>
                    <motion.div
                      className="absolute top-3 right-3 w-1 h-1 bg-white rounded-full"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    ></motion.div>
                    <motion.div
                      className="absolute bottom-2 left-2 w-1 h-1 bg-white rounded-full"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    ></motion.div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </button>

          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              initial={{ rotate: 0 }}
              animate={{ rotate: isMenuOpen ? 135 : 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                style={{ display: "flex", alignItems: "center" }}
                animate={{ rotate: isMenuOpen ? 135 : 0 }}
              >
                <a  onClick={toggleMenu}>
                  {isMenuOpen ? <HiXMark className="text-xl font-bold" /> : <FaBarsStaggered />}
                </a>
              </motion.div>
            </motion.button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="bg-gray-800 text-black p-4 px-10 flex md:hidden flex-col w-2/3 h-1/2 fixed justify-center items-center"
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)", // Center the menu in the viewport
              zIndex: 60,
              backdropFilter: "blur(10px)", // Adds the glass effect
              backgroundColor: "rgba(255, 255, 255, 0.7)", // Transparent glass background
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Soft shadow for depth
              overflowX: "hidden", // Prevent horizontal scroll behind the navbar
            }}
          >
            <motion.ul
              className="flex flex-col gap-6 justify-center items-center"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {["Home", "About", "Projects", "Contact"].map((item, index) => (
                <motion.li
                  key={index}
                  variants={menuItemVariants}
                  className="hover:text-gray-400"
                >
                  <a href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>{item}</a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
