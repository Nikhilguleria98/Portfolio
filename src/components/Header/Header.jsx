import React, { useState, useEffect } from "react";
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

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

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
        className="fixed top-0 z-50 w-full"
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "transparent",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="flex justify-between px-4 md:px-16 py-5 items-center text-black dark:text-white">
          <div className="font-sans font-bold text-xl cursor-pointer hover:text-yellow-500 duration-500">
            Nikhil Guleria
          </div>
          <div>
            <ul className="hidden md:flex gap-10 font-semibold">
              {["Home", "About", "Skills", "Work", "Contact"].map((item, index) => (
                <li key={index} className="hover:text-yellow-500 duration-300 transition-colors">
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="relative w-16 h-9 border border-teal-500 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center transition-all duration-300"
            aria-label="Toggle theme"
          >
            <motion.div
              className="absolute w-6 h-6 bg-yellow-400 dark:bg-gray-900 rounded-full shadow-md transform"
              layout
              initial={false}
              animate={{ x: theme === "light" ? 4 : 36 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              initial={{ rotate: 0 }}
              animate={{ rotate: isMenuOpen ? 135 : 0 }}
              transition={{ duration: 0.4 }}
            >
              {isMenuOpen ? <HiXMark className="text-xl font-bold" /> : <FaBarsStaggered />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
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
              transform: "translate(-50%, -50%)",
              zIndex: 60,
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <motion.ul
              className="flex flex-col gap-6 justify-center items-center text-md"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {["Home", "About", "Skills", "Work", "Contact"].map((item, index) => (
                <motion.li
                  key={index}
                  variants={menuItemVariants}
                  className="hover:text-yellow-500 duration-300"
                >
                  <a href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>
                    {item}
                  </a>
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
