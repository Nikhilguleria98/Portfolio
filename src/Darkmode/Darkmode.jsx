import React from "react";
import { motion } from "framer-motion";


const Darkmode = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="relative w-20 h-10 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center transition-all duration-300"
      aria-label="Toggle theme"
    >
      {/* Slider Circle */}
      <motion.div
        className="absolute w-8 h-8 bg-yellow-400 dark:bg-gray-900 rounded-full shadow-md transform"
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
  );
};

export default Darkmode;
