import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { HiXMark } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        className="sticky top-0 z-50 w-full"
        style={{
          backdropFilter: "blur(10px)", // Adds the glass effect
          backgroundColor: "rgba(255, 255, 255, 0.2)", // Transparent glass background
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Soft shadow for depth
          overflowX: "hidden", // Prevent horizontal scroll behind the navbar
        }}
      >
        <div className="flex justify-between px-4 md:px-16 py-5 items-center text-white">
          <div>Nikhil Guleria</div>
          <div>
            <ul className="hidden md:flex gap-10">
              <li className="hover:text-gray-300 transition-colors">Home</li>
              <li className="hover:text-gray-300 transition-colors">About</li>
              <li className="hover:text-gray-300 transition-colors">Projects</li>
              <li className="hover:text-gray-300 transition-colors">Contact</li>
            </ul>
          </div>
          <div>dark/light</div>
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
                {isMenuOpen ? <HiXMark className="text-xl font-bold"/> : <FaBarsStaggered />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="bg-gray-800 text-black p-4 px-10 flex md:hidden flex-col w-2/3 h-2/3 fixed"
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
            <button
              className="text-xl font-bold absolute right-6 top-6 hover:text-gray-400"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
             
             
            </button>
            <motion.ul
              className="flex flex-col gap-6 justify-center items-center mt-20"
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
                  {item}
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
