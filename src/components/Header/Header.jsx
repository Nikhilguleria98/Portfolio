import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { HiXMark } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Staggered animation for menu items
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
      <nav className="bg-gray-800 text-white px-10 py-6 flex justify-between items-center">
        <div className="">Nikhil Guleria</div>
        <div>
          <ul className="hidden md:flex gap-10">
            <li>
              <a href="#home" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          dark/light
        </div>
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
              {isMenuOpen ? <HiXMark /> : <FaBarsStaggered />}
            </motion.div>
          </motion.button>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
          className="bg-gray-800 text-white p-4 flex md:hidden h-full flex-col w-1/2 absolute right-0 top-0 z-50"
          initial={{ clipPath: "circle(0% at 100% 0%)" }}
          animate={{ clipPath: "circle(150% at 100% 0%)" }}
          exit={{ clipPath: "circle(0% at 100% 0%)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Close button */}
          <button
            className="text-xl font-bold absolute right-6 top-6 hover:text-gray-400"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <HiXMark />
          </button>
          <motion.ul
            className="flex flex-col mt-20 gap-6"
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
                <a href={`#${item.toLowerCase()}`}>{item}</a>
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
